import { f as useCms } from "./utils-CTaqdGFc.mjs";
import { T as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Wrap, o as Prose, s as SiteShell } from "./router-D-gmTq1A.mjs";
import { t as Button } from "./button-DNQL9KTZ.mjs";
import { n as isUpcoming, t as formatDay } from "./format-BuNRHYqX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-bTyWZDXu.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const page = useCms((state) => state.pages.find((item) => item.id === "home-intro")?.body ?? "");
	const news = useCms((state) => state.news.filter((item) => item.status === "published").slice().sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? "")));
	const announcements = useCms((state) => state.announcements.filter((item) => item.active));
	const programmes = useCms((state) => state.programmes);
	const events = useCms((state) => state.events.filter((item) => item.visible && isUpcoming(item.startsOn)).slice(0, 3));
	const houses = useCms((state) => state.houses);
	const lead = news[0];
	const rest = news.slice(1, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-line bg-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
				className: "grid items-center gap-10 py-12 lg:grid-cols-[1.4fr_0.8fr] lg:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-gold-deep uppercase",
						children: "Cape Coast · Established 13 October 1976"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 text-4xl leading-none sm:text-6xl",
						children: ["A legacy of learning.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 block text-gold-deep",
							children: "A charge to serve."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-lg leading-relaxed text-muted",
						children: "Welcome to University Practice Senior High School. Fifty years on the campus of the University of Cape Coast, still under the same motto."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/history",
								children: "Our history"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "line",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/admissions",
								children: "Admissions guidance"
							})
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "justify-self-center border border-gold bg-cream p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/crest-gold.jpg",
						alt: "Ceremonial crest of University Practice Senior High School, with the motto Service to the Community and the word Floreat",
						className: "w-64 max-w-full bg-paper object-contain sm:w-72"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "px-2 pt-3 text-center font-display text-lg text-navy",
						children: "Floreat"
					})]
				})]
			})
		}),
		announcements.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-line bg-navy text-paper",
			"aria-label": "Announcements",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrap, {
				className: "grid gap-4 py-5 sm:grid-cols-2",
				children: announcements.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg text-paper",
					children: item.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm leading-relaxed text-cream",
					children: item.body
				})] }, item.id))
			})
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
				className: "grid gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/media/flame.jpg",
					alt: "Still life of an open book and a torch, echoing the school crest",
					className: "aspect-3/2 w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-gold-deep uppercase",
						children: "The school"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-3xl sm:text-4xl",
						children: "Service to the Community"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, { text: page })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/about",
						className: "mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-navy underline decoration-gold underline-offset-4",
						children: "About UNIPRA"
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-line bg-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
				className: "py-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl",
							children: "Academic programmes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/academics",
							className: "hidden min-h-11 items-center text-sm font-semibold text-navy sm:inline-flex",
							children: "All programmes"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-muted",
						children: "Publicly described offerings. The academic office confirms the live CSSPS list before each placement season."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-8 divide-y divide-line border-y border-line",
						children: programmes.map((programme, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/academics/$slug",
							params: { slug: programme.slug },
							className: "flex min-h-16 items-baseline gap-4 py-4 hover:bg-cream",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "w-8 font-display text-gold-deep",
									children: ["0", index + 1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl text-navy",
									children: programme.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden text-sm text-muted sm:inline",
									children: programme.summary
								})
							]
						}) }, programme.id))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
				className: "grid gap-12 py-14 lg:grid-cols-[1.2fr_0.8fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl",
						children: "Latest from the school"
					}),
					lead ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "mt-6 border-t border-line pt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs font-semibold tracking-widest text-gold-deep uppercase",
								children: [
									lead.category,
									" · ",
									formatDay(lead.publishedAt)
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-3xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/news/$slug",
									params: { slug: lead.slug },
									className: "hover:text-gold-deep",
									children: lead.title
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-xl text-muted",
								children: lead.excerpt
							})
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 divide-y divide-line border-t border-line",
						children: rest.map((article) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs font-semibold tracking-widest text-muted uppercase",
								children: [
									article.category,
									" · ",
									formatDay(article.publishedAt)
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/news/$slug",
								params: { slug: article.slug },
								className: "mt-1 block font-display text-xl text-navy hover:text-gold-deep",
								children: article.title
							})]
						}, article.id))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl",
						children: "Calendar"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-6 space-y-4",
						children: [events.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-muted",
							children: "No dated events are currently listed."
						}) : null, events.map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border border-line bg-paper p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold tracking-widest text-gold-deep uppercase",
									children: formatDay(event.startsOn)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-display text-xl",
									children: event.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted",
									children: event.summary
								})
							]
						}, event.id))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/events",
						className: "mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-navy",
						children: "Full calendar"
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-line bg-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
				className: "py-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl",
						children: "Six houses"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-muted",
						children: "Ackah, Densu, Tano, Nkrumah, Pra and Volta. House colours and histories can be added by the school; they are not invented here."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 grid grid-cols-2 gap-px bg-line sm:grid-cols-3 lg:grid-cols-6",
						children: houses.map((house) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "bg-paper px-3 py-5 text-center font-display text-xl text-navy",
							children: house.name
						}, house.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/houses",
						className: "mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-navy underline decoration-gold underline-offset-4",
						children: "House life"
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
			className: "grid gap-8 py-14 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-line bg-navy p-8 text-paper",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-gold uppercase",
						children: "Old students"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-3xl text-paper",
						children: "UPOSANS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 leading-relaxed text-cream",
						children: "The association’s public news lives here. There is no open directory of individual old students."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/alumni",
						className: "mt-6 inline-flex min-h-11 items-center bg-gold px-4 text-sm font-semibold text-navy",
						children: "Alumni"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-line bg-paper p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-gold-deep uppercase",
						children: "Visit"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-3xl",
						children: "The campus is inside the University"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 leading-relaxed text-muted",
						children: "P.O. Box UC 092, Cape Coast. Write to the office, or use the enquiry form. Do not send money."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "mt-6 inline-flex min-h-11 items-center border border-navy px-4 text-sm font-semibold text-navy",
						children: "Contact the school"
					})
				]
			})]
		}) })
	] });
}
//#endregion
export { Home as component };
