import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {
  Drawer as RebassDrawer,
  Toolbar,
  Container,
  ButtonTransparent,
  Box,
} from 'rebass/emotion';
import NextLink from 'next/link';

import { Link } from '../markdown/Link';
import { H5 } from '../markdown/Text';

import navigation from '../../app-data/navigation';

const DrawerContext = React.createContext({
  isOpen: false,
  toggleDrawer: Function.prototype,
});

export class DrawerContextProvider extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
      toggleDrawer: this.toggleDrawer.bind(this),
    };
  }

  toggleDrawer() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    return (
      <DrawerContext.Provider value={this.state}>
        {this.props.children}
      </DrawerContext.Provider>
    );
  }
}

DrawerContextProvider.propTypes = {
  children: PropTypes.node,
};

export const DrawerContextConsumer = DrawerContext.Consumer;

const CloseButton = styled(ButtonTransparent)`
  position: relative;

  width: calc(24px + 8px);
  height: calc(24px + 8px);

  padding: 8px;

  color: white;

  &:before,
  &:after {
    content: '';

    display: block;
    position: absolute;

    top: 0;
    left: 0;

    width: 2px;
    height: ${(Math.SQRT2 * 24).toFixed(0)}px;

    background-color: currentColor;
  }

  &:before {
    transform: translateX(calc(calc(24px + 8px) / 2)) rotate(45deg);
  }

  &:after {
    transform: translateX(calc(calc(24px + 8px) / 2)) rotate(-45deg);
  }
`;

const StyledDrawer = styled(RebassDrawer)`
  box-shadow: ${props =>
    props.open ? '0 0 24px rgba(0, 0, 0, 0.25)' : 'none'};

  pointer-events: ${props => (!props.open ? 'none' : 'all')};
`;

export class Drawer extends React.Component {
  render() {
    const { children: navRootChildren } = navigation[0];

    return (
      <DrawerContextConsumer>
        {({ isOpen, toggleDrawer }) => (
          <StyledDrawer
            open={isOpen}
            zIndex={2}
            side="left"
            color="black"
            bg="white"
          >
            <Toolbar alignItems="center" justifyContent="flex-end">
              <CloseButton onClick={toggleDrawer} />
            </Toolbar>
            <Container>
              <Box key="/" my={3}>
                <NextLink href="/" passHref>
                  <Link onClick={toggleDrawer}>Getting Started</Link>
                </NextLink>
              </Box>
              {navRootChildren.map(({ uid, title, children }) => (
                <React.Fragment key={uid}>
                  <H5>{title}</H5>
                  {children.map(({ title, uid: childUid }) => (
                    <Box key={childUid} p={1} pl={2}>
                      <NextLink href={`/${uid}/${childUid}`} passHref>
                        <Link onClick={toggleDrawer}>{title}</Link>
                      </NextLink>
                    </Box>
                  ))}
                </React.Fragment>
              ))}
            </Container>
          </StyledDrawer>
        )}
      </DrawerContextConsumer>
    );
  }
}
