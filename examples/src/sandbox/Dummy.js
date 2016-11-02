import React from 'react'
import YMaps from '../../../dist/react-yandex-maps'

const mapCenter = [55.76, 37.64]
const mapZoom = 10

export default function Dummy() {
  return (
    <YMaps.Map
      width={400}
      height={350}
      state={{
        center: mapCenter,
        zoom: mapZoom,
        controls: []
      }}
    />
  )
}

Dummy.__src = `
import React from 'react'
import YMaps from '../../../../dist/react-yandex-maps'

const mapCenter = [55.76, 37.64]
const mapZoom = 10

export default function Dummy() {
  return (
    <YMaps.Map
      width={400}
      height={350}
      state={{
        center: mapCenter,
        zoom: mapZoom,
        controls: []
      }}
    />
  )
}
`
