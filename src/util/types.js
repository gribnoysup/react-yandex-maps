export function coordinates(propValue, key, componentName, location, propFullName) {
    const coords = propValue[key]
    const message = `Invalid prop \`${propFullName || key}\` supplied to \`${componentName}\`, expected \`Array<Number, Number>\`.`

    if (!Array.isArray(coords)) {
      return new Error(message)
   }

    if (coords.length !== 2) {
      return new Error(message)
   }

    if (typeof coords[0] !== 'number' || isNaN(coords[0])) {
      return new Error(message)
   }

    if (typeof coords[1] !== 'number' || isNaN(coords[1])) {
      return new Error(message)
   }
}

export default {coordinates}
