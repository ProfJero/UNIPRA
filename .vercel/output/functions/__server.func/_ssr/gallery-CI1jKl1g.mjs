import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { a as canDraft, f as useCms, i as canDelete } from "./utils-CTaqdGFc.mjs";
import { T as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as useSession } from "./session-B8at0Akt.mjs";
import { n as Deny, r as DeskTitle } from "./chrome-Cxa8Hguc.mjs";
import { t as Button } from "./button-DNQL9KTZ.mjs";
import { r as slugify } from "./format-BuNRHYqX.mjs";
import { t as storeImage } from "./media-Ch6wioPJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-CI1jKl1g.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GalleryDesk() {
	const albums = useCms((state) => state.albums);
	const saveAlbum = useCms((state) => state.saveAlbum);
	const deleteAlbum = useCms((state) => state.deleteAlbum);
	const addPhoto = useCms((state) => state.addPhoto);
	const deletePhoto = useCms((state) => state.deletePhoto);
	const { session } = useSession();
	const [albumId, setAlbumId] = (0, import_react.useState)(albums[0]?.id ?? "");
	const [caption, setCaption] = (0, import_react.useState)("");
	const [url, setUrl] = (0, import_react.useState)("");
	const [title, setTitle] = (0, import_react.useState)("");
	if (!session) return null;
	if (!canDraft(session.role)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Deny, { children: "Viewers cannot change the gallery." });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskTitle, {
			title: "Gallery",
			lede: "Photographs should be the school’s own. Upload them to Cloudinary, and write a caption that does not over-claim."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mb-6 flex flex-wrap gap-2",
			onSubmit: (event) => {
				event.preventDefault();
				if (!title.trim()) return;
				const id = crypto.randomUUID();
				saveAlbum({
					id,
					slug: slugify(title),
					title: title.trim(),
					summary: "Published by the media team.",
					photos: []
				});
				setAlbumId(id);
				setTitle("");
				toast.success("Album created.");
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "field max-w-sm",
				placeholder: "New album title",
				value: title,
				onChange: (event) => setTitle(event.target.value)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				variant: "line",
				children: "Create album"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "space-y-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "lbl",
				children: "Album"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
				className: "field max-w-md",
				value: albumId,
				onChange: (event) => setAlbumId(event.target.value),
				children: albums.map((album) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: album.id,
					children: album.title
				}, album.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-3 border border-line bg-paper p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field",
					placeholder: "Caption",
					value: caption,
					onChange: (event) => setCaption(event.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field",
					placeholder: "Image URL, if you already have one",
					value: url,
					onChange: (event) => setUrl(event.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							onClick: () => {
								if (!albumId || !url.trim()) return;
								addPhoto(albumId, {
									id: crypto.randomUUID(),
									src: url.trim(),
									alt: caption || "School photograph",
									caption
								});
								setUrl("");
								setCaption("");
								toast.success("Photograph added.");
							},
							children: "Add by address"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "inline-flex min-h-11 cursor-pointer items-center border border-line px-4 text-sm font-semibold text-navy",
							children: ["Upload", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "sr-only",
								type: "file",
								accept: "image/*",
								onChange: async (event) => {
									const file = event.target.files?.[0];
									if (!file || !albumId) return;
									try {
										const src = await storeImage(file);
										addPhoto(albumId, {
											id: crypto.randomUUID(),
											src,
											alt: caption || file.name,
											caption: caption || file.name
										});
										setCaption("");
										toast.success("Uploaded to Cloudinary.");
									} catch (error) {
										toast.error(error instanceof Error ? error.message : "Upload failed.");
									}
								}
							})]
						}),
						canDelete(session.role) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							onClick: () => albumId && deleteAlbum(albumId),
							children: "Delete album"
						}) : null
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-6 grid gap-4 sm:grid-cols-2",
			children: albums.find((album) => album.id === albumId)?.photos.map((photo) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "border border-line bg-paper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: photo.src,
					alt: photo.alt,
					className: "aspect-video w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-2 p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: photo.caption
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-sm font-semibold text-navy",
						onClick: () => deletePhoto(albumId, photo.id),
						children: "Remove"
					})]
				})]
			}, photo.id))
		})
	] });
}
//#endregion
export { GalleryDesk as component };
