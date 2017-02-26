import React from 'react'
import AceEditor from 'react-ace'

import 'brace/mode/jsx'
import 'brace/theme/xcode'

const editorProps = { $blockScrolling: true }

const Editor = ({src, ...restProps}) =>
  <AceEditor
    mode="jsx"
    theme="xcode"
    editorProps={editorProps}
    readOnly

    value={src}
    {...restProps}
  />

export default Editor
