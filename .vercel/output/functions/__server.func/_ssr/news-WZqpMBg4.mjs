import { a as canDraft, f as useCms } from "./utils-CTaqdGFc.mjs";
import { T as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useSession } from "./session-B8at0Akt.mjs";
import { r as DeskTitle } from "./chrome-Cxa8Hguc.mjs";
import { t as formatDay } from "./format-BuNRHYqX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/news-WZqpMBg4.js
var import_jsx_runtime = require_jsx_runtime();
var ORDER = [
	"in_review",
	"ready",
	"draft",
	"published",
	"archived"
];
function NewsDesk() {
	const news = useCms((state) => state.news);
	const { session } = useSession();
	const sorted = news.slice().sort((a, b) => ORDER.indexOf(a.status) - ORDER.indexOf(b.status));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-6 flex flex-wrap items-end justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskTitle, {
			title: "News",
			lede: "Stories move from draft to review to ready, and only then to the public site."
		}), session && canDraft(session.role) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/admin/news/$id",
			params: { id: "new" },
			className: "inline-flex min-h-11 items-center bg-navy px-4 text-sm font-semibold text-paper",
			children: "New story"
		}) : null]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "divide-y divide-line border-y border-line bg-paper",
		children: sorted.map((article) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/admin/news/$id",
			params: { id: article.id },
			className: "grid gap-1 px-4 py-4 sm:grid-cols-[8rem_1fr_auto]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-semibold tracking-widest text-gold-deep uppercase",
					children: article.status.replace("_", " ")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block font-semibold text-navy",
					children: article.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-sm text-muted",
					children: [
						article.category,
						" · ",
						article.authorName
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-muted",
					children: formatDay(article.updatedAt)
				})
			]
		}) }, article.id))
	})] });
}
//#endregion
export { NewsDesk as component };
