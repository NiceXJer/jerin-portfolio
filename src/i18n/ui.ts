export const defaultLang = "en";

export const ui = {
  en: {
    "meta.title": "Jerin George | Mobile Software Engineer (Flutter & Dart)",
    "meta.description":
      "Flutter & Dart developer with Healthcare IT integration experience (HL7/FHIR, DICOM). Relocating to Germany.",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.credentials": "Credentials",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.badge": "German B2",
    "hero.greeting": "Hi, I'm Jerin George",
    "hero.title": "Mobile Software Engineer (Flutter & Dart)",
    "hero.subtitle": "Specialized in Healthcare IT Integration & Cross-Platform Apps",
    "hero.body":
      "Full-cycle mobile developer with nearly 3 years of production experience building high-performance cross-platform applications across Healthcare, ERP, and enterprise domains. Specialized in clean architecture, API integration, and clinical data interoperability (HL7/FHIR, DICOM).<br><br><strong>Languages:</strong> Fluent English (C1) & German (B2 Certified)<br>", 
      //<br><strong>Work Authorization:</strong> Relocating to Germany via the Opportunity Card (<em>Chancenkarte</em> — full work authorization, EU Blue Card eligible)",
    "hero.cv": "Download Lebenslauf (CV)",
    "skills.heading": "Technical Expertise",
    "skills.mobile": "Mobile",
    "skills.backend": "Backend & Systems",
    "skills.specialized": "Specialized & Networking",
    "skills.credentials": "Credentials",
    "projects.heading": "Featured Projects",
    "projects.soon": "Coming soon.",
    "contact.heading": "Get in touch",
    "contact.text":
      "I'm open to Flutter, mobile and Healthcare IT roles in Germany. Email is the best way to reach me.",
    "footer.impressum": "Impressum",
    "footer.note": "Personal portfolio website",
    "impressum.back": "Back to home",
    "skills.mobileui": "Mobile Engineering & UI Architecture",
    "skills.architecture": "Backend Services & APIs",
    "skills.tools": "Tools & Delivery",
    "skills.healthcare": "Healthcare IT & Networking",
    "skills.leadership": "Methodology & Team Collaboration",
    "credentials.view": "View certificate",
    "credentials.verify": "Verify online",
    "credentials.close": "Close",
  },
  de: {
    "meta.title": "Jerin George | Mobile Software Engineer (Flutter & Dart)",
    "meta.description":
      "Flutter- & Dart-Entwickler mit Erfahrung in Healthcare-IT-Integration (HL7/FHIR, DICOM). Umzug nach Deutschland geplant.",
    "nav.home": "Start",
    "nav.about": "Über mich",
    "nav.skills": "Kenntnisse",
    "nav.credentials": "Zertifikate",
    "nav.projects": "Projekte",
    "nav.contact": "Kontakt",
    "nav.badge": "Deutsch B2",
    "hero.greeting": "Hallo, ich bin Jerin George",
    "hero.title": "Mobile Software Engineer (Flutter & Dart)",
    "hero.subtitle": "Spezialisiert auf Healthcare-IT-Integration & Cross-Platform-Apps",
    "hero.body":
      "Softwareentwickler mit knapp 3 Jahren Praxiserfahrung in der Entwicklung produktiver mobiler Anwendungen in den Bereichen Healthcare, ERP und Enterprise. Mein Schwerpunkt liegt auf sauberer Architektur (Clean Architecture), performanter Schnittstellenanbindung und klinischer Interoperabilität (HL7/FHIR, DICOM).<br><br><strong>Sprachen:</strong> Fließend Englisch (C1) & Deutsch (Zertifiziertes B2-Niveau)<br><br><strong>Arbeitsberechtigung:</strong> Umzug nach Deutschland über die Chancenkarte (<em>Opportunity Card</em> — volle Arbeitsberechtigung, EU-Blue-Card geeignet)",
    "hero.cv": "Lebenslauf herunterladen (PDF)",
    "skills.heading": "Technische Kenntnisse",
    "skills.mobile": "Mobile",
    "skills.backend": "Backend & Systeme",
    "skills.specialized": "Spezialgebiete & Netzwerk",
    "skills.credentials": "Zertifikate",
    "projects.heading": "Ausgewählte Projekte",
    "projects.soon": "Folgt in Kürze.",
    "contact.heading": "Kontakt aufnehmen",
    "contact.text":
      "Ich bin offen für Stellen als Flutter-, Mobile- und Healthcare-IT-Entwickler in Deutschland. Am besten erreichen Sie mich per E-Mail.",
    "footer.impressum": "Impressum",
    "footer.note": "Private Portfolio-Website",
    "impressum.back": "Zurück zur Startseite",
    "skills.mobileui": "Mobile Engineering & UI-Architektur",
    "skills.architecture": "Backend-Dienste & APIs",
    "skills.tools": "Tools & Auslieferung",
    "skills.healthcare": "Healthcare-IT & Netzwerk",
    "skills.leadership": "Methodik & Teamzusammenarbeit",
    "credentials.view": "Zertifikat ansehen",
    "credentials.verify": "Online prüfen",
    "credentials.close": "Schließen",
  },
} as const;

export type Lang = keyof typeof ui;
export type UiKey = keyof (typeof ui)["en"];

export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key] ?? ui[defaultLang][key];
}