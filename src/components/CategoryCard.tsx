import Link from "next/link";
import type { ProjectCategory } from "@/data/projects";

export function CategoryCard({ category }: { category: ProjectCategory }) {
  return (
    <Link
      href={`/projects/${category.slug}`}
      className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition hover:-translate-y-0.5 hover:border-[var(--accent)]"
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-sm text-[var(--accent)]">{category.projects.length} projects</p>
          <h2 className="mt-3 text-3xl font-semibold">{category.title}</h2>
        </div>
        <span aria-hidden="true" className="text-xl text-[var(--accent)] transition group-hover:translate-x-1">→</span>
      </div>
      <p className="mt-5 leading-7 text-[var(--muted)]">{category.description}</p>
      <p className="mt-7 text-sm font-semibold text-[var(--accent)]">View category</p>
    </Link>
  );
}
