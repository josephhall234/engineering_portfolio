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
  gallery?: "handcalcs" | "featured";
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
      {
  title: "Casting Furnace",
  slug: "casting-furnace",
  status: "Completed",

  context: "Personal Project",
  date: "April-May 2026",

  summary:
    "A propane-fired metal casting furnace built from a salvaged helium canister, capable of exceeding 2100°F whilst operating from a standard propane tank.",

  overview:
    "Redesigned and fabricated a discarded helium canister into a compact propane-fired furnace for metal casting, recycling materials wherever possible and manufacturing custom components to safely sustain temperatures above 2100°F.",

  role:
    "Designed and fabricated the furnace, selected the refractory and insulating materials, manufactured custom components, characterized its operating temperature, and completed heat-transfer calculations to evaluate its thermal performance.",

  heroImage: {
    src: "/images/projects/Personal/Casting Furnace/hero_image.jpeg",
    alt: "Completed propane-fired casting furnace during operation",
    caption:
      "Completed propane-fired casting furnace during high-temperature operation.",
  },

  sections: [
    {
      title: "Project Overview",
      body:
        "The project began with a discarded helium canister that I wanted to repurpose into a compact furnace for small-scale metal casting. After safely relieving the remaining pressure, I modified the vessel to accommodate the refractory lining, ceramic insulation, burner inlet, and structural hardware. The furnace was designed around a standard propane supply whilst targeting temperatures sufficient for melting common casting alloys.",
      images: [
        {
          src: "/images/projects/Personal/Casting Furnace/initial_container.jpeg",
          alt: "Discarded helium canister before conversion into a casting furnace",
          caption:
            "Salvaged helium canister before its conversion into the furnace body.",
        },
      ],
    },

    {
      title: "Furnace Construction",
      gallery: "featured",
      body:
        "The furnace was constructed with a refractory-cement base and approximately two inches of high-temperature ceramic insulation surrounding the combustion chamber. A runoff opening was incorporated into the base to provide a controlled path for escaped molten metal in the event of a crucible failure. I also welded external handles and fabricated the burner interface and gate to direct the propane flame tangentially into the chamber, promoting circulation and more uniform heating. The exterior was finished with a high-temperature ceramic coating.",
      images: [
        {
          src: "/images/projects/Personal/Casting Furnace/in_progress_welding.jpeg",
          alt: "Casting furnace during welding and fabrication",
          caption:
            "Furnace body during fabrication and installation of the structural hardware.",
        },
        {
          src: "/images/projects/Personal/Casting Furnace/lathe_parts.jpeg",
          alt: "Custom-machined components for the casting furnace",
          caption:
            "Custom components manufactured for the furnace assembly and burner interface.",
        },
      ],
    },

    {
      title: "Thermal Analysis",
      gallery: "handcalcs",
      body:
        "During steady-state operation, I measured the exterior surface temperatures using an infrared thermometer and the specified emissivity of the ceramic coating. These measurements were used to estimate conductive, convective, and radiative heat losses through the furnace walls and evaluate its thermal performance. The analytical model intentionally excluded heat transfer through the lid and base, where a substantial portion of the actual heat loss occurs, and estimated burner output without a complete combustion analysis. The resulting calculated thermal efficiency should therefore be interpreted as an idealized upper estimate rather than the furnace's true overall efficiency.",
      metrics: [
        {
          label: "Peak measured temperature",
          value: "2136°F",
        },
        {
          label: "Maximum rated power",
          value: "29.3 kW",
        },
        {
          label: "Calculated thermal efficiency*",
          value: "98.4%",
        },
      ],
      images: [
        {
          src: "/images/projects/Personal/Casting Furnace/hand_calcs_1.jpg",
          alt: "First page of casting furnace heat-transfer calculations",
          caption:
            "Heat-transfer calculations used to estimate furnace thermal performance.",
        },
        {
          src: "/images/projects/Personal/Casting Furnace/hand_calcs_2.jpg",
          alt: "Second page of casting furnace heat-transfer calculations",
          caption:
            "Continuation of the analytical heat-loss and efficiency calculations.",
        },
      ],
    },

    {
      title: "Design Results",
      body:
        "The completed furnace successfully exceeded the original temperature target, reaching a measured maximum of 2136°F whilst operating at less than 2 psig from a standard propane supply. The refractory lining, ceramic insulation, and exterior structure remained functional throughout testing, demonstrating that the furnace could safely sustain the temperatures required for small-scale metal casting.",
      metrics: [
        {
          label: "Maximum measured temperature",
          value: "2136°F",
        },
        {
          label: "Maximum rated power",
          value: "29.3 kW",
        },
        {
          label: "Operating pressure",
          value: "<2 psig",
        },
        {
          label: "Ceramic insulation thickness",
          value: "~2 in",
        },
        {
          label: "Calculated thermal efficiency*",
          value: "98.4%",
        },
        {
          label: "Total Project Cost",
          value: "$295",
        },
      ],
    },

    {
      title: "Sand Casting Flask",
      gallery: "featured",
      body:
        "To complement the furnace, I designed a wooden flask consisting of a cope and drag for future sand casting. Because my father is an avid woodworker, I commissioned him to manufacture the flask from my design using scrap wood we already had available. The completed flask will be used with Petrobond sand and 3D-printed patterns to produce cast components with the furnace.",
      images: [
        {
          src: "/images/projects/Personal/Casting Furnace/flask_cad.png",
          alt: "CAD model of the wooden cope-and-drag flask for sand casting",
          caption:
            "CAD model of the cope-and-drag flask designed for sand casting.",
        },
        {
          src: "/images/projects/Personal/Casting Furnace/flask_photo.jpeg",
          alt: "Completed wooden cope-and-drag flask",
          caption:
            "Completed wooden flask manufactured from the design using scrap material.",
        },
      ],
    },

    {
      title: "Reflection & Next Steps",
      body:
        "This project gave me an opportunity to apply heat-transfer principles directly to a system I designed and fabricated myself, particularly when determining how to protect the furnace's structural components from the extreme temperatures inside the chamber. Building and testing the complete system also reinforced the importance of understanding the limitations of simplified analytical models when evaluating real thermal systems. With the furnace and casting flask complete, I am excited to begin producing my own cast components using 3D-printed patterns and Petrobond sand.",
    },
  ],
},
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
    "A structural baseplate designed to support an expiremental wind turbine shroud, taking into consideration strength, stiffness, and vibratory requirements.",

  overview:
    "Designed and manufactured a structural baseplate for a small-scale wind turbine to support an aerodynamic shroud weighing approximately 10 lbs whilst meeting stiffness, strength, and vibration requirements.",

  role:
    "Developed the baseplate and removable tower-attachment system, completed the analytical stress and deflection calculations, created a semi-automated sizing tool, produced manufacturing drawings, machined the components by hand, and validated the final design using static and vibratory finite element analysis.",

  heroImage: {
    src: "/images/projects/Educational/Shroud Baseplate/hero_image.jpeg",
    alt: "Wind turbine shroud supported by the completed structural baseplate",
    caption:
      "Completed aerodynamic shroud and structural baseplate installed for testing on the small-scale wind turbine.",
  },

  sections: [
    {
      title: "Project Overview",
      body:
        "The shroud was developed as an experimental aerodynamic concept intended to improve the performance of Cal Poly Wind Power's competition turbine by effectively \"catching\" the available air from the corners of the square cross section and converging them to the circular sweep of the blades. My responsibility was to design and manufacture the baseplate and attachment hardware whilst satisfying the project's strength, stiffness, and vibration considerations.",
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
      gallery: "featured",
      body:
        "One of the primary design challenges was developing a secure connection without permanently modifying the turbine tower. Because drilling and welding directly into the tower were prohibited, I developed a removable attachment consisting of a retrofitted pipe clamp and a custom-machined aluminum connector bracket. The assembly transferred the shroud loads into the tower whilst allowing the entire system to be installed and removed without altering the existing tower.",
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
      title: "Hand Calculations",
      gallery: "handcalcs",
      body:
        "I first completed hand calculations with an arbitrary material and thickness to estimate the combined stresses and maximum deflection produced by a worst-case-scenario loading event. These calculations established the relationships between the applied loading, material properties, baseplate geometry, required thickness, and factor of safety. Later iteration with the Excel tool allowed for the finalized values to be obtained.",
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
          caption: "Stress analysis and loading types.",
        },
        {
          src: "/images/projects/Educational/Shroud Baseplate/hand_calcs_2.jpg",
          alt: "Second page of wind turbine shroud baseplate hand calculations",
          caption: "Infinitesimal analysis at the points of concern.",
        },
        {
          src: "/images/projects/Educational/Shroud Baseplate/hand_calcs_3.jpg",
          alt: "Third page of wind turbine shroud baseplate hand calculations",
          caption: "Deflection and material considerations.",
        },
      ],
    },

    {
      title: "Semi-Automated Design Tool",
      body:
        "To accelerate material and geometry selection, I developed a parameter-driven Excel tool to evaluated specified materials and geometric configurations automatically. The tool determined the minimum plate thickness required to exceed a specified factor of safety whilst simultaneously checking the design against the allowable deflection limit. This allowed the team to compare suitable options with the scrap material available in the shop and ultimately reuse aluminum flat plate from another project, reducing both cost and material waste.",
      images: [
        {
          src: "/images/projects/Educational/Shroud Baseplate/excel_tool.png",
          alt: "Parameter-driven Excel sizing tool for the shroud baseplate",
          caption:
            "Semi-automated tool used to compare materials and determine the minimum acceptable baseplate thickness.",
        },
      ],
    },

    {
      title: "Finite Element Analysis",
      body:
        "After finalizing the design, I completed a mesh-convergence study to identify an element size that produced stable results whilst minimizing computational complexity. A static finite element analysis was used to validate the analytical calculations from the design tool for stress and deflection. In the simulation, geometric constraints and boundary conditions produced a localized stress concentration near the constrained mounting hole, so the probe tool was used within the area of concern to determine the proper maximum stress.",
      metrics: [
        {
          label: "Combined stress (analytical)",
          value: "41.2 MPa",
        },
        {
          label: "Combined stress (simulated)",
          value: "42.6 MPa",
        },
        {
          label: "Deflection (analytical)",
          value: "3.0 mm",
        },
        {
          label: "Deflection (simulated)",
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
            "Simulated combined-stress distribution and probe tool maximum value.",
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
        "I also simulated a modal analysis to verify that the structure would not resonate under the turbine's normal operating conditions. With a worst-case loading configuration, the simulated first natural frequency was 75.7 Hz, remaining well above the blades' maximum operating frequency of 38.3 Hz. This separation provided confidence that the baseplate and shroud assembly would not experience resonant interactions during normal operation.",
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
            "First simulated vibration mode under worst-case loading.",
        },
      ],
    },

    {
      title: "Manufacturing",
      body:
        "Following completion of the analytical and computational design, I produced manufacturing drawings for both the structural baseplate and custom attachment bracket. The components were then fabricated using the waterjet for the baseplate and manual mill for the connector bracket, before assembly with the selected hardware, and integration into the turbine before physical testing.",
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
        "The completed assembly was installed on the turbine and structurally evaluated downwind with a large ducted fan. The baseplate successfully supported the shroud with minimal visible movement at the shroud throat, confirming that the structural attachment performed as intended. As later testing in the wind tunnel confirmed, the gains in power output were not sufficient to justify incorporating the concept into the final competition turbine.",
      video: {
        title: "Shroud Baseplate Testing",
        src: "/images/projects/Educational/Shroud Baseplate/testing_vid.mp4",
        caption:
          "The shroud and baseplate assembly spinning down after initial structural testing.",
      },
    },

    {
      title: "Design Results",
      body:
        "The final design satisfied the project's structural, stiffness, attachment, and vibration requirements whilst avoiding permanent modification to the turbine tower. The analytical and simulated stress results showed close agreement, and the modal analysis confirmed that the first natural frequency remained safely above the maximum blade frequency. Physical testing further demonstrated that the removable attachment provided sufficient rigidity during operation.",
      metrics: [
  {
    label: "Supported shroud weight",
    value: "~10 lb",
  },
  {
    label: "Factor of safety",
    value: "6.7",
  },
  {
    label: "Combined stress (analytical)",
    value: "41.2 MPa",
  },
  {
    label: "Combined stress (simulated)",
    value: "42.6 MPa",
  },
  {
    label: "Deflection (analytical)",
    value: "3.0 mm",
  },
  {
    label: "Deflection (simulated)",
    value: "5.0 mm",
  },
  {
    label: "Maximum blade frequency",
    value: "38.3 Hz",
  },
  {
    label: "First natural frequency",
    value: "75.7 Hz",
  },
],
    },

    {
      title: "Reflection",
      body:
        "Although the shroud concept wasn't ultimately incorporated into the final turbine because its aerodynamic properties, the baseplate successfully met its structural and functional requirements. The project reinforced the importance of evaluating an engineering concept as a complete system, since partial success does not necessarily make the broader concept worthwhile. It also gave me valuable experience contributing an independently designed subsystem to a large multidisciplinary engineering team working toward a shared competition goal. Cal Poly Wind Power went on to place 1st overall in the DOE Collegiate Wind Competition and 2nd in Turbine Design.",
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
  getProject("educational", "wind-turbine-shroud-baseplate"),
  getProject("personal", "casting-furnace"),
  getProject("professional", "metal-lok-ultra-lite"),
].filter((project): project is Project => Boolean(project));

export function getCategory(categorySlug: string) {
  return projectCategories.find((category) => category.slug === categorySlug);
}

export function getProject(categorySlug: string, projectSlug: string) {
  return getCategory(categorySlug)?.projects.find((project) => project.slug === projectSlug);
}
