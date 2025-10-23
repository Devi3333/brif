import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
export function Popover(p) { return _jsx("div", { ...p }); }
export function PopoverTrigger({ asChild, children, ...p }) {
    if (asChild)
        return _jsx(_Fragment, { children: children });
    return _jsx("span", { ...p, children: children });
}
export function PopoverContent({ className = "", ...p }) {
    return _jsx("div", { ...p, className: `p-2 rounded-xl border bg-white shadow-lg ${className}` });
}
