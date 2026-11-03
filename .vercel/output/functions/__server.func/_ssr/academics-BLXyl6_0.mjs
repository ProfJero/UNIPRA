import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { f as useCms, i as canDelete, l as canReview } from "./utils-CTaqdGFc.mjs";
import { T as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as useSession } from "./session-B8at0Akt.mjs";
import { n as Deny, r as DeskTitle } from "./chrome-Cxa8Hguc.mjs";
import { t as Button } from "./button-DNQL9KTZ.mjs";
import { r as slugify } from "./format-BuNRHYqX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/academics-BLXyl6_0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AcademicsDesk() {
	const programmes = useCms((state) => state.programmes);
	const save = useCms((state) => state.saveProgramme);
	const remove = useCms((state) => state.deleteProgramme);
	const { session } = useSession();
	const [current, setCurrent] = (0, import_react.useState)(null);
	if (!session) return null;
	if (!canReview(session.role)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Deny, { children: "Programme text is edited by an editor or an administrator." });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskTitle, {
			title: "Academics",
			lede: "Confirm every programme against the current GES register before you describe it as offered."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "divide-y divide-line border-y border-line bg-paper",
			children: programmes.map((programme) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "min-h-11 w-full px-4 py-3 text-left font-semibold text-navy",
				onClick: () => setCurrent(programme),
				children: programme.name
			}) }, programme.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			type: "button",
			variant: "line",
			className: "mt-4",
			onClick: () => setCurrent({
				id: crypto.randomUUID(),
				slug: "",
				name: "",
				summary: "",
				body: "",
				subjects: ""
			}),
			children: "New programme"
		}),
		current ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mt-4 grid gap-3 border border-line bg-paper p-4",
			onSubmit: (event) => {
				event.preventDefault();
				const next = {
					...current,
					slug: current.slug.trim() || slugify(current.name)
				};
				save(next);
				toast.success("Programme saved.");
				setCurrent(null);
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field",
					value: current.name,
					placeholder: "Name",
					onChange: (event) => setCurrent({
						...current,
						name: event.target.value
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field",
					value: current.summary,
					placeholder: "One-line summary",
					onChange: (event) => setCurrent({
						...current,
						summary: event.target.value
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					className: "field min-h-32 py-2",
					value: current.body,
					onChange: (event) => setCurrent({
						...current,
						body: event.target.value
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					className: "field min-h-20 py-2",
					value: current.subjects,
					onChange: (event) => setCurrent({
						...current,
						subjects: event.target.value
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						children: "Save"
					}), canDelete(session.role) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						onClick: () => {
							remove(current.id);
							setCurrent(null);
						},
						children: "Delete"
					}) : null]
				})
			]
		}) : null
	] });
}
//#endregion
export { AcademicsDesk as component };
