import React from 'react';

import { LiveEditor, Editor } from '../LiveEditor';

const LANG_REGEX = /language-(\S+)/i;
const USE_LIVE_REGEX = /^\/\/ @live/;

export const Code = ({ className, children }) => {
  const language = LANG_REGEX.test(className)
    ? className
        .match(LANG_REGEX)[1]
        .toLowerCase()
        .trim()
    : 'clike';

  if (language === 'jsx' && USE_LIVE_REGEX.test(children)) {
    const code = children.replace(USE_LIVE_REGEX, '').trim() + '\n';

    return <LiveEditor code={code} language={language} noInline={true} />;
  } else {
    return (
      <Editor
        code={children}
        language={language}
        className={` language-${language}`}
        contentEditable={false}
      />
    );
  }
};
