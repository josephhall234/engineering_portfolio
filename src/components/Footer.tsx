import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between md:px-12 lg:px-0">
        <p>© {new Date().getFullYear()} Joseph Hall</p>
        <div className="flex gap-5">
          <Link href="/projects" className="hover:text-[var(--accent)]">Projects</Link>
          <Link href="/resume" className="hover:text-[var(--accent)]">Resume</Link>
        </div>
      </div>
    </footer>
  );
}
