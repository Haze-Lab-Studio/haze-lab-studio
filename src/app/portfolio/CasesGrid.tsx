"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { cormorant } from "../fonts";
import type { CaseStudy } from "./data";

export default function CasesGrid({ cases }: { cases: CaseStudy[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const activeCaseIndex = cases.findIndex((c) => c.id === activeId);
  const active = activeCaseIndex !== -1 ? cases[activeCaseIndex] : null;
  const lightboxImage =
    active && lightboxIndex !== null ? active.gallery[lightboxIndex] : null;

  const closeModal = () => {
    setLightboxIndex(null);
    setActiveId(null);
  };

  const showNext = useCallback(() => {
    if (!active) return;
    setLightboxIndex((i) => (i === null ? i : (i + 1) % active.gallery.length));
  }, [active]);

  const showPrev = useCallback(() => {
    if (!active) return;
    setLightboxIndex((i) =>
      i === null ? i : (i - 1 + active.gallery.length) % active.gallery.length
    );
  }, [active]);

  const nextCase = useCallback(() => {
    if (activeCaseIndex === -1) return;
    setLightboxIndex(null);
    setActiveId(cases[(activeCaseIndex + 1) % cases.length].id);
  }, [cases, activeCaseIndex]);

  const prevCase = useCallback(() => {
    if (activeCaseIndex === -1) return;
    setLightboxIndex(null);
    setActiveId(cases[(activeCaseIndex - 1 + cases.length) % cases.length].id);
  }, [cases, activeCaseIndex]);

  useEffect(() => {
    if (!active) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxIndex !== null) {
          setLightboxIndex(null);
        } else {
          setActiveId(null);
        }
      } else if (e.key === "ArrowRight") {
        if (lightboxIndex !== null) {
          showNext();
        } else {
          nextCase();
        }
      } else if (e.key === "ArrowLeft") {
        if (lightboxIndex !== null) {
          showPrev();
        } else {
          prevCase();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
    };
  }, [active, lightboxIndex, showNext, showPrev, nextCase, prevCase]);

  return (
    <>
      <div className="case-grid">
        {cases.map((c) => (
          <button
            key={c.id}
            type="button"
            className="case-card"
            onClick={() => setActiveId(c.id)}
            aria-haspopup="dialog"
          >
            <Image
              src={c.cover}
              alt={c.title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="case-card-image"
            />
            <span className="case-card-hover">{c.hoverNote}</span>
            <span className={`${cormorant.className} case-card-title`}>
              {c.title}
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="case-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={closeModal}
        >
          <div className="case-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="case-modal-close"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>
            {cases.length > 1 && (
              <span className="case-modal-counter">
                {activeCaseIndex + 1} / {cases.length}
              </span>
            )}
            <h3 className={`${cormorant.className} case-modal-title`}>
              {active.title}
            </h3>
            <p className="case-modal-credit">{active.credit}</p>
            {active.description.map((paragraph, i) => (
              <p key={i} className="case-modal-description">
                {paragraph}
              </p>
            ))}
            {active.links && active.links.length > 0 && (
              <div className="case-modal-links">
                {active.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-modal-link"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            )}
            <div className="case-modal-gallery">
              {active.gallery.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  className="case-modal-gallery-item"
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`View full image: ${img.alt}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 768px) 45vw, 90vw"
                  />
                </button>
              ))}
            </div>
          </div>
          {cases.length > 1 && (
            <>
              <button
                type="button"
                className="lightbox-nav lightbox-nav-prev"
                onClick={(e) => {
                  e.stopPropagation();
                  prevCase();
                }}
                aria-label="Previous case"
              >
                ‹
              </button>
              <button
                type="button"
                className="lightbox-nav lightbox-nav-next"
                onClick={(e) => {
                  e.stopPropagation();
                  nextCase();
                }}
                aria-label="Next case"
              >
                ›
              </button>
            </>
          )}
        </div>
      )}

      {lightboxImage && active && (
        <div
          className="lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxImage.alt}
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
          >
            ×
          </button>
          {active.gallery.length > 1 && (
            <>
              <button
                type="button"
                className="lightbox-nav lightbox-nav-prev"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                type="button"
                className="lightbox-nav lightbox-nav-next"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                aria-label="Next image"
              >
                ›
              </button>
            </>
          )}
          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
          {active.gallery.length > 1 && (
            <span className="lightbox-counter">
              {lightboxIndex! + 1} / {active.gallery.length}
            </span>
          )}
        </div>
      )}
    </>
  );
}
