export const defaultLang = "en";

export const ui = {
  en: {
    "meta.title": "Jerin George | Mobile Software Engineer (Flutter & Dart)",
    "meta.description":
      "Flutter & Dart developer with Healthcare IT integration experience (HL7/FHIR, DICOM). Relocating to Germany.",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.badge": "German B2",
    "hero.greeting": "Hi, I'm Jerin George",
    "hero.title": "Mobile Software Engineer (Flutter & Dart)",
    "hero.subtitle": "Specialized in Cross-Platform Apps & Healthcare IT Integration",
    "hero.body":
      "Flutter Developer with nearly 3 years of experience delivering full-cycle mobile products across Healthcare, ERP, and Government domains. I combine hands-on technical execution with clean architecture, workflow design, and end-to-end product delivery from concept to production.<br><br><strong>Languages:</strong> Fluent English (C1) & German (B2 Certified)<br>", 
      //<br><strong>Work Authorization:</strong> Relocating to Germany via the Opportunity Card (<em>Chancenkarte</em> — full work authorization, EU Blue Card eligible)",
    "hero.cv": "Download Lebenslauf (CV)",
    "skills.heading": "Technical Expertise",
    "skills.mobile": "Mobile",
    "skills.backend": "Backend & Systems",
    "skills.specialized": "Specialized & Networking",
    "projects.heading": "Featured Projects",
    "projects.soon": "Coming soon.",
    "contact.heading": "Get in touch",
    "contact.text":
      "I'm open to Flutter, mobile and Healthcare IT roles in Germany. Email is the best way to reach me.",
    "footer.impressum": "Impressum",
    "footer.note": "Personal portfolio website",
    "impressum.back": "Back to home",
    "skills.mobileui": "Mobile & UI",
    "skills.architecture": "Architecture & APIs",
    "skills.tools": "Tools & Delivery",
    "skills.healthcare": "Healthcare IT & Networking",
    "skills.leadership": "Leadership & Workflow",
  },
  de: {
    "meta.title": "Jerin George | Mobile Software Engineer (Flutter & Dart)",
    "meta.description":
      "Flutter- & Dart-Entwickler mit Erfahrung in Healthcare-IT-Integration (HL7/FHIR, DICOM). Umzug nach Deutschland geplant.",
    "nav.home": "Start",
    "nav.about": "Über mich",
    "nav.skills": "Kenntnisse",
    "nav.projects": "Projekte",
    "nav.contact": "Kontakt",
    "nav.badge": "Deutsch B2",
    "hero.greeting": "Hallo, ich bin Jerin George",
    "hero.title": "Mobile Software Engineer (Flutter & Dart)",
    "hero.subtitle": "Spezialisiert auf Cross-Platform-Apps & Healthcare-IT-Integration",
    "hero.body":
      "Flutter-Entwickler mit fast 3 Jahren Erfahrung in der Umsetzung von Full-Cycle-Mobile-Products in den Bereichen Healthcare, ERP und öffentliche Verwaltung. Ich kombiniere praxisnahe technische Umsetzung mit sauberer Architektur, Prozessdesign und einem durchgängigen Produkt-Delivery von der Idee bis zur Produktion.<br><br><strong>Sprachen:</strong> Fließend Englisch (C1) & Deutsch (Zertifiziertes B2-Niveau)<br><br><strong>Arbeitsberechtigung:</strong> Umzug nach Deutschland über die Chancenkarte (<em>Opportunity Card</em> — volle Arbeitsberechtigung, EU-Blue-Card geeignet)",
    "hero.cv": "Lebenslauf herunterladen (PDF)",
    "skills.heading": "Technische Kenntnisse",
    "skills.mobile": "Mobile",
    "skills.backend": "Backend & Systeme",
    "skills.specialized": "Spezialgebiete & Netzwerk",
    "projects.heading": "Ausgewählte Projekte",
    "projects.soon": "Folgt in Kürze.",
    "contact.heading": "Kontakt aufnehmen",
    "contact.text":
      "Ich bin offen für Stellen als Flutter-, Mobile- und Healthcare-IT-Entwickler in Deutschland. Am besten erreichen Sie mich per E-Mail.",
    "footer.impressum": "Impressum",
    "footer.note": "Private Portfolio-Website",
    "impressum.back": "Zurück zur Startseite",
    "skills.mobileui": "Mobile & UI",
    "skills.architecture": "Architektur & APIs",
    "skills.tools": "Tools & Auslieferung",
    "skills.healthcare": "Healthcare-IT & Netzwerk",
    "skills.leadership": "Führung & Arbeitsweise",
  },
} as const;

export type Lang = keyof typeof ui;
export type UiKey = keyof (typeof ui)["en"];

export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key] ?? ui[defaultLang][key];
}