const { safeParseJson, retry } = require("./errors");

test("safeParseJson returns parsed JSON for valid input", () => {
  const result = safeParseJson('{"name":"my-app"}');

  expect(result).toEqual({ ok: true, value: { name: "my-app" } });
});

test("safeParseJson returns the parse error for invalid input", () => {
  const result = safeParseJson("{invalid");

  expect(result.ok).toBe(false);
  expect(result.error).toBeInstanceOf(SyntaxError);
});

test("retry resolves when a later attempt succeeds", async () => {
  const fn = jest
    .fn()
    .mockRejectedValueOnce(new Error("first failure"))
    .mockResolvedValueOnce("success");

  await expect(retry(fn, 2)).resolves.toBe("success");
  expect(fn).toHaveBeenCalledTimes(2);
});

test("retry throws the last error when all attempts fail", async () => {
  const fn = jest.fn().mockRejectedValue(new Error("still failing"));

  await expect(retry(fn, 3)).rejects.toThrow("still failing");
  expect(fn).toHaveBeenCalledTimes(3);
});
