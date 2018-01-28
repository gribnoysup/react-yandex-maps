export function isControlledProp(props, key) {
  return props[key] !== undefined;
}

export function getProp(props, key) {
  return isControlledProp(props, key)
    ? props[key]
    : props['default' + key.charAt(0).toUpperCase() + key.slice(1)];
}
