import { f as useCms } from "./utils-CTaqdGFc.mjs";
import { T as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageIntro, c as Wrap, s as SiteShell } from "./router-D-gmTq1A.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/houses-CyHi6xP3.js
var import_jsx_runtime = require_jsx_runtime();
function HousesPage() {
	const houses = useCms((state) => state.houses);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "House life",
		title: "Six houses.",
		lede: "The public record names Ackah, Densu, Tano, Nkrumah, Pra and Volta. Colours, songs and founding stories are left blank until the school writes them. Invented house lore does not belong on an official site."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrap, {
		className: "grid gap-4 py-14 sm:grid-cols-2 lg:grid-cols-3",
		children: houses.map((house) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "border border-line bg-paper p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl",
				children: house.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 leading-relaxed text-muted",
				children: house.summary
			})]
		}, house.id))
	})] });
}
//#endregion
export { HousesPage as component };
