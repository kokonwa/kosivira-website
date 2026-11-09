import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, CheckCircle, EnvelopeSimple, HandHeart, Handshake,
  MapPin, Megaphone, Phone, WhatsappLogo, X,
} from "@phosphor-icons/react";
import {
  BUSINESS_AREAS, CONTACT_EMAIL, CONTACT_PHONES, HEADQUARTERS, PARTNERSHIP_TYPES,
  SOCIALS, WHATSAPP_LINK,
} from "@/data/kosiviraData";
import { NEWS, useT } from "@/data/kosiviraContent";
import type { InquiryFormData, NewsArticle } from "@/types";

const EMPTY: InquiryFormData = {
  name: "", email: "", company: "", country: "", sector: "", type: "", message: "",
};

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[12px] font-semibold uppercase tracking-wider text-white/50">{label}</span>
      {children}
    </label>
  );
}

const inputCls =
  "w-full rounded-xl border border-white/10 bg-forest-950/60 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none transition focus:border-bronze-500 focus:ring-2 focus:ring-bronze-500/30";

function ContactCard({ label, value, href, icon, external, children }: {
  label: string;
  value: string;
  href?: string;
  icon: React.ReactNode;
  external?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-forest-900/40 p-4">
      <span aria-hidden="true" className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-forest-950/60 text-xl text-bronze-300">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-white/60">{label}</p>
        {href ? (
          <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}
            className="mt-1 inline-block break-all font-semibold text-white transition hover:text-bronze-300">
            {value}
          </a>
        ) : <p className="mt-1 font-semibold text-white">{value}</p>}
        {children}
      </div>
    </div>
  );
}

function PartnershipForm({ prefill }: { prefill: string }) {
  const { t } = useT();
  const [data, setData] = useState<InquiryFormData>(EMPTY);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    if (prefill) setData((d) => ({ ...d, sector: prefill }));
  }, [prefill]);

  const set = (k: keyof InquiryFormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setData((d) => ({ ...d, [k]: e.target.value }));

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    const fields = new FormData(event.currentTarget);
    if (fields.get("_honey")) return;

    setStatus("sending");
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(fields)),
        redirect: "error",
        signal: AbortSignal.timeout(20000),
      });
      const result = await response.json();
      if (!response.ok || (result?.success !== true && result?.success !== "true")) {
        setStatus("error");
        return;
      }
      setData(EMPTY);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="partner" className="relative border-t border-white/5 bg-forest-950 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-bronze-400">
              <Handshake className="h-4 w-4" weight="fill" /> {t("partner")}
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,3rem)] font-extrabold leading-tight text-white">
              Build the Horizon <span className="text-gradient-gold">With Us</span>
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/65">
              We welcome equity partners, joint ventures, suppliers, distributors and philanthropic sponsors
              across all twenty sectors. Tell us where you want to contribute and our group leadership will
              be in touch.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 space-y-3">
              {CONTACT_PHONES.map((phone) => (
                <ContactCard key={phone.href} label="Phone" value={phone.label} href={phone.href} icon={<Phone weight="fill" />} />
              ))}
              <ContactCard label="Email" value={CONTACT_EMAIL} href={`mailto:${CONTACT_EMAIL}`} icon={<EnvelopeSimple weight="fill" />} />
              {WHATSAPP_LINK && (
                <ContactCard label="WhatsApp" value="Chat on WhatsApp" href={WHATSAPP_LINK} icon={<WhatsappLogo weight="fill" />} external />
              )}
              <ContactCard label="Headquarters" value={HEADQUARTERS} icon={<MapPin weight="fill" />} />
              <div className="flex flex-wrap gap-2 pt-2" aria-label="Social media">
                {SOCIALS.map((social) => (
                  <a key={social.name} href={social.url} target="_blank" rel="noreferrer"
                    className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-white/75 transition hover:text-bronze-300">
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <form onSubmit={submit} className="rounded-3xl border border-bronze-600/25 bg-gradient-to-br from-forest-900 to-forest-800 p-6 shadow-2xl shadow-black/40 sm:p-8">
            <input type="hidden" name="_subject" value="New Kosivira partnership inquiry" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" hidden tabIndex={-1} autoComplete="off" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Full Name *"><input className={inputCls} name="name" autoComplete="name" required value={data.name} onChange={set("name")} placeholder="Jane Doe" /></Field>
              <Field label="Email *"><input className={inputCls} name="email" type="email" autoComplete="email" required value={data.email} onChange={set("email")} placeholder="jane@company.com" /></Field>
              <Field label="Company"><input className={inputCls} name="company" autoComplete="organization" value={data.company} onChange={set("company")} placeholder="Company / Fund" /></Field>
              <Field label="Country"><input className={inputCls} name="country" autoComplete="country-name" value={data.country} onChange={set("country")} placeholder="Nigeria" /></Field>
              <Field label="Sector">
                <select className={inputCls} name="sector" value={data.sector} onChange={set("sector")}>
                  <option value="">Select sector…</option>
                  {BUSINESS_AREAS.map((b) => (<option key={b.id} value={b.title}>{b.title}</option>))}
                </select>
              </Field>
              <Field label="Partnership Type">
                <select className={inputCls} name="partnership_type" value={data.type} onChange={set("type")}>
                  <option value="">Select type…</option>
                  {PARTNERSHIP_TYPES.map((p) => (<option key={p} value={p}>{p}</option>))}
                </select>
              </Field>
            </div>
            <div className="mt-4">
              <Field label="Message *">
                <textarea className={`${inputCls} min-h-28 resize-y`} name="message" required value={data.message} onChange={set("message")} placeholder="Describe your proposal, investment range or collaboration…" />
              </Field>
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-bronze-400 to-bronze-600 px-6 py-3.5 text-sm font-bold text-forest-950 transition hover:brightness-110 disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Submit Partnership Inquiry"} <ArrowRight className="h-4 w-4" weight="bold" />
            </button>
            <div role="status" className="mt-3 text-sm" aria-live="polite">
              {status === "sent" && <p className="text-emerald-300">Thank you. Your inquiry was submitted.</p>}
              {status === "error" && (
                <p className="text-rose-300">
                  We couldn’t confirm your submission. Please try again or email{" "}
                  <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                </p>
              )}
            </div>
            <p className="mt-3 text-center text-[11px] text-white/60">
              Your inquiry is sent to Kosivira by email through FormSubmit.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function SocialImpact() {
  const { t } = useT();
  const impact = BUSINESS_AREAS.find((b) => b.id === "children")!;
  return (
    <section id="impact" className="relative border-t border-white/5 bg-forest-900/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          <Reveal>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-bronze-400">
              <HandHeart className="h-4 w-4" weight="fill" /> {t("impact")}
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,3rem)] font-extrabold leading-tight text-white">
              The Kosivira <span className="text-gradient-gold">Children's Foundation</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/65">{impact.detail}</p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {impact.metrics.concat([{ label: "Reunified / Year", value: "240" }]).map((m) => (
                <div key={m.label} className="rounded-2xl border border-bronze-600/20 bg-forest-950/50 p-4">
                  <div className="font-display text-2xl font-extrabold text-bronze-300">{m.value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-white/50">{m.label}</div>
                </div>
              ))}
            </div>
            <button onClick={() => scrollTo("partner")} className="mt-6 inline-flex items-center gap-2 rounded-full border border-bronze-500/40 px-5 py-3 text-sm font-bold text-bronze-300 transition hover:bg-bronze-500/10">
              Sponsor a Child / Fund the Foundation <ArrowRight className="h-4 w-4" weight="bold" />
            </button>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative h-full min-h-64 overflow-hidden rounded-3xl border border-white/10">
              <img src={impact.image} alt="Kosivira Children's Foundation" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-2xl bg-forest-950/70 p-4 backdrop-blur">
                <div className="font-display text-lg font-bold text-white">Education · Health · Safeguarding</div>
                <div className="text-[13px] text-white/70">Welfare homes, schooling and family reunification.</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ArticleModal({ article, onClose }: { article: NewsArticle; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-end justify-center bg-forest-950/80 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-t-3xl border border-bronze-600/25 bg-forest-900 shadow-2xl sm:rounded-3xl"
      >
        <div className="relative h-48 overflow-hidden">
          <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-900 to-transparent" />
          <button onClick={onClose} className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-forest-950/70 text-white" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wider text-bronze-400">
            <span>{article.category}</span><span className="text-white/30">·</span><span>{article.date}</span>
          </div>
          <h3 className="mt-2 font-display text-2xl font-bold text-white">{article.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/75">{article.body}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function NewsHub() {
  const { t } = useT();
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<NewsArticle | null>(null);
  const cats = useMemo(() => ["All", ...Array.from(new Set(NEWS.map((n) => n.category)))], []);
  const list = filter === "All" ? NEWS : NEWS.filter((n) => n.category === filter);

  return (
    <section id="news" className="relative border-t border-white/5 bg-forest-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-bronze-400">
              <Megaphone className="h-4 w-4" weight="fill" /> {t("news")}
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,3rem)] font-extrabold text-white">
              Corporate <span className="text-gradient-gold">Newsroom</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button key={c} onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition ${
                filter === c ? "border-bronze-500 bg-bronze-500/15 text-bronze-300" : "border-white/10 bg-forest-900/60 text-white/55 hover:text-white"
              }`}>
              {c === "All" ? t("all") : c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((n, i) => (
            <Reveal key={n.id} delay={i * 0.04}>
              <article onClick={() => setOpen(n)} className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-forest-900/50 transition hover:border-bronze-600/50 hover:shadow-xl hover:shadow-black/40">
                <div className="relative h-44 overflow-hidden">
                  <img src={n.image} alt={n.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <span className="absolute left-3 top-3 rounded-full bg-forest-950/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-bronze-300 backdrop-blur">{n.category}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2 text-[11px] text-white/40">
                    <CheckCircle className="h-3.5 w-3.5 text-emerald-400" weight="fill" /> {n.date}
                  </div>
                  <h3 className="mt-2 font-display text-[15px] font-bold leading-snug text-white group-hover:text-bronze-300">{n.title}</h3>
                  <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-white/55">{n.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-3 text-xs font-semibold text-bronze-400 transition group-hover:gap-2">
                    Read article <ArrowRight className="h-3.5 w-3.5" weight="bold" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Ad placeholder slots */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {["Investor Briefing", "Sector Spotlight", "Foundation Appeal"].map((label) => (
            <div key={label} className="flex h-28 items-center justify-center rounded-2xl border border-dashed border-white/15 bg-forest-900/30 text-[11px] font-semibold uppercase tracking-wider text-white/30">
              Sponsored · {label}
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && <ArticleModal article={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </section>
  );
}

export default function PartnershipAndNews({ prefill }: { prefill: string }) {
  return (
    <>
      <PartnershipForm prefill={prefill} />
      <SocialImpact />
      <NewsHub />
    </>
  );
}
