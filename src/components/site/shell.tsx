import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { useCms } from "@/lib/cms/store";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/admissions", label: "Admissions" },
  { to: "/news", label: "News" },
  { to: "/gallery", label: "Gallery" },
  { to: "/alumni", label: "Alumni" },
  { to: "/contact", label: "Contact" },
] as const;

export function Wrap({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5", className)}>{children}</div>;
}

export function PageIntro({ kicker, title, lede }: { kicker: string; title: string; lede: string }) {
  return (
    <header className="border-b border-line bg-paper">
      <Wrap className="py-12 sm:py-16">
        <p className="text-xs font-semibold tracking-widest text-gold-deep uppercase">{kicker}</p>
        <h1 className="mt-3 max-w-3xl text-4xl leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{lede}</p>
      </Wrap>
    </header>
  );
}

export function Prose({ text }: { text: string }) {
  const parts = text
    .trim()
    .split(/\n\n+/)
    .map((part) => part.trim())
    .filter(Boolean);
  return (
    <div className="space-y-4 text-base leading-relaxed text-ink">
      {parts.map((part, index) => (
        <p key={index}>{part}</p>
      ))}
    </div>
  );
}

function Header() {
  const settings = useCms((state) => state.settings);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-line bg-paper">
      <div className="bg-navy text-paper">
        <Wrap className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2 text-sm">
          <p>Cape Coast, Central Region</p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <a href={`tel:${settings.phone.replace(/\s/g, "")}`} className="underline-offset-2 hover:underline">
              {settings.phone}
            </a>
            <a href={`mailto:${settings.email}`} className="underline-offset-2 hover:underline">
              {settings.email}
            </a>
          </p>
        </Wrap>
      </div>
      <Wrap className="flex items-center gap-4 py-3">
        <Link to="/" className="flex min-w-0 flex-1 items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/crest.png"
            alt="Crest of University Practice Senior High School"
            className="size-14 shrink-0 bg-paper object-contain sm:size-16"
          />
          <span className="min-w-0">
            <span className="block font-display text-lg leading-tight text-navy sm:text-2xl">
              University Practice
            </span>
            <span className="block text-xs font-semibold tracking-widest text-muted uppercase sm:text-sm">
              Senior High School · Cape Coast
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active = pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "min-h-11 text-sm font-semibold",
                  active ? "text-navy underline decoration-gold decoration-2 underline-offset-8" : "text-muted hover:text-navy",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center border border-line lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">Menu</span>
        </button>
      </Wrap>
      {open ? (
        <nav id="mobile-nav" className="border-t border-line lg:hidden" aria-label="Mobile">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block min-h-11 border-b border-line px-5 py-3 text-base font-semibold text-navy"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}

function Footer() {
  const settings = useCms((state) => state.settings);
  return (
    <footer className="mt-auto border-t border-line bg-navy text-paper">
      <Wrap className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <img src="/crest-gold.jpg" alt="" className="size-20 bg-paper object-contain p-1" />
          <p className="mt-4 font-display text-2xl text-paper">University Practice Senior High School</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-cream">
            Service to the Community. Floreat. The official digital home of UNIPRA, Cape Coast.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-widest text-gold uppercase">Visit</p>
          <p className="mt-3 text-sm leading-relaxed text-cream">
            {settings.poBox}
            <br />
            {settings.address}
            <br />
            {settings.officeHours}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-widest text-gold uppercase">Useful</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/admissions" className="text-cream hover:text-paper">
                Admissions
              </Link>
            </li>
            <li>
              <Link to="/news" className="text-cream hover:text-paper">
                News and notices
              </Link>
            </li>
            <li>
              <a href={settings.facebook} className="text-cream hover:text-paper">
                Facebook
              </a>
            </li>
            <li>
              <Link to="/admin/login" className="text-cream hover:text-paper">
                Staff desk
              </Link>
            </li>
          </ul>
        </div>
      </Wrap>
      <div className="border-t border-navy-deep">
        <Wrap className="py-4 text-xs leading-relaxed text-cream">
          Facts on this site are taken from the school’s public record. The administration maintains these pages.
          Admissions are not sold here.
        </Wrap>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-paper focus:px-4 focus:py-3 focus:text-navy"
      >
        Skip to content
      </a>
      <Header />
      <main id="content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export function NotFoundPage() {
  return (
    <SiteShell>
      <PageIntro
        kicker="Not found"
        title="This page is not on the site."
        lede="The address may be old, or the page may have been withdrawn. The newsroom and the contact page are the surest routes back."
      />
      <Wrap className="flex flex-wrap gap-3 py-10">
        <Link to="/" className="inline-flex min-h-11 items-center bg-navy px-4 text-sm font-semibold text-paper">
          Home
        </Link>
        <Link to="/news" className="inline-flex min-h-11 items-center border border-line bg-paper px-4 text-sm font-semibold text-navy">
          News
        </Link>
      </Wrap>
    </SiteShell>
  );
}
