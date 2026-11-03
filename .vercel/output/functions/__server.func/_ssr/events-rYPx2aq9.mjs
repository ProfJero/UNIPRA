import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { a as canDraft, f as useCms, i as canDelete } from "./utils-CTaqdGFc.mjs";
import { T as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as useSession } from "./session-B8at0Akt.mjs";
import { n as Deny, r as DeskTitle } from "./chrome-Cxa8Hguc.mjs";
import { t as Button } from "./button-DNQL9KTZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events-rYPx2aq9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function empty() {
	return {
		id: crypto.randomUUID(),
		title: "",
		summary: "",
		startsOn: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
		endsOn: "",
		place: "School campus, Cape Coast",
		category: "School calendar",
		visible: true
	};
}
function EventsDesk() {
	const events = useCms((state) => state.events);
	const save = useCms((state) => state.saveEvent);
	const remove = useCms((state) => state.deleteEvent);
	const { session } = useSession();
	const [draft, setDraft] = (0, import_react.useState)(empty);
	if (!session) return null;
	if (!canDraft(session.role)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Deny, { children: "Viewers cannot edit the calendar." });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskTitle, {
			title: "Events",
			lede: "Only dates the school will confirm. Social-media rumours stay off this list."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "grid gap-3 border border-line bg-paper p-4",
			onSubmit: (event) => {
				event.preventDefault();
				if (!draft.title.trim()) return;
				save(draft);
				toast.success("Event saved.");
				setDraft(empty());
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field",
					placeholder: "Title",
					value: draft.title,
					onChange: (event) => setDraft({
						...draft,
						title: event.target.value
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					className: "field min-h-24 py-2",
					placeholder: "What is actually confirmed",
					value: draft.summary,
					onChange: (event) => setDraft({
						...draft,
						summary: event.target.value
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "lbl",
							children: "Starts"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "field",
							type: "date",
							value: draft.startsOn,
							onChange: (event) => setDraft({
								...draft,
								startsOn: event.target.value
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "lbl",
							children: "Ends"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "field",
							type: "date",
							value: draft.endsOn,
							onChange: (event) => setDraft({
								...draft,
								endsOn: event.target.value
							})
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field",
					placeholder: "Place",
					value: draft.place,
					onChange: (event) => setDraft({
						...draft,
						place: event.target.value
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					children: "Add event"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-6 space-y-3",
			children: events.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex flex-wrap items-start justify-between gap-3 border border-line bg-paper p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold text-navy",
					children: item.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						item.startsOn,
						" · ",
						item.place
					]
				})] }), canDelete(session.role) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					size: "sm",
					onClick: () => remove(item.id),
					children: "Delete"
				}) : null]
			}, item.id))
		})
	] });
}
//#endregion
export { EventsDesk as component };
