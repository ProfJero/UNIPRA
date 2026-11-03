import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { d as roleLabel, f as useCms, n as ROLE_OPTIONS, s as canManageUsers } from "./utils-CTaqdGFc.mjs";
import { T as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as useSession, t as PREVIEW_STAFF } from "./session-B8at0Akt.mjs";
import { n as Deny, r as DeskTitle } from "./chrome-Cxa8Hguc.mjs";
import { t as Button } from "./button-DNQL9KTZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/users-vwxIpUK2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function UsersDesk() {
	const staff = useCms((state) => state.staff);
	const addStaff = useCms((state) => state.addStaff);
	const removeStaff = useCms((state) => state.removeStaff);
	const { session } = useSession();
	const [role, setRole] = (0, import_react.useState)("media");
	if (!session) return null;
	if (!canManageUsers(session.role)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Deny, { children: "Only the super administrator manages accounts." });
	function onSubmit(event) {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		const password = String(form.get("password") ?? "");
		if (password.length < 8) {
			toast.error("Use at least 8 characters.");
			return;
		}
		const error = addStaff({
			id: crypto.randomUUID(),
			name: String(form.get("name") ?? "").trim(),
			email: String(form.get("email") ?? ""),
			password,
			role
		});
		if (error) {
			toast.error(error);
			return;
		}
		event.currentTarget.reset();
		toast.success("Preview account added on this browser.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskTitle, {
			title: "Users and roles",
			lede: "Preview accounts live in this browser, in plain storage, and are not a production lock. Real staff belong in Supabase, with passwords hashed by the Cloudflare Worker."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-xl",
			children: "Built-in preview roles"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-2 divide-y divide-line border-y border-line bg-paper",
			children: PREVIEW_STAFF.map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "px-4 py-3 text-sm",
				children: [
					roleLabel(member.role),
					" — ",
					member.email
				]
			}, member.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-8 text-xl",
			children: "Extra preview accounts"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "mt-3 grid gap-3 border border-line bg-paper p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field",
					name: "name",
					placeholder: "Name",
					required: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field",
					name: "email",
					type: "email",
					placeholder: "Email",
					required: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field",
					name: "password",
					type: "text",
					placeholder: "Password",
					required: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					className: "field",
					value: role,
					onChange: (event) => setRole(event.target.value),
					children: ROLE_OPTIONS.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: option,
						children: roleLabel(option)
					}, option))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					children: "Add preview account"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 divide-y divide-line border-y border-line bg-paper",
			children: staff.map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center justify-between px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					member.name,
					" · ",
					roleLabel(member.role),
					" · ",
					member.email
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-sm font-semibold",
					onClick: () => removeStaff(member.id),
					children: "Remove"
				})]
			}, member.id))
		})
	] });
}
//#endregion
export { UsersDesk as component };
