import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { a as canDraft, f as useCms, i as canDelete, r as allowedStatuses, t as ARTICLE_CATEGORIES } from "./utils-CTaqdGFc.mjs";
import { C as useNavigate, T as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as Route } from "./router-D-gmTq1A.mjs";
import { i as useSession } from "./session-B8at0Akt.mjs";
import { n as Deny, r as DeskTitle } from "./chrome-Cxa8Hguc.mjs";
import { t as Button } from "./button-DNQL9KTZ.mjs";
import { r as slugify } from "./format-BuNRHYqX.mjs";
import { t as storeImage } from "./media-Ch6wioPJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/news._id-CBblnj4P.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function blank(author) {
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
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
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
	const [article, setArticle] = (0, import_react.useState)(id === "new" ? blank("Staff") : existing ?? null);
	(0, import_react.useEffect)(() => {
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
	if (!canDraft(role)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Deny, { children: "Your role can read the desk, not write stories." });
	if (!article) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskTitle, {
		title: "Story not found",
		lede: "It may have been removed."
	});
	const statuses = allowedStatuses(role);
	function patch(partial) {
		setArticle((current) => current ? {
			...current,
			...partial
		} : current);
	}
	function save(status) {
		if (!article) return;
		const slug = article.slug.trim() || slugify(article.title);
		if (!article.title.trim() || !slug) {
			toast.error("A story needs a title.");
			return;
		}
		const clash = news.some((item) => item.slug === slug && item.id !== article.id);
		const next = {
			...article,
			slug: clash ? `${slug}-${article.id.slice(0, 4)}` : slug,
			status,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
			publishedAt: status === "published" ? article.publishedAt ?? (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) : article.publishedAt
		};
		if (!saveArticle(next, role)) {
			toast.error("Your role cannot save a story in that state.");
			return;
		}
		setArticle(next);
		toast.success(status === "published" ? "Published." : "Saved.");
		if (id === "new") navigate({
			to: "/admin/news/$id",
			params: { id: next.id }
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskTitle, {
		title: id === "new" ? "New story" : "Edit story",
		lede: `Writing as ${authorName}.`
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "lbl",
					children: "Title"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field",
					value: article.title,
					onChange: (event) => patch({ title: event.target.value })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "lbl",
					children: "Address slug"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field",
					value: article.slug,
					placeholder: "filled from the title if left blank",
					onChange: (event) => patch({ slug: event.target.value })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "lbl",
						children: "Category"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: "field",
						value: article.category,
						onChange: (event) => patch({ category: event.target.value }),
						children: ARTICLE_CATEGORIES.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: category }, category))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "lbl",
						children: "Byline"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field",
						value: article.authorName,
						onChange: (event) => patch({ authorName: event.target.value })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "lbl",
					children: "Standfirst"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					className: "field min-h-20 py-2",
					value: article.excerpt,
					onChange: (event) => patch({ excerpt: event.target.value })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "space-y-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "lbl",
						children: "Story"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						className: "field min-h-64 py-2",
						value: article.body,
						onChange: (event) => patch({ body: event.target.value })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted",
						children: "Separate paragraphs with a blank line."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "lbl",
					children: "Cover image address"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field",
					value: article.coverUrl,
					onChange: (event) => patch({ coverUrl: event.target.value }),
					placeholder: "/media/flame.jpg or a Cloudinary URL"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "text-sm font-semibold text-navy",
				children: ["Or upload to Cloudinary", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "mt-1 block text-sm font-normal",
					type: "file",
					accept: "image/*",
					onChange: async (event) => {
						const file = event.target.files?.[0];
						if (!file) return;
						try {
							patch({ coverUrl: await storeImage(file) });
							toast.success("Cover stored on Cloudinary.");
						} catch (error) {
							toast.error(error instanceof Error ? error.message : "Upload failed.");
						}
					}
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					statuses.includes("draft") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "line",
						onClick: () => save("draft"),
						children: "Save draft"
					}) : null,
					statuses.includes("in_review") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "line",
						onClick: () => save("in_review"),
						children: "Submit for review"
					}) : null,
					statuses.includes("ready") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "gold",
						onClick: () => save("ready"),
						children: "Mark ready"
					}) : null,
					statuses.includes("published") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						onClick: () => save("published"),
						children: "Publish"
					}) : null,
					statuses.includes("archived") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						onClick: () => save("archived"),
						children: "Archive"
					}) : null,
					canDelete(role) && id !== "new" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						onClick: () => {
							deleteArticle(article.id, role);
							toast.success("Removed.");
							navigate({ to: "/admin/news" });
						},
						children: "Delete"
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin/news",
						className: "inline-flex min-h-11 items-center px-3 text-sm font-semibold text-muted",
						children: "Back"
					})
				]
			})
		]
	})] });
}
//#endregion
export { NewsEditor as component };
