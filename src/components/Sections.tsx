"use client";

import { useEffect, useRef, useState } from "react";
import { cases, promo, services, site, wa } from "@/lib/site";
import { BeforeAfter } from "./BeforeAfter";
import { Icon } from "./Icons";

export function Services() {
  const [hover, setHover] = useState<string | null>(null);
  return (
    <div className="svc-grid">
      {services.map((s, k) => (
        <article
          key={s.id}
          className={`svc ${hover === s.id ? "on" : ""}`}
          data-reveal
          style={{ "--d": `${k * 90}ms` } as React.CSSProperties}
          onMouseEnter={() => setHover(s.id)}
          onMouseLeave={() => setHover(null)}
        >
          <div className="svc-media">
            <img src={s.img} alt={s.title} width={1100} height={1375} loading="lazy" />
            {s.video && <SvcVideo src={s.video} play={hover === s.id} />}
            <span className="svc-num">0{k + 1}</span>
          </div>
          <div className="svc-body">
            <h3>{s.title}</h3>
            <p>{s.lead}</p>
            <ul>
              {s.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <a className="svc-link" href={wa(`Здравствуйте! Интересует услуга «${s.title}». Отправляю фото.`)} target="_blank" rel="noopener noreferrer">
              Узнать стоимость <Icon name="arrowUR" size={16} />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

function SvcVideo({ src, play }: { src: string; play: boolean }) {
  const v = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const el = v.current;
    if (!el) return;
    if (play) el.play().catch(() => {});
    else el.pause();
  }, [play]);
  return <video ref={v} className={play ? "on" : ""} src={src} muted loop playsInline preload="none" aria-hidden="true" />;
}

const kinds = ["Все", "Кресло", "Стул", "Диван", "HoReCa"] as const;

export function Cases() {
  const [k, setK] = useState<(typeof kinds)[number]>("Все");
  const list = cases.filter((c) => k === "Все" || c.kind === k).filter((c) => c.id !== "floral");
  return (
    <>
      <div className="filters" role="tablist" aria-label="Тип мебели">
        {kinds.map((x) => (
          <button key={x} role="tab" aria-selected={k === x} className={k === x ? "on" : ""} onClick={() => setK(x)}>
            {x}
          </button>
        ))}
      </div>
      <div className="cases" key={k}>
        {list.map((c, i) => (
          <figure key={c.id} className="case pop" style={{ "--d": `${i * 70}ms` } as React.CSSProperties}>
            <BeforeAfter before={c.before} after={c.after} alt={c.title} />
            <figcaption>
              <span>{c.kind}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}

const types = ["Диван", "Угловой диван", "Кресло", "Стулья", "Пуф / банкетка", "Офисное кресло", "Другое"];
const works = ["Перетяжка", "Замена поролона", "Ремонт каркаса", "Изготовление на заказ", "Стеновые панели"];

export function Quote() {
  const [type, setType] = useState("Диван");
  const [work, setWork] = useState<string[]>(["Перетяжка"]);
  const [qty, setQty] = useState(1);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [pets, setPets] = useState(false);

  const msg = [
    "Здравствуйте! Хочу рассчитать стоимость.",
    `Мебель: ${type}${qty > 1 ? ` × ${qty}` : ""}`,
    `Работы: ${work.join(", ") || "—"}`,
    pets ? "Дома есть питомцы — нужна ткань «антикоготь»." : "",
    note ? `Комментарий: ${note}` : "",
    name ? `Имя: ${name}` : "",
    "Фото прикреплю в следующем сообщении.",
  ]
    .filter(Boolean)
    .join("\n");

  const toggle = (w: string) => setWork((ws) => (ws.includes(w) ? ws.filter((x) => x !== w) : [...ws, w]));

  return (
    <form
      className="quote"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(wa(msg), "_blank", "noopener,noreferrer");
      }}
    >
      <div className="q-row">
        <p className="q-label">
          <b>01</b> Что нужно обновить?
        </p>
        <div className="chips">
          {types.map((t) => (
            <button type="button" key={t} className={`chip ${type === t ? "on" : ""}`} aria-pressed={type === t} onClick={() => setType(t)}>
              {t}
            </button>
          ))}
        </div>
      </div>
      <div className="q-row">
        <p className="q-label">
          <b>02</b> Какие работы?
        </p>
        <div className="chips">
          {works.map((w) => (
            <button type="button" key={w} className={`chip ${work.includes(w) ? "on" : ""}`} aria-pressed={work.includes(w)} onClick={() => toggle(w)}>
              {work.includes(w) && <Icon name="check" size={14} />} {w}
            </button>
          ))}
        </div>
      </div>
      <div className="q-grid">
        <div className="q-row">
          <p className="q-label">
            <b>03</b> Количество
          </p>
          <div className="qty">
            <button type="button" aria-label="Меньше" onClick={() => setQty(Math.max(1, qty - 1))}>
              −
            </button>
            <span>{qty}</span>
            <button type="button" aria-label="Больше" onClick={() => setQty(Math.min(99, qty + 1))}>
              +
            </button>
          </div>
        </div>
        <label className="q-check">
          <input type="checkbox" checked={pets} onChange={(e) => setPets(e.target.checked)} />
          <span />
          Дома есть кошка или собака
        </label>
      </div>
      <div className="q-grid">
        <label className="field">
          <span>Ваше имя</span>
          <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
        </label>
        <label className="field">
          <span>Комментарий</span>
          <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="Цвет, ткань, сроки…" />
        </label>
      </div>
      <button className="btn btn-light btn-lg q-send">
        <Icon name="whatsapp" size={20} /> Отправить в WhatsApp
      </button>
      <p className="q-note">Откроется WhatsApp с готовым сообщением — останется прикрепить фото мебели. Или позвоните: {site.phone}</p>
    </form>
  );
}

export function Promo() {
  const [show, setShow] = useState(false);
  useEffect(() => setShow(Date.now() < new Date(promo.until).getTime()), []);
  if (!show) return null;
  return (
    <section className="promo">
      <div className="wrap promo-in" data-reveal>
        <div className="promo-21" aria-hidden="true">
          21
        </div>
        <div>
          <p className="eyebrow">Юбилейная акция</p>
          <h2 className="h2">{promo.title}</h2>
          <p className="promo-text">{promo.text}</p>
          <p className="promo-note">{promo.note}</p>
        </div>
        <a className="btn btn-light" href={wa(`Здравствуйте! Кодовое слово ${promo.code}. Хочу рассчитать стоимость, отправляю фото.`)} target="_blank" rel="noopener noreferrer">
          Участвовать — {promo.code}
        </a>
      </div>
    </section>
  );
}
