/**
 * Helper method to remove keys from the object
 *
 * @param {Object} obj Object to remove keys from
 * @param {string[]} arr List of keys to remove
 * @returns {Object} Object with omitted keys
 */
export const omit = (obj, arr) => {
  const res = {};
  for (var n in obj) {
    if (arr.indexOf(n) === -1) res[n] = obj[n];
  }
  return res;
};
