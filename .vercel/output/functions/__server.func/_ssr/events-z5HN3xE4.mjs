import { f as useCms } from "./utils-CTaqdGFc.mjs";
import { T as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageIntro, c as Wrap, s as SiteShell } from "./router-D-gmTq1A.mjs";
import { n as isUpcoming, t as formatDay } from "./format-BuNRHYqX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events-z5HN3xE4.js
var import_jsx_runtime = require_jsx_runtime();
function EventsPage() {
	const events = useCms((state) => state.events.filter((item) => item.visible));
	const upcoming = events.filter((item) => isUpcoming(item.startsOn));
	const earlier = events.filter((item) => !isUpcoming(item.startsOn));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Calendar",
		title: "Dates the school will stand behind.",
		lede: "If a ceremony is only being discussed on social media, it is not listed here as a confirmed programme. Founders’ Day is 13 October, the date of the opening in 1976."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
		className: "grid gap-12 py-14 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-2xl",
			children: "Ahead"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventList, {
			items: upcoming,
			empty: "Nothing further is dated."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-2xl",
			children: "Already observed"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventList, {
			items: earlier,
			empty: "No earlier entries."
		})] })]
	})] });
}
function EventList({ items, empty }) {
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-4 text-muted",
		children: empty
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-4 divide-y divide-line border-y border-line",
		children: items.map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "py-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-semibold tracking-widest text-gold-deep uppercase",
					children: [
						formatDay(event.startsOn),
						event.endsOn && event.endsOn !== event.startsOn ? ` – ${formatDay(event.endsOn)}` : "",
						" · ",
						event.place
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 text-2xl",
					children: event.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: event.summary
				})
			]
		}, event.id))
	});
}
//#endregion
export { EventsPage as component };
