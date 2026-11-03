import { createFileRoute, Link } from "@tanstack/react-router";
import { DeskTitle } from "@/components/admin/chrome";
import { roleLabel } from "@/lib/cms/access";
import { useCms } from "@/lib/cms/store";
import { useSession } from "@/lib/cms/session";

export const Route = createFileRoute("/admin/")({
  component: Dashboard,
  head: () => ({ meta: [{ title: "Overview · UNIPRA staff desk" }] }),
});

function Dashboard() {
  const news = useCms((state) => state.news);
  const enquiries = useCms((state) => state.enquiries);
  const events = useCms((state) => state.events);
  const { session } = useSession();
  const counts = [
    ["Published", news.filter((item) => item.status === "published").length],
    ["In review", news.filter((item) => item.status === "in_review" || item.status === "ready").length],
    ["Drafts", news.filter((item) => item.status === "draft").length],
    ["New enquiries", enquiries.filter((item) => item.status === "new").length],
    ["Events", events.filter((item) => item.visible).length],
  ] as const;

  return (
    <>
      <DeskTitle
        title="Overview"
        lede="Media writes. An editor reads. A school administrator publishes. Nothing reaches the public site until that last step."
      />
      <ul className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {counts.map(([label, value]) => (
          <li key={label} className="border border-line bg-paper p-4">
            <p className="font-display text-3xl text-navy">{value}</p>
            <p className="text-sm text-muted">{label}</p>
          </li>
        ))}
      </ul>
      <section className="mt-8 border border-line bg-paper p-5">
        <h2 className="text-2xl">How a story moves</h2>
        <ol className="mt-4 grid gap-4 sm:grid-cols-4">
          {[
            ["1", "Media Team", "Writes a draft, or sends it for review."],
            ["2", "Editor", "Corrects it and marks it ready."],
            ["3", "Administrator", "Publishes, or sends it back."],
            ["4", "Public site", "Only published stories are visible."],
          ].map(([n, title, body]) => (
            <li key={n}>
              <p className="font-display text-2xl text-gold-deep">{n}</p>
              <h3 className="text-lg">{title}</h3>
              <p className="text-sm text-muted">{body}</p>
            </li>
          ))}
        </ol>
        {session ? (
          <p className="mt-4 text-sm text-muted">
            You are signed in as {roleLabel(session.role)}
            {session.mode === "preview" ? " on the preview desk. Edits stay in this browser until Supabase is connected." : " against the live desk."}
          </p>
        ) : null}
        <Link to="/admin/news" className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-navy">
          Open the news desk
        </Link>
      </section>
    </>
  );
}
