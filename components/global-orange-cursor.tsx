"use client";

import { useEffect, useState } from "react";
import { Cursor, CursorProvider } from "@/components/ui/cursor";
import { Component as MagicCursorTrail } from "@/components/ui/magic-cursor";

export function GlobalOrangeCursor() {
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const target = document.elementFromPoint(event.clientX, event.clientY);
      setIsInteractive(
        Boolean(
          target?.closest(
            'a, button, input, textarea, select, [role="button"], [data-cursor="button"]',
          ),
        ),
      );
    };

    const handlePointerLeave = () => setIsInteractive(false);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <>
      <MagicCursorTrail />
      <CursorProvider className="global-cursor-provider" aria-hidden="true">
        {!isInteractive && (
          <Cursor>
            <svg
              className="orange-cursor-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
            >
              <path
                fill="currentColor"
                d="M1.8 4.4 7 36.2c.3 1.8 2.6 2.3 3.6.8l3.9-5.7c1.7-2.5 4.5-4.1 7.5-4.3l6.9-.5c1.8-.1 2.5-2.4 1.1-3.5L5 2.5c-1.4-1.1-3.5 0-3.3 1.9Z"
              />
            </svg>
          </Cursor>
        )}
      </CursorProvider>
    </>
  );
}
