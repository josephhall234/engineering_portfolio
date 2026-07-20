import Link from "next/link";
import { featuredProjects } from "@/data/projects";

export default function Home() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:items-center md:px-12 md:py-20 lg:px-0">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[var(--accent)]">Mechanical Engineer</p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Designing and building mechanical systems from concept to finished product.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            I&apos;m Joseph Hall, a mechanical engineering student at Cal Poly who enjoys seeing projects through—from early design decisions to analysis, fabrication, testing, and iteration.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/projects" className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">View Projects</Link>
            <Link href="/resume" className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold transition hover:border-[var(--accent)] hover:text-[var(--accent)]">Resume</Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3" aria-label="Four-image collage placeholder">
          {["Portrait", "Engineering project", "Machining", "Outside engineering"].map((label, index) => (
            <div key={label} className={`flex items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--placeholder)] px-4 text-center text-sm text-[var(--muted)] ${index === 0 || index === 3 ? "aspect-[4/5]" : "aspect-square"}`} role="img" aria-label={`${label} image placeholder`}>
              {label} placeholder
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl border-t border-[var(--border)] px-6 py-14 md:px-12 lg:px-0">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent)]">Selected Work</p>
            <h2 className="mt-2 text-4xl font-semibold">Featured Projects</h2>
          </div>
          <Link href="/projects" className="hidden text-sm font-semibold text-[var(--accent)] md:block">View all projects →</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <article key={project.slug} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <p className="text-sm text-[var(--accent)]">{project.status}</p>
              <h3 className="mt-4 text-2xl font-semibold">{project.title}</h3>
              <p className="mt-4 leading-7 text-[var(--muted)]">{project.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
