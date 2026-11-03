import { c as canReadEnquiries, f as useCms } from "./utils-CTaqdGFc.mjs";
import { T as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useSession } from "./session-B8at0Akt.mjs";
import { n as Deny, r as DeskTitle } from "./chrome-Cxa8Hguc.mjs";
import { t as Button } from "./button-DNQL9KTZ.mjs";
import { t as formatDay } from "./format-BuNRHYqX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/enquiries-CzPl-NU-.js
var import_jsx_runtime = require_jsx_runtime();
function EnquiriesDesk() {
	const enquiries = useCms((state) => state.enquiries);
	const setStatus = useCms((state) => state.setEnquiryStatus);
	const { session } = useSession();
	if (!session) return null;
	if (!canReadEnquiries(session.role)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Deny, { children: "Enquiries are visible to the school administrator." });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskTitle, {
			title: "Enquiries",
			lede: "In preview, these are messages saved in this browser. Once the Cloudflare Worker is connected, they are stored in Supabase for the office."
		}),
		enquiries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted",
			children: "No messages yet."
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-3",
			children: enquiries.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "border border-line bg-paper p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-semibold tracking-widest text-gold-deep uppercase",
						children: [
							item.status,
							" · ",
							item.audience,
							" · ",
							formatDay(item.createdAt)
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 text-xl",
						children: item.subject
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							item.name,
							" · ",
							item.email,
							" ",
							item.phone ? `· ${item.phone}` : ""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 leading-relaxed",
						children: item.message
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "line",
							size: "sm",
							onClick: () => setStatus(item.id, "read"),
							children: "Mark read"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							size: "sm",
							onClick: () => setStatus(item.id, "archived"),
							children: "Archive"
						})]
					})
				]
			}, item.id))
		})
	] });
}
//#endregion
export { EnquiriesDesk as component };
