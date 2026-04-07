export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: readonly string[];
  homeExcerpt?: string;
};

const thesisPost: BlogPostMeta = {
  slug: "thesis-verifiable-lsh",
  title: "From Thesis to Prototype: Verifiable LSH in Halo2",
  description:
    "A technical walkthrough of my thesis project on verifiable bucket computation for private vector databases.",
  date: "2026-04-02",
  tags: ["thesis", "halo2", "lsh", "zk"],
  homeExcerpt:
    "The prototype proves correct LSH bucket derivation under a shared quantized arithmetic model, combining Halo2, deterministic fixed-point encoding, PostgreSQL + pgvector, and client-side verification.",
};

export const posts: readonly BlogPostMeta[] = [thesisPost];
