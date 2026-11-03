import { useEffect, useSyncExternalStore } from "react";
import type { ExtraStaff, Role, Session } from "./types";
import { useCms } from "./store";

const KEY = "upshs-session";

export const PREVIEW_STAFF: ExtraStaff[] = [
  {
    id: "preview-super",
    name: "Preview Super Administrator",
    email: "super@unipra.test",
    password: "super-desk",
    role: "super",
  },
  {
    id: "preview-admin",
    name: "Preview School Administrator",
    email: "publisher@unipra.test",
    password: "publish-desk",
    role: "admin",
  },
  {
    id: "preview-editor",
    name: "Preview Editor",
    email: "editor@unipra.test",
    password: "editor-desk",
    role: "editor",
  },
  {
    id: "preview-media",
    name: "Preview Media Team",
    email: "media@unipra.test",
    password: "media-desk",
    role: "media",
  },
  {
    id: "preview-viewer",
    name: "Preview Viewer",
    email: "viewer@unipra.test",
    password: "view-desk",
    role: "viewer",
  },
];

const SERVER_SNAPSHOT: { session: Session | null; ready: boolean } = { session: null, ready: false };

let snapshot: { session: Session | null; ready: boolean } = SERVER_SNAPSHOT;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function load(): Session | null {
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Session;
    if (!parsed?.email || !parsed?.role) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function bootstrapSession() {
  if (snapshot.ready) return;
  snapshot = { session: load(), ready: true };
  emit();
}

export function writeSession(session: Session | null) {
  if (session) sessionStorage.setItem(KEY, JSON.stringify(session));
  else sessionStorage.removeItem(KEY);
  snapshot = { session, ready: true };
  emit();
}

export function useSession() {
  useEffect(() => {
    bootstrapSession();
  }, []);
  return useSyncExternalStore(
    (callback) => {
      listeners.add(callback);
      return () => listeners.delete(callback);
    },
    () => snapshot,
    () => SERVER_SNAPSHOT,
  );
}

export async function signIn(email: string, password: string): Promise<string | null> {
  const emailNorm = email.trim().toLowerCase();
  const workerUrl = useCms.getState().settings.workerUrl.trim();
  if (workerUrl) {
    try {
      const response = await fetch(`${workerUrl.replace(/\/$/, "")}/v1/session`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: emailNorm, password }),
      });
      if (response.ok) {
        const data = (await response.json()) as {
          token: string;
          staff: { id: string; name: string; email: string; role: Role };
        };
        writeSession({
          staffId: data.staff.id,
          name: data.staff.name,
          email: data.staff.email,
          role: data.staff.role,
          mode: "worker",
          token: data.token,
        });
        return null;
      }
      if (response.status === 401) return "Those details were not accepted.";
      return "The staff desk could not be reached. Clear the worker address in Settings to use a preview account.";
    } catch {
      return "The staff desk could not be reached. Clear the worker address in Settings to use a preview account.";
    }
  }

  const found = [...PREVIEW_STAFF, ...useCms.getState().staff].find(
    (member) => member.email === emailNorm && member.password === password,
  );
  if (!found) return "Those details were not accepted.";
  writeSession({
    staffId: found.id,
    name: found.name,
    email: found.email,
    role: found.role,
    mode: "preview",
  });
  return null;
}

export function signOut() {
  writeSession(null);
}
