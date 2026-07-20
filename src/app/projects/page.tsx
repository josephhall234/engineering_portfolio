import { CategoryCard } from "@/components/CategoryCard";
import { projectCategories } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-24 lg:px-0">
      <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent)]">Selected Work</p>
      <h1 className="mt-3 max-w-3xl text-5xl font-semibold leading-tight md:text-6xl">Engineering Portfolio</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
        Explore my professional, personal, and educational engineering work, along with several projects currently in development.
      </p>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projectCategories.map((category) => <CategoryCard key={category.slug} category={category} />)}
      </div>
    </main>
  );
}
