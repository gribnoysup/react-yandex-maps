import React from 'react';
import { YMaps, Map, GeoObject, Polygon } from 'react-yandex-maps';

const mapState = { center: [55.73, 37.75], zoom: 10 };

const PolygonDemo = () => (
  <YMaps>
    <Map state={mapState}>
      <GeoObject
        geometry={{
          type: 'Polygon',
          coordinates: [
            [
              [55.75, 37.80],
              [55.80, 37.90],
              [55.75, 38.00],
              [55.70, 38.00],
              [55.70, 37.80],
            ],
            [[55.75, 37.82], [55.75, 37.98], [55.65, 37.90]],
          ],
          fillRule: 'nonZero',
        }}
        properties={{
          balloonContent: 'Многоугольник',
        }}
        options={{
          fillColor: '#00FF00',
          strokeColor: '#0000FF',
          opacity: 0.5,
          strokeWidth: 5,
          strokeStyle: 'shortdash',
        }}
      />
      <Polygon
        geometry={{
          coordinates: [
            [
              [55.75, 37.50],
              [55.80, 37.60],
              [55.75, 37.70],
              [55.70, 37.70],
              [55.70, 37.50],
            ],
            [[55.75, 37.52], [55.75, 37.68], [55.65, 37.60]],
          ],
        }}
        properties={{
          hintContent: 'Многоугольник',
        }}
        options={{
          fillColor: '#00FF0088',
          strokeWidth: 5,
        }}
      />
    </Map>
  </YMaps>
);

export default PolygonDemo;
