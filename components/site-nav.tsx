import FlowingWavesShader from "@/components/ui/flowing-waves-shader";
import { GlassEffect } from "@/components/ui/liquid-glass";
import { navItems } from "@/lib/portfolio-data";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function SiteNav() {
  return (
    <GlassEffect className="topbar-glass">
      <header className="topbar">
        <FlowingWavesShader className="nav-waves" intensity={0.52} />
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
      </header>
    </GlassEffect>
  );
}
