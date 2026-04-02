export type Experience = {
  title: string;
  company: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
  skills: string[];
};

export const experiences: Experience[] = [
  {
    title: "Research Intern",
    company: "Provably.ai",
    period: "Feb 2025 - Mar 2026",
    type: "Internship",
    description:
      "Conducted research on vector databases for efficient storage and retrieval of high-dimensional embeddings. Implemented Locality-Sensitive Hashing (LSH) for approximate nearest-neighbor search and explored scalable algorithms for real-time similarity over large-scale vectors.",
    highlights: [
      "Benchmarked ANN latency/recall trade-offs on multi-million vector collections.",
      "Prototyped LSH pipelines to speed up approximate similarity queries.",
      "Collaborated on evaluation harnesses for reproducible retrieval experiments.",
    ],
    skills: [
      "Vector Databases",
      "LSH",
      "Approximate NN",
      "Similarity Search",
      "High-dimensional Data",
    ],
  },
  {
    title: "Software Engineering Intern (Cryptography)",
    company: "Run Times Machines (Zurich)",
    period: "Jun 2023 - Dec 2023",
    type: "Internship",
    description:
      "Implemented verification algorithms with bit-level logic for security-critical systems and built modular verification components. Designed a Zero-Knowledge proof system for Schnorr signature verification using zk-SNARKs and Circom, with supporting tests and documentation.",
    highlights: [
      "Built modular verification components with bit-level constraints.",
      "Designed a ZK proof flow for Schnorr verification in Circom.",
      "Delivered tests + documentation to validate the proof pipeline.",
    ],
    skills: [
      "Zero-Knowledge Proofs",
      "Circom",
      "Cryptography",
      "Binary Verification",
      "Testing",
    ],
  },
];
