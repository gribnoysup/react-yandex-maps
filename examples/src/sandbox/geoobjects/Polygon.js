import React from 'react'
import YMaps from '../../../../dist/react-yandex-maps'

const mapCenter = [55.73, 37.75]
const mapZoom = 10

export default function Polygon() {
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
          type: "Polygon",
          coordinates: [
            [
              [55.75, 37.80],
              [55.80, 37.90],
              [55.75, 38.00],
              [55.70, 38.00],
              [55.70, 37.80]
            ],
            [
              [55.75, 37.82],
              [55.75, 37.98],
              [55.65, 37.90]
            ]
          ],
          fillRule: "nonZero"
        }}
        properties={{
          balloonContent: "Многоугольник"
        }}
        options={{
          fillColor: '#00FF00',
          strokeColor: '#0000FF',
          opacity: 0.5,
          strokeWidth: 5,
          strokeStyle: 'shortdash'
        }}
      />
      <YMaps.Polygon
        geometry={{
          coordinates: [
            [
              [55.75, 37.50],
              [55.80, 37.60],
              [55.75, 37.70],
              [55.70, 37.70],
              [55.70, 37.50]
            ],
            [
              [55.75, 37.52],
              [55.75, 37.68],
              [55.65, 37.60]
            ]
          ]
        }}
        properties={{
          hintContent: "Многоугольник"
        }}
        options={{
          fillColor: '#00FF0088',
          strokeWidth: 5
        }}
      />
    </YMaps.Map>
  )
}

Polygon.__src = `
import React from 'react'
import YMaps from '../../../../dist/react-yandex-maps'

const mapCenter = [55.73, 37.75]
const mapZoom = 10

export default function Polygon() {
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
          type: "Polygon",
          coordinates: [
            [
              [55.75, 37.80],
              [55.80, 37.90],
              [55.75, 38.00],
              [55.70, 38.00],
              [55.70, 37.80]
            ],
            [
              [55.75, 37.82],
              [55.75, 37.98],
              [55.65, 37.90]
            ]
          ],
          fillRule: "nonZero"
        }}
        properties={{
          balloonContent: "Многоугольник"
        }}
        options={{
          fillColor: '#00FF00',
          strokeColor: '#0000FF',
          opacity: 0.5,
          strokeWidth: 5,
          strokeStyle: 'shortdash'
        }}
      />
      <YMaps.Polygon
        geometry={{
          coordinates: [
            [
              [55.75, 37.50],
              [55.80, 37.60],
              [55.75, 37.70],
              [55.70, 37.70],
              [55.70, 37.50]
            ],
            [
              [55.75, 37.52],
              [55.75, 37.68],
              [55.65, 37.60]
            ]
          ]
        }}
        properties={{
          hintContent: "Многоугольник"
        }}
        options={{
          fillColor: '#00FF0088',
          strokeWidth: 5
        }}
      />
    </YMaps.Map>
  )
}
`
