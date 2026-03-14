type TodoBlockProps = {
  title?: string;
  items: string[];
};

export function TodoBlock({ title = "TODO", items }: TodoBlockProps) {
  return (
    <div className="rounded-3xl border border-dashed border-cyan-300/35 bg-night-900/70 p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">{title}</p>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-smoke">
        {items.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
    </div>
  );
}
