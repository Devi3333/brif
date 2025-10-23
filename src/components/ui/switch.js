import { jsx as _jsx } from "react/jsx-runtime";
export function Switch({ className = "", ...p }) {
    return _jsx("input", { type: "checkbox", ...p, className: className });
}
