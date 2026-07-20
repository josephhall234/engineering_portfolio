import Link from "next/link";
import { projectCategories } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-8 md:px-12 lg:px-20">
      <nav className="mx-auto flex max-w-6xl items-center justify-between border-b border-[var(--border)] pb-5">
        <Link href="/" className="text-lg font-semibold tracking-wide">
          Joseph Hall
        </Link>

        <div className="flex flex-wrap justify-end gap-5 text-sm text-[var(--muted)]">
          <Link href="/projects" className="text-[var(--accent)]">
            Projects
          </Link>
          <Link href="/experience" className="hover:text-[var(--accent)]">
            Education & Experience
          </Link>
          <Link
            href="/outside-engineering"
            className="hover:text-[var(--accent)]"
          >
            Outside Engineering
          </Link>
          <Link href="/resume" className="hover:text-[var(--accent)]">
            Resume
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl py-16 md:py-24">
        <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
          Selected Work
        </p>

        <h1 className="mt-3 max-w-3xl text-5xl font-semibold leading-tight md:text-6xl">
          Engineering Portfolio
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
          Explore my professional, personal, and educational engineering work,
          along with several projects that are currently in development.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projectCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/projects/${category.slug}`}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition hover:-translate-y-1 hover:border-[var(--accent)]"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-sm text-[var(--accent)]">
                    {category.projects.length} projects
                  </p>

                  <h2 className="mt-3 text-3xl font-semibold">
                    {category.title}
                  </h2>
                </div>

                <span className="text-xl text-[var(--accent)] transition group-hover:translate-x-1">
                  →
                </span>
              </div>

              <p className="mt-5 max-w-xl leading-7 text-[var(--muted)]">
                {category.description}
              </p>

              <p className="mt-7 text-sm font-semibold text-[var(--accent)]">
                View category
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}