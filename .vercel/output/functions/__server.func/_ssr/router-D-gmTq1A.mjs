import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { f as useCms, u as cn } from "./utils-CTaqdGFc.mjs";
import { T as require_jsx_runtime, _ as Outlet, b as createRootRoute, f as Scripts, g as createRouter, m as useRouterState, p as HeadContent, v as lazyRouteComponent, w as useRouter, x as Link, y as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TriangleAlert, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D-gmTq1A.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
var NAV = [
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/academics",
		label: "Academics"
	},
	{
		to: "/admissions",
		label: "Admissions"
	},
	{
		to: "/news",
		label: "News"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/alumni",
		label: "Alumni"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Wrap({ className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mx-auto w-full max-w-6xl px-5", className),
		children
	});
}
function PageIntro({ kicker, title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "border-b border-line bg-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
			className: "py-12 sm:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-widest text-gold-deep uppercase",
					children: kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 max-w-3xl text-4xl leading-tight sm:text-5xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-lg leading-relaxed text-muted",
					children: lede
				})
			]
		})
	});
}
function Prose({ text }) {
	const parts = text.trim().split(/\n\n+/).map((part) => part.trim()).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-4 text-base leading-relaxed text-ink",
		children: parts.map((part, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: part }, index))
	});
}
function Header() {
	const settings = useCms((state) => state.settings);
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "border-b border-line bg-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-navy text-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
					className: "flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Cape Coast, Central Region" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex flex-wrap gap-x-4 gap-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${settings.phone.replace(/\s/g, "")}`,
							className: "underline-offset-2 hover:underline",
							children: settings.phone
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${settings.email}`,
							className: "underline-offset-2 hover:underline",
							children: settings.email
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
				className: "flex items-center gap-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex min-w-0 flex-1 items-center gap-3",
						onClick: () => setOpen(false),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/crest.png",
							alt: "Crest of University Practice Senior High School",
							className: "size-14 shrink-0 bg-paper object-contain sm:size-16"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-lg leading-tight text-navy sm:text-2xl",
								children: "University Practice"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs font-semibold tracking-widest text-muted uppercase sm:text-sm",
								children: "Senior High School · Cape Coast"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-5 lg:flex",
						"aria-label": "Primary",
						children: NAV.map((item) => {
							const active = pathname === item.to || pathname.startsWith(`${item.to}/`);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: cn("min-h-11 text-sm font-semibold", active ? "text-navy underline decoration-gold decoration-2 underline-offset-8" : "text-muted hover:text-navy"),
								children: item.label
							}, item.to);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "inline-flex size-11 items-center justify-center border border-line lg:hidden",
						"aria-expanded": open,
						"aria-controls": "mobile-nav",
						onClick: () => setOpen((value) => !value),
						children: [open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Menu"
						})]
					})
				]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				id: "mobile-nav",
				className: "border-t border-line lg:hidden",
				"aria-label": "Mobile",
				children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					className: "block min-h-11 border-b border-line px-5 py-3 text-base font-semibold text-navy",
					onClick: () => setOpen(false),
					children: item.label
				}, item.to))
			}) : null
		]
	});
}
function Footer() {
	const settings = useCms((state) => state.settings);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-auto border-t border-line bg-navy text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
			className: "grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/crest-gold.jpg",
							alt: "",
							className: "size-20 bg-paper object-contain p-1"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-2xl text-paper",
							children: "University Practice Senior High School"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-sm text-sm leading-relaxed text-cream",
							children: "Service to the Community. Floreat. The official digital home of UNIPRA, Cape Coast."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-widest text-gold uppercase",
					children: "Visit"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm leading-relaxed text-cream",
					children: [
						settings.poBox,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						settings.address,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						settings.officeHours
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-widest text-gold uppercase",
					children: "Useful"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admissions",
							className: "text-cream hover:text-paper",
							children: "Admissions"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/news",
							className: "text-cream hover:text-paper",
							children: "News and notices"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: settings.facebook,
							className: "text-cream hover:text-paper",
							children: "Facebook"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin/login",
							className: "text-cream hover:text-paper",
							children: "Staff desk"
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-navy-deep",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrap, {
				className: "py-4 text-xs leading-relaxed text-cream",
				children: "Facts on this site are taken from the school’s public record. The administration maintains these pages. Admissions are not sold here."
			})
		})]
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#content",
				className: "sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-paper focus:px-4 focus:py-3 focus:text-navy",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "content",
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function NotFoundPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Not found",
		title: "This page is not on the site.",
		lede: "The address may be old, or the page may have been withdrawn. The newsroom and the contact page are the surest routes back."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
		className: "flex flex-wrap gap-3 py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			className: "inline-flex min-h-11 items-center bg-navy px-4 text-sm font-semibold text-paper",
			children: "Home"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/news",
			className: "inline-flex min-h-11 items-center border border-line bg-paper px-4 text-sm font-semibold text-navy",
			children: "News"
		})]
	})] });
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function CmsHydrator({ children }) {
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		(async () => {
			await useCms.persist.rehydrate();
			const settings = useCms.getState().settings;
			if (!settings.useRemotePublic || !settings.workerUrl.trim()) return;
			try {
				const response = await fetch(`${settings.workerUrl.replace(/\/$/, "")}/v1/public`);
				if (!response.ok) return;
				const bundle = await response.json();
				if (!cancelled) useCms.getState().replacePublic(bundle);
			} catch {}
		})();
		return () => {
			cancelled = true;
		};
	}, []);
	return children;
}
var styles_default = "/assets/styles-BTwwxlVZ.css";
var Route$29 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "University Practice Senior High School · UNIPRA, Cape Coast" },
			{
				name: "description",
				content: "The official digital home of University Practice Senior High School (UNIPRA), Cape Coast. Service to the Community."
			},
			{
				name: "theme-color",
				content: "#0B2C4A"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,560;9..144,680&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&display=swap"
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CmsHydrator, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, { position: "top-center" })] }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$28 = () => import("./routes-bTyWZDXu.mjs");
var Route$28 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$28, "component"),
	head: () => ({ meta: [{ title: "University Practice Senior High School · UNIPRA, Cape Coast" }, {
		name: "description",
		content: "Official site of University Practice Senior High School, Cape Coast. Motto: Service to the Community. Opened 13 October 1976."
	}] })
});
var $$splitComponentImporter$27 = () => import("./about-BWAaPV_1.mjs");
var Route$27 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$27, "component"),
	head: () => ({ meta: [{ title: "About · University Practice Senior High School" }, {
		name: "description",
		content: "Profile, vision and mission of University Practice Senior High School, Cape Coast."
	}] })
});
var $$splitComponentImporter$26 = () => import("./academics-C1G2R__H.mjs");
var Route$26 = createFileRoute("/academics")({
	component: lazyRouteComponent($$splitComponentImporter$26, "component"),
	head: () => ({ meta: [{ title: "Academics · University Practice Senior High School" }, {
		name: "description",
		content: "Programmes at University Practice Senior High School, Cape Coast."
	}] })
});
var $$splitComponentImporter$25 = () => import("./route-DLQZ_pmv.mjs");
var Route$25 = createFileRoute("/admin")({ component: lazyRouteComponent($$splitComponentImporter$25, "component") });
var $$splitComponentImporter$24 = () => import("./admissions-BWHAMzOV.mjs");
var Route$24 = createFileRoute("/admissions")({
	component: lazyRouteComponent($$splitComponentImporter$24, "component"),
	head: () => ({ meta: [{ title: "Admissions · University Practice Senior High School" }, {
		name: "description",
		content: "How placement to University Practice Senior High School works. CSSPS and Free SHS. No payments on this site."
	}] })
});
var $$splitComponentImporter$23 = () => import("./alumni-W9N2ofZE.mjs");
var Route$23 = createFileRoute("/alumni")({
	component: lazyRouteComponent($$splitComponentImporter$23, "component"),
	head: () => ({ meta: [{ title: "Alumni · University Practice Senior High School" }, {
		name: "description",
		content: "Old students of University Practice Senior High School — UPOSANS."
	}] })
});
var $$splitComponentImporter$22 = () => import("./contact-CVujh4u4.mjs");
var Route$22 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$22, "component"),
	head: () => ({ meta: [{ title: "Contact · University Practice Senior High School" }, {
		name: "description",
		content: "Address, telephone and enquiry form for University Practice Senior High School, Cape Coast."
	}] })
});
var $$splitComponentImporter$21 = () => import("./events-z5HN3xE4.mjs");
var Route$21 = createFileRoute("/events")({
	component: lazyRouteComponent($$splitComponentImporter$21, "component"),
	head: () => ({ meta: [{ title: "Events · University Practice Senior High School" }, {
		name: "description",
		content: "School calendar for University Practice Senior High School."
	}] })
});
var $$splitComponentImporter$20 = () => import("./gallery-HXQndfjF.mjs");
var Route$20 = createFileRoute("/gallery")({
	component: lazyRouteComponent($$splitComponentImporter$20, "component"),
	head: () => ({ meta: [{ title: "Gallery · University Practice Senior High School" }, {
		name: "description",
		content: "Photographs published by University Practice Senior High School."
	}] })
});
var $$splitComponentImporter$19 = () => import("./history-CGL8bxkP.mjs");
var Route$19 = createFileRoute("/history")({
	component: lazyRouteComponent($$splitComponentImporter$19, "component"),
	head: () => ({ meta: [{ title: "History · University Practice Senior High School" }, {
		name: "description",
		content: "How University Practice Senior High School opened on 13 October 1976."
	}] })
});
var $$splitComponentImporter$18 = () => import("./houses-CyHi6xP3.mjs");
var Route$18 = createFileRoute("/houses")({
	component: lazyRouteComponent($$splitComponentImporter$18, "component"),
	head: () => ({ meta: [{ title: "Houses · University Practice Senior High School" }, {
		name: "description",
		content: "The six houses of University Practice Senior High School: Ackah, Densu, Tano, Nkrumah, Pra and Volta."
	}] })
});
var $$splitComponentImporter$17 = () => import("./leadership-Cqb5Kr_R.mjs");
var Route$17 = createFileRoute("/leadership")({
	component: lazyRouteComponent($$splitComponentImporter$17, "component"),
	head: () => ({ meta: [{ title: "Leadership · University Practice Senior High School" }, {
		name: "description",
		content: "School leadership of University Practice Senior High School, as the administration publishes it."
	}] })
});
var $$splitComponentImporter$16 = () => import("./news-corIfMZA.mjs");
var Route$16 = createFileRoute("/news")({
	component: lazyRouteComponent($$splitComponentImporter$16, "component"),
	head: () => ({ meta: [{ title: "News · University Practice Senior High School" }, {
		name: "description",
		content: "News, notices and heritage from University Practice Senior High School."
	}] })
});
var $$splitComponentImporter$15 = () => import("./academics._slug-ZbowVWbv.mjs");
var Route$15 = createFileRoute("/academics/$slug")({
	component: lazyRouteComponent($$splitComponentImporter$15, "component"),
	head: ({ params }) => ({ meta: [{ title: `${params.slug} · Academics · UNIPRA` }] })
});
var $$splitComponentImporter$14 = () => import("./admin-CLJjc7o0.mjs");
var Route$14 = createFileRoute("/admin/")({
	component: lazyRouteComponent($$splitComponentImporter$14, "component"),
	head: () => ({ meta: [{ title: "Overview · UNIPRA staff desk" }] })
});
var $$splitComponentImporter$13 = () => import("./academics-BLXyl6_0.mjs");
var Route$13 = createFileRoute("/admin/academics")({
	component: lazyRouteComponent($$splitComponentImporter$13, "component"),
	head: () => ({ meta: [{ title: "Academics · UNIPRA staff desk" }] })
});
var $$splitComponentImporter$12 = () => import("./announcements-D9LmbhBI.mjs");
var Route$12 = createFileRoute("/admin/announcements")({
	component: lazyRouteComponent($$splitComponentImporter$12, "component"),
	head: () => ({ meta: [{ title: "Notices · UNIPRA staff desk" }] })
});
var $$splitComponentImporter$11 = () => import("./enquiries-CzPl-NU-.mjs");
var Route$11 = createFileRoute("/admin/enquiries")({
	component: lazyRouteComponent($$splitComponentImporter$11, "component"),
	head: () => ({ meta: [{ title: "Enquiries · UNIPRA staff desk" }] })
});
var $$splitComponentImporter$10 = () => import("./events-rYPx2aq9.mjs");
var Route$10 = createFileRoute("/admin/events")({
	component: lazyRouteComponent($$splitComponentImporter$10, "component"),
	head: () => ({ meta: [{ title: "Events · UNIPRA staff desk" }] })
});
var $$splitComponentImporter$9 = () => import("./gallery-CI1jKl1g.mjs");
var Route$9 = createFileRoute("/admin/gallery")({
	component: lazyRouteComponent($$splitComponentImporter$9, "component"),
	head: () => ({ meta: [{ title: "Gallery · UNIPRA staff desk" }] })
});
var $$splitComponentImporter$8 = () => import("./history-DXzF7uJI.mjs");
var Route$8 = createFileRoute("/admin/history")({
	component: lazyRouteComponent($$splitComponentImporter$8, "component"),
	head: () => ({ meta: [{ title: "History · UNIPRA staff desk" }] })
});
var $$splitComponentImporter$7 = () => import("./leadership-Ba4YrSVo.mjs");
var Route$7 = createFileRoute("/admin/leadership")({
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	head: () => ({ meta: [{ title: "Leadership · UNIPRA staff desk" }] })
});
var $$splitComponentImporter$6 = () => import("./login-DhKkh4T8.mjs");
var Route$6 = createFileRoute("/admin/login")({
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
	head: () => ({ meta: [{ title: "Staff desk · UNIPRA" }] })
});
var $$splitComponentImporter$5 = () => import("./news-WZqpMBg4.mjs");
var Route$5 = createFileRoute("/admin/news")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({ meta: [{ title: "News desk · UNIPRA" }] })
});
var $$splitComponentImporter$4 = () => import("./pages-9V57ekta.mjs");
var Route$4 = createFileRoute("/admin/pages")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({ meta: [{ title: "Pages · UNIPRA staff desk" }] })
});
var $$splitComponentImporter$3 = () => import("./settings-CpuuF0vk.mjs");
var Route$3 = createFileRoute("/admin/settings")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: "Settings · UNIPRA staff desk" }] })
});
var $$splitComponentImporter$2 = () => import("./users-vwxIpUK2.mjs");
var Route$2 = createFileRoute("/admin/users")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: "Users · UNIPRA staff desk" }] })
});
var $$splitComponentImporter$1 = () => import("./news._slug-VxgoHBtb.mjs");
var Route$1 = createFileRoute("/news/$slug")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: ({ params }) => ({ meta: [{ title: `${params.slug} · UNIPRA` }] })
});
var $$splitComponentImporter = () => import("./news._id-CBblnj4P.mjs");
var Route = createFileRoute("/admin/news/$id")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({ meta: [{ title: "Edit story · UNIPRA" }] })
});
var IndexRoute = Route$28.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$29
});
var AboutRoute = Route$27.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$29
});
var AcademicsRoute = Route$26.update({
	id: "/academics",
	path: "/academics",
	getParentRoute: () => Route$29
});
var AdminRouteRoute = Route$25.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$29
});
var AdmissionsRoute = Route$24.update({
	id: "/admissions",
	path: "/admissions",
	getParentRoute: () => Route$29
});
var AlumniRoute = Route$23.update({
	id: "/alumni",
	path: "/alumni",
	getParentRoute: () => Route$29
});
var ContactRoute = Route$22.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$29
});
var EventsRoute = Route$21.update({
	id: "/events",
	path: "/events",
	getParentRoute: () => Route$29
});
var GalleryRoute = Route$20.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$29
});
var HistoryRoute = Route$19.update({
	id: "/history",
	path: "/history",
	getParentRoute: () => Route$29
});
var HousesRoute = Route$18.update({
	id: "/houses",
	path: "/houses",
	getParentRoute: () => Route$29
});
var LeadershipRoute = Route$17.update({
	id: "/leadership",
	path: "/leadership",
	getParentRoute: () => Route$29
});
var NewsRoute = Route$16.update({
	id: "/news",
	path: "/news",
	getParentRoute: () => Route$29
});
var AcademicsSlugRoute = Route$15.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => AcademicsRoute
});
var AdminIndexRoute = Route$14.update({
	id: "/",
	path: "/",
	getParentRoute: () => AdminRouteRoute
});
var AdminAcademicsRoute = Route$13.update({
	id: "/academics",
	path: "/academics",
	getParentRoute: () => AdminRouteRoute
});
var AdminAnnouncementsRoute = Route$12.update({
	id: "/announcements",
	path: "/announcements",
	getParentRoute: () => AdminRouteRoute
});
var AdminEnquiriesRoute = Route$11.update({
	id: "/enquiries",
	path: "/enquiries",
	getParentRoute: () => AdminRouteRoute
});
var AdminEventsRoute = Route$10.update({
	id: "/events",
	path: "/events",
	getParentRoute: () => AdminRouteRoute
});
var AdminGalleryRoute = Route$9.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => AdminRouteRoute
});
var AdminHistoryRoute = Route$8.update({
	id: "/history",
	path: "/history",
	getParentRoute: () => AdminRouteRoute
});
var AdminLeadershipRoute = Route$7.update({
	id: "/leadership",
	path: "/leadership",
	getParentRoute: () => AdminRouteRoute
});
var AdminLoginRoute = Route$6.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => AdminRouteRoute
});
var AdminNewsRoute = Route$5.update({
	id: "/news",
	path: "/news",
	getParentRoute: () => AdminRouteRoute
});
var AdminPagesRoute = Route$4.update({
	id: "/pages",
	path: "/pages",
	getParentRoute: () => AdminRouteRoute
});
var AdminSettingsRoute = Route$3.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => AdminRouteRoute
});
var AdminUsersRoute = Route$2.update({
	id: "/users",
	path: "/users",
	getParentRoute: () => AdminRouteRoute
});
var NewsSlugRoute = Route$1.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => NewsRoute
});
var AdminNewsRouteChildren = { AdminNewsIdRoute: Route.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => AdminNewsRoute
}) };
var AdminRouteRouteChildren = {
	AdminAcademicsRoute,
	AdminAnnouncementsRoute,
	AdminEnquiriesRoute,
	AdminEventsRoute,
	AdminGalleryRoute,
	AdminHistoryRoute,
	AdminLeadershipRoute,
	AdminLoginRoute,
	AdminNewsRoute: AdminNewsRoute._addFileChildren(AdminNewsRouteChildren),
	AdminPagesRoute,
	AdminSettingsRoute,
	AdminUsersRoute,
	AdminIndexRoute
};
var AdminRouteRouteWithChildren = AdminRouteRoute._addFileChildren(AdminRouteRouteChildren);
var AcademicsRouteChildren = { AcademicsSlugRoute };
var AcademicsRouteWithChildren = AcademicsRoute._addFileChildren(AcademicsRouteChildren);
var NewsRouteChildren = { NewsSlugRoute };
var rootRouteChildren = {
	IndexRoute,
	AdminRouteRoute: AdminRouteRouteWithChildren,
	AboutRoute,
	AcademicsRoute: AcademicsRouteWithChildren,
	AdmissionsRoute,
	AlumniRoute,
	ContactRoute,
	EventsRoute,
	GalleryRoute,
	HistoryRoute,
	HousesRoute,
	LeadershipRoute,
	NewsRoute: NewsRoute._addFileChildren(NewsRouteChildren)
};
var routeTree = Route$29._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent,
		defaultNotFoundComponent: NotFoundPage
	});
}
//#endregion
export { PageIntro as a, Wrap as c, Route$15 as i, Route as n, Prose as o, Route$1 as r, SiteShell as s, router_exports as t };
