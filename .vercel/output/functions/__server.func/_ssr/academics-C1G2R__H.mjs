import { f as useCms } from "./utils-CTaqdGFc.mjs";
import { T as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageIntro, c as Wrap, s as SiteShell } from "./router-D-gmTq1A.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/academics-C1G2R__H.js
var import_jsx_runtime = require_jsx_runtime();
function AcademicsPage() {
	const programmes = useCms((state) => state.programmes);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Academics",
		title: "What the school teaches.",
		lede: "General Arts and General Science were the opening electives in 1976. Business, Visual Arts and Home Economics are publicly described as later additions. Management should confirm this list against the current GES register before each admission season. Agricultural Science and technical programmes are not listed, because the public record used here does not establish them."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrap, {
		className: "divide-y divide-line border-y border-line",
		children: programmes.map((programme) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "grid gap-3 py-8 lg:grid-cols-[16rem_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/academics/$slug",
					params: { slug: programme.slug },
					className: "hover:text-gold-deep",
					children: programme.name
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "leading-relaxed text-muted",
				children: programme.summary
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/academics/$slug",
				params: { slug: programme.slug },
				className: "mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-navy",
				children: "Read the note"
			})] })]
		}, programme.id))
	})] });
}
//#endregion
export { AcademicsPage as component };
