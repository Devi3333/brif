import { jsx as _jsx } from "react/jsx-runtime";
export function Input({ className = "", ...p }) {
    return (_jsx("input", { ...p, className: `w-full px-3 py-2 rounded-xl border outline-none focus:ring-2 focus:ring-sky-400 ${className}` }));
}
