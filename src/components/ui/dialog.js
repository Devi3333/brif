import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
export function Dialog(p) { return _jsx("div", { ...p }); }
export function DialogTrigger({ asChild, children, ...p }) {
    if (asChild)
        return _jsx(_Fragment, { children: children });
    return _jsx("span", { ...p, children: children });
}
export function DialogContent({ className = "", ...p }) {
    return _jsx("div", { ...p, className: `p-4 rounded-2xl border bg-white shadow-lg ${className}` });
}
export function DialogHeader({ className = "", ...p }) {
    return _jsx("div", { ...p, className: `mb-2 ${className}` });
}
export function DialogTitle({ className = "", ...p }) {
    return _jsx("div", { ...p, className: `text-base font-semibold ${className}` });
}
export function DialogDescription({ className = "", ...p }) {
    return _jsx("div", { ...p, className: `text-sm text-slate-500 ${className}` });
}
