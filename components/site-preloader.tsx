"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Component as RocketLoader } from "@/components/ui/rocket-loader";
import { achievements, navItems } from "@/lib/portfolio-data";

const PRELOAD_COMPLETE_KEY = "portfolioPreloaded";

const assetUrls = [
  "/ayaan-hero.jpg",
  "/images/robotics.jpg",
  "/images/engineering.jpg",
  "/images/code.jpg",
  "/images/innovation.jpg",
  "/images/portfolio.jpg",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=1200&fit=crop&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=1200&fit=crop&q=80",
  "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900&h=1200&fit=crop&q=80",
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=900&h=1200&fit=crop&q=80",
];

const routeUrls = Array.from(
  new Set([
    "/",
    "/achievements",
    "/marvel-demo",
    ...navItems.map((item) => item.href),
    ...achievements.map((achievement) => `/achievements/${achievement.slug}`),
  ]),
);

function preloadImage(src: string) {
  return new Promise<void>((resolve) => {
    const image = new Image();
    image.onload = () => resolve();
    image.onerror = () => resolve();
    image.src = src;
  });
}

function warmRoute(path: string) {
  return fetch(path, { cache: "force-cache" })
    .then(() => undefined)
    .catch(() => undefined);
}

function waitForFonts() {
  return document.fonts?.ready.then(() => undefined).catch(() => undefined);
}

export function SitePreloader({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem(PRELOAD_COMPLETE_KEY) === "true") {
      setIsLoading(false);
      return;
    }

    let isMounted = true;
    const tasks = [
      ...assetUrls.map(preloadImage),
      ...routeUrls.map(warmRoute),
      waitForFonts(),
    ].filter(Boolean) as Promise<void>[];

    let completed = 0;
    const finishTask = () => {
      completed += 1;
      if (isMounted) setProgress(Math.round((completed / tasks.length) * 100));
    };

    const minDisplay = new Promise<void>((resolve) => {
      window.setTimeout(resolve, 1200);
    });
    const maxWait = new Promise<void>((resolve) => {
      window.setTimeout(resolve, 4200);
    });
    const preloadWork = Promise.all(tasks.map((task) => task.finally(finishTask))).then(
      () => undefined,
    );

    Promise.all([Promise.race([preloadWork, maxWait]), minDisplay]).then(() => {
      if (!isMounted) return;
      sessionStorage.setItem(PRELOAD_COMPLETE_KEY, "true");
      setProgress(100);
      window.setTimeout(() => setIsLoading(false), 260);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      {isLoading && (
        <div className="site-preloader" role="status" aria-live="polite">
          <RocketLoader />
          <div className="site-preloader-copy">
            <p>Ayaan Bijinemula</p>
            <h1>Preparing the portfolio</h1>
            <span>{progress}%</span>
          </div>
          <div className="site-preloader-bar" aria-hidden="true">
            <span style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}
      {children}
    </>
  );
}
