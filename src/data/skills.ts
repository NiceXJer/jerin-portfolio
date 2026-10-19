export type SkillGroupData = {
  titleKey:
    | "skills.mobileui"
    | "skills.architecture"
    | "skills.tools"
    | "skills.healthcare"
    | "skills.leadership";
  wide?: boolean;
  skills: { name: string; icon?: string }[];
};

export const skillGroups: SkillGroupData[] = [
  {
    titleKey: "skills.mobileui",
    skills: [
      { name: "Flutter", icon: "flutter.svg" },
      { name: "Dart", icon: "dart.svg" },
      { name: "Cross-Platform Architecture" },
      { name: "Responsive UI Design" },
      { name: "State Management (GetX, Riverpod)" },
    ],
  },
  {
    titleKey: "skills.architecture",
    skills: [
      { name: "REST APIs" },
      { name: "WebSockets" },
      { name: "Firebase", icon: "firebase.svg" },
      { name: "AI/LLM Integration" },
      { name: "JSON & Data Modeling" },
    ],
  },
  {
    titleKey: "skills.tools",
    skills: [
      { name: "Git & GitHub" },
      { name: "CI/CD Automation" },
      { name: "Postman" },
      { name: "Jira" },
      { name: "Play Store & App Store" },
    ],
  },
  {
    titleKey: "skills.healthcare",
    skills: [
      { name: "HL7 / FHIR" },
      { name: "DICOM" },
      { name: "Orthanc PACS" },
      { name: "Cisco Networking" },
      { name: "Linux", icon: "linux.svg" },
      { name: "Docker", icon: "docker.svg" },
    ],
  },
  {
    titleKey: "skills.leadership",
    wide: true,
    skills: [
      { name: "Project Planning" },
      { name: "Requirements Analysis" },
      { name: "Agile Delivery" },
      { name: "Client Communication" },
      { name: "Stakeholder Management" },
      { name: "System Design" },
      { name: "Mentoring" },
      { name: "Problem Solving" },
    ],
  },
];