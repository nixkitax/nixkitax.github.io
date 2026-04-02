export type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  year: string;
  type: string;
};

export const education: EducationItem[] = [
  {
    degree: "M.S. Computer Science",
    institution:
      "Università degli Studi Milano-Bicocca (Erasmus: Stockholm University)",
    location: "Milan, Italy / Stockholm, Sweden",
    year: "2023 - 2026",
    type: "Master's",
  },
  {
    degree: "B.S. Computer Science",
    institution: "Università degli Studi dell'Insubria",
    location: "Varese, Italy",
    year: "2023",
    type: "Bachelor's",
  },
];

export const certifications = [
  "CompTIA Security+ (Expected 12/25)",
  "Google Cybersecurity Professional Certificate",
];
