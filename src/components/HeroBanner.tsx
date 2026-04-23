"use client";

export default function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-banner__overlay" />
      <img
        className="hero-banner__image"
        src="/hero.png"
        alt="YGNTECH Teknik Servis"
        onError={(e) => {
          const img = e.currentTarget;
          img.style.display = "none";
          img.nextElementSibling?.classList.add(
            "is-visible",
          );
        }}
      />
      <div
        className="hero-banner__placeholder"
        aria-hidden="true"
      />
    </section>
  );
}
