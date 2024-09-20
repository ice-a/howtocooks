import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "食谱",
      icon: "book",
      prefix: "dishes/",
      children: "structure",
    },
    {
      text: "小提示",
      icon: "laptop-code",
      prefix: "tips/",
      link: "tips/",
      children: "structure",
    },
  ],
});
