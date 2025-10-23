import { jsx as _jsx } from "react/jsx-runtime";
export function Label({ className = "", ...p }) {
    return _jsx("label", { ...p, className: `text-sm text-slate-700 ${className}` });
}
