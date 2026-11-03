import { d as roleLabel, u as cn } from "./utils-CTaqdGFc.mjs";
import { S as Navigate, T as require_jsx_runtime, m as useRouterState, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useSession, r as signOut } from "./session-B8at0Akt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chrome-Cxa8Hguc.js
var import_jsx_runtime = require_jsx_runtime();
var LINKS = [
	{
		to: "/admin",
		label: "Overview",
		exact: true
	},
	{
		to: "/admin/news",
		label: "News"
	},
	{
		to: "/admin/announcements",
		label: "Notices"
	},
	{
		to: "/admin/events",
		label: "Events"
	},
	{
		to: "/admin/gallery",
		label: "Gallery"
	},
	{
		to: "/admin/academics",
		label: "Academics"
	},
	{
		to: "/admin/leadership",
		label: "Leadership"
	},
	{
		to: "/admin/history",
		label: "History"
	},
	{
		to: "/admin/pages",
		label: "Pages"
	},
	{
		to: "/admin/enquiries",
		label: "Enquiries",
		roles: ["super", "admin"]
	},
	{
		to: "/admin/users",
		label: "Users",
		roles: ["super"]
	},
	{
		to: "/admin/settings",
		label: "Settings",
		roles: ["super", "admin"]
	}
];
function AdminChrome({ children }) {
	const { session, ready } = useSession();
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	if (pathname.includes("/admin/login")) return children;
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "grid min-h-screen place-items-center text-muted",
		children: "Opening the staff desk…"
	});
	if (!session) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/admin/login" });
	const links = LINKS.filter((link) => !link.roles || link.roles.includes(session.role));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "border-b border-line bg-navy text-paper",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-5 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin",
						className: "font-display text-xl text-paper",
						children: "UNIPRA staff desk"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-cream",
						children: [
							session.name,
							" · ",
							roleLabel(session.role),
							session.mode === "preview" ? " · preview" : " · live"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "inline-flex min-h-11 items-center px-3 text-sm font-semibold text-paper",
							children: "View site"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "min-h-11 px-3 text-sm font-semibold text-gold",
							onClick: () => signOut(),
							children: "Sign out"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 pb-3",
				"aria-label": "Desk",
				children: links.map((link) => {
					const active = link.exact ? /\/admin\/?$/.test(pathname) : pathname.includes(link.to);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						className: cn("inline-flex min-h-11 shrink-0 items-center px-3 text-sm font-semibold", active ? "bg-paper text-navy" : "text-cream"),
						children: link.label
					}, link.to);
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-5 py-8",
			children
		})]
	});
}
function DeskTitle({ title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mb-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-3xl",
			children: title
		}), lede ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 max-w-2xl text-muted",
			children: lede
		}) : null]
	});
}
function Deny({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "border border-line bg-paper p-4 text-navy",
		children
	});
}
//#endregion
export { Deny as n, DeskTitle as r, AdminChrome as t };
