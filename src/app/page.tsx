const featuredProjects = [
  {
    title: "Wind Power Shroud Baseplate",
    type: "Student Team",
    description:
      "Structural baseplate design for a wind turbine shroud prototype, supported by finite element and vibration analysis.",
  },
  {
    title: "Metal Casting Furnace",
    type: "Personal Project",
    description:
      "A self-driven design and build project focused on hands-on fabrication, thermal systems, and iteration.",
  },
  {
    title: "Metal Lok Connector",
    type: "Professional Project",
    description:
      "Connector component redesign targeting assembly cost reduction while meeting demanding pressure and temperature requirements.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-8 md:px-12 lg:px-20">
      <nav className="mx-auto flex max-w-6xl items-center justify-between border-b border-[var(--border)] pb-5">
        <a href="/" className="text-lg font-semibold tracking-wide">
          Joseph Hall
        </a>

        <div className="flex gap-6 text-sm text-[var(--muted)]">
          <a href="/projects" className="hover:text-[var(--accent)]">
            Projects
          </a>
          <a href="/resume" className="hover:text-[var(--accent)]">
            Resume
          </a>
          <a href="/about" className="hover:text-[var(--accent)]">
            About
          </a>
        </div>
      </nav>

      <section className="mx-auto grid max-w-6xl gap-12 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
            Mechanical Engineer
          </p>

          <h1 className="max-w-3xl text-5xl font-semibold leading-tight md:text-7xl">
            Designing and building mechanical systems from concept to finished
            product.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            I&apos;m Joseph Hall, a mechanical engineering student at Cal Poly
            who enjoys the process of seeing projects through—from early design
            decisions to analysis, fabrication, testing, and iteration.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/projects"
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              View Projects
            </a>
            <a
              href="/resume"
              className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm">
          <div className="flex aspect-[4/5] items-center justify-center rounded-2xl bg-[#e9dfd1] text-center text-sm text-[var(--muted)]">
            Portrait placeholder
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl border-t border-[var(--border)] py-16">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
              Selected Work
            </p>
            <h2 className="mt-2 text-4xl font-semibold">Featured Projects</h2>
          </div>
          <a
            href="/projects"
            className="hidden text-sm font-semibold text-[var(--accent)] md:block"
          >
            View all projects →
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:-translate-y-1"
            >
              <p className="text-sm text-[var(--accent)]">{project.type}</p>
              <h3 className="mt-4 text-2xl font-semibold">{project.title}</h3>
              <p className="mt-4 leading-7 text-[var(--muted)]">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}