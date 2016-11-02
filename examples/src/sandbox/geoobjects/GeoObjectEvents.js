import React from 'react'
import YMaps from '../../../../dist/react-yandex-maps'

const mapCenter = [48.856929, 2.341198]
const mapZoom = 1

const eventsList = [
  'onBallonClose',
  'onBalloonOpen',
  'onClick',
  'onContextMenu',
  'onDblClick',
  'onEditorStateChange',
  'onGeometryChange',
  'onHintClose',
  'onHintOpen',
  'onMapChange',
  'onMultiTouchEnd',
  'onMultiTouchMove',
  'onMultiTouchStart',
  'onOptionsChange',
  'onOverlayChange',
  'onParentChange',
  'onPropertiesChange',
  'onWheel',
]

export default class GeoObjectEvents extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {
      balloonContentHeader: undefined,
      geodesic: undefined,
      radius: 1000000,
      events: []
    }
  }

  handleCircleEvents(event) {
    this.setState({events: [`@${event.get('type')}`].concat(this.state.events)})
  }

  render() {
    const {balloonContentHeader, geodesic, radius} = this.state
    const eventHandlers = eventsList.reduce((events, key) => {
      events[key] = this.handleCircleEvents.bind(this)
      return events
    }, {})

    return (
      <div>
        <YMaps.Map
          width={400}
          height={350}
          state={{
            center: mapCenter,
            zoom: mapZoom,
            controls: ['zoomControl']
          }}
        >
          <YMaps.Button
            data={{
              content: 'Свойство: balloonHeader'
            }}
            options={{maxWidth: 200}}
            onSelect={() => this.setState({balloonContentHeader: 'Заголовок'})}
            onDeselect={() => this.setState({balloonContentHeader: undefined})}
          />
          <YMaps.Button
            data={{
              content: 'Опция: geodesic'
            }}
            options={{maxWidth: 200}}
            onSelect={() => this.setState({geodesic: true})}
            onDeselect={() => this.setState({geodesic: false})}
          />
          <YMaps.Button
            data={{
              content: 'Изменить радиус'
            }}
            options={{maxWidth: 200}}
            onSelect={() => this.setState({radius: 2000000})}
            onDeselect={() => this.setState({radius: 1000000})}
          />
          <YMaps.Circle
            geometry={{
              coordinates: mapCenter,
              radius: radius
            }}
            properties={{
              balloonContentHeader,
              balloonContentBody: 'Балун',
              hintContent: 'Хинт'
            }}
            options={{
              draggable: true,
              geodesic
            }}
            {...eventHandlers}
          />
        </YMaps.Map>
        <div
          style={{
            height: 100,
            backgroundColor: 'rgba(128, 128, 128, 0.1)',
            fontFamily: 'Courier, sans-serif',
            fontSize: 12,
            padding: 12,
            marginTop: 10,
            border: '1px solid lightgray',
            overflow: 'auto'
          }}
        >
          {this.state.events.map((line, i) => (
            <p key={i} style={{padding: 0, margin: 0}}>{line}</p>
          ))}
        </div>
      </div>
    )
  }
}

GeoObjectEvents.__src = `
import React from 'react'
import YMaps from '../../../../dist/react-yandex-maps'

const mapCenter = [48.856929, 2.341198]
const mapZoom = 1

const eventsList = [
  'onBallonClose',
  'onBalloonOpen',
  'onClick',
  'onContextMenu',
  'onDblClick',
  'onEditorStateChange',
  'onGeometryChange',
  'onHintClose',
  'onHintOpen',
  'onMapChange',
  'onMultiTouchEnd',
  'onMultiTouchMove',
  'onMultiTouchStart',
  'onOptionsChange',
  'onOverlayChange',
  'onParentChange',
  'onPropertiesChange',
  'onWheel',
]

export default class GeoObjectEvents extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {
      balloonContentHeader: undefined,
      geodesic: undefined,
      radius: 1000000,
      events: []
    }
  }

  handleCircleEvents(event) {
    this.setState({events: [\`@\${event.get('type')}\`].concat(this.state.events)})
  }

  render() {
    const {balloonContentHeader, geodesic, radius} = this.state
    const eventHandlers = eventsList.reduce((events, key) => {
      events[key] = this.handleCircleEvents.bind(this)
      return events
    }, {})

    return (
      <div>
        <YMaps.Map
          width={400}
          height={350}
          state={{
            center: mapCenter,
            zoom: mapZoom,
            controls: ['zoomControl']
          }}
        >
          <YMaps.Button
            data={{
              content: 'Свойство: balloonHeader'
            }}
            options={{maxWidth: 200}}
            onSelect={() => this.setState({balloonContentHeader: 'Заголовок'})}
            onDeselect={() => this.setState({balloonContentHeader: undefined})}
          />
          <YMaps.Button
            data={{
              content: 'Опция: geodesic'
            }}
            options={{maxWidth: 200}}
            onSelect={() => this.setState({geodesic: true})}
            onDeselect={() => this.setState({geodesic: false})}
          />
          <YMaps.Button
            data={{
              content: 'Изменить радиус'
            }}
            options={{maxWidth: 200}}
            onSelect={() => this.setState({radius: 2000000})}
            onDeselect={() => this.setState({radius: 1000000})}
          />
          <YMaps.Circle
            geometry={{
              coordinates: mapCenter,
              radius: radius
            }}
            properties={{
              balloonContentHeader,
              balloonContentBody: 'Балун',
              hintContent: 'Хинт'
            }}
            options={{
              draggable: true,
              geodesic
            }}
            {...eventHandlers}
          />
        </YMaps.Map>
        <div
          style={{
            height: 100,
            backgroundColor: 'rgba(128, 128, 128, 0.1)',
            fontFamily: 'Courier, sans-serif',
            fontSize: 12,
            padding: 12,
            marginTop: 10,
            border: '1px solid lightgray',
            overflow: 'auto'
          }}
        >
          {this.state.events.map((line) => (
            <p key={i} style={{padding: 0, margin: 0}}>{line}</p>
          ))}
        </div>
      </div>
    )
  }
}
`
