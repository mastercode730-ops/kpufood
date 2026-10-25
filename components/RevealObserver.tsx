"use client";

import { useEffect } from "react";

// Fades `.rv` elements up as they scroll into view. It uses the Web Animations API
// rather than toggling classes or inline styles, so it never changes attributes React
// renders — elements can hydrate before or after this runs without a mismatch.
// Content stays visible if JavaScript is off or the visitor prefers reduced motion.
export function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const pending = new Map<Element, Animation[]>();
    const seen = new WeakSet<Element>();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          const anims = pending.get(en.target);
          if (!en.isIntersecting || !anims) return;
          const siblings = Array.from(en.target.parentElement?.children ?? []).filter((n) => n.classList.contains("rv"));
          const delay = Math.min(siblings.indexOf(en.target) * 80, 400);
          anims.forEach((a) => {
            a.effect?.updateTiming({ delay });
            a.play();
          });
          pending.delete(en.target);
          io.unobserve(en.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );

    // Hold each new `.rv` element at its first keyframe (hidden) until it scrolls into view.
    const track = () => {
      pending.forEach((anims, el) => {
        if (el.isConnected) return;
        anims.forEach((a) => a.cancel());
        pending.delete(el);
        io.unobserve(el);
      });
      document.querySelectorAll(".rv").forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        const anims = [
          el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 850, easing: "ease", fill: "backwards" }),
          el.animate([{ transform: "translateY(26px)" }, { transform: "none" }], {
            duration: 850,
            easing: "cubic-bezier(.2,.75,.3,1)",
            fill: "backwards",
          }),
        ];
        anims.forEach((a) => a.pause());
        pending.set(el, anims);
        io.observe(el);
      });
    };
    track();

    // Pick up sections added later: client-side navigation and streamed content.
    let frame = 0;
    const mo = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(track);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io.disconnect();
      cancelAnimationFrame(frame);
      pending.forEach((anims) => anims.forEach((a) => a.cancel()));
    };
  }, []);

  return null;
}
