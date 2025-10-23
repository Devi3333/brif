type DivP = React.HTMLAttributes<HTMLDivElement>;
type SpanP = React.HTMLAttributes<HTMLSpanElement>;

export function Avatar({ className = "", ...p }: DivP) {
  return (
    <div
      {...p}
      className={`inline-flex items-center justify-center rounded-full bg-slate-200 h-8 w-8 ${className}`}
    />
  );
}
export function AvatarFallback({ className = "", ...p }: SpanP) {
  return <span {...p} className={`text-xs font-medium ${className}`} />;
}
