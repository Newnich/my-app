# my-app

[![CI](https://github.com/Newnich/my-app/actions/workflows/test.yml/badge.svg)](https://github.com/Newnich/my-app/actions/workflows/test.yml)
![Coverage](https://img.shields.io/badge/coverage-95.89%25-brightgreen)

Small Node.js utility library with Jest tests, coverage reporting, and GitHub Actions CI.

## Install

```bash
npm install
```

## Scripts

- `npm start` runs the app entrypoint.
- `npm run dev` runs the app in watch mode.
- `npm test` runs the Jest suite.
- `npm run coverage` runs Jest with coverage output.

## Usage

```js
const { sum, isPalindrome } = require("./src/utils");
const { multiply, divide } = require("./src/math");
const { unique, flatten } = require("./src/array");
const { getEnv } = require("./src/config");

console.log(sum([1, 2, 3]));
console.log(isPalindrome("Racecar"));
console.log(multiply(4, 5));
console.log(divide(12, 3));
console.log(unique([1, 1, 2, 3]));
console.log(flatten([[1, 2], [3, 4]]));
console.log(getEnv("PORT", 3000));
```

## Modules

- `src/utils.js`: date formatting, summation, palindrome checks
- `src/math.js`: multiply and divide helpers
- `src/string.js`: string capitalization and reversal
- `src/array.js`: unique values and one-level flattening
- `src/date.js`: day-distance calculation
- `src/config.js`: environment lookup helper
- `src/api.js`: JSON and text fetch helpers
- `src/errors.js`: safe JSON parsing and retry logic
- `src/logger.js`: formatted console logging helpers
- `src/fs.js`: JSON file read and write helpers
- `src/async.js`: delay and timeout helpers

## CI

GitHub Actions runs the test and coverage workflow on every push and pull request through `.github/workflows/test.yml`.

## Notes

- Replace placeholder GitHub URLs in `package.json` with the live repository path.
- The coverage badge is currently a static placeholder based on the latest local run.
