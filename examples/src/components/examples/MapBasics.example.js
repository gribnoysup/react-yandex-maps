class MapBasics extends React.Component {
  constructor() {
    super();

    this.state = { showMap: true };

    this.onClick = () => {
      this.setState(prevState => ({ showMap: !prevState.showMap }));
    };
  }

  render() {
    return (
      <YMapsProvider>
        <div>
          {this.state.showMap && (
            <Map
              parentElementProps={{ style: { width: 320, height: 240 } }}
              defaultState={{
                center: [55.76, 37.64],
                zoom: 7,
              }}
            />
          )}
          <button onClick={this.onClick}>
            {this.state.showMap ? 'Delete map' : 'Show map'}
          </button>
        </div>
      </YMapsProvider>
    );
  }
}
