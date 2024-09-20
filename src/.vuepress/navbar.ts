import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "食谱",
    icon: "pen-to-square",
    link: "/dishes/",
  },
  {
    text: "tips",
    icon: "pen-to-square",
    link: "/tips/"
  },
]);
