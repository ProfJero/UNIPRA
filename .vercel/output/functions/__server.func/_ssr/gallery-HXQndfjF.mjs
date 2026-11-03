import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { f as useCms } from "./utils-CTaqdGFc.mjs";
import { T as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageIntro, c as Wrap, s as SiteShell } from "./router-D-gmTq1A.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-HXQndfjF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GalleryPage() {
	const albums = useCms((state) => state.albums);
	const [open, setOpen] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Gallery",
			title: "Pictures the media team is willing to own.",
			lede: "Official campus photography should come through Cloudinary, from the staff desk. Until those files arrive, a few studies hold the page. Each one says, in its caption, whether it is the school or only a stand-in."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrap, {
			className: "space-y-12 py-14",
			children: albums.map((album) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl",
					children: album.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-muted",
					children: album.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 grid gap-4 sm:grid-cols-2",
					children: album.photos.map((photo) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "block w-full text-left",
						onClick: () => setOpen(photo),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: photo.src,
							alt: photo.alt,
							className: "aspect-3/2 w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 block text-sm leading-relaxed text-muted",
							children: photo.caption
						})]
					}) }, photo.id))
				})
			] }, album.id))
		}),
		open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-50 grid place-items-center bg-navy-deep/90 p-4",
			role: "dialog",
			"aria-modal": "true",
			"aria-label": open.alt,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "absolute inset-0",
				"aria-label": "Close",
				onClick: () => setOpen(null)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "relative z-10 max-h-full max-w-4xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: open.src,
					alt: open.alt,
					className: "max-h-[80vh] w-full object-contain"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "mt-3 text-sm text-paper",
					children: open.caption
				})]
			})]
		}) : null
	] });
}
//#endregion
export { GalleryPage as component };
