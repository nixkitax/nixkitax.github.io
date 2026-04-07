import type { ComponentType } from "react";
import ThesisVerifiableLSH from "./posts/thesis-verifiable-lsh.mdx";

type MdxContentProps = {
  components?: Record<string, ComponentType | keyof JSX.IntrinsicElements>;
};

export const postContent = {
  "thesis-verifiable-lsh": ThesisVerifiableLSH,
} satisfies Record<string, ComponentType<MdxContentProps>>;
