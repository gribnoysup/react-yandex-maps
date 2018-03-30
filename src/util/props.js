/**
 * Checks if key exists on an object
 * 
 * @param {Object} props Component props
 * @param {string} key Prop key
 * @returns {boolean} Check result
 */
export function isControlledProp(props, key) {
  return props[key] !== undefined;
}

/**
 * Checks if prop exists, otherwise returns "uncontrolled" 
 * prop that starts with default (e.g., defaultValue)
 * 
 * @param {Object} props Component props
 * @param {string} key Prop key
 * @return {any} Prop value
 */
export function getProp(props, key) {
  return isControlledProp(props, key)
    ? props[key]
    : props['default' + key.charAt(0).toUpperCase() + key.slice(1)];
}
