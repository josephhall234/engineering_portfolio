import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getCategory,
  getProject,
  projectCategories,
} from "@/data/projects";

export function generateStaticParams() {
  return projectCategories.flatMap((category) =>
    category.projects.map((project) => ({
      category: category.slug,
      project: project.slug,
    })),
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{
    category: string;
    project: string;
  }>;
}) {
  const { category: categorySlug, project: projectSlug } = await params;

  const category = getCategory(categorySlug);
  const project = getProject(categorySlug, projectSlug);

  if (!category || !project) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 py-8 md:px-12 lg:px-20">
      <nav className="mx-auto flex max-w-6xl items-center justify-between border-b border-[var(--border)] pb-5">
        <Link href="/" className="text-lg font-semibold tracking-wide">
          Joseph Hall
        </Link>

        <Link
          href={`/projects/${category.slug}`}
          className="text-sm font-semibold text-[var(--accent)]"
        >
          ← Back to {category.title}
        </Link>
      </nav>

      <article className="mx-auto max-w-5xl py-16 md:py-24">
        <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
          {category.title}
        </p>

        <h1 className="mt-3 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
          {project.title}
        </h1>

        <p className="mt-7 max-w-3xl text-xl leading-9 text-[var(--muted)]">
          {project.summary}
        </p>

        <div className="mt-12 flex aspect-[16/9] items-center justify-center rounded-3xl border border-[var(--border)] bg-[#e9dfd1] text-sm text-[var(--muted)]">
          Project hero image or video
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <aside>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
              Project Details
            </p>

            <dl className="mt-5 space-y-5 text-sm">
              <div>
                <dt className="font-semibold">Category</dt>
                <dd className="mt-1 text-[var(--muted)]">
                  {category.title}
                </dd>
              </div>

              <div>
                <dt className="font-semibold">Status</dt>
                <dd className="mt-1 text-[var(--muted)]">
                  {category.slug === "in-progress"
                    ? "In progress"
                    : "Completed"}
                </dd>
              </div>
            </dl>
          </aside>

          <div className="space-y-14">
            <section>
              <h2 className="text-3xl font-semibold">Overview</h2>
              <p className="mt-5 leading-8 text-[var(--muted)]">
                Add a short overview explaining the purpose of the project,
                your role, and the final result.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold">The Challenge</h2>
              <p className="mt-5 leading-8 text-[var(--muted)]">
                Explain the problem, requirements, constraints, and why the
                project mattered.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold">
                Design and Development
              </h2>
              <p className="mt-5 leading-8 text-[var(--muted)]">
                Add your CAD work, calculations, analysis, manufacturing
                process, testing, and design iterations here.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold">
                Results and Reflection
              </h2>
              <p className="mt-5 leading-8 text-[var(--muted)]">
                Describe the outcome, measurable results, what you learned,
                and what you would improve in a future iteration.
              </p>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}