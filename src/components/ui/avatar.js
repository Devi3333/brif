import { jsx as _jsx } from "react/jsx-runtime";
export function Avatar({ className = "", ...p }) {
    return (_jsx("div", { ...p, className: `inline-flex items-center justify-center rounded-full bg-slate-200 h-8 w-8 ${className}` }));
}
export function AvatarFallback({ className = "", ...p }) {
    return _jsx("span", { ...p, className: `text-xs font-medium ${className}` });
}
