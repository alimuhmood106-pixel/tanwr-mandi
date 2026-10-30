import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Phone, MapPin, Navigation, Flame, Home, Wheat, Utensils, Car, Clock, X, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import hero from "@/assets/hero.jpg.asset.json";
import storefront from "@/assets/storefront.jpg.asset.json";
import interior from "@/assets/interior.jpg.asset.json";
import maqluba from "@/assets/maqluba.jpg.asset.json";
import mercedes from "@/assets/mercedes.jpg.asset.json";
import banner from "@/assets/banner.jpg.asset.json";
import {
  translations, langMeta, type Lang, PHONE_TEL, PHONE_DISPLAY, FACEBOOK_URL, INSTAGRAM_URL, MAP_LAT, MAP_LNG,
} from "@/lib/i18n";

const TITLE = "Tanwr Mandi (تەنور مەندی) | Authentic Mandi in Sulaymaniyah";
const DESC = "Yemeni-style Mandi slow-cooked in a traditional underground clay tannour. Open 24 hours on Salim Street, near Khosrow Khal Bridge, Sulaymaniyah. Call 0770 510 2000.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Tanwr Mandi (تەنور مەندی)",
  servesCuisine: ["Yemeni", "Mandi"],
  telephone: "+9647705102000",
  openingHours: "Mo-Su 00:00-23:59",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Salim Street, near Khosrow Khal Bridge, next to Dar Al-Tawadu'",
    addressLocality: "Sulaymaniyah",
    postalCode: "46001",
    addressCountry: "IQ",
  },
  geo: { "@type": "GeoCoordinates", latitude: MAP_LAT, longitude: MAP_LNG },
  sameAs: [FACEBOOK_URL, INSTAGRAM_URL],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("is-visible"), io.unobserve(e.target))),
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function LangSwitch({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="flex shrink-0 overflow-hidden rounded-full border border-border bg-card text-xs" role="group" aria-label="Language">
      {(Object.keys(langMeta) as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-2.5 py-1.5 transition-colors ${lang === l ? "bg-charcoal text-cream" : "text-foreground hover:bg-secondary"}`}
        >
          {langMeta[l].label}
        </button>
      ))}
    </div>
  );
}

function Index() {
  const [lang, setLang] = useState<Lang>("ckb");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const t = translations[lang];
  useReveal();

  useEffect(() => {
    document.documentElement.lang = langMeta[lang].htmlLang;
    document.documentElement.dir = langMeta[lang].dir;
  }, [lang]);

  const gallery = [
    { src: mercedes.url, alt: t.alt.mercedes, cls: "row-span-2" },
    { src: storefront.url, alt: t.alt.storefront, cls: "row-span-2" },
    { src: maqluba.url, alt: t.alt.maqluba, cls: "row-span-2" },
    { src: interior.url, alt: t.alt.interior, cls: "row-span-2" },
    { src: banner.url, alt: t.alt.lamb, cls: "col-span-2" },
    { src: hero.url, alt: t.alt.hero, cls: "row-span-2" },
  ];
  const dishImgs = [
    { src: mercedes.url, alt: t.alt.mercedes, pos: "object-center" },
    { src: banner.url, alt: t.alt.lamb, pos: "object-[85%_center]" },
    { src: maqluba.url, alt: t.alt.maqluba, pos: "object-bottom" },
  ];
  const whyIcons = [Flame, Home, Wheat];
  const embers = Array.from({ length: 14 });

  return (
    <div dir={langMeta[lang].dir} className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2">
          <a href="#top" className="flex min-w-0 items-center gap-2">
            <img src={logo.url} alt={t.alt.logo} className="h-11 w-11 shrink-0" />
            <span className="hidden truncate font-display text-xl sm:inline">{t.brand}</span>
          </a>
          <nav className="hidden gap-5 text-sm md:flex">
            {(["story", "menu", "gallery", "visit"] as const).map((k) => (
              <a key={k} href={`#${k}`} className="hover:text-primary">{t.nav[k]}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <LangSwitch lang={lang} setLang={setLang} />
            <a href={PHONE_TEL} className="hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-warm)] sm:inline-flex">
              <Phone className="h-4 w-4" /> {t.callNow}
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative h-[92svh] min-h-[560px] overflow-hidden bg-charcoal">
          <img src={hero.url} alt={t.alt.hero} className="animate-slow-zoom absolute inset-0 h-full w-full object-cover object-[center_60%]" fetchPriority="high" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-sunset)" }} />
          <div aria-hidden className="pointer-events-none absolute inset-0">
            {embers.map((_, i) => (
              <span key={i} className="ember-dot" style={{ left: `${20 + ((i * 47) % 60)}%`, animationDuration: `${5 + (i % 5)}s`, animationDelay: `${i * 0.6}s`, ["--dx" as string]: `${(i % 2 ? 1 : -1) * (10 + i * 3)}px` }} />
            ))}
          </div>
          <div className="relative z-10 flex h-full flex-col items-center justify-end px-5 pb-16 text-center text-cream">
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-charcoal">
              <Clock className="h-3.5 w-3.5" /> {t.open24}
            </span>
            <h1 className="font-display text-6xl leading-tight drop-shadow-lg sm:text-8xl">{t.brand}</h1>
            <p className="mt-3 max-w-xl text-lg sm:text-2xl">{t.tagline}</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href={PHONE_TEL} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-warm)] transition-transform hover:scale-105">
                <Phone className="h-5 w-5" /> {t.heroCall}
              </a>
              <a href="#visit" className="inline-flex items-center gap-2 rounded-full border-2 border-cream px-6 py-3 font-semibold text-cream transition-colors hover:bg-cream hover:text-charcoal">
                <MapPin className="h-5 w-5" /> {t.heroFind}
              </a>
            </div>
          </div>
        </section>
        <div className="keffiyeh" />

        {/* Story */}
        <section id="story" className="burlap py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
            <div className="reveal relative mx-auto h-[420px] w-full max-w-md sm:h-[500px]">
              <figure className="torn grain absolute start-0 top-0 w-[68%] rotate-[-3deg] bg-cream p-3 shadow-xl">
                <img src={storefront.url} alt={t.alt.storefront} loading="lazy" className="aspect-[3/4] w-full object-cover" />
              </figure>
              <figure className="torn grain absolute bottom-0 end-0 w-[62%] rotate-[4deg] bg-cream p-3 shadow-xl">
                <img src={interior.url} alt={t.alt.interior} loading="lazy" className="aspect-[3/4] w-full object-cover" />
              </figure>
            </div>
            <div className="reveal">
              <p className="text-sm font-semibold tracking-wider text-primary">{t.storyKicker}</p>
              <h2 className="mt-2 font-display text-4xl sm:text-5xl">{t.storyTitle}</h2>
              <p className="mt-6 text-lg leading-loose">{t.storyBody1}</p>
              <p className="mt-4 text-lg leading-loose text-muted-foreground">{t.storyBody2}</p>
            </div>
          </div>
        </section>

        {/* Dishes */}
        <section id="menu" className="py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="reveal text-center font-display text-4xl sm:text-5xl">{t.dishesTitle}</h2>
            <div className="mt-12 grid gap-7 md:grid-cols-3">
              {t.dishes.map((d, i) => (
                <article key={d.name} className="reveal overflow-hidden rounded-2xl border border-border bg-card shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-warm)]">
                  <img src={dishImgs[i]!.src} alt={dishImgs[i]!.alt} loading="lazy" className={`aspect-[4/3] w-full object-cover ${dishImgs[i]!.pos}`} />
                  <div className="p-6">
                    <h3 className="font-display text-2xl text-primary">{d.name}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{d.desc}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="reveal mt-10 flex flex-col items-center gap-4 text-center">
              <p className="text-lg">{t.menuNote}</p>
              <a href={PHONE_TEL} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-warm)]">
                <Phone className="h-5 w-5" /> {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="bg-charcoal py-20 text-cream">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="reveal text-center font-display text-4xl sm:text-5xl">{t.whyTitle}</h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {t.why.map((w, i) => {
                const Icon = whyIcons[i] ?? Flame;
                return (
                  <div key={w.t} className="reveal text-center">
                    <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-ember text-charcoal">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="mt-4 font-display text-2xl text-gold">{w.t}</h3>
                    <p className="mt-2 opacity-85">{w.d}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <div className="keffiyeh" />

        {/* Gallery */}
        <section id="gallery" className="burlap py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="reveal text-center font-display text-4xl sm:text-5xl">{t.galleryTitle}</h2>
            <div className="mt-12 grid auto-rows-[140px] grid-cols-2 gap-3 sm:auto-rows-[180px] md:grid-cols-4">
              {gallery.map((g, i) => (
                <button key={i} onClick={() => setLightbox(i)} className={`reveal group overflow-hidden rounded-xl ${g.cls}`}>
                  <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <h2 className="reveal font-display text-4xl">{t.servicesTitle}</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {[{ I: Utensils, l: t.dineIn }, { I: Car, l: t.pickup }, { I: Clock, l: t.open24 }].map(({ I, l }) => (
                <span key={l} className="reveal inline-flex items-center gap-2 rounded-full border-2 border-primary bg-card px-6 py-3 text-lg font-semibold">
                  <I className="h-5 w-5 text-primary" /> {l}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Visit */}
        <section id="visit" className="bg-card py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
            <div className="reveal">
              <h2 className="font-display text-4xl sm:text-5xl">{t.visitTitle}</h2>
              <p className="mt-6 flex gap-3 text-lg leading-relaxed"><MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />{t.address}</p>
              <p className="mt-4 flex gap-3 text-lg"><Clock className="mt-1 h-5 w-5 shrink-0 text-primary" /><span><strong>{t.hoursLabel}:</strong> {t.hours}</span></p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-xl font-bold text-primary-foreground shadow-[var(--shadow-warm)]">
                  <Phone className="h-6 w-6" /> <span dir="ltr">{PHONE_DISPLAY}</span>
                </a>
                <a href={`https://www.google.com/maps/dir/?api=1&destination=${MAP_LAT},${MAP_LNG}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-charcoal px-6 py-4 text-lg font-semibold text-cream">
                  <Navigation className="h-5 w-5" /> {t.directions}
                </a>
              </div>
            </div>
            <div className="reveal overflow-hidden rounded-2xl border-4 border-gold shadow-lg">
              <iframe
                title="Map"
                src={`https://maps.google.com/maps?q=${MAP_LAT},${MAP_LNG}&z=16&output=embed`}
                className="h-[360px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <div className="keffiyeh" />
      <footer className="bg-charcoal py-12 pb-28 text-cream md:pb-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 text-center">
          <img src={logo.url} alt={t.alt.logo} loading="lazy" className="h-20 w-20" />
          <a href={PHONE_TEL} dir="ltr" className="text-lg font-semibold text-gold">{PHONE_DISPLAY}</a>
          <p className="max-w-md opacity-80">{t.address}</p>
          <p className="opacity-80">{t.hours}</p>
          <div className="flex items-center gap-3">
            <span className="text-sm opacity-80">{t.follow}</span>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground"><Facebook className="h-5 w-5" /></a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground"><Instagram className="h-5 w-5" /></a>
          </div>
          <LangSwitch lang={lang} setLang={setLang} />
          <p className="text-sm opacity-60">{t.rights}</p>
        </div>
      </footer>

      {/* Floating call (mobile) */}
      <a href={PHONE_TEL} aria-label={t.callNow} className="fixed bottom-5 end-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-warm)] md:hidden">
        <Phone className="h-6 w-6" />
      </a>

      {/* Lightbox */}
      {lightbox !== null && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-[60] grid place-items-center bg-charcoal/95 p-4" onClick={() => setLightbox(null)}>
          <button aria-label={t.close} className="absolute end-4 top-4 rounded-full bg-cream p-2 text-charcoal" onClick={() => setLightbox(null)}>
            <X className="h-5 w-5" />
          </button>
          <img src={gallery[lightbox]!.src} alt={gallery[lightbox]!.alt} className="max-h-[90vh] max-w-full rounded-lg object-contain" />
        </div>
      )}
    </div>
  );
}
