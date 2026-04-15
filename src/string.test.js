const { capitalize, reverse } = require("./string");

test("capitalize uppercases the first character", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("reverse returns the string in reverse order", () => {
  expect(reverse("hello")).toBe("olleh");
});
