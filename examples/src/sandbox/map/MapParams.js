import React from 'react'
import YMaps from '../../../../dist/react-yandex-maps'

const mapCenter = [55.76, 37.64]
const mapZoom = 10
const mapType = 'yandex#satellite'

export default class MapParams extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {
      center: mapCenter,
      type: mapType,
      zoom: mapZoom,
      bounds: undefined
    }
  }

  render() {
    const {center, type, bounds, zoom} = this.state

    return (
      <div>
        <YMaps.Map
          width={400}
          height={350}
          state={{center, type, bounds, zoom}}
          onTypeChange={(event) => {
            const newType = event.get('target').getType()
            this.setState({type: newType})
          }}
          onActionEnd={(event) => {
            const newCenter = event.get('target').getCenter()
            const newBounds = event.get('target').getBounds()
            this.setState({center: newCenter, bounds: newBounds})
          }}
        />
        <div style={{padding: '20px 20px 5px'}}>
          <button onClick={() => {
            this.setState({center: [57.767265, 40.925358]})
          }}>
            Изменить центр
          </button>
        </div>
        <div style={{padding: '5px 20px'}}>
          <button onClick={() => {
            this.setState({bounds: [[37, 38], [39, 40]]})
          }}>
            Изменить границы
          </button>
        </div>
        <div style={{padding: '5px 20px'}}>
          <button onClick={() => {
            this.setState({type: 'yandex#publicMapHybrid'})
          }}>
            Изменить тип и плавно переместиться
          </button>
        </div>
      </div>
    )
  }
}

MapParams.__src = `
import React from 'react'
import YMaps from '../../../../dist/react-yandex-maps'

const mapCenter = [55.76, 37.64]
const mapZoom = 10
const mapType = 'yandex#satellite'

export default class MapParams extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {
      center: mapCenter,
      type: mapType,
      zoom: mapZoom,
      bounds: undefined
    }
  }

  render() {
    const {center, type, bounds, zoom} = this.state

    return (
      <div>
        <YMaps.Map
          width={400}
          height={350}
          state={{center, type, bounds, zoom}}
          onTypeChange={(event) => {
            const newType = event.get('target').getType()
            this.setState({type: newType})
          }}
          onActionEnd={(event) => {
            const newCenter = event.get('target').getCenter()
            const newBounds = event.get('target').getBounds()
            this.setState({center: newCenter, bounds: newBounds})
          }}
        />
        <div style={{padding: '20px 20px 5px'}}>
          <button onClick={() => {
            this.setState({center: [57.767265, 40.925358]})
          }}>
            Изменить центр
          </button>
        </div>
        <div style={{padding: '5px 20px'}}>
          <button onClick={() => {
            this.setState({bounds: [[37, 38], [39, 40]]})
          }}>
            Изменить границы
          </button>
        </div>
        <div style={{padding: '5px 20px'}}>
          <button onClick={() => {
            this.setState({type: 'yandex#publicMapHybrid'})
          }}>
            Изменить тип и плавно переместиться
          </button>
        </div>
      </div>
    )
  }
}
`
