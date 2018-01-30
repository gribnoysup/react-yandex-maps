import React from 'react';
import { render } from 'react-dom';

import { App } from './components/App';

const main = () => {
  render(<App />, document.querySelector('#app'));
};

main();
