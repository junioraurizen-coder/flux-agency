import { ServiceItem, FaqItem, NavItem } from './types';

export const NAVIGATION: NavItem[] = [
  { label: 'Accueil', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Comment ça marche', path: '/process' },
  { label: 'À propos', path: '/about' },
  { label: 'FAQ', path: '/faq' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'ugc-script',
    title: 'UGC Script & Ad Angle Pack',
    description: 'Scripts UGC conçus pour améliorer les performances publicitaires sur TikTok, Instagram et Meta.',
    features: ['10 scripts UGC prêts à filmer', '10 hooks marketing', '5 CTA orientés conversion', 'Livraison sous 48h'],
    price: 149,
  },
  {
    id: 'winning-hooks',
    title: 'Winning Hooks Generator',
    description: 'Hooks publicitaires conçus pour stopper le scroll et capter l\'attention.',
    features: ['30 hooks classés par émotions', 'Angles marketing validés', 'Prêts à l\'emploi'],
    price: 79,
  },
  {
    id: 'product-copy',
    title: 'Product Page Conversion Copy',
    description: 'Optimisation complète du texte d\'une page produit Shopify pour augmenter le taux de conversion.',
    features: ['Titres & sous-titres', 'Description persuasive', 'Bénéfices clients', 'FAQ optimisée'],
    price: 199,
  },
  {
    id: 'tiktok-scripts',
    title: 'TikTok Ad Script Pack',
    description: 'Scripts publicitaires courts et dynamiques adaptés aux formats TikTok Ads.',
    features: ['15 scripts publicitaires', 'Angles testables', 'Format natif TikTok'],
    price: 129,
  },
  {
    id: 'ugc-creative',
    title: 'UGC Creative + Montage',
    description: 'Création de vidéos UGC prêtes à être diffusées en publicité (Semi-AI).',
    features: ['3 vidéos montées', 'Sous-titres dynamiques', 'CTA intégré', 'Format 9:16'],
    price: 249,
  },
  {
    id: 'email-pack',
    title: 'Email Marketing Pack',
    description: 'Emails marketing conçus pour augmenter le chiffre d\'affaires sans publicité supplémentaire.',
    features: ['5 emails d\'abandon de panier', '3 emails post-achat', 'Copywriting persuasif'],
    price: 179,
  },
  {
    id: 'brand-voice',
    title: 'Brand Voice & Messaging Kit',
    description: 'Définition du positionnement et du ton de marque.',
    features: ['Ton de communication', 'Messages clés', 'Phrases marketing', 'Guide PDF'],
    price: 159,
  },
  {
    id: 'ai-landing',
    title: 'AI Landing Page Express',
    description: 'Landing page optimisée pour convertir du trafic froid en clients.',
    features: ['Structure complète', 'Copywriting optimisé', 'CTA stratégiques', 'Maquette textuelle'],
    price: 299,
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity Starter Kit',
    description: 'Création d\'une identité visuelle professionnelle.',
    features: ['Logo principal + 2 variantes', 'Palette de couleurs', 'Typographies', 'Mini brand guide'],
    price: 199,
  },
  {
    id: 'visual-pack',
    title: 'E-commerce Visual Pack',
    description: 'Pack visuel pour améliorer l\'esthétique et la crédibilité d\'une boutique Shopify.',
    features: ['5 bannières Shopify', '5 visuels réseaux sociaux', '5 icônes ou badges'],
    price: 249,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Les services sont-ils 100% automatisés par l'IA ?",
    answer: "Non. Chez Flux Agency, l'IA est un outil de productivité, pas le pilote. Chaque livrable est supervisé, affiné et validé par un stratège humain expert en e-commerce pour garantir la pertinence et l'émotion."
  },
  {
    question: "Quels sont les délais de livraison ?",
    answer: "La majorité de nos packs sont livrés sous 48h à 72h ouvrées après réception de votre brief complet."
  },
  {
    question: "Puis-je demander des modifications ?",
    answer: "Oui, chaque commande inclut une phase de révision pour s'assurer que le résultat correspond parfaitement à votre vision de marque."
  },
  {
    question: "Quelle est la politique de remboursement ?",
    answer: "Compte tenu de la nature digitale et personnalisée de nos services, les remboursements ne sont pas possibles une fois le travail entamé. Cependant, nous nous engageons à retravailler le projet jusqu'à satisfaction dans la limite du raisonnable."
  }
];
