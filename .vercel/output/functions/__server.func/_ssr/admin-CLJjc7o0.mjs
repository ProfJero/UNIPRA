import { d as roleLabel, f as useCms } from "./utils-CTaqdGFc.mjs";
import { T as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useSession } from "./session-B8at0Akt.mjs";
import { r as DeskTitle } from "./chrome-Cxa8Hguc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-CLJjc7o0.js
var import_jsx_runtime = require_jsx_runtime();
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
		["Events", events.filter((item) => item.visible).length]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskTitle, {
			title: "Overview",
			lede: "Media writes. An editor reads. A school administrator publishes. Nothing reaches the public site until that last step."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-3 sm:grid-cols-3 lg:grid-cols-5",
			children: counts.map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "border border-line bg-paper p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl text-navy",
					children: value
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: label
				})]
			}, label))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-8 border border-line bg-paper p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl",
					children: "How a story moves"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-4 grid gap-4 sm:grid-cols-4",
					children: [
						[
							"1",
							"Media Team",
							"Writes a draft, or sends it for review."
						],
						[
							"2",
							"Editor",
							"Corrects it and marks it ready."
						],
						[
							"3",
							"Administrator",
							"Publishes, or sends it back."
						],
						[
							"4",
							"Public site",
							"Only published stories are visible."
						]
					].map(([n, title, body]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl text-gold-deep",
							children: n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: body
						})
					] }, n))
				}),
				session ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-sm text-muted",
					children: [
						"You are signed in as ",
						roleLabel(session.role),
						session.mode === "preview" ? " on the preview desk. Edits stay in this browser until Supabase is connected." : " against the live desk."
					]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/admin/news",
					className: "mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-navy",
					children: "Open the news desk"
				})
			]
		})
	] });
}
//#endregion
export { Dashboard as component };
