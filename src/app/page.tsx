import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/data/projects";

export default function Home() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[0.95fr_1.05fr] md:items-center md:px-12 md:py-20 lg:px-0">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
            Mechanical Engineer
          </p>

          <h1 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl md:text-[3.4rem]">
            Engineering practical solutions from concept to completion.
          </h1>

          <div className="mt-6 max-w-2xl space-y-5 text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
            <p>
              I&apos;m Joseph Hall, a mechanical engineering student at Cal
              Poly with a natural curiosity and a passion for building things. Set to graduate in May 2027, I&apos;m seeking
              a full-time engineering position in the summer/fall
              where I can contribute to projects in a meaningful way.
            </p>

            <p>
              Through both academic projects and industry experience,
              I&apos;ve developed a strong foundation in mechanical design,
              engineering analysis, and hands-on testing. Along the way,
              I&apos;ve grown into an engineer who works well in a team and enjoys tackling difficult
              problems with equal parts curiosity and persistence.
            </p>

            <p>
              I encourage you to browse through my website and explore some of
              the things I&apos;ve been working on recently.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              View Projects
            </Link>

            <Link
              href="/resume"
              className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Resume
            </Link>
          </div>
        </div>

        <figure>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--placeholder)]">
            <Image
              src="/images/homepage/front_page_blurred.jpg"
              alt="Joseph Hall posing with torque wrenches used before hydrostatic testing"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <figcaption className="mt-3 text-sm leading-6 text-[var(--muted)]">
            Me posing with the torque wrenches used to tighten DUT bolts to 500
            ft-lbs before hydrostatic testing.
          </figcaption>
        </figure>
      </section>

      <section className="mx-auto max-w-6xl border-t border-[var(--border)] px-6 py-14 md:px-12 lg:px-0">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
              Selected Work
            </p>

            <h2 className="mt-2 text-4xl font-semibold">Featured Projects</h2>
          </div>

          <Link
            href="/projects"
            className="hidden text-sm font-semibold text-[var(--accent)] md:block"
          >
            View all projects →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              key={project.slug}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
            >
              <p className="text-sm text-[var(--accent)]">{project.status}</p>

              <h3 className="mt-4 text-2xl font-semibold">{project.title}</h3>

              <p className="mt-4 leading-7 text-[var(--muted)]">
                {project.summary}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}