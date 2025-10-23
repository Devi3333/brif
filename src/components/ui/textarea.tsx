type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
export function Textarea({ className = "", ...p }: Props) {
  return (
    <textarea
      {...p}
      className={`w-full px-3 py-2 rounded-xl border outline-none focus:ring-2 focus:ring-sky-400 ${className}`}
    />
  );
}
