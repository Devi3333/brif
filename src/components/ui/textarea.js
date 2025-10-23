import { jsx as _jsx } from "react/jsx-runtime";
export function Textarea({ className = "", ...p }) {
    return (_jsx("textarea", { ...p, className: `w-full px-3 py-2 rounded-xl border outline-none focus:ring-2 focus:ring-sky-400 ${className}` }));
}
