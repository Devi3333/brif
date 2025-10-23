import { jsx as _jsx } from "react/jsx-runtime";
export function Button({ className = "", variant = "default", size = "md", ...props }) {
    const base = "inline-flex items-center justify-center gap-1 rounded-2xl text-sm font-medium transition focus:outline-none";
    const variants = {
        default: "bg-sky-600 text-white hover:bg-sky-700",
        secondary: "bg-slate-100 hover:bg-slate-200 text-slate-800",
        ghost: "hover:bg-slate-100 text-slate-700",
        outline: "border border-slate-300 text-slate-800 bg-white hover:bg-slate-50",
    };
    const sizes = { sm: "px-2 py-1 text-xs", md: "px-3 py-2", lg: "px-4 py-2.5 text-base" };
    return (_jsx("button", { ...props, className: `${base} ${variants[variant]} ${sizes[size]} ${className}` }));
}
