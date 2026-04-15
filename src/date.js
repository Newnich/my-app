function daysBetween(date1, date2) {
  const diff = Math.abs(date2 - date1);
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

module.exports = { daysBetween };
