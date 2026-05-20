import { SiteNav } from "@/components/site-nav";
import { GlassFilter } from "@/components/ui/liquid-glass";
import { achievements } from "@/lib/portfolio-data";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function AchievementsPage() {
  return (
    <main className="site-shell inner-page">
      <GlassFilter />
      <div className="animated-bg" aria-hidden="true">
        <span className="ember ember-one" />
        <span className="ember ember-two" />
        <span className="grid-glow" />
      </div>
      <SiteNav />

      <section className="page-hero">
        <div className="eyebrow">
          <Sparkles size={16} />
          Ayaan Bijinemula
        </div>
        <h1>Achievements</h1>
        <p>
          Dedicated pages for the strongest parts of Ayaan's portfolio. Each
          page is ready for real photos, dates, project links, and outcomes.
        </p>
      </section>

      <section className="achievement-grid page-grid">
        {achievements.map((achievement) => (
          <Link
            className="achievement-card achievement-card-large"
            href={`/achievements/${achievement.slug}`}
            key={achievement.slug}
          >
            <span>{achievement.stat}</span>
            <div>
              <small>{achievement.eyebrow}</small>
              <h2>{achievement.title}</h2>
              <p>{achievement.summary}</p>
            </div>
            <ArrowRight size={20} />
          </Link>
        ))}
      </section>
    </main>
  );
}
