import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getCategory,
  projectCategories,
} from "@/data/projects";

export function generateStaticParams() {
  return projectCategories.map((category) => ({
    category: category.slug,
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 py-8 md:px-12 lg:px-20">
      <nav className="mx-auto flex max-w-6xl items-center justify-between border-b border-[var(--border)] pb-5">
        <Link href="/" className="text-lg font-semibold tracking-wide">
          Joseph Hall
        </Link>

        <Link
          href="/projects"
          className="text-sm font-semibold text-[var(--accent)]"
        >
          ← Engineering Portfolio
        </Link>
      </nav>

      <section className="mx-auto max-w-6xl py-16 md:py-24">
        <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
          Engineering Portfolio
        </p>

        <h1 className="mt-3 text-5xl font-semibold md:text-6xl">
          {category.title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
          {category.description}
        </p>

        <div className="mt-16 space-y-16">
          {category.projects.map((project, index) => (
            <article
              key={project.slug}
              className="grid items-center gap-8 border-t border-[var(--border)] pt-10 md:grid-cols-2 md:gap-14"
            >
              <div
                className={`flex aspect-[4/3] items-center justify-center rounded-2xl border border-[var(--border)] bg-[#e9dfd1] text-sm text-[var(--muted)] ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                Project image
              </div>

              <div>
                <p className="text-sm text-[var(--accent)]">
                  {category.title}
                </p>

                <h2 className="mt-3 text-4xl font-semibold">
                  {project.title}
                </h2>

                <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--muted)]">
                  {project.summary}
                </p>

                <Link
                  href={`/projects/${category.slug}/${project.slug}`}
                  className="mt-7 inline-flex rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  See details →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}