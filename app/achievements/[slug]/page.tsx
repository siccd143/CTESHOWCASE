import { SiteNav } from "@/components/site-nav";
import { GlassFilter } from "@/components/ui/liquid-glass";
import { achievements, getAchievement } from "@/lib/portfolio-data";
import { ArrowLeft, CheckCircle2, ImageIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return achievements.map((achievement) => ({ slug: achievement.slug }));
}

export default async function AchievementDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const achievement = getAchievement(slug);

  if (!achievement) {
    notFound();
  }

  return (
    <main className="site-shell inner-page">
      <GlassFilter />
      <div className="animated-bg" aria-hidden="true">
        <span className="ember ember-one" />
        <span className="ember ember-three" />
        <span className="grid-glow" />
      </div>
      <SiteNav />

      <section className="achievement-detail">
        <Link className="back-link" href="/achievements">
          <ArrowLeft size={18} />
          Back to achievements
        </Link>
        <div className="detail-hero-grid">
          <div>
            <span className="section-kicker">{achievement.eyebrow}</span>
            <h1>{achievement.title}</h1>
            <p>{achievement.summary}</p>
          </div>
          <div className="detail-image-placeholder">
            <ImageIcon size={42} />
            <span>Achievement image placeholder</span>
          </div>
        </div>
      </section>

      <section className="detail-content-grid">
        <article className="detail-copy-card">
          <span className="section-kicker">Story</span>
          <h2>What this page should prove</h2>
          <p>{achievement.detail}</p>
        </article>
        <aside className="detail-copy-card">
          <span className="section-kicker">Add Next</span>
          <div className="bullet-list">
            {achievement.bullets.map((bullet) => (
              <div key={bullet}>
                <CheckCircle2 size={18} />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}
