import React from 'react'
import YMaps from '../../../../dist/react-yandex-maps'
import data from './data.json'

const mapCenter = [55.76, 37.64]
const mapZoom = 10

export default function ObjectManager() {
  return (
    <YMaps.Map
      width={400}
      height={350}
      state={{
        center: mapCenter,
        zoom: mapZoom
      }}
    >
      <YMaps.ObjectManager
        options={{
          clusterize: true,
          gridSize: 32
        }}
        objects={{
          preset: 'islands#greenDotIcon'
        }}
        clusters={{
          preset: 'islands#greenClusterIcons'
        }}
        features={data.features}
      />
    </YMaps.Map>
  )
}


ObjectManager.__src = `
import React from 'react'
import YMaps from '../../../../dist/react-yandex-maps'
import data from './data.json'

const mapCenter = [55.76, 37.64]
const mapZoom = 10

export default function ObjectManager() {
  return (
    <YMaps.Map
      width={400}
      height={350}
      state={{
        center: mapCenter,
        zoom: mapZoom
      }}
    >
      <YMaps.ObjectManager
        options={{
          clusterize: true,
          gridSize: 32
        }}
        objects={{
          preset: 'islands#greenDotIcon'
        }}
        clusters={{
          preset: 'islands#greenClusterIcons'
        }}
        features={data.features}
      />
    </YMaps.Map>
  )
}
`
