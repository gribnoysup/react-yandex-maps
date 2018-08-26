import { separateEvents, addEvent, removeEvent, updateEvents } from './events';
import MockGeoObject from '../__mocks__/MockGeoObject';

describe('Event utils', () => {
  describe('separateEvents', () => {
    it('should separate keys starting with `on[A-Z]` to `_events` key', () => {
      const props = {
        onClick: () => {},
        onMouseUp: () => {},
        onSomethingHappened: () => {},
        some: {},
        other: {},
        props: {},
      };

      const { _events, ...separated } = separateEvents(props);

      expect(_events.click).toBe(props.onClick);
      expect(_events.mouseup).toBe(props.onMouseUp);
      expect(_events.somethinghappened).toBe(props.onSomethingHappened);

      expect(separated.onClick).toBeUndefined();
      expect(separated.onMouseUp).toBeUndefined();
      expect(separated.onSomethingHappened).toBeUndefined();

      expect(separated.some).toBe(props.some);
      expect(separated.other).toBe(props.other);
      expect(separated.props).toBe(props.props);
    });
  });

  describe('addEvent', () => {
    const instance = new MockGeoObject();

    it('should call `events.add` if provided event hanlder is a function', () => {
      const onClick = jest.fn();
      const onWhatIsThat = {};

      addEvent(instance, 'click', onClick);
      addEvent(instance, 'blerb', onWhatIsThat);

      expect(instance.events.add).toHaveBeenCalledTimes(1);
      expect(instance.events.add).toBeCalledWith('click', onClick);
    });
  });

  describe('removeEvent', () => {
    const instance = new MockGeoObject();

    it('should call `events.remove` if provided event hanlder is a function', () => {
      const onClick = jest.fn();
      const onWhatIsThat = {};

      removeEvent(instance, 'click', onClick);
      removeEvent(instance, 'blerb', onWhatIsThat);

      expect(instance.events.remove).toHaveBeenCalledTimes(1);
      expect(instance.events.remove).toBeCalledWith('click', onClick);
    });
  });

  describe('updateEvents', () => {
    const instance = new MockGeoObject();

    const oldEvents = {
      click: () => {
        'old';
      },
      touchstart: () => {
        'old';
      },
      move: () => {
        'old';
      },
    };

    const newEvents = {
      touchstart: () => {
        'new';
      },
      move: () => {
        'new';
      },
      mouseenter: () => {
        'new';
      },
    };

    it('should update events on the instance', () => {
      // Setting initial events on the instance
      updateEvents(instance, {}, oldEvents);

      expect(instance.events.get('click')).toHaveLength(1);
      expect(instance.events.get('click')[0]).toBe(oldEvents.click);

      expect(instance.events.get('touchstart')).toHaveLength(1);
      expect(instance.events.get('touchstart')[0]).toBe(oldEvents.touchstart);

      expect(instance.events.get('move')).toHaveLength(1);
      expect(instance.events.get('move')[0]).toBe(oldEvents.move);

      // Now update the events
      updateEvents(instance, oldEvents, newEvents);

      expect(instance.events.get('click')).toHaveLength(0);

      expect(instance.events.get('touchstart')).toHaveLength(1);
      expect(instance.events.get('touchstart')[0]).toBe(newEvents.touchstart);

      expect(instance.events.get('move')).toHaveLength(1);
      expect(instance.events.get('move')[0]).toBe(newEvents.move);

      expect(instance.events.get('mouseenter')).toHaveLength(1);
      expect(instance.events.get('mouseenter')[0]).toBe(newEvents.mouseenter);
    });
  });
});
