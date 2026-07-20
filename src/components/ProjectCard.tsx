import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, categorySlug, reverse = false }: { project: Project; categorySlug: string; reverse?: boolean }) {
  return (
    <article className="grid items-center gap-8 border-t border-[var(--border)] pt-10 md:grid-cols-2 md:gap-14">
      <div className={`flex aspect-[4/3] items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--placeholder)] px-4 text-center text-sm text-[var(--muted)] ${reverse ? "md:order-2" : ""}`} role="img" aria-label={`${project.title} image placeholder`}>
        Project image placeholder
      </div>
      <div>
        <p className="text-sm text-[var(--accent)]">{project.status}</p>
        <h2 className="mt-3 text-4xl font-semibold">{project.title}</h2>
        <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--muted)]">{project.summary}</p>
        <Link href={`/projects/${categorySlug}/${project.slug}`} className="mt-7 inline-flex rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90">
          See details →
        </Link>
      </div>
    </article>
  );
}
