import React from 'react'
import YMaps from '../../../../dist/react-yandex-maps'

const mapCenter = [55.74, 37.58]
const mapZoom = 13

export default function SearchControl() {
  return (
    <YMaps.Map
      width={400}
      height={350}
      state={{
        center: mapCenter,
        controls: ['searchControl'],
        zoom: mapZoom
      }}
      options={{
        searchControlProvider: 'yandex#search'
      }}
      onMapAvaliable={(map) => {
        map.controls.get('searchControl').search('Starbucks')
      }}
    />
  )
}

SearchControl.__src = `
import React from 'react'
import YMaps from '../../../../dist/react-yandex-maps'

const mapCenter = [55.74, 37.58]
const mapZoom = 13

export default function SearchControl() {
  return (
    <YMaps.Map
      width={400}
      height={350}
      state={{
        center: mapCenter,
        controls: ['searchControl'],
        zoom: mapZoom
      }}
      options={{
        searchControlProvider: 'yandex#search'
      }}
      onMapAvaliable={(map) => {
        map.controls.get('searchControl').search('Starbucks')
      }}
    />
  )
}
`
