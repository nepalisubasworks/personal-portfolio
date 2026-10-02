export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-4xl scroll-mt-16 px-6 py-20">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-emerald-400">
        {title}
      </h2>
      {children}
    </section>
  );
}
