import { SiteNav } from "@/components/site-nav";
import { GlassFilter } from "@/components/ui/liquid-glass";
import ElegantCarousel, { type ElegantSlide } from "@/components/ui/elegant-carousel";
import MarvelScrollMorph from "@/components/ui/marvel-scroll-morph";
import { achievements } from "@/lib/portfolio-data";
import {
  ArrowRight,
  BadgeCheck,
  Code2,
  Cpu,
  ExternalLink,
  Layers3,
  Rocket,
  Sparkles,
  Target,
  Trophy,
  Wrench,
} from "lucide-react";
import Link from "next/link";

const skills = [
  "Frontend design",
  "Technical problem solving",
  "Presentation",
  "Project planning",
  "Creative direction",
  "Hands-on building",
];

const projects = [
  {
    title: "CTE Showcase Website",
    tag: "Frontend",
    detail:
      "A custom portfolio built around cinematic interaction, achievement pages, responsive layouts, and a clear personal story.",
    icon: Layers3,
    proof: ["Next.js", "Motion", "Design system"],
  },
  {
    title: "IRS 1318 Robotics",
    tag: "Engineering",
    detail:
      "Hands-on Exploration Bot work plus autonomous-period contribution for the main FRC robot.",
    icon: Cpu,
    proof: ["Exploration Bot", "Autonomous", "Testing"],
  },
  {
    title: "WTSA Competition Work",
    tag: "Competition",
    detail:
      "Webmaster, Programming, and Robotics work organized into judge-ready sections with image slots and project evidence.",
    icon: Trophy,
    proof: ["Webmaster", "Programming", "Robotics"],
  },
];

const proofHighlights = [
  {
    title: "Builds",
    value: "Hands-on",
    detail: "Robotics systems, prototypes, and technical project work.",
    icon: Wrench,
  },
  {
    title: "Code",
    value: "Applied",
    detail: "Frontend work, autonomous logic, debugging, and competition programming.",
    icon: Code2,
  },
  {
    title: "Story",
    value: "Readable",
    detail: "Every page is structured so judges can quickly see role, process, and evidence.",
    icon: Target,
  },
];

const timeline = [
  {
    label: "Explore",
    title: "Start with the technical areas",
    detail:
      "WTSA, robotics, hackathon work, and modding each get dedicated pages instead of being buried in one long resume.",
  },
  {
    label: "Prove",
    title: "Show the work behind the result",
    detail:
      "Each detail page is built for role, process, decisions, images, sources, and specific contributions.",
  },
  {
    label: "Polish",
    title: "Make the experience memorable",
    detail:
      "The reel, carousel, animated backgrounds, and image cards give the portfolio a clear visual identity.",
  },
];

const carouselSlides: ElegantSlide[] = [
  {
    title: "WTSA Journey",
    subtitle: "Competition, preparation, and presentation",
    description:
      "A structured page for the events, team role, build process, and lessons from WTSA.",
    accent: "#ff5a00",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=1200&fit=crop&q=80",
  },
  {
    title: "Robotics Journey",
    subtitle: "Engineering decisions and hands-on iteration",
    description:
      "A space for mechanisms, programming, testing, competition notes, and what you contributed.",
    accent: "#e84020",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=1200&fit=crop&q=80",
  },
  {
    title: "Hackathon Experience",
    subtitle: "Fast prototyping under pressure",
    description:
      "A polished story for the prompt, idea, tech stack, your role, and final demo.",
    accent: "#f0efeb",
    imageUrl:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900&h=1200&fit=crop&q=80",
  },
  {
    title: "Minecraft Modding",
    subtitle: "Custom mechanics and gameplay systems",
    description:
      "A dedicated page for mods, plugins, resource packs, commands, and the problems solved while building them.",
    accent: "#ff5a00",
    imageUrl:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=900&h=1200&fit=crop&q=80",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <GlassFilter />
      <div className="animated-bg" aria-hidden="true">
        <span className="ember ember-one" />
        <span className="ember ember-two" />
        <span className="ember ember-three" />
        <span className="grid-glow" />
      </div>

      <section className="portrait-hero" id="top">
        <SiteNav />
        <div className="hero-showcase">
          <div className="hero-photo-panel">
            <img src="/ayaan-hero.jpg" alt="Ayaan Bijinemula" />
            <div className="hero-photo-overlay">
              <div className="eyebrow">
                <Sparkles size={16} />
                Personal skills portfolio
              </div>
              <h1>Ayaan Bijinemula</h1>
            </div>
            <div className="hero-lower-section">
              <div className="hero-mini-achievements" aria-label="Featured achievement areas">
                <span>WTSA</span>
                <span>Robotics</span>
                <span>Hackathon</span>
                <span>Minecraft Modding</span>
              </div>
              <p>
                A focused portfolio for presenting my achievements, technical
                skills, creative work, and the projects that show how I think.
              </p>
              <div className="hero-actions">
                <Link className="primary-button" href="/achievements">
                  View achievements <ArrowRight size={18} />
                </Link>
                <Link className="secondary-button" href="#skills">
                  See skills
                </Link>
              </div>
            </div>
          </div>

          <aside
            className="hero-achievements-panel"
            data-magic-cursor-zone
            aria-label="Featured achievements"
          >
            <div className="hero-panel-header">
              <span>Achievements</span>
              <h2>Journey Map</h2>
            </div>
            <div className="hero-achievement-list">
              {achievements.map((achievement) => (
                <Link
                  className="hero-achievement-link"
                  href={`/achievements/${achievement.slug}`}
                  key={achievement.slug}
                >
                  <span>{achievement.stat}</span>
                  <div>
                    <small>{achievement.eyebrow}</small>
                    <strong>{achievement.title}</strong>
                    <p>{achievement.summary}</p>
                  </div>
                  <ArrowRight size={17} />
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <MarvelScrollMorph />

      <section className="carousel-section carousel-section-tight">
        <div className="section-heading">
          <span>Gallery Option Two</span>
          <h2>Editorial carousel for achievement stories</h2>
        </div>
        <ElegantCarousel slides={carouselSlides} />
      </section>

      <section className="section-block" id="achievements">
        <div className="section-heading">
          <span>Achievements</span>
          <h2>Event pages for the work that matters most</h2>
          <p>
            Each page is set up for a specific experience: WTSA, robotics,
            hackathon work, and the current Issaquah Spotlight project.
          </p>
        </div>
        <div className="achievement-grid">
          {achievements.map((achievement) => (
            <Link
              className="achievement-card"
              href={`/achievements/${achievement.slug}`}
              key={achievement.slug}
            >
              <span>{achievement.stat}</span>
              <div>
                <small>{achievement.eyebrow}</small>
                <h3>{achievement.title}</h3>
                <p>{achievement.summary}</p>
              </div>
              <ArrowRight size={18} />
            </Link>
          ))}
          </div>
      </section>

      <section className="stats" aria-label="Portfolio highlights">
        <div className="stat">
          <strong>05</strong>
          <span>deep-dive pages</span>
        </div>
        <div className="stat">
          <strong>03</strong>
          <span>WTSA focus areas</span>
        </div>
        <div className="stat">
          <strong>1318</strong>
          <span>FRC team work</span>
        </div>
        <div className="stat">
          <strong>100%</strong>
          <span>custom showcase</span>
        </div>
      </section>

      <section className="proof-strip" aria-label="What this portfolio proves">
        {proofHighlights.map((item) => {
          const Icon = item.icon;
          return (
            <article className="proof-card" key={item.title}>
              <Icon size={22} />
              <div>
                <span>{item.title}</span>
                <h3>{item.value}</h3>
                <p>{item.detail}</p>
              </div>
            </article>
          );
        })}
      </section>

      <section className="split-section" id="skills">
        <div className="section-heading compact">
          <span>Skills</span>
          <h2>Built around what you can actually present</h2>
          <p>
            The site now points toward you: what you can do, what you have
            made, and why those achievements matter.
          </p>
        </div>
        <div className="skill-grid">
          {skills.map((skill) => (
            <div className="skill-pill" key={skill}>
              <BadgeCheck size={18} />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block" id="projects">
        <div className="section-heading">
          <span>Projects</span>
          <h2>Proof-of-work cards, not placeholders</h2>
          <p>
            These cards point people toward the work that best shows range:
            design, programming, robotics, and competition preparation.
          </p>
        </div>
        <div className="program-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article className="program-card" key={project.title}>
                <div className="image-placeholder project-proof-visual">
                  <span>{project.tag}</span>
                  <Icon size={34} />
                </div>
                <div className="program-body">
                  <div className="program-tag">{project.tag}</div>
                  <h3>{project.title}</h3>
                  <p>{project.detail}</p>
                  <div className="project-proof-tags">
                    {project.proof.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="showcase-timeline">
        <div className="section-heading compact">
          <span>How To Read It</span>
          <h2>A judge-friendly path through the portfolio</h2>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <article className="timeline-row" key={item.label}>
              <time>{item.label}</time>
              <div>
                <strong>{item.title}</strong>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="details-panel">
        <div>
          <span className="section-kicker">Ready For More Evidence</span>
          <h2>Drop in photos, videos, code links, and awards as you collect them.</h2>
        </div>
        <div className="detail-list">
          <div>
            <Code2 size={20} />
            <span>Code repositories and demo links</span>
          </div>
          <div>
            <Trophy size={20} />
            <span>Awards, roles, and judging results</span>
          </div>
          <div>
            <Rocket size={20} />
            <span>Robot photos, WTSA screenshots, and build clips</span>
          </div>
          <Link className="panel-link" href="/achievements">
            Explore all pages <ExternalLink size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
