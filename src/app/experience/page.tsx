type Activity = {
  title: string;
  role: string;
  dates?: string;
  description: string;
};

type TimelineEntryProps = {
  dates: string;
  title: string;
  subtitle: string;
  location?: string;
  bullets: string[];
  activities?: Activity[];
  plannedNote?: boolean;
  side: "left" | "right";
};

const education = [
  {
    dates: "2023–2027",
    title: "California Polytechnic State University",
    subtitle: "B.S. in Mechanical Engineering, Energy Resources Concentration",
    location: "San Luis Obispo, California",
    bullets: [
      "Expected graduation: June 2027",
      "Overall GPA: 3.479",
      "Major GPA: 3.396",
      "Selected Coursework: Energy Conversion, Special Problems for Advanced Undergraduates, Turbomachinery*, Wind Power Engineering*, Ocean Dynamics*",
    ],
    plannedNote: true,
    activities: [
      {
        title: "Cal Poly Wind Power",
        role: "Turbine Design Team",
        dates: "October 2023–Present",
        description:
          "Contribute to the design, analysis, fabrication, and testing of mechanical components on the small-scale wind turbine as part of the blades subteam.",
      },
      {
        title: "Mustang Surf Club",
        role: "Treasurer and Surf Instructor",
        dates: "2023–Present",
        description:
          "Create a budget and manage club finances, assist with events and trips, and lead surf lessons for students with a range of experience levels.",
      },
      {
        title: "Cal Poly Triathlon Team",
        role: "Student Athlete",
        dates: "September 2024–Present",
        description:
          "Train and compete alongside other student athletes whilst balancing a coursework and other extra-curriculars.",
      },
    ],
  },
  {
    dates: "2022",
    title: "Laney College",
    subtitle: "Dual Enrollment",
    location: "Oakland, California",
    bullets: [
      "Completed Calculus I and II early at the local city college whilst attending Berkeley High School.",
    ],
  },
  {
    dates: "2019–2023",
    title: "Berkeley High School",
    subtitle: "High School Diploma",
    location: "Berkeley, California",
    bullets: [
      "Served as Senior Class Vice President during the 2022-23 academic year for a class of over 900 students.",
      "Competed at the varsity level on the mens soccer team (4 years) and springboard diving team (3 years).",
      "Tutored students in mathematics from 2019 through 2023 to support underpriveledged students in the BRIDGE program. .",
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
      "Monitored the aquatic facility and maintained a safe environment for nearly 200 patrons.",
      "Taught swim lessons for summer camps and responded to incidents and injuries.",
    ],
  },
  {
    dates: "June 2021 – January 2022",
    title: "Fentons Creamery",
    subtitle: "Takeout Server",
    location: "Oakland, California",
    bullets: [
      "Managed takeout orders and assisted customers in a fast-paced restaurant environment.",
      "Coordinated with kitchen staff to prepare and deliver orders accurately and on time.",
    ],
  },
];

const certificationsAndAwards = [
  "Engineer in Training (FE Mechanical)",
  "1st Place Overall, 2025 Collegiate Wind Competition — CP Wind Power ",
  "2nd Place Turbine Design, 2025 Collegiate Wind Competition — CP Wind Power ",
  "Cal Poly Dean's List — F23,SF24,S26 ",
  "MTS Olympic Distance Triathlon Finisher, Mens Collegiete Division",

  // Add additional awards here using the same format:
  // "Award Name — Organization, Year",
];

function TimelineEntry({
  dates,
  title,
  subtitle,
  location,
  bullets,
  activities,
  plannedNote,
  side,
}: TimelineEntryProps) {
  const dotPosition =
    side === "left"
      ? "left-[calc(100%+2rem)] -translate-x-1/2"
      : "right-[calc(100%+2rem)] translate-x-1/2";

  return (
    <article className="relative border-t border-[var(--border)] pt-5">
      <span
        className={`absolute top-[1.45rem] z-10 hidden h-4 w-4 rounded-full border-2 border-[var(--accent)] bg-[var(--background)] md:block ${dotPosition}`}
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

      {plannedNote && (
        <p className="mt-2 pl-5 text-sm italic text-[var(--muted)]">
          *Planned
        </p>
      )}

      {activities && activities.length > 0 && (
        <div className="mt-8 space-y-6 border-t border-[var(--border)] pt-6">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
            Campus Involvement
          </p>

          {activities.map((activity) => (
            <div key={activity.title}>
              <h4 className="text-lg font-semibold">{activity.title}</h4>

              <p className="mt-1 text-sm font-semibold text-[var(--accent)]">
                {activity.role}
                {activity.dates && ` · ${activity.dates}`}
              </p>

              <p className="mt-2 leading-7 text-[var(--muted)]">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      )}
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
          {/* Education */}
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
          <div className="relative z-0 hidden md:block" aria-hidden="true">
            <div className="absolute inset-y-0 left-1/2 z-0 w-px -translate-x-1/2 bg-[var(--border)]" />
          </div>

          {/* Experience */}
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
          Certifications &amp; Awards
        </h2>

        <ul className="mt-10 max-w-4xl divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {certificationsAndAwards.map((item) => (
            <li
              key={item}
              className="flex gap-4 py-5 leading-7 text-[var(--muted)]"
            >
              <span
                className="mt-[0.7rem] h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]"
                aria-hidden="true"
              />

              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}