import React from 'react'
import YMaps from '../../../../dist/react-yandex-maps'

const mapCenter = [55.72, 37.64]
const mapZoom = 10

export default class PolylineEditor extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {showPolyline: true}
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
        {this.state.showPolyline &&
          <YMaps.Polyline
            geometry={{
              coordinates: [
                [55.80, 37.50],
                [55.80, 37.40],
                [55.70, 37.50],
                [55.70, 37.40]
              ]
            }}
            options={{
              strokeColor: "#00000088",
              strokeWidth: 4,
              editorMaxPoints: 6,
              editorMenuManager: (items) => {
                items.push({
                  title: "Удалить линию",
                  onClick: () => this.setState({showPolyline: false})
                })
                return items
              }
            }}
            instanceRef={(instance) => {
              if (instance !== null) instance.editor.startEditing()
            }}
          />
        }
      </YMaps.Map>
    )
  }
}

PolylineEditor.__src = `
import React from 'react'
import YMaps from '../../../../dist/react-yandex-maps'

const mapCenter = [55.72, 37.64]
const mapZoom = 10

export default class PolylineEditor extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {showPolyline: true}
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
        {this.state.showPolyline &&
          <YMaps.Polyline
            geometry={{
              coordinates: [
                [55.80, 37.50],
                [55.80, 37.40],
                [55.70, 37.50],
                [55.70, 37.40]
              ]
            }}
            options={{
              strokeColor: "#00000088",
              strokeWidth: 4,
              editorMaxPoints: 6,
              editorMenuManager: (items) => {
                items.push({
                  title: "Удалить линию",
                  onClick: () => this.setState({showPolyline: false})
                })
                return items
              }
            }}
            instanceRef={(instance) => {
              if (instance !== null) instance.editor.startEditing()
            }}
          />
        }
      </YMaps.Map>
    )
  }
}
`
