import React from 'react';
import PropTypes from 'prop-types';
import { MDXProvider } from '@mdx-js/tag';

import { Code } from './Code';
import { Blockquote } from './Blockquote';
import { InlineCode } from './InlineCode';
import { Paragraph, H1, H2, H3, H4, H5 } from './Text';
import { Link } from './Link';

export const Provider = ({ children }) => (
  <MDXProvider
    components={{
      p: Paragraph,
      a: Link,
      h1: H1,
      h2: H2,
      h3: H3,
      h4: H4,
      h5: H5,
      code: Code,
      blockquote: Blockquote,
      inlineCode: InlineCode,
    }}
  >
    {children}
  </MDXProvider>
);

Provider.propTypes = {
  children: PropTypes.node,
};
