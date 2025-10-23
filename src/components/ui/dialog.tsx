type DivP = React.HTMLAttributes<HTMLDivElement>;

type TriggerP = React.HTMLAttributes<HTMLSpanElement> & {
  asChild?: boolean;
  children?: React.ReactNode;
};

export function Dialog(p: DivP) { return <div {...p} />; }

export function DialogTrigger({ asChild, children, ...p }: TriggerP) {
  if (asChild) return <>{children}</>;
  return <span {...p}>{children}</span>;
}

export function DialogContent({ className = "", ...p }: DivP) {
  return <div {...p} className={`p-4 rounded-2xl border bg-white shadow-lg ${className}`} />;
}
export function DialogHeader({ className = "", ...p }: DivP) {
  return <div {...p} className={`mb-2 ${className}`} />;
}
export function DialogTitle({ className = "", ...p }: DivP) {
  return <div {...p} className={`text-base font-semibold ${className}`} />;
}
export function DialogDescription({ className = "", ...p }: DivP) {
  return <div {...p} className={`text-sm text-slate-500 ${className}`} />;
}
