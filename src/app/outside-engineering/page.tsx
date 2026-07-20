const interests = [
  { title: "Surfing", copy: "Add a brief note about what you enjoy about surfing and the role it plays in your life." },
  { title: "Backpacking", copy: "Add a brief note about exploration, endurance, and time spent outdoors." },
  { title: "Sourdough Making", copy: "Add a brief note about patience, experimentation, and craft." },
  { title: "Astrophotography", copy: "Add a brief note about curiosity, technical setup, and capturing the night sky." },
];

export default function OutsideEngineeringPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-24 lg:px-0">
      <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent)]">Beyond the Workshop</p>
      <h1 className="mt-3 text-5xl font-semibold md:text-6xl">Outside Engineering</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">Outside of engineering, I enjoy activities that encourage exploration, patience, creativity, and continuous learning.</p>
      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {interests.map((interest) => (
          <article key={interest.title} className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
            <div className="flex aspect-[16/10] items-center justify-center bg-[var(--placeholder)] text-sm text-[var(--muted)]" role="img" aria-label={`${interest.title} image placeholder`}>{interest.title} image placeholder</div>
            <div className="p-6"><h2 className="text-3xl font-semibold">{interest.title}</h2><p className="mt-4 leading-7 text-[var(--muted)]">{interest.copy}</p></div>
          </article>
        ))}
      </div>
    </main>
  );
}
