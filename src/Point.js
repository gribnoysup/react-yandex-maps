import React from 'react';

import { Point as PointSymbol } from './util/symbols';
// import { separateEvents, addEvent, removeEvent } from './util/events';

const { oneOf, oneOfType, string, array } = React.PropTypes;

export class Point extends React.Component {
  static propTypes = {
    type: oneOf(['viaPoint', 'wayPoint']).isRequired,
    value: oneOfType([string, array]).isRequired,
  };

  static [PointSymbol] = true;

  render() {
    return null;
  }
}
