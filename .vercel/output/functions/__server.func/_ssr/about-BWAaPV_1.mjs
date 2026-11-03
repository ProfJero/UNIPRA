import { f as useCms } from "./utils-CTaqdGFc.mjs";
import { T as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageIntro, c as Wrap, o as Prose, s as SiteShell } from "./router-D-gmTq1A.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BWAaPV_1.js
var import_jsx_runtime = require_jsx_runtime();
var FACTS = [
	["Opened", "13 October 1976"],
	["Nickname", "UNIPRA"],
	["Motto", "Service to the Community"],
	["Category", "B"],
	["Students", "Mixed"],
	["Residency", "Day and boarding"],
	["District", "Cape Coast Metropolitan Assembly"],
	["Union", "UPOSA"],
	["Houses", "Six"],
	["Directory code", "0030105 — confirm on the current GES register"]
];
function AboutPage() {
	const intro = useCms((state) => state.pages.find((item) => item.id === "home-intro")?.body ?? "");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "About UNIPRA",
			title: "A public school on the University campus.",
			lede: "University Practice Senior High School was founded so that the Faculty of Education could have a practice school, and so that Cape Coast would have another public senior high school worthy of the name."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
			className: "grid gap-12 py-14 lg:grid-cols-[1.1fr_0.9fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, { text: intro }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl",
						children: "Vision"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 leading-relaxed",
						children: "To be a centre of excellence in moral, academic and vocational education — a school of choice in the Cape Coast Metropolis and in the nation."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl",
							children: "Mission"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 leading-relaxed",
							children: "To provide a holistic secondary education aimed at excellence and competence, through discipline and hard work. To send out people who are physically fit, morally upright and academically sound, ready to serve themselves, their families and society."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: "Wording follows the vision and mission published by the school in 2024. “Hard work” is used for the phrase that circulated as “handwork”."
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl",
						children: "What the motto asks"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 divide-y divide-line border-y border-line",
						children: [
							["Service", "The crest says it, and the Head of State Award work of 2022 showed it in the communities of the Central Region."],
							["Discipline", "The mission names discipline as the means, not as a slogan beside the gate."],
							["Competence", "Academic and vocational work, examined in public, not claimed in private."],
							["Character", "Morally upright is part of the mission, not an extra-curricular afterthought."]
						].map(([title, body]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid gap-1 py-4 sm:grid-cols-[8rem_1fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl",
								children: title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted",
								children: body
							})]
						}, title))
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/crest.png",
						alt: "School crest",
						className: "w-full border border-line bg-paper object-contain p-6"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "border border-line bg-paper",
						children: FACTS.map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[7.5rem_1fr] gap-3 border-b border-line px-4 py-3 last:border-b-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs font-semibold tracking-widest text-gold-deep uppercase",
								children: label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: value })]
						}, label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "grid gap-2 text-sm font-semibold",
						"aria-label": "About sections",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/history",
								className: "min-h-11 border border-line bg-paper px-4 py-3 hover:border-navy",
								children: "History"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/leadership",
								className: "min-h-11 border border-line bg-paper px-4 py-3 hover:border-navy",
								children: "Leadership"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/houses",
								className: "min-h-11 border border-line bg-paper px-4 py-3 hover:border-navy",
								children: "Houses"
							})
						]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
				className: "grid gap-8 py-14 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl",
					children: "Campus and facilities"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 leading-relaxed text-muted",
					children: "The school opened with twelve classrooms and one science laboratory, and it used the libraries and laboratories of the University of Cape Coast. It is now a day and boarding school. A room-by-room inventory is not published here until the administration files one. The media team can replace the layout studies in the gallery with official photographs."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl",
					children: "Student life"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 leading-relaxed text-muted",
					children: "Boarding and day students share six houses. The students’ union is UPOSA. A cadet corps has been part of public accounts of student leadership. The school anthem will be published on this page only after the administration approves the text."
				})] })]
			})
		})
	] });
}
//#endregion
export { AboutPage as component };
