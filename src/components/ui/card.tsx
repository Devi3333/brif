type DivP = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...p }: DivP) {
  return <div {...p} className={`rounded-2xl border bg-white ${className}`} />;
}
export function CardHeader({ className = "", ...p }: DivP) {
  return <div {...p} className={`p-4 border-b ${className}`} />;
}
export function CardTitle({ className = "", ...p }: DivP) {
  return <div {...p} className={`text-base font-semibold flex items-center gap-2 ${className}`} />;
}
export function CardContent({ className = "", ...p }: DivP) {
  return <div {...p} className={`p-4 ${className}`} />;
}
