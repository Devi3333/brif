import { jsx as _jsx } from "react/jsx-runtime";
export function Select(p) { return _jsx("div", { ...p }); }
export function SelectTrigger({ className = "", ...p }) {
    return _jsx("div", { ...p, className: `px-3 py-2 rounded-xl border bg-white ${className}` });
}
export function SelectValue({ placeholder, children, ...p }) {
    return _jsx("span", { ...p, children: children ?? placeholder ?? "" });
}
export function SelectContent({ className = "", ...p }) {
    return _jsx("div", { ...p, className: `mt-2 border rounded-xl bg-white ${className}` });
}
export function SelectItem({ value, children, ...p }) {
    return (_jsx("div", { ...p, "data-value": value, className: "px-3 py-2 hover:bg-slate-50 cursor-pointer", children: children }));
}
