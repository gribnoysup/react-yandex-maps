import React from 'react';

const Fragment = React.Fragment
  ? React.Fragment
  : // eslint-disable-next-line react/display-name, react/prop-types
    ({ children }) => <noscript>{children}</noscript>;

Fragment.displayName = 'Fragment';

export default Fragment;
