import { n as format, t as parseISO } from "../_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/format-BuNRHYqX.js
function slugify(value) {
	return value.toLowerCase().normalize("NFKD").replace(/['’]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80);
}
function formatDay(iso) {
	if (!iso) return "—";
	const date = iso.length <= 10 ? parseISO(iso) : new Date(iso);
	if (Number.isNaN(date.getTime())) return iso;
	return format(date, "d MMMM yyyy");
}
function todayISO() {
	return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
}
function isUpcoming(startsOn) {
	return startsOn >= todayISO();
}
//#endregion
export { isUpcoming as n, slugify as r, formatDay as t };
