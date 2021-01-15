const path = require("path");
module.exports = {
  themeConfig: { sidebar: ["/variables"] },
  configureWebpack: {
    resolveLoader: {
      modules: ["node_modules", path.resolve(__dirname, "loaders")],
    },
  },
};
