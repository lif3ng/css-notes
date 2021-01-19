const path = require("path");
module.exports = {
  title: "CSS 笔记",
  base: process.env.ghpages ? "/css-notes/" : "/",
  themeConfig: { sidebarDepth: 2, sidebar: ["/unit", "/variables"] },
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
