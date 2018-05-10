import React from 'react';
import PropTypes from 'prop-types';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import * as scope from '../../dist/react-yandex-maps';
import points from '../pages/points.json';

const Editor = ({ code, noInline }) => (
  <LiveProvider code={code} scope={{ points, ...scope }} noInline={noInline}>
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
