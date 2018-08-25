/**
 * Set value in object by path
 *
 * @param {Object} object Object to set value to
 * @param {string|Array<string>} path Path to value
 * @param {any} value Value
 * @param {boolean} [ifNotExists] Will skip setting value if value exists
 */
const set = (object, path, value, ifNotExists = false) => {
  path = typeof path === 'string' ? path.split('.') : path.slice();
  let key,
    ref = object;
  while (path.length > 1) {
    key = path.shift();
    if (!ref[key]) ref[key] = {};
    ref = ref[key];
  }
  ref[path[0]] = ifNotExists === true ? ref[path[0]] || value : value;
  return object;
};

export default set;
