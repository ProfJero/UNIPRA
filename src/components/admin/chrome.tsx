import { Link, Navigate, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { roleLabel } from "@/lib/cms/access";
import { signOut, useSession } from "@/lib/cms/session";
import { cn } from "@/lib/utils";

const LINKS: { to: string; label: string; exact?: boolean; roles?: string[] }[] = [
  { to: "/admin", label: "Overview", exact: true },
  { to: "/admin/news", label: "News" },
  { to: "/admin/announcements", label: "Notices" },
  { to: "/admin/events", label: "Events" },
  { to: "/admin/gallery", label: "Gallery" },
  { to: "/admin/academics", label: "Academics" },
  { to: "/admin/leadership", label: "Leadership" },
  { to: "/admin/history", label: "History" },
  { to: "/admin/pages", label: "Pages" },
  { to: "/admin/enquiries", label: "Enquiries", roles: ["super", "admin"] },
  { to: "/admin/users", label: "Users", roles: ["super"] },
  { to: "/admin/settings", label: "Settings", roles: ["super", "admin"] },
];

export function AdminChrome({ children }: { children: ReactNode }) {
  const { session, ready } = useSession();
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  if (pathname.includes("/admin/login")) return children;
  if (!ready) {
    return <p className="grid min-h-screen place-items-center text-muted">Opening the staff desk…</p>;
  }
  if (!session) return <Navigate to="/admin/login" />;

  const links = LINKS.filter((link) => !link.roles || link.roles.includes(session.role));

  return (
    <div className="min-h-screen bg-cream">
      <header className="border-b border-line bg-navy text-paper">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-5 py-3">
          <Link to="/admin" className="font-display text-xl text-paper">
            UNIPRA staff desk
          </Link>
          <p className="text-sm text-cream">
            {session.name} · {roleLabel(session.role)}
            {session.mode === "preview" ? " · preview" : " · live"}
          </p>
          <div className="ml-auto flex gap-2">
            <Link to="/" className="inline-flex min-h-11 items-center px-3 text-sm font-semibold text-paper">
              View site
            </Link>
            <button type="button" className="min-h-11 px-3 text-sm font-semibold text-gold" onClick={() => signOut()}>
              Sign out
            </button>
          </div>
        </div>
        <nav className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 pb-3" aria-label="Desk">
          {links.map((link) => {
            const active = link.exact
              ? /\/admin\/?$/.test(pathname)
              : pathname.includes(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "inline-flex min-h-11 shrink-0 items-center px-3 text-sm font-semibold",
                  active ? "bg-paper text-navy" : "text-cream",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </header>
      <div className="mx-auto max-w-6xl px-5 py-8">{children}</div>
    </div>
  );
}

export function DeskTitle({ title, lede }: { title: string; lede?: string }) {
  return (
    <header className="mb-6">
      <h1 className="text-3xl">{title}</h1>
      {lede ? <p className="mt-2 max-w-2xl text-muted">{lede}</p> : null}
    </header>
  );
}

export function Deny({ children }: { children: ReactNode }) {
  return <p className="border border-line bg-paper p-4 text-navy">{children}</p>;
}
