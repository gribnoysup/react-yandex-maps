import React from 'react';
import { YMaps, Map, GeoObject, Placemark } from 'react-yandex-maps';

import placemarks from './placemark.json';

const mapState = { center: [55.76, 37.64], zoom: 10 };

const PlacemarkDemo = () => (
  <YMaps>
    <Map state={mapState}>

      {/* Creating a geo object with the "Point" geometry type. */}
      <GeoObject
        // The geometry description.
        geometry={{
          type: 'Point',
          coordinates: [55.8, 37.8],
        }}
        // Properties.
        properties={{
          // The placemark content.
          iconContent: 'Я тащусь',
          hintContent: 'Ну давай уже тащи',
        }}
        // Options.
        options={{
          // The placemark's icon will stretch to fit its contents.
          preset: 'islands#blackStretchyIcon',
          // The placemark can be moved.
          draggable: true,
        }}
      />

      {placemarks.map((placemarkParams, i) => (
        <Placemark key={i} {...placemarkParams} />
      ))}

    </Map>
  </YMaps>
);

export default PlacemarkDemo;
