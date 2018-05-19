import React from 'react';
import PropTypes from 'prop-types';
import * as ReactLive from 'react-live';

import '../utils/prism';

import * as scope from '../../dist/react-yandex-maps';

export const LiveEditor = ({ code, language, noInline }) => (
  <ReactLive.LiveProvider
    code={code}
    scope={{ ...scope }}
    noInline={noInline}
    mountStylesheet={false}
  >
    <ReactLive.LiveEditor className={` language-${language}`} />
    <ReactLive.LiveError />
    <ReactLive.LivePreview />
  </ReactLive.LiveProvider>
);

LiveEditor.propTypes = {
  code: PropTypes.string,
  noInline: PropTypes.bool,
  language: PropTypes.string,
};

export { Editor } from 'react-live';
