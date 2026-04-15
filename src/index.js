const { getEnv } = require("./config");

function getAppConfig() {
  return {
    appName: getEnv("APP_NAME", "my-app"),
    port: Number(getEnv("PORT", 3000)),
  };
}

function formatReadyMessage(appConfig = getAppConfig()) {
  return `${appConfig.appName} is ready on port ${appConfig.port}`;
}

function main(logger = console.log) {
  logger(formatReadyMessage());
}

if (require.main === module) {
  main();
}

module.exports = { getAppConfig, formatReadyMessage, main };
