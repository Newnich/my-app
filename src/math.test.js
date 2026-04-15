const { multiply, divide } = require("./math");

test("multiply returns the product of two numbers", () => {
  expect(multiply(3, 4)).toBe(12);
});

test("divide returns the quotient of two numbers", () => {
  expect(divide(12, 3)).toBe(4);
});

test("divide throws when dividing by zero", () => {
  expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
});
