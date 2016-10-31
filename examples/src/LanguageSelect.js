import React from 'react'

import './language-select.css'

export default function LanguageSelect({value, onChange}) {
  return (
    <div className="language-select">
      <span
        className={value === 'ru' ?
          "language-select__language language-select__language--selected" :
          "language-select__language"
        }
        onClick={(event) => {
          event.preventDefault()
          onChange('ru')
        }}
      >
        ru
      </span>
      <span className="language-select__divider">-</span>
      <span
        className={value === 'en' ?
          "language-select__language language-select__language--selected" :
          "language-select__language"
        }
        onClick={(event) => {
          event.preventDefault()
          onChange('en')
        }}
      >
        en
      </span>
    </div>
  )
}
