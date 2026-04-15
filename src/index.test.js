const { getAppConfig, formatReadyMessage, main } = require("./index");

test("formatReadyMessage returns the expected status line", () => {
  const message = formatReadyMessage({ appName: "demo-app", port: 8080 });

  expect(message).toBe("demo-app is ready on port 8080");
});

test("main logs the configured app readiness message", () => {
  const calls = [];
  const logger = (message) => {
    calls.push(message);
  };

  main(logger);

  expect(calls).toEqual([formatReadyMessage(getAppConfig())]);
});
