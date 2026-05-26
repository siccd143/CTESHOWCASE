import { SiteNav } from "@/components/site-nav";
import { GlassFilter } from "@/components/ui/liquid-glass";
import ElegantCarousel, { type ElegantSlide } from "@/components/ui/elegant-carousel";
import { FlashFramePreview } from "@/components/ui/marvel-scroll-morph";
import { achievements } from "@/lib/portfolio-data";
import {
  ArrowRight,
  Code2,
  Rocket,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";
import Link from "next/link";

const timeline = [
  {
    label: "Engineering",
    title: "Learning How Systems Work",
    detail:
      "Engineering and CTE taught me to think in systems: parts, forces, constraints, testing, and iteration all affect whether an idea works in the real world.",
  },
  {
    label: "Design",
    title: "Choosing Ideas With A Purpose",
    detail:
      "I learned that design is not just making something look good. It is choosing a structure, tool, or mechanism because it solves the problem clearly.",
  },
  {
    label: "CTE",
    title: "Connecting Classwork To Projects",
    detail:
      "CTE helped me connect classroom skills to projects I can explain: code, robotics, hydraulics, computer vision, presentation, and technical decision making.",
  },
];

const carouselSlides: ElegantSlide[] = [
  {
    title: "AP Comp Sci",
    subtitle: "Understanding how AI learns",
    description:
      "AP Comp Sci taught me how AI works at a basic level and what it uses: data, patterns, algorithms, logic, and feedback from training.",
    accent: "#ff5a00",
    imageUrl: "/images/showcase/imgforapcompsci.png",
  },
  {
    title: "Intro To Engineering Design",
    subtitle: "Hydraulics and real mechanisms",
    description:
      "Intro to Engineering Design helped me understand hydraulics, why fluid power matters, and how mechanical systems can move with strength and control.",
    accent: "#e84020",
    imageUrl: "/images/showcase/introtoengdesimg.jpg",
  },
];

const journeyTimelineSlugs = [
  "wtsa-journey",
  "hackathon-experience",
  "robotics-journey",
  "minecraft-modding",
  "issaquah-spotlight",
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
            <div className="hero-achievement-list hero-journey-timeline">
              {journeyTimelineSlugs.map((slug, index) => {
                const achievement = achievements.find((item) => item.slug === slug);
                if (!achievement) return null;

                return (
                <Link
                  className="hero-achievement-link"
                  href={`/achievements/${achievement.slug}`}
                  key={achievement.slug}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <small>{achievement.eyebrow}</small>
                    <strong>{achievement.title}</strong>
                    <p>{achievement.summary}</p>
                  </div>
                  <ArrowRight size={17} />
                </Link>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <FlashFramePreview />

      <section className="carousel-section carousel-section-tight">
        <div className="section-heading">
          <span>In Class Experiences</span>
          <h2>AP Comp Sci and Intro to Engineering Design</h2>
        </div>
        <ElegantCarousel slides={carouselSlides} />
      </section>

      <section className="details-panel" id="skills">
        <div>
          <span className="section-kicker">Presentation Prompts</span>
          <h2>Questions that help me explain the thinking behind my work.</h2>
        </div>
        <div className="detail-list">
          <div>
            <Target size={20} />
            <span>Why did I choose this design instead of a simpler layout?</span>
          </div>
          <div>
            <Trophy size={20} />
            <span>Which project shows the most growth in my technical thinking?</span>
          </div>
          <div>
            <Rocket size={20} />
            <span>How did CTE help me connect class learning to real projects?</span>
          </div>
          <div>
            <Code2 size={20} />
            <span>What would I improve if I rebuilt one project from the start?</span>
          </div>
        </div>
      </section>

      <section className="showcase-timeline">
        <div className="section-heading compact">
          <span>Engineering And CTE</span>
          <h2>What these classes and projects taught me</h2>
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

    </main>
  );
}
