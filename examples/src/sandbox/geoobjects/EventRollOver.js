import React from 'react'
import YMaps from '../../../../dist/react-yandex-maps'

const mapCenter = [55.755773, 37.617761]
const mapZoom = 9

export default class EventRollOver extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {preset: undefined}
  }

  render() {
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
          options={{
            preset: this.state.preset
          }}
          onMouseEnter={() => {
            this.setState({preset: 'islands#greenIcon'})
          }}
          onMouseLeave={() => {
            this.setState({preset: undefined})
          }}
        />
      </YMaps.Map>
    )
  }
}

EventRollOver.__src = `
import React from 'react'
import YMaps from '../../../../dist/react-yandex-maps'

const mapCenter = [55.755773, 37.617761]
const mapZoom = 9

export default class EventRollOver extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {preset: undefined}
  }

  render() {
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
          options={{
            preset: this.state.preset
          }}
          onMouseEnter={() => {
            this.setState({preset: 'islands#greenIcon'})
          }}
          onMouseLeave={() => {
            this.setState({preset: undefined})
          }}
        />
      </YMaps.Map>
    )
  }
}
`
