const { delay, timeoutPromise } = require("./async");

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

test("delay resolves after the requested time", async () => {
  const onResolved = jest.fn();
  delay(50).then(onResolved);

  expect(onResolved).not.toHaveBeenCalled();

  jest.advanceTimersByTime(50);
  await Promise.resolve();

  expect(onResolved).toHaveBeenCalledTimes(1);
});

test("timeoutPromise resolves when the promise finishes in time", async () => {
  const promise = Promise.resolve("done");

  await expect(timeoutPromise(promise, 50)).resolves.toBe("done");
});

test("timeoutPromise rejects when the timeout expires first", async () => {
  const promise = new Promise(() => {});
  const result = timeoutPromise(promise, 50);

  jest.advanceTimersByTime(50);

  await expect(result).rejects.toThrow("Operation timed out after 50ms");
});
