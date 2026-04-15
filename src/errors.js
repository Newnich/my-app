function safeParseJson(str) {
  try {
    return { ok: true, value: JSON.parse(str) };
  } catch (error) {
    return { ok: false, error };
  }
}

async function retry(fn, attempts) {
  let lastError;

  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError;
}

module.exports = { safeParseJson, retry };
