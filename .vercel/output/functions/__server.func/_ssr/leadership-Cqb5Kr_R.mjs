import { f as useCms } from "./utils-CTaqdGFc.mjs";
import { T as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageIntro, c as Wrap, s as SiteShell } from "./router-D-gmTq1A.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/leadership-Cqb5Kr_R.js
var import_jsx_runtime = require_jsx_runtime();
function initials(name) {
	return name.split(" ").filter((part) => part.length > 2).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}
function LeadershipPage() {
	const leaders = useCms((state) => state.leaders);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Leadership",
		title: "The people the school is prepared to name.",
		lede: "Only offices the administration has confirmed, or that the public record already names, appear here. Portraits are added when the school supplies them. No likeness is invented."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
		className: "grid gap-6 py-14",
		children: [leaders.map((leader) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "grid gap-5 border border-line bg-paper p-6 sm:grid-cols-[auto_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid size-16 place-items-center bg-navy font-display text-xl text-paper",
				"aria-hidden": true,
				children: initials(leader.name)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl",
					children: leader.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm font-semibold tracking-widest text-gold-deep uppercase",
					children: leader.role
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl leading-relaxed text-muted",
					children: leader.note
				})
			] })]
		}, leader.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "Assistant headmasters, senior housemasters and chaplains are omitted until the school adds them from the staff desk. An incomplete list is better than a decorative one."
		})]
	})] });
}
//#endregion
export { LeadershipPage as component };
