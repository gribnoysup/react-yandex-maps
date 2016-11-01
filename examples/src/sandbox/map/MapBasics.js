import React from 'react'
import YMaps from '../../../../dist/react-yandex-maps'

const mapCenter = [55.76, 37.64]
const mapZoom = 10

export default class MapBasics extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = { showMap: true }
  }

  render() {
    const {showMap} = this.state

    return (
      <div>
        <div style={{width: 400, height: 350}}>
          {showMap &&
            <YMaps.Map
              width={400}
              height={350}
              state={{
                center: mapCenter,
                zoom: mapZoom
              }}
            />
          }
        </div>
        <div style={{padding: 20}}>
          <button onClick={() => this.setState({showMap: !showMap})}>
            {showMap ? 'Удалить карту' : 'Показать карту'}
          </button>
        </div>
      </div>
    )
  }
}

MapBasics.__src = `
import React from 'react'
import YMaps from '../../../../dist/react-yandex-maps'

const mapCenter = [55.76, 37.64]
const mapZoom = 10

export default class MapBasics extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = { showMap: true }
  }

  render() {
    const {showMap} = this.state

    return (
      <div>
        <div style={{width: 400, height: 350}}>
          {showMap &&
            <YMaps.Map
              width={400}
              height={350}
              state={{
                center: mapCenter,
                zoom: mapZoom
              }}
            />
          }
        </div>
        <div style={{padding: 20}}>
          <button onClick={() => this.setState({showMap: !showMap})}>
            {showMap ? 'Удалить карту' : 'Показать карту'}
          </button>
        </div>
      </div>
    )
  }
}
`
