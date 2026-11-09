import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle, Cube, Sparkle, Star, Users,
} from "@phosphor-icons/react";
import { BOARD, FOUNDER, FUTURE_PRODUCTS, TIMELINE, useT } from "@/data/kosiviraContent";

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

export default function FutureProductsAndLeadership() {
  const { t } = useT();
  const verified = TIMELINE.filter((e) => e.verified);
  const horizon = TIMELINE.filter((e) => !e.verified);

  return (
    <>
      {/* ---------- Future Products ---------- */}
      <section id="products" className="relative border-t border-white/5 bg-forest-900/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-bronze-400">
              <Cube className="h-4 w-4" weight="fill" /> {t("futureProducts")}
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,3rem)] font-extrabold text-white">
              Concepts &amp; <span className="text-gradient-gold">Pre-Production</span>
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-white/60">
              {t("concept")} — a preview of physical products engineered across our sectors, from rPET water
              bottles to utility vehicles and structural anchors.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FUTURE_PRODUCTS.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.05}>
                <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-forest-950/60 transition hover:border-bronze-600/50">
                  <div className="relative h-44 overflow-hidden">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent" />
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-bronze-500/40 bg-forest-950/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-bronze-300 backdrop-blur">
                      <Sparkle className="h-3 w-3" weight="fill" /> {p.label}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-bronze-400/80">{p.sector}</div>
                    <h3 className="mt-1 font-display text-lg font-bold text-white">{p.title}</h3>
                    <ul className="mt-3 space-y-1.5">
                      {p.specs.map((s) => (
                        <li key={s} className="flex items-center gap-2 text-[13px] text-white/65">
                          <span className="h-1 w-1 rounded-full bg-bronze-400" /> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Leadership ---------- */}
      <section id="leadership" className="relative border-t border-white/5 bg-forest-950 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-bronze-400">
              <Users className="h-4 w-4" weight="fill" /> {t("leadership")}
            </p>
          </Reveal>

          {/* Founder spotlight */}
          <Reveal delay={0.05}>
            <div className="mt-8 grid grid-cols-1 gap-8 overflow-hidden rounded-3xl border border-bronze-600/25 bg-gradient-to-br from-forest-900 to-forest-800 p-6 sm:p-8 lg:grid-cols-[300px_1fr] lg:gap-10">
              <div className="relative mx-auto aspect-[3/4] w-56 overflow-hidden rounded-2xl ring-1 ring-bronze-600/30 lg:w-full">
                <img
                  src={FOUNDER.photo}
                  alt={FOUNDER.name}
                  className="h-full w-full object-cover object-top"
                  style={{ objectPosition: "center 18%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-bronze-500/40 bg-bronze-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-bronze-300">
                  <Star className="h-3.5 w-3.5" weight="fill" /> {t("founderTitle")}
                </span>
                <h3 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl">{FOUNDER.name}</h3>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">{FOUNDER.bio}</p>
                <div className="mt-6">
                  <button
                    onClick={() => scrollTo("partner")}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-bronze-400 to-bronze-600 px-5 py-3 text-sm font-bold text-forest-950 transition hover:brightness-110"
                  >
                    {t("discuss")} <ArrowRight className="h-4 w-4" weight="bold" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Board */}
          <h4 className="mt-14 font-display text-xl font-bold text-white">{t("board")}</h4>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BOARD.map((b, i) => (
              <Reveal key={b.id} delay={i * 0.04}>
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-forest-900/50 p-5 transition hover:border-bronze-600/40">
                  <div className="relative grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-bronze-400/30 to-forest-700 font-display text-lg font-bold text-bronze-300">
                    {b.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                    {b.preview && (
                      <span className="absolute -bottom-0.5 -right-0.5 rounded-full bg-forest-950 px-1.5 py-0.5 text-[8px] font-bold uppercase text-bronze-300 ring-1 ring-bronze-600/40">
                        New
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="font-display text-[15px] font-bold text-white">{b.name}</div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-bronze-400/80">{b.role}</div>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-white/55">{b.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Timeline ---------- */}
      <section id="journey" className="relative border-t border-white/5 bg-forest-900/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-extrabold text-white">
              The <span className="text-gradient-gold">Golden Horizon</span> Journey
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-white/60">
              A verified history of execution, and the future horizon we are building toward — transparently
              separated into what has happened and what is planned.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-300">
                <CheckCircle className="h-4 w-4" weight="fill" /> {t("verified")}
              </div>
              <div className="relative space-y-6 border-l border-emerald-500/25 pl-6">
                {verified.map((e) => (
                  <Reveal key={e.id}>
                    <div className="relative">
                      <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-emerald-400 ring-4 ring-forest-900" />
                      <div className="font-display text-sm font-bold text-emerald-300">{e.year}</div>
                      <div className="mt-0.5 font-display text-base font-bold text-white">{e.title}</div>
                      <p className="mt-1 text-[13px] leading-relaxed text-white/60">{e.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-bronze-500/40 bg-bronze-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-bronze-300">
                <Sparkle className="h-4 w-4" weight="fill" /> {t("horizon")}
              </div>
              <div className="relative space-y-6 border-l border-dashed border-bronze-600/40 pl-6">
                {horizon.map((e) => (
                  <Reveal key={e.id}>
                    <div className="relative">
                      <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-bronze-400 ring-4 ring-forest-900" />
                      <div className="font-display text-sm font-bold text-bronze-300">{e.year}</div>
                      <div className="mt-0.5 font-display text-base font-bold text-white">{e.title}</div>
                      <p className="mt-1 text-[13px] leading-relaxed text-white/60">{e.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}