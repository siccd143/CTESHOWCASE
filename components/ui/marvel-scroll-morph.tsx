"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  type MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const crownfallFrames = [
  {
    title: "Emberclaw",
    subtitle: "Crownfall boss encounter",
    gradient: "linear-gradient(135deg, #ff5a00 0%, #641b14 42%, #000 100%)",
    pattern:
      "radial-gradient(circle at 30% 30%, rgba(255,255,255,.35), transparent 12%), radial-gradient(circle at 70% 60%, rgba(255,255,255,.18), transparent 10%)",
    image: "/images/showcase/crownfall-emberclaw.png",
  },
  {
    title: "Crownfall",
    subtitle: "Fantasy build spaces",
    gradient: "linear-gradient(135deg, #8a2118 0%, #1f1110 48%, #000 100%)",
    pattern:
      "linear-gradient(120deg, rgba(255,255,255,.26) 0 2px, transparent 2px 22px)",
    image: "/images/showcase/crownfall-castle.png",
  },
  {
    title: "Chromoknight",
    subtitle: "Custom enemy identity",
    gradient: "linear-gradient(135deg, #d7c3a1 0%, #6b5f4e 44%, #000 100%)",
    pattern:
      "linear-gradient(45deg, rgba(255,255,255,.2) 0 1px, transparent 1px 18px)",
    image: "/images/showcase/crownfall-chromoknight.png",
  },
];

const autoFlashFrames = [
  {
    title: "Exploration Bot",
    subtitle: "Hands-on robot build and testing",
    gradient: "linear-gradient(135deg, #ff5a00 0%, #e84020 42%, #000 100%)",
    pattern:
      "radial-gradient(circle at 30% 30%, rgba(255,255,255,.35), transparent 12%), radial-gradient(circle at 70% 60%, rgba(255,255,255,.18), transparent 10%)",
    image: "/images/showcase/explorationbotimg1.jpg",
  },
  {
    title: "Team 1318",
    subtitle: "Competition robot engineering",
    gradient: "linear-gradient(135deg, #f0efeb 0%, #e84020 38%, #000 100%)",
    pattern:
      "linear-gradient(120deg, rgba(255,255,255,.26) 0 2px, transparent 2px 22px)",
    image: "/images/showcase/frc1318currentyearimg.webp",
  },
  {
    title: "Custom Mod",
    subtitle: "Minecraft modded experience",
    gradient: "linear-gradient(135deg, #e84020 0%, #5c170c 44%, #000 100%)",
    pattern:
      "linear-gradient(45deg, rgba(255,255,255,.2) 0 1px, transparent 1px 18px)",
    image: "/images/showcase/mcimg2.jpeg",
  },
  {
    title: "YOLO 26 Training",
    subtitle: "Computer vision accessibility model",
    gradient: "linear-gradient(135deg, #111 0%, #ff5a00 44%, #000 100%)",
    pattern:
      "radial-gradient(circle at 20% 70%, rgba(255,255,255,.25), transparent 14%), radial-gradient(circle at 80% 20%, rgba(255,255,255,.16), transparent 12%)",
    image: "/images/showcase/yolo26modeltrainingimg.webp",
  },
];

function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden">
      {Array.from({ length: 18 }).map((_, i) => (
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
            duration: 2.4 + (i % 5) * 0.35,
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
  frame: (typeof crownfallFrames)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const start = index / crownfallFrames.length;
  const peak = (index + 0.5) / crownfallFrames.length;
  const end = (index + 1) / crownfallFrames.length;

  const opacity = useTransform(
    progress,
    index === 0
      ? [0, peak, end]
      : index === crownfallFrames.length - 1
        ? [start, peak, 1]
        : [start, peak, end],
    index === 0
      ? [1, 1, 0]
      : index === crownfallFrames.length - 1
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

export function FlashFramePreview() {
  const [activeFrame, setActiveFrame] = useState(0);

  useEffect(() => {
    const frameTimer = window.setInterval(() => {
      setActiveFrame((current) => (current + 1) % autoFlashFrames.length);
    }, 500);

    return () => window.clearInterval(frameTimer);
  }, []);

  const frame = autoFlashFrames[activeFrame];

  return (
    <section className="flash-preview-section px-4 py-20 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flash-preview-reel">
          {autoFlashFrames.map((previewFrame, index) => (
            <motion.div
              aria-hidden={index !== activeFrame}
              className="flash-preview-frame"
              initial={false}
              key={previewFrame.title}
              animate={{
                opacity: index === activeFrame ? 1 : 0,
                scale: index === activeFrame ? 1 : 1.08,
                filter: index === activeFrame ? "blur(0px)" : "blur(12px)",
              }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <div
                className="absolute inset-0"
                style={{ background: previewFrame.gradient }}
              />
              <div
                className="absolute inset-0 opacity-40"
                style={{ backgroundImage: previewFrame.pattern }}
              />
              <img
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                src={previewFrame.image}
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </motion.div>
          ))}

          <div className="flash-preview-scan" />
          <div className="flash-preview-grid" />
          <FloatingParticles />

          <div className="flash-preview-copy">
            <span>{String(activeFrame + 1).padStart(2, "0")}</span>
            <h3>{frame.title}</h3>
            <p>{frame.subtitle}</p>
          </div>

          <div className="flash-preview-ticks" aria-hidden="true">
            {autoFlashFrames.map((previewFrame, index) => (
              <span
                className={index === activeFrame ? "is-active" : ""}
                key={previewFrame.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MarvelScrollMorph() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const progressRef = useRef(0);
  const lockRef = useRef(false);
  const touchYRef = useRef<number | null>(null);
  const progressValue = useMotionValue(0);
  const scrollYProgress = useSpring(progressValue, {
    stiffness: 80,
    damping: 34,
    mass: 0.32,
  });
  const [isLocked, setIsLocked] = useState(false);

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
      setProgress(progressRef.current + deltaY / 1900);
    };

    const setLocked = (locked: boolean) => {
      lockRef.current = locked;
      setIsLocked(locked);
    };

    const handleWheel = (event: WheelEvent) => {
      if (!isSectionMainView()) {
        setLocked(false);
        return;
      }

      const current = progressRef.current;
      const wantsDown = event.deltaY > 0;
      const wantsUp = event.deltaY < 0;
      const shouldLock = (wantsDown && current < 1) || (wantsUp && current > 0);

      if (!shouldLock) {
        setLocked(false);
        return;
      }

      event.preventDefault();
      if (!lockRef.current) {
        window.scrollTo({ top: getSectionTop(), behavior: "auto" });
      }
      setLocked(true);
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
        setLocked(false);
        return;
      }

      event.preventDefault();
      if (!lockRef.current) {
        window.scrollTo({ top: getSectionTop(), behavior: "auto" });
      }
      setLocked(true);
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
    <>
      <section
        ref={sectionRef}
        className={`relative min-h-screen ${isLocked ? "is-reel-locked" : ""}`}
      >
        <div className="z-10 flex h-screen items-center justify-center overflow-hidden px-2 md:px-6">
          <div className="relative h-[86vh] w-full max-w-[96rem] overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/5 shadow-2xl">
            {crownfallFrames.map((frame, index) => (
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

            <div className="absolute right-6 top-6 z-40 rounded-full border border-white/15 bg-black/35 px-3 py-2 text-xs font-black uppercase tracking-[0.25em] text-orange-400">
              {isLocked ? "Scroll to morph" : "Enter reel"}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
