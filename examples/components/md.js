import React from 'react';
import { default as markings } from 'react-markings';
import { LiveEditor, Editor } from './LiveEditor';

export default markings.customize({
  renderers: {
    CodeBlock: ({ language, literal }) => {
      language = (language || 'clike').toLowerCase().trim();

      if (language === 'react-live') {
        return (
          <LiveEditor code={literal} language={language} noInline={true} />
        );
      } else {
        return (
          <Editor
            code={literal}
            language={language}
            className={` language-${language}`}
          />
        );
      }
    },
  },
});
