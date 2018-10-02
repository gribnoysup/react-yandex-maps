import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {
  Drawer as RebassDrawer,
  Toolbar,
  ButtonTransparent,
  Box,
  Flex,
  Sticky,
  Fixed,
} from 'rebass/emotion';
import NextLink from 'next/link';

import { Link } from '../markdown/Link';
import { H3 } from '../markdown/Text';

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

const StyledNavSection = styled(Box)`
  &:not(:last-of-type) {
    border-bottom: 1px solid #eee;
  }
`;

const StyledBg = styled(Fixed)`
  width: 100%;
  height: 100%;

  pointer-events: ${_ => (_.isOpen ? 'auto' : 'none')};
  background-color: ${_ =>
    _.isOpen ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0)'};

  transition: background-color 0.2s ease-out;
`;

export class Drawer extends React.Component {
  render() {
    const { children: navRootChildren } = navigation[0];

    return (
      <DrawerContextConsumer>
        {({ isOpen, toggleDrawer }) => (
          <React.Fragment>
            <StyledDrawer
              open={isOpen}
              zIndex={2}
              side="left"
              color="black"
              bg="white"
            >
              <Sticky top={0}>
                <Toolbar alignItems="center" justifyContent="flex-end">
                  <CloseButton onClick={toggleDrawer} />
                </Toolbar>
              </Sticky>
              <Flex flexDirection="column">
                {navRootChildren.map(({ uid, title, children }) => {
                  if (!Array.isArray(children) || children.length === 0) {
                    return (
                      <StyledNavSection key={uid} p={3}>
                        <NextLink href={`/${uid}`} passHref>
                          <Link onClick={toggleDrawer}>{title}</Link>
                        </NextLink>
                      </StyledNavSection>
                    );
                  }

                  return (
                    <StyledNavSection key={uid} p={3}>
                      <H3 my={2} mt={0} withAnchor={false}>
                        {title}
                      </H3>
                      {children.map(({ title, uid: childUid }) => (
                        <Box key={childUid} p={2}>
                          <NextLink href={`/${uid}/${childUid}`} passHref>
                            <Link onClick={toggleDrawer}>{title}</Link>
                          </NextLink>
                        </Box>
                      ))}
                    </StyledNavSection>
                  );
                })}
              </Flex>
            </StyledDrawer>
            <StyledBg
              top={0}
              left={0}
              zIndex={1}
              isOpen={isOpen}
              onClick={toggleDrawer}
            />
          </React.Fragment>
        )}
      </DrawerContextConsumer>
    );
  }
}
