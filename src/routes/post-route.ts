import { lazy } from "react";

let postPagePromise: ReturnType<typeof importPostPage> | null = null;

const importPostPage = () => import("@/pages/Post");

const loadPostPage = () => {
  postPagePromise ??= importPostPage();
  return postPagePromise;
};

export const preloadPostPage = () => {
  void loadPostPage();
};

export const LazyPostPage = lazy(loadPostPage);
