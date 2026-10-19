export type ProjectData = {
  title: string;
  description: { en: string; de: string };
  stack: string[];
  links: { label: string; href: string }[];
  note?: { en: string; de: string };
};

export const projects: ProjectData[] = [
  {
    title: "G Health – ABHA",
    description: {
      en: "UI/UX design and frontend implementation of a secure healthcare app for digital patient registration, appointment management and medical data presentation. Client-side integration of the ABHA (Ayushman Bharat Health Account) systems in line with the official ABDM government guidelines.",
      de: "UI/UX-Design und Frontend-Implementierung einer gesicherten Gesundheitsapplikation zur digitalen Patientenerfassung, Terminverwaltung und medizinischen Datenaufbereitung. Clientseitige Anbindung der ABHA-Systeme (Ayushman Bharat Health Account) unter Einhaltung der offiziellen ABDM-Vorgaben.",
    },
    // TODO: add your state management / architecture here, e.g. "GetX", "MVC"
    stack: ["Flutter", "ABHA / ABDM"],
    links: [],
    note: {
      en: "Client project, no public link.",
      de: "Kundenprojekt, kein öffentlicher Link.",
    },
  },
  {
    title: "360 Degree",
    description: {
      en: "Mobile app for clinic administrators to control remote processes (reboot, shutdown, logout) and monitor system performance in real time.",
      de: "Mobile App für Klinik-Administratoren zur Steuerung von Remote-Prozessen (Neustart, Herunterfahren, Abmelden) und zur Echtzeit-Überwachung der Systemleistung.",
    },
    stack: ["Flutter", "Android", "iOS"],
    links: [
      {
        label: "Android",
        href: "https://play.google.com/store/apps/details?id=com.grapeshms.degree360&hl=en_IN",
      },
      {
        label: "iOS",
        href: "https://apps.apple.com/in/app/360degree-grapes/id6503037962",
      },
    ],
  },
  {
    title: "GOFFICE",
    description: {
      en: "Digital file approval workflow replacing physical paperwork with secure document-based collaboration, confidentiality controls and faster operational approvals.",
      de: "Digitales Dokumentenmanagement zur Ablösung manueller Papierprozesse: sichere Zusammenarbeit an Dokumenten, Vertraulichkeitskontrollen und schnellere Freigaben im Betrieb.",
    },
    stack: ["GetX", "MVC", "Android", "iOS", "Web"],
    links: [
      {
        label: "Android",
        href: "https://play.google.com/store/apps/details?id=com.grapeshms.gofficeandroid&pcampaignid=web_share&pli=1",
      },
      {
        label: "iOS",
        href: "https://apps.apple.com/in/app/goffice/id6505055884",
      },
      { label: "Web", href: "https://goffice.co.in/" },
    ],
  },
];