import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { f as useCms } from "./utils-CTaqdGFc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/session-B8at0Akt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var KEY = "upshs-session";
var PREVIEW_STAFF = [
	{
		id: "preview-super",
		name: "Preview Super Administrator",
		email: "super@unipra.test",
		password: "super-desk",
		role: "super"
	},
	{
		id: "preview-admin",
		name: "Preview School Administrator",
		email: "publisher@unipra.test",
		password: "publish-desk",
		role: "admin"
	},
	{
		id: "preview-editor",
		name: "Preview Editor",
		email: "editor@unipra.test",
		password: "editor-desk",
		role: "editor"
	},
	{
		id: "preview-media",
		name: "Preview Media Team",
		email: "media@unipra.test",
		password: "media-desk",
		role: "media"
	},
	{
		id: "preview-viewer",
		name: "Preview Viewer",
		email: "viewer@unipra.test",
		password: "view-desk",
		role: "viewer"
	}
];
var SERVER_SNAPSHOT = {
	session: null,
	ready: false
};
var snapshot = SERVER_SNAPSHOT;
var listeners = /* @__PURE__ */ new Set();
function emit() {
	listeners.forEach((listener) => listener());
}
function load() {
	try {
		const raw = sessionStorage.getItem(KEY);
		if (!raw) return null;
		const parsed = JSON.parse(raw);
		if (!parsed?.email || !parsed?.role) return null;
		return parsed;
	} catch {
		return null;
	}
}
function bootstrapSession() {
	if (snapshot.ready) return;
	snapshot = {
		session: load(),
		ready: true
	};
	emit();
}
function writeSession(session) {
	if (session) sessionStorage.setItem(KEY, JSON.stringify(session));
	else sessionStorage.removeItem(KEY);
	snapshot = {
		session,
		ready: true
	};
	emit();
}
function useSession() {
	(0, import_react.useEffect)(() => {
		bootstrapSession();
	}, []);
	return (0, import_react.useSyncExternalStore)((callback) => {
		listeners.add(callback);
		return () => listeners.delete(callback);
	}, () => snapshot, () => SERVER_SNAPSHOT);
}
async function signIn(email, password) {
	const emailNorm = email.trim().toLowerCase();
	const workerUrl = useCms.getState().settings.workerUrl.trim();
	if (workerUrl) try {
		const response = await fetch(`${workerUrl.replace(/\/$/, "")}/v1/session`, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				email: emailNorm,
				password
			})
		});
		if (response.ok) {
			const data = await response.json();
			writeSession({
				staffId: data.staff.id,
				name: data.staff.name,
				email: data.staff.email,
				role: data.staff.role,
				mode: "worker",
				token: data.token
			});
			return null;
		}
		if (response.status === 401) return "Those details were not accepted.";
		return "The staff desk could not be reached. Clear the worker address in Settings to use a preview account.";
	} catch {
		return "The staff desk could not be reached. Clear the worker address in Settings to use a preview account.";
	}
	const found = [...PREVIEW_STAFF, ...useCms.getState().staff].find((member) => member.email === emailNorm && member.password === password);
	if (!found) return "Those details were not accepted.";
	writeSession({
		staffId: found.id,
		name: found.name,
		email: found.email,
		role: found.role,
		mode: "preview"
	});
	return null;
}
function signOut() {
	writeSession(null);
}
//#endregion
export { useSession as i, signIn as n, signOut as r, PREVIEW_STAFF as t };
