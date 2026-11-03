import { f as useCms } from "./utils-CTaqdGFc.mjs";
import { T as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageIntro, c as Wrap, o as Prose, s as SiteShell } from "./router-D-gmTq1A.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admissions-BWHAMzOV.js
var import_jsx_runtime = require_jsx_runtime();
var FAQS = [
	{
		q: "Can I apply on this website?",
		a: "No. Placement into public senior high schools is through the Computerised School Selection and Placement System. This site explains the school. It does not take an application."
	},
	{
		q: "Is there a form fee or a ‘protocol’ fee?",
		a: "Not from the school, and not on this website. Anyone asking you to send mobile money for a place at UNIPRA should be refused and reported."
	},
	{
		q: "What is the school code?",
		a: "Public directories list 0030105. Check the code on the current Ghana Education Service register for your placement year before you write it on a form."
	},
	{
		q: "Is the school day, boarding, or both?",
		a: "It is publicly listed as mixed, day and boarding, Category B, in the Cape Coast Metropolis. Track arrangements follow the current GES calendar."
	},
	{
		q: "Which documents should a parent prepare?",
		a: "Follow the checklist published with CSSPS for that year: typically the placement slip, BECE results, and the identification the portal asks for. The school office will say if it needs anything further after placement. Do not send certificates to a private number."
	},
	{
		q: "Who do I call?",
		a: "Use the telephone and email on the contact page. Those details are taken from the school’s public listings and can be corrected by the administration."
	}
];
function AdmissionsPage() {
	const intro = useCms((state) => state.pages.find((item) => item.id === "admissions-intro")?.body ?? "");
	const settings = useCms((state) => state.settings);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Admissions",
			title: "Placement is national. It is not for sale.",
			lede: "Free Senior High School. The Computerised School Selection and Placement System. No cashier on this website."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
			className: "grid gap-12 py-14 lg:grid-cols-[1.1fr_0.9fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, { text: intro }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-8 space-y-5",
				children: [
					"Choose UNIPRA on the CSSPS form only if the programme you want is on that year’s GES list for this school.",
					"Wait for the official placement. The school does not announce private lists in advance.",
					"When placed, follow the reporting date the GES and the school publish. Bring what the checklist asks for.",
					"If anything about a fee is unclear, telephone the office before you pay anyone."
				].map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid grid-cols-[2.5rem_1fr] gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-2xl text-gold-deep",
						children: ["0", index + 1]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "leading-relaxed",
						children: step
					})]
				}, step))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "border border-navy bg-navy p-6 text-paper",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-gold uppercase",
						children: "Office"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-display text-2xl text-paper",
						children: "Speak to the school, not a broker."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-cream",
						children: settings.phone
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-cream",
						children: settings.email
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-cream",
						children: settings.poBox
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "mt-6 inline-flex min-h-11 items-center bg-gold px-4 text-sm font-semibold text-navy",
						children: "Write to the office"
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
				className: "py-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl",
					children: "Questions parents actually ask"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 divide-y divide-line",
					children: FAQS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "group py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
							className: "cursor-pointer list-none text-lg font-semibold text-navy",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mr-2 text-gold-deep",
								"aria-hidden": true,
								children: "+"
							}), item.q]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-3xl pl-5 leading-relaxed text-muted",
							children: item.a
						})]
					}, item.q))
				})]
			})
		})
	] });
}
//#endregion
export { AdmissionsPage as component };
