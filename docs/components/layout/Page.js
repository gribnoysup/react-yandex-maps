import 'normalize.css';

import React from 'react';
import PropTypes from 'prop-types';
import styled, { hydrate, injectGlobal } from 'react-emotion';
import { Provider as ThemeProvider, Container, Flex } from 'rebass/emotion';

import { Provider as MDXProvider } from '../markdown/Provider';

import { Header } from './Header';
import { Footer } from './Footer';

import { DrawerContextProvider, DrawerContextConsumer, Drawer } from './Drawer';

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
  width: 100%;
  flex: 1 0 auto;
`;

export const Page = ({ children }) => (
  <ThemeProvider>
    <MDXProvider>
      <DrawerContextProvider>
        <StyledContainer flexDirection="column">
          <DrawerContextConsumer>
            {({ toggleDrawer, isOpen }) => (
              <Header isDrawerOpen={isOpen} onMenuClick={toggleDrawer} />
            )}
          </DrawerContextConsumer>
          <Drawer />
          <StyledMain is="main" my={2}>
            {children}
          </StyledMain>
          <Footer />
        </StyledContainer>
      </DrawerContextProvider>
    </MDXProvider>
  </ThemeProvider>
);

Page.propTypes = {
  children: PropTypes.node,
};
