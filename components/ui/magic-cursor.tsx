"use client";

import * as React from "react";
import { Sparkle } from "lucide-react";
import { createRoot } from "react-dom/client";
import { cn } from "@/lib/utils";

interface Point {
  x: number;
  y: number;
}

interface MouseSparklesProps {
  icon?: React.ReactNode;
  starAnimationDuration?: number;
  minimumTimeBetweenStars?: number;
  minimumDistanceBetweenStars?: number;
  glowDuration?: number;
  maximumGlowPointSpacing?: number;
  colors?: string[];
  sizes?: string[];
  className?: string;
  targetSelector?: string;
}

const Component = React.forwardRef<HTMLDivElement, MouseSparklesProps>(
  (
    {
      icon: Icon = <Sparkle className="h-full w-full" />,
      starAnimationDuration = 1500,
      minimumTimeBetweenStars = 180,
      minimumDistanceBetweenStars = 58,
      glowDuration = 75,
      maximumGlowPointSpacing = 10,
      colors = ["255 255 255", "255 90 0", "232 64 32"],
      sizes = ["1.35rem", "1rem", "0.65rem"],
      className,
      targetSelector,
    },
    ref,
  ) => {
    const configRef = React.useRef({
      starAnimationDuration,
      minimumTimeBetweenStars,
      minimumDistanceBetweenStars,
      glowDuration,
      maximumGlowPointSpacing,
      colors,
      sizes,
      animations: ["fall-1", "fall-2", "fall-3"],
    });

    const lastRef = React.useRef({
      starTimestamp: new Date().getTime(),
      starPosition: { x: 0, y: 0 },
      mousePosition: { x: 0, y: 0 },
    });

    const countRef = React.useRef(0);

    const createStar = React.useCallback(
      (position: Point) => {
        const wrapper = document.createElement("div");
        const color = selectRandom(configRef.current.colors);
        const size = selectRandom(configRef.current.sizes);

        wrapper.className = cn("mouse-sparkles-star", className);
        wrapper.style.left = `${position.x}px`;
        wrapper.style.top = `${position.y}px`;
        wrapper.style.fontSize = size;
        wrapper.style.color = `rgb(${color})`;
        wrapper.style.textShadow = `0 0 1.5rem rgb(${color} / 0.5)`;
        wrapper.style.animationName =
          configRef.current.animations[countRef.current++ % 3];
        wrapper.style.animationDuration = `${configRef.current.starAnimationDuration}ms`;

        document.body.appendChild(wrapper);

        const root = createRoot(wrapper);
        root.render(Icon);

        window.setTimeout(() => {
          root.unmount();
          wrapper.remove();
        }, configRef.current.starAnimationDuration);
      },
      [Icon, className],
    );

    const createGlowPoint = React.useCallback(
      (position: Point) => {
        const glow = document.createElement("div");
        glow.className = cn("mouse-sparkles-glow-point", className);
        glow.style.left = `${position.x}px`;
        glow.style.top = `${position.y}px`;

        document.body.appendChild(glow);
        window.setTimeout(() => glow.remove(), configRef.current.glowDuration);
      },
      [className],
    );

    const createGlow = React.useCallback(
      (last: Point, current: Point) => {
        const distance = calcDistance(last, current);
        const quantity = Math.max(
          Math.floor(distance / configRef.current.maximumGlowPointSpacing),
          1,
        );

        const dx = (current.x - last.x) / quantity;
        const dy = (current.y - last.y) / quantity;

        Array.from({ length: quantity }).forEach((_, index) => {
          createGlowPoint({ x: last.x + dx * index, y: last.y + dy * index });
        });
      },
      [createGlowPoint],
    );

    const handleOnMove = React.useCallback(
      (e: { clientX: number; clientY: number }) => {
        const mousePosition = { x: e.clientX, y: e.clientY };

        if (
          lastRef.current.mousePosition.x === 0 &&
          lastRef.current.mousePosition.y === 0
        ) {
          lastRef.current.mousePosition = mousePosition;
        }

        const now = new Date().getTime();
        const hasMovedFarEnough =
          calcDistance(lastRef.current.starPosition, mousePosition) >=
          configRef.current.minimumDistanceBetweenStars;
        const hasBeenLongEnough =
          now - lastRef.current.starTimestamp >
          configRef.current.minimumTimeBetweenStars;

        if (hasMovedFarEnough || hasBeenLongEnough) {
          createStar(mousePosition);
          lastRef.current.starTimestamp = now;
          lastRef.current.starPosition = mousePosition;
        }

        createGlow(lastRef.current.mousePosition, mousePosition);
        lastRef.current.mousePosition = mousePosition;
      },
      [createStar, createGlow],
    );

    React.useEffect(() => {
      const target = targetSelector
        ? document.querySelector(targetSelector)
        : window;
      if (!target) return;

      const handleTouchMove = (e: TouchEvent) => {
        if (e.touches[0]) handleOnMove(e.touches[0]);
      };
      const handleMouseLeave = () => {
        lastRef.current.mousePosition = { x: 0, y: 0 };
      };

      target.addEventListener("mousemove", handleOnMove as EventListener);
      target.addEventListener("touchmove", handleTouchMove as EventListener);
      target.addEventListener("mouseleave", handleMouseLeave as EventListener);

      return () => {
        target.removeEventListener("mousemove", handleOnMove as EventListener);
        target.removeEventListener("touchmove", handleTouchMove as EventListener);
        target.removeEventListener("mouseleave", handleMouseLeave as EventListener);
      };
    }, [handleOnMove, targetSelector]);

    return <div ref={ref} aria-hidden="true" />;
  },
);

export function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function selectRandom<T>(items: T[]): T {
  return items[rand(0, items.length - 1)];
}

export function calcDistance(a: Point, b: Point) {
  const diffX = b.x - a.x;
  const diffY = b.y - a.y;
  return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
}

Component.displayName = "Component";

export { Component };
