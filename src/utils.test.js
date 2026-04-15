const { formatDate, sum, isPalindrome } = require("./utils");

test("formatDate returns YYYY-MM-DD", () => {
  const date = new Date("2026-04-15T21:20:00Z");
  expect(formatDate(date)).toBe("2026-04-15");
});

test("sum adds numbers correctly", () => {
  expect(sum([1, 2, 3])).toBe(6);
});

test("isPalindrome detects palindromes", () => {
  expect(isPalindrome("Racecar")).toBe(true);
  expect(isPalindrome("Hello")).toBe(false);
});
