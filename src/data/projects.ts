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
  gallery?: "handcalcs";
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
      {
  title: "Wind Turbine Shroud Baseplate",
  slug: "wind-turbine-shroud-baseplate",
  status: "Completed",

  context: "Cal Poly Wind Power",
  date: "February 2025",
  team: "Blades Subteam",

  summary:
    "Designed and manufactured the structural baseplate for an aerodynamic wind-turbine shroud, using analytical calculations, a semi-automated design tool, and finite element analysis to verify strength, stiffness, and vibration performance.",

  overview:
    "Designed and manufactured a structural baseplate for a small-scale wind turbine to support an approximately 10 lb aerodynamic shroud whilst meeting stiffness, strength, and vibration requirements.",

  role:
    "Developed the baseplate and removable tower-attachment system, completed the analytical stress and deflection calculations, created a semi-automated sizing tool, produced manufacturing drawings, and validated the final design using static and vibratory finite element analysis.",

  heroImage: {
    src: "/images/projects/Educational/Shroud Baseplate/hero_image.jpeg",
    alt: "Wind turbine shroud supported by the completed structural baseplate",
    caption:
      "Completed aerodynamic shroud and structural baseplate installed on the small-scale wind turbine.",
  },

  sections: [
    {
      title: "Project Overview",
      body:
        "The shroud was developed as an experimental aerodynamic concept intended to improve the performance of Cal Poly Wind Power's competition turbine. Although the CAD model focuses on the aerodynamic geometry, supporting the approximately 10 lb shroud required a dedicated structural system capable of transferring its weight and operational loads into the existing turbine tower. My responsibility was to design and manufacture the baseplate and attachment hardware whilst satisfying the project's strength, stiffness, and vibration requirements.",
      images: [
        {
          src: "/images/projects/Educational/Shroud Baseplate/cad_assembly.png",
          alt: "CAD model of the experimental aerodynamic wind turbine shroud",
          caption:
            "CAD model of the aerodynamic shroud, illustrating the need for a secure structural attachment between the shroud and turbine tower.",
        },
      ],
    },

    {
      title: "Attachment Concept",
      body:
        "One of the primary design challenges was developing a secure connection without permanently modifying the turbine tower. Because drilling and welding directly into the tower were prohibited, I developed a removable attachment consisting of a retrofitted pipe clamp and a custom-machined aluminum connector. The assembly transferred the shroud loads into the tower whilst allowing the entire system to be installed and removed without altering the existing turbine structure.",
      images: [
        {
          src: "/images/projects/Educational/Shroud Baseplate/shroud_baseplate_hardware_only.jpeg",
          alt: "Wind turbine shroud baseplate and removable attachment hardware",
          caption:
            "Structural baseplate and removable tower-attachment hardware before installation.",
        },
        {
          src: "/images/projects/Educational/Shroud Baseplate/baseplate_close_up.jpeg",
          alt: "Close-up of the shroud baseplate and pipe-clamp attachment",
          caption:
            "Close-up of the completed baseplate, custom connector, and retrofitted pipe-clamp assembly.",
        },
      ],
    },

    {
      title: "Analytical Design",
      gallery: "handcalcs",
      body:
        "I first developed an analytical model to estimate the combined stresses and maximum deflection produced by the governing load cases. These calculations established the relationships between the applied loading, material properties, plate geometry, required thickness, and factor of safety. The completed analysis provided a baseline for material selection and finite element validation.",
      metrics: [
        {
          label: "Maximum combined stress",
          value: "41.2 MPa",
        },
        {
          label: "Maximum deflection",
          value: "3.0 mm",
        },
        {
          label: "Factor of safety",
          value: "6.7",
        },
      ],
      images: [
        {
          src: "/images/projects/Educational/Shroud Baseplate/hand_calcs_1.jpg",
          alt: "First page of wind turbine shroud baseplate hand calculations",
          caption: "Loading assumptions and free-body analysis.",
        },
        {
          src: "/images/projects/Educational/Shroud Baseplate/hand_calcs_2.jpg",
          alt: "Second page of wind turbine shroud baseplate hand calculations",
          caption: "Combined stress and plate-deflection calculations.",
        },
        {
          src: "/images/projects/Educational/Shroud Baseplate/hand_calcs_3.jpg",
          alt: "Third page of wind turbine shroud baseplate hand calculations",
          caption: "Thickness selection and factor-of-safety calculations.",
        },
      ],
    },

    {
      title: "Semi-Automated Design Tool",
      body:
        "To accelerate material and geometry selection, I developed a parameter-driven Excel sizing tool that evaluated candidate materials and plate configurations. The tool determined the minimum plate thickness required to exceed a specified factor of safety whilst simultaneously checking the design against the allowable deflection limit. This allowed the team to compare suitable options with the material available in the shop and ultimately reuse aluminum flat plate from another project, reducing both cost and material waste.",
      images: [
        {
          src: "/images/projects/Educational/Shroud Baseplate/excel_tool.png",
          alt: "Parameter-driven Excel sizing tool for the shroud baseplate",
          caption:
            "Semi-automated sizing tool used to compare materials and determine the minimum acceptable baseplate thickness.",
        },
      ],
    },

    {
      title: "Finite Element Analysis",
      body:
        "After selecting the final geometry, I completed a mesh-convergence study to identify an element size that produced stable results whilst minimizing computational complexity. A static finite element analysis was then used to validate the analytical stress and deflection predictions. The geometric constraints and boundary conditions produced a localized stress concentration near the constrained mounting hole. Rather than relying exclusively on the peak contour value at this location, I used the probe tool within the surrounding area of concern to determine a representative maximum stress for comparison with the analytical solution.",
      metrics: [
        {
          label: "Analytical combined stress",
          value: "41.2 MPa",
        },
        {
          label: "Simulated combined stress",
          value: "42.6 MPa",
        },
        {
          label: "Analytical deflection",
          value: "3.0 mm",
        },
        {
          label: "Simulated deflection",
          value: "5.0 mm",
        },
        {
          label: "Factor of safety",
          value: "6.7",
        },
      ],
      images: [
        {
          src: "/images/projects/Educational/Shroud Baseplate/fea_mesh.png",
          alt: "Finite element mesh used for the shroud baseplate analysis",
          caption:
            "Finite element mesh selected following the element-size convergence study.",
        },
        {
          src: "/images/projects/Educational/Shroud Baseplate/fea_stress.png",
          alt: "Finite element stress result for the wind turbine shroud baseplate",
          caption:
            "Simulated combined-stress distribution under the governing load case.",
        },
        {
          src: "/images/projects/Educational/Shroud Baseplate/fea_displacement.png",
          alt: "Finite element displacement result for the wind turbine shroud baseplate",
          caption:
            "Simulated displacement of the baseplate under the governing load case.",
        },
      ],
    },

    {
      title: "Vibratory Analysis",
      body:
        "I also completed a modal analysis to verify that the structure would not resonate with the turbine's operating excitation. Under the worst-case loading configuration, the simulated first natural frequency was 75.7 Hz, remaining well above the blades' maximum operating frequency of 38.3 Hz. This separation provided confidence that the baseplate and shroud assembly would not experience resonant interaction during normal operation.",
      metrics: [
        {
          label: "First natural frequency",
          value: "75.7 Hz",
        },
        {
          label: "Maximum blade frequency",
          value: "38.3 Hz",
        },
      ],
      images: [
        {
          src: "/images/projects/Educational/Shroud Baseplate/fea_frequency.png",
          alt: "First vibration mode of the wind turbine shroud baseplate",
          caption:
            "First simulated vibration mode used to verify separation from the turbine's maximum operating frequency.",
        },
      ],
    },

    {
      title: "Manufacturing",
      body:
        "Following completion of the analytical and computational design, I produced manufacturing drawings for both the structural baseplate and custom attachment bracket. The components were then fabricated, assembled with the selected pipe-clamp hardware, and integrated into the turbine before physical testing.",
      images: [
        {
          src: "/images/projects/Educational/Shroud Baseplate/baseplate_drawing.JPG",
          alt: "Manufacturing drawing for the wind turbine shroud baseplate",
          caption: "Manufacturing drawing for the structural baseplate.",
        },
        {
          src: "/images/projects/Educational/Shroud Baseplate/bracket_drawing.JPG",
          alt: "Manufacturing drawing for the shroud baseplate attachment bracket",
          caption:
            "Manufacturing drawing for the custom tower-attachment bracket.",
        },
      ],
    },

    {
      title: "Physical Testing",
      body:
        "The completed assembly was installed on the turbine and evaluated under operating conditions. The baseplate successfully supported the shroud with minimal visible movement at the shroud throat, confirming that the structural attachment performed as intended. Although the shroud produced a marginal improvement in turbine power output, the gains were not sufficient to justify incorporating the concept into the final competition turbine.",
      video: {
        src: "/images/projects/Educational/Shroud Baseplate/testing_vid.MOV",
        caption:
          "Operational testing of the aerodynamic shroud and structural baseplate.",
      },
    },

    {
      title: "Design Results",
      body:
        "The final design satisfied the project's structural, stiffness, attachment, and vibration requirements whilst avoiding permanent modification to the turbine tower. The analytical and simulated stress results showed close agreement, and the modal analysis confirmed that the first natural frequency remained safely above the maximum blade frequency. Physical testing further demonstrated that the removable attachment provided sufficient rigidity during operation.",
      metrics: [
        {
          label: "Supported shroud weight",
          value: "Approximately 10 lb",
        },
        {
          label: "Analytical combined stress",
          value: "41.2 MPa",
        },
        {
          label: "Simulated combined stress",
          value: "42.6 MPa",
        },
        {
          label: "Analytical deflection",
          value: "3.0 mm",
        },
        {
          label: "Simulated deflection",
          value: "5.0 mm",
        },
        {
          label: "Factor of safety",
          value: "6.7",
        },
        {
          label: "First natural frequency",
          value: "75.7 Hz",
        },
        {
          label: "Maximum blade frequency",
          value: "38.3 Hz",
        },
      ],
    },

    {
      title: "Reflection",
      body:
        "Although the shroud concept was ultimately not incorporated into the final turbine because its aerodynamic gains were insufficient, the baseplate successfully met its structural and functional requirements. The project reinforced the importance of evaluating an engineering concept as a complete system, since a technically successful component does not necessarily make the broader concept worthwhile. It also gave me valuable experience contributing an independently designed subsystem to a large multidisciplinary engineering team working toward a shared competition goal. Cal Poly Wind Power went on to place first overall in the DOE Collegiate Wind Competition and second in Turbine Design.",
    },
  ],
},
      {
  title: "Stress/Strain Design Apparatus",
  slug: "stress-strain-design-apparatus",
  status: "Completed",

  context: "ME 328 · Cal Poly",
  date: "December 2025",
  team: "Team of Three",

  summary:
    "Worked on a three-person team to design and prototype a photoelastic stress/strain apparatus capable of demonstrating axial, bending, and torsional loading for future mechanics of materials laboratories.",

  overview:
    "This project focused on designing an educational apparatus capable of visualizing three fundamental loading conditions through photoelasticity. The system was designed to produce a distinct purple stress fringe when viewed through a polariscope, whilst remaining simple to manufacture, assemble, and use in future laboratory courses.",

  role:
    "Designed the four-point bending subsystem, completed the analytical calculations, developed an Excel design tool to iterate through geometric configurations, and validated the design using finite element analysis.",

  heroImage: {
  src: "/images/projects/Educational/Stress/Strain Apparatus/stressstrain_apparatus_bending.jpeg",
  alt: "Prototype stress and strain apparatus in the four-point bending configuration",
  caption:
    "Full-scale prototype demonstrating the four-point bending configuration.",
},

  sections: [
    {
      title: "Concept & Design",
      body:
        "The apparatus was developed as a teaching tool for future students studying mechanics of materials. Each team member designed one loading configuration, whilst my contribution focused on a four-point bending fixture capable of producing a pure bending moment within the photoelastic specimen.",
      images: [
        {
          src: "/images/projects/Educational/Stress/Strain Apparatus/stressstrain_apparatus_cad.png",
          alt: "CAD model of the complete stress and strain apparatus",
          caption:
            "Overall CAD model integrating the axial, bending, and torsional loading configurations.",
        },
      ],
    },
    {
      title: "Analytical Design",
      gallery: "handcalcs",
      body:
        "Hand calculations were used to determine the geometry and loading required to generate the target purple photoelastic fringe. Because the required stress was relatively low, the design achieved large safety factors whilst still producing the desired visual effect.",
      metrics: [
        {
          label: "Pure bending moment",
          value: "15.6 in-lbf",
        },
        {
          label: "Maximum analytical bending stress",
          value: "444.0 psi",
        },
      ],
      images: [
        {
          src: "/images/projects/Educational/Stress/Strain Apparatus/stressstrain_apparatus_handcalcs_1.jpg",
          alt: "First page of hand calculations for the four-point bending apparatus",
          caption: "Initial loading and mechanism calculations.",
        },
        {
          src: "/images/projects/Educational/Stress/Strain Apparatus/stressstrain_apparatus_handcalcs_2.jpg",
          alt: "Second page of hand calculations for the four-point bending apparatus",
          caption: "Specimen stress and bending calculations.",
        },
        {
          src: "/images/projects/Educational/Stress/Strain Apparatus/stressstrain_apparatus_handcalcs_3.jpg",
          alt: "Third page of hand calculations for the four-point bending apparatus",
          caption: "Component sizing and strength calculations.",
        },
        {
          src: "/images/projects/Educational/Stress/Strain Apparatus/stressstrain_apparatus_handcalcs_4.jpg",
          alt: "Fourth page of hand calculations for the four-point bending apparatus",
          caption: "Final design and safety-factor calculations.",
        },
      ],
    },
    {
      title: "Excel Design Tool",
      body:
        "To accelerate the design process, I created an Excel tool that evaluated different geometric configurations automatically. This allowed the mechanism to be refined efficiently before completing the detailed finite element analysis.",
      images: [
        {
          src: "/images/projects/Educational/Stress/Strain Apparatus/stressstrain_apparatus_excel_tool.png",
          alt: "Excel design tool used to evaluate geometric configurations",
          caption:
            "Excel calculator developed to iterate through geometric configurations.",
        },
      ],
    },
    {
      title: "Finite Element Validation",
      body:
        "A mesh-convergence study and finite element analysis were completed to validate the analytical calculations. The simulated bending stress closely matched the theoretical prediction, providing confidence in the final design.",
      metrics: [
        {
          label: "Analytical bending stress",
          value: "444.0 psi",
        },
        {
          label: "Simulated bending stress",
          value: "421.4 psi",
        },
      ],
      images: [
        {
          src: "/images/projects/Educational/Stress/Strain Apparatus/stressstrain_apparatus_fea.png",
          alt: "Finite element stress result for the four-point bending apparatus",
          caption:
            "Finite element results used to validate the analytical bending-stress prediction.",
        },
      ],
    },
    {
      title: "Prototype",
      body:
        "A full-scale prototype was 3D printed and assembled to demonstrate the three loading configurations during the final class presentation.",
    },
    {
      title: "Design Results",
      body:
        "The completed apparatus achieved the target photoelastic stress level whilst maintaining high structural safety factors. The close agreement between the analytical and simulated stresses supported the validity of the design approach.",
      metrics: [
        {
          label: "Target bending moment",
          value: "15.6 in-lbf",
        },
        {
          label: "Lead-screw torque",
          value: "0.86 in-lbf",
        },
        {
          label: "ABS safety factor",
          value: "11.3",
        },
        {
          label: "6061 aluminum safety factor",
          value: "90",
        },
      ],
    },
    {
      title: "Reflection",
      body:
        "This project strengthened both my structural design skills and my ability to collaborate within a multidisciplinary team. Coordinating three independently designed loading mechanisms required frequent communication to ensure the final apparatus functioned as a cohesive system. Developing the Excel design tool also reinforced the value of automating repetitive engineering calculations to accelerate design iterations.",
    },
  ],
},
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
        "Built the modal analysis, generated the finite element mesh with a convergence study, and evaluated the first vibration mode.",
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
