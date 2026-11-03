import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Deny, DeskTitle } from "@/components/admin/chrome";
import { Button } from "@/components/ui/button";
import { allowedStatuses, canDelete, canDraft } from "@/lib/cms/access";
import { ARTICLE_CATEGORIES } from "@/lib/cms/seed";
import { slugify } from "@/lib/cms/format";
import { storeImage } from "@/lib/cms/media";
import { useSession } from "@/lib/cms/session";
import { useCms } from "@/lib/cms/store";
import type { Article, ArticleStatus } from "@/lib/cms/types";

export const Route = createFileRoute("/admin/news/$id")({
  component: NewsEditor,
  head: () => ({ meta: [{ title: "Edit story · UNIPRA" }] }),
});

function blank(author: string): Article {
  return {
    id: crypto.randomUUID(),
    slug: "",
    title: "",
    excerpt: "",
    body: "",
    category: "School News",
    status: "draft",
    authorName: author,
    coverUrl: "",
    publishedAt: null,
    updatedAt: new Date().toISOString(),
  };
}

function NewsEditor() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const { session } = useSession();
  const existing = useCms((state) => state.news.find((item) => item.id === id));
  const news = useCms((state) => state.news);
  const saveArticle = useCms((state) => state.saveArticle);
  const deleteArticle = useCms((state) => state.deleteArticle);
  const [article, setArticle] = useState<Article | null>(id === "new" ? blank("Staff") : (existing ?? null));

  useEffect(() => {
    if (id === "new") {
      setArticle(blank(session?.name ?? "Staff"));
      return;
    }
    const found = useCms.getState().news.find((item) => item.id === id);
    setArticle(found ?? null);
  }, [id, session?.name]);

  if (!session) return null;
  const role = session.role;
  const authorName = session.name;
  if (!canDraft(role)) return <Deny>Your role can read the desk, not write stories.</Deny>;
  if (!article) {
    return (
      <DeskTitle title="Story not found" lede="It may have been removed." />
    );
  }

  const statuses = allowedStatuses(role);
  function patch(partial: Partial<Article>) {
    setArticle((current) => (current ? { ...current, ...partial } : current));
  }

  function save(status: ArticleStatus) {
    if (!article) return;
    const slug = article.slug.trim() || slugify(article.title);
    if (!article.title.trim() || !slug) {
      toast.error("A story needs a title.");
      return;
    }
    const clash = news.some((item) => item.slug === slug && item.id !== article.id);
    const next: Article = {
      ...article,
      slug: clash ? `${slug}-${article.id.slice(0, 4)}` : slug,
      status,
      updatedAt: new Date().toISOString(),
      publishedAt: status === "published" ? article.publishedAt ?? new Date().toISOString().slice(0, 10) : article.publishedAt,
    };
    const ok = saveArticle(next, role);
    if (!ok) {
      toast.error("Your role cannot save a story in that state.");
      return;
    }
    setArticle(next);
    toast.success(status === "published" ? "Published." : "Saved.");
    if (id === "new") void navigate({ to: "/admin/news/$id", params: { id: next.id } });
  }

  return (
    <>
      <DeskTitle title={id === "new" ? "New story" : "Edit story"} lede={`Writing as ${authorName}.`} />
      <div className="grid gap-4">
        <label className="space-y-1">
          <span className="lbl">Title</span>
          <input className="field" value={article.title} onChange={(event) => patch({ title: event.target.value })} />
        </label>
        <label className="space-y-1">
          <span className="lbl">Address slug</span>
          <input className="field" value={article.slug} placeholder="filled from the title if left blank" onChange={(event) => patch({ slug: event.target.value })} />
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-1">
            <span className="lbl">Category</span>
            <select className="field" value={article.category} onChange={(event) => patch({ category: event.target.value })}>
              {ARTICLE_CATEGORIES.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </label>
          <label className="space-y-1">
            <span className="lbl">Byline</span>
            <input className="field" value={article.authorName} onChange={(event) => patch({ authorName: event.target.value })} />
          </label>
        </div>
        <label className="space-y-1">
          <span className="lbl">Standfirst</span>
          <textarea className="field min-h-20 py-2" value={article.excerpt} onChange={(event) => patch({ excerpt: event.target.value })} />
        </label>
        <label className="space-y-1">
          <span className="lbl">Story</span>
          <textarea className="field min-h-64 py-2" value={article.body} onChange={(event) => patch({ body: event.target.value })} />
          <span className="text-xs text-muted">Separate paragraphs with a blank line.</span>
        </label>
        <label className="space-y-1">
          <span className="lbl">Cover image address</span>
          <input className="field" value={article.coverUrl} onChange={(event) => patch({ coverUrl: event.target.value })} placeholder="/media/flame.jpg or a Cloudinary URL" />
        </label>
        <label className="text-sm font-semibold text-navy">
          Or upload to Cloudinary
          <input
            className="mt-1 block text-sm font-normal"
            type="file"
            accept="image/*"
            onChange={async (event) => {
              const file = event.target.files?.[0];
              if (!file) return;
              try {
                const src = await storeImage(file);
                patch({ coverUrl: src });
                toast.success("Cover stored on Cloudinary.");
              } catch (error) {
                toast.error(error instanceof Error ? error.message : "Upload failed.");
              }
            }}
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {statuses.includes("draft") ? (
            <Button type="button" variant="line" onClick={() => save("draft")}>Save draft</Button>
          ) : null}
          {statuses.includes("in_review") ? (
            <Button type="button" variant="line" onClick={() => save("in_review")}>Submit for review</Button>
          ) : null}
          {statuses.includes("ready") ? (
            <Button type="button" variant="gold" onClick={() => save("ready")}>Mark ready</Button>
          ) : null}
          {statuses.includes("published") ? (
            <Button type="button" onClick={() => save("published")}>Publish</Button>
          ) : null}
          {statuses.includes("archived") ? (
            <Button type="button" variant="ghost" onClick={() => save("archived")}>Archive</Button>
          ) : null}
          {canDelete(role) && id !== "new" ? (
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                deleteArticle(article.id, role);
                toast.success("Removed.");
                void navigate({ to: "/admin/news" });
              }}
            >
              Delete
            </Button>
          ) : null}
          <Link to="/admin/news" className="inline-flex min-h-11 items-center px-3 text-sm font-semibold text-muted">
            Back
          </Link>
        </div>
      </div>
    </>
  );
}
