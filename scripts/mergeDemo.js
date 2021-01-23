// todo: load demo files
const files = [];

const obj = {};
files.forEach((file) => {
  const lastSlashIndex = file.lastIndexOf("/");
  const path = file.substring(0, lastSlashIndex);
  const key = file.substring(lastSlashIndex + 1).replace(/\.json$/, "");
  // todo
  const data = JSON.parse(/* file content */);
  // console.log({ path, key });
  if (obj[path]) {
    obj[path][key] = data;
  } else {
    obj[path] = { [key]: data };
  }
});
Object.entries(obj).forEach(([path, demos]) => {
  // todo: write merge demos data
});
