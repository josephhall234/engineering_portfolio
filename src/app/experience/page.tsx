type TimelineEntryProps = {
  dates: string;
  title: string;
  subtitle: string;
  location?: string;
  bullets: string[];
  side: "left" | "right";
};

const education = [
  {
    dates: "2023–2027",
    title: "California Polytechnic State University",
    subtitle: "B.S. in Mechanical Engineering",
    location: "San Luis Obispo, California",
    bullets: [
      "Expected graduation: June 2027",
      "Overall GPA: 3.479",
      "Major GPA: 3.396",
    ],
  },
  {
    dates: "2022",
    title: "Laney College",
    subtitle: "Concurrent College Coursework",
    location: "Oakland, California",
    bullets: [
      "Completed college coursework while attending Berkeley High School.",
    ],
  },
  {
    dates: "2019–2023",
    title: "Berkeley High School",
    subtitle: "High School Diploma",
    location: "Berkeley, California",
    bullets: [
      "Participated in student leadership during the 2022–2023 academic year.",
      "Tutored students in mathematics from 2019 through 2023.",
    ],
  },
];

const experience = [
  {
    dates: "June 2026 – August 2026",
    title: "BIW Connector Systems, ITT Inc.",
    subtitle: "Engineering Intern",
    bullets: [
      "Redesigned Metal-Lok Ultra connector components in Creo toward a target 51% assembly cost reduction while meeting 10,000 psi and 350°F operating requirements.",
      "Developed a 45-component cost model to evaluate design alternatives and manufacturing costs.",
      "Redesigned elastomeric seals and validated their performance through pressure, thermal, and electrical testing.",
    ],
  },
  {
    dates: "June 2025 – September 2025",
    title: "Sematool Precision Manufacturing",
    subtitle: "Mechanical Engineering Intern",
    bullets: [
      "Met with clients to formulate and design engineering solutions to manufacturing challenges.",
      "Coordinated with programmers and machinists to satisfy customer requirements and ISO 9001 specifications.",
      "Operated wire and sinker EDM machines to produce precision fixtures and dies within ±0.0005 in. tolerances.",
    ],
  },
  {
    dates: "June 2024 – September 2024",
    title: "Gonsels Machine Shop",
    subtitle: "Machinist",
    bullets: [
      "Fabricated precision metal components using manual mills, lathes, and traditional machining processes.",
      "Inspected manufactured components using a coordinate measuring machine with micrometer-level accuracy.",
    ],
  },
  {
    dates: "June 2023 – September 2023",
    title: "East Oakland Sports Center",
    subtitle: "Lifeguard",
    location: "Oakland, California",
    bullets: [
      "Monitored the aquatic facility and maintained a safe environment for patrons.",
      "Taught swim lessons and responded to incidents and injuries.",
    ],
  },
  {
    dates: "June 2021 – January 2022",
    title: "Fentons Creamery",
    subtitle: "Takeout Server",
    location: "Oakland, California",
    bullets: [
      "Managed takeout orders and assisted customers in a fast-paced restaurant environment.",
      "Coordinated with kitchen staff to prepare and deliver orders accurately.",
    ],
  },
];

const certifications = [
  {
    title: "Engineer in Training",
    subtitle: "FE Mechanical",
  },
  {
    title: "American Red Cross",
    subtitle: "Lifeguarding, First Aid, CPR and AED",
  },
  {
    title: "ANSI-Accredited",
    subtitle: "Food Handler Certification",
  },
];

const involvement = [
  {
    title: "Treasurer",
    subtitle: "Mustang Surf Club · December 2024–Present",
  },
  {
    title: "Turbine Design Team",
    subtitle: "Cal Poly Wind Power · October 2023–Present",
  },
  {
    title: "Student Athlete",
    subtitle: "Cal Poly Triathlon Team · September 2024–Present",
  },
];

function TimelineEntry({
  dates,
  title,
  subtitle,
  location,
  bullets,
  side,
}: TimelineEntryProps) {
  const dotPosition =
    side === "left"
      ? "md:-right-[2.4rem]"
      : "md:-left-[2.4rem]";

  return (
    <article className="relative border-t border-[var(--border)] pt-5">
      <span
        className={`absolute top-6 hidden h-3 w-3 rounded-full border-2 border-[var(--accent)] bg-[var(--surface)] md:block ${dotPosition}`}
        aria-hidden="true"
      />

      <p className="text-sm font-semibold text-[var(--accent)]">{dates}</p>

      <h3 className="mt-2 text-2xl font-semibold leading-tight">{title}</h3>

      <p className="mt-2 font-semibold">{subtitle}</p>

      {location && (
        <p className="mt-1 text-sm italic text-[var(--muted)]">{location}</p>
      )}

      <ul className="mt-4 space-y-2 pl-5 text-[var(--muted)]">
        {bullets.map((bullet) => (
          <li key={bullet} className="list-disc leading-7">
            {bullet}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-24 lg:px-0">
      <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
        Background
      </p>

      <h1 className="mt-3 text-5xl font-semibold md:text-6xl">
        Education &amp; Experience
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
        A concise view of the academic and professional experiences that have
        shaped my engineering background.
      </p>

      <section className="mt-14">
        <div className="grid gap-14 md:grid-cols-[1fr_4rem_1fr] md:gap-0">
          {/* Education: left side */}
          <div>
            <h2 className="mb-8 text-3xl font-semibold italic">Education</h2>

            <div className="space-y-12">
              {education.map((entry) => (
                <TimelineEntry
                  key={`${entry.title}-${entry.dates}`}
                  {...entry}
                  side="left"
                />
              ))}
            </div>
          </div>

          {/* Central timeline */}
          <div className="relative hidden md:block" aria-hidden="true">
            <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-[var(--border)]" />
          </div>

          {/* Experience: right side */}
          <div>
            <h2 className="mb-8 text-3xl font-semibold italic">Experience</h2>

            <div className="space-y-12">
              {experience.map((entry) => (
                <TimelineEntry
                  key={`${entry.title}-${entry.dates}`}
                  {...entry}
                  side="right"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 border-t border-[var(--border)] pt-14">
        <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
          Additional Background
        </p>

        <h2 className="mt-3 text-4xl font-semibold">
          Certifications &amp; Involvement
        </h2>

        <div className="mt-10 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-5 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
              Certifications
            </h3>

            <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {certifications.map((item) => (
                <article key={item.title} className="py-5">
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                  <p className="mt-1 leading-7 text-[var(--muted)]">
                    {item.subtitle}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
              Leadership &amp; Involvement
            </h3>

            <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {involvement.map((item) => (
                <article key={item.title} className="py-5">
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                  <p className="mt-1 leading-7 text-[var(--muted)]">
                    {item.subtitle}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}