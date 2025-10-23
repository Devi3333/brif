type DivP = React.HTMLAttributes<HTMLDivElement>;
type BtnP = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Tabs(p: DivP) { return <div {...p} />; }
export function TabsList(p: DivP) { return <div {...p} />; }
export function TabsTrigger(p: BtnP) { return <button {...p} />; }
export function TabsContent(p: DivP) { return <div {...p} />; }
