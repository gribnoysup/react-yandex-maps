import React from 'react';
import { YMaps, Map, GeoObject, Rectangle } from 'react-yandex-maps';

const mapState = { center: [55.674, 37.601], zoom: 11 };

const RectangleDemo = () => (
  <YMaps>
    <Map state={mapState}>
      {/* Creating a geo object with the "rectangle" geometry type. */}
      <GeoObject
        // Geometry = geometry type + the coordinates of the geo object.
        geometry={{
          // The geometry type is rectangle.
          type: 'Rectangle',
          // The coordinates.
          coordinates: [[55.665, 37.66], [55.64, 37.53]],
        }}
        // Properties.
        properties={{
          hintContent: 'Перетащи меня!',
          balloonContent: 'Прямоугольник 2',
        }}
        // Options.
        options={{
          // The object can be dragged.
          draggable: true,
          // The fill color and transparency.
          fillColor: '#ffff0022',
          // The color and transparency of borders.
          strokeColor: '#3caa3c88',
          // Line width.
          strokeWidth: 7,
        }}
      />

      <Rectangle
        geometry={{
          coordinates: [[55.66, 37.6], [55.71, 37.69]],
        }}
        properties={{
          hintContent: 'Меня перетаскивать нельзя!',
          balloonContent: 'Прямоугольник 1',
        }}
        options={{
          fillColor: '#7df9ff33',
          fillOpacity: 0.5,
          strokeColor: '#0000FF',
          strokeOpacity: 0.5,
          strokeWidth: 2,
          borderRadius: 6,
        }}
      />
    </Map>
  </YMaps>
);

export default RectangleDemo;
