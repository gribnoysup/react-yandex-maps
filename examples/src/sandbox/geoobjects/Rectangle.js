import React from 'react'
import YMaps from '../../../../dist/react-yandex-maps'

const mapCenter = [55.674, 37.601]
const mapZoom = 11

export default function Rectangle() {
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
          type: 'Rectangle',
          coordinates: [
            [55.665, 37.66],
            [55.64, 37.53]
          ]
        }}
        properties={{
          hintContent: 'Перетащи меня!',
          balloonContent: 'Прямоугольник 2'
        }}
        options={{
          draggable: true,
          fillColor: '#ffff0022',
          strokeColor: '#3caa3c88',
          strokeWidth: 7
        }}
      />
      <YMaps.Rectangle
        geometry={{
          coordinates: [
            [55.66, 37.60],
            [55.71, 37.69]
          ]
        }}
        properties={{
          hintContent: 'Меня перетаскивать нельзя!',
          balloonContent: 'Прямоугольник 1'
        }}
        options={{
          fillColor: '#7df9ff33',
          fillOpacity: 0.5,
          strokeColor: '#0000FF',
          strokeOpacity: 0.5,
          strokeWidth: 2,
          borderRadius: 6
        }}
      />
    </YMaps.Map>
  )
}

Rectangle.__src = `
import React from 'react'
import YMaps from '../../../../dist/react-yandex-maps'

const mapCenter = [55.674, 37.601]
const mapZoom = 11

export default function Rectangle() {
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
          type: 'Rectangle',
          coordinates: [
            [55.665, 37.66],
            [55.64, 37.53]
          ]
        }}
        properties={{
          hintContent: 'Перетащи меня!',
          balloonContent: 'Прямоугольник 2'
        }}
        options={{
          draggable: true,
          fillColor: '#ffff0022',
          strokeColor: '#3caa3c88',
          strokeWidth: 7
        }}
      />
      <YMaps.Rectangle
        geometry={{
          coordinates: [
            [55.66, 37.60],
            [55.71, 37.69]
          ]
        }}
        properties={{
          hintContent: 'Меня перетаскивать нельзя!',
          balloonContent: 'Прямоугольник 1'
        }}
        options={{
          fillColor: '#7df9ff33',
          fillOpacity: 0.5,
          strokeColor: '#0000FF',
          strokeOpacity: 0.5,
          strokeWidth: 2,
          borderRadius: 6
        }}
      />
    </YMaps.Map>
  )
}
`
