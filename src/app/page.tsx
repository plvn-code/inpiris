import { BeforeAfter } from "@/components/BeforeAfter";
import { Logo } from "@/components/Chrome";
import { Icon } from "@/components/Icons";
import { Cases, Promo, Quote, Services } from "@/components/Sections";
import { compare, fabrics, faq, priceParts, projects, site, stats, steps, wa } from "@/lib/site";

const ticker = ["Перетяжка", "Реставрация", "Изготовление", "Мягкая мебель", "Стеновые панели", "HoReCa", "Офисные кресла"];

export default function Home() {
  return (
    <>
      {/* ——— Hero */}
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="wrap hero-in">
          <div className="hero-text">
            <p className="eyebrow hero-eb">
              <span className="dot" /> {site.city} · с {site.founded} года
            </p>
            <h1 className="hero-title">
              <span className="ln">
                <span>Вторая</span>
              </span>
              <span className="ln">
                <span>
                  жизнь <em>мягкой</em>
                </span>
              </span>
              <span className="ln">
                <span>мебели</span>
              </span>
            </h1>
            <p className="hero-lead">Перетяжка, реставрация и изготовление диванов, кресел и стульев. Забираем мебель в цех и возвращаем как новую — по договору и с гарантией 12 месяцев.</p>
            <div className="hero-cta">
              <a className="btn btn-cherry btn-lg" href={wa()} target="_blank" rel="noopener noreferrer">
                <Icon name="camera" size={20} /> Рассчитать по фото
              </a>
              <a className="btn btn-ghost btn-lg" href="#raboty">
                Смотреть работы
              </a>
            </div>
            <ul className="hero-facts">
              <li>
                <Icon name="car" size={18} /> Бесплатный выезд технолога
              </li>
              <li>
                <Icon name="scissors" size={18} /> 1500+ тканей
              </li>
              <li>
                <Icon name="shield" size={18} /> Гарантия 12 мес
              </li>
            </ul>
          </div>
          <div className="hero-ba">
            <BeforeAfter before="/img/w/ba-floral-b.webp" after="/img/w/ba-floral-after.webp" alt="Кресло с резными подлокотниками" hint eager />
            <p className="hero-ba-cap">
              <Icon name="drag" size={16} /> Потяните, чтобы сравнить
            </p>
          </div>
        </div>
        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[0, 1].map((r) => (
              <span key={r}>
                {ticker.map((t) => (
                  <span key={t + r}>
                    {t}
                    <i />
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Stats */}
      <section className="stats">
        <div className="wrap stats-in">
          {stats.map((s, k) => (
            <div key={s.t} className="stat" data-reveal style={{ "--d": `${k * 90}ms` } as React.CSSProperties}>
              <b>
                <span data-count={s.n}>{s.n}</span>
                <small>{s.s}</small>
              </b>
              <p>{s.t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ——— Services */}
      <section className="sec light" id="uslugi">
        <div className="wrap">
          <header className="sec-head" data-reveal>
            <p className="eyebrow">Услуги</p>
            <h2 className="h2">
              Всё для мягкой мебели <em>в одном цехе</em>
            </h2>
          </header>
          <Services />
          <div className="horeca" data-reveal>
            <div>
              <p className="eyebrow">Для бизнеса</p>
              <h3>Кафе, рестораны, офисы, студии</h3>
              <p>Перетяжка партий стульев и кресел, мягкие зоны и диваны для заведений, обновление офисной мебели и мобильные стеновые панели для студий съёмки.</p>
            </div>
            <a className="btn btn-dark" href={wa("Здравствуйте! Интересует работа для заведения/офиса. Отправляю фото и детали.")} target="_blank" rel="noopener noreferrer">
              Обсудить проект
            </a>
          </div>
        </div>
      </section>

      {/* ——— Before / After */}
      <section className="sec dark" id="raboty">
        <div className="wrap">
          <header className="sec-head sec-head-row" data-reveal>
            <div>
              <p className="eyebrow">Было — стало</p>
              <h2 className="h2">
                До и <em>после</em>
              </h2>
            </div>
            <p className="sec-lead">Реальные работы нашего цеха. Перетаскивайте ползунок, чтобы сравнить.</p>
          </header>
          <Cases />
          <div className="center" data-reveal>
            <a className="btn btn-ghost" href={site.instagram} target="_blank" rel="noopener noreferrer">
              <Icon name="instagram" size={18} /> Больше работ в Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ——— Process */}
      <section className="sec light" id="process">
        <div className="wrap process">
          <header className="process-head" data-reveal>
            <p className="eyebrow">Как мы работаем</p>
            <h2 className="h2">
              От фото <em>до гарантии</em>
            </h2>
            <p>Вам не нужно ничего везти и разбирать — всё делаем сами.</p>
            <div className="price-box">
              <p className="price-title">Что входит в стоимость</p>
              <ul>
                {priceParts.map((p) => (
                  <li key={p}>
                    <Icon name="check" size={16} /> {p}
                  </li>
                ))}
              </ul>
              <p className="price-note">Замена наполнителя и ремонт каркаса — обсуждаем отдельно, если они нужны.</p>
            </div>
          </header>
          <ol className="steps">
            {steps.map((s, k) => (
              <li key={s.t} data-reveal style={{ "--d": `${k * 60}ms` } as React.CSSProperties}>
                <span className="step-n">{String(k + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ——— Quote */}
      <section className="sec cherry" id="raschet">
        <div className="wrap quote-wrap">
          <header data-reveal>
            <p className="eyebrow">Расчёт за 15 минут</p>
            <h2 className="h2">Узнайте стоимость по фото</h2>
            <p>Отметьте, что нужно сделать, — мы подготовим предварительный расчёт и предложим ткани. Выезд технолога с образцами — бесплатно.</p>
            <a className="quote-phone" href={site.phoneHref}>
              {site.phone}
            </a>
          </header>
          <div data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
            <Quote />
          </div>
        </div>
      </section>

      {/* ——— Fabrics */}
      <section className="sec dark fabrics" id="tkani">
        <div className="wrap fabrics-in">
          <div className="fabrics-media" data-reveal>
            <img src="/img/w/fabric.webp" alt="Образцы мебельных тканей" width={1100} height={1375} loading="lazy" data-parallax="0.05" />
            <div className="fabrics-badge">
              <b>1500+</b>
              <span>видов тканей</span>
            </div>
          </div>
          <div>
            <header data-reveal>
              <p className="eyebrow">Ткани</p>
              <h2 className="h2">
                Подберём ткань <em>под ваш дом</em>
              </h2>
              <p className="sec-lead">Технолог привезёт крупные образцы — смотрите ткань при том освещении, где будет стоять мебель: у окна и вечером при лампе оттенок разный.</p>
            </header>
            <ul className="fabric-list">
              {fabrics.map((f, k) => (
                <li key={f.t} data-reveal style={{ "--d": `${k * 60}ms` } as React.CSSProperties}>
                  <b>{f.t}</b>
                  <span>{f.d}</span>
                </li>
              ))}
            </ul>
            <div className="details" data-reveal>
              {["detail-boucle", "detail-velour", "detail-tuft", "detail-carve"].map((d) => (
                <img key={d} src={`/img/w/${d}.webp`} alt="" width={1100} height={1375} loading="lazy" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ——— Projects */}
      <section className="sec light" id="proekty">
        <div className="wrap">
          <header className="sec-head sec-head-row" data-reveal>
            <div>
              <p className="eyebrow">Изготовление и проекты</p>
              <h2 className="h2">
                Мебель, которой <em>нет в магазинах</em>
              </h2>
            </div>
            <p className="sec-lead">По вашим эскизам, по дизайн-проекту или разработаем вместе — под размеры и интерьер, «под ключ» от идеи до установки.</p>
          </header>
          <div className="gallery">
            {projects.map((p, k) => (
              <figure key={p.img} className={`gal gal-${k % 6}`} data-reveal style={{ "--d": `${(k % 4) * 70}ms` } as React.CSSProperties}>
                <img src={p.img} alt={p.t} width={1100} height={1375} loading="lazy" />
                <figcaption>
                  <span>{p.k}</span>
                  {p.t}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Compare */}
      <section className="sec graphite">
        <div className="wrap">
          <header className="sec-head" data-reveal>
            <p className="eyebrow">Честно о перетяжке</p>
            <h2 className="h2">
              Как работают многие — <em>и как работаем мы</em>
            </h2>
          </header>
          <div className="cmp">
            <div className="cmp-head" aria-hidden="true">
              <span />
              <span>Часто бывает</span>
              <span>В IN PIRIS</span>
            </div>
            {compare.map((c, k) => (
              <div key={c.t} className="cmp-row" data-reveal style={{ "--d": `${k * 60}ms` } as React.CSSProperties}>
                <h3>{c.t}</h3>
                <p className="cmp-bad">
                  <Icon name="x" size={16} /> {c.bad}
                </p>
                <p className="cmp-good">
                  <Icon name="check" size={16} /> {c.good}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Promo />

      {/* ——— FAQ */}
      <section className="sec light" id="faq">
        <div className="wrap faq">
          <header data-reveal>
            <p className="eyebrow">Вопрос — ответ</p>
            <h2 className="h2">
              Частые <em>вопросы</em>
            </h2>
            <a className="btn btn-dark" href={wa("Здравствуйте! У меня вопрос по перетяжке.")} target="_blank" rel="noopener noreferrer">
              Задать свой вопрос
            </a>
          </header>
          <div className="faq-list">
            {faq.map((f, k) => (
              <details key={f.q} data-reveal style={{ "--d": `${k * 40}ms` } as React.CSSProperties}>
                <summary>
                  {f.q}
                  <Icon name="plus" size={18} />
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Contacts */}
      <section className="contacts" id="kontakty">
        <div className="wrap contacts-in">
          <div data-reveal>
            <p className="eyebrow">Контакты</p>
            <h2 className="h2 contacts-title">
              Пришлите фото — <em>остальное сделаем мы</em>
            </h2>
            <div className="contacts-cta">
              <a className="btn btn-cherry btn-lg" href={wa()} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={20} /> WhatsApp
              </a>
              <a className="btn btn-ghost btn-lg" href={site.phoneHref}>
                <Icon name="phone" size={18} /> Позвонить
              </a>
            </div>
          </div>
          <dl className="contacts-list" data-reveal>
            <div>
              <dt>Адрес</dt>
              <dd>
                <a href={site.map} target="_blank" rel="noopener noreferrer">
                  {site.city}, {site.address} <Icon name="arrowUR" size={14} />
                </a>
              </dd>
            </div>
            <div>
              <dt>WhatsApp</dt>
              <dd>
                <a href={wa()} target="_blank" rel="noopener noreferrer">
                  {site.whatsapp}
                </a>
              </dd>
            </div>
            <div>
              <dt>Телефон</dt>
              <dd>
                <a href={site.phoneHref}>{site.phone}</a>
              </dd>
            </div>
            <div>
              <dt>Соцсети</dt>
              <dd className="socials">
                <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
                <a href={site.threads} target="_blank" rel="noopener noreferrer">
                  Threads
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <footer className="wrap ftr">
          <Logo big />
          <p>
            © {new Date().getFullYear()} IN PIRIS. Перетяжка, реставрация и изготовление мягкой мебели в Алматы. Заявки принимаются только по контактам, указанным на этом сайте и в Instagram @in_piris.
          </p>
        </footer>
      </section>
    </>
  );
}
