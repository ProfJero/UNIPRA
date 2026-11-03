# University Practice Senior High School

The official digital home of UNIPRA, Cape Coast.

Public site, staff desk, and the production services behind them:

- **Supabase** holds the records.
- **Cloudinary** holds the photographs.
- **Cloudflare Worker** (`workers/cms`) is the only place that talks to Supabase with the service role, signs Cloudinary uploads, and checks staff passwords.
- The website itself is the public pages and the staff desk. Until the worker address is saved in Settings, the desk runs as a **preview** in the browser so the pages can be shown before the school’s keys exist.

Colours follow the crest: navy and gold. The earlier green palette was a proposal, not the mark on the shield.

## What is deliberately not on the site

- No admission payments, and no private placement.
- No public directory of old students.
- No invented examination results, populations, or facility counts.
- No school anthem until the administration approves the text.
- Programme notes are sourced from the public record and are editable. They are not a substitute for the current GES register. The directory code **0030105** must be confirmed for each placement year.

## Preview staff desk

Open **Staff desk** in the footer. These accounts exist only for demonstration. They are not school mailboxes.

| Role | Email | Password |
| --- | --- | --- |
| Super Administrator | super@unipra.test | super-desk |
| School Administrator | publisher@unipra.test | publish-desk |
| Editor | editor@unipra.test | editor-desk |
| Media Team | media@unipra.test | media-desk |
| Viewer | viewer@unipra.test | view-desk |

A story moves from the media team (draft, submit for review) to an editor (mark ready) to a school administrator (publish). Viewers cannot write.

## Connect Supabase, the worker, and Cloudinary

1. Create a Supabase project and run [`supabase/schema.sql`](supabase/schema.sql) in the SQL editor. Row level security is on and there is no anonymous policy. The public anon key is not used.
2. From `workers/cms`, install Wrangler and set secrets:

   ```sh
   npx wrangler secret put SUPABASE_URL
   npx wrangler secret put SUPABASE_SERVICE_ROLE
   npx wrangler secret put SESSION_SECRET
   npx wrangler secret put BOOTSTRAP_TOKEN
   npx wrangler secret put CLOUDINARY_CLOUD_NAME
   npx wrangler secret put CLOUDINARY_API_KEY
   npx wrangler secret put CLOUDINARY_API_SECRET
   ```

   Set `ALLOWED_ORIGIN` in `wrangler.toml` to the school’s real domain before a public launch. Deploy with `npx wrangler deploy`.

3. Create the first super administrator. The worker hashes the password. It is never stored in the website.

   ```sh
   curl -X POST "$WORKER/v1/bootstrap" \
     -H "content-type: application/json" \
     -H "x-bootstrap-token: $BOOTSTRAP_TOKEN" \
     -d '{"email":"office@example.com","name":"School Administrator","password":"a-long-password"}'
   ```

4. In Cloudinary, note the cloud name. For browser uploads without the worker session, create an unsigned upload preset restricted to images. Signed uploads (preferred) go through `POST /v1/media/signature` into the folder `upshs`.
5. In the staff desk, under Settings, save the worker URL, the cloud name, and the preset if you use unsigned uploads. Use **Test worker**. Turn on **Load the public site from Supabase** only after the tables hold the pages you want the world to see. An empty table does not wipe the starter text.

Enquiry messages are posted to `POST /v1/enquiries` and stored in Supabase. They are not emailed. The office reads them in the desk.

## Worker routes

| Route | Who |
| --- | --- |
| `GET /v1/health` | Anyone |
| `GET /v1/public` | Anyone. Published copy only. |
| `POST /v1/session` | Staff. Returns a signed token. |
| `POST /v1/bootstrap` | Once, with `x-bootstrap-token`. |
| `POST /v1/enquiries` | Anyone. Honeypot field `company` must be empty. |
| `POST /v1/media/signature` | Media team and above. |

## Local development

```sh
npm run dev
```

The dev server listens on port 8080.
