import 'prismjs/themes/prism-okaidia.css';

import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './Navigation';

const Page = ({ children }) => (
  <React.Fragment>
    <Navigation />
    {children}
  </React.Fragment>
);

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
