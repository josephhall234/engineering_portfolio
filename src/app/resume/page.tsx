import Image from "next/image";

const resumePdfPath = "/resume/Joseph_Hall_Resume.pdf";
const resumePreviewPath = "/resume/Joseph_Hall_Resume.png";

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 md:px-12 md:py-24 lg:px-0">
      <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
        Credentials
      </p>

      <h1 className="mt-3 text-5xl font-semibold md:text-6xl">
        Resume
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
        View my current resume below or download a PDF copy; last updated
        in the Fall of 2026.
      </p>

      <section className="mt-12 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4 md:p-8">
        <a
          href={resumePdfPath}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Joseph Hall's resume as a PDF"
          className="block overflow-hidden rounded-2xl border border-[var(--border)] bg-white"
        >
          <Image
            src={resumePreviewPath}
            alt="Joseph Hall mechanical engineering resume"
            width={1700}
            height={2200}
            priority
            className="h-auto w-full"
          />
        </a>

        <div className="mt-7 text-center">
          <a
            href={resumePdfPath}
            download="Joseph_Hall_Resume.pdf"
            className="inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-85"
          >
            Download Resume
          </a>

          <p className="mt-3 text-sm text-[var(--muted)]">
            Select the resume preview to open the full PDF.
          </p>
        </div>
      </section>
    </main>
  );
}