import { f as useCms } from "./utils-CTaqdGFc.mjs";
import { T as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageIntro, c as Wrap, o as Prose, s as SiteShell } from "./router-D-gmTq1A.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/history-CGL8bxkP.js
var import_jsx_runtime = require_jsx_runtime();
function HistoryPage() {
	const intro = useCms((state) => state.pages.find((item) => item.id === "history-intro")?.body ?? "");
	const milestones = useCms((state) => state.milestones);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Our history",
		title: "Thirteen October, nineteen seventy-six.",
		lede: "One hundred and twelve pioneers. Twelve classrooms. One laboratory. A school planted between the Faculty of Education and the Ghana Education Service."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
		className: "grid gap-12 py-14 lg:grid-cols-[0.8fr_1.2fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, { text: intro }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/media/coast.jpg",
				alt: "The coast at Cape Coast in late-afternoon light",
				className: "mt-8 w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Cape Coast, the school’s home city. An atmospheric study, not a campus photograph."
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "border-l border-gold",
			children: milestones.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "py-5 pl-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-gold-deep uppercase",
						children: item.year
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 text-2xl",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 leading-relaxed text-muted",
						children: item.body
					})
				]
			}, item.id))
		})]
	})] });
}
//#endregion
export { HistoryPage as component };
