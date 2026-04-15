function getEnv(key, defaultValue = null) {
  return process.env[key] || defaultValue;
}

module.exports = { getEnv };
