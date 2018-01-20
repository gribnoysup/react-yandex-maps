const eventsRegExp = /^on(?=[A-Z])/;

export function separateEvents(props) {
  return Object.keys(props).reduce(
    (acc, key) => {
      if (eventsRegExp.test(key)) {
        const eventName = key.replace(eventsRegExp, '').toLowerCase();
        acc._events[eventName] = props[key];
      } else {
        acc[key] = props[key];
      }

      return acc;
    },
    { _events: {} }
  );
}

export function addEvent(instance, eventName, handler) {
  if (typeof handler === 'function') {
    instance.events.add(eventName, handler);
  }
}

export function removeEvent(instance, eventName, handler) {
  if (typeof handler === 'function') {
    instance.events.remove(eventName, handler);
  }
}

export function updateEvents(instance, oldEvents, newEvents) {
  Object.keys({ ...oldEvents, ...newEvents }).forEach(eventName => {
    if (oldEvents[eventName] !== newEvents[eventName]) {
      removeEvent(instance, eventName, oldEvents[eventName]);
      if (typeof newEvents[eventName] === 'function') {
        addEvent(instance, eventName, newEvents[eventName]);
      }
    }
  });
}
