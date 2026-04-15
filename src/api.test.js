jest.mock("node-fetch", () => jest.fn());

const fetch = require("node-fetch");
const { fetchJson, fetchText } = require("./api");

beforeEach(() => {
  fetch.mockReset();
});

test("fetchJson returns parsed JSON when the response is ok", async () => {
  const payload = { status: "ok" };
  fetch.mockResolvedValue({
    ok: true,
    json: jest.fn().mockResolvedValue(payload),
  });

  await expect(fetchJson("https://example.com/data")).resolves.toEqual(payload);
  expect(fetch).toHaveBeenCalledWith("https://example.com/data");
});

test("fetchJson throws on a non-ok response", async () => {
  fetch.mockResolvedValue({
    ok: false,
    status: 404,
  });

  await expect(fetchJson("https://example.com/missing")).rejects.toThrow(
    "HTTP error! status: 404"
  );
});

test("fetchText returns text when the response is ok", async () => {
  fetch.mockResolvedValue({
    ok: true,
    text: jest.fn().mockResolvedValue("hello world"),
  });

  await expect(fetchText("https://example.com/message")).resolves.toBe("hello world");
  expect(fetch).toHaveBeenCalledWith("https://example.com/message");
});

test("fetchText throws on a non-ok response", async () => {
  fetch.mockResolvedValue({
    ok: false,
    status: 500,
  });

  await expect(fetchText("https://example.com/error")).rejects.toThrow(
    "HTTP error! status: 500"
  );
});
