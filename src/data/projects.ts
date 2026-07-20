export type Project = {
  title: string;
  slug: string;
  summary: string;
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
    description:
      "Engineering work completed through internships and professional manufacturing environments.",
    projects: [
      {
        title: "Metal Lok Ultra Lite",
        slug: "metal-lok-ultra-lite",
        summary:
          "A connector redesign focused on reducing assembly cost while maintaining demanding pressure, temperature, and safety requirements.",
      },
      {
        title: "Injection Mold Plates",
        slug: "injection-mold-plates",
        summary:
          "Precision mold-plate design developed around customer requirements, machine constraints, and manufacturability.",
      },
      {
        title: "Custom Semiconductor Vise",
        slug: "custom-semiconductor-vise",
        summary:
          "A custom precision vise designed to securely and repeatably position semiconductor assemblies during manufacturing.",
      },
      {
        title: "Pepsi Canning Gear",
        slug: "pepsi-canning-gear",
        summary:
          "A reverse-engineered replacement gear manufactured for a production canning system.",
      },
      {
        title: "AI Chip Test Plate",
        slug: "ai-chip-test-plate",
        summary:
          "A precision test fixture developed to support repeatable inspection and testing of advanced chip hardware.",
      },
      {
        title: "Cable Separator",
        slug: "cable-separator",
        summary:
          "A manufactured component developed to organize and separate cable assemblies within a constrained system.",
      },
    ],
  },
  {
    title: "Personal",
    slug: "personal",
    description:
      "Independent projects driven by curiosity, hands-on learning, and a desire to build useful mechanical systems.",
    projects: [
      {
        title: "Casting Furnace",
        slug: "casting-furnace",
        summary:
          "A compact metal-casting furnace designed and built to support future aluminum casting projects.",
      },
      {
        title: "Compressed Air Engine",
        slug: "compressed-air-engine",
        summary:
          "An 11 cc engine designed, machined, assembled, and tested as a complete mechanical system.",
      },
      {
        title: "Rocket Stove",
        slug: "rocket-stove",
        summary:
          "A compact combustion system exploring efficient heat transfer, airflow, and practical fabrication.",
      },
      {
        title: "Compact Desalination Kit",
        slug: "compact-desalination-kit",
        summary:
          "A portable concept for converting saltwater into usable freshwater through a compact thermal process.",
      },
    ],
  },
  {
    title: "Educational / Student Teams",
    slug: "educational",
    description:
      "Coursework and team projects involving design, analysis, experimentation, and collaborative engineering.",
    projects: [
      {
        title: "Shroud Baseplate",
        slug: "shroud-baseplate",
        summary:
          "A structural baseplate designed and analyzed for a wind-power shroud prototype.",
      },
      {
        title: "ME 328 Apparatus",
        slug: "me-328-apparatus",
        summary:
          "A mechanical design apparatus developed through iterative analysis, fabrication, and testing.",
      },
      {
        title: "Differential Drive Robot",
        slug: "differential-drive-robot",
        summary:
          "A mobile robot project integrating mechanical design, drivetrain selection, controls, and testing.",
      },
      {
        title: "Transmission Design Tool",
        slug: "transmission-design-tool",
        summary:
          "A design tool created to evaluate and compare transmission configurations and performance.",
      },
      {
        title: "Model B747 Wing Vibration Study",
        slug: "b747-wing-vibration-study",
        summary:
          "An experimental and computational study comparing the vibration behavior of a model aircraft wing.",
      },
      {
        title: "Satellite Bracket",
        slug: "satellite-bracket",
        summary:
          "A structurally optimized bracket evaluated through CAD, hand calculations, FEA, and lifecycle costing.",
      },
    ],
  },
  {
    title: "In Progress",
    slug: "in-progress",
    description:
      "Current builds, experiments, and engineering ideas that are actively being developed.",
    projects: [
      {
        title: "Casting Parts",
        slug: "casting-parts",
        summary:
          "An evolving collection of experimental metal castings produced using the personal furnace.",
      },
      {
        title: "Computer-Driven Etch A Sketch",
        slug: "computer-driven-etch-a-sketch",
        summary:
          "A computer-controlled drawing system combining mechanisms, motors, electronics, and software.",
      },
      {
        title: "Senior Design Project",
        slug: "senior-design-project",
        summary:
          "A collaborative capstone project progressing from problem definition through prototyping and validation.",
      },
      {
        title: "HDR Request for Proposal",
        slug: "hdr-request-for-proposal",
        summary:
          "An engineering proposal developed around a defined customer need, technical requirements, and project plan.",
      },
      {
        title: "Pelton Wheel Turbine",
        slug: "pelton-wheel-turbine",
        summary:
          "A small impulse turbine designed to operate using the flow and pressure available from a garden hose.",
      },
    ],
  },
];

export function getCategory(categorySlug: string) {
  return projectCategories.find(
    (category) => category.slug === categorySlug,
  );
}

export function getProject(categorySlug: string, projectSlug: string) {
  const category = getCategory(categorySlug);

  return category?.projects.find(
    (project) => project.slug === projectSlug,
  );
}