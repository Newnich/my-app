const fs = require("node:fs/promises");

async function readJson(filePath) {
  const contents = await fs.readFile(filePath, "utf8");
  return JSON.parse(contents);
}

async function writeJson(filePath, data) {
  const contents = JSON.stringify(data, null, 2);
  await fs.writeFile(filePath, contents);
}

module.exports = { readJson, writeJson };
