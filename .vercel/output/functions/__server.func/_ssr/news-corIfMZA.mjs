import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { f as useCms, u as cn } from "./utils-CTaqdGFc.mjs";
import { T as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageIntro, c as Wrap, s as SiteShell } from "./router-D-gmTq1A.mjs";
import { t as formatDay } from "./format-BuNRHYqX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/news-corIfMZA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function NewsPage() {
	const articles = useCms((state) => state.news.filter((item) => item.status === "published").slice().sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? "")));
	const categories = ["All", ...Array.from(new Set(articles.map((item) => item.category)))];
	const [category, setCategory] = (0, import_react.useState)("All");
	const visible = category === "All" ? articles : articles.filter((item) => item.category === category);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "News and notices",
		title: "What the school is prepared to publish.",
		lede: "Each story has its own address, so the media team can share it on Facebook or WhatsApp. Drafts never appear here."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
		className: "py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 overflow-x-auto pb-2",
				role: "tablist",
				"aria-label": "Categories",
				children: categories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					role: "tab",
					"aria-selected": category === item,
					onClick: () => setCategory(item),
					className: cn("min-h-11 shrink-0 px-3 text-sm font-semibold", category === item ? "bg-navy text-paper" : "border border-line bg-paper text-navy"),
					children: item
				}, item))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 divide-y divide-line border-y border-line",
				children: visible.map((article) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/news/$slug",
					params: { slug: article.slug },
					className: "grid gap-2 py-6 sm:grid-cols-[9rem_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-gold-deep",
						children: formatDay(article.publishedAt)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold tracking-widest text-muted uppercase",
							children: article.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block font-display text-2xl text-navy",
							children: article.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 block text-muted",
							children: article.excerpt
						})
					] })]
				}) }, article.id))
			}),
			visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-10 text-muted",
				children: "Nothing is published in this category yet."
			}) : null
		]
	})] });
}
//#endregion
export { NewsPage as component };
