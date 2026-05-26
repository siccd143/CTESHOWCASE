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
    heroImage: {
      src: "/images/showcase/wtsa-logo.png",
      alt: "Washington TSA logo with orca, Space Needle, mountains, and TSA mark",
      caption: "Washington TSA",
      credit: "Image source: Washington Technology Student Association",
    },
    sections: [
      {
        kicker: "Web Design",
        title: "Building Websites For A Real Audience",
        image: {
          src: "/images/showcase/issaquah-river-guide-webdesign.png",
          alt: "Issaquah River Guide web design screenshot",
          title: "Issaquah River Guide",
          caption: "A community website for Issaquah focused on local resources, navigation, and a polished user experience.",
        },
        body:
          "In Web Design, I focused on making sites that are organized, usable, and visually intentional. One project was a community resource website for Issaquah, built to help people find local resources and information. Another was a restaurant website, where the goal was to make the brand, menu, and experience easy to understand. Both projects pushed me to think beyond just making pages work: the site had to communicate clearly and guide viewers without confusion.",
        links: [
          {
            label: "Issaquah Community Site",
            href: "https://community-resource-website.vercel.app/",
          },
          {
            label: "Taste Of Venice",
            href: "https://taste-of-venice.weebly.com/",
          },
        ],
      },
      {
        kicker: "Coding",
        title: "Problem Solving With Code",
        image: {
          src: "/images/showcase/codingimage.jpg",
          alt: "Coding work screenshot",
          title: "Coding Work",
          caption: "Coding helped me practice logic, debugging, problem solving, and building working solutions.",
        },
        body:
          "Coding helped me practice breaking problems into smaller parts, choosing the right logic, and debugging quickly. It also connected to what I learned in AP Comp Sci about how AI uses data, patterns, algorithms, and feedback to learn from examples.",
      },
      {
        kicker: "Robotics",
        title: "Robotics Meets Competition",
        image: {
          src: "/images/showcase/vexv5img.jpg",
          alt: "VEX V5 robot",
          title: "VEX V5 Robotics",
          caption: "Robotics helped me connect mechanisms, controls, testing, and competition strategy.",
        },
        body:
          "The robotics side of WTSA connected directly to hands-on engineering. I worked on thinking through robot behavior, mechanisms, constraints, and testing. It helped me connect design decisions to real performance: how a robot moves, how reliable it is, and how clearly the engineering process can be presented.",
      },
    ],
  },
  {
    slug: "robotics-journey",
    title: "Robotics Journey",
    eyebrow: "FRC Team 1318",
    summary:
      "My programming role on Issaquah Robotics Society, FRC Team 1318, with most of my hands-on work centered on the Exploration Bot.",
    stat: "02",
    detail:
      "My role on IRS 1318 was mainly as a programmer. I worked most directly on the Exploration Bot, where I learned robot systems through testing, debugging, and code changes. I also helped the seniors as they built the main competition robot, which gave me a better understanding of how the mechanical, electrical, and software parts of a robot have to come together.",
    bullets: [
      "Programmer on IRS 1318",
      "Mainly worked on Exploration Bot",
      "Helped seniors with the main bot",
      "Testing and debugging robot behavior",
    ],
    heroImage: {
      src: "/images/showcase/frc1318currentyearimg.webp",
      alt: "FRC Team 1318 current-year robot on the field",
      caption: "Team 1318 current-year robot",
      credit: "Personal portfolio image",
    },
    sections: [
      {
        kicker: "My Role",
        title: "Programmer Supporting The Robot Team",
        body:
          "On IRS 1318, I was mainly a programmer. My work focused on understanding how robot code connects to real robot behavior through testing, debugging, and iteration. I also helped the seniors while they worked on the main bot, which helped me see how experienced team members approach build decisions, integration, and competition preparation.",
      },
      {
        kicker: "Main Robot",
        title: "Helping Seniors With The Main Bot",
        body:
          "The main competition robot was primarily built by the senior members of the team, and I helped where I could while learning from their process. Watching and supporting that work helped me understand how a competition robot has to be reliable, serviceable, and coordinated across mechanical design, wiring, controls, testing, and code.",
      },
      {
        kicker: "Build",
        title: "Exploration Bot",
        image: {
          src: "/images/showcase/explorationbotimg1.jpg",
          alt: "Exploration Bot robot on carpet near stairs",
          title: "Exploration Bot",
          caption: "The robot I worked on directly for build, testing, wiring, and system learning.",
        },
        body:
          "The Exploration Bot was the robot I worked on most directly. It gave me a place to learn how components fit together, test robot behavior, and debug issues in a lower-pressure environment. I used it to understand the practical side of robotics: layout, wiring, drivetrain behavior, mechanism testing, and how small build decisions affect software and controls.",
      },
      {
        kicker: "Code",
        title: "Testing And Debugging Robot Code",
        body:
          "My programming work was about making code match what the robot could actually do. That meant thinking through timing, movement consistency, driver expectations, and how software interacts with real mechanical limits. Robotics taught me that code has to be tested on the machine, because real-world behavior exposes problems that do not always show up on a computer screen.",
      },
      {
        kicker: "Robot Detail",
        title: "What The Main Bot Needed To Do",
        body:
          "The main bot needed to bring together the full competition stack: a chassis that could move predictably, mechanisms that could repeat under pressure, controls that drivers could trust, and code that matched the robot's actual behavior. The important lesson for me was integration. A mechanism only matters if the wiring, controls, code, and driver practice can make it repeatable in a match.",
      },
    ],
    video: {
      title: "Team 1318 Robot Video",
      embedUrl: "https://www.youtube.com/embed/dX_LlfgavCM",
    },
    gallery: [
      {
        src: "https://i.imgur.com/8ZpuQn8.jpeg",
        alt: "Aureus, FRC Team 1318's 2026 competition robot",
        title: "Aureus",
        caption: "Online reference image from Team 1318's 2026 page on The Blue Alliance.",
      },
      {
        src: "/images/showcase/explorationbotimg1.jpg",
        alt: "Exploration Bot robot on carpet near stairs",
        title: "Exploration Bot",
        caption: "The bot I worked on directly for build, testing, wiring, and system learning.",
      },
      {
        src: "/images/showcase/frc1318currentyearimg.webp",
        alt: "FRC Team 1318 current-year robot on the field",
        title: "Team 1318 Robot",
        caption: "Competition robot example connected to the systems I studied through FRC.",
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
          src: "/images/showcase/yolo26modeltrainingimg.webp",
          alt: "YOLO 26 model training notebook in Google Colab",
          title: "Youth X Code Demo",
          caption: "Training a YOLO 26 model for the Youth X Code accessibility prototype.",
        },
        body:
          "At another Youth X Code hackathon, I worked on an accessibility-focused prototype for visually impaired users. The idea was to train a YOLO 26 model to detect and analyze useful information from physical paper, then turn that visual information into something easier to understand. The project connected machine learning, dataset preparation, object detection, and human-centered design: the model was not just meant to recognize paper content, but to make printed information more usable for someone who cannot easily read it visually.",
      },
      {
        kicker: "Computer Vision",
        title: "From Physical Paper To Structured Information",
        image: {
          src: "/images/showcase/yolo26modeltrainingimg.webp",
          alt: "YOLO 26 model training notebook in Google Colab",
          title: "Paper Analysis Pipeline",
          caption: "Training setup for the paper-analysis computer vision prototype.",
        },
        body:
          "The technical challenge was translating a messy real-world object into reliable digital feedback. Physical paper can have different layouts, lighting, handwriting, printed text, diagrams, and important regions. Training the YOLO 26 model meant thinking about what needed to be detected, how training examples should be labeled, and how model output could support a clearer assistive experience instead of stopping at raw bounding boxes.",
      },
    ],
    gallery: [
      {
        src: "/images/showcase/yolo26modeltrainingimg.webp",
        alt: "YOLO 26 model training notebook in Google Colab",
        title: "Training Setup",
        caption: "The model training workflow behind the accessibility prototype.",
      },
      {
        src: "/images/showcase/yolo26modeltrainingimg.webp",
        alt: "YOLO 26 model training notebook in Google Colab",
        title: "YOLO 26 Training",
        caption: "Model training evidence from the Youth X Code paper-analysis prototype.",
      },
      {
        src: "/images/showcase/yolo26modeltrainingimg.webp",
        alt: "YOLO 26 model training notebook in Google Colab",
        title: "Paper Analysis Prototype",
        caption: "A computer vision workflow designed around making physical paper easier to understand.",
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
      "Minecraft modding let me combine creativity with technical problem solving. I used custom visuals and gameplay ideas to practice how small system changes can affect the feel of a game.",
    bullets: ["Mod concept", "Core mechanics", "Code or tools", "Gameplay result"],
    heroImage: {
      src: "/images/showcase/mcimg2.jpeg",
      alt: "Minecraft custom mod showcase scene",
      caption: "Custom Minecraft mod showcase",
      credit: "Personal portfolio image",
    },
    sections: [
      {
        kicker: "Custom Mod",
        title: "Building A Different Game Feel",
        image: {
          src: "/images/showcase/mcimg2.jpeg",
          alt: "Minecraft custom mod showcase scene",
          title: "Custom Mod Visual",
          caption: "The mod page focuses on custom gameplay, visuals, and the choices behind the experience.",
        },
        body:
          "This project shows how modding can change how a game feels without needing to rebuild the whole game. I focused on how custom visuals, mechanics, and item ideas can make the experience feel more personal and intentional.",
      },
    ],
    gallery: [
      {
        src: "/images/showcase/mcimg2.jpeg",
        alt: "Minecraft custom mod showcase scene",
        title: "Custom Mod",
        caption: "A visual example from the Minecraft modding work.",
      },
    ],
  },
  {
    slug: "issaquah-spotlight",
    title: "Issaquah Spotlight",
    eyebrow: "Current Work",
    summary:
      "Current work connected to the Issaquah Spotlight, built to highlight ongoing contribution and local impact.",
    stat: "05",
    detail:
      "Issaquah Spotlight represents current work and local impact. This page explains the goal, my role, what progress looks like, and how the project connects to communication, service, and technical presentation.",
    bullets: ["Current goal", "My role", "Progress updates", "Next milestone"],
  },
];

export function getAchievement(slug: string) {
  return achievements.find((achievement) => achievement.slug === slug);
}
