import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import myIcon from './myIcon.gif';

const mapState = { center: [55.751574, 37.573856], zoom: 9 };

const IconCustomImage = () => (
  <YMaps>
    <Map state={mapState}>
      <Placemark
        geometry={{
          coordinates: mapState.center,
        }}
        properties={{
          hintContent: 'Собственный значок метки',
          balloonContent: 'Это красивая метка',
        }}
        options={{
          // Options. You must specify this type of layout.
          iconLayout: 'default#image',
          // Custom image for the placemark icon.
          iconImageHref: myIcon,
          // The size of the placemark.
          iconImageSize: [30, 42],
          // The offset of the upper left corner of the icon relative
          // to its "tail" (the anchor point).
          iconImageOffset: [-3, -42],
        }}
      />
    </Map>
  </YMaps>
);

export default IconCustomImage;
