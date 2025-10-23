import { jsx as _jsx } from "react/jsx-runtime";
export function Card({ className = "", ...p }) {
    return _jsx("div", { ...p, className: `rounded-2xl border bg-white ${className}` });
}
export function CardHeader({ className = "", ...p }) {
    return _jsx("div", { ...p, className: `p-4 border-b ${className}` });
}
export function CardTitle({ className = "", ...p }) {
    return _jsx("div", { ...p, className: `text-base font-semibold flex items-center gap-2 ${className}` });
}
export function CardContent({ className = "", ...p }) {
    return _jsx("div", { ...p, className: `p-4 ${className}` });
}
