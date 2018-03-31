import React from 'react';
import { default as markings } from 'react-markings';
import { Editor } from 'react-live';

import LiveEditor from './LiveEditor';

export default markings.customize({
  renderers: {
    CodeBlock: ({ language, literal }) => {
      language = (language || 'clike').toLowerCase().trim();

      if (language === 'react-live') {
        return <LiveEditor code={literal} noInline={true} />;
      } else {
        return <Editor code={literal} language={language} />;
      }
    },
  },
});
