import React from 'react'
import YMaps from '../../../../dist/react-yandex-maps'

const mapCenter = [55.72, 37.44]
const mapZoom = 10

export default function Polyline() {
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
          type: "LineString",
          coordinates: [
            [55.80, 37.50],
            [55.70, 37.40]
          ]
        }}
        properties={{
          hintContent: "Я геообъект",
          balloonContent: "Меня можно перетащить"
        }}
        options={{
          draggable: true,
          strokeColor: "#FFFF00",
          strokeWidth: 5
        }}
      />
      <YMaps.Polyline
        geometry={{
          coordinates: [
            [55.80, 37.50],
            [55.80, 37.40],
            [55.70, 37.50],
            [55.70, 37.40]
          ]
        }}
        properties={{
          balloonContent: "Ломаная линия"
        }}
        options={{
          balloonCloseButton: false,
          strokeColor: "#000000",
          strokeWidth: 4,
          strokeOpacity: 0.5
        }}
      />
    </YMaps.Map>
  )
}

Polyline.__src = `
import React from 'react'
import YMaps from '../../../../dist/react-yandex-maps'

const mapCenter = [55.72, 37.44]
const mapZoom = 10

export default function Polyline() {
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
          type: "LineString",
          coordinates: [
            [55.80, 37.50],
            [55.70, 37.40]
          ]
        }}
        properties={{
          hintContent: "Я геообъект",
          balloonContent: "Меня можно перетащить"
        }}
        options={{
          draggable: true,
          strokeColor: "#FFFF00",
          strokeWidth: 5
        }}
      />
      <YMaps.Polyline
        geometry={{
          coordinates: [
            [55.80, 37.50],
            [55.80, 37.40],
            [55.70, 37.50],
            [55.70, 37.40]
          ]
        }}
        properties={{
          balloonContent: "Ломаная линия"
        }}
        options={{
          balloonCloseButton: false,
          strokeColor: "#000000",
          strokeWidth: 4,
          strokeOpacity: 0.5
        }}
      />
    </YMaps.Map>
  )
}
`
