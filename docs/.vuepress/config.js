const path = require("path");
module.exports = {
  configureWebpack: {
    resolveLoader: {
      modules: ["node_modules", path.resolve(__dirname, "loaders")],
    },
  },
};
