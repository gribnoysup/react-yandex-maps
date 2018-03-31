const set = (object, path, value) => {
  path = typeof path === 'string' ? path.split('.') : path.slice();
  let key,
    ref = object;
  while (path.length > 1) {
    key = path.shift();
    if (!ref[key]) ref[key] = {};
    ref = ref[key];
  }
  ref[path[0]] = value;
  return object;
};

export default set;
