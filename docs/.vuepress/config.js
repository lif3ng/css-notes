const path = require("path");
module.exports = {
  base: process.env.ghpages ? "/css-notes/" : "/",
  themeConfig: { sidebar: ["/variables"] },
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
