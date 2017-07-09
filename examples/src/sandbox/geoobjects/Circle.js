import React from 'react';
import { YMaps, Map, Circle } from 'react-yandex-maps';

const mapState = { center: [55.76, 37.64], zoom: 10 };

const CircleDemo = () =>
  <YMaps>
    <Map state={mapState}>
      <Circle
        geometry={{
          // The coordinates of the center of the circle.
          coordinates: [55.76, 37.6],
          // The radius of the circle in meters.
          radius: 10000,
        }}
        properties={{
          // Describing the properties of the circle.
          // The contents of the balloon.
          balloonContent: 'Радиус круга - 10 км',
          // The contents of the hint.
          hintContent: 'Подвинь меня',
        }}
        options={{
          // Setting the circle options.
          // Enabling drag-n-drop for the circle.
          draggable: true,
          // Fill color. The last byte (77) defines transparency.
          // The transparency of the fill can also be set using
          // the option "fillOpacity".
          fillColor: '#DB709377',
          // Stroke color.
          strokeColor: '#990066',
          // Stroke transparency.
          strokeOpacity: 0.8,
          // The width of the stroke in pixels.
          strokeWidth: 5,
        }}
      />
    </Map>
  </YMaps>;

export default CircleDemo;
