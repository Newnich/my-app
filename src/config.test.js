const { getEnv } = require("./config");

test("getEnv returns the environment value when present", () => {
  process.env.TEST_KEY = "configured";

  expect(getEnv("TEST_KEY", "fallback")).toBe("configured");

  delete process.env.TEST_KEY;
});

test("getEnv returns the default value when missing", () => {
  delete process.env.MISSING_KEY;

  expect(getEnv("MISSING_KEY", "fallback")).toBe("fallback");
});
