export type Lang = "en" | "fr" | "de" | "es" | "pt";

export type Stage =
  | "Active Priority"
  | "In Planning"
  | "Concept"
  | "Long-Term Vision";

export type Category =
  | "Industry & Infrastructure"
  | "Energy & Agritech"
  | "Consumer & Hospitality"
  | "Logistics & Aviation"
  | "Social Impact & Welfare";

export interface Metric {
  label: string;
  value: string;
}

export interface BusinessArea {
  id: string;
  title: string;
  category: Category;
  stage: Stage;
  icon: string;
  image: string;
  summary: string;
  detail: string;
  metrics: Metric[];
  caseStudy: string;
}

export interface FutureProduct {
  id: string;
  title: string;
  sector: string;
  label: string;
  image: string;
  specs: string[];
}

export interface Leader {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo?: string;
  preview?: boolean;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  verified: boolean;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  body: string;
  image: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  company: string;
  country: string;
  sector: string;
  type: string;
  message: string;
}
