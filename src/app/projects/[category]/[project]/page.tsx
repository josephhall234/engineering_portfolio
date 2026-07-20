import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategory, getProject, projectCategories } from "@/data/projects";

export function generateStaticParams() {
  return projectCategories.flatMap((category) =>
    category.projects.map((project) => ({ category: category.slug, project: project.slug })),
  );
}

const sections = [
  ["Overview", "Add a concise overview explaining the purpose of the project, your role, and the final result."],
  ["The Challenge", "Explain the problem, requirements, constraints, and why the project mattered."],
  ["My Role", "Clarify your ownership, responsibilities, collaborators, and decision-making."],
  ["Design and Development", "Add CAD work, calculations, design iterations, and key engineering decisions."],
  ["Analysis", "Include FEA, hand calculations, simulations, trade studies, or other validation work."],
  ["Manufacturing or Implementation", "Show how the design was fabricated, assembled, programmed, or put into use."],
  ["Testing and Results", "Describe test methods, measurable outcomes, performance, and final observations."],
  ["Reflection", "Share what you learned, what you would improve, and how the project shaped your engineering approach."],
];

export default async function ProjectPage({ params }: { params: Promise<{ category: string; project: string }> }) {
  const { category: categorySlug, project: projectSlug } = await params;
  const category = getCategory(categorySlug);
  const project = getProject(categorySlug, projectSlug);
  if (!category || !project) notFound();

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 md:px-12 md:py-24 lg:px-0">
      <Link href={`/projects/${category.slug}`} className="text-sm font-semibold text-[var(--accent)]">← Back to {category.title}</Link>
      <p className="mt-10 text-sm uppercase tracking-[0.25em] text-[var(--accent)]">{category.title}</p>
      <h1 className="mt-3 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">{project.title}</h1>
      <p className="mt-7 max-w-3xl text-xl leading-9 text-[var(--muted)]">{project.summary}</p>
      <div className="mt-12 flex aspect-video items-center justify-center rounded-3xl border border-[var(--border)] bg-[var(--placeholder)] text-sm text-[var(--muted)]" role="img" aria-label={`${project.title} hero image or video placeholder`}>
        Project hero image or video placeholder
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
        <aside>
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">Project Details</p>
          <dl className="mt-5 space-y-5 text-sm">
            <div><dt className="font-semibold">Category</dt><dd className="mt-1 text-[var(--muted)]">{category.title}</dd></div>
            <div><dt className="font-semibold">Status</dt><dd className="mt-1 text-[var(--muted)]">{project.status}</dd></div>
          </dl>
        </aside>
        <div className="space-y-14">
          {sections.map(([title, copy]) => (
            <section key={title}>
              <h2 className="text-3xl font-semibold">{title}</h2>
              <p className="mt-5 leading-8 text-[var(--muted)]">{copy}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
