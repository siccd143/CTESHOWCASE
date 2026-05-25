export const navItems = [
  { label: "Home", href: "/" },
  { label: "WTSA", href: "/achievements/wtsa-journey" },
  { label: "Robotics", href: "/achievements/robotics-journey" },
  { label: "Hackathon", href: "/achievements/hackathon-experience" },
  { label: "Minecraft", href: "/achievements/minecraft-modding" },
  { label: "Spotlight", href: "/achievements/issaquah-spotlight" },
];

export const achievements = [
  {
    slug: "wtsa-journey",
    title: "WTSA Journey",
    eyebrow: "Competition Roles",
    summary:
      "My WTSA work across Webmaster, Programming, and Robotics events.",
    stat: "01",
    detail:
      "WTSA gave me a way to turn technical interests into competition projects. My work connects web design, programming, and robotics: building polished interfaces, solving code problems under constraints, and applying engineering thinking to systems that have to be explained clearly and tested carefully.",
    bullets: ["Webmaster", "Programming", "Robotics", "Competition preparation"],
    sections: [
      {
        kicker: "Webmaster",
        title: "Building For A Real Audience",
        image: {
          title: "Webmaster Screenshot",
          caption: "Add one of your Webmaster URLs or screenshots here.",
        },
        body:
          "In Webmaster, I focused on creating a site that was organized, usable, and visually polished. The work combined layout, navigation, content structure, responsiveness, and presentation. It pushed me to think beyond just making pages work: the site had to communicate clearly, look intentional, and guide judges through the project without confusion.",
      },
      {
        kicker: "Programming",
        title: "Problem Solving Under Constraints",
        image: {
          src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
          alt: "Code editor on a laptop used to represent programming work",
          title: "Programming Work",
          caption: "Coding, debugging, and problem-solving preparation.",
        },
        body:
          "Programming helped me practice breaking problems into smaller parts, choosing the right logic, and debugging quickly. I treated it as both a coding challenge and a communication challenge: the solution needed to work, but I also needed to understand why it worked well enough to explain decisions and improve it under pressure.",
      },
      {
        kicker: "Robotics",
        title: "Engineering Meets Competition",
        image: {
          title: "WTSA Robotics Image",
          caption: "Add your WTSA Robotics image here.",
        },
        body:
          "The robotics side of WTSA connected directly to my interest in hands-on engineering. I worked on thinking through robot behavior, mechanisms, constraints, and testing. It helped me connect design decisions to real performance: how a robot moves, how reliable it is, and how clearly the engineering process can be presented.",
      },
    ],
    gallery: [
      {
        title: "Webmaster URL 1",
        caption: "Paste the first Webmaster image or project URL here.",
      },
      {
        title: "Webmaster URL 2",
        caption: "Paste the second Webmaster image or project URL here.",
      },
      {
        src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
        alt: "Programming workspace with code on screen",
        title: "Programming Work",
        caption: "Programming image representing code, debugging, and competition problem solving.",
      },
      {
        title: "WTSA Robotics",
        caption: "Photo slot for your WTSA Robotics image.",
      },
    ],
  },
  {
    slug: "robotics-journey",
    title: "Robotics Journey",
    eyebrow: "FRC Team 1318",
    summary:
      "My role on Issaquah Robotics Society, FRC Team 1318, during the REBUILT season.",
    stat: "02",
    detail:
      "My role on IRS 1318 was split between hands-on robot development and software work. I worked directly on the Exploration Bot, used it to learn and test robot systems, and contributed to the main competition robot's autonomous period. That meant I was not just watching the season happen: I was building, testing, debugging, and helping connect prototype work to match-ready behavior.",
    bullets: [
      "My role on IRS 1318",
      "Exploration Bot work",
      "Main robot autonomous period",
      "Aureus robot development",
    ],
    heroImage: {
      src: "https://i.imgur.com/8ZpuQn8.jpeg",
      alt: "FRC Team 1318 robot Aureus during the 2026 REBUILT season",
      caption: "Aureus, Team 1318's 2026 competition robot",
      credit: "Image source: The Blue Alliance / Imgur",
    },
    sections: [
      {
        kicker: "My Role",
        title: "Builder and Programmer",
        body:
          "On IRS 1318, my work sat between mechanical learning, testing, and robot code. I helped with the Exploration Bot as my direct build project, then carried that experience into software work for the main robot. My biggest focus areas were understanding how robot systems behave in the real world, helping test ideas, and contributing to autonomous-period behavior for competition.",
      },
      {
        kicker: "Main Robot",
        title: "Aureus in REBUILT",
        body:
          "Aureus was Team 1318's 2026 REBUILT competition robot. The robot had to be reliable enough for repeated match cycles, structured enough for autonomous routines, and serviceable enough to survive constant iteration between practices and events. Work on Aureus connected mechanical design, controls, wiring, driver feedback, field testing, and code changes into one system.",
      },
      {
        kicker: "Build",
        title: "Exploration Bot",
        body:
          "The Exploration Bot was the robot I worked on most directly. It gave me a place to learn how components fit together, test mechanical and control ideas, and debug issues before they became competition-robot problems. I used it to understand the practical side of robotics: layout, wiring, structure, drivetrain behavior, mechanism testing, and how small build decisions affect software and controls.",
      },
      {
        kicker: "Code",
        title: "Main Robot Auto",
        body:
          "I also worked on the main robot's autonomous period. My contribution focused on making sure the robot could run planned actions before driver control started, which meant thinking through timing, starting position, movement consistency, and how code matched the robot's real mechanical limits. Auto work forced every assumption to be tested on the robot, not just in code.",
      },
      {
        kicker: "Robot Detail",
        title: "What Aureus Needed To Do",
        body:
          "Aureus had to bring together the full competition stack: a chassis that could move predictably, mechanisms that could repeat under pressure, controls that drivers could trust, and autonomous behavior that worked from known field setups. The important engineering challenge was integration. A mechanism only mattered if the code, wiring, controls, and driver practice could make it repeatable in a match.",
      },
    ],
    gallery: [
      {
        src: "https://i.imgur.com/8ZpuQn8.jpeg",
        alt: "Aureus, FRC Team 1318's 2026 competition robot",
        title: "Aureus",
        caption: "Online reference image from Team 1318's 2026 page on The Blue Alliance.",
      },
      {
        title: "Exploration Bot",
        caption: "Photo slot for the bot I worked on directly. Add a build-table or full-robot photo here.",
      },
      {
        title: "Exploration Bot Detail",
        caption: "Photo slot for a mechanism, wiring, drivetrain, or testing close-up from the Exploration Bot.",
      },
    ],
    sources: [
      {
        label: "The Blue Alliance: Team 1318 2026",
        href: "https://www.thebluealliance.com/team/1318/2026",
      },
      {
        label: "Issaquah Robotics Society",
        href: "https://www.team1318.org/about",
      },
    ],
  },
  {
    slug: "hackathon-experience",
    title: "Hackathon Experience",
    eyebrow: "Build Sprint",
    summary:
      "Hackathon work focused on fast prototyping, accessibility, computer vision, and presenting useful demos under pressure.",
    stat: "03",
    detail:
      "My hackathon work shows how I move from a real problem to a working technical prototype. The most important example is a Youth X Code project built around helping visually impaired people understand information from physical paper using a YOLO 26 computer vision model.",
    bullets: [
      "Youth X Code accessibility project",
      "YOLO 26 model training",
      "Paper document analysis",
      "Prototype demo and presentation",
    ],
    sections: [
      {
        kicker: "Youth X Code",
        title: "Training YOLO 26 For Paper Accessibility",
        image: {
          title: "Youth X Code Demo",
          caption: "Add a screenshot, model-training image, or demo photo from the hackathon here.",
        },
        body:
          "At another Youth X Code hackathon, I worked on an accessibility-focused prototype for visually impaired users. The idea was to train a YOLO 26 model to detect and analyze useful information from physical paper, then turn that visual information into something easier to understand. The project connected machine learning, dataset preparation, object detection, and human-centered design: the model was not just meant to recognize paper content, but to make printed information more usable for someone who cannot easily read it visually.",
      },
      {
        kicker: "Computer Vision",
        title: "From Physical Paper To Structured Information",
        image: {
          title: "Paper Analysis Pipeline",
          caption: "Photo slot for labeled data, paper examples, detection boxes, or output results.",
        },
        body:
          "The technical challenge was translating a messy real-world object into reliable digital feedback. Physical paper can have different layouts, lighting, handwriting, printed text, diagrams, and important regions. Training the YOLO 26 model meant thinking about what needed to be detected, how training examples should be labeled, and how model output could support a clearer assistive experience instead of stopping at raw bounding boxes.",
      },
    ],
    gallery: [
      {
        title: "Youth X Code Team",
        caption: "Photo slot for the hackathon team, table setup, or presentation moment.",
      },
      {
        title: "YOLO 26 Training",
        caption: "Photo slot for model training, labeled examples, or detection results.",
      },
      {
        title: "Accessibility Demo",
        caption: "Photo slot for the paper-analysis demo or final prototype output.",
      },
    ],
  },
  {
    slug: "minecraft-modding",
    title: "Minecraft Modding",
    eyebrow: "Game Dev",
    summary:
      "A technical page for custom Minecraft modding, plugin work, gameplay systems, and creative engineering.",
    stat: "04",
    detail:
      "Use this page to show the mods, plugins, commands, mechanics, resource packs, or gameplay ideas you have built and what technical problems you solved.",
    bullets: ["Mod concept", "Core mechanics", "Code or tools", "Gameplay result"],
  },
  {
    slug: "issaquah-spotlight",
    title: "Issaquah Spotlight",
    eyebrow: "Current Work",
    summary:
      "Current work connected to the Issaquah Spotlight, built to highlight ongoing contribution and local impact.",
    stat: "05",
    detail:
      "Use this page to explain what the Issaquah Spotlight is, what you are working on right now, and what role you play in it.",
    bullets: ["Current goal", "Your role", "Progress updates", "Next milestone"],
  },
];

export function getAchievement(slug: string) {
  return achievements.find((achievement) => achievement.slug === slug);
}
