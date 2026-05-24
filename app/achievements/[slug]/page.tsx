import { SiteNav } from "@/components/site-nav";
import { GlassFilter } from "@/components/ui/liquid-glass";
import { achievements, getAchievement } from "@/lib/portfolio-data";
import { ArrowLeft, CheckCircle2, ExternalLink, ImageIcon } from "lucide-react";
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
          {achievement.heroImage ? (
            <figure className="detail-image-card">
              <img src={achievement.heroImage.src} alt={achievement.heroImage.alt} />
              <figcaption>
                <strong>{achievement.heroImage.caption}</strong>
                <span>{achievement.heroImage.credit}</span>
              </figcaption>
            </figure>
          ) : (
            <div className="detail-image-placeholder">
              <ImageIcon size={42} />
              <span>Achievement image placeholder</span>
            </div>
          )}
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

      {achievement.sections ? (
        <section className="detail-feature-grid">
          {achievement.sections.map((section) => (
            <article className="detail-copy-card" key={section.title}>
              {section.image ? (
                <figure className="detail-section-media">
                  {section.image.src ? (
                    <img src={section.image.src} alt={section.image.alt} />
                  ) : (
                    <div className="detail-gallery-placeholder">
                      <ImageIcon size={34} />
                    </div>
                  )}
                  <figcaption>
                    <strong>{section.image.title}</strong>
                    <span>{section.image.caption}</span>
                  </figcaption>
                </figure>
              ) : null}
              <span className="section-kicker">{section.kicker}</span>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </section>
      ) : null}

      {achievement.gallery ? (
        <section className="detail-gallery">
          {achievement.gallery.map((image) => (
            <figure className="detail-gallery-card" key={image.title}>
              {image.src ? (
                <img src={image.src} alt={image.alt} />
              ) : (
                <div className="detail-gallery-placeholder">
                  <ImageIcon size={38} />
                </div>
              )}
              <figcaption>
                <strong>{image.title}</strong>
                <span>{image.caption}</span>
              </figcaption>
            </figure>
          ))}
        </section>
      ) : null}

      {achievement.sources ? (
        <section className="detail-sources">
          <span className="section-kicker">Sources</span>
          <div>
            {achievement.sources.map((source) => (
              <a href={source.href} key={source.href} rel="noreferrer" target="_blank">
                {source.label}
                <ExternalLink size={15} />
              </a>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
