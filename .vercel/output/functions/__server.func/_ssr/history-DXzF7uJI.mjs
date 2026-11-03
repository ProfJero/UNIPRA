import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { f as useCms, i as canDelete, l as canReview } from "./utils-CTaqdGFc.mjs";
import { T as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as useSession } from "./session-B8at0Akt.mjs";
import { n as Deny, r as DeskTitle } from "./chrome-Cxa8Hguc.mjs";
import { t as Button } from "./button-DNQL9KTZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/history-DXzF7uJI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HistoryDesk() {
	const milestones = useCms((state) => state.milestones);
	const save = useCms((state) => state.saveMilestone);
	const remove = useCms((state) => state.deleteMilestone);
	const { session } = useSession();
	const [draft, setDraft] = (0, import_react.useState)({
		id: "",
		year: "",
		title: "",
		body: ""
	});
	if (!session) return null;
	if (!canReview(session.role)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Deny, { children: "History is edited by an editor or an administrator." });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskTitle, {
			title: "History",
			lede: "Keep what can be sourced. Mark oral history as oral history."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-4",
			children: milestones.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MilestoneForm, {
				item,
				onSave: (next) => {
					save(next);
					toast.success("Saved.");
				},
				onDelete: canDelete(session.role) ? () => remove(item.id) : void 0
			}) }, item.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mt-6 grid gap-3 border border-line bg-paper p-4",
			onSubmit: (event) => {
				event.preventDefault();
				if (!draft.title.trim()) return;
				save({
					...draft,
					id: crypto.randomUUID()
				});
				setDraft({
					id: "",
					year: "",
					title: "",
					body: ""
				});
				toast.success("Milestone added.");
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl",
					children: "Add a milestone"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field",
					placeholder: "Year or date",
					value: draft.year,
					onChange: (event) => setDraft({
						...draft,
						year: event.target.value
					})
				}),
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
					value: draft.body,
					onChange: (event) => setDraft({
						...draft,
						body: event.target.value
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					children: "Add"
				})
			]
		})
	] });
}
function MilestoneForm({ item, onSave, onDelete }) {
	const [draft, setDraft] = (0, import_react.useState)(item);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "grid gap-2 border border-line bg-paper p-4",
		onSubmit: (event) => {
			event.preventDefault();
			onSave(draft);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "field",
				value: draft.year,
				onChange: (event) => setDraft({
					...draft,
					year: event.target.value
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "field",
				value: draft.title,
				onChange: (event) => setDraft({
					...draft,
					title: event.target.value
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				className: "field min-h-28 py-2",
				value: draft.body,
				onChange: (event) => setDraft({
					...draft,
					body: event.target.value
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					variant: "line",
					children: "Save"
				}), onDelete ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					onClick: onDelete,
					children: "Delete"
				}) : null]
			})
		]
	});
}
//#endregion
export { HistoryDesk as component };
