import { createFileRoute, Link } from "@tanstack/react-router";
import { DeskTitle } from "@/components/admin/chrome";
import { canDraft } from "@/lib/cms/access";
import { formatDay } from "@/lib/cms/format";
import { useSession } from "@/lib/cms/session";
import { useCms } from "@/lib/cms/store";

export const Route = createFileRoute("/admin/news")({
  component: NewsDesk,
  head: () => ({ meta: [{ title: "News desk · UNIPRA" }] }),
});

const ORDER = ["in_review", "ready", "draft", "published", "archived"];

function NewsDesk() {
  const news = useCms((state) => state.news);
  const { session } = useSession();
  const sorted = news.slice().sort((a, b) => ORDER.indexOf(a.status) - ORDER.indexOf(b.status));
  return (
    <>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <DeskTitle title="News" lede="Stories move from draft to review to ready, and only then to the public site." />
        {session && canDraft(session.role) ? (
          <Link to="/admin/news/$id" params={{ id: "new" }} className="inline-flex min-h-11 items-center bg-navy px-4 text-sm font-semibold text-paper">
            New story
          </Link>
        ) : null}
      </div>
      <ul className="divide-y divide-line border-y border-line bg-paper">
        {sorted.map((article) => (
          <li key={article.id}>
            <Link to="/admin/news/$id" params={{ id: article.id }} className="grid gap-1 px-4 py-4 sm:grid-cols-[8rem_1fr_auto]">
              <span className="text-xs font-semibold tracking-widest text-gold-deep uppercase">{article.status.replace("_", " ")}</span>
              <span>
                <span className="block font-semibold text-navy">{article.title}</span>
                <span className="text-sm text-muted">{article.category} · {article.authorName}</span>
              </span>
              <span className="text-sm text-muted">{formatDay(article.updatedAt)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
