export const siteConfig = {
  companyName: "Chris Elec 24",
  phone: "06 99 80 12 92",
  phoneTel: "tel:0699801292",
  address: "160 Rte de la Blogeonnie, 24590 Saint-Geniès",
  hours: "Lundi au Samedi 09:00–18:00",
  hoursClosed: "Fermé le dimanche",
  rating: 5.0,
  ratingCount: "5.0/5 sur Google",
  seo: {
    title: "Chris Elec 24 | Électricien Expert à Saint-Geniès",
    description:
      "Chris Elec 24, électricien expert à Saint-Geniès. Installations neuves, rénovations électriques et dépannage rapide. Matériel Legrand, Hager, Schneider Electric. Intervention rapide en Dordogne.",
  },
};

export const navigation = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Services", href: "#services" },
  { label: "Partenaires", href: "#partenaires" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  headline: "L'Expertise Électrique à Saint-Geniès",
  subtitle:
    "Interventions rapides, installations neuves et rénovations par un professionnel qualifié.",
  cta: "Contactez-moi au 06 99 80 12 92",
  backgroundImage:
    "https://images.unsplash.com/photo-1588616437819-7d30e6f76e66?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export const aboutContent = {
  sectionTitle: "À Propos",
  sectionSubtitle: "Votre électricien de confiance en Dordogne",
  text: "Chris Elec, électricien à Saint-Geniès, est spécialisé dans le domaine de l'électricité. J'interviens pour tous vos travaux électriques avec expertise et professionnalisme. Que ce soit pour des installations neuves, des rénovations ou des dépannages, je suis à votre service pour répondre à vos besoins dans les plus brefs délais.",
  image:
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
  stats: [
    { value: "5.0/5", label: "Note Google" },
    { value: "24/7", label: "Urgences" },
    { value: "100%", label: "Satisfaction" },
  ],
};

export const servicesContent = {
  sectionTitle: "Nos Services",
  sectionSubtitle: "Des solutions électriques complètes et professionnelles",
  services: [
    {
      icon: "Zap",
      title: "Installations Neuves",
      subtitle: "Expertise & Conformité",
      description:
        "Conception et réalisation d'installations électriques complètes pour vos constructions neuves. Respect des normes NF C 15-100 et mise en service garantie.",
      image:
        "https://images.unsplash.com/photo-1758101755915-462eddc23f57?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: "Shield",
      title: "Rénovations Électriques",
      subtitle: "Mise en sécurité",
      description:
        "Modernisation et mise aux normes de vos installations existantes. Diagnostic complet, remplacement de tableaux et sécurisation de votre habitat.",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
    },
    {
      icon: "Wrench",
      title: "Dépannage Rapide",
      subtitle: "Intervention ciblée",
      description:
        "Intervention rapide pour tous vos problèmes électriques : pannes, courts-circuits, disjonctions. Diagnostic précis et réparation efficace.",
      image:
        "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600&q=80",
    },
  ],
};

export const brandsContent = {
  sectionTitle: "Nos Partenaires",
  sectionSubtitle:
    "Matériel de qualité professionnelle : HAGER, LEGRAND, SCHNEIDER ELECTRIC",
  brands: [
    {
      name: "HAGER",
      description: "Solutions de distribution électrique",
    },
    {
      name: "LEGRAND",
      description: "Appareillage et systèmes électriques",
    },
    {
      name: "SCHNEIDER ELECTRIC",
      description: "Gestion de l'énergie et automatisation",
    },
  ],
};

export const testimonialsContent = {
  sectionTitle: "Avis Clients",
  sectionSubtitle: "La satisfaction de nos clients est notre priorité",
  reviews: [
    {
      name: "Christelle",
      rating: 5,
      text: "Au top 👍 il m'a bien dépannée un soir où je n'avais plus d'électricité, personne très sérieuse.",
    },
  ],
};

export const contactContent = {
  sectionTitle: "Contact",
  sectionSubtitle: "Besoin d'un électricien ? Contactez-moi directement",
  callCta: "Appeler maintenant",
  phone: "06 99 80 12 92",
  address: "160 Rte de la Blogeonnie, 24590 Saint-Geniès",
  hours: [
    { day: "Lundi – Samedi", time: "09:00 – 18:00" },
    { day: "Dimanche", time: "Fermé" },
  ],
  mapPlaceholder: "Google Maps – 160 Rte de la Blogeonnie, 24590 Saint-Geniès",
};

export const footerContent = {
  copyright: `© ${new Date().getFullYear()} Chris Elec 24. Tous droits réservés.`,
  tagline: "Électricien professionnel à Saint-Geniès, Dordogne",
};

export const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "Chris Elec 24",
  image:
    "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80",
  telephone: "+33699801292",
  address: {
    "@type": "PostalAddress",
    streetAddress: "160 Rte de la Blogeonnie",
    addressLocality: "Saint-Geniès",
    postalCode: "24590",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.9833,
    longitude: 1.25,
  },
  url: "https://chriselec24.fr",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "1",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 44.9833,
      longitude: 1.25,
    },
    geoRadius: "30000",
  },
};
