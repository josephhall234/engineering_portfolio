const education = [
  { title: "California Polytechnic State University, San Luis Obispo", subtitle: "B.S. Mechanical Engineering · Expected June 2027", copy: "Add concise details about coursework, student teams, honors, and areas of focus." },
];

const experience = [
  { title: "BIW Connector Systems / ITT", subtitle: "Mechanical Engineering Intern", copy: "Add 2–3 concise highlights focused on ownership, technical work, and measurable outcomes." },
  { title: "Sematool Precision Manufacturing", subtitle: "Mechanical Engineering Intern", copy: "Add 2–3 concise highlights on customer communication, design, machining, and quality requirements." },
  { title: "Gonsels Machine Shop", subtitle: "Machinist", copy: "Add 2–3 concise highlights on fabrication, inspection, and precision manufacturing." },
];

function Entry({ title, subtitle, copy }: { title: string; subtitle: string; copy: string }) {
  return (
    <article className="border-t border-[var(--border)] py-7">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <p className="mt-2 text-sm font-semibold text-[var(--accent)]">{subtitle}</p>
      <p className="mt-4 max-w-xl leading-7 text-[var(--muted)]">{copy}</p>
    </article>
  );
}

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-24 lg:px-0">
      <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent)]">Background</p>
      <h1 className="mt-3 text-5xl font-semibold md:text-6xl">Education & Experience</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">A concise view of the academic and professional experiences that have shaped my engineering practice.</p>
      <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
        <section><h2 className="mb-5 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">Education</h2>{education.map((item) => <Entry key={item.title} {...item} />)}</section>
        <section><h2 className="mb-5 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">Experience</h2>{experience.map((item) => <Entry key={item.title} {...item} />)}</section>
      </div>
    </main>
  );
}
