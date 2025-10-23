type DivP = React.HTMLAttributes<HTMLDivElement>;
type SpanP = React.HTMLAttributes<HTMLSpanElement>;

export function Select(p: DivP) { return <div {...p} />; }

export function SelectTrigger({ className = "", ...p }: DivP) {
  return <div {...p} className={`px-3 py-2 rounded-xl border bg-white ${className}`} />;
}

export function SelectValue({
  placeholder,
  children,
  ...p
}: SpanP & { placeholder?: string }) {
  return <span {...p}>{children ?? placeholder ?? ""}</span>;
}

export function SelectContent({ className = "", ...p }: DivP) {
  return <div {...p} className={`mt-2 border rounded-xl bg-white ${className}`} />;
}

export function SelectItem({ value, children, ...p }: any) {
  return (
    <div {...p} data-value={value} className="px-3 py-2 hover:bg-slate-50 cursor-pointer">
      {children}
    </div>
  );
}
