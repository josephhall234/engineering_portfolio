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
      {
  title: "Metal Lok Ultra Lite",
  slug: "metal-lok-ultra-lite",
  status: "In Progress",

  context: "BIW Connector Systems",
  date: "Summer 2026",
  team: "Product Design Engineering Team",

  summary:
    "A 700kW electrical connector system designed to withstand 10,000 psi and 350°F service conditions whilst reducing material and manufacturing costs.",

  overview:
    "During my 10-week engineering internship at BIW, I worked on the cost-driven redesign of an existing electrical connector system intended for 10,000 psi, 350°F service in a Class I Division I Hazardous Environment. The project combined cost modeling, component redesign, technical documentation, and qualification-test planning.",

  role:
    "Validated and developed a 45-component cost model, identified opportunities for redesign given the new environmental conditions, redesigned elastomeric sealing glands and surrounding components, presented findings to upper management, and developed formal design and qualification documents including a Design Specification, Qualification Test Plan, and DFMEA.",

  heroImage: {
    src: "/images/projects/Professional/Metal Lok Ultra Lite/hero_cad_render.png",
    alt: "CAD rendering of the Metal Lok Ultra Lite electrical connector assembly",
    caption:
      "CAD rendering of the redesigned Metal Lok Ultra Lite connector assembly in a SAGD well head.",
  },

  sections: [
    {
      title: "Project Overview",
      body:
        "The Metal Lok Ultra Lite project focused on reducing the manufacturing and assembly costs of an existing electrical connector system whilst adapting it to a new set of environmental requirements. Rather than beginning directly with component redesign, I first evaluated whether the concept represented a worthwhile engineering investment by developing a detailed cost model for the existing assembly.",
      metrics: [
        {
          label: "Rated pressure",
          value: "10,000 psi",
        },
        {
          label: "Rated temperature",
          value: "350°F",
        },
      ],
    },

    {
      title: "Cost & Design Analysis",
      body:
        "I began by validating and expanding a 45-component cost model for the existing connector assembly. The model established a baseline manufacturing and assembly cost, identified high-impact redesign opportunities, and estimated the savings achievable through the Ultra Lite concept. The completed analysis projected an overall cost reduction of approximately 39%, supporting continued investment in the redesign.",
      metrics: [
        {
          label: "Components evaluated",
          value: "45",
        },
        {
          label: "Routings evaluated",
          value: "28",
        },
        {
          label: "Projected cost reduction",
          value: "39.1%",
        },
      ],
      images: [
        {
          src: "/images/projects/Professional/Metal Lok Ultra Lite/cost_model_blurred.jpg",
          alt: "Blurred Excel cost model used to evaluate the Metal Lok Ultra Lite connector redesign",
          caption:
            "45-component cost model used to evaluate redesign opportunities and estimate overall cost reduction. Image is intentionally blurred to maintain confidentiality.",
        },
      ],
    },

    {
      title: "Materials & Sealing Glands",
      body:
        "The revised operating requirements reduced the maximum service temperature from 500°F to 350°F, creating opportunities to replace costly materials whilst maintaining the required environmental performance. I evaluated alternative sealing materials against the applicable requirements and identified more cost-effective options that remained compliant with the NORSOK M-710 approved-material classifications. At the same time, the maximum service pressure increased from 3,000 psi to 10,000 psi, which called for a redesign of the sealing elements and incorporation of backup rings.",
      metrics: [
        {
          label: "Previous service temperature",
          value: "500°F",
        },
        {
          label: "New maximum temperature",
          value: "350°F",
        },
        {
          label: "Previous service pressure",
          value: "3,000 psi",
        },
        {
          label: "New service pressure",
          value: "10,000 psi",
        },
      ],
    },

    {
      title: "High-Pressure Seal Redesign",
      gallery: "featured",
      body:
        "Given the increased pressure requirement, the risk of failure by extrusion for the existing O-rings was elevated significantly, which called for a redesign of the sealing glands to accomodate backup rings. With the new elastomer, operating temperature, pressure, and gland geometry, I ran through some calculations modelling a variety of geometric configurations, ultimately choosing a geometry that allowed for proper cross-sectional compression and reduced circumfrential compression. These calculations established the required gland dimensions before the surrounding components were updated in Creo Parametric.",
      images: [
        {
          src: "/images/projects/Professional/Metal Lok Ultra Lite/oring_calcs_before.png",
          alt: "O-ring gland calculations for the original connector sealing configuration",
          caption:
            "Original sealing configuration evaluated before the high-pressure redesign.",
        },
        {
          src: "/images/projects/Professional/Metal Lok Ultra Lite/oring_calcs_after.png",
          alt: "O-ring gland calculations for the redesigned high-pressure sealing configuration",
          caption:
            "Revised gland calculations incorporating the updated pressure, material, and backup-ring requirements.",
        },
      ],
    },

    {
      title: "Gland Geometry Development",
      gallery: "featured",
      body:
        "The calculated gland requirements were translated into updated component geometry in Creo. By altering a minimal amount of components, the new sealing requirements could be incorporated whilst preserving existing manufacturing routings, toolings, and operatios wherever possible, further supporting the project's cost-reduction goals.",
      images: [
        {
          src: "/images/projects/Professional/Metal Lok Ultra Lite/oring_cad_before.png",
          alt: "CAD cross section of the original O-ring gland geometry",
          caption:
            "Original sealing-gland geometry before the high-pressure redesign.",
        },
        {
          src: "/images/projects/Professional/Metal Lok Ultra Lite/oring_cad_after.png",
          alt: "CAD cross section of the redesigned O-ring gland and backup-ring geometry",
          caption:
            "Revised sealing geometry developed from the updated gland calculations.",
        },
      ],
    },

    {
      title: "Component Redesign",
      body:
        "The revised sealing requirements drove dimensional changes to two components within the connector assembly. I took out new part numbers for those components, updated the dimensions to match my calculations, and documented the process through engineering drawings, cost projections, and powerpoints. After incorporating the redesigned components into the overall assembly, I coordinated with the purchasing and manufacturing departments to get the components made!",
      images: [
        {
          src: "/images/projects/Professional/Metal Lok Ultra Lite/lower_connector_cad.png",
          alt: "CAD model of a redesigned lower connector component",
          caption:
            "Updated connector geometry incorporating the revised high-pressure sealing requirements.",
        },
      ],
    },

    {
      title: "Qualification Planning",
      body:
        "Following detailed design, I documented the system requirements in a formal Design Specification and progressed the project through the company's design-review process. I then developed the Qualification Test Plan and DFMEA used to define how the redesigned connector would be evaluated against its mechanical, electrical, pressure, temperature, and sealing requirements. The planned qualification program combined extended-duration pressure and temperature cycling with electrical, mechanical, and post-test inspection requirements.",
      metrics: [
        {
          label: "Design documentation",
          value: "Design Specification",
        },
        {
          label: "Risk analysis",
          value: "DFMEA",
        },
        {
          label: "Test documentation",
          value: "Qualification Test Plan",
        },
      ],
    },

    {
      title: "Qualification Testing",
      body:
        "Qualification began with baseline electrical and mechanical verification, including dielectric, insulation-resistance, continuity, and axial contact testing. Test specimens were then assembled into a DUT string and prepared for environmental exposure within a pressure vessel. The qualification sequence subjected the connector system to repeated pressure and temperature cycling in a corrosive environment over an extended test duration before requiring repeat electrical testing and detailed inspection for structural, mechanical, or sealing failures.",
      images: [
        {
          src: "/images/projects/Professional/Metal Lok Ultra Lite/test_setup.png",
          alt: "Qualification test setup for the Metal Lok Ultra Lite connector system",
          caption:
            "DUT string being loaded into the 19,000 psi pressure vessel.",
        },
      ],
    },

    {
      title: "Technical Documentation & Handoff",
      body:
        "Because the company's formal design and qualification process extended beyond my 10-week internship, the project had not reached final qualification before my departure. I documented all the design decisions, calculations, test requirements, and remaining work in detail so that another engineer could continue the project without losing design context. This included the Design Specification, Qualification Test Plan, DFMEA, supporting calculations, and all relevant documentation developed throughout my internship.",
    },

    {
      title: "Design Results",
      body:
        "The redesign established a technically viable path toward substantially reducing connector cost whilst meeting a new set of environmental requirements. The completed cost model projected approximately 39% savings, whilst the detailed design incorporated material substitutions, new elastomeric sealing glands, and corresponding component changes. The project progressed through detailed design and formal qualification planning before being transferred for continued testing after the conclusion of my internship.",
      metrics: [
        {
          label: "Projected cost reduction",
          value: "~39%",
        },
        {
          label: "Components evaluated",
          value: "45",
        },
        {
          label: "Rated pressure",
          value: "10,000 psi",
        },
        {
          label: "Rated temperature",
          value: "350°F",
        },
      ],
    },

    {
      title: "Reflection",
      body:
        "This project gave me experience carrying an engineering redesign beyond the component level and considering its technical, economic, and organizational consequences simultaneously. I worked with a variety of teams from different departments, coordinated with outside suppliers for pricing and lead times, and learned how detailed design, formal review, qualification testing, and technical documentation fit together within a commercial product-development process. Most importantly, the project reinforced that a successful redesign must not only satisfy its engineering requirements, but also provide a compelling business case and be documented well enough to continue beyond any one engineer's involvement.",
    },
  ],
},
      {
  title: "O-Ring Installation Tool",
  slug: "o-ring-installation-tool",
  status: "Completed",

  context: "BIW Connector Systems",
  date: "Summer 2026",
  team: "Product Design Engineering",

  summary:
    "A reverse-engineered O-ring installation tool redesigned for compatibility with a broader range of internal O-ring glands, enabling faster and less intrusive installation.",

  overview:
    "Reverse-engineered and redesigned a discontinued O-ring installation tool to improve its manufacturability, serviceability, and compatibility with a wider range of internal O-ring glands.",

  role:
    "Analyzed the existing tool, developed the replacement assembly in Creo Parametric, designed seven custom components, incorporated feedback from a formal engineering design review, coordinated prototype printing, and documented the project for continuation after my internship.",

  heroImage: {
    src: "/images/projects/Professional/O-ring Installation Tool/hero_image.png",
    alt: "O-ring installation tool assembly",
    caption:
      "Reverse-engineered O-ring installation tool redesigned for greater compatibility, manufacturability, and serviceability.",
  },

  sections: [
    {
      title: "Project Overview",
      body:
        "This project began near the end of my internship while several of my other designs were awaiting approval from the purchasing and manufacturing teams. The existing O-ring installation tool had been discontinued by its original supplier, creating the need for a reverse-engineered replacement. I evaluated how the original mechanism operated, identified limitations in its assembly and interchangeability, and developed a revised design for use with a wider range of internal O-ring glands.",
      images: [
        {
          src: "/images/projects/Professional/O-ring Installation Tool/tool_assembly_real.jpeg",
          alt: "Original O-ring installation tool before disassembly",
          caption:
            "The original discontinued O-ring installation tool used as the basis for the reverse-engineered design.",
        },
      ],
    },

    {
      title: "Reverse Engineering",
      gallery: "featured",
      body:
        "I disassembled the existing tool to understand the function of each component and determine which features should be retained or improved. Particular attention was given to the spring-loaded mechanism, threaded connections, and methods used to retain the internal components. This analysis established the functional requirements and key dimensions for the replacement design.",
      images: [
        {
          src: "/images/projects/Professional/O-ring Installation Tool/tool_deconstructed_real.jpeg",
          alt: "Original O-ring installation tool separated into its individual components",
          caption:
            "The original tool was disassembled to evaluate its components, connections, and operating mechanism.",
        },
        {
          src: "/images/projects/Professional/O-ring Installation Tool/tool_spring_real.jpeg",
          alt: "Spring-loaded mechanism from the original O-ring installation tool",
          caption:
            "Detail of the original spring-loaded mechanism examined during reverse engineering.",
        },
      ],
    },

    {
      title: "Initial CAD Design",
      body:
        "I modeled the initial design in Creo Parametric as an 11-component assembly. Four components, including the spring and set screws, were selected from outside suppliers, while the remaining seven components were designed from scratch. The models incorporated fully defined threads, knurling, and the internal geometry required to guide the O-ring during installation.",
      metrics: [
        {
          label: "Total components",
          value: "11",
        },
        {
          label: "Custom-designed components",
          value: "7",
        },
        {
          label: "Sourced components",
          value: "4",
        },
      ],
      images: [
        {
          src: "/images/projects/Professional/O-ring Installation Tool/cad_assembly.png",
          alt: "Creo CAD model of the redesigned O-ring installation tool",
          caption:
            "Complete CAD assembly of the initial reverse-engineered design.",
        },
        {
          src: "/images/projects/Professional/O-ring Installation Tool/cross_section_cad.png",
          alt: "Cross-sectional CAD view of the O-ring installation tool",
          caption:
            "Cross-sectional view showing the internal components and operating mechanism.",
        },
      ],
    },

    {
      title: "Manufacturability and Serviceability",
      body:
        "The original brass insert and threaded connector were locked together by drilling and tapping directly across their material interface. This made the assembly difficult to disassemble and prevented the inserts from being readily interchanged. In the revised design, I milled a flat into the threaded insert and located the retaining set screw from the side. The set screw remained below the minor diameter of the mating thread, preventing interference during assembly. I also standardized the primary connections to 7/8-16 UNF threads in place of the original custom thread and replaced a permanent pinned connection with another removable set-screw connection.",
    },

    {
      title: "Design Review and Revision",
      gallery: "featured",
      body:
        "After completing the initial design, I led a review with the product design engineering team to present the assembly, proposed manufacturing approach, and anticipated timeline. The primary discussion centered on whether friction from the set screws would provide sufficient retention. Based on the team's feedback, I revised the connection to use a cone-point set screw engaging a circumferential groove in the mating insert. This created a positive mechanical lock while preserving the interchangeability and ease of disassembly provided by the original revision.",
      images: [
        {
          src: "/images/projects/Professional/O-ring Installation Tool/design_review_slide.png",
          alt: "Engineering design review slide for the O-ring installation tool",
          caption:
            "Design-review material used to present the initial design, manufacturing plan, and project timeline.",
        },
        {
          src: "/images/projects/Professional/O-ring Installation Tool/set_screw_revision.png",
          alt: "Revised cone-point set-screw retention mechanism",
          caption:
            "Revised connection using a cone-point set screw and machined groove to provide positive mechanical retention.",
        },
      ],
    },

    {
      title: "Prototype and Project Handoff",
      gallery: "featured",
      body:
        "After incorporating the design-review feedback, I released the custom components for 3D printing to evaluate their fit and assembly. Because my internship ended shortly afterward, I prepared a detailed handoff report documenting the design decisions, calculations, supplier part numbers, manufacturing requirements, and remaining work. This allowed the next engineer to continue the project without repeating the reverse-engineering and development work.",
      images: [
        {
          src: "/images/projects/Professional/O-ring Installation Tool/3d_printed_components.jpeg",
          alt: "Individual 3D-printed O-ring installation tool components",
          caption:
            "Custom components produced by 3D printing for the initial physical prototype.",
        },
        {
          src: "/images/projects/Professional/O-ring Installation Tool/3d_printed_assembly.jpeg",
          alt: "Assembled 3D-printed prototype of the O-ring installation tool",
          caption:
            "Assembled prototype used to evaluate component fit and the overall design.",
        },
      ],
    },

    {
      title: "Design Outcome",
      body:
        "The project produced a fully modeled and physically prototyped replacement for the discontinued installation tool. The revised design replaced difficult-to-service connections, standardized the primary threads, and introduced interchangeable components intended to support a wider range of internal O-ring glands. Although my internship ended before the design could be manufactured and tested in its final material, the completed prototype and engineering handoff established a clear path for the next phase of development.",
      metrics: [
        {
          label: "Total components",
          value: "11",
        },
        {
          label: "Custom-designed components",
          value: "7",
        },
        {
          label: "Standard thread",
          value: "7/8-16 UNF",
        },
      ],
    },

    {
      title: "Reflection",
      body:
        "I particularly enjoyed this project because it allowed me to apply reverse-engineering skills to a practical manufacturing problem. It also significantly improved my proficiency in Creo Parametric, especially when modeling functional threads, knurling, and unusual internal geometries. Leading the design review and preparing the final handoff documentation reinforced the importance of communicating design intent clearly, particularly when a project must be continued by another engineer.",
    },
  ],
},
      {
  title: "Injection Mold Plates",
  slug: "injection-mold-plates",
  status: "Completed",

  context: "Sematool Precision Manufacturing",
  date: "June–August 2025",
  team: "Engineering Team",

  summary:
    "Prototype overmold plates designed for a low-pressure injection-molding system to enclose and protect sensitive electronic components.",

  overview:
    "Designed and refined a pair of prototype injection mold plates through multiple rounds of customer feedback, then simplified the final geometry to reduce estimated machining time by 24% while maintaining the original delivery schedule.",

  role:
    "Established the project requirements with the customer, developed four design iterations, selected workholding and datum strategies, produced engineering drawings, coordinated CNC cost estimation, and revised the plates for more efficient manufacturing.",

  heroImage: {
    src: "/images/projects/Professional/Injection Mold Plates/hero_image.png",
    alt: "CAD model of the injection mold plate assembly",
    caption:
      "Prototype mold plates designed for low-pressure overmolding of sensitive electronic components.",
  },

  sections: [
    {
      title: "Project Overview",
      body:
        "This two-month project involved designing a pair of prototype mold plates for a low-pressure injection-molding system used to overmold and protect sensitive electronic components. During the initial customer meeting, we established the project scope, budget, technical requirements, and delivery schedule. The customer then supplied a CAD model of the assembly to be encapsulated along with the molding material, machine dimensions, and available clamping force.",
    },

    {
      title: "Initial Mold Design",
      body:
        "Using the supplied assembly model and machine specifications, I developed the initial mold geometry around the required overmold profile. The design accounted for component positioning, mold alignment, material flow, part removal, and compatibility with the customer's molding equipment. I also established the workholding and datum strategy required to machine and inspect both plates consistently.",
      metrics: [
        {
          label: "Single-shot overmold mass",
          value: "35 g",
        },
        {
          label: "Available clamping force",
          value: "10 tons",
        },
      ],
      images: [
        {
          src: "/images/projects/Professional/Injection Mold Plates/bottom_cad.png",
          alt: "CAD model of the bottom injection mold plate",
          caption:
            "CAD model of the bottom mold plate developed around the required overmold geometry.",
        },
      ],
    },

    {
      title: "Customer-Driven Iteration",
      gallery: "featured",
      body:
        "I presented the initial design to the customer and reviewed the proposed geometry, workholding approach, and datum selections. The customer requested several changes that expanded upon the original scope, requiring additional design development while preserving the established budget and delivery schedule. After two further detailed-design iterations and continued communication, the customer approved the mold configuration for manufacturing review.",
      images: [
        {
          src: "/images/projects/Professional/Injection Mold Plates/engineering_drawing_top_blurred.jpg",
          alt: "Engineering drawing for the top injection mold plate with confidential details obscured",
          caption:
            "Engineering drawing for the top mold plate, with confidential dimensions and details obscured.",
        },
        {
          src: "/images/projects/Professional/Injection Mold Plates/engineering_drawing_bottom_blurred.jpg",
          alt: "Engineering drawing for the bottom injection mold plate with confidential details obscured",
          caption:
            "Engineering drawing for the bottom mold plate, with confidential dimensions and details obscured.",
        },
      ],
    },

    {
      title: "Design for Manufacturing",
      body:
        "After customer approval, I submitted the plates to the CNC programmer for cost and machining-time estimates. The initial manufacturing review indicated that the geometry would require excessive machining time. I revisited the models and removed unnecessary fillets, chamfers, and other features that added toolpaths without improving the mold's function. These changes reduced the estimated machining time by 24% while preserving the required overmold geometry and interfaces.",
      metrics: [
        {
          label: "Machining-time reduction",
          value: "24%",
        },
        {
          label: "Detailed design iterations",
          value: "4",
        },
      ],
    },

    {
      title: "Manufacturing and Delivery",
      gallery: "featured",
      body:
        "The customer approved the manufacturing revisions, after which the final plates were released for machining. Both components were manufactured and delivered within the deadline established in the original project scope.",
      images: [
        {
          src: "/images/projects/Professional/Injection Mold Plates/real_photo_top.jpg",
          alt: "Completed top injection mold plate after manufacturing",
          caption:
            "Completed top mold plate following CNC machining and inspection.",
        },
        {
          src: "/images/projects/Professional/Injection Mold Plates/real_photo_bottom.jpg",
          alt: "Completed bottom injection mold plate after manufacturing",
          caption:
            "Completed bottom mold plate delivered for prototype overmolding.",
        },
      ],
    },

    {
      title: "Design Results",
      body:
        "The final design satisfied the customer's equipment, overmold, and delivery requirements while incorporating feedback from both the customer and manufacturing team. Simplifying the fourth iteration produced a more economical design and reduced the estimated machining time by 24% without compromising the required functionality.",
      metrics: [
        {
          label: "Single-shot overmold mass",
          value: "35 g",
        },
        {
          label: "Available clamping force",
          value: "10 tons",
        },
        {
          label: "Machining-time reduction",
          value: "24%",
        },
        {
          label: "Detailed design iterations",
          value: "4",
        },
      ],
    },

    {
      title: "Reflection",
      body:
        "This project reinforced the importance of maintaining regular communication with both the customer and manufacturing team throughout the design process. Frequent customer reviews helped ensure that the evolving design continued to meet the application requirements, while early manufacturing feedback revealed opportunities to simplify the geometry substantially. The experience strengthened my understanding that an effective design must be functional, manufacturable, and responsive to the customer's needs.",
    },
  ],
},
      {
  title: "Custom Semiconductor Vise",
  slug: "custom-semiconductor-vise",
  status: "Completed",

  context: "Sematool Precision Manufacturing",
  date: "June 2025",
  team: "Engineering Team",

  summary:
    "A custom 316 stainless-steel vise designed in two configurations to secure prototype semiconductor chips of different sizes during testing.",

  overview:
    "Designed and delivered a custom semiconductor-testing vise in two size-specific configurations, progressing from customer requirements through engineering approval, CNC programming, and manufacturing.",

  role:
    "Gathered the customer's dimensional, material, and physical requirements; developed and refined both vise configurations; produced manufacturing drawings; and coordinated design approval before CNC programming and production.",

  heroImage: {
    src: "/images/projects/Professional/Custom Semiconductor Vise/hero_image.jpg",
    alt: "CAD model of the custom semiconductor vise",
    caption:
      "Custom 316 stainless-steel vise designed to secure prototype semiconductor chips during testing.",
  },

  sections: [
    {
      title: "Project Overview",
      body:
        "This project involved designing a custom vise to securely locate prototype semiconductor chips during testing. The customer required two configurations to accommodate different chip sizes, with both versions manufactured from 316 stainless steel. During the initial meeting, I worked with the customer to establish the critical dimensions, material requirements, operating constraints, and delivery schedule.",
    },

    {
      title: "Two-Configuration Design",
      gallery: "featured",
      body:
        "Based on the customer's requirements, I developed two size-specific vise configurations using a shared design approach. Each version was tailored to the dimensions of its corresponding semiconductor chip while maintaining the positioning and retention features required for testing. The design was refined across two iterations based on internal and customer feedback.",
      metrics: [
        {
          label: "Material",
          value: "316 stainless steel",
        },
        {
          label: "Size-specific configurations",
          value: "2",
        },
        {
          label: "Design iterations",
          value: "2",
        },
      ],
      images: [
        {
          src: "/images/projects/Professional/Custom Semiconductor Vise/config_1_cad.png",
          alt: "CAD model of the first semiconductor vise configuration",
          caption:
            "First vise configuration developed for the smaller chip geometry.",
        },
        {
          src: "/images/projects/Professional/Custom Semiconductor Vise/config_2_cad.png",
          alt: "CAD model of the second semiconductor vise configuration",
          caption:
            "Second vise configuration developed for the alternate chip size.",
        },
      ],
    },

    {
      title: "Engineering Review and Documentation",
      gallery: "featured",
      body:
        "After completing the revisions, I presented both configurations for review by the engineering manager and customer. Once the designs were approved, I finalized the engineering drawings and released the components to the CNC programmer for toolpath development.",
      images: [
        {
          src: "/images/projects/Professional/Custom Semiconductor Vise/config_1_engineering_drawing_blurred.jpg",
          alt: "Engineering drawing for the first semiconductor vise configuration with confidential details obscured",
          caption:
            "Manufacturing drawing for the first configuration, with confidential dimensions and details obscured.",
        },
        {
          src: "/images/projects/Professional/Custom Semiconductor Vise/config_2_engineering_drawing_blurred.jpg",
          alt: "Engineering drawing for the second semiconductor vise configuration with confidential details obscured",
          caption:
            "Manufacturing drawing for the second configuration, with confidential dimensions and details obscured.",
        },
      ],
    },

    {
      title: "Manufacturing and Delivery",
      body:
        "Following approval, both vise configurations were released for CNC programming and manufacturing. The completed components were delivered within the specified timeframe, and no post-delivery design issues or revision requests were reported by the customer.",
    },

    {
      title: "Design Results",
      body:
        "The completed design provided the customer with two dedicated workholding configurations for testing different semiconductor chip sizes. Both versions satisfied the specified material, dimensional, and physical requirements and progressed through approval, CNC programming, manufacturing, and delivery without delaying the project schedule.",
      metrics: [
        {
          label: "Material",
          value: "316 stainless steel",
        },
        {
          label: "Configurations delivered",
          value: "2",
        },
        {
          label: "Reported post-delivery issues",
          value: "0",
        },
      ],
    },

    {
      title: "Reflection",
      body:
        "As my first professional design project, this vise gave me practical exposure to the complete engineering workflow in a professional manufacturing environment. Although the design was relatively straightforward, it taught me how to translate customer needs into manufacturable components, obtain formal design approval, and work within the controlled documentation and review practices of an ISO 9001 quality-management system.",
    },
  ],
},
      {
  title: "Pepsi Canning Gear",
  slug: "pepsi-canning-gear",
  status: "Completed",

  context: "Gonsels Machine Shop",
  date: "July 2024",
  team: "Manufacturing Team",

  summary:
    "Reverse-engineered and manufactured an approximately 20-inch-diameter gear to resolve recurring capping issues on a high-production Pepsi canning line.",

  overview:
    "Collaborated with another technician to inspect and reconstruct a critical canning-line gear, then operated the CNC mill during production of its replacement.",

  role:
    "Helped measure the original gear using a coordinate measuring machine, reconstructed its arcs and splines in Mastercam, and served as the CNC machine operator while the replacement was manufactured.",

  heroImage: {
    src: "/images/projects/Professional/Pepsi Canning Gear/hero_image.jpg",
    alt: "Large replacement gear manufactured for a Pepsi canning line",
    caption:
      "Approximately 20-inch-diameter replacement gear reverse-engineered and manufactured for a high-production Pepsi canning line.",
  },

  sections: [
    {
      title: "Project Overview",
      body:
        "This project involved reverse engineering an approximately 20-inch-diameter gear used in a Pepsi canning facility. The original component was contributing to recurring capping issues on a line processing approximately 9,000 cans per hour. Because the facility reportedly lost approximately $10,000 for every hour the machine remained unavailable, the gear needed to be measured accurately and returned as quickly as possible.",
    },

    {
      title: "CMM Inspection and CAD Reconstruction",
      body:
        "Working alongside another technician, I used a coordinate measuring machine to collect micrometer-scale measurements from the original gear. We worked under a strict time constraint because the facility needed the component returned to resume production. Using the collected measurements, I reconstructed the gear in Mastercam from its measured arcs, splines, and critical interface geometry.",
      images: [
        {
          src: "/images/projects/Professional/Pepsi Canning Gear/simple_drawing_schematic.jpg",
          alt: "Simplified dimensional schematic of the Pepsi canning gear",
          caption:
            "Simplified schematic documenting the primary geometry of the reverse-engineered gear.",
        },
      ],
    },

    {
      title: "Manufacturing",
      body:
        "Once the reconstructed model was complete, the original gear was returned to the customer and the digital model was transferred to the shop manager for CNC programming. I then served as the machine operator during manufacturing, closely monitoring the mill and cutting operations for potential issues.",
    },

    {
      title: "Installation and Results",
      body:
        "The completed replacement gear was delivered and installed successfully. After installation, the customer stated: \"Right on the money, little setup and haven't got a missing cap in the last 10,000+ bottles\".",
      video: {
        title: "Replacement Gear in Operation",
        src: "/images/projects/Professional/Pepsi Canning Gear/gear_in_action.mp4",
        caption:
          "The replacement gear operating after installation in the Pepsi canning line.",
      },
    },

    {
      title: "Project Results",
      body:
        "The completed gear restored the required operation of the high-production canning line and performed successfully after installation. Accurate CMM inspection and CAD reconstruction allowed the original component to be returned promptly while the replacement was prepared for manufacturing.",
      metrics: [
        {
          label: "Approximate gear diameter",
          value: "20 in",
        },
        {
          label: "Production rate",
          value: "9,000 cans/hour",
        },
        {
          label: "Reported downtime cost",
          value: "~$10,000/hour",
        },
        {
          label: "Units without a missing cap",
          value: "10,000+",
        },
      ],
    },

    {
      title: "Reflection",
      body:
        "This project strengthened my ability to work efficiently and accurately under significant time pressure. It also improved my proficiency with coordinate measuring machines and demonstrated the importance of carefully verifying reverse-engineered geometry when a customer's production schedule depends upon the replacement component.",
    },
  ],
},
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
    "Designed and fabricated the furnace, selected the refractory and insulating materials, manufactured custom components, tested it's capabilities under careful monitoring, and completed heat-transfer calculations to evaluate its thermal performance.",

  heroImage: {
    src: "/images/projects/Personal/Casting Furnace/hero_image.jpeg",
    alt: "Completed propane-fired casting furnace during operation",
    caption:
      "Completed furnace during the initial fire-up to temper the crucible.",
  },

  sections: [
    {
      title: "Project Overview",
      body:
        "The project began with a discarded helium canister that I found on the street and wanted to repurpose into a furnace for small-scale metal casting. After safely relieving the remaining pressure, I modified the vessel to accommodate the refractory lining, ceramic insulation, burner inlet, and structural hardware. The furnace was designed around a standard propane supply whilst targeting temperatures sufficient for melting common aluminum and copper alloys.",
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
        "The furnace was constructed with a refractory-cement base and approximately two inches of high-temperature ceramic insulation surrounding the combustion chamber. A runoff opening was incorporated into the base to provide a controlled path for molten metal in the event of a crucible failure. I also welded external handles and fabricated the burner interface and gate to direct the propane flame tangentially into the chamber, promoting circulation and more uniform heating. The exterior was finished with a high-temperature ceramic coating.",
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
            "Custom components manchined on the lathe for the furnace assembly and burner interface.",
        },
      ],
    },

    {
      title: "Thermal Analysis",
      gallery: "handcalcs",
      body:
        "During steady-state operation, I took many readings of the exterior surface temperatures using an infrared thermometer and the specified emissivity of the ceramic coating. These measurements were used to estimate conductive, convective, and radiative heat losses through the furnace walls and evaluate its thermal performance. The analytical model intentionally excluded heat transfer through the lid and base, where a substantial portion of the actual heat loss occurs, and estimated burner output without a complete combustion analysis. Consequently, the calculated thermal efficiency should be interpreted as an idealized upper limit rather than the furnace's true overall efficiency.",
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
        "To complement the furnace, I designed a wooden flask consisting of a cope and drag for future sand casting. Since my father is an avid woodworker, I commissioned him to make the flask from my design using scrap wood he already had available. The completed flask will be used with Petrobond sand and 3D-printed patterns to produce detailed metal castings.",
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
            "Completed wooden flask made from the design using scrap material.",
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
      {
  title: "Compressed Air Engine",
  slug: "compressed-air-engine",
  status: "Completed",

  context: "Personal Project",
  date: "June 2024-August 2025",

  summary:
    "A compressed-air engine designed and manufactured with custom components, then retrofitted with belts and pulleys to power a pencil sharpener.",

  overview:
    "Designed and manufactured a compressed-air engine containing 12 custom parts designed and machined from scratch. After completing the engine, I added a 3:1 belt reduction to increase its output torque and operate a pencil sharpener.",

  role:
    "Developed the mechanical concept, modeled the engine and its components in SolidWorks, produced the manufacturing drawings, machined and fabricated 12 custom parts, assembled and tested the complete system, and designed the belt-drive retrofit.",

  heroImage: {
    src: "/images/projects/Personal/Compressed Air Engine/compressed_air_hero.jpeg",
    alt: "Completed compressed-air engine with belt-driven pencil sharpener",
    caption:
      "Completed compressed-air engine retrofitted with a belt drive to operate a pencil sharpener.",
  },

  sections: [
    {
      title: "Project Overview",
      body:
        "This project began as an open-ended attempt to design and manufacture a functioning compressed-air engine from the ground up. Starting with a general idea of the desired layout, I developed several revisions in SolidWorks to establish the geometry, component interfaces, and motion before entering the machine shop. The final assembly contains more than 30 parts and converts compressed-air into reciprocating piston motion and continuous rotation for a flywheel and driveshaft.",
      images: [
        {
          src: "/images/projects/Personal/Compressed Air Engine/cad_render.png",
          alt: "SolidWorks model of the compressed-air engine assembly",
          caption:
            "SolidWorks assembly used to coordinate the engine geometry, component interfaces, and overall assembly.",
        },
      ],
    },

    {
      title: "Manufacturing & Assembly",
      body:
        "Manufacturing the engine required several months of intermittent work and incorporated nearly every process available to me in the machine shop. I designed and manufactured 12 custom components using milling, turning, 3D printing, welding, sawing, grinding, and even woodworking before fitting them into the complete assembly. Producing each component individually made careful dimensional planning essential, since small inaccuracies could accumulate across the crankshaft, piston, connecting rod, bearings, and supporting structure.",
    },

    {
      title: "Testing & Design Limitation",
      body:
        "The completed engine successfully operates at a supply pressure of 100 psi and reaches speeds in excess of 800 rpm. Its primary limitation resulted from the manufacturing sequence used for the cylinder-head interface. I fly-cut the sealing surface before welding the surrounding assembly, and the heat introduced during welding distorted the previously machined face. The resulting air leakage is significant, and it shortens the engine's runtime considerably. This demonstrated the importance of completing distortion-producing operations before final machining of critical surfaces.",
      metrics: [
        {
          label: "Maximum measured speed",
          value: "802 rpm",
        },
        {
          label: "Operating pressure",
          value: "100 psi",
        },
        {
          label: "Moving components",
          value: "6",
        },
      ],
      video: {
        title: "Compressed-Air Engine Testing",
        src: "/images/projects/Personal/Compressed Air Engine/testing.mp4",
        caption:
          "A short snippet of the inital testing and reduced runtime.",
      },
    },

    {
      title: "Pencil-Sharpener Retrofit",
      body:
        "After the engine was operating successfully, I retrofitted it with a belt-and-pulley system to power a pencil sharpener. The 3:1 reduction decreases the output speed whilst increasing the available torque, allowing the engine to overcome the sharpener's resistance. Although pressurizing the air reservoir requires far more energy than sharpening a pencil manually, the retrofit provides a fun demonstration of power transmission and mechanical advantage.",
      metrics: [
        {
          label: "Pulley reduction ratio",
          value: "3:1",
        },
        {
          label: "Custom parts manufactured",
          value: "12",
        },
        {
          label: "Total assembly parts",
          value: "30+",
        },
      ],
    },

    {
      title: "Manufacturing Drawings",
      gallery: "handcalcs",
      body:
        "Before entering the machine shop, I produced detailed drawings for the custom components to define their dimensions, tolerances, and interfaces. These drawings guided the manufacturing process and helped ensure that the independently produced parts would align and move properly when brought together in the final assembly. These were some of the first engineering drawings I ever made, and it's interesting to look back years later and see how far I've come since then!",
      images: [
        {
          src: "/images/projects/Personal/Compressed Air Engine/drawing_1.jpg",
          alt: "First manufacturing drawing for the compressed-air engine",
          caption:
            "Barrel end engineering drawing.",
        },
        {
          src: "/images/projects/Personal/Compressed Air Engine/drawing_2.jpg",
          alt: "Second manufacturing drawing for the compressed-air engine",
          caption:
            "Barrel engineering drawing.",
        },
        {
          src: "/images/projects/Personal/Compressed Air Engine/drawing_4.jpg",
          alt: "Fourth manufacturing drawing for the compressed-air engine",
          caption:
            "Flywheel engineering drawing.",
        },
        {
          src: "/images/projects/Personal/Compressed Air Engine/drawing_5.jpg",
          alt: "Fifth manufacturing drawing for the compressed-air engine",
          caption:
            "Head support engineering drawing.",
        },
        {
          src: "/images/projects/Personal/Compressed Air Engine/drawing_6.jpg",
          alt: "Sixth manufacturing drawing for the compressed-air engine",
          caption:
            "Head engineering drawing.",
        },
        {
          src: "/images/projects/Personal/Compressed Air Engine/drawing_7.jpg",
          alt: "Seventh manufacturing drawing for the compressed-air engine",
          caption:
            "Piston and rod engineering drawing.",
        },
      ],
    },

    {
      title: "Design Results",
      body:
        "The completed engine successfully converted compressed air into continuous rotary motion and reached speeds above 800 rpm. Its six moving components operated together within an assembly of more than 30 total parts, including 12 components that I designed and manufactured. The later belt-drive retrofit also provided sufficient torque to operate a pencil sharpener.",
      metrics: [
        {
          label: "Maximum measured speed",
          value: "800+ rpm",
        },
        {
          label: "Operating pressure",
          value: "100 psi",
        },
        {
          label: "Pulley reduction ratio",
          value: "3:1",
        },
        {
          label: "Custom parts manufactured",
          value: "12",
        },
        {
          label: "Moving components",
          value: "6",
        },
        {
          label: "Total assembly parts",
          value: "30+",
        },
      ],
    },

    {
      title: "Reflection & Next Steps",
      body:
        "This project tested nearly every manufacturing process I knew how to perform at the time, and reinforced the importance of designing around the complete manufacturing sequence. Remachining the warped cylinder interface would reduce air leakage and substantially improve the engine's runtime. Despite that limitation, seeing a collection of individually manufactured components operate as a complete engine—and eventually sharpen a pencil—made the extended build process worthwhile.",
    },
  ],
},
      {
  title: "Rocket Stove",
  slug: "rocket-stove",
  status: "Completed",

  context: "Personal Project",
  date: "April-May 2025",

  summary:
    "A wood-burning rocket stove designed and fabricated from $18 of salvaged steel for cooking meals outdoors.",

  overview:
    "Designed, welded, and experimentally evaluated a (somewhat) portable rocket stove using square steel tubing sourced from a local salvage yard. A water-boiling test and published wood-combustion data were used to estimate its heating power, thermal efficiency, and carbon emissions.",

  role:
    "Developed the stove geometry, selected and prepared the salvaged material, fabricated the assembly through sawing, waterjet cutting, and MIG welding, applied a high-temperature ceramic coating, conducted the water-boiling test, and completed the thermodynamic analysis.",

  heroImage: {
    src: "/images/projects/Personal/Rocket Stove/hero_image.jpeg",
    alt: "Completed wood-burning rocket stove during operation",
    caption:
      "Completed rocket stove after it's final coat of paint.",
  },

  sections: [
    {
      title: "Project Overview",
      body:
        "The project began after I found suitable square steel tubing at a local salvage yard and decided to repurpose it into a wood-burning stove for camping. The stove was intended to provide a simple alternative to carrying propane while making use of inexpensive reclaimed material. Its geometry directs fuel and airflow into a compact combustion chamber before routing the hot exhaust toward the cooking surface.",
      images: [
        {
          src: "/images/projects/Personal/Rocket Stove/cad_render.png",
          alt: "CAD model of the wood-burning rocket stove",
          caption:
            "CAD model used to establish the stove geometry before fabrication.",
        },
      ],
    },

    {
      title: "Fabrication",
      gallery: "featured",
      body:
        "The salvaged tubing was cut into the required sections and MIG welded to form the fuel inlet, combustion chamber, chimney, and supporting structure. After fabrication, I cleaned the completed assembly and applied a high-temperature ceramic coating to protect the exterior during repeated use. The finished stove weighs 38 pounds and was constructed using approximately $18 of scrap steel.",
      images: [
        {
          src: "/images/projects/Personal/Rocket Stove/scrap_metal.jpeg",
          alt: "Salvaged square steel tubing used to build the rocket stove",
          caption:
            "Square steel tubing sourced from a local salvage yard for the stove body.",
        },
        {
          src: "/images/projects/Personal/Rocket Stove/welding.jpeg",
          alt: "Rocket stove during MIG welding and fabrication",
          caption:
            "Stove body during cutting, fitting, and MIG welding.",
        },
        {
          src: "/images/projects/Personal/Rocket Stove/completed_unpainted.jpeg",
          alt: "Completed rocket stove before application of its exterior coating",
          caption:
            "Completed welded assembly before application of the high-temperature coating.",
        },
      ],
    },

    {
      title: "Experimental Testing",
      body:
        "To evaluate the completed stove, I performed a water-boiling test while measuring the mass quantity and type of wood consumed. The temperature change and mass of the water were used to estimate the useful heat transferred during the test. Published wood-combustion performance data from William Strauss and FutureMetrics were then used to estimate the energy supplied by the fuel and the associated carbon emissions.",
      images: [
        {
          src: "/images/projects/Personal/Rocket Stove/first_firing.jpeg",
          alt: "Rocket stove during its first wood-burning test",
          caption:
            "Initial firing used to evaluate combustion and prepare for the water-boiling test.",
        },
      ],
    },

    {
      title: "Thermal Analysis",
      gallery: "handcalcs",
      body:
        "The experimental measurements were combined with published fuel data to estimate the stove's useful heating power, thermal efficiency, and emissions. The analysis produced an estimated output of 278 W and a thermal efficiency of 2.68%. Because the calculation is based on a simplified water-boiling test and reference combustion data rather than direct exhaust or heat-flux measurements, these results should be treated as approximate performance estimates.",
      metrics: [
        {
          label: "Estimated useful power",
          value: "278 W",
        },
        {
          label: "Estimated thermal efficiency",
          value: "2.68%",
        },
        {
          label: "Estimated emissions",
          value: "0.397 kg CO₂/kWh",
        },
      ],
      images: [
        {
          src: "/images/projects/Personal/Rocket Stove/hand_calcs_1.jpg",
          alt: "First page of rocket stove thermodynamic calculations",
          caption:
            "Water-boiling test data and calculations used to estimate the natural gas stovetop in my house.",
        },
        {
          src: "/images/projects/Personal/Rocket Stove/hand_calcs_2.jpg",
          alt: "Second page of rocket stove thermodynamic calculations",
          caption:
            "Efficiency and emissions calculations for the rocket stove based on the measured test data and published wood-combustion properties.",
        },
      ],
    },

    {
      title: "Design Results",
      body:
        "The completed stove successfully burned small pieces of wood and produced sufficient heat for outdoor cooking. Although its measured performance was modest, it demonstrated that a functional cooking system could be fabricated from inexpensive salvaged material. Its 38-pound weight makes it better suited to car camping than backpacking, but its simple construction and readily available fuel make it really fun to use outdoors.",
      metrics: [
        {
          label: "Salvaged material cost",
          value: "$18",
        },
        {
          label: "Completed weight",
          value: "38 lb",
        },
        {
          label: "Estimated useful power",
          value: "278 W",
        },
        {
          label: "Estimated thermal efficiency",
          value: "2.68%",
        },
        {
          label: "Estimated emissions intensity",
          value: "0.397 kg CO₂/kWh",
        },
        {
          label: "Reference natural-gas generation",
          value: "0.181 kg CO₂/kWh",
        },
      ],
    },

    {
      title: "Reflection & Next Steps",
      body:
        "The stove was neither particularly powerful nor efficient, and the analysis suggests that its emissions per unit of useful energy are higher than the reference value for typical natural-gas power plants. Even so, the stove has cooked several memorable outdoor meals and made productive use of material that might otherwise have remained scrap. A future version could reduce weight and refine the airflow path to promote better heat transfer to the cookware.",
      images: [
        {
          src: "/images/projects/Personal/Rocket Stove/final_image_in_use.JPG",
          alt: "Rocket stove being used to cook a meal while camping",
          caption:
            "Using the completed rocket stove to cook a meal during a camping trip near Bend, Oregon.",
        },
      ],
    },
  ],
},
      {
  title: "Compact Desalination Kit",
  slug: "compact-desalination-kit",
  status: "Completed",

  context: "Personal Project",
  date: "January 2026",

  summary:
    "A compact thermal desalination device built from copper tubing and a stainless-steel bottle, recovering approximately 55% of its input water as liquid condensate.",

  overview:
    "Designed and assembled a compact proof-of-concept desalination kit that boils saltwater and routes the resulting vapor through a coiled copper condenser. Testing on a kitchen stove showed that approximately 55% of the initial water mass was recovered as liquid output.",

  role:
    "Developed the device layout, formed and fitted the copper tubing, modified and sealed the bottle cap, assembled the required fittings, and conducted the initial mass-based recovery test.",

  heroImage: {
    src: "/images/projects/Personal/Compact Desalination Kit/desalination_setup.jpg",
    alt: "Compact desalination kit assembled from a stainless-steel bottle and copper tubing",
    caption:
      "Completed compact desalination kit with its stainless-steel boiling vessel and coiled copper condenser.",
  },

  sections: [
    {
      title: "Project Overview",
      body:
        "This project explored whether a simple thermal desalination device could be made compact enough to store with my camping equipment. The system uses a stainless-steel bottle as the boiling vessel and a length of copper tubing as the vapor path and condenser. When saltwater is heated, water vapor travels through the tubing, cools, and condenses into a separate collection container whilst the dissolved salts remain in the bottle.",
    },

    {
      title: "Construction",
      body:
        "The copper tubing was cut to length and carefully wound around the stainless-steel bottle to create a compact condenser. I drilled through the bottle cap, passed the tubing through the opening, and sealed the joint with lead-free solder to limit vapor leakage. Additional fittings were then installed to complete the assembly and provide a controlled outlet for the condensed water.",
    images: [
    {
      src: "/images/projects/Personal/Compact Desalination Kit/desalination_cap.jpeg",
      alt: "Modified stainless-steel bottle cap with sealed copper tubing",
      caption:
        "Copper tubing passed through the modified bottle cap and sealed with lead-free solder.",
    },
    {
      src: "/images/projects/Personal/Compact Desalination Kit/desalination_compact.jpeg",
      alt: "Compact copper condenser wrapped around the stainless-steel bottle",
      caption:
        "Copper tubing wound around the bottle to illustrate the compact assembly.",
    },
  ],
},

    {
      title: "Experimental Testing",
      body:
        "For initial testing, I heated a measured quantity of water in the bottle using a kitchen stove and collected the liquid discharged from the condenser. Comparing the input and output masses showed that approximately 55% of the starting water was recovered as liquid. The remaining mass was primarily lost as uncollected water vapor through incomplete condensation or leakage from the system. I found that placing a damp cloth around the coils increased the amount of liquid condensed.",
      metrics: [
        {
          label: "Liquid-water recovery",
          value: "~55% by mass",
        },
        {
          label: "Heat source",
          value: "Kitchen stove",
        },
      ],
      images: [
        {
          src: "/images/projects/Personal/Compact Desalination Kit/desalination_testing_setup.jpeg",
          alt: "Compact desalination kit undergoing testing on a kitchen stove",
          caption:
            "Mass-based recovery test performed by boiling water and collecting the condensed output.",
        },
      ],
      video: {
        title: "Desalination Kit Testing",
        src: "/images/projects/Personal/Compact Desalination Kit/desalination_testing.mp4",
        caption:
          "Testing the compact desalination kit and collecting water from the copper condenser.",
      },
    },

    {
      title: "Design Results",
      body:
        "The completed system successfully demonstrated the basic desalination process in a compact, portable assembly. Vapor generated in the stainless-steel bottle traveled through the copper coil and condensed into a separate liquid output. Although the 55% recovery rate leaves considerable room for improvement, the test confirmed that the device can perform its intended function at a basic level.",
      metrics: [
        {
          label: "Liquid-water recovery",
          value: "~55% by mass",
        },
        {
          label: "Boiling vessel",
          value: "Stainless-steel bottle",
        },
        {
          label: "Condenser",
          value: "Coiled copper tubing",
        },
        {
          label: "Heat source used during testing",
          value: "Kitchen stove",
        },
      ],
    },

    {
      title: "Reflection & Next Steps",
      body:
        "This was a straightforward and enjoyable project that turned a small group of common components into a functioning thermal separation system. I do not anticipate needing it often, but its compact size made it an easy addition to my camping equipment. A future revision could improve the seal within the elbow connector, extend or actively cool the condenser, and better insulate the boiling vessel to increase liquid recovery and reduce energy loss.",
    },
  ],
},
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
    src: "/images/projects/Educational/Stress/Strain Apparatus/hero_image.jpeg",
    alt: "Prototype stress and strain apparatus in the four-point bending configuration",
    caption:
      "Full-scale prototype demonstrating the four-point bending configuration.",
  },

  sections: [
    {
      title: "Concept & Design",
      gallery: "featured",
      body:
        "The apparatus was developed as a teaching tool for future students studying mechanics of materials. Each team member designed one loading configuration, whilst my contribution focused on a four-point bending fixture capable of producing a pure bending moment within the photoelastic specimen.",
      images: [
        {
          src: "/images/projects/Educational/Stress/Strain Apparatus/assembly_cad.png",
          alt: "CAD model of the complete stress and strain apparatus",
          caption:
            "Overall CAD model integrating the axial, bending, and torsional loading configurations.",
        },
        {
          src: "/images/projects/Educational/Stress/Strain Apparatus/exploded_view_drawing.png",
          alt: "Exploded assembly drawing of the stress and strain apparatus",
          caption:
            "Exploded view illustrating the apparatus components and assembly arrangement.",
        },
      ],
    },

    {
      title: "Analytical Design",
      gallery: "handcalcs",
      body:
        "Hand calculations were used to determine the geometry and loading required to generate the target purple photoelastic fringe. Because the required stress was relatively low, the design achieved large safety factors whilst producing the desired visual effect.",
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
          src: "/images/projects/Educational/Stress/Strain Apparatus/hand_calcs_1.jpg",
          alt: "First page of hand calculations for the four-point bending apparatus",
          caption: "Initial loading and mechanism calculations.",
        },
        {
          src: "/images/projects/Educational/Stress/Strain Apparatus/hand_calcs_2.jpg",
          alt: "Second page of hand calculations for the four-point bending apparatus",
          caption: "Specimen stress and bending calculations.",
        },
        {
          src: "/images/projects/Educational/Stress/Strain Apparatus/hand_calcs_3.jpg",
          alt: "Third page of hand calculations for the four-point bending apparatus",
          caption: "Component sizing and strength calculations.",
        },
        {
          src: "/images/projects/Educational/Stress/Strain Apparatus/hand_calcs_4.jpg",
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
          src: "/images/projects/Educational/Stress/Strain Apparatus/excel_tool.png",
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
          src: "/images/projects/Educational/Stress/Strain Apparatus/bending_fea.png",
          alt: "Finite element stress result for the four-point bending apparatus",
          caption:
            "Finite element results used to validate the analytical bending-stress prediction.",
        },
      ],
    },

    {
      title: "Engineering Drawings & Prototype",
      gallery: "featured",
      body:
        "A full-scale prototype was 3D printed and assembled to demonstrate the three loading configurations during the final class presentation.",
      images: [
        {
          src: "/images/projects/Educational/Stress/Strain Apparatus/engineering_drawing_1.png",
          alt: "Engineering drawing for the stress and strain apparatus",
          caption:
            "Engineering drawing produced to document the apparatus components and dimensions.",
        },
        {
          src: "/images/projects/Educational/Stress/Strain Apparatus/engineering_drawing_2.png",
          alt: "Second engineering drawing for the stress and strain apparatus",
          caption:
            "Additional component and assembly documentation for the final design.",
        },
      ],
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
      {
  title: "Differential Drive Robot Simulation",
  slug: "differential-drive-robot-simulation",
  status: "Completed",

  context: "Cal Poly ME 322",
  date: "Spring 2026",
  team: "Individual Project",

  summary:
    "Developed nonlinear and linearized MATLAB/Simulink models of a Romi differential-drive robot to simulate wheel, chassis, and global-position dynamics under independent motor-voltage inputs.",

  overview:
    "Developed a nonlinear dynamic model of a Romi differential-drive robot and compared its response against a Jacobian-linearized state-space model across multiple driving conditions.",

  role:
    "Developed the system hand calculations using linear graph theory, derived and augmented the nonlinear state equations, used MATLAB's Symbolic Math Toolbox to linearize the model, implemented both nonlinear and linear simulations in Simulink, and evaluated their response under four voltage-input cases.",

  heroImage: {
    src: "/images/projects/Educational/Differential Drive Robot/hero_image.png",
    alt: "Differential-drive Romi robot simulation",
    caption:
      "Nonlinear simulation of a Romi differential-drive robot modeled with coupled motor, wheel, and chassis dynamics.",
  },

  sections: [
    {
      title: "Project Overview",
      body:
        "This project modeled the dynamic behavior of a two-wheeled Romi robot driven by independent left and right DC gearmotors. The model combined electrical motor dynamics, wheel-ground traction, rigid-body kinematics, and coordinate transformations to predict the robot's motion. A Jacobian-linearized state-space model was developed alongside the full nonlinear model so their responses could be compared across multiple driving conditions.",
    },

    {
      title: "System Modeling & Hand Calculations",
      gallery: "handcalcs",
      body:
        "I first developed the transducer relationships, linear graph, normal tree, and nonlinear state equations for the differential-drive system. The hand calculations established how the left and right motors, wheels, and chassis interacted, while the augmented equations added global position and heading states to represent the robot's path.",
      images: [
        {
          src: "/images/projects/Educational/Differential Drive Robot/hand_calcs_1.jpg",
          alt: "First page of differential-drive robot hand calculations",
          caption: "Initial system modeling and transducer relationships.",
        },
        {
          src: "/images/projects/Educational/Differential Drive Robot/hand_calcs_2.jpg",
          alt: "Second page of differential-drive robot hand calculations",
          caption: "Linear graph development for the differential-drive system.",
        },
        {
          src: "/images/projects/Educational/Differential Drive Robot/hand_calcs_3.jpg",
          alt: "Third page of differential-drive robot hand calculations",
          caption: "Normal-tree development and system relationships.",
        },
        {
          src: "/images/projects/Educational/Differential Drive Robot/hand_calcs_4.jpg",
          alt: "Fourth page of differential-drive robot hand calculations",
          caption: "Nonlinear state-equation development.",
        },
        {
          src: "/images/projects/Educational/Differential Drive Robot/hand_calcs_5.jpg",
          alt: "Fifth page of differential-drive robot hand calculations",
          caption: "Augmented kinematic equations for robot heading and position.",
        },
        {
          src: "/images/projects/Educational/Differential Drive Robot/hand_calcs_6.jpg",
          alt: "Sixth page of differential-drive robot hand calculations",
          caption: "Final state equations used for simulation.",
        },
      ],
    },

    {
      title: "Nonlinear & Linearized Simulation",
      body:
        "The nonlinear model was implemented in Simulink using the derived state equations and numerical integration. MATLAB's Symbolic Math Toolbox was then used to determine equilibrium conditions and calculate the Jacobian matrices required for the linear state-space approximation. Both models received identical left- and right-motor voltage inputs, allowing their wheel speeds, chassis motion, and predicted paths to be compared directly.",
    },

    {
      title: "Simulation Results",
      gallery: "featured",
      body:
        "Four driving cases were simulated to evaluate straight-line motion, turning, delayed motor actuation, and low-voltage behavior. The results illustrate where the linearized model closely represents the nonlinear system and where the approximation becomes less accurate as the operating condition changes.",
      images: [
        {
          src: "/images/projects/Educational/Differential Drive Robot/case1fig1.jpg",
          alt: "Case 1 differential-drive robot velocity comparison",
          caption:
            "Case 1: Linear and nonlinear response with equal 6 V inputs to both motors.",
        },
        {
          src: "/images/projects/Educational/Differential Drive Robot/case1fig2.jpg",
          alt: "Case 1 differential-drive robot path comparison",
          caption:
            "Case 1: Predicted robot path with equal 6 V inputs to both motors.",
        },
        {
          src: "/images/projects/Educational/Differential Drive Robot/case2fig1.jpg",
          alt: "Case 2 differential-drive robot velocity comparison",
          caption:
            "Case 2: Linear and nonlinear response with 7 V applied to the left motor and 5 V to the right motor.",
        },
        {
          src: "/images/projects/Educational/Differential Drive Robot/case2fig2.jpg",
          alt: "Case 2 differential-drive robot path comparison",
          caption:
            "Case 2: Predicted turning path produced by unequal motor voltages.",
        },
        {
          src: "/images/projects/Educational/Differential Drive Robot/case3fig1.jpg",
          alt: "Case 3 differential-drive robot velocity comparison",
          caption:
            "Case 3: Linear and nonlinear response with a delayed 6 V input to the right motor.",
        },
        {
          src: "/images/projects/Educational/Differential Drive Robot/case3fig2.jpg",
          alt: "Case 3 differential-drive robot path comparison",
          caption:
            "Case 3: Predicted path produced by delayed actuation of the right motor.",
        },
        {
          src: "/images/projects/Educational/Differential Drive Robot/case4fig1.jpg",
          alt: "Case 4 differential-drive robot velocity comparison",
          caption:
            "Case 4: Linear and nonlinear response with equal low-voltage inputs of 1.5 V.",
        },
        {
          src: "/images/projects/Educational/Differential Drive Robot/case4fig2.jpg",
          alt: "Case 4 differential-drive robot path comparison",
          caption:
            "Case 4: Predicted robot path under equal low-voltage inputs.",
        },
      ],
    },

    {
      title: "Model Comparison",
      body:
        "The simulation results demonstrate the strengths and limitations of linearizing a nonlinear system. The linearized model can closely match the nonlinear response near its operating point, while larger changes in motor input or robot motion can produce increasing disagreement. The animation compares the two simulated robots directly and makes this divergence visible in their predicted paths.",
      images: [
        {
          src: "/images/projects/Educational/Differential Drive Robot/combined_animations.gif",
          alt: "Animated comparison of linear and nonlinear differential-drive robot simulations",
          caption:
            "Animated comparison of the linearized and nonlinear robot models.",
        },
      ],
    },
  ],
},
      {
  title: "Transmission Design Tool",
  slug: "transmission-design-tool",
  status: "Completed",

  context: "Cal Poly Mechanical Systems Design",
  date: "Spring 2026",
  team: "Team of 3",

  summary:
    "Collaboratively developed an Excel-based transmission design tool that converts customer requirements into validated gear, shaft, and bearing selections.",

  overview:
    "Developed a comprehensive transmission design tool that automated more than 1,500 engineering calculations and accelerated the selection of gears, shafts, and bearings for customer-defined design requirements.",

  role:
    "Led the gear-design portion of the tool by researching and automating gear-sizing, strength, reliability, and life calculations. Also contributed to the broader Excel workflow, data lookup structure, conditional formatting, and final design challenge.",

  heroImage: {
    src: "/images/projects/Educational/Transmission Design Tool/hero_image.png",
    alt: "Transmission design tool Excel workbook",
    caption:
      "Excel-based design tool used to evaluate transmission components against customer requirements.",
  },

  sections: [
    {
      title: "Project Overview",
      body:
        "Over ten weeks, our three-person team developed an automated transmission design tool for the Final Design Challenge in Mechanical Systems Design. The tool received customer requirements including power, torque, output speed, working life, environmental conditions, and spatial constraints, then selected the most suitable gears, shafts, and bearings to satisfy those requirements.",
      metrics: [
        {
          label: "Total calculations automated",
          value: "1,538",
        },
        {
          label: "Customer constraints considered",
          value: "9",
        },
        {
          label: "Development time",
          value: "10 weeks",
        },
      ],
      images: [
        {
          src: "/images/projects/Educational/Transmission Design Tool/figures.png",
          alt: "Transmission design tool calculation figures",
          caption:
            "Graphs and charts from Shigley's, located conveniently within the excel tool for easy access.",
        },
      ],
    },

    {
      title: "Gear Design Automation",
      body:
        "My primary responsibility was developing the gear-design portion of the tool. I extensively studied Chapter 13 of Shigley's Mechanical Engineering Design to understand and automate the design considerations governing gear selection. The resulting workflow evaluated power transmission, output-speed requirements, reliability, working life in kilohours, and gear safety factors while automatically retrieving the necessary values from supporting data tables.",
      metrics: [
        {
          label: "Gear calculations automated",
          value: "172",
        },
      ],
      images: [
        {
          src: "/images/projects/Educational/Transmission Design Tool/gears_screenshot.png",
          alt: "Gear design calculations in the transmission design tool",
          caption:
            "Automated gear-design calculations and safety-factor checks.",
        },
      ],
    },

    {
      title: "Shaft & Bearing Selection",
      gallery: "featured",
      body:
        "The completed tool combined the gear calculations with automated shaft and bearing selection. Lookup tables and conditional formatting streamlined the design process by identifying unfavorable design elements and exposing low safety factors, allowing the team to quickly focus on configurations requiring further attention.",
      images: [
        {
          src: "/images/projects/Educational/Transmission Design Tool/shafts_screenshot.png",
          alt: "Shaft design calculations in the transmission design tool",
          caption:
            "Automated shaft-sizing calculations within the complete design workflow.",
        },
        {
          src: "/images/projects/Educational/Transmission Design Tool/bearings_screenshot.png",
          alt: "Bearing selection calculations in the transmission design tool",
          caption:
            "Bearing selection and life calculations based on the transmission loading conditions.",
        },
      ],
    },

    {
      title: "Design Challenge & Reflection",
      body:
        "During the final design challenge, the tool enabled our team to complete the transmission-design process in 42 minutes out of the three hours allotted. Beyond strengthening my understanding of gear design, this project gave me substantial experience with Excel automation and reinforced the importance of defining a clear scope before breaking a large engineering problem into manageable, interconnected tasks.",
      metrics: [
        {
          label: "Final challenge completion time",
          value: "42 minutes",
        },
        {
          label: "Time allotted",
          value: "3 hours",
        },
      ],
    },
  ],
},
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
    ],
  },
  {
    title: "In Progress",
    slug: "in-progress",
    description: "Current builds, experiments, and engineering ideas that are actively being developed.",
    projects: [
      {
  title: "Senior Design Project",
  slug: "senior-design-project",
  status: "In Progress",

  summary:
    "A yearlong capstone project completed by a team of four students alongside a corporate sponsor. We are designing, testing, and validating a patent-pending geothermal screw heat exchanger that replaces the condenser in a traditional HVAC system by exchanging heat with the ground. If successful, the system could offer homeowners a less expensive and more accessible alternative to conventional geothermal ground loops.",

  heroImage: {
    src: "/images/projects/In progress/Senior Design Project/hero_image.png",
    alt: "Geothermal screw heat exchanger senior design project",
    caption:
      "Patent-pending geothermal screw heat exchanger being developed and validated by the senior design team.",
  },
},
      {
  title: "ME4400: HDR Request for Proposal",
  slug: "hdr-request-for-proposal",
  status: "In Progress",

  summary:
    "A special projects class in collaboration with HDR that tasks us to evaluate the siting and feasibility of a 50 MW energy installation. We are analyzing potential sites and technologies before developing three microgrid configurations with distinct strengths and tradeoffs. The project considers not only engineering feasibility, but also the social, political, and economic needs of a fictional Burning Man community. Working in pairs, our RFP will be presented at the end of the semester to upper management from HDR.",

  heroImage: {
    src: "/images/projects/In progress/Energy-related RFP/hero_image.jpg",
    alt: "Energy-related engineering request for proposal project",
    caption:
      "Preliminary development of an engineering response to an energy-related request for proposal.",
  },
},
      {
  title: "Pelton Wheel Turbine",
  slug: "pelton-wheel-turbine",
  status: "In Progress",

  summary:
    "A garden-hose-powered Pelton wheel turbine to be designed, manufactured, and tested for power output and efficiency. The image shown is the micro-grid system at a friend's cabin, and serves as the insipration for the whole project.",

  heroImage: {
    src: "/images/projects/In progress/Pelton Wheel Turbine/hero_image.jpeg",
    alt: "Pelton wheel power-generation system installed at a cabin",
    caption:
      "The cabin-based Pelton wheel system that inspired this project.",
  },
},
      {
  title: "Miscellaneous Metal Castings",
  slug: "miscellaneous-metal-castings",
  status: "In Progress",

  summary:
    "An ongoing collection of metal parts that I plan to produce using my recently completed casting furnace. These experiments will allow me to explore new patterns, mold geometries, and casting techniques while continuing to improve the furnace and my overall casting process.",

  heroImage: {
    src: "/images/projects/In progress/Miscellaneous Metal Castings/hero_image.jpg",
    alt: "Metal casting furnace prepared for future casting projects",
    caption:
      "My recently completed metal casting furnace, which will be used to produce a variety of experimental parts.",
  },
},
    ],
  },
];

export const featuredProjects = [
  {
    ...getProject("educational", "wind-turbine-shroud-baseplate"),
    category: "educational",
  },
  {
    ...getProject("personal", "casting-furnace"),
    category: "personal",
  },
  {
    ...getProject("professional", "metal-lok-ultra-lite"),
    category: "professional",
  },
].filter((project) => Boolean(project));

export function getCategory(categorySlug: string) {
  return projectCategories.find((category) => category.slug === categorySlug);
}

export function getProject(categorySlug: string, projectSlug: string) {
  return getCategory(categorySlug)?.projects.find((project) => project.slug === projectSlug);
}
