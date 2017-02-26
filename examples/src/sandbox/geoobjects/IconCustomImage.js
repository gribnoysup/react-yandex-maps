import React from 'react'
import { YMaps, Map, Placemark } from '../../../../../react-yandex-maps/src'

import myIcon from './myIcon.gif'

const mapState = { center: [55.751574, 37.573856], zoom: 9 }

const IconCustomImage = () =>
  <YMaps>
    <Map state={mapState}>
      <Placemark
        geometry={{
          coordinates: mapState.center
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
    </Map>
  </YMaps>

export default IconCustomImage
