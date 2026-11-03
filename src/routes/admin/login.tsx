import { createFileRoute, Navigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PREVIEW_STAFF, signIn, useSession } from "@/lib/cms/session";
import { roleLabel } from "@/lib/cms/access";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/admin/login")({
  component: LoginPage,
  head: () => ({ meta: [{ title: "Staff desk · UNIPRA" }] }),
});

function LoginPage() {
  const { session, ready } = useSession();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  if (ready && session) return <Navigate to="/admin" />;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setPending(true);
    const message = await signIn(String(form.get("email") ?? ""), String(form.get("password") ?? ""));
    setPending(false);
    setError(message ?? "");
  }

  return (
    <main className="mx-auto grid min-h-screen max-w-5xl items-center gap-10 px-5 py-12 lg:grid-cols-2">
      <div>
        <img src="/crest.png" alt="" className="size-20 object-contain" />
        <h1 className="mt-4 text-4xl">Staff desk</h1>
        <p className="mt-3 max-w-md leading-relaxed text-muted">
          Authorised staff publish what the public site is allowed to say. Preview accounts below work only in this browser, until the Cloudflare Worker and Supabase are connected.
        </p>
      </div>
      <form onSubmit={onSubmit} className="space-y-4 border border-line bg-paper p-6">
        <label className="block space-y-1">
          <span className="lbl">Email</span>
          <input className="field" name="email" type="email" autoComplete="username" required />
        </label>
        <label className="block space-y-1">
          <span className="lbl">Password</span>
          <input className="field" name="password" type="password" autoComplete="current-password" required />
        </label>
        {error ? <p className="text-sm text-navy">{error}</p> : null}
        <Button type="submit" disabled={pending}>
          {pending ? "Checking…" : "Enter the desk"}
        </Button>
        <div className="border-t border-line pt-4">
          <p className="text-xs font-semibold tracking-widest text-gold-deep uppercase">Preview accounts</p>
          <ul className="mt-2 space-y-1 text-sm text-muted">
            {PREVIEW_STAFF.map((member) => (
              <li key={member.id}>
                {roleLabel(member.role)} — {member.email} · {member.password}
              </li>
            ))}
          </ul>
        </div>
      </form>
    </main>
  );
}
