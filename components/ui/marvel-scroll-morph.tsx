"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  type MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const frames = [
  {
    title: "Robotics",
    subtitle: "Vision systems - autonomous calibration",
    gradient: "linear-gradient(135deg, #ff5a00 0%, #e84020 42%, #000 100%)",
    pattern:
      "radial-gradient(circle at 30% 30%, rgba(255,255,255,.35), transparent 12%), radial-gradient(circle at 70% 60%, rgba(255,255,255,.18), transparent 10%)",
    image: "/images/robotics.jpg",
  },
  {
    title: "Engineering",
    subtitle: "Mechanical systems - precision control",
    gradient: "linear-gradient(135deg, #f0efeb 0%, #e84020 38%, #000 100%)",
    pattern:
      "linear-gradient(120deg, rgba(255,255,255,.26) 0 2px, transparent 2px 22px)",
    image: "/images/engineering.jpg",
  },
  {
    title: "Code",
    subtitle: "Interfaces - automation - AI tools",
    gradient: "linear-gradient(135deg, #111 0%, #ff5a00 44%, #000 100%)",
    pattern:
      "radial-gradient(circle at 20% 70%, rgba(255,255,255,.25), transparent 14%), radial-gradient(circle at 80% 20%, rgba(255,255,255,.16), transparent 12%)",
    image: "/images/code.jpg",
  },
  {
    title: "Innovation",
    subtitle: "Ideas built frame by frame",
    gradient: "linear-gradient(135deg, #e84020 0%, #5c170c 44%, #000 100%)",
    pattern:
      "linear-gradient(45deg, rgba(255,255,255,.2) 0 1px, transparent 1px 18px)",
    image: "/images/innovation.jpg",
  },
  {
    title: "Portfolio",
    subtitle: "A cinematic hero for your website",
    gradient: "linear-gradient(135deg, #ff5a00 0%, #361006 45%, #000 100%)",
    pattern:
      "radial-gradient(circle at 50% 30%, rgba(255,255,255,.3), transparent 16%), radial-gradient(circle at 30% 80%, rgba(255,255,255,.16), transparent 10%)",
    image: "/images/portfolio.jpg",
  },
];

function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden">
      {Array.from({ length: 24 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-orange-400/70 shadow-[0_0_14px_rgba(255,90,0,.85)]"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
          }}
          animate={{
            y: [0, -26, 0],
            x: [0, i % 2 === 0 ? 18 : -18, 0],
            opacity: [0.15, 0.95, 0.15],
            scale: [0.6, 1.4, 0.6],
          }}
          transition={{
            duration: 3 + (i % 5) * 0.35,
            repeat: Infinity,
            delay: i * 0.05,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function MorphFrame({
  frame,
  index,
  progress,
}: {
  frame: (typeof frames)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const start = index / frames.length;
  const peak = (index + 0.5) / frames.length;
  const end = (index + 1) / frames.length;

  const opacity = useTransform(
    progress,
    index === 0
      ? [0, peak, end]
      : index === frames.length - 1
        ? [start, peak, 1]
        : [start, peak, end],
    index === 0
      ? [1, 1, 0]
      : index === frames.length - 1
        ? [0, 1, 1]
        : [0, 1, 0],
  );
  const scale = useTransform(progress, [start, end], [1.18, 1.02]);
  const rotate = useTransform(progress, [start, end], [-2, 2]);
  const blur = useTransform(progress, [start, peak, end], [
    "10px",
    "0px",
    "10px",
  ]);

  return (
    <motion.div
      style={{ opacity, scale, rotate, filter: blur }}
      className="absolute inset-0"
    >
      <div className="absolute inset-0" style={{ background: frame.gradient }} />
      <div
        className="absolute inset-0 opacity-40"
        style={{ backgroundImage: frame.pattern }}
      />
      <motion.img
        src={frame.image}
        alt={frame.title}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ opacity: 0.86 }}
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,.18)_38%,rgba(0,0,0,.88)_100%)]" />
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="text-center">
          <motion.div
            className="mx-auto mb-8 flex h-44 w-44 items-center justify-center rounded-[2rem] border border-white/25 bg-white/10 shadow-[0_0_58px_rgba(255,90,0,.28)] backdrop-blur-md md:h-64 md:w-64"
            animate={{
              rotate: [0, 4, -4, 0],
              scale: [1, 1.04, 1],
            }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm font-black tracking-[0.45em] text-white/55">
              {String(index + 1).padStart(2, "0")}
            </span>
          </motion.div>
          <h2 className="text-6xl font-black tracking-tight text-white md:text-9xl">
            {frame.title}
          </h2>
          <p className="mt-5 text-lg font-bold uppercase tracking-[0.28em] text-white/65 md:text-2xl">
            {frame.subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function MarvelScrollMorph() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const progressRef = useRef(0);
  const touchYRef = useRef<number | null>(null);
  const progressValue = useMotionValue(0);
  const scrollYProgress = useSpring(progressValue, {
    stiffness: 90,
    damping: 24,
    mass: 0.24,
  });
  const [isLocked, setIsLocked] = useState(false);

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.9, 1],
    [0, 1, 1, 0],
  );

  useEffect(() => {
    const clamp = (value: number) => Math.min(1, Math.max(0, value));

    const getSectionTop = () => {
      const section = sectionRef.current;
      if (!section) return 0;
      return section.getBoundingClientRect().top + window.scrollY;
    };

    const isSectionMainView = () => {
      const section = sectionRef.current;
      if (!section) return false;
      const rect = section.getBoundingClientRect();
      const middle = window.innerHeight * 0.5;
      return rect.top <= middle && rect.bottom >= middle;
    };

    const setProgress = (next: number) => {
      const clamped = clamp(next);
      progressRef.current = clamped;
      progressValue.set(clamped);
    };

    const driveReel = (deltaY: number) => {
      setProgress(progressRef.current + deltaY / 1650);
    };

    const handleWheel = (event: WheelEvent) => {
      if (!isSectionMainView()) {
        setIsLocked(false);
        return;
      }

      const current = progressRef.current;
      const wantsDown = event.deltaY > 0;
      const wantsUp = event.deltaY < 0;
      const shouldLock = (wantsDown && current < 1) || (wantsUp && current > 0);

      if (!shouldLock) {
        setIsLocked(false);
        if (wantsDown && current >= 1) {
          window.scrollBy({ top: Math.min(Math.abs(event.deltaY), 90), behavior: "smooth" });
        }
        return;
      }

      event.preventDefault();
      setIsLocked(true);
      window.scrollTo({ top: getSectionTop(), behavior: "auto" });
      driveReel(event.deltaY);
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchYRef.current = event.touches[0]?.clientY ?? null;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!isSectionMainView() || touchYRef.current === null) return;
      const currentY = event.touches[0]?.clientY ?? touchYRef.current;
      const deltaY = touchYRef.current - currentY;
      const current = progressRef.current;
      const wantsDown = deltaY > 0;
      const wantsUp = deltaY < 0;
      const shouldLock = (wantsDown && current < 1) || (wantsUp && current > 0);

      if (!shouldLock) {
        setIsLocked(false);
        return;
      }

      event.preventDefault();
      setIsLocked(true);
      window.scrollTo({ top: getSectionTop(), behavior: "auto" });
      driveReel(deltaY);
      touchYRef.current = currentY;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [progressValue]);

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-screen py-6 ${isLocked ? "is-reel-locked" : ""}`}
    >
      <div className="z-10 flex min-h-screen items-center justify-center overflow-hidden px-2 md:px-4">
        <div className="relative h-[92vh] w-full max-w-[104rem] overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 shadow-2xl">
            {frames.map((frame, index) => (
              <MorphFrame
                frame={frame}
                index={index}
                key={frame.title}
                progress={scrollYProgress}
              />
            ))}

            <FloatingParticles />

            <div className="absolute inset-0 z-20 bg-gradient-to-t from-black via-transparent to-black/40" />
            <div className="absolute inset-0 z-20 bg-[linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:46px_46px] opacity-20" />

            <motion.div
              style={{ y: titleY, opacity: titleOpacity }}
              className="absolute bottom-12 left-8 right-8 z-30 md:bottom-16 md:left-16"
            >
              <p className="mb-3 text-xs uppercase tracking-[0.45em] text-orange-400">
                Interactive Hero
              </p>
              <h3 className="max-w-5xl text-4xl font-black leading-tight text-white md:text-7xl">
                A scroll-controlled intro sequence for Ayaan&apos;s portfolio.
              </h3>
            </motion.div>
            <div className="absolute right-6 top-6 z-40 rounded-full border border-white/15 bg-black/35 px-3 py-2 text-xs font-black uppercase tracking-[0.25em] text-orange-400">
              {isLocked ? "Scroll to morph" : "Enter reel"}
            </div>
        </div>
      </div>
    </section>
  );
}
