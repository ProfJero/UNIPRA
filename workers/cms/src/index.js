/**
 * UNIPRA staff functions.
 * Cloudflare Worker. The browser never holds the Supabase service role or the Cloudinary secret.
 */

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") return respond(env, null, 204);
    const url = new URL(request.url);
    try {
      if (url.pathname === "/v1/health") return respond(env, { ok: true, service: "upshs-cms" });
      if (url.pathname === "/v1/public" && request.method === "GET") return respond(env, await publicBundle(env));
      if (url.pathname === "/v1/session" && request.method === "POST") return respond(env, await createSession(env, await request.json()));
      if (url.pathname === "/v1/bootstrap" && request.method === "POST") return respond(env, await bootstrap(env, request));
      if (url.pathname === "/v1/enquiries" && request.method === "POST") return respond(env, await createEnquiry(env, await request.json()));
      if (url.pathname === "/v1/media/signature" && request.method === "POST") {
        const staff = await requireStaff(env, request, ["super", "admin", "editor", "media"]);
        return respond(env, await mediaSignature(env, staff));
      }
      return respond(env, { error: "Not found" }, 404);
    } catch (error) {
      const status = error.status || 500;
      return respond(env, { error: error.message || "Failed" }, status);
    }
  },
};

function respond(env, data, status = 200) {
  return new Response(data == null ? null : JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "access-control-allow-origin": env.ALLOWED_ORIGIN || "*",
      "access-control-allow-headers": "content-type, authorization, x-bootstrap-token",
      "access-control-allow-methods": "GET,POST,PATCH,DELETE,OPTIONS",
    },
  });
}

function fail(message, status) {
  const error = new Error(message);
  error.status = status;
  return error;
}

async function sb(env, path, init = {}) {
  if (!env.SUPABASE_URL || !env.SUPABASE_SERVICE_ROLE) throw fail("Supabase is not configured on the worker.", 500);
  const headers = new Headers(init.headers || {});
  headers.set("apikey", env.SUPABASE_SERVICE_ROLE);
  headers.set("authorization", `Bearer ${env.SUPABASE_SERVICE_ROLE}`);
  if (!headers.has("content-type") && init.body) headers.set("content-type", "application/json");
  const response = await fetch(`${env.SUPABASE_URL}/rest/v1/${path}`, { ...init, headers });
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) throw fail(data?.message || data?.error || "Supabase refused the request.", response.status);
  return data;
}

async function publicBundle(env) {
  const [articles, announcements, events, programmes, leaders, houses, milestones, albums, photos, pages, settingsRows] =
    await Promise.all([
      sb(env, "articles?status=eq.published&order=published_at.desc"),
      sb(env, "announcements?active=eq.true&order=published_at.desc"),
      sb(env, "events?visible=eq.true&order=starts_on.asc"),
      sb(env, "programmes?order=name.asc"),
      sb(env, "leaders?order=name.asc"),
      sb(env, "houses?order=name.asc"),
      sb(env, "milestones?order=sort.asc"),
      sb(env, "albums?order=title.asc"),
      sb(env, "photos?order=created_at.desc"),
      sb(env, "pages?select=*"),
      sb(env, "settings?id=eq.site"),
    ]);
  return {
    news: articles.map(mapArticle),
    announcements: announcements.map(mapAnnouncement),
    events: events.map(mapEvent),
    programmes: programmes.map(mapProgramme),
    leaders: leaders.map(mapLeader),
    houses: houses.map(mapHouse),
    milestones: milestones.map(mapMilestone),
    albums: albums.map((album) => ({
      ...mapAlbum(album),
      photos: photos.filter((photo) => photo.album_id === album.id).map(mapPhoto),
    })),
    pages: pages.map(mapPage),
    settings: settingsRows[0] ? mapSettings(settingsRows[0]) : undefined,
  };
}

async function createSession(env, body) {
  const email = String(body.email || "").trim().toLowerCase();
  const password = String(body.password || "");
  const rows = await sb(env, `staff_users?email=eq.${encodeURIComponent(email)}&active=eq.true`);
  const staff = rows[0];
  if (!staff || !(await verifyPassword(password, staff.password_hash))) throw fail("Those details were not accepted.", 401);
  const token = await signToken(env, { id: staff.id, email: staff.email, role: staff.role, name: staff.name, exp: Date.now() + 1000 * 60 * 60 * 12 });
  return { token, staff: { id: staff.id, email: staff.email, role: staff.role, name: staff.name } };
}

async function bootstrap(env, request) {
  if (!env.BOOTSTRAP_TOKEN || request.headers.get("x-bootstrap-token") !== env.BOOTSTRAP_TOKEN) {
    throw fail("Bootstrap token refused.", 401);
  }
  const body = await request.json();
  const email = String(body.email || "").trim().toLowerCase();
  const name = String(body.name || "").trim();
  const password = String(body.password || "");
  if (!email.includes("@") || name.length < 2 || password.length < 8) throw fail("Name, email and a password of 8 or more characters are required.", 400);
  const existing = await sb(env, `staff_users?email=eq.${encodeURIComponent(email)}`);
  if (existing.length) throw fail("That email already exists.", 409);
  const password_hash = await hashPassword(password);
  const inserted = await sb(env, "staff_users", {
    method: "POST",
    headers: { Prefer: "return=representation" },
    body: JSON.stringify({ id: crypto.randomUUID(), email, name, role: "super", password_hash, active: true }),
  });
  return { id: inserted[0].id, email };
}

async function createEnquiry(env, body) {
  if (String(body.company || "").trim()) return { ok: true };
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const message = String(body.message || "").trim().slice(0, 4000);
  if (name.length < 2 || !email.includes("@") || message.length < 10) throw fail("The message is incomplete.", 400);
  await sb(env, "enquiries", {
    method: "POST",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify({
      id: crypto.randomUUID(),
      name,
      email,
      phone: String(body.phone || "").slice(0, 40),
      audience: String(body.audience || "Other").slice(0, 80),
      subject: String(body.subject || "Enquiry").slice(0, 160),
      message,
      status: "new",
    }),
  });
  return { ok: true };
}

async function requireStaff(env, request, roles) {
  const header = request.headers.get("authorization") || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  const payload = await verifyToken(env, token);
  if (!payload || payload.exp < Date.now()) throw fail("Sign in again.", 401);
  if (roles && !roles.includes(payload.role)) throw fail("This role cannot do that.", 403);
  return payload;
}

async function mediaSignature(env) {
  if (!env.CLOUDINARY_CLOUD_NAME || !env.CLOUDINARY_API_KEY || !env.CLOUDINARY_API_SECRET) {
    throw fail("Cloudinary is not configured on the worker.", 500);
  }
  const timestamp = Math.floor(Date.now() / 1000);
  const folder = "upshs";
  const signature = await sha1hex(`folder=${folder}&timestamp=${timestamp}${env.CLOUDINARY_API_SECRET}`);
  return { cloudName: env.CLOUDINARY_CLOUD_NAME, apiKey: env.CLOUDINARY_API_KEY, timestamp, signature, folder };
}

async function hashPassword(password) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const hash = await pbkdf2(password, salt);
  return `pbkdf2$100000$${b64(salt)}$${b64(hash)}`;
}

async function verifyPassword(password, stored) {
  const [scheme, iterations, saltB64, hashB64] = String(stored || "").split("$");
  if (scheme !== "pbkdf2" || !saltB64 || !hashB64) return false;
  const salt = fromB64(saltB64);
  const hash = await pbkdf2(password, salt, Number(iterations) || 100000);
  return b64(hash) === hashB64;
}

async function pbkdf2(password, salt, iterations = 100000) {
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits({ name: "PBKDF2", salt, iterations, hash: "SHA-256" }, key, 256);
  return new Uint8Array(bits);
}

async function signToken(env, payload) {
  if (!env.SESSION_SECRET) throw fail("SESSION_SECRET is not set.", 500);
  const data = b64(new TextEncoder().encode(JSON.stringify(payload))).replace(/=+$/g, "");
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(env.SESSION_SECRET), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = new Uint8Array(await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(data)));
  return `${data}.${b64(sig).replace(/=+$/g, "")}`;
}

async function verifyToken(env, token) {
  const [data, sig] = String(token || "").split(".");
  if (!data || !sig || !env.SESSION_SECRET) return null;
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(env.SESSION_SECRET), { name: "HMAC", hash: "SHA-256" }, false, ["verify"]);
  const ok = await crypto.subtle.verify("HMAC", key, fromB64(sig), new TextEncoder().encode(data));
  if (!ok) return null;
  try {
    return JSON.parse(new TextDecoder().decode(fromB64(data)));
  } catch {
    return null;
  }
}

async function sha1hex(message) {
  const buf = await crypto.subtle.digest("SHA-1", new TextEncoder().encode(message));
  return [...new Uint8Array(buf)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function b64(bytes) {
  let text = "";
  for (const byte of bytes) text += String.fromCharCode(byte);
  return btoa(text);
}

function fromB64(value) {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((value.length + 3) % 4);
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function mapArticle(row) {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    body: row.body,
    category: row.category,
    status: row.status,
    authorName: row.author_name,
    coverUrl: row.cover_url || "",
    publishedAt: row.published_at,
    updatedAt: row.updated_at,
  };
}
function mapAnnouncement(row) {
  return { id: row.id, title: row.title, body: row.body, active: row.active, publishedAt: row.published_at };
}
function mapEvent(row) {
  return {
    id: row.id,
    title: row.title,
    summary: row.summary,
    startsOn: row.starts_on,
    endsOn: row.ends_on || "",
    place: row.place,
    category: row.category,
    visible: row.visible,
  };
}
function mapProgramme(row) {
  return { id: row.id, slug: row.slug, name: row.name, summary: row.summary, body: row.body, subjects: row.subjects };
}
function mapLeader(row) {
  return { id: row.id, name: row.name, role: row.role, note: row.note };
}
function mapHouse(row) {
  return { id: row.id, name: row.name, summary: row.summary };
}
function mapMilestone(row) {
  return { id: row.id, year: row.year, title: row.title, body: row.body };
}
function mapAlbum(row) {
  return { id: row.id, slug: row.slug, title: row.title, summary: row.summary, photos: [] };
}
function mapPhoto(row) {
  return { id: row.id, src: row.src, alt: row.alt, caption: row.caption };
}
function mapPage(row) {
  return { id: row.id, label: row.label, body: row.body };
}
function mapSettings(row) {
  return {
    phone: row.phone,
    email: row.email,
    address: row.address,
    poBox: row.po_box,
    officeHours: row.office_hours,
    facebook: row.facebook,
    youtube: row.youtube || "",
    workerUrl: "",
    cloudName: "",
    uploadPreset: "",
    useRemotePublic: false,
  };
}
