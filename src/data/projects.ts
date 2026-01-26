export type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  status: string;
  github: string;
};

export const projects: Project[] = [
  {
    title: "Cloud Honeypot & SIEM Attack Visualization Lab",
    description:
      "Cloud security lab with honeypots, SIEM analytics, and attack mapping on Azure.",
    image: "https://placehold.co/720x420/png?text=Cloud+Security+Lab",
    tech: [
      "Azure VM",
      "Azure Sentinel",
      "Log Analytics",
      "PowerShell",
      "Windows Event Logs",
      "KQL",
    ],
    github: "https://github.com/nixkitax",
    status: "Completed",
  },
  {
    title: "Telemetry Analysis & Anomaly Detection",
    description:
      "Modular pipeline for spacecraft telemetry analysis and anomaly detection.",
    image: "https://placehold.co/720x420/png?text=Telemetry+Analysis",
    tech: [
      "Python",
      "Time-Series",
      "Anomaly Detection",
      "Feature Engineering",
    ],
    github: "https://github.com/nixkitax",
    status: "Selected Project",
  },
  {
    title: "Algorithmic Analysis of Structured Event Data",
    description:
      "End-to-end pipeline for structured event data analysis and prediction.",
    image: "https://placehold.co/720x420/png?text=Event+Data+Pipeline",
    tech: ["Python", "Data Analysis", "Statistics", "Jupyter"],
    github: "https://github.com/nixkitax",
    status: "Selected Project",
  },
  {
    title: "System Performance Monitoring Tool",
    description:
      "Real-time monitoring for CPU, memory, and runtime metrics.",
    image: "https://placehold.co/720x420/png?text=Performance+Monitor",
    tech: ["TypeScript", "Monitoring", "Visualization", "Metrics"],
    github: "https://github.com/nixkitax",
    status: "Selected Project",
  },
];
