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
  Layers3,
  Sparkles,
  Trophy,
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
    title: "Portfolio Website",
    detail: "A custom black-and-orange site built to present skills and achievements.",
    icon: Layers3,
  },
  {
    title: "Technical Builds",
    detail: "A placeholder for your best coded, engineered, or workshop-based projects.",
    icon: Cpu,
  },
  {
    title: "Achievement Pages",
    detail: "Dedicated pages for awards, leadership, projects, and creative work.",
    icon: Trophy,
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
          <span>achievement pages</span>
        </div>
        <div className="stat">
          <strong>06</strong>
          <span>skill areas</span>
        </div>
        <div className="stat">
          <strong>01</strong>
          <span>personal brand</span>
        </div>
        <div className="stat">
          <strong>100%</strong>
          <span>custom presentation</span>
        </div>
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
          <h2>Project slots ready for screenshots and details</h2>
        </div>
        <div className="program-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article className="program-card" key={project.title}>
                <div className="image-placeholder">
                  <span>Project image</span>
                  <Icon size={34} />
                </div>
                <div className="program-body">
                  <div className="program-tag">Portfolio</div>
                  <h3>{project.title}</h3>
                  <p>{project.detail}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="details-panel">
        <div>
          <span className="section-kicker">Next Details Needed</span>
          <h2>Send your real photo and achievement list.</h2>
        </div>
        <div className="detail-list">
          <div>
            <Code2 size={20} />
            <span>Best projects and tools used</span>
          </div>
          <div>
            <Trophy size={20} />
            <span>Awards, roles, or certifications</span>
          </div>
          <div>
            <Sparkles size={20} />
            <span>Your preferred hero photo</span>
          </div>
        </div>
      </section>
    </main>
  );
}
