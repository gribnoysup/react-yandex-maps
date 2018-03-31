const get = (object, path, defaultValue) => {
  path = typeof path === 'string' ? path.split('.') : path.slice();
  let key,
    ref = object;
  while (ref && (key = path.shift())) {
    ref = ref[key];
  }
  return ref || defaultValue;
};

export default get;
