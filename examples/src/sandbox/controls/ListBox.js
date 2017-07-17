import React from 'react';
import { YMaps, Map, Button, ListBoxControl } from 'react-yandex-maps';

const mapState = { center: [55.630527, 37.849046], zoom: 13, controls: [] };

const saintP = {
  data: { content: 'Saint-Petersburg' },
  options: { selectOnClick: false },
  onClick: () => alert('Saint-Petersburg'),
};

class ListBoxDemo extends React.PureComponent {
  state = {
    cities: [
      {
        data: { content: 'Dzerzhinsky' },
        options: { selectOnClick: false },
        onClick: () => alert('Dzerzhinsky'),
      },
      {
        data: { content: 'Moscow' },
        options: { selectOnClick: false },
        onClick: () => alert('Moscow'),
      },
    ],
  };

  handleSelect() {
    const { cities } = this.state;
    this.setState({ cities: [...cities, saintP] });
  }

  handleDeselect() {
    const { cities } = this.state;
    this.setState({ cities: cities.slice(0, -1) });
  }

  render() {
    const { cities } = this.state;

    return (
      <YMaps>
        <Map state={mapState}>
          <Button
            data={{ content: 'Saint-Petersburg' }}
            option={{
              float: 'left',
              selectOnClick: true,
            }}
            onSelect={this.handleSelect.bind(this)}
            onDeselect={this.handleDeselect.bind(this)}
          />

          <ListBoxControl
            data={{ content: 'Choose city' }}
            options={{ float: 'right' }}
            items={cities}
          />
        </Map>
      </YMaps>
    );
  }
}

export default ListBoxDemo;
