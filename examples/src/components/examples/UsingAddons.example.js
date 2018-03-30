class UsingAddons extends React.Component {
  render() {
    return (
      <YMapsProvider>
        <Map
          parentElementProps={{ style: { width: 320, height: 240 } }}
          defaultState={{
            controls: [
              'zoomControl',
              'searchControl',
              'typeSelector',
              'geolocationControl',
              'fullscreenControl',
              'rulerControl',
              'trafficControl',
            ],
            center: [55.76, 37.64],
            zoom: 7,
          }}
          addons={[
            'control.ZoomControl',
            'control.SearchControl',
            'control.TypeSelector',
            'control.GeolocationControl',
            'control.FullscreenControl',
            'control.RulerControl',
            'control.TrafficControl',
          ]}
        />
      </YMapsProvider>
    );
  }
}
