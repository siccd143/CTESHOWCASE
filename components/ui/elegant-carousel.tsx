"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface ElegantSlide {
  title: string;
  subtitle: string;
  description: string;
  accent: string;
  imageUrl: string;
}

type ElegantCarouselProps = {
  slides: ElegantSlide[];
};

export default function ElegantCarousel({ slides }: ElegantCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slideDuration = 6000;
  const transitionDuration = 800;

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentIndex) return;
      setIsTransitioning(true);
      setProgress(0);

      setTimeout(() => {
        setCurrentIndex(index);
        setTimeout(() => setIsTransitioning(false), 50);
      }, transitionDuration / 2);
    },
    [isTransitioning, currentIndex],
  );

  const goNext = useCallback(() => {
    goToSlide((currentIndex + 1) % slides.length);
  }, [currentIndex, goToSlide, slides.length]);

  const goPrev = useCallback(() => {
    goToSlide((currentIndex - 1 + slides.length) % slides.length);
  }, [currentIndex, goToSlide, slides.length]);

  useEffect(() => {
    if (isPaused) return;

    progressRef.current = setInterval(() => {
      setProgress((prev) =>
        prev >= 100 ? 100 : prev + 100 / (slideDuration / 50),
      );
    }, 50);

    intervalRef.current = setInterval(goNext, slideDuration);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [currentIndex, isPaused, goNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 60) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  const currentSlide = slides[currentIndex];

  return (
    <div
      className="carousel-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="carousel-bg-wash"
        style={{
          background: `radial-gradient(ellipse at 70% 50%, ${currentSlide.accent}28 0%, transparent 70%)`,
        }}
      />

      <div className="carousel-inner">
        <div className="carousel-content">
          <div className="carousel-content-inner">
            <div
              className={`carousel-collection-num ${
                isTransitioning ? "transitioning" : "visible"
              }`}
            >
              <span className="carousel-num-line" />
              <span className="carousel-num-text">
                {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </span>
            </div>

            <h2
              className={`carousel-title ${
                isTransitioning ? "transitioning" : "visible"
              }`}
            >
              {currentSlide.title}
            </h2>

            <p
              className={`carousel-subtitle ${
                isTransitioning ? "transitioning" : "visible"
              }`}
              style={{ color: currentSlide.accent }}
            >
              {currentSlide.subtitle}
            </p>

            <p
              className={`carousel-description ${
                isTransitioning ? "transitioning" : "visible"
              }`}
            >
              {currentSlide.description}
            </p>

            <div className="carousel-nav-arrows">
              <button onClick={goPrev} className="carousel-arrow-btn" aria-label="Previous slide">
                <ArrowLeft size={20} />
              </button>
              <button onClick={goNext} className="carousel-arrow-btn" aria-label="Next slide">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="carousel-image-container">
          <div
            className={`carousel-image-frame ${
              isTransitioning ? "transitioning" : "visible"
            }`}
          >
            <img
              src={currentSlide.imageUrl}
              alt={currentSlide.title}
              className="carousel-image"
            />
            <div
              className="carousel-image-overlay"
              style={{
                background: `linear-gradient(135deg, ${currentSlide.accent}35 0%, transparent 50%)`,
              }}
            />
          </div>
          <div
            className="carousel-frame-corner carousel-frame-corner--tl"
            style={{ borderColor: currentSlide.accent }}
          />
          <div
            className="carousel-frame-corner carousel-frame-corner--br"
            style={{ borderColor: currentSlide.accent }}
          />
        </div>
      </div>

      <div className="carousel-progress-bar">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            onClick={() => goToSlide(index)}
            className={`carousel-progress-item ${
              index === currentIndex ? "active" : ""
            }`}
            aria-label={`Go to ${slide.title}`}
          >
            <div className="carousel-progress-track">
              <div
                className="carousel-progress-fill"
                style={{
                  width:
                    index === currentIndex
                      ? `${progress}%`
                      : index < currentIndex
                        ? "100%"
                        : "0%",
                  backgroundColor:
                    index === currentIndex ? currentSlide.accent : undefined,
                }}
              />
            </div>
            <span className="carousel-progress-label">{slide.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
