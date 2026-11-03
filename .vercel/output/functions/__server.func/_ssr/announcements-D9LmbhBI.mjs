import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { a as canDraft, f as useCms, i as canDelete } from "./utils-CTaqdGFc.mjs";
import { T as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as useSession } from "./session-B8at0Akt.mjs";
import { n as Deny, r as DeskTitle } from "./chrome-Cxa8Hguc.mjs";
import { t as Button } from "./button-DNQL9KTZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/announcements-D9LmbhBI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function NoticesDesk() {
	const items = useCms((state) => state.announcements);
	const save = useCms((state) => state.saveAnnouncement);
	const remove = useCms((state) => state.deleteAnnouncement);
	const { session } = useSession();
	const [draft, setDraft] = (0, import_react.useState)({
		id: crypto.randomUUID(),
		title: "",
		body: "",
		active: true,
		publishedAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
	});
	if (!session) return null;
	if (!canDraft(session.role)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Deny, { children: "Viewers cannot edit notices." });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskTitle, {
			title: "Notices",
			lede: "Short lines for the navy band on the home page. Active notices are public."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "grid gap-3 border border-line bg-paper p-4",
			onSubmit: (event) => {
				event.preventDefault();
				if (!draft.title.trim()) return;
				save(draft);
				toast.success("Notice saved.");
				setDraft({
					id: crypto.randomUUID(),
					title: "",
					body: "",
					active: true,
					publishedAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
				});
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
					placeholder: "Text",
					value: draft.body,
					onChange: (event) => setDraft({
						...draft,
						body: event.target.value
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex min-h-11 items-center gap-2 text-sm font-semibold text-navy",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: draft.active,
						onChange: (event) => setDraft({
							...draft,
							active: event.target.checked
						})
					}), "Show on the public site"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					children: "Add notice"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-6 divide-y divide-line border-y border-line",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex flex-wrap items-start justify-between gap-3 bg-paper px-4 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold text-navy",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: item.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-gold-deep",
						children: item.active ? "Public" : "Hidden"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "line",
						size: "sm",
						onClick: () => save({
							...item,
							active: !item.active
						}),
						children: item.active ? "Hide" : "Show"
					}), canDelete(session.role) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						size: "sm",
						onClick: () => remove(item.id),
						children: "Delete"
					}) : null]
				})]
			}, item.id))
		})
	] });
}
//#endregion
export { NoticesDesk as component };
