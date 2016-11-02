import React from 'react'
import YMaps from '../../../../dist/react-yandex-maps'

import placemarks from './placemark.json'

const mapCenter = [55.76, 37.64]
const mapZoom = 10

export default function Placemark() {
  return (
    <YMaps.Map
      width={400}
      height={350}
      state={{
        center: mapCenter,
        zoom: mapZoom
      }}
    >
      <YMaps.GeoObject
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
      {placemarks.map((placemarkParams, i) => (
        <YMaps.Placemark key={i} {...placemarkParams}/>
      ))}
    </YMaps.Map>
  )
}

Placemark.__src = `
import React from 'react'
import YMaps from '../../../../dist/react-yandex-maps'

import placemarks from './placemark.json'

const mapCenter = [55.76, 37.64]
const mapZoom = 10

export default function Placemark() {
  return (
    <YMaps.Map
      width={400}
      height={350}
      state={{
        center: mapCenter,
        zoom: mapZoom
      }}
    >
      <YMaps.GeoObject
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
      {placemarks.map((placemarkParams) => (
        <YMaps.Placemark key={i} {...placemarkParams}/>
      ))}
    </YMaps.Map>
  )
}
`
