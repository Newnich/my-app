function unique(arr) {
  return [...new Set(arr)];
}

function flatten(arr) {
  return arr.reduce((acc, val) => acc.concat(val), []);
}

module.exports = { unique, flatten };
