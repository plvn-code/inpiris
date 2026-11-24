"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site, wa } from "@/lib/site";
import { Icon } from "./Icons";

export function Logo({ big }: { big?: boolean }) {
  return (
    <Link href="/" className={`logo ${big ? "logo-big" : ""}`} aria-label="IN PIRIS — на главную">
      <span className="logo-word">
        IN
        <svg className="logo-slash" viewBox="0 0 40 80" aria-hidden="true">
          <path d="M33 2 9 44l12 2L6 78l28-42-12-2z" />
        </svg>
        PIRIS
      </span>
      <small>мебельная компания</small>
    </Link>
  );
}

const nav = [
  ["#uslugi", "Услуги"],
  ["#raboty", "До / После"],
  ["#process", "Как работаем"],
  ["#tkani", "Ткани"],
  ["#proekty", "Проекты"],
  ["#kontakty", "Контакты"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = scrollY;
    const on = () => {
      const y = scrollY;
      setSolid(y > 30);
      if (y > 400 && y > last + 4) setHidden(true);
      else if (y < last - 4) setHidden(false);
      last = y;
    };
    on();
    addEventListener("scroll", on, { passive: true });
    return () => removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("lock", open);
  }, [open]);

  return (
    <>
      <header className={`hdr ${solid ? "solid" : ""} ${hidden && !open ? "hide" : ""}`}>
        <div className="wrap hdr-in">
          <Logo />
          <nav className="hdr-nav" aria-label="Разделы">
            {nav.map(([h, t]) => (
              <a key={h} href={`/${h}`}>
                {t}
              </a>
            ))}
          </nav>
          <div className="hdr-r">
            <a className="hdr-phone" href={site.phoneHref}>
              {site.phone}
            </a>
            <a className="btn btn-cherry btn-sm hdr-cta" href={wa()} target="_blank" rel="noopener noreferrer">
              Расчёт по фото
            </a>
            <button className="burger" aria-label="Меню" aria-expanded={open} onClick={() => setOpen(!open)}>
              <i />
              <i />
            </button>
          </div>
        </div>
      </header>
      <div className={`mmenu ${open ? "open" : ""}`} aria-hidden={!open}>
        <nav className="wrap mmenu-in" aria-label="Меню">
          {nav.map(([h, t], k) => (
            <a key={h} href={`/${h}`} onClick={() => setOpen(false)} style={{ "--d": `${80 + k * 50}ms` } as React.CSSProperties} tabIndex={open ? 0 : -1}>
              <span>0{k + 1}</span>
              {t}
            </a>
          ))}
          <div className="mmenu-foot">
            <a href={wa()} className="btn btn-cherry" target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>
              <Icon name="whatsapp" /> Написать в WhatsApp
            </a>
            <a href={site.phoneHref} tabIndex={open ? 0 : -1}>
              {site.phone}
            </a>
            <span>
              {site.city}, {site.address}
            </span>
          </div>
        </nav>
      </div>
    </>
  );
}

export function MobileBar() {
  return (
    <div className="mbar">
      <a href={site.phoneHref} className="mbar-call">
        <Icon name="phone" size={18} /> Позвонить
      </a>
      <a href={wa()} target="_blank" rel="noopener noreferrer" className="mbar-wa">
        <Icon name="whatsapp" size={18} /> Расчёт по фото
      </a>
    </div>
  );
}
