import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, CaretDown, Globe, List, MapPin, Play, Pause, WhatsappLogo, X,
} from "@phosphor-icons/react";
import { useT, LANGS } from "@/data/kosiviraContent";
import {
  BRAND_NAME, HEADQUARTERS, HERO_IMAGE, WHATSAPP_LINK,
} from "@/data/kosiviraData";
import type { Lang } from "@/types";

const NAV: { id: string; key: string }[] = [
  { id: "home", key: "home" },
  { id: "about", key: "about" },
  { id: "businesses", key: "businesses" },
  { id: "products", key: "products" },
  { id: "leadership", key: "leadership" },
  { id: "partner", key: "partner" },
  { id: "news", key: "news" },
  { id: "contact", key: "contact" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function LanguageSwitcher() {
  const { lang, setLang, t } = useT();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  const active = LANGS.find((l) => l.code === lang);
  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={t("contact") + " language"}
        className="flex items-center gap-1.5 rounded-full border border-bronze-600/40 bg-forest-900/60 px-3 py-1.5 text-xs font-semibold text-bronze-300 transition hover:border-bronze-500 hover:bg-forest-800"
      >
        <Globe className="h-4 w-4" weight="bold" />
        <span className="uppercase">{lang}</span>
        <CaretDown className={`h-3.5 w-3.5 transition ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.16 }}
            className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-bronze-600/30 bg-forest-900 py-1 shadow-2xl shadow-black/50"
          >
            {LANGS.map((l) => (
              <li key={l.code}>
                <button
                  onClick={() => { setLang(l.code as Lang); setOpen(false); }}
                  className={`flex w-full items-center justify-between px-4 py-2 text-sm transition hover:bg-forest-700 ${
                    l.code === active?.code ? "text-bronze-300" : "text-white/80"
                  }`}
                >
                  {l.label}
                  {l.code === active?.code && <span className="h-1.5 w-1.5 rounded-full bg-bronze-400" />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

function Navbar() {
  const { t } = useT();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const go = (id: string) => { setMenu(false); scrollTo(id); };
  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-bronze-600/20 bg-forest-950/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5">
        <button onClick={() => go("home")} className="group flex items-center gap-2.5">
          <img src={`${import.meta.env.BASE_URL}kosivira-mark.svg`} alt="" className="h-9 w-9 shrink-0 rounded-md" />
          <span className="font-display text-[15px] font-bold leading-tight tracking-tight text-white">
            Kosivira <span className="text-bronze-300">Golden Horizon Company</span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className="rounded-full px-3 py-2 text-[13px] font-medium text-white/70 transition hover:bg-forest-800 hover:text-bronze-300"
            >
              {t(n.key)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <LanguageSwitcher />
          <button
            onClick={() => go("partner")}
            className="hidden rounded-full bg-gradient-to-r from-bronze-400 to-bronze-600 px-4 py-2 text-[13px] font-bold text-forest-950 shadow-lg shadow-bronze-600/20 transition hover:brightness-110 sm:block"
          >
            {t("partnerCta")}
          </button>
          <button
            onClick={() => setMenu((m) => !m)}
            aria-label="Menu"
            className="grid h-9 w-9 place-items-center rounded-md border border-bronze-600/30 bg-forest-900/60 text-bronze-300 lg:hidden"
          >
            {menu ? <X className="h-5 w-5" /> : <List className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menu && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-bronze-600/20 bg-forest-950/97 lg:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-1 px-5 py-4">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  onClick={() => go(n.id)}
                  className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-white/80 transition hover:bg-forest-800 hover:text-bronze-300"
                >
                  {t(n.key)}
                </button>
              ))}
              <button
                onClick={() => go("partner")}
                className="mt-2 rounded-full bg-gradient-to-r from-bronze-400 to-bronze-600 px-4 py-2.5 text-sm font-bold text-forest-950"
              >
                {t("partnerCta")}
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const { t } = useT();
  const [video, setVideo] = useState(false);
  const metrics = [
    { value: "20", label: "Business Sectors" },
    { value: "12+", label: "Countries & Regions" },
    { value: "100%", label: "Sustainable Focus" },
  ];
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={video ? { scale: [1, 1.08, 1] } : { scale: 1 }}
        transition={video ? { duration: 18, repeat: Infinity, ease: "easeInOut" } : { duration: 1.2 }}
      >
        <img
          src={HERO_IMAGE}
          alt="Kosivira Golden Horizon industrial conglomerate"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/85 via-forest-950/70 to-forest-950" />
      <div className="absolute inset-0 grain opacity-60" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-bronze-600/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-16 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-bronze-600/40 bg-forest-900/60 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-bronze-300 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-bronze-400" />
          {t("heroKicker")}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
          className="mt-5 max-w-4xl font-display text-[clamp(2.4rem,6vw,4.6rem)] font-extrabold leading-[1.03] tracking-tight text-white"
        >
          {t("heroTitle").split(" ").map((w, i) =>
            /Horizon|Dourado|Dorado|Doré|goldenen/.test(w) ? (
              <span key={i} className="text-gradient-gold">{w} </span>
            ) : (
              <span key={i}>{w} </span>
            )
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          {t("heroSub")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.26 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <button
            onClick={() => scrollTo("businesses")}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-bronze-400 to-bronze-600 px-6 py-3 text-sm font-bold text-forest-950 shadow-xl shadow-bronze-600/20 transition hover:brightness-110"
          >
            {t("explore")}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" weight="bold" />
          </button>
          <button
            onClick={() => scrollTo("partner")}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-bronze-500 hover:text-bronze-300"
          >
            {t("partnerCta")}
          </button>
        </motion.div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <button
            onClick={() => setVideo((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-forest-900/50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/70 backdrop-blur transition hover:text-bronze-300"
          >
            {video ? <Pause className="h-3.5 w-3.5" weight="fill" /> : <Play className="h-3.5 w-3.5" weight="fill" />}
            {video ? "Cinematic Mode: On" : "Simulate Corporate Video"}
          </button>
          {WHATSAPP_LINK && (
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-[11px] font-semibold text-emerald-300 transition hover:bg-emerald-500/20"
            >
              <WhatsappLogo className="h-4 w-4" weight="fill" /> WhatsApp Us
            </a>
          )}
        </div>

        <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-bronze-300">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-bronze-500/30 bg-forest-950/70 px-3 py-1.5">
            <MapPin className="h-4 w-4" weight="fill" /> Headquarters · {HEADQUARTERS}
          </span>
        </div>

        <div className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-8">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="font-display text-3xl font-extrabold text-bronze-300 sm:text-4xl">{m.value}</div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-white/50 sm:text-xs">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Header() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
