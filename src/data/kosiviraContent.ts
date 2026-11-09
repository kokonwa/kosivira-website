import { createContext, useContext, createElement } from "react";
import {
  Airplane, Armchair, Baby, Bed, Buildings, Car, Cloud, Coins, Drop,
  FacebookLogo, Globe, GraduationCap, House, InstagramLogo, LinkedinLogo,
  Nut, PaintBucket, Pill, Recycle, Sun, TShirt, TiktokLogo, Truck, YoutubeLogo,
} from "@phosphor-icons/react";
import type { FutureProduct, Lang, Leader, NewsArticle, TimelineEvent } from "@/types";
import { FOUNDER_PORTRAIT, IMG } from "@/data/kosiviraData";

// ---------- Icon registry (sector + social icon names -> components) ----------
export const ICON_MAP: Record<string, React.ComponentType<{ className?: string; weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone" }>> = {
  Drop, Buildings, PaintBucket, Car, Sun, Truck, Armchair, Nut, Bed, Airplane,
  Baby, Globe, Pill, TShirt, House, Recycle, Coins, Cloud, GraduationCap,
  LinkedinLogo, InstagramLogo, TiktokLogo, FacebookLogo, YoutubeLogo,
};

export function SectorIcon({ name, className, weight }: { name: string; className?: string; weight?: "regular" | "fill" | "bold" }) {
  const Cmp = ICON_MAP[name] ?? Globe;
  return createElement(Cmp, { className, weight: weight ?? "regular" });
}

// ---------- Future Products ----------
export const FUTURE_PRODUCTS: FutureProduct[] = [
  { id: "p-water", title: "Kosivira Spring 50cl", sector: "Water", label: "Concept Design", image: IMG.water, specs: ["BPA-free rPET", "ISO 3696 water", "Solar-filled plant"] },
  { id: "p-vehicle", title: "GV-1 Utility Platform", sector: "Automotive", label: "Pre-Production", image: IMG.logistics, specs: ["EV-ready chassis", "Fleet telematics", "Modular body"] },
  { id: "p-furniture", title: "Horizon Lounge Series", sector: "Furniture", label: "Concept Design", image: IMG.furniture, specs: ["FSC hardwood", "Contract grade", "Circular frames"] },
  { id: "p-fastener", title: "KX Structural Anchor", sector: "Hardware", label: "Pre-Production", image: IMG.construction, specs: ["Grade 10.9", "Hot-dip coated", "Seismic rated"] },
  { id: "p-agri", title: "Terra Seeder 400", sector: "Agritech", label: "Concept Design", image: IMG.agritech, specs: ["Precision drill", "Solar assist", "Telemetry"] },
  { id: "p-solar", title: "HelioGrid 28 MWp", sector: "Energy", label: "In Development", image: IMG.solar, specs: ["Bifacial modules", "6-hr storage", "C&I ready"] },
];

// ---------- Leadership ----------
export const FOUNDER: Leader = {
  id: "favour",
  name: "Favour Ezeonyebuchi",
  role: "Founder & Group Chairman",
  bio: "Visionary behind the Kosivira Golden Horizon conglomerate, Favour Ezeonyebuchi built a 20-sector industrial group on a single conviction: that durable prosperity is engineered through infrastructure, energy and human capital working together. He leads the group's funding, partnership and long-term vision agenda.",
  photo: FOUNDER_PORTRAIT,
};

export const BOARD: Leader[] = [
  { id: "b1", name: "Chief Operating Officer", role: "Group Operations", bio: "Oversees cross-sector execution, plant utilisation and delivery timelines.", preview: true },
  { id: "b2", name: "Group Finance Director", role: "Capital & Treasury", bio: "Leads funding strategy, investor relations and capital allocation.", preview: true },
  { id: "b3", name: "Director, Infrastructure", role: "Civil & Energy", bio: "Owns construction, renewables and utilities delivery.", preview: true },
  { id: "b4", name: "Director, Consumer & Hospitality", role: "Brand & Retail", bio: "Drives water, apparel, furniture and lodging brands.", preview: true },
  { id: "b5", name: "Head of Social Impact", role: "Foundation & Welfare", bio: "Leads the Children's Foundation and community programmes.", preview: true },
  { id: "b6", name: "General Counsel & Governance", role: "Legal & Compliance", bio: "Ensures regulatory, ESG and governance integrity.", preview: true },
];

// ---------- Timeline ----------
export const TIMELINE: TimelineEvent[] = [
  { id: "t1", year: "2021", title: "The Vision Is Drawn", description: "Kosivira Golden Horizon is conceived as a multi-industry conglomerate founded by Favour Ezeonyebuchi.", verified: true },
  { id: "t2", year: "2022", title: "Foundation & Water Pilot", description: "The Children's Foundation and the first packaged-water pilot plant go live.", verified: true },
  { id: "t3", year: "2023", title: "Civil & Agritech Launch", description: "Heavy civil contracting and mechanised farming operations commence.", verified: true },
  { id: "t4", year: "2024", title: "Energy & Logistics Build", description: "Solar pipeline and intermodal freight fleet scale up across corridors.", verified: true },
  { id: "t5", year: "2025", title: "Group Structuring", description: "Formal board appointments and sector holding structure established.", verified: false },
  { id: "t6", year: "2026", title: "Manufacturing Era", description: "Fasteners, textiles and furniture production lines commissioned.", verified: false },
  { id: "t7", year: "2028", title: "Aviation & Marine", description: "Cargo aviation and coastal maritime operations enter service.", verified: false },
  { id: "t8", year: "2030", title: "Pan-African Horizon", description: "A fully integrated conglomerate operating across energy, industry and social impact.", verified: false },
];

// ---------- News ----------
export const NEWS: NewsArticle[] = [
  { id: "n1", title: "Kosivira Unveils 20-Sector Conglomerate Vision", category: "Corporate", date: "2025-02-18", excerpt: "Founder Favour Ezeonyebuchi outlines a 20-industry roadmap spanning energy, infrastructure and welfare.", body: "The Kosivira Golden Horizon corporate vision document formalises a twenty-sector conglomerate built on infrastructure, clean energy and human capital. The roadmap prioritises water, civil construction, agritech and renewables in the near term, with aviation and maritime in the long-term horizon.", image: IMG.hero },
  { id: "n2", title: "Solar Pipeline Reaches 320 MW", category: "Energy", date: "2025-01-30", excerpt: "Utility and commercial-and-industrial solar sites advance with integrated battery storage.", body: "Kosivira's renewable arm confirmed a 320 MW pipeline of ground-mount and C&I solar sites, paired with up to six hours of battery storage to serve industrial parks and communities.", image: IMG.solar },
  { id: "n3", title: "Children's Foundation Opens Third Welfare Home", category: "Social Impact", date: "2024-12-12", excerpt: "New care home expands safeguarding, schooling and family reunification services.", body: "The Kosivira Children's Foundation opened its third welfare home, extending transitional care and education to more than 900 supported children with a proven reunification model.", image: IMG.agritech },
  { id: "n4", title: "Intermodal Corridor Cuts Lead-Times 41%", category: "Logistics", date: "2024-11-05", excerpt: "Unified control tower streamlines road, rail and sea freight across the network.", body: "A single freight control tower now coordinates container haulage, bonded warehousing and last-mile delivery, reducing cross-border delivery lead-times by 41%.", image: IMG.logistics },
  { id: "n5", title: "Kosivira Spring Water Pilot Serves 40,000 Homes", category: "Consumer", date: "2024-10-21", excerpt: "ISO-grade purification and same-day distribution launch the flagship water brand.", body: "The pilot bottling plant delivers packaged and bulk hydration to 40,000 households, anchoring the consumer division with humanitarian supply contracts.", image: IMG.water },
];

// ---------- i18n (UI chrome only) ----------
type Dict = Record<string, string>;
export const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "es", label: "Español" },
  { code: "pt", label: "Português" },
];

export const TRANSLATIONS: Record<Lang, Dict> = {
  en: {
    home: "Home", about: "About Us", businesses: "Our Businesses", products: "Future Products",
    leadership: "Founder & Board", partner: "Partner With Us", impact: "Social Impact",
    news: "News", contact: "Contact", heroKicker: "A Pan-African Industrial Conglomerate",
    heroTitle: "Building the Golden Horizon of Industry", heroSub: "Twenty sectors. One vision for durable, human-centred prosperity.",
    explore: "Explore Our Businesses", partnerCta: "Partner With Us", sectors: "Business Sectors",
    all: "All", details: "View Details", propose: "Propose Partnership in this Sector",
    close: "Close", futureProducts: "Future Products", verified: "Verified History",
    horizon: "Future Horizon", milestones: "Milestones", board: "Board of Directors",
    founderTitle: "Founder & Group Chairman", discuss: "Discuss Funding or Partnership",
    concept: "CONCEPT DESIGN / PRE-PRODUCTION",
  },
  fr: {
    home: "Accueil", about: "À propos", businesses: "Nos Activités", products: "Produits Futurs",
    leadership: "Fondateur & Conseil", partner: "Devenir Partenaire", impact: "Impact Social",
    news: "Actualités", contact: "Contact", heroKicker: "Un conglomérat industriel panafricain",
    heroTitle: "Bâtir l'Horizon Doré de l'Industrie", heroSub: "Vingt secteurs. Une vision pour une prospérité durable et humaine.",
    explore: "Découvrir nos activités", partnerCta: "Devenir Partenaire", sectors: "Secteurs d'activité",
    all: "Tous", details: "Voir les détails", propose: "Proposer un partenariat dans ce secteur",
    close: "Fermer", futureProducts: "Produits futurs", verified: "Historique vérifié",
    horizon: "Horizon futur", milestones: "Jalons", board: "Conseil d'administration",
    founderTitle: "Fondateur & Président", discuss: "Discuter financement ou partenariat",
    concept: "CONCEPTION / AVANT-PRODUCTION",
  },
  de: {
    home: "Startseite", about: "Über uns", businesses: "Unsere Bereiche", products: "Zukunftsprodukte",
    leadership: "Gründer & Vorstand", partner: "Partner werden", impact: "Soziale Wirkung",
    news: "News", contact: "Kontakt", heroKicker: "Ein panafrikanischer Industriekonzern",
    heroTitle: "Den goldenen Horizont der Industrie bauen", heroSub: "Zwanzig Sektoren. Eine Vision für nachhaltigen, menschenzentrierten Wohlstand.",
    explore: "Bereiche entdecken", partnerCta: "Partner werden", sectors: "Geschäftsbereiche",
    all: "Alle", details: "Details ansehen", propose: "Partnerschaft in diesem Sektor vorschlagen",
    close: "Schließen", futureProducts: "Zukunftsprodukte", verified: "Verifizierte Historie",
    horizon: "Zukunftshorizont", milestones: "Meilensteine", board: "Vorstand",
    founderTitle: "Gründer & Aufsichtsratsvorsitzender", discuss: "Finanzierung oder Partnerschaft besprechen",
    concept: "KONZEPT / VORPRODUKTION",
  },
  es: {
    home: "Inicio", about: "Nosotros", businesses: "Nuestros Negocios", products: "Productos Futuros",
    leadership: "Fundador y Junta", partner: "Asóciate", impact: "Impacto Social",
    news: "Noticias", contact: "Contacto", heroKicker: "Un conglomerado industrial panafricano",
    heroTitle: "Construyendo el Horizonte Dorado de la Industria", heroSub: "Veinte sectores. Una visión de prosperidad duradera y humana.",
    explore: "Explorar negocios", partnerCta: "Asóciate", sectors: "Sectores de negocio",
    all: "Todos", details: "Ver detalles", propose: "Proponer asociación en este sector",
    close: "Cerrar", futureProducts: "Productos futuros", verified: "Historia verificada",
    horizon: "Horizonte futuro", milestones: "Hitos", board: "Junta Directiva",
    founderTitle: "Fundador y Presidente", discuss: "Hablar de financiación o asociación",
    concept: "CONCEPTO / PREPRODUCCIÓN",
  },
  pt: {
    home: "Início", about: "Sobre nós", businesses: "Nossos Negócios", products: "Produtos Futuros",
    leadership: "Fundador e Conselho", partner: "Seja Parceiro", impact: "Impacto Social",
    news: "Notícias", contact: "Contacto", heroKicker: "Um conglomerado industrial pan-africano",
    heroTitle: "Construindo o Horizonte Dourado da Indústria", heroSub: "Vinte setores. Uma visão de prosperidade duradoura e humana.",
    explore: "Explorar negócios", partnerCta: "Seja Parceiro", sectors: "Setores de negócio",
    all: "Todos", details: "Ver detalhes", propose: "Propor parceria neste setor",
    close: "Fechar", futureProducts: "Produtos futuros", verified: "Histórico verificado",
    horizon: "Horizonte futuro", milestones: "Marcos", board: "Conselho de Administração",
    founderTitle: "Fundador e Presidente", discuss: "Falar de financiamento ou parceria",
    concept: "CONCEITO / PRÉ-PRODUÇÃO",
  },
};

// ---------- Language context + useT hook ----------
export interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LangCtx>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
});

export function useT(): LangCtx {
  return useContext(LanguageContext);
}