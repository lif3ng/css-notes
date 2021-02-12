const fs = require("fs");
const path = require("path");
const glob = require("glob");

const loadDemos = () =>
  new Promise((resolve, reject) => {
    glob("demos/**/*.json", (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });

const start = async () => {
  const files = await loadDemos();

  const obj = {};
  files.forEach((file) => {
    const lastSlashIndex = file.lastIndexOf("/");
    const filePath = file.substring(0, lastSlashIndex);
    const key = file.substring(lastSlashIndex + 1).replace(/\.json$/, "");

    const content = fs.readFileSync(file, "utf-8");
    const data = JSON.parse(content);
    if (obj[filePath]) {
      obj[filePath][key] = data;
    } else {
      obj[filePath] = { [key]: data };
    }
  });

  fs.rmdirSync(".demos-cache", { recursive: true });
  fs.mkdirSync(".demos-cache");
  Object.entries(obj).forEach(([dirPath, demos]) => {
    fs.writeFileSync(
      path.join(".demos-cache", dirPath.replace(/\//g, "-") + ".json"),
      JSON.stringify(demos, null, 2)
    );
  });
  process.env.demoMerged = 1;
};

start();
