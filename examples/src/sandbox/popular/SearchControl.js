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
        zoom: mapZoom,
        controls: []
      }}
    >
      <YMaps.SearchControl
        options={{ provider: 'yandex#search' }}
        instanceRef={(instance) => {
          if (instance !== null) instance.search('Starbucks')
        }}
      />
    </YMaps.Map>
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
        zoom: mapZoom,
        controls: []
      }}
    >
      <YMaps.SearchControl
        options={{ provider: 'yandex#search' }}
        instanceRef={(instance) => {
          if (instance !== null) instance.search('Starbucks')
        }}
      />
    </YMaps.Map>
  )
}
`
