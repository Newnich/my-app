function formatMessage(level, message, timestamp = new Date().toISOString()) {
  return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
}

function createLogger(writer = console.log) {
  return {
    info(message) {
      writer(formatMessage("info", message));
    },
    warn(message) {
      writer(formatMessage("warn", message));
    },
    error(message) {
      writer(formatMessage("error", message));
    },
  };
}

module.exports = { formatMessage, createLogger };
