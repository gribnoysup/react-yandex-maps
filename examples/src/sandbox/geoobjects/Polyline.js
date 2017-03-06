import React from 'react';
import { YMaps, Map, GeoObject, Polyline } from 'react-yandex-maps';

const mapState = { center: [55.72, 37.44], zoom: 10 };

const PolylineDemo = () => (
  <YMaps>
    {/* Creating the map. */}
    <Map state={mapState}>

      {/* Creating a polyline using the GeoObject class. */}
      <GeoObject
        // Describing the geometry of the geo object.
        geometry={{
          // The "Polyline" geometry type.
          type: 'LineString',
          // Specifying the coordinates of the vertices of the polyline.
          coordinates: [[55.80, 37.50], [55.70, 37.40]],
        }}
        // Defining properties of the geo object.
        properties={{
          // The contents of the hint.
          hintContent: 'Я геообъект',
          // The contents of the balloon.
          balloonContent: 'Меня можно перетащить',
        }}
        // Setting the geo object options.
        options={{
          // Enabling drag-n-drop for the polyline.
          draggable: true,
          // The line color.
          strokeColor: '#FFFF00',
          // Line width.
          strokeWidth: 5,
        }}
      />

      {/* Creating a polyline using the Polyline auxiliary class. */}
      <Polyline
        geometry={{
          // Specifying the coordinates of the vertices of the polyline.
          coordinates: [
            [55.80, 37.50],
            [55.80, 37.40],
            [55.70, 37.50],
            [55.70, 37.40],
          ],
        }}
        // Describing the properties of the geo object.
        properties={{
          // The contents of the balloon.
          balloonContent: 'Ломаная линия',
        }}
        // Setting options for the geo object.
        options={{
          // Disabling the close button on a balloon.
          balloonCloseButton: false,
          // The line color.
          strokeColor: '#000000',
          // Line width.
          strokeWidth: 4,
          // The transparency coefficient.
          strokeOpacity: 0.5,
        }}
      />

    </Map>
  </YMaps>
);

export default PolylineDemo;
