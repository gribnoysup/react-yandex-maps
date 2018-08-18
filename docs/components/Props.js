import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Box, Code, Subhead } from 'rebass/emotion';

const prettify = value =>
  typeof value === 'function'
    ? '[Function]'
    : typeof value === 'number' && isNaN(value)
      ? 'NaN'
      : JSON.stringify(value, null, 2).replace(/\n\s*/g, ' ');

const TableContainer = styled(Box)`
  max-width: 100%;
  border-radius: 2px;
  overflow: auto;
`;

const Table = styled('table')`
  min-width: 100%;
  border-collapse: separate;
  border-spacing: 0px;
`;

const Tr = styled(Box)`
  &:last-of-type:not(:first-of-type) td,
  &:last-of-type:not(:first-of-type) th {
    border: none;
  }
`;

Tr.defaultProps = {
  is: 'tr',
};

const Th = styled(Subhead)`
  text-align: left;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
`;

Th.defaultProps = {
  is: 'th',
  fontSize: [3, 4],
  pr: 3,
  pt: 2,
  pb: [2, 3],
};

const Td = styled(Box)`
  vertical-align: top;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
`;

Td.defaultProps = {
  is: 'td',
  pr: 3,
  pt: 2,
  pb: [2, 3],
};

export const Props = ({ children }) => (
  <TableContainer bg="gray" p={1}>
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Type</Th>
          <Th>Default</Th>
          <Th>Description</Th>
        </Tr>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  </TableContainer>
);

Props.propTypes = {
  children: PropTypes.node,
};

const NowrapCode = styled(Code)`
  white-space: nowrap;
`;

const DescriptionBox = styled(Box)`
  min-width: 256px;
`;

export const PropItem = ({
  name,
  secondaryName,
  type,
  defaultValue,
  description,
}) => (
  <Tr>
    <Td>
      <NowrapCode>
        {name}
        {secondaryName && ` | ${secondaryName}`}
      </NowrapCode>
    </Td>
    <Td>
      <NowrapCode>{type}</NowrapCode>
    </Td>
    <Td>
      {typeof defaultValue !== 'undefined' ? (
        <NowrapCode>{prettify(defaultValue)}</NowrapCode>
      ) : (
        '—'
      )}
    </Td>
    <Td>
      <DescriptionBox>{description}</DescriptionBox>
    </Td>
  </Tr>
);

PropItem.propTypes = {
  name: PropTypes.string.isRequired,
  secondaryName: PropTypes.string,
  type: PropTypes.string.isRequired,
  defaultValue: PropTypes.any,
  description: PropTypes.node.isRequired,
};
