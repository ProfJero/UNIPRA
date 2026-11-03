import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { f as useCms, l as canReview } from "./utils-CTaqdGFc.mjs";
import { T as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as useSession } from "./session-B8at0Akt.mjs";
import { n as Deny, r as DeskTitle } from "./chrome-Cxa8Hguc.mjs";
import { t as Button } from "./button-DNQL9KTZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pages-9V57ekta.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PagesDesk() {
	const pages = useCms((state) => state.pages);
	const setPage = useCms((state) => state.setPage);
	const { session } = useSession();
	if (!session) return null;
	if (!canReview(session.role)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Deny, { children: "Page text is edited by an editor or an administrator." });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskTitle, {
		title: "Pages",
		lede: "These passages appear on the public site. The dated history and the admissions rules stay in their own desks."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "space-y-4",
		children: pages.map((page) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageForm, {
			id: page.id,
			label: page.label,
			body: page.body,
			onSave: setPage
		}) }, page.id))
	})] });
}
function PageForm({ id, label, body, onSave }) {
	const [text, setText] = (0, import_react.useState)(body);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "grid gap-2 border border-line bg-paper p-4",
		onSubmit: (event) => {
			event.preventDefault();
			onSave(id, text);
			toast.success("Page saved.");
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				className: "field min-h-32 py-2",
				value: text,
				onChange: (event) => setText(event.target.value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				variant: "line",
				children: "Save"
			})
		]
	});
}
//#endregion
export { PagesDesk as component };
