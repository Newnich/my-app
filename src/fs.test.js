jest.mock("node:fs/promises", () => ({
  readFile: jest.fn(),
  writeFile: jest.fn(),
}));

const fs = require("node:fs/promises");
const { readJson, writeJson } = require("./fs");

beforeEach(() => {
  fs.readFile.mockReset();
  fs.writeFile.mockReset();
});

test("readJson reads and parses JSON from disk", async () => {
  fs.readFile.mockResolvedValue('{"enabled":true}');

  await expect(readJson("config.json")).resolves.toEqual({ enabled: true });
  expect(fs.readFile).toHaveBeenCalledWith("config.json", "utf8");
});

test("writeJson serializes data with indentation", async () => {
  await writeJson("config.json", { enabled: true });

  expect(fs.writeFile).toHaveBeenCalledWith(
    "config.json",
    '{\n  "enabled": true\n}'
  );
});
