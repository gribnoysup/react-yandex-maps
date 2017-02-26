import React from 'react'
import { YMaps, Map, GeoObject, Placemark } from '../../../../../react-yandex-maps/src'

import placemarks from './placemark.json'

const mapState = { center: [55.76, 37.64], zoom: 10 }

const PlacemarkDemo = () =>
  <YMaps>
    <Map state={mapState}>

      <GeoObject
        geometry={{
          type: "Point",
          coordinates: [55.8, 37.8]
        }}
        properties={{
          iconContent: 'Я тащусь',
          hintContent: 'Ну давай уже тащи'
        }}
        options={{
          preset: 'islands#blackStretchyIcon',
          draggable: true
        }}
      />

      {placemarks.map((placemarkParams, i) =>
        <Placemark key={i} {...placemarkParams}/>
      )}

    </Map>
  </YMaps>

export default PlacemarkDemo
