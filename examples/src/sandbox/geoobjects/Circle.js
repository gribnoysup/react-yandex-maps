import React from 'react'
import YMaps from '../../../../dist/react-yandex-maps'

const mapCenter = [55.76, 37.64]
const mapZoom = 10

export default function Circle() {
  return (
    <YMaps.Map
      width={400}
      height={350}
      state={{
        center: mapCenter,
        zoom: mapZoom
      }}
    >
      <YMaps.Circle
        geometry={{
          coordinates: [55.76, 37.60],
          radius: 10000
        }}
        properties={{
          balloonContent: "Радиус круга - 10 км",
          hintContent: "Подвинь меня"
        }}
        options={{
          draggable: true,
          fillColor: "#DB709377",
          strokeColor: "#990066",
          strokeOpacity: 0.8,
          strokeWidth: 5
        }}
      />
    </YMaps.Map>
  )
}

Circle.__src = `
import React from 'react'
import YMaps from '../../../../dist/react-yandex-maps'

const mapCenter = [55.76, 37.64]
const mapZoom = 10

export default function Circle() {
  return (
    <YMaps.Map
      width={400}
      height={350}
      state={{
        center: mapCenter,
        zoom: mapZoom
      }}
    >
      <YMaps.Circle
        geometry={{
          coordinates: [55.76, 37.60],
          radius: 10000
        }}
        properties={{
          balloonContent: "Радиус круга - 10 км",
          hintContent: "Подвинь меня"
        }}
        options={{
          draggable: true,
          fillColor: "#DB709377",
          strokeColor: "#990066",
          strokeOpacity: 0.8,
          strokeWidth: 5
        }}
      />
    </YMaps.Map>
  )
}
`
