import React from 'react';
import styled from 'react-emotion';
import { Code } from 'rebass/emotion';

const StyledCode = styled(Code)`
  display: inline-block;
  border-radius: 2px;
`;

StyledCode.defaultProps = {
  px: 1,
  py: '1px',
  my: '1px',
  color: 'black',
  bg: 'gray',
};

export const InlineCode = props => {
  switch (props.children) {
    case 'INFO':
    case 'WARN':
      return null;
    default:
      return <StyledCode fontSize="inherit" {...props} />;
  }
};
