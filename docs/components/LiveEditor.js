import 'prismjs/themes/prism-okaidia.css';

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Flex, Box, Switch, Label } from 'rebass/emotion';
import * as ReactLive from 'react-live';

import * as scope from '../../dist/react-yandex-maps';

import '../utils/prism';

scope.YMaps.defaultProps = {
  ...scope.YMaps.defaultProps,
  query: {
    ...scope.YMaps.defaultProps.query,
    lang: 'en_US',
    ns: 'react-yandex-maps-sandbox',
  },
};

scope.Map.defaultProps = {
  ...scope.Map.defaultProps,
  style: { width: '100%', height: 240 },
};

const PreviewContainer = styled(Flex)`
  border-radius: 2px;
  overflow: hidden;
`;

const StyledEditor = styled(ReactLive.LiveEditor)`
  &[class*='language-'] {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
  }
`;

const StyledPreview = styled(ReactLive.LivePreview)`
  overflow: auto;
`;

const StyledError = styled(ReactLive.LiveError)`
  border-radius: 2px;
  overflow: auto;
`;

export class LiveEditor extends React.Component {
  constructor() {
    super();
    this.state = { editor: true, preview: true };
  }

  render() {
    const { code, language, noInline } = this.props;
    const { editor, preview } = this.state;

    return (
      <ReactLive.LiveProvider
        code={code}
        scope={{ ...scope }}
        noInline={noInline}
        mountStylesheet={false}
      >
        <PreviewContainer flexWrap="wrap">
          {/* <Toolbar /> */}
          <Flex w={1} bg="black" color="white" p={2}>
            <Label
              for="editor-switch"
              mb={0}
              onClick={() =>
                this.setState(prevState => ({ editor: !prevState.editor }))
              }
            >
              Editor:{' '}
              <Switch id="editor-switch" color="white" checked={editor} />
            </Label>
            <Label
              for="peview-switch"
              ml={2}
              mb={0}
              onClick={() =>
                this.setState(prevState => ({ preview: !prevState.preview }))
              }
            >
              Preview:{' '}
              <Switch id="preview-switch" color="white" checked={preview} />
            </Label>
          </Flex>
          {editor && (
            <Box
              w={editor && !preview ? 1 : [1, 1, 1 / 2]}
              is={StyledEditor}
              className={` language-${language}`}
            />
          )}
          {preview && (
            <Box
              w={preview && !editor ? 1 : [1, 1, 1 / 2]}
              p={3}
              is={StyledPreview}
              bg="gray"
            />
          )}
        </PreviewContainer>
        <Box w={1} mt={3} p={3} color="white" bg="red" is={StyledError} />
      </ReactLive.LiveProvider>
    );
  }
}

LiveEditor.propTypes = {
  code: PropTypes.string,
  noInline: PropTypes.bool,
  language: PropTypes.string,
};

export { Editor } from 'react-live';
