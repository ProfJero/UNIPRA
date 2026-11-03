import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { f as useCms } from "./utils-CTaqdGFc.mjs";
import { T as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as PageIntro, c as Wrap, s as SiteShell } from "./router-D-gmTq1A.mjs";
import { t as Button } from "./button-DNQL9KTZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CVujh4u4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const settings = useCms((state) => state.settings);
	const addEnquiry = useCms((state) => state.addEnquiry);
	const [sent, setSent] = (0, import_react.useState)("");
	const [pending, setPending] = (0, import_react.useState)(false);
	async function onSubmit(event) {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		if (String(form.get("company") ?? "").trim()) return;
		const name = String(form.get("name") ?? "").trim();
		const email = String(form.get("email") ?? "").trim();
		const message = String(form.get("message") ?? "").trim();
		if (name.length < 2 || !email.includes("@") || message.length < 10) {
			toast.error("Add your name, a real email, and a message of at least a short sentence.");
			return;
		}
		const enquiry = {
			id: crypto.randomUUID(),
			name,
			email,
			phone: String(form.get("phone") ?? "").trim(),
			audience: String(form.get("audience") ?? "Other"),
			subject: String(form.get("subject") ?? "").trim() || "Enquiry",
			message: message.slice(0, 4e3),
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			status: "new"
		};
		setPending(true);
		const worker = settings.workerUrl.trim();
		if (worker) try {
			if (!(await fetch(`${worker.replace(/\/$/, "")}/v1/enquiries`, {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({
					...enquiry,
					company: ""
				})
			})).ok) throw new Error("refused");
			setSent("The office has the message. It will be read from the staff desk.");
			event.currentTarget.reset();
		} catch {
			addEnquiry(enquiry);
			setSent("We could not reach the school desk. The message is kept on this browser only. Please telephone the office.");
		}
		else {
			addEnquiry(enquiry);
			setSent("This preview keeps your message in the staff desk on this browser. It is not emailed. When the school connects its Cloudflare Worker, messages go to the office.");
			event.currentTarget.reset();
		}
		setPending(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Contact",
		title: "The office, plainly.",
		lede: "These details come from the school’s public Facebook listing and national directories. The administration can correct them. If a number disagrees with a flyer in your hand, trust the one published here only after you have heard it from the school."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
		className: "grid gap-12 py-14 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl text-navy",
					children: "University Practice Senior High School"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "leading-relaxed",
					children: [
						settings.poBox,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						settings.address
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "font-semibold text-navy",
					href: `tel:${settings.phone.replace(/\s/g, "")}`,
					children: settings.phone
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "font-semibold text-navy",
					href: `mailto:${settings.email}`,
					children: settings.email
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: settings.officeHours
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "font-semibold text-navy",
						href: settings.facebook,
						children: "Facebook"
					}), settings.youtube ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [" · ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "font-semibold text-navy",
						href: settings.youtube,
						children: "YouTube"
					})] }) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "Map of University Practice Senior High School on the University of Cape Coast campus",
					className: "mt-4 h-72 w-full border border-line",
					src: "https://www.openstreetmap.org/export/embed.html?bbox=-1.300%2C5.114%2C-1.272%2C5.135&layer=mapnik&marker=5.1245%2C-1.286"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted",
					children: [
						"Marker at 5.1245° N, 1.2860° W, the coordinate published for the school.",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "underline",
							href: "https://www.openstreetmap.org/?mlat=5.1245&mlon=-1.286#map=16/5.1245/-1.286",
							children: "Open the map"
						}),
						"."
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "space-y-4 border border-line bg-paper p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl",
					children: "Enquiry"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "lbl",
						children: "Name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field",
						name: "name",
						autoComplete: "name",
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "lbl",
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field",
						name: "email",
						type: "email",
						autoComplete: "email",
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "lbl",
						children: "Telephone"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field",
						name: "phone",
						autoComplete: "tel"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "lbl",
						children: "I am writing as"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "field",
						name: "audience",
						defaultValue: "Parent or guardian",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Prospective student" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Parent or guardian" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Current student" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Old student" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Partner" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Other" })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "lbl",
						children: "Subject"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field",
						name: "subject"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "lbl",
						children: "Message"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						className: "field min-h-36 py-2",
						name: "message",
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "sr-only",
					children: ["Company", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "company",
						tabIndex: -1,
						autoComplete: "off"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					disabled: pending,
					children: pending ? "Sending…" : "Send to the office"
				}),
				sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-navy",
					children: sent
				}) : null
			]
		})]
	})] });
}
//#endregion
export { ContactPage as component };
