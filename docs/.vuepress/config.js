const path = require("path");
module.exports = {
  title: "CSS 笔记",
  base: process.env.ghpages ? "/css-notes/" : "/",
  shouldPrefetch: () => {
    return false;
  },
  themeConfig: {
    sidebarDepth: 2,
    sidebar: [
      "value-defs",
      "/unit",
      "/variables",
      { title: "弹性布局", children: ["/flex/basic", "/flex/direction"] },
    ],
  },
  markdown: {
    extendMarkdown: (md) => {
      md.set({ linkify: true });
    },
  },
  // configureWebpack: {
  //   resolveLoader: {
  //     modules: ["node_modules", path.resolve(__dirname, "loaders")],
  //   },
  // },
};
