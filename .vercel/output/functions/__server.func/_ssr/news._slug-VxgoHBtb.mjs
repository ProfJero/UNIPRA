import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { f as useCms } from "./utils-CTaqdGFc.mjs";
import { T as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageIntro, c as Wrap, o as Prose, r as Route$1, s as SiteShell } from "./router-D-gmTq1A.mjs";
import { t as formatDay } from "./format-BuNRHYqX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/news._slug-VxgoHBtb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ArticlePage() {
	const { slug } = Route$1.useParams();
	const article = useCms((state) => state.news.find((item) => item.slug === slug && item.status === "published"));
	const related = useCms((state) => state.news.filter((item) => item.status === "published" && item.slug !== slug).slice(0, 3));
	if (!article) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "News",
		title: "This story is not public.",
		lede: "It may be a draft, or the address may be wrong."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrap, {
		className: "py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/news",
			className: "font-semibold text-navy",
			children: "All news"
		})
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: `${article.category} · ${formatDay(article.publishedAt)}`,
		title: article.title,
		lede: article.excerpt
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
		className: "grid gap-12 py-12 lg:grid-cols-[1fr_16rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "max-w-3xl",
			children: [
				article.coverUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: article.coverUrl,
					alt: "",
					className: "mb-8 w-full object-cover"
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, { text: article.body }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 text-sm text-muted",
					children: [
						"Published by ",
						article.authorName,
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShareRow, { title: article.title })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-xl",
			children: "Also on the site"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 space-y-4",
			children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/news/$slug",
				params: { slug: item.slug },
				className: "font-semibold text-navy hover:text-gold-deep",
				children: item.title
			}) }, item.id))
		})] })]
	})] });
}
function ShareRow({ title }) {
	const [href, setHref] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => setHref(window.location.href), []);
	if (!href) return null;
	const text = encodeURIComponent(`${title} ${href}`);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "mt-6 flex flex-wrap gap-3 text-sm font-semibold",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			className: "inline-flex min-h-11 items-center border border-line px-3",
			href: `https://wa.me/?text=${text}`,
			children: "Share on WhatsApp"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			className: "inline-flex min-h-11 items-center border border-line px-3",
			href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(href)}`,
			children: "Share on Facebook"
		})]
	});
}
//#endregion
export { ArticlePage as component };
