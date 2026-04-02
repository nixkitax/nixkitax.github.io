import { visit } from "unist-util-visit";

type CodeNode = {
  type: "code";
  lang?: string | null;
  value: string;
};

type MdxAttribute = {
  type: "mdxJsxAttribute";
  name: string;
  value: string;
};

type MdxElement = {
  type: "mdxJsxFlowElement";
  name: string;
  attributes: MdxAttribute[];
  children: [];
};

type ParentNode = {
  children?: unknown[];
};

const createMermaidNode = (chart: string): MdxElement => ({
  type: "mdxJsxFlowElement",
  name: "mermaid",
  attributes: [
    {
      type: "mdxJsxAttribute",
      name: "chart",
      value: chart,
    },
  ],
  children: [],
});

export default function remarkMermaid() {
  return (tree: unknown) => {
    visit(tree, "code", (node: CodeNode, index: number | undefined, parent: ParentNode | undefined) => {
      if (!parent?.children || index === undefined) return;
      if (node.lang?.toLowerCase() !== "mermaid") return;

      parent.children[index] = createMermaidNode(node.value);
    });
  };
}
