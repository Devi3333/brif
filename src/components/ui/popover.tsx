type DivP = React.HTMLAttributes<HTMLDivElement>;

type TriggerP = React.HTMLAttributes<HTMLSpanElement> & {
  asChild?: boolean;
  children?: React.ReactNode;
};

export function Popover(p: DivP) { return <div {...p} />; }

export function PopoverTrigger({ asChild, children, ...p }: TriggerP) {
  if (asChild) return <>{children}</>;
  return <span {...p}>{children}</span>;
}

export function PopoverContent({ className = "", ...p }: DivP) {
  return <div {...p} className={`p-2 rounded-xl border bg-white shadow-lg ${className}`} />;
}
