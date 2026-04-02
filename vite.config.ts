import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mdx from "@mdx-js/rollup";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import path from "path";
import { componentTagger } from "lovable-tagger";
import remarkMermaid from "./src/lib/mdx/remark-mermaid";

const prettyCodeOptions = {
  keepBackground: false,
  defaultLang: {
    block: "text",
    inline: "text",
  },
  theme: "github-light",
  onVisitLine(node: { children: unknown[] }) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
};

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    mdx({
      remarkPlugins: [remarkGfm, remarkMath, remarkMermaid],
      rehypePlugins: [rehypeKatex, [rehypePrettyCode, prettyCodeOptions]],
    }),
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
