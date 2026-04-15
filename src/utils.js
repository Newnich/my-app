function formatDate(date) {
  return date.toISOString().split("T")[0];
}

function sum(numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}

function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

module.exports = { formatDate, sum, isPalindrome };
