import React from 'react'
import styled from 'styled-components'

import Editor from './Editor'

const DemoContainer = styled.div`
  display: flex;
`

const EditorContainer = styled.div`
  padding: 0 20px;
  padding-bottom: 20px;
  border-right: 1px solid rgba(0, 0, 0, .1);
`

const StyledEditor = styled(Editor)`
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 4px;
`

const EditorHeader = styled.h2`
  font-weight: 400;
`

const ComponentContainer = styled.div`
  padding: 20px;
`

const Demo = ({component: Component, src, name}) =>
  <DemoContainer>
    <EditorContainer>
      <EditorHeader>{name}</EditorHeader>
      {/* TODO: files array, not one src?? */}
      <StyledEditor src={src}/>
    </EditorContainer>
    <ComponentContainer>
      <Component />
    </ComponentContainer>
  </DemoContainer>

export default Demo
