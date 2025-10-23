import { jsx as _jsx } from "react/jsx-runtime";
export function Badge({ className = "", variant = "default", ...p }) {
    const variants = {
        default: "bg-slate-100 text-slate-900 border border-slate-200",
        outline: "bg-transparent text-slate-700 border border-slate-300",
        secondary: "bg-slate-800 text-white border border-slate-800",
    };
    return (_jsx("span", { ...p, className: `inline-flex items-center px-2 py-0.5 rounded-lg text-xs ${variants[variant]} ${className}` }));
}
