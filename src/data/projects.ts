export type Project = {
  title: string;
  description: string;
  tech: string[];
  status: string;
  github: string;
};

export const projects: Project[] = [
  {
    title: "Cloud Honeypot & SIEM Attack Visualization Lab",
    description:
      "Comprehensive cloud-based security lab implementing honeypot systems and SIEM attack visualization. Features automated threat detection, log analytics, and geolocation-based attack mapping using Azure cloud infrastructure.",
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
      "Built a modular system for analyzing multivariate spacecraft telemetry, focusing on data reliability, feature extraction, and scalable pipelines for anomaly detection (NASA SMAP and MSL datasets).",
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
      "End-to-end analytical pipeline on structured gameplay data, from cleaning and exploration to feature engineering, statistical evaluation, and outcome prediction with reproducible notebooks.",
    tech: ["Python", "Data Analysis", "Statistics", "Jupyter"],
    github: "https://github.com/nixkitax",
    status: "Selected Project",
  },
  {
    title: "System Performance Monitoring Tool",
    description:
      "Real-time system monitoring app tracking CPU, memory, and runtime metrics with a focus on reliable data collection and visualization.",
    tech: ["TypeScript", "Monitoring", "Visualization", "Metrics"],
    github: "https://github.com/nixkitax",
    status: "Selected Project",
  },
];
