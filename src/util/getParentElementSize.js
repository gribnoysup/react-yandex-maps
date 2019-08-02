/**
 * Return style object depends on props
 *
 * @param {Object} props Component props
 * @returns {Object} Style object result
 */
export default function getParentElementSize(props) {
  const { width, height, style, className } = props;

  if (typeof style !== 'undefined' || typeof className !== 'undefined') {
    return Object.assign({}, style && { style }, className && { className });
  }

  return { style: { width, height } };
}
