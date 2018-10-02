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
              [55.75, 37.8],
              [55.8, 37.9],
              [55.75, 38.0],
              [55.7, 38.0],
              [55.7, 37.8],
            ],
            [[55.75, 37.82], [55.75, 37.98], [55.65, 37.9]],
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
              [55.75, 37.5],
              [55.8, 37.6],
              [55.75, 37.7],
              [55.7, 37.7],
              [55.7, 37.5],
            ],
            [[55.75, 37.52], [55.75, 37.68], [55.65, 37.6]],
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
