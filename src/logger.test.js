const { formatMessage, createLogger } = require("./logger");

test("formatMessage adds timestamp and uppercased level", () => {
  expect(formatMessage("info", "ready", "2026-04-15T00:00:00.000Z")).toBe(
    "[2026-04-15T00:00:00.000Z] INFO: ready"
  );
});

test("createLogger.info writes a formatted info message", () => {
  const writer = jest.fn();
  const logger = createLogger(writer);

  logger.info("started");

  expect(writer).toHaveBeenCalledTimes(1);
  expect(writer.mock.calls[0][0]).toContain("INFO: started");
});

test("createLogger.warn writes a formatted warn message", () => {
  const writer = jest.fn();
  const logger = createLogger(writer);

  logger.warn("careful");

  expect(writer.mock.calls[0][0]).toContain("WARN: careful");
});

test("createLogger.error writes a formatted error message", () => {
  const writer = jest.fn();
  const logger = createLogger(writer);

  logger.error("failed");

  expect(writer.mock.calls[0][0]).toContain("ERROR: failed");
});
