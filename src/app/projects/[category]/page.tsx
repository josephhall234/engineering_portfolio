import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { getCategory, projectCategories } from "@/data/projects";

export function generateStaticParams() {
  return projectCategories.map((category) => ({ category: category.slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) notFound();

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-24 lg:px-0">
      <Link href="/projects" className="text-sm font-semibold text-[var(--accent)]">← Engineering Portfolio</Link>
      <p className="mt-10 text-sm uppercase tracking-[0.25em] text-[var(--accent)]">Project Category</p>
      <h1 className="mt-3 text-5xl font-semibold md:text-6xl">{category.title}</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">{category.description}</p>
      <div className="mt-16 space-y-16">
        {category.projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} categorySlug={category.slug} reverse={index % 2 === 1} />
        ))}
      </div>
    </main>
  );
}
