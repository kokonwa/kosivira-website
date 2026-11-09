import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Handshake, MapPin, X } from "@phosphor-icons/react";
import { BUSINESS_AREAS, CATEGORIES, STAGES } from "@/data/kosiviraData";
import { SectorIcon, useT } from "@/data/kosiviraContent";
import type { BusinessArea, Category, Stage } from "@/types";

const STAGE_STYLE: Record<Stage, string> = {
  "Active Priority": "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  "In Planning": "bg-bronze-500/15 text-bronze-300 border-bronze-500/30",
  Concept: "bg-sky-500/15 text-sky-300 border-sky-500/30",
  "Long-Term Vision": "bg-violet-500/15 text-violet-300 border-violet-500/30",
};

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectorModal({ area, onClose, onPropose }: { area: BusinessArea; onClose: () => void; onPropose: (s: string) => void }) {
  const { t } = useT();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-end justify-center bg-forest-950/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 40, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 40, opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-bronze-600/25 bg-forest-900 shadow-2xl shadow-black/60 sm:rounded-3xl"
      >
        <div className="relative h-48 w-full overflow-hidden sm:h-56">
          <img src={area.image} alt={area.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/30 to-transparent" />
          <button
            onClick={onClose}
            aria-label={t("close")}
            className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-forest-950/70 text-white backdrop-blur transition hover:bg-forest-950"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="absolute bottom-4 left-5 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-bronze-300 to-bronze-600 text-forest-950">
              <SectorIcon name={area.icon} className="h-6 w-6" weight="fill" />
            </span>
            <span className={`rounded-full border px-3 py-1 text-[11px] font-bold ${STAGE_STYLE[area.stage]}`}>
              {area.stage}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="font-display text-2xl font-bold text-white">{area.title}</h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-bronze-400">{area.category}</p>
          <p className="mt-4 text-sm leading-relaxed text-white/75">{area.detail}</p>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {area.metrics.map((m) => (
              <div key={m.label} className="rounded-xl border border-white/10 bg-forest-800/60 p-3">
                <div className="font-display text-xl font-extrabold text-bronze-300">{m.value}</div>
                <div className="text-[11px] uppercase tracking-wider text-white/50">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-bronze-600/20 bg-forest-800/40 p-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-bronze-300">
              <Check className="h-4 w-4" weight="bold" /> Case Study
            </div>
            <p className="mt-2 text-sm text-white/75">{area.caseStudy}</p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => { onPropose(area.title); onClose(); scrollTo("partner"); }}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-bronze-400 to-bronze-600 px-5 py-3 text-sm font-bold text-forest-950 transition hover:brightness-110"
            >
              <Handshake className="h-4 w-4" weight="bold" /> {t("propose")}
            </button>
            <button
              onClick={onClose}
              className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/70 transition hover:bg-forest-800"
            >
              {t("close")}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function BusinessesDirectory({ onPropose }: { onPropose: (s: string) => void }) {
  const { t } = useT();
  const [cat, setCat] = useState<Category | "All">("All");
  const [stage, setStage] = useState<Stage | "All">("All");
  const [active, setActive] = useState<BusinessArea | null>(null);

  const filtered = useMemo(
    () =>
      BUSINESS_AREAS.filter(
        (a) => (cat === "All" || a.category === cat) && (stage === "All" || a.stage === stage)
      ),
    [cat, stage]
  );

  return (
    <section id="businesses" className="relative border-t border-white/5 bg-forest-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-bronze-400">
              <MapPin className="h-4 w-4" weight="fill" /> {t("sectors")}
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,3rem)] font-extrabold leading-tight text-white">
              Twenty Sectors. <span className="text-gradient-gold">One Conglomerate.</span>
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-white/60">
              From packaged water and heavy civil works to aviation and the Children's Foundation — each
              division is a standalone engine within the Kosivira Golden Horizon ecosystem.
            </p>
          </div>
          <div className="font-display text-5xl font-extrabold text-white/10">{filtered.length}</div>
        </div>

        {/* Category filter */}
        <div className="mt-8 flex flex-wrap gap-2">
          {(["All", ...CATEGORIES] as const).map((c) => (
            <button
              key={c}
              onClick={() => setCat(c as Category | "All")}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                cat === c
                  ? "border-bronze-500 bg-bronze-500/15 text-bronze-300"
                  : "border-white/10 bg-forest-900/60 text-white/60 hover:border-bronze-600/40 hover:text-white"
              }`}
            >
              {c === "All" ? t("all") : c}
            </button>
          ))}
        </div>
        {/* Stage filter */}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">Stage:</span>
          {(["All", ...STAGES] as const).map((s) => (
            <button
              key={s}
              onClick={() => setStage(s as Stage | "All")}
              className={`rounded-full px-3 py-1 text-[11px] font-semibold transition ${
                stage === s ? "bg-white/15 text-white" : "text-white/45 hover:text-white/80"
              }`}
            >
              {s === "All" ? t("all") : s}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((a, i) => (
              <motion.article
                layout
                key={a.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.2) }}
                onClick={() => setActive(a)}
                className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-forest-900/60 transition hover:border-bronze-600/50 hover:shadow-xl hover:shadow-black/40"
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900 to-forest-900/10" />
                  <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-lg bg-forest-950/70 text-bronze-300 backdrop-blur">
                    <SectorIcon name={a.icon} className="h-5 w-5" weight="fill" />
                  </span>
                  <span className={`absolute bottom-3 left-3 rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${STAGE_STYLE[a.stage]}`}>
                    {a.stage}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-display text-[15px] font-bold leading-snug text-white group-hover:text-bronze-300">
                    {a.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-white/55">{a.summary}</p>
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-bronze-400/80">
                    {a.category}
                  </div>
                  <div className="mt-auto pt-3">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-white/70 transition group-hover:gap-2 group-hover:text-bronze-300">
                      {t("details")} <ArrowRight className="h-3.5 w-3.5" weight="bold" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="mt-12 rounded-2xl border border-white/10 bg-forest-900/40 p-10 text-center text-sm text-white/50">
            No sectors match these filters.
          </div>
        )}
      </div>

      <AnimatePresence>
        {active && <SectorModal area={active} onClose={() => setActive(null)} onPropose={onPropose} />}
      </AnimatePresence>
    </section>
  );
}
