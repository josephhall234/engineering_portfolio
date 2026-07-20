export default function ResumePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 md:px-12 md:py-24 lg:px-0">
      <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent)]">Credentials</p>
      <h1 className="mt-3 text-5xl font-semibold md:text-6xl">Resume</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">A current resume PDF will be embedded here once it is added to the public folder.</p>
      <section className="mt-12 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center md:p-14">
        <div className="flex min-h-[420px] items-center justify-center rounded-2xl border border-dashed border-[var(--border)] bg-[var(--placeholder)] px-6 text-[var(--muted)]" role="img" aria-label="Resume PDF embed placeholder">Resume PDF embed placeholder</div>
        <button type="button" disabled className="mt-7 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white opacity-50" aria-describedby="resume-note">Download Resume</button>
        <p id="resume-note" className="mt-3 text-sm text-[var(--muted)]">Add the final PDF to public, then replace this placeholder with an embed and working download link.</p>
      </section>
    </main>
  );
}
