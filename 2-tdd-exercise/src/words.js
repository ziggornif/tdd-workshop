/**
 * Count words sentence
 * @param {string} text
 * @returns {number}
 */
function count(text) {
  return text.split().length;
}

module.exports = {
  count,
};
