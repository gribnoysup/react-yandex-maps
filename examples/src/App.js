import React, { Component } from 'react'
import { Nav, NavItem } from 'react-bootstrap'

import AceEditor from 'react-ace'
import 'brace/mode/jsx'
import 'brace/theme/xcode'

import demos from './Demos'
import LanguageSelect from './LanguageSelect'

import './App.css'

function i18n(language, translations = {}, fallbackLanguage = 'en') {
  return translations[language] ? translations[language] : translations[fallbackLanguage]
}

class App extends Component {
  constructor(...args) {
    super(...args)
    this.state = {
      selectedDemo: demos.find((demo) => Boolean(demo.component)),
      language: navigator.language.split('-')[0]
    }
  }

  render() {
    const {selectedDemo, language} = this.state
    const Demo = selectedDemo.component || null
    const t = (translations) => i18n(language, translations)

    return (
      <div className="app">
        <div className="menu">
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
                className={demo.isHeader ? 'navigation__header': 'navigation__item'}
                disabled={!Boolean(demo.component)}
                eventKey={demo}
              >
                {t(demo.label)}
              </NavItem>
            ))}
          </Nav>
          <LanguageSelect
            value={language}
            onChange={(newVal) => this.setState({language: newVal})}
          />
        </div>
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
