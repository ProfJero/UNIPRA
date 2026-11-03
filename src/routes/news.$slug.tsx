import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageIntro, Prose, SiteShell, Wrap } from "@/components/site/shell";
import { useCms } from "@/lib/cms/store";
import { formatDay } from "@/lib/cms/format";

export const Route = createFileRoute("/news/$slug")({
  component: ArticlePage,
  head: ({ params }) => ({
    meta: [{ title: `${params.slug} · UNIPRA` }],
  }),
});

function ArticlePage() {
  const { slug } = Route.useParams();
  const article = useCms((state) => state.news.find((item) => item.slug === slug && item.status === "published"));
  const related = useCms((state) =>
    state.news.filter((item) => item.status === "published" && item.slug !== slug).slice(0, 3),
  );
  if (!article) {
    return (
      <SiteShell>
        <PageIntro kicker="News" title="This story is not public." lede="It may be a draft, or the address may be wrong." />
        <Wrap className="py-8">
          <Link to="/news" className="font-semibold text-navy">All news</Link>
        </Wrap>
      </SiteShell>
    );
  }
  return (
    <SiteShell>
      <PageIntro kicker={`${article.category} · ${formatDay(article.publishedAt)}`} title={article.title} lede={article.excerpt} />
      <Wrap className="grid gap-12 py-12 lg:grid-cols-[1fr_16rem]">
        <article className="max-w-3xl">
          {article.coverUrl ? (
            <img src={article.coverUrl} alt="" className="mb-8 w-full object-cover" />
          ) : null}
          <Prose text={article.body} />
          <p className="mt-8 text-sm text-muted">Published by {article.authorName}.</p>
          <ShareRow title={article.title} />
        </article>
        <aside>
          <h2 className="text-xl">Also on the site</h2>
          <ul className="mt-4 space-y-4">
            {related.map((item) => (
              <li key={item.id}>
                <Link to="/news/$slug" params={{ slug: item.slug }} className="font-semibold text-navy hover:text-gold-deep">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </Wrap>
    </SiteShell>
  );
}

function ShareRow({ title }: { title: string }) {
  const [href, setHref] = useState("");
  useEffect(() => setHref(window.location.href), []);
  if (!href) return null;
  const text = encodeURIComponent(`${title} ${href}`);
  return (
    <p className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
      <a className="inline-flex min-h-11 items-center border border-line px-3" href={`https://wa.me/?text=${text}`}>
        Share on WhatsApp
      </a>
      <a
        className="inline-flex min-h-11 items-center border border-line px-3"
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(href)}`}
      >
        Share on Facebook
      </a>
    </p>
  );
}
