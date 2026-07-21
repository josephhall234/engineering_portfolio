import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  categorySlug,
  reverse = false,
}: {
  project: Project;
  categorySlug: string;
  reverse?: boolean;
}) {
  const subtext = [project.context, project.date]
    .filter(Boolean)
    .join(" · ");

  return (
    <article className="grid items-center gap-8 border-t border-[var(--border)] pt-10 md:grid-cols-2 md:gap-14">
      <div
        className={`relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--placeholder)] ${
          reverse ? "md:order-2" : ""
        }`}
      >
        {project.heroImage ? (
          <Image
            src={project.heroImage.src}
            alt={project.heroImage.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div
            className="flex h-full items-center justify-center px-4 text-center text-sm text-[var(--muted)]"
            role="img"
            aria-label={`${project.title} image placeholder`}
          >
            Project image placeholder
          </div>
        )}
      </div>

      <div>
        <p className="text-sm text-[var(--accent)]">
          {subtext || project.status}
        </p>

        <h2 className="mt-3 text-4xl font-semibold">
          {project.title}
        </h2>

        <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--muted)]">
          {project.summary}
        </p>

        <Link
          href={`/projects/${categorySlug}/${project.slug}`}
          className="mt-7 inline-flex rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          See details →
        </Link>
      </div>
    </article>
  );
}