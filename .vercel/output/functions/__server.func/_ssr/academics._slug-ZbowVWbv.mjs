import { f as useCms } from "./utils-CTaqdGFc.mjs";
import { T as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageIntro, c as Wrap, i as Route$15, o as Prose, s as SiteShell } from "./router-D-gmTq1A.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/academics._slug-ZbowVWbv.js
var import_jsx_runtime = require_jsx_runtime();
function ProgrammePage() {
	const { slug } = Route$15.useParams();
	const programme = useCms((state) => state.programmes.find((item) => item.slug === slug));
	if (!programme) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Academics",
		title: "This programme is not listed.",
		lede: "It may have been renamed. Return to the academic list."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrap, {
		className: "py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/academics",
			className: "font-semibold text-navy",
			children: "All programmes"
		})
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Academics",
		title: programme.name,
		lede: programme.summary
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
		className: "max-w-3xl py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, { text: programme.body }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 border border-line bg-paper p-4 text-sm leading-relaxed text-muted",
				children: programme.subjects
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/admissions",
				className: "mt-8 inline-flex min-h-11 items-center bg-navy px-4 text-sm font-semibold text-paper",
				children: "Admissions guidance"
			})
		]
	})] });
}
//#endregion
export { ProgrammePage as component };
