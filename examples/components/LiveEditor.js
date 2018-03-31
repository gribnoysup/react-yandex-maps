import React from 'react';
import PropTypes from 'prop-types';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import { YMapsProvider, withYMaps, Map } from '../../src';

const scope = { YMapsProvider, withYMaps, Map };

const Editor = ({ code, noInline }) => (
  <LiveProvider code={code} scope={scope} noInline={noInline}>
    <LiveEditor />
    <LiveError />
    <LivePreview />
  </LiveProvider>
);

Editor.propTypes = {
  code: PropTypes.string,
  noInline: PropTypes.bool,
};

export default Editor;
