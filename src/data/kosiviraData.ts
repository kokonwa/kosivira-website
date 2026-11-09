import type { BusinessArea, Category, Stage } from "@/types";

// ---------- Brand constants ----------
export const BRAND_NAME = "Kosivira Golden Horizon";
export const BRAND_SHORT = "Kosivira";
export const CONTACT_EMAIL = "Kosivira.future@gmail.com";
export const WHATSAPP = "+234 708 303 9437";
export const WHATSAPP_LINK =
  "https://wa.me/2347083039437?text=" +
  encodeURIComponent("Hello Kosivira Golden Horizon, I would like to discuss a partnership.");
export const UK_ADDRESS = "United Kingdom";
export const FOUNDER_PORTRAIT =
  "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/attachments/326058b9-0018-45f3-a8db-a15ae21d5375/1794214778959_favour_image.jpeg";

// ---------- Imagery ----------
export const IMG = {
  hero: "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/6f482be6-38ae-40f5-8ef7-ec5f39668f1c/hero-industrial-13709a39-1794216060549.webp",
  water: "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/6f482be6-38ae-40f5-8ef7-ec5f39668f1c/water-plant-1ba571fe-1794216060438.webp",
  construction: "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/6f482be6-38ae-40f5-8ef7-ec5f39668f1c/construction-b0567df4-1794216060724.webp",
  solar: "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/6f482be6-38ae-40f5-8ef7-ec5f39668f1c/solar-energy-bb24a96b-1794216060100.webp",
  logistics: "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/6f482be6-38ae-40f5-8ef7-ec5f39668f1c/logistics-fleet-2dd72ab5-1794216060771.webp",
  furniture: "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/6f482be6-38ae-40f5-8ef7-ec5f39668f1c/furniture-showroom-27edb5ce-1794216063291.webp",
  agritech: "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/6f482be6-38ae-40f5-8ef7-ec5f39668f1c/agritech-017e9a1b-1794216064191.webp",
  aviation: "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/6f482be6-38ae-40f5-8ef7-ec5f39668f1c/aviation-cargo-cd568bd2-1794216064117.webp",
};
export const HERO_IMAGE = IMG.hero;

export const CATEGORIES: Category[] = [
  "Industry & Infrastructure",
  "Energy & Agritech",
  "Consumer & Hospitality",
  "Logistics & Aviation",
  "Social Impact & Welfare",
];

export const STAGES: Stage[] = [
  "Active Priority",
  "In Planning",
  "Concept",
  "Long-Term Vision",
];

// ---------- 20 Business Sectors ----------
export const BUSINESS_AREAS: BusinessArea[] = [
  { id: "water", title: "Kosivira Water", category: "Industry & Infrastructure", stage: "Active Priority", icon: "Drop", image: IMG.water, summary: "Packaged pristine water and bulk hydration for homes, industry and relief.", detail: "A flagship consumer line spanning purified sachet, bottle and bulk water, paired with municipal-scale hydration contracts and humanitarian supply.", metrics: [{ label: "Daily Capacity", value: "1.2M L" }, { label: "Plants Planned", value: "6" }], caseStudy: "Pilot plant serving 40,000 households with ISO-grade purification and same-day distribution." },
  { id: "construction", title: "Heavy Civil & Infrastructure", category: "Industry & Infrastructure", stage: "Active Priority", icon: "Buildings", image: IMG.construction, summary: "Roads, bridges, estates and public works delivered at national scale.", detail: "Turnkey civil contracting for highways, bridges, drainage and residential estates with in-house plant, surveying and project controls.", metrics: [{ label: "Active Sites", value: "14" }, { label: "Workforce", value: "2,300+" }], caseStudy: "Consortium build-out of a 22km arterial corridor with integrated stormwater systems." },
  { id: "epoxy", title: "Industrial Epoxy Flooring", category: "Industry & Infrastructure", stage: "In Planning", icon: "PaintBucket", image: IMG.construction, summary: "High-grade seamless flooring for factories, warehouses and hospitals.", detail: "Specialist resin systems: anti-static, food-grade and heavy-duty screeds engineered for logistics and pharmaceutical environments.", metrics: [{ label: "Sq m / Year", value: "480k" }, { label: "Certifications", value: "3" }], caseStudy: "Seamless antimicrobial flooring for a cold-chain distribution hub." },
  { id: "automotive", title: "Automotive, Fleet & Repairs", category: "Logistics & Aviation", stage: "In Planning", icon: "Car", image: IMG.logistics, summary: "Vehicle sales, corporate fleets and modern diagnostic repair centres.", detail: "Franchise sales, fleet leasing and a network of EV-ready service centres with genuine parts and telematics.", metrics: [{ label: "Fleet Units", value: "1,800" }, { label: "Service Bays", value: "60" }], caseStudy: "Managed fleet deployment for a national logistics partner with live telematics." },
  { id: "agritech", title: "Agritech & Mechanized Farming", category: "Energy & Agritech", stage: "Active Priority", icon: "Sun", image: IMG.agritech, summary: "Smart, mechanised farming with precision inputs and farm equipment.", detail: "Consolidated agribusiness: tractorisation services, drone scouting, irrigation and contract farming across staple and cash crops.", metrics: [{ label: "Hectares", value: "12,000" }, { label: "Yield Gain", value: "+38%" }], caseStudy: "Cooperative mechanisation programme lifting smallholder output by a third." },
  { id: "logistics", title: "Intermodal Logistics", category: "Logistics & Aviation", stage: "Active Priority", icon: "Truck", image: IMG.logistics, summary: "Supply-chain fleet moving freight across road, rail and sea.", detail: "End-to-end freight: container haulage, bonded warehousing and last-mile distribution under a unified control tower.", metrics: [{ label: "Trucks", value: "540" }, { label: "Warehouses", value: "9" }], caseStudy: "Cross-border corridor cutting delivery lead-times by 41%." },
  { id: "furniture", title: "Architectural Furniture", category: "Consumer & Hospitality", stage: "Concept", icon: "Armchair", image: IMG.furniture, summary: "Commercial and luxury furniture crafted for hotels and homes.", detail: "In-house joinery and upholstery producing bespoke contract furniture, hospitality fit-outs and a premium retail collection.", metrics: [{ label: "Showrooms", value: "4" }, { label: "Artisans", value: "120" }], caseStudy: "Full FF&E package for a 220-key business hotel." },
  { id: "fasteners", title: "Screws, Fasteners & Hardware", category: "Industry & Infrastructure", stage: "Concept", icon: "Nut", image: IMG.construction, summary: "High-grade fasteners and industrial hardware manufacturing.", detail: "Cold-heading and finishing lines producing bolts, anchors and precision hardware for construction and automotive OEMs.", metrics: [{ label: "SKUs", value: "8,500" }, { label: "Output", value: "40M/yr" }], caseStudy: "Structural anchor supply for a wind-turbine foundation programme." },
  { id: "hospitality", title: "Premium Hospitality & Lodging", category: "Consumer & Hospitality", stage: "In Planning", icon: "Bed", image: IMG.furniture, summary: "Executive hotels, serviced apartments and conference venues.", detail: "A hospitality brand spanning business hotels, extended-stay residences and destination resorts with full MICE capability.", metrics: [{ label: "Keys Planned", value: "1,100" }, { label: "Properties", value: "7" }], caseStudy: "Flagship city-centre hotel with 14,000 sq ft of conference space." },
  { id: "aviation", title: "Commercial & Cargo Aviation", category: "Logistics & Aviation", stage: "Long-Term Vision", icon: "Airplane", image: IMG.aviation, summary: "Air cargo services and regional passenger connectivity.", detail: "Freighter operations and regional routes linking industrial corridors, with ground handling and MRO ambitions.", metrics: [{ label: "Aircraft (target)", value: "12" }, { label: "Routes", value: "18" }], caseStudy: "Perishable air-cargo lane connecting farms to export hubs." },
  { id: "children", title: "Children's Foundation & Welfare", category: "Social Impact & Welfare", stage: "Active Priority", icon: "Baby", image: IMG.solar, summary: "Welfare homes, schooling and safeguarding for vulnerable children.", detail: "The Kosivira Children's Foundation runs care homes, sponsorship and family-reunification with education and health services.", metrics: [{ label: "Homes", value: "3" }, { label: "Children Supported", value: "900+" }], caseStudy: "Transitional care model reuniting 240 children with kin annually." },
  { id: "solar", title: "Renewable Solar & Clean Power", category: "Energy & Agritech", stage: "Active Priority", icon: "Sun", image: IMG.solar, summary: "Utility solar, storage and clean power for industry and communities.", detail: "Ground-mount and C&I solar with battery storage, mini-grids and rooftop programmes for factories and estates.", metrics: [{ label: "MW Pipeline", value: "320" }, { label: "Sites", value: "26" }], caseStudy: "28 MWp plant powering an industrial park with 6-hour storage." },
  { id: "marine", title: "Marine Shipping & Maritime", category: "Logistics & Aviation", stage: "Long-Term Vision", icon: "Globe", image: IMG.logistics, summary: "Coastal shipping, port operations and maritime logistics.", detail: "Feeder vessels, terminal services and marine agency supporting intermodal trade across regional ports.", metrics: [{ label: "Vessels (target)", value: "8" }, { label: "Terminals", value: "3" }], caseStudy: "Coastal feeder service decongesting overland freight corridors." },
  { id: "pharma", title: "Pharma & Healthcare Distribution", category: "Social Impact & Welfare", stage: "In Planning", icon: "Pill", image: IMG.logistics, summary: "Cold-chain distribution of medicines and health supplies.", detail: "Licensed wholesale and cold-chain distribution serving hospitals, pharmacies and public-health programmes.", metrics: [{ label: "SKUs", value: "6,200" }, { label: "Cold Nodes", value: "15" }], caseStudy: "Vaccine cold-chain reaching remote clinics within 48 hours." },
  { id: "textile", title: "Industrial Textile & Apparel", category: "Consumer & Hospitality", stage: "Concept", icon: "TShirt", image: IMG.furniture, summary: "Fabric manufacturing and branded apparel production.", detail: "Spinning, knitting and garment lines producing uniforms, workwear and a consumer apparel label.", metrics: [{ label: "Units/Day", value: "22k" }, { label: "Looms", value: "180" }], caseStudy: "Contract workwear run for a 5,000-employee industrial group." },
  { id: "realestate", title: "Real Estate & Urban Development", category: "Industry & Infrastructure", stage: "In Planning", icon: "House", image: IMG.construction, summary: "Masterplanned communities and urban property development.", detail: "Mixed-use districts, affordable housing and commercial parks developed with integrated utilities.", metrics: [{ label: "Plots", value: "5,400" }, { label: "Districts", value: "4" }], caseStudy: "Garden-city district pairing homes with schools and clinics." },
  { id: "waste", title: "Waste & Circular Recycling", category: "Energy & Agritech", stage: "Concept", icon: "Recycle", image: IMG.solar, summary: "Collection, sorting and circular material recovery.", detail: "Municipal and industrial waste with MRF sorting, plastics recycling and energy-from-waste partnerships.", metrics: [{ label: "Tonnes/mo", value: "18k" }, { label: "Recovery", value: "72%" }], caseStudy: "Plastic-to-flake line feeding the fastener and textile plants." },
  { id: "mining", title: "Mining & Mineral Processing", category: "Industry & Infrastructure", stage: "Long-Term Vision", icon: "Coins", image: IMG.construction, summary: "Strategic mineral extraction and value-added processing.", detail: "Responsible extraction of industrial minerals with local beneficiation and downstream material supply.", metrics: [{ label: "Concessions", value: "5" }, { label: "Focus", value: "Industrial" }], caseStudy: "Beneficiation hub converting raw limestone into construction grade." },
  { id: "telecom", title: "Digital Telecom & Cloud", category: "Industry & Infrastructure", stage: "In Planning", icon: "Cloud", image: IMG.solar, summary: "Connectivity, data centres and cloud infrastructure.", detail: "Fibre and wireless access with tier-III data centres and a sovereign cloud platform for enterprise and government.", metrics: [{ label: "Racks", value: "2,400" }, { label: "PoPs", value: "11" }], caseStudy: "Edge cloud reducing latency for the logistics control tower." },
  { id: "education", title: "Education & Vocational Academy", category: "Social Impact & Welfare", stage: "Active Priority", icon: "GraduationCap", image: IMG.agritech, summary: "Skills centres, academies and scholarships for future talent.", detail: "A vocational academy pipeline training welders, technicians, agronomists and digital talent with employer-linked placements.", metrics: [{ label: "Learners", value: "4,000" }, { label: "Placements", value: "86%" }], caseStudy: "Solar-technician cohort deployed across the renewable portfolio." },
];

export const PARTNERSHIP_TYPES = [
  "Equity Partner",
  "Joint Venture",
  "Supplier",
  "Distributor",
  "Philanthropic Sponsor",
];

export const SOCIALS = [
  { name: "LinkedIn", icon: "LinkedinLogo", url: "https://www.linkedin.com/company/kosivira/" },
  { name: "Instagram", icon: "InstagramLogo", url: "https://www.instagram.com/officialkosivira" },
  { name: "X", icon: "TiktokLogo", url: "https://x.com/kosivira" },
  { name: "Facebook", icon: "FacebookLogo", url: "https://www.facebook.com/share/18rVoDh5v7/" },
];
