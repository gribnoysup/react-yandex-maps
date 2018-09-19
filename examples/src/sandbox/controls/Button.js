import React from 'react';
import { YMaps, Map, Button } from 'react-yandex-maps';

import error from './error.png';

const mapState = { center: [59.93772, 30.313622], zoom: 10, controls: [] };

let interval = null;

/**
 * We will artificially switch the size of the button every second,
 * in order to show all the options for the button appearance.
 * When resizing the map, these changes will occur automatically.
 */
const onInstanceRef = ref => {
  if (ref !== null) {
    interval = setInterval(() => {
      switch (ref.options.get('size')) {
        case 'small':
          ref.options.set('size', 'medium');
          break;
        case 'medium':
          ref.options.set('size', 'large');
          break;
        case 'large':
        default:
          ref.options.set('size', 'small');
          break;
      }
    }, 1000);
  } else {
    clearInterval(interval);
  }
};

const ButtonDemo = () => (
  <YMaps>
    <Map state={mapState}>
      <Button data={{ content: 'Button' }} options={{ float: 'right' }} />
      <Button
        data={{
          // Setting the text and icon for a button.
          content: 'Adaptive button',
          // The icon is 16x16 pixels.
          image: error,
        }}
        /**
         * Because the button changes depending on the size of the map, we will give it
         * three different maxWidth values in the array.
         */
        options={{ maxWidth: [28, 150, 178] }}
        instanceRef={onInstanceRef}
      />
    </Map>
  </YMaps>
);

export default ButtonDemo;
