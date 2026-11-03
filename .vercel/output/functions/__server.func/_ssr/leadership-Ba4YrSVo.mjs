import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { f as useCms, i as canDelete, l as canReview } from "./utils-CTaqdGFc.mjs";
import { T as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as useSession } from "./session-B8at0Akt.mjs";
import { n as Deny, r as DeskTitle } from "./chrome-Cxa8Hguc.mjs";
import { t as Button } from "./button-DNQL9KTZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/leadership-Ba4YrSVo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LeadershipDesk() {
	const leaders = useCms((state) => state.leaders);
	const houses = useCms((state) => state.houses);
	const saveLeader = useCms((state) => state.saveLeader);
	const deleteLeader = useCms((state) => state.deleteLeader);
	const saveHouse = useCms((state) => state.saveHouse);
	const { session } = useSession();
	const [name, setName] = (0, import_react.useState)("");
	const [role, setRole] = (0, import_react.useState)("");
	const [note, setNote] = (0, import_react.useState)("");
	if (!session) return null;
	if (!canReview(session.role)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Deny, { children: "Leadership text is edited by an editor or an administrator." });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskTitle, {
			title: "Leadership and houses",
			lede: "Add a person only when the school is willing to name them. Do not invent portraits."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "grid gap-3 border border-line bg-paper p-4",
			onSubmit: (event) => {
				event.preventDefault();
				if (!name.trim() || !role.trim()) return;
				saveLeader({
					id: crypto.randomUUID(),
					name: name.trim(),
					role: role.trim(),
					note: note.trim()
				});
				setName("");
				setRole("");
				setNote("");
				toast.success("Added.");
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field",
					placeholder: "Name",
					value: name,
					onChange: (event) => setName(event.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field",
					placeholder: "Office",
					value: role,
					onChange: (event) => setRole(event.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					className: "field min-h-24 py-2",
					placeholder: "Note visitors should read",
					value: note,
					onChange: (event) => setNote(event.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					children: "Add person"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 divide-y divide-line border-y border-line bg-paper",
			children: leaders.map((leader) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-start justify-between gap-3 px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block font-semibold text-navy",
					children: leader.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-muted",
					children: leader.role
				})] }), canDelete(session.role) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-sm font-semibold",
					onClick: () => deleteLeader(leader.id),
					children: "Remove"
				}) : null]
			}, leader.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 text-2xl",
			children: "Houses"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 space-y-3",
			children: houses.map((house) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HouseRow, {
				id: house.id,
				name: house.name,
				summary: house.summary,
				onSave: saveHouse
			}) }, house.id))
		})
	] });
}
function HouseRow({ id, name, summary, onSave }) {
	const [text, setText] = (0, import_react.useState)(summary);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "grid gap-2 border border-line bg-paper p-4",
		onSubmit: (event) => {
			event.preventDefault();
			onSave({
				id,
				name,
				summary: text
			});
			toast.success(`${name} saved.`);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-xl",
				children: name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				className: "field min-h-20 py-2",
				value: text,
				onChange: (event) => setText(event.target.value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				variant: "line",
				children: "Save house note"
			})
		]
	});
}
//#endregion
export { LeadershipDesk as component };
