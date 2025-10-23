type Props = React.LabelHTMLAttributes<HTMLLabelElement>;
export function Label({ className = "", ...p }: Props) {
  return <label {...p} className={`text-sm text-slate-700 ${className}`} />;
}
