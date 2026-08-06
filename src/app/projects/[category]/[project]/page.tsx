import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectImageGallery from "@/components/ProjectImageGallery";
import {
  getCategory,
  getProject,
  projectCategories,
  type ProjectSection,
} from "@/data/projects";

export function generateStaticParams() {
  return projectCategories.flatMap((category) =>
    category.projects.map((project) => ({
      category: category.slug,
      project: project.slug,
    })),
  );
}

function getVideoType(src: string) {
  const lowercaseSrc = src.toLowerCase();

  if (lowercaseSrc.endsWith(".mp4")) {
    return "video/mp4";
  }

  if (lowercaseSrc.endsWith(".mov")) {
    return "video/quicktime";
  }

  if (lowercaseSrc.endsWith(".webm")) {
    return "video/webm";
  }

  return undefined;
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

  const headerDetails = [project.context, project.team, project.date]
    .filter(Boolean)
    .join(" · ");

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 md:px-12 md:py-24 lg:px-0">
      <Link
        href={`/projects/${category.slug}`}
        className="text-sm font-semibold text-[var(--accent)]"
      >
        ← Back to {category.title}
      </Link>

      <article>
        <header className="mt-10">
          <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
            {category.title}
          </p>

          <h1 className="mt-3 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
            {project.title}
          </h1>

          {headerDetails && (
            <p className="mt-5 text-sm font-semibold text-[var(--accent)]">
              {headerDetails}
            </p>
          )}

          <p className="mt-6 max-w-3xl text-xl leading-9 text-[var(--muted)]">
            {project.summary}
          </p>
        </header>

        {project.heroImage ? (
          <figure className="mt-12">
            <div className="relative aspect-video overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--placeholder)]">
              <Image
                src={project.heroImage.src}
                alt={project.heroImage.alt}
                fill
                priority
                sizes="(min-width: 1024px) 960px, 100vw"
                className="object-cover"
              />
            </div>

            {project.heroImage.caption && (
              <figcaption className="mt-3 text-sm text-[var(--muted)]">
                {project.heroImage.caption}
              </figcaption>
            )}
          </figure>
        ) : (
          <div
            className="mt-12 flex aspect-video items-center justify-center rounded-3xl border border-[var(--border)] bg-[var(--placeholder)] text-sm text-[var(--muted)]"
            role="img"
            aria-label={`${project.title} hero image placeholder`}
          >
            Project hero image or video placeholder
          </div>
        )}

        <div className="mt-16 grid gap-10 md:grid-cols-[0.55fr_1.45fr]">
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

              {project.context && (
                <div>
                  <dt className="font-semibold">Context</dt>
                  <dd className="mt-1 text-[var(--muted)]">
                    {project.context}
                  </dd>
                </div>
              )}

              {project.date && (
                <div>
                  <dt className="font-semibold">Date</dt>
                  <dd className="mt-1 text-[var(--muted)]">
                    {project.date}
                  </dd>
                </div>
              )}

              {project.team && (
                <div>
                  <dt className="font-semibold">Team</dt>
                  <dd className="mt-1 text-[var(--muted)]">
                    {project.team}
                  </dd>
                </div>
              )}
            </dl>
          </aside>

          <div className="space-y-12">
            {project.overview && (
              <section>
                <h2 className="text-3xl font-semibold">Overview</h2>

                <p className="mt-4 leading-8 text-[var(--muted)]">
                  {project.overview}
                </p>
              </section>
            )}

            {project.role && (
              <section>
                <h2 className="text-3xl font-semibold">My Role</h2>

                <p className="mt-5 leading-8 text-[var(--muted)]">
                  {project.role}
                </p>
              </section>
            )}

            {project.sections?.map((section: ProjectSection) => (
              <section key={section.title}>
                <h2 className="text-3xl font-semibold">{section.title}</h2>

                <p className="mt-5 leading-8 text-[var(--muted)]">
                  {section.body}
                </p>

                {section.metrics && section.metrics.length > 0 && (
                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    {section.metrics.map((metric) => (
                      <div
                        key={`${section.title}-${metric.label}`}
                        className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"
                      >
                        <p className="text-sm text-[var(--muted)]">
                          {metric.label}
                        </p>

                        <p className="mt-2 text-2xl font-semibold text-[var(--accent)]">
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {section.images && section.images.length > 0 && (
                  <div className="mt-8">
                    <ProjectImageGallery
                      images={section.images}
                      gallery={section.gallery}
                    />
                  </div>
                )}

                {section.video && (
                  <figure className="mt-8">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full rounded-2xl border border-[var(--border)] bg-black"
                      aria-label={section.video.title}
                    >
                      <source
                        src={section.video.src}
                        type={getVideoType(section.video.src)}
                      />

                      Your browser does not support the video element.
                    </video>

                    {section.video.caption && (
                      <figcaption className="mt-3 text-sm text-[var(--muted)]">
                        {section.video.caption}
                      </figcaption>
                    )}
                  </figure>
                )}
              </section>
            ))}

            {!project.sections && (
              <section>
                <h2 className="text-3xl font-semibold">
                  Project details coming soon
                </h2>

                <p className="mt-5 leading-8 text-[var(--muted)]">
                  Additional technical content, images, and results will be
                  added to this project page.
                </p>
              </section>
            )}
          </div>
        </div>
      </article>
    </main>
  );
}