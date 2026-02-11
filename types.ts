export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  path: string;
}