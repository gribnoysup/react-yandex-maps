import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Box, Badge, Caps } from 'rebass/emotion';

const getFirstRec = ({ props }) => {
  if (Array.isArray(props.children)) {
    return getFirstRec(props.children[0]);
  } else if (typeof props.children === 'object' && props.children !== null) {
    return getFirstRec(props.children);
  } else {
    return props.children;
  }
};

const Types = {
  Warning: 'WARN',
  Info: 'INFO',
  Default: 'DEFAULT',
};

const Styles = {
  [Types.Warning]: {
    color: 'white',
    bg: 'orange',
  },
  [Types.Info]: {
    color: 'black',
    bg: 'cyan',
  },
  [Types.Default]: {},
};

const invert = styles => {
  return {
    bg: styles.color,
    color: styles.bg,
  };
};

const _Blockquote = styled(Box)`
  border-radius: 2px;

  & > p:last-of-type {
    margin-bottom: 0;
  }
`;

_Blockquote.defaultProps = {
  is: 'blockquote',
};

export const Blockquote = props => {
  const quoteType = getFirstRec({ props });
  let styles;

  switch (quoteType) {
    case Types.Warning:
    case Types.Info:
      styles = Styles[quoteType];
      break;
    default:
      styles = Styles[Types.Default];
      break;
  }

  const badgeLabel =
    quoteType === Types.Warning
      ? 'Warning'
      : quoteType === Types.Info
        ? 'Info'
        : '';

  return (
    <_Blockquote {...styles} px={3} py={3} mx={0} my={3}>
      {badgeLabel && (
        <Badge mx={0} {...invert(styles)}>
          <Caps>{badgeLabel}</Caps>
        </Badge>
      )}
      {props.children}
    </_Blockquote>
  );
};

Blockquote.propTypes = {
  children: PropTypes.node,
};
