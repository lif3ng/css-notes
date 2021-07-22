const path = require("path");
module.exports = {
  title: "CSS 笔记",
  base: process.env.ghpages ? "/css-notes/" : "/",
  shouldPrefetch: () => false,
  themeConfig: {
    sidebarDepth: 2,
    sidebar: [
      "value-defs",
      "selector",
      "specificity",
      "/unit",
      "/variables",
      "/replaced",
      {
        title: "盒模型",
        children: [
          "/box-model/basic",
          "/box-model/border",
          "/box-model/box-shadow",
        ],
      },
      {
        title: "弹性布局",
        children: [
          "/flex/basic",
          "/flex/direction",
          "/flex/wrap",
          "/flex/justify-content",
        ],
      },
      {
        title: "网格布局",
        children: ["/grid/basic"],
      },
      { title: "列表", children: ["list/styletype"] },
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
