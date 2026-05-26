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
    storyTitle: "What I Learned At WTSA",
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
    storyTitle: "What Robotics Taught Me",
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
        image: {
          src: "/images/showcase/programminginfrc.png",
          alt: "GitHub repository page for the Exploration Bot 2026 robot code",
          title: "Programmer Supporting The Robot Team",
          caption: "Robot code work connected to the Exploration Bot and FRC Team 1318 programming.",
        },
        body:
          "On IRS 1318, I was mainly a programmer. My work focused on understanding how robot code connects to real robot behavior through testing, debugging, and iteration. I also helped the seniors while they worked on the main bot, which helped me see how experienced team members approach build decisions, integration, and competition preparation.",
      },
      {
        kicker: "Main Robot",
        title: "Helping Seniors With The Main Bot",
        image: {
          src: "https://i.imgur.com/8ZpuQn8.jpeg",
          alt: "Aureus, FRC Team 1318's 2026 competition robot",
          title: "Helping Seniors With The Main Bot",
          caption: "The main competition robot I helped seniors with while learning build, wiring, controls, testing, and code integration.",
        },
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
        image: {
          src: "/images/showcase/codingimage.jpg",
          alt: "Generic coding workspace image",
          title: "Testing And Debugging Robot Code",
          caption: "Programming work focused on testing, debugging, and matching code to real robot behavior.",
        },
        body:
          "My programming work was about making code match what the robot could actually do. That meant thinking through timing, movement consistency, driver expectations, and how software interacts with real mechanical limits. Robotics taught me that code has to be tested on the machine, because real-world behavior exposes problems that do not always show up on a computer screen.",
      },
      {
        kicker: "Robot Detail",
        title: "What The Main Bot Needed To Do",
        image: {
          src: "/images/showcase/mainrobotgoalimg.jpeg",
          alt: "FRC Team 1318 robot collecting yellow game pieces near the field goal",
          title: "What The Main Bot Needed To Do",
          caption: "The main bot needed reliable mechanisms, controls, and code to perform repeatable match tasks.",
        },
        body:
          "The main bot needed to bring together the full competition stack: a chassis that could move predictably, mechanisms that could repeat under pressure, controls that drivers could trust, and code that matched the robot's actual behavior. The important lesson for me was integration. A mechanism only matters if the wiring, controls, code, and driver practice can make it repeatable in a match.",
      },
    ],
    video: {
      title: "Team 1318 Robot Video",
      embedUrl: "https://www.youtube.com/embed/dX_LlfgavCM",
    },
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
      "Hackathon work across ThinkCity Bellevue and Youth X Code, focused on fast prototyping, accessibility, computer vision, and presenting useful demos under pressure.",
    stat: "03",
    storyTitle: "What I Built At Hackathons",
    detail:
      "My hackathon work shows how I move from a real problem to a working technical prototype. ThinkCity Bellevue focused on a traffic incident reporter for illegally parked cars, while Youth X Code focused on an accessibility prototype using a YOLO 26 computer vision model to help visually impaired people understand information from physical paper.",
    bullets: [
      "ThinkCity Bellevue project",
      "Youth X Code accessibility project",
      "YOLO 26 model training",
      "Prototype demo and presentation",
    ],
    heroImage: {
      src: "/images/showcase/mlh-logo.png",
      alt: "Major League Hacking logo",
      caption: "Major League Hacking",
      credit: "Image source: Major League Hacking brand assets",
    },
    sections: [
      {
        kicker: "ThinkCity Bellevue",
        title: "Building A Practical Civic Prototype",
        image: {
          src: "/images/showcase/codingimage.jpg",
          alt: "Coding workspace used as a traffic incident reporter project visual",
          title: "Traffic Incident Reporter",
          caption: "A ThinkCity Bellevue concept for reporting illegally parked cars and sharing part of the fine with the reporter.",
        },
        body:
          "At ThinkCity Bellevue, I worked on a traffic incident reporter concept for illegally parked cars. The idea was that a user could report a parking problem, submit the needed evidence, and receive a cut of the fine if the report led to enforcement. The project helped me think about civic tech as a product: the workflow had to be simple for residents, useful for the city, and clear enough to explain quickly in a hackathon demo.",
        links: [
          {
            label: "Traffic Reporter Site",
            href: "https://brisk-wave-70636971.figma.site",
          },
        ],
      },
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
          "At Youth X Code, I worked on an accessibility-focused prototype for visually impaired users. The idea was to train a YOLO 26 model to detect and analyze useful information from physical paper, then turn that visual information into something easier to understand. The project connected machine learning, dataset preparation, object detection, and human-centered design: the model was meant to make printed information more usable, not just recognize objects.",
      },
    ],
  },
  {
    slug: "minecraft-modding",
    title: "Crownfall Minecraft Mod",
    eyebrow: "Game Dev",
    summary:
      "A custom Minecraft mod project built around Crownfall: bosses, fantasy progression, custom visuals, and gameplay systems.",
    stat: "04",
    storyTitle: "What Crownfall Is",
    detail:
      "Crownfall let me combine coding, game design, worldbuilding, and visual presentation into one modded Minecraft experience. The project is about making Minecraft feel like a custom fantasy adventure: new bosses, themed environments, custom items, combat ideas, and progression moments that feel bigger than a normal survival world.",
    bullets: ["Crownfall mod", "Custom bosses", "Fantasy builds", "Gameplay systems"],
    heroImage: {
      src: "/images/showcase/crownfall-logo.png",
      alt: "Crownfall logo with a crown and castle background",
      caption: "Crownfall",
      credit: "Personal portfolio image",
    },
    sections: [
      {
        kicker: "Crownfall",
        title: "Building A Custom Fantasy Mod",
        image: {
          src: "/images/showcase/crownfall-emberclaw.png",
          alt: "Emberclaw boss in a Crownfall Minecraft arena",
          title: "Emberclaw",
          caption: "A Crownfall boss encounter built around a larger fantasy setting and dramatic arena presentation.",
        },
        body:
          "Crownfall is my custom Minecraft mod project. I used it to experiment with how new content can change the feeling of the game: bosses, builds, visuals, items, and progression all have to work together so the experience feels intentional instead of random. It gave me practice thinking like both a developer and a player.",
      },
      {
        kicker: "World Design",
        title: "Castles, Arenas, And Progression Spaces",
        image: {
          src: "/images/showcase/crownfall-castle.png",
          alt: "Crownfall Minecraft castle and fantasy environment",
          title: "Crownfall Environment",
          caption: "A custom build space for exploration, combat setup, and fantasy presentation.",
        },
        body:
          "The visual side of Crownfall matters because the mod is not just code. Builds and arenas help explain what the player is walking into before any mechanics start. I worked on making spaces feel like they belong to the mod's theme, with dramatic structures, strong silhouettes, and areas that could support encounters or story moments.",
      },
      {
        kicker: "Characters",
        title: "Custom Enemies And Boss Identity",
        image: {
          src: "/images/showcase/crownfall-chromoknight.png",
          alt: "Chromoknight character from the Crownfall Minecraft mod",
          title: "Chromoknight",
          caption: "A Crownfall enemy concept focused on making custom content feel recognizable and distinct.",
        },
        body:
          "For Crownfall, I wanted enemies and bosses to feel like named parts of the world instead of generic mobs. Characters like Chromoknight helped me think about identity, combat role, presentation, and how a player understands what kind of challenge they are facing.",
      },
      {
        kicker: "Image Slot",
        title: "Custom Items And Gear",
        image: {
          src: "/images/showcase/crownfall-items-gear.jpeg",
          alt: "Crownfall Minecraft player wearing gear and holding a weapon at sunset",
          title: "Custom Items And Gear",
          caption: "Crownfall gear and weapons help make the mod feel like a custom adventure with its own progression.",
        },
        body:
          "This section is ready for screenshots of custom Crownfall items, gear, drops, or inventory content. It can show how the mod rewards players and how item design connects to progression.",
      },
      {
        kicker: "Image Slot",
        title: "Gameplay And Testing",
        image: {
          src: "/images/showcase/crownfall-gameplay-testing.jpeg",
          alt: "Crownfall Minecraft gameplay testing screenshot with a player holding custom gear",
          title: "Gameplay And Testing",
          caption: "Testing Crownfall in-game helped tune the feel of custom gear, visuals, and moment-to-moment play.",
        },
        body:
          "This section is ready for future gameplay images from testing. It can show how the mod feels in motion: combat behavior, encounter pacing, balancing changes, and the practical debugging work behind the finished experience.",
      },
    ],
  },
  {
    slug: "issaquah-spotlight",
    title: "Issaquah Spotlight",
    eyebrow: "Volunteer Web Work",
    summary:
      "A volunteer website role for The Issaquah Spotlight, a community-focused publication built around local knowledge and connection.",
    stat: "05",
    storyTitle: "What Is Issaquah Spotlight?",
    detail:
      "I was recently invited to help build the website for The Issaquah Spotlight as a volunteer. The project matters to me because it connects technical skills with local community work: making information easier to publish, easier to find, and easier for people in Issaquah to trust and use.",
    bullets: [
      "Volunteer website contributor",
      "Invited to help build the site",
      "Community knowledge and local impact",
      "Web design, structure, and presentation",
    ],
    heroImage: {
      src: "/images/showcase/issaquah-spotlight-logo.png",
      alt: "Issaquah Spotlight lamp icon logo",
      caption: "The Issaquah Spotlight",
      credit: "Image source: Issaquah Spotlight",
    },
    sections: [
      {
        kicker: "My Role",
        title: "Volunteer Website Contributor",
        image: {
          src: "/images/showcase/volunteer.png",
          alt: "Volunteer text with colorful raised hands",
          title: "Volunteer Work",
          caption: "My role with The Issaquah Spotlight is volunteer-based and focused on helping the community project grow online.",
        },
        body:
          "I was invited to volunteer with The Issaquah Spotlight to help build and improve their website. My role is connected to web structure, presentation, and making the site feel useful for readers, contributors, and the people organizing the project.",
        links: [
          {
            label: "Issaquah Spotlight Website",
            href: "https://issaquahspotlight.org/",
          },
        ],
      },
      {
        kicker: "Community Impact",
        title: "Building Community Through Knowledge",
        fullWidthImage: true,
        image: {
          src: "/images/showcase/issaquah-spotlight-banner.jpg",
          alt: "The Issaquah Spotlight community banner",
          title: "Community Publication",
          caption: "The site is meant to help local stories, resources, and information become easier to access.",
        },
        body:
          "The goal of the site is not just to look polished. It needs to support a real local mission: helping people learn what is happening around Issaquah, share useful information, and build stronger community awareness. Working on it helps me practice web design in a setting where clarity, trust, and accessibility matter.",
      },
      {
        kicker: "Current Work",
        title: "Turning Skills Into Service",
        image: {
          src: "/images/showcase/skills-to-service.png",
          alt: "People collaborating around a table with notes and notebooks",
          title: "Skills Into Service",
          caption: "The project turns web and communication skills into volunteer work for a real community organization.",
        },
        body:
          "This project is still active, so the most important part right now is contribution: listening to what the organization needs, helping turn ideas into website improvements, and using my CTE and web experience for something outside of a classroom assignment. It is a good example of technical skills becoming volunteer service.",
      },
    ],
    sources: [
      {
        label: "The Issaquah Spotlight",
        href: "https://issaquahspotlight.org/",
      },
    ],
  },
];

export function getAchievement(slug: string) {
  return achievements.find((achievement) => achievement.slug === slug);
}
