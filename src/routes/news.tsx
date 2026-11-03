import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageIntro, SiteShell, Wrap } from "@/components/site/shell";
import { useCms } from "@/lib/cms/store";
import { formatDay } from "@/lib/cms/format";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/news")({
  component: NewsPage,
  head: () => ({
    meta: [
      { title: "News · University Practice Senior High School" },
      { name: "description", content: "News, notices and heritage from University Practice Senior High School." },
    ],
  }),
});

function NewsPage() {
  const articles = useCms((state) =>
    state.news
      .filter((item) => item.status === "published")
      .slice()
      .sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? "")),
  );
  const categories = ["All", ...Array.from(new Set(articles.map((item) => item.category)))];
  const [category, setCategory] = useState("All");
  const visible = category === "All" ? articles : articles.filter((item) => item.category === category);

  return (
    <SiteShell>
      <PageIntro
        kicker="News and notices"
        title="What the school is prepared to publish."
        lede="Each story has its own address, so the media team can share it on Facebook or WhatsApp. Drafts never appear here."
      />
      <Wrap className="py-8">
        <div className="flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Categories">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={category === item}
              onClick={() => setCategory(item)}
              className={cn(
                "min-h-11 shrink-0 px-3 text-sm font-semibold",
                category === item ? "bg-navy text-paper" : "border border-line bg-paper text-navy",
              )}
            >
              {item}
            </button>
          ))}
        </div>
        <ul className="mt-6 divide-y divide-line border-y border-line">
          {visible.map((article) => (
            <li key={article.id}>
              <Link to="/news/$slug" params={{ slug: article.slug }} className="grid gap-2 py-6 sm:grid-cols-[9rem_1fr]">
                <p className="text-sm text-gold-deep">{formatDay(article.publishedAt)}</p>
                <span>
                  <span className="text-xs font-semibold tracking-widest text-muted uppercase">{article.category}</span>
                  <span className="mt-1 block font-display text-2xl text-navy">{article.title}</span>
                  <span className="mt-2 block text-muted">{article.excerpt}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        {visible.length === 0 ? <p className="py-10 text-muted">Nothing is published in this category yet.</p> : null}
      </Wrap>
    </SiteShell>
  );
}
