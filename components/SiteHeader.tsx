"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("is-locked", open);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`mast${stuck ? " is-stuck" : ""}`} id="mast">
      <div className="wrap mast__in">
        <Link className="wordmark" href="/#top" onClick={close}>
          <span
            className="wordmark__mark"
            role="img"
            aria-label="KPU FOOD logo — Himalayan food products manufacturer in Kangra"
          />
          <span className="wordmark__txt">
            <b>{site.name}</b>
            <span>{site.tagline}</span>
          </span>
        </Link>
        <nav className={`nav${open ? " is-open" : ""}`} id="nav">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              aria-current={item.href === "/blog" && pathname.startsWith("/blog") ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <a className="btn btn--amber" href={`tel:${site.phones[0].tel}`} onClick={close}>
            Call now
          </a>
        </nav>
        <button
          id="hamb"
          className={`hamb${open ? " is-open" : ""}`}
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="nav"
          onClick={() => setOpen((v) => !v)}
        >
          <i />
          <i />
          <i />
        </button>
      </div>
    </header>
  );
}
