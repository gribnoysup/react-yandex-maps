import React from 'react'
import YMaps from '../../../../dist/react-yandex-maps'
import myIcon from './myIcon.gif'

const mapCenter = [55.751574, 37.573856]
const mapZoom = 9

export default function IconCustomImage() {
  return (
    <YMaps.Map
      width={400}
      height={350}
      state={{
        center: mapCenter,
        zoom: mapZoom
      }}
    >
      <YMaps.Placemark
        geometry={{
          coordinates: mapCenter
        }}
        properties={{
          hintContent: 'Собственный значок метки',
          balloonContent: 'Это красивая метка'
        }}
        options={{
          iconLayout: 'default#image',
          iconImageHref: myIcon,
          iconImageSize: [30, 42],
          iconImageOffset: [-3, -42]
        }}
      />
    </YMaps.Map>
  )
}

IconCustomImage.__src = `
import React from 'react'
import YMaps from '../../../../dist/react-yandex-maps'
import myIcon from './myIcon.gif'

const mapCenter = [55.751574, 37.573856]
const mapZoom = 9

export default function IconCustomImage() {
  return (
    <YMaps.Map
      width={400}
      height={350}
      state={{
        center: mapCenter,
        zoom: mapZoom
      }}
    >
      <YMaps.Placemark
        geometry={{
          coordinates: mapCenter
        }}
        properties={{
          hintContent: 'Собственный значок метки',
          balloonContent: 'Это красивая метка'
        }}
        options={{
          iconLayout: 'default#image',
          iconImageHref: myIcon,
          iconImageSize: [30, 42],
          iconImageOffset: [-3, -42]
        }}
      />
    </YMaps.Map>
  )
}
`
