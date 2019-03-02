import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Toolbar, Text, Sticky, Box, ButtonOutline } from 'rebass/emotion';

import { version, name } from '../../../package.json';

const StyledSticky = styled(Sticky)`
  width: 100%;
`;

export const Header = ({ onMenuClick, isDrawerOpen }) => (
  <StyledSticky zIndex={1} top={0}>
    <Toolbar is="header">
      <Box fontSize={[1, 2]}>
        <ButtonOutline
          color="white"
          hover={{ 'background-color': 'white', color: 'black' }}
          onClick={onMenuClick}
        >
          {isDrawerOpen ? 'Close' : 'Menu'}
        </ButtonOutline>
      </Box>
      <Box ml="auto">
        <Text px={1} fontFamily="mono" textAlign="right">
          {name}
        </Text>
        <Text
          px={1}
          pt={1}
          fontFamily="mono"
          fontWeight="bold"
          textAlign="right"
        >
          v{version}
        </Text>
      </Box>
    </Toolbar>
  </StyledSticky>
);

Header.propTypes = {
  onMenuClick: PropTypes.func,
  isDrawerOpen: PropTypes.bool,
};
