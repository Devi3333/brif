// src/components/ui/badge.tsx
type Props = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "outline" | "secondary";
};

export function Badge({ className = "", variant = "default", ...p }: Props) {
  const variants = {
    default: "bg-slate-100 text-slate-900 border border-slate-200",
    outline: "bg-transparent text-slate-700 border border-slate-300",
    secondary: "bg-slate-800 text-white border border-slate-800",
  } as const;

  return (
    <span
      {...p}
      className={`inline-flex items-center px-2 py-0.5 rounded-lg text-xs ${variants[variant]} ${className}`}
    />
  );
}
