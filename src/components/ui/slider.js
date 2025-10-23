import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
export function Slider({ value = [1], min = 0.5, max = 2, step = 0.25, onValueChange, className = "", }) {
    const [v, setV] = useState(value[0]);
    return (_jsx("input", { type: "range", min: min, max: max, step: step, value: v, onChange: (e) => {
            const nv = Number(e.target.value);
            setV(nv);
            onValueChange?.([nv]);
        }, className: `w-full ${className}` }));
}
