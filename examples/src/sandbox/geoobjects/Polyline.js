import React from 'react'
import { YMaps, Map, GeoObject, Polyline } from 'react-yandex-maps'

const mapState = { center: [55.72, 37.44], zoom: 10 }

const PolylineDemo = () =>
  <YMaps>
    <Map state={mapState}>

      <GeoObject
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

      <Polyline
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

    </Map>
  </YMaps>

export default PolylineDemo
