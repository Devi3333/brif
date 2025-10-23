type Props = React.InputHTMLAttributes<HTMLInputElement>;
export function Input({ className = "", ...p }: Props) {
  return (
    <input
      {...p}
      className={`w-full px-3 py-2 rounded-xl border outline-none focus:ring-2 focus:ring-sky-400 ${className}`}
    />
  );
}
