/**
 * Method that helps to get React component name
 *
 * @param {Object} Component React component
 * @returns {string} Component name
 */
export function getDisplayName(Component) {
  return (
    Component.displayName ||
    Component.name ||
    (typeof Component === 'string' && Component.length > 0
      ? Component
      : 'Unknown')
  );
}
