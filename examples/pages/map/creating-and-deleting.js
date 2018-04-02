import React from 'react';

import md from '../../components/md';
import Page from '../../components/Page';

const Example = () => (
  <Page>
    {md`
# Creating and Deleting

Compared to [the usual way][0] of attaching and detaching Yandex Maps on your
page, you don't need to worry about doing this manually. Just add [\`YMaps\`][1]
component and \`Map\` component anywhere in your application ad you are good to
go.

~~~react-live
class Application extends React.Component {
  constructor() {
    super();
    this.state = { showMap: true };
    this.onButtonClick = () => {
      this.setState(prevState => ({ showMap: !prevState.showMap }));
    };
  }

  render() {
    return (
      <YMaps>
        <React.Fragment>
          <button onClick={this.onButtonClick}>Show/Hide Map</button>
          {this.state.showMap && (
            <Map
              style={{ width: 320, height: 240 }}
              defaultState={{
                center: [55.76, 37.64],
                zoom: 7,
              }}
            />
          )}
        </React.Fragment>
      </YMaps>
    );
  }
}

render(<Application />);
~~~

[0]: https://tech.yandex.com/maps/jsbox/2.1/mapbasics
[1]: /provider/ymaps-provider-component
    `}
  </Page>
);

export default Example;
