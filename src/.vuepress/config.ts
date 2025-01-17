import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "怎么去做饭",
  description: "步骤化",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
