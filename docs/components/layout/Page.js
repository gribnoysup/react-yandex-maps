import 'normalize.css';

import React from 'react';
import PropTypes from 'prop-types';
import styled, { hydrate, injectGlobal } from 'react-emotion';
import { Provider as ThemeProvider, Container, Flex } from 'rebass/emotion';

import { Provider as MDXProvider } from '../markdown/Provider';

import { Header } from './Header';
import { Footer } from './Footer';

if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids);
}

injectGlobal`
  body {
    overflow-x: hidden;
    position: relative;
  }
`;

const StyledContainer = styled(Flex)`
  min-height: 100vh;
`;

const StyledMain = styled(Container)`
  flex: 1 0 auto;
`;

export const Page = ({ children }) => (
  <ThemeProvider>
    <MDXProvider>
      <StyledContainer flexDirection="column">
        <Header />
        <StyledMain is="main" my={[3, 4]}>
          {children}
        </StyledMain>
        <Footer />
      </StyledContainer>
    </MDXProvider>
  </ThemeProvider>
);

Page.propTypes = {
  children: PropTypes.node,
};
