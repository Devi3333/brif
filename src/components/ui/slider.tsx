import { useState } from "react";

type Props = {
  value?: number[];
  min?: number;
  max?: number;
  step?: number;
  onValueChange?: (v: number[]) => void;
  className?: string;
};

export function Slider({
  value = [1],
  min = 0.5,
  max = 2,
  step = 0.25,
  onValueChange,
  className = "",
}: Props) {
  const [v, setV] = useState<number>(value[0]);

  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={v}
      onChange={(e) => {
        const nv = Number(e.target.value);
        setV(nv);
        onValueChange?.([nv]);
      }}
      className={`w-full ${className}`}
    />
  );
}
