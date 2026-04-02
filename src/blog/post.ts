import ThesisVerifiableLSH from "./posts/thesis-verifiable-lsh.mdx";
import VerifiableLSH from "./posts/verifiable-lsh.mdx";

export const posts = [
  {
    slug: "thesis-verifiable-lsh",
    title: "From Thesis to Prototype: Verifiable LSH in Halo2",
    description:
      "A technical walkthrough of my thesis project on verifiable bucket computation for private vector databases.",
    date: "2026-04-02",
    content: ThesisVerifiableLSH,
    tags: ["thesis", "halo2", "lsh", "zk"],
  },
  {
    slug: "verifiable-lsh",
    title: "Verifiable LSH: notes & pitfalls",
    description:
      "How to prove nearest-neighbor search without leaking the dataset.",
    date: "2026-01-20",
    content: VerifiableLSH,
    tags: ["zk", "lsh", "research"],
  },
];
