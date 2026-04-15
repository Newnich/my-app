const { daysBetween } = require("./date");

test("daysBetween returns whole-day distance between two dates", () => {
  const start = new Date("2026-04-10T00:00:00Z");
  const end = new Date("2026-04-15T00:00:00Z");

  expect(daysBetween(start, end)).toBe(5);
});

test("daysBetween is order-independent", () => {
  const earlier = new Date("2026-04-01T00:00:00Z");
  const later = new Date("2026-04-03T00:00:00Z");

  expect(daysBetween(later, earlier)).toBe(2);
});
