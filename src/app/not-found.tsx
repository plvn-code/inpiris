import Link from "next/link";

export default function NotFound() {
  return (
    <section className="hero" style={{ minHeight: "80vh", justifyContent: "center" }}>
      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <p className="eyebrow">404</p>
        <h1 className="h2">Страница не найдена</h1>
        <p style={{ marginTop: 20, color: "var(--g-300)" }}>Возможно, ссылка устарела.</p>
        <Link href="/" className="btn btn-cherry" style={{ marginTop: 30 }}>
          На главную
        </Link>
      </div>
    </section>
  );
}
