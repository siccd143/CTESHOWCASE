"use client";

import { useEffect, useState } from "react";
import { GlassEffect } from "@/components/ui/liquid-glass";
import { navItems } from "@/lib/portfolio-data";
import { ArrowRight, Settings, Sparkles } from "lucide-react";
import Link from "next/link";

const CUSTOM_CURSOR_KEY = "customCursorEnabled";

function readCursorPreference() {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(CUSTOM_CURSOR_KEY) === "true";
}

export function SiteNav() {
  const [customCursorEnabled, setCustomCursorEnabled] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    setCustomCursorEnabled(readCursorPreference());
  }, []);

  const toggleCustomCursor = () => {
    const nextValue = !customCursorEnabled;
    setCustomCursorEnabled(nextValue);
    window.localStorage.setItem(CUSTOM_CURSOR_KEY, String(nextValue));
    window.dispatchEvent(
      new CustomEvent("custom-cursor-preference-change", {
        detail: { enabled: nextValue },
      }),
    );
  };

  return (
    <GlassEffect className="topbar-glass">
      <header className="topbar">
        <Link className="brand" href="/" aria-label="Ayaan Bijinemula home">
          <span className="brand-mark">
            <Sparkles size={18} />
          </span>
          <span>Ayaan Bijinemula</span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="nav-action" href="/achievements">
          Explore <ArrowRight size={16} />
        </Link>
        <div className="nav-settings">
          <button
            aria-expanded={settingsOpen}
            aria-label="Open display settings"
            className="nav-icon-button"
            onClick={() => setSettingsOpen((isOpen) => !isOpen)}
            type="button"
          >
            <Settings size={18} />
          </button>
          {settingsOpen && (
            <div className="nav-settings-panel">
              <p>Display settings</p>
              <div>
                <span>Orange cursor</span>
                <small>{customCursorEnabled ? "Enabled" : "Disabled"}</small>
              </div>
              <button
                aria-pressed={customCursorEnabled}
                className="settings-switch"
                onClick={toggleCustomCursor}
                type="button"
              >
                <span />
              </button>
            </div>
          )}
        </div>
      </header>
    </GlassEffect>
  );
}
