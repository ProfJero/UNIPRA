import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { u as cn } from "./utils-CTaqdGFc.mjs";
import { T as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-DNQL9KTZ.js
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 rounded-sm font-semibold transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy", {
	variants: {
		variant: {
			primary: "bg-navy text-paper hover:bg-navy-deep",
			gold: "bg-gold text-navy hover:bg-gold-deep hover:text-paper",
			ghost: "bg-transparent text-navy hover:bg-cream",
			line: "border border-line bg-paper text-navy hover:border-navy"
		},
		size: {
			md: "min-h-11 px-4 text-sm",
			sm: "min-h-11 px-3 text-sm"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
//#endregion
export { Button as t };
