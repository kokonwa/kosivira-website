import { useEffect, useMemo, useState } from "react";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";
import {
  EnvelopeSimple, Handshake, Lightbulb, MapPin, PaperPlaneTilt,
  Phone, ShieldCheck, Target, WhatsappLogo,
} from "@phosphor-icons/react";
import Header from "@/components/Header";
import BusinessesDirectory from "@/components/BusinessesDirectory";
import FutureProductsAndLeadership from "@/components/FutureProductsAndLeadership";
import PartnershipAndNews from "@/components/PartnershipAndNews";
import {
  BRAND_NAME, CONTACT_EMAIL, CONTACT_PHONES, HEADQUARTERS, WHATSAPP_LINK,
} from "@/data/kosiviraData";
import { LanguageContext, TRANSLATIONS, SectorIcon } from "@/data/kosiviraContent";
import { SOCIALS } from "@/data/kosiviraData";
import type { Lang } from "@/types";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const VALUES = [
  { icon: "ShieldCheck", title: "Integrity & Governance", text: "Every sector operates under transparent governance, ESG discipline and accountable leadership." },
  { icon: "Target", title: "Durable Prosperity", text: "We build assets that outlast cycles — water, energy, roads and skills that compound for generations." },
  { icon: "Lightbulb", title: "Innovation First", text: "From precision agritech to clean power, we deploy technology where it creates the most human value." },
  { icon: "Handshake", title: "Partnership Culture", text: "Equity, joint ventures and sponsorships are how we scale — no one builds a horizon alone." },
];

function About() {
  return (
    <section id="about" className="relative border-t border-white/5 bg-forest-900/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-bronze-400">
              <MapPin className="h-4 w-4" weight="fill" /> About {BRAND_NAME} Ltd
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,3rem)] font-extrabold leading-[1.1] text-white">
              A conglomerate engineered for <span className="text-gradient-gold">generational impact</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              {BRAND_NAME} Ltd is a multi-industry group founded by Favour Ezeonyebuchi, structured across
              twenty sectors spanning industry, energy, consumer, logistics, aviation and social welfare.
              Our thesis is simple: lasting prosperity is engineered when infrastructure, clean energy and
              human capital are built to work together.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-bronze-600/25 bg-forest-950/50 p-5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-bronze-300">Our Mission</div>
                <h3 className="mt-2 font-display text-lg font-bold text-white">Engineering the Future</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/70">
                  We develop practical, accessible products and services that improve everyday life. Across
                  technology, industry and essential services, we bring together intelligent design,
                  connectivity and responsible enterprise to solve problems people face.
                </p>
              </div>
              <div className="rounded-2xl border border-bronze-600/25 bg-forest-950/50 p-5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-bronze-300">Our Vision</div>
                <h3 className="mt-2 font-display text-lg font-bold text-white">Shaping Intelligent Living</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/70">
                  We envision a future where intelligent technology and human-centred design make everyday
                  life safer, more connected and more inclusive. From Nigeria, we aim to build a globally
                  recognised group that advances accessibility, AI and smart systems alongside the essential
                  products and services communities rely on.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.45, delay: i * 0.06 }}
                className="flex flex-col rounded-2xl border border-white/10 bg-forest-900/50 p-5 transition hover:border-bronze-600/40"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-bronze-300/20 to-forest-700 text-bronze-300">
                  <SectorIcon name={v.icon} className="h-6 w-6" weight="fill" />
                </span>
                <h3 className="mt-4 font-display text-[15px] font-bold text-white">{v.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-white/60">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { toast.error("Enter a valid email."); return; }
    setEmail("");
    toast.success("You're subscribed to the Kosivira corporate briefing.");
  };
  return (
    <form onSubmit={submit} className="flex w-full max-w-sm items-center gap-2 rounded-full border border-white/15 bg-forest-950/60 p-1.5">
      <input
        value={email} onChange={(e) => setEmail(e.target.value)}
        placeholder="Work email" aria-label="Email"
        className="min-w-0 flex-1 bg-transparent px-3 text-sm text-white placeholder-white/40 outline-none"
      />
      <button type="submit" className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-bronze-400 to-bronze-600 px-4 py-2 text-xs font-bold text-forest-950 transition hover:brightness-110">
        <PaperPlaneTilt className="h-4 w-4" weight="fill" /> Subscribe
      </button>
    </form>
  );
}

function FooterAndContact() {
  const links = [
    { id: "about", label: "About Us" }, { id: "businesses", label: "Our Businesses" },
    { id: "operations", label: "Operational Presence" }, { id: "products", label: "Future Products" }, { id: "leadership", label: "Leadership" },
    { id: "partner", label: "Partner With Us" }, { id: "impact", label: "Social Impact" },
    { id: "news", label: "Newsroom" },
  ];
  return (
    <footer id="contact" className="relative border-t border-bronze-600/20 bg-forest-950">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={`${import.meta.env.BASE_URL}kosivira-mark.svg`} alt="" className="h-10 w-10 shrink-0 rounded-md" />
              <span className="font-display text-lg font-bold text-white">{BRAND_NAME} <span className="text-bronze-300">Ltd</span></span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              A twenty-sector industrial conglomerate building the golden horizon of sustainable,
              human-centred enterprise across Africa and beyond.
            </p>
            <div className="mt-5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-bronze-400">Corporate Briefing</div>
              <div className="mt-2"><Newsletter /></div>
            </div>
          </div>

          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-bronze-400">Explore</div>
            <ul className="mt-4 space-y-2.5">
              {links.map((l) => (
                <li key={l.id}>
                  <button onClick={() => scrollTo(l.id)} className="text-sm text-white/60 transition hover:text-bronze-300">{l.label}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-bronze-400">Contact</div>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-start gap-3 transition hover:text-bronze-300">
                <EnvelopeSimple className="mt-0.5 h-5 w-5 shrink-0 text-bronze-400" weight="fill" /> {CONTACT_EMAIL}
              </a>
              {WHATSAPP_LINK && (
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="flex items-start gap-3 transition hover:text-bronze-300">
                  <WhatsappLogo className="mt-0.5 h-5 w-5 shrink-0 text-bronze-400" weight="fill" /> WhatsApp
                </a>
              )}
              {CONTACT_PHONES.map((phone) => (
                <a key={phone.href} href={phone.href} className="flex items-start gap-3 transition hover:text-bronze-300">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-bronze-400" weight="fill" /> {phone.label}
                </a>
              ))}
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-bronze-400" weight="fill" />
                <div>
                  <p className="font-semibold text-white">Headquarters</p>
                  <p>{HEADQUARTERS}</p>
                </div>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {SOCIALS.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-forest-900/60 text-white/60 transition hover:border-bronze-500/50 hover:text-bronze-300">
                  {s.name === "X" ? <span className="font-semibold" aria-hidden="true">𝕏</span> : <SectorIcon name={s.icon} className="h-5 w-5" weight="fill" />}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} {BRAND_NAME} Ltd. All rights reserved.</p>
          <div className="flex items-center gap-2 text-xs text-white/40">
            <ShieldCheck className="h-4 w-4 text-bronze-400" weight="fill" /> Confidentiality · ESG · Governance
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem("kosivira-lang") : null;
    return (saved as Lang) || "en";
  });
  const [prefillSector, setPrefillSector] = useState("");

  useEffect(() => {
    window.localStorage.setItem("kosivira-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: (key: string) => TRANSLATIONS[lang][key] ?? TRANSLATIONS.en[key] ?? key,
    }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      <div className="min-h-screen bg-forest-950 text-white">
        <Header />
        <main>
          <About />
          <section id="operations" className="border-t border-white/5 bg-forest-950 px-5 py-16 sm:py-20">
            <div className="mx-auto max-w-7xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-bronze-400">Where We Operate</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">Operational Presence</h2>
              <div className="mt-6 flex items-start gap-4 rounded-2xl border border-bronze-600/25 bg-forest-900/50 p-5 sm:p-6">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-bronze-300" weight="fill" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-xl font-bold text-white">{HEADQUARTERS}</h3>
                  <p className="mt-1 text-sm font-semibold text-bronze-300">Corporate Headquarters</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">Our base for corporate strategy, business development and partnerships.</p>
                </div>
              </div>
            </div>
          </section>
          <BusinessesDirectory onPropose={setPrefillSector} />
          <FutureProductsAndLeadership />
          <PartnershipAndNews prefill={prefillSector} />
        </main>
        <FooterAndContact />
      </div>
      <Toaster theme="dark" position="top-center" richColors toastOptions={{ style: { background: "#0a1f18", color: "#eef2ef" } }} />
    </LanguageContext.Provider>
  );
}
