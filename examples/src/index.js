import React from 'react'
import { injectGlobal } from 'styled-components'
import { render } from 'react-dom'

import App from './App'
// eslint-disable-next-line
injectGlobal`
  body {
    position: absolute;
    width: 100%;
    height: 100%;
    min-width: 1200px;

    margin: 0;
    padding: 0;

    color: rgba(0, 0, 0, .8);
    font-size: 18px;
    line-height: 1.4;

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
                 Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
                 "Helvetica Neue", sans-serif;
  }

  #app {
    width: 100%;
    height: 100%;
  }
`

render(<App />, document.querySelector('#app'))
