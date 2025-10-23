type Props = React.InputHTMLAttributes<HTMLInputElement>;
export function Switch({ className = "", ...p }: Props) {
  return <input type="checkbox" {...p} className={className} />;
}
