export type ProjectStatus = "Completed" | "In Progress";

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectVideo = {
  src: string;
  title: string;
  caption?: string;
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectSection = {
  title: string;
  body: string;
  images?: ProjectImage[];
  video?: ProjectVideo;
  metrics?: ProjectMetric[];
};

export type Project = {
  title: string;
  slug: string;
  summary: string;
  status: ProjectStatus;

  context?: string;
  date?: string;
  team?: string;
  role?: string;
  overview?: string;

  heroImage?: ProjectImage;
  sections?: ProjectSection[];
};

export type ProjectCategory = {
  title: string;
  slug: string;
  description: string;
  projects: Project[];
};

export const projectCategories: ProjectCategory[] = [
  {
    title: "Professional",
    slug: "professional",
    description: "Engineering work completed in professional manufacturing and product-development environments.",
    projects: [
      { title: "Metal Lok Ultra Lite", slug: "metal-lok-ultra-lite", status: "Completed", summary: "A connector redesign focused on reducing assembly cost while maintaining demanding pressure, temperature, and safety requirements." },
      { title: "Injection Mold Plates", slug: "injection-mold-plates", status: "Completed", summary: "Precision mold-plate design developed around customer requirements, machine constraints, and manufacturability." },
      { title: "Custom Semiconductor Vise", slug: "custom-semiconductor-vise", status: "Completed", summary: "A custom precision vise designed to securely and repeatably position semiconductor assemblies during manufacturing." },
      { title: "Pepsi Canning Gear", slug: "pepsi-canning-gear", status: "Completed", summary: "A reverse-engineered replacement gear manufactured for a production canning system." },
      { title: "AI Chip Test Plate", slug: "ai-chip-test-plate", status: "Completed", summary: "A precision test fixture developed to support repeatable inspection and testing of advanced chip hardware." },
      { title: "Cable Separator", slug: "cable-separator", status: "Completed", summary: "A manufactured component developed to organize and separate cable assemblies within a constrained system." },
    ],
  },
  {
    title: "Personal",
    slug: "personal",
    description: "Independent builds driven by curiosity, hands-on learning, and a desire to make useful mechanical systems.",
    projects: [
      { title: "Casting Furnace", slug: "casting-furnace", status: "Completed", summary: "A compact metal-casting furnace designed and built to support future aluminum casting projects." },
      { title: "Compressed Air Engine", slug: "compressed-air-engine", status: "Completed", summary: "An 11 cc engine designed, machined, assembled, and tested as a complete mechanical system." },
      { title: "Rocket Stove", slug: "rocket-stove", status: "Completed", summary: "A compact combustion system exploring efficient heat transfer, airflow, and practical fabrication." },
      { title: "Compact Desalination Kit", slug: "compact-desalination-kit", status: "Completed", summary: "A portable concept for converting saltwater into usable freshwater through a compact thermal process." },
    ],
  },
  {
    title: "Educational / Student Teams",
    slug: "educational",
    description: "Coursework and team projects involving design, analysis, experimentation, and collaborative engineering.",
    projects: [
      { title: "Shroud Baseplate", slug: "shroud-baseplate", status: "Completed", summary: "A structural baseplate designed and analyzed for a wind-power shroud prototype." },
      { title: "ME 328 Apparatus", slug: "me-328-apparatus", status: "Completed", summary: "A mechanical design apparatus developed through iterative analysis, fabrication, and testing." },
      { title: "Differential Drive Robot", slug: "differential-drive-robot", status: "Completed", summary: "A mobile robot project integrating mechanical design, drivetrain selection, controls, and testing." },
      { title: "Transmission Design Tool", slug: "transmission-design-tool", status: "Completed", summary: "A design tool created to evaluate and compare transmission configurations and performance." },
      {
  title: "Model B747 Wing Vibration Study",
  slug: "b747-wing-vibration-study",
  status: "Completed",

  context: "ME 318 · Cal Poly",
  date: "November 2025",
  team: "Team of Two",

  summary:
    "Used a spectral analyzer in the lab to compare analytical, simulated, and experimental results for the first natural frequency of the model Boeing 747 aircraft wing.",

  overview:
    "This project compared three methods of predicting a model B747 wing’s first natural frequency: analytical hand calculations, SolidWorks modal analysis, and experimental testing.",

  role:
    "Completed the analytical hand calculations and performed the vibration analysis in SolidWorks Simulation.",

  heroImage: {
    src: "/images/projects/Educational/b747_vibratory_study/b747_hero.jpeg",
    alt: "Model B747 wing used during vibration testing",
    caption: "Model wing and vibration-test setup.",
  },

  sections: [
    {
      title: "Hand Calculations",
      body:
        "Estimated the first natural frequency using analytical vibration methods.",
      metrics: [
        {
          label: "Theoretical natural frequency",
          value: "39.9 Hz",
        },
      ],
      images: [
        {
          src: "/images/projects/Educational/b747_vibratory_study/b747_hand_calcs.JPG",
          alt: "Hand calculations for the model B747 wing’s first natural frequency",
          caption: "Analytical estimate of the first natural frequency.",
        },
      ],
    },
    {
      title: "SolidWorks Simulation",
      body:
        "Built the modal analysis, generated the finite element mesh, and evaluated the first vibration mode.",
      metrics: [
        {
          label: "Simulated natural frequency",
          value: "32.2 Hz",
        },
      ],
      images: [
        {
          src: "/images/projects/Educational/b747_vibratory_study/b747_mesh.jpeg",
          alt: "Finite element mesh used for the model B747 wing",
          caption: "Finite element mesh used in the modal study.",
        },
        {
          src: "/images/projects/Educational/b747_vibratory_study/b747_fea.PNG",
          alt: "SolidWorks modal-analysis result for the model B747 wing",
          caption: "Simulated first vibration mode.",
        },
      ],
    },
    {
      title: "Experimental Testing",
      body:
        "Excited the wing using a shake table and measured its response with accelerometers and a spectral analyzer.",
      metrics: [
        {
          label: "Measured natural frequency",
          value: "33.8 Hz",
        },
      ],
      video: {
        src: "/images/projects/Educational/b747_vibratory_study/B747_vid.mp4",
        title: "First natural frequency test",
        caption:
          "Slow-motion footage of the wing vibrating near its first natural frequency.",
      },
    },
    {
      title: "Comparison",
      body:
        "The SolidWorks result closely matched the experimental measurement, while the analytical model predicted a higher frequency because of its simplifying assumptions.",
      metrics: [
        {
          label: "Hand calculations",
          value: "39.9 Hz",
        },
        {
          label: "SolidWorks FEA",
          value: "32.2 Hz",
        },
        {
          label: "Experimental result",
          value: "33.8 Hz",
        },
      ],
    },
    {
      title: "Reflection",
      body:
        "This project strengthened my understanding of structural vibration and reinforced the importance of validating analytical and computational models with experimental data.",
    },
  ],
},
      { title: "Satellite Bracket", slug: "satellite-bracket", status: "Completed", summary: "A structurally optimized bracket evaluated through CAD, hand calculations, FEA, and lifecycle costing." },
    ],
  },
  {
    title: "In Progress",
    slug: "in-progress",
    description: "Current builds, experiments, and engineering ideas that are actively being developed.",
    projects: [
      { title: "Casting Parts", slug: "casting-parts", status: "In Progress", summary: "An evolving collection of experimental metal castings produced using the personal furnace." },
      { title: "Computer-Driven Etch A Sketch", slug: "computer-driven-etch-a-sketch", status: "In Progress", summary: "A computer-controlled drawing system combining mechanisms, motors, electronics, and software." },
      { title: "Senior Design Project", slug: "senior-design-project", status: "In Progress", summary: "A collaborative capstone project progressing from problem definition through prototyping and validation." },
      { title: "HDR Request for Proposal", slug: "hdr-request-for-proposal", status: "In Progress", summary: "An engineering proposal developed around a defined customer need, technical requirements, and project plan." },
      { title: "Pelton Wheel Turbine", slug: "pelton-wheel-turbine", status: "In Progress", summary: "A small impulse turbine designed to operate using the flow and pressure available from a garden hose." },
    ],
  },
];

export const featuredProjects = [
  getProject("educational", "shroud-baseplate"),
  getProject("personal", "casting-furnace"),
  getProject("professional", "metal-lok-ultra-lite"),
].filter((project): project is Project => Boolean(project));

export function getCategory(categorySlug: string) {
  return projectCategories.find((category) => category.slug === categorySlug);
}

export function getProject(categorySlug: string, projectSlug: string) {
  return getCategory(categorySlug)?.projects.find((project) => project.slug === projectSlug);
}
