const EVENTS_REGEX = /^on(?=[A-Z])/;

/**
 * Separates YMaps events from other component props based on prop name
 *
 * @param {Object} props Component props
 * @returns {Object} Separated _event props and other component props
 */
export function separateEvents(props) {
  return Object.keys(props).reduce(
    (acc, key) => {
      if (EVENTS_REGEX.test(key)) {
        const eventName = key.replace(EVENTS_REGEX, '').toLowerCase();
        acc._events[eventName] = props[key];
      } else {
        acc[key] = props[key];
      }

      return acc;
    },
    { _events: {} }
  );
}

/**
 * Adds event to YMaps object
 *
 * @param {Object} instance YMaps object instance
 * @param {string} eventName Event name (e.g., "onclick", "ontouchstart")
 * @param {Function} handler Event handler method
 */
export function addEvent(instance, eventName, handler) {
  if (typeof handler === 'function') {
    instance.events.add(eventName, handler);
  }
}

/**
 * Removes event from YMaps object
 *
 * @param {Object} instance YMaps object instance
 * @param {string} eventName Event name (e.g., "onclick", "ontouchstart")
 * @param {Function} handler Event handler method
 */
export function removeEvent(instance, eventName, handler) {
  if (typeof handler === 'function') {
    instance.events.remove(eventName, handler);
  }
}

/**
 * Given two objects with new and old events, checks if event was
 * changed and updates it by removing the old one and adding the
 * new one
 *
 * @param {Object} instance YMaps object instance
 * @param {Object} oldEvents Map of old events
 * @param {Object} newEvents Map of new events
 */
export function updateEvents(instance, oldEvents, newEvents) {
  Object.keys(Object.assign({}, oldEvents, newEvents)).forEach(eventName => {
    if (oldEvents[eventName] !== newEvents[eventName]) {
      removeEvent(instance, eventName, oldEvents[eventName]);
      addEvent(instance, eventName, newEvents[eventName]);
    }
  });
}
