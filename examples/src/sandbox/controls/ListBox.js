import React from 'react';
import { YMaps, Map, ListBox, ListBoxItem } from 'react-yandex-maps';

const mapState = { center: [55.630527, 37.849046], zoom: 10, controls: [] };

const cities = [
  {
    data: { content: 'Saint-Petersburg' },
    options: { selectOnClick: false },
    coords: [59.93863, 30.31413],
  },
  {
    data: { content: 'Dzerzhinsky' },
    options: { selectOnClick: false },
    coords: [55.630527, 37.849046],
  },
  {
    data: { content: 'Moscow' },
    options: { selectOnClick: false },
    coords: [55.753559, 37.609218],
  },
];

class ListBoxDemo extends React.Component {
  state = mapState;

  onItemClick = coords => {
    this.setState({ center: coords });
  };

  render = () =>
    <YMaps>
      <Map state={this.state}>
        <ListBox data={{ content: 'Choose city' }} options={{ float: 'right' }}>
          {cities.map(city =>
            <ListBoxItem
              data={city.data}
              options={city.options}
              onClick={() => this.onItemClick(city.coords)}
              key={city.data.content}
            />
          )}
        </ListBox>
      </Map>
    </YMaps>;
}

export default ListBoxDemo;
