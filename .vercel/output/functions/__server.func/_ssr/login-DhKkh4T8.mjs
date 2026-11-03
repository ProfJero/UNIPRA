import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { d as roleLabel } from "./utils-CTaqdGFc.mjs";
import { S as Navigate, T as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useSession, n as signIn, t as PREVIEW_STAFF } from "./session-B8at0Akt.mjs";
import { t as Button } from "./button-DNQL9KTZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-DhKkh4T8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const { session, ready } = useSession();
	const [error, setError] = (0, import_react.useState)("");
	const [pending, setPending] = (0, import_react.useState)(false);
	if (ready && session) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/admin" });
	async function onSubmit(event) {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		setPending(true);
		const message = await signIn(String(form.get("email") ?? ""), String(form.get("password") ?? ""));
		setPending(false);
		setError(message ?? "");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto grid min-h-screen max-w-5xl items-center gap-10 px-5 py-12 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/crest.png",
				alt: "",
				className: "size-20 object-contain"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 text-4xl",
				children: "Staff desk"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-md leading-relaxed text-muted",
				children: "Authorised staff publish what the public site is allowed to say. Preview accounts below work only in this browser, until the Cloudflare Worker and Supabase are connected."
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "space-y-4 border border-line bg-paper p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "lbl",
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field",
						name: "email",
						type: "email",
						autoComplete: "username",
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "lbl",
						children: "Password"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field",
						name: "password",
						type: "password",
						autoComplete: "current-password",
						required: true
					})]
				}),
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-navy",
					children: error
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					disabled: pending,
					children: pending ? "Checking…" : "Enter the desk"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-line pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-gold-deep uppercase",
						children: "Preview accounts"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 space-y-1 text-sm text-muted",
						children: PREVIEW_STAFF.map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							roleLabel(member.role),
							" — ",
							member.email,
							" · ",
							member.password
						] }, member.id))
					})]
				})
			]
		})]
	});
}
//#endregion
export { LoginPage as component };
