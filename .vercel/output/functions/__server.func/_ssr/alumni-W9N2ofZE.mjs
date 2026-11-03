import { f as useCms } from "./utils-CTaqdGFc.mjs";
import { T as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageIntro, c as Wrap, o as Prose, s as SiteShell } from "./router-D-gmTq1A.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/alumni-W9N2ofZE.js
var import_jsx_runtime = require_jsx_runtime();
function AlumniPage() {
	const intro = useCms((state) => state.pages.find((item) => item.id === "alumni-intro")?.body ?? "");
	const settings = useCms((state) => state.settings);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Alumni",
		title: "UPOSANS, without a public roll.",
		lede: "A directory of old students would publish people’s names without a good reason. Reunion news, service, and the association’s official contact are enough."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
		className: "grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, { text: intro }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl",
					children: "What belongs here"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 list-disc space-y-2 pl-5 text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Reunion and homecoming notices the school has confirmed." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Service projects and year-group gifts, once the administration accepts the account." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The official contact for the old students’ association." })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl",
					children: "What does not"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted",
					children: "Individual biographies, phone numbers, and a searchable register of old students. If the association later wants a register, it should be a separate system, with consent, not a page on the public site."
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "border border-line bg-paper p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl",
					children: "Write to the school"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: "Association officers can send reunion copy through the enquiry form. Mark the audience as alumni. The office will publish what it is willing to own."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm",
					children: settings.email
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "mt-6 inline-flex min-h-11 items-center bg-navy px-4 text-sm font-semibold text-paper",
					children: "Enquiry form"
				})
			]
		})]
	})] });
}
//#endregion
export { AlumniPage as component };
