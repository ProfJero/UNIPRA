import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { f as useCms, o as canEditSettings } from "./utils-CTaqdGFc.mjs";
import { T as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as useSession } from "./session-B8at0Akt.mjs";
import { n as Deny, r as DeskTitle } from "./chrome-Cxa8Hguc.mjs";
import { t as Button } from "./button-DNQL9KTZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-CpuuF0vk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SettingsDesk() {
	const settings = useCms((state) => state.settings);
	const update = useCms((state) => state.updateSettings);
	const resetContent = useCms((state) => state.resetContent);
	const { session } = useSession();
	const [draft, setDraft] = (0, import_react.useState)(settings);
	const [health, setHealth] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const apply = () => setDraft(useCms.getState().settings);
		if (useCms.persist.hasHydrated()) apply();
		return useCms.persist.onFinishHydration(apply);
	}, []);
	if (!session) return null;
	if (!canEditSettings(session.role)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Deny, { children: "Settings are kept by the school administrator." });
	function set(key, value) {
		setDraft((current) => ({
			...current,
			[key]: value
		}));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskTitle, {
			title: "Settings",
			lede: "Telephone, email and address are public. The worker address and Cloudinary names connect this desk to Supabase and to photograph storage. Secrets stay on the worker, never in the browser."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "grid gap-3 border border-line bg-paper p-4",
			onSubmit: (event) => {
				event.preventDefault();
				update(draft);
				toast.success("Settings saved on this browser.");
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Telephone",
					value: draft.phone,
					onChange: (value) => set("phone", value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Email",
					value: draft.email,
					onChange: (value) => set("email", value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Postal address",
					value: draft.poBox,
					onChange: (value) => set("poBox", value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Campus address",
					value: draft.address,
					onChange: (value) => set("address", value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Office hours",
					value: draft.officeHours,
					onChange: (value) => set("officeHours", value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Facebook",
					value: draft.facebook,
					onChange: (value) => set("facebook", value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "YouTube",
					value: draft.youtube,
					onChange: (value) => set("youtube", value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Cloudflare Worker URL",
					value: draft.workerUrl,
					onChange: (value) => set("workerUrl", value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Cloudinary cloud name",
					value: draft.cloudName,
					onChange: (value) => set("cloudName", value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Cloudinary unsigned preset",
					value: draft.uploadPreset,
					onChange: (value) => set("uploadPreset", value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex min-h-11 items-center gap-2 text-sm font-semibold text-navy",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: draft.useRemotePublic,
						onChange: (event) => set("useRemotePublic", event.target.checked)
					}), "Load the public site from Supabase through the worker"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						children: "Save settings"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "line",
						onClick: async () => {
							if (!draft.workerUrl.trim()) {
								setHealth("Add the worker address first.");
								return;
							}
							try {
								const response = await fetch(`${draft.workerUrl.replace(/\/$/, "")}/v1/health`);
								setHealth(response.ok ? "The worker answered." : `The worker replied ${response.status}.`);
							} catch {
								setHealth("The worker could not be reached.");
							}
						},
						children: "Test worker"
					})]
				}),
				health ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-navy",
					children: health
				}) : null
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 border border-line bg-paper p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl",
					children: "Starter text"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Restores the researched pages. Your worker address and Cloudinary settings are kept."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					className: "mt-3",
					onClick: () => {
						resetContent();
						toast.success("Starter text restored.");
					},
					children: "Restore starter content"
				})
			]
		})
	] });
}
function Field({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "space-y-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "lbl",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			className: "field",
			value,
			onChange: (event) => onChange(event.target.value)
		})]
	});
}
//#endregion
export { SettingsDesk as component };
