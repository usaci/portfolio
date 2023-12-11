import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";
import { type Category } from "./category";
import { type Tags } from "./tags";
export type Blog = {
  title?: string;
  content?: string;
  eyecatch?: MicroCMSImage;
  category: (MicroCMSListContent & Category) | null;
  tags: (MicroCMSListContent & Tags) | null;
};