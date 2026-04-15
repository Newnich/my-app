const { unique, flatten } = require("./array");

test("unique removes duplicate values", () => {
  expect(unique([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
});

test("flatten merges one level of nested arrays", () => {
  expect(flatten([[1, 2], [3], [4, 5]])).toEqual([1, 2, 3, 4, 5]);
});
