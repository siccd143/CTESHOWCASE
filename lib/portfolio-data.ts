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
    eyebrow: "Competition",
    summary:
      "A focused look at Ayaan's WTSA growth, preparation, teamwork, and competition experience.",
    stat: "01",
    detail:
      "Use this page to show the events entered, what you built or presented, your role on the team, and the skills you gained through WTSA.",
    bullets: ["Event category", "Team role", "Project result", "What you learned"],
  },
  {
    slug: "robotics-journey",
    title: "Robotics Journey",
    eyebrow: "Engineering",
    summary:
      "A page for robot builds, design decisions, programming, testing, and hands-on engineering progress.",
    stat: "02",
    detail:
      "Use this page to document the robotics season, mechanisms, code, failures, fixes, competitions, and your exact contributions.",
    bullets: ["Robot mechanism", "Code or controls", "Testing process", "Competition notes"],
  },
  {
    slug: "hackathon-experience",
    title: "Hackathon Experience",
    eyebrow: "Build Sprint",
    summary:
      "A fast-paced story of ideation, prototyping, collaboration, and presenting under pressure.",
    stat: "03",
    detail:
      "Use this page for the problem prompt, your team's idea, the tech stack, what you personally built, and the final demo.",
    bullets: ["Problem prompt", "Tech stack", "Your contribution", "Final demo"],
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
