import React, { Component } from 'react'
import { Nav, NavItem } from 'react-bootstrap'

import AceEditor from 'react-ace'
import 'brace/mode/jsx'
import 'brace/theme/xcode'

import demos from './Demos'

import './App.css'

class App extends Component {
  constructor(...args) {
    super(...args)
    this.state = {
      selectedDemo: demos.find((demo) => Boolean(demo.component)),
      language: 'ru_RU'
    }
  }

  render() {
    const {selectedDemo, language} = this.state
    const Demo = selectedDemo.component || null

    return (
      <div className="app">
        <Nav
          stacked
          bsStyle="pills"
          className="navigation"
          activeKey={selectedDemo}
          onSelect={(selected) => this.setState({selectedDemo: selected})}
        >
          {demos.map((demo, i) => (
            <NavItem
              key={`nav_${i}`}
              className={demo.isHeader ? 'navigation__header': undefined}
              disabled={!Boolean(demo.component)}
              eventKey={demo}
            >
              {demo.label[language]}
            </NavItem>
          ))}
        </Nav>
        <div className="code-preview">
          {Demo === null ? null :
            <AceEditor
              mode="jsx"
              theme="xcode"
              height={'100vh'}
              width={'100%'}
              value={selectedDemo.src}
              readOnly
            />
          }
        </div>
        <div className="demo-container">
          {Demo ? <Demo /> : null}
        </div>
      </div>
    )
  }
}

export default App;
