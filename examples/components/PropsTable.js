import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Table = styled.table``;

const TableHead = styled.thead``;

const TableBody = styled.tbody``;

const Row = styled.tr``;

const Column = styled.td``;

const Heading = styled.th``;

const Code = styled.pre``;

const PropsTable = ({ heading, componentProps }) => (
  <Table>
    <TableHead>
      <Row>{heading.map(text => <Heading key={text}>{text}</Heading>)}</Row>
    </TableHead>
    <TableBody>
      {componentProps.map(({ name, type, defaultValue, description }) => (
        <Row key={name}>
          <Column>
            <Code>{name}</Code>
          </Column>
          <Column>
            <Code>{type}</Code>
          </Column>
          <Column>
            {defaultValue !== undefined && (
              <Code>{JSON.stringify(defaultValue)}</Code>
            )}
          </Column>
          <Column>{description}</Column>
        </Row>
      ))}
    </TableBody>
  </Table>
);

PropsTable.defaultProps = {
  heading: ['Name', 'Type', 'Default', 'Description'],
  componentProps: [],
};

PropsTable.propTypes = {
  heading: PropTypes.arrayOf(PropTypes.string).isRequired,
  componentProps: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      defaultValue: PropTypes.any,
      description: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default PropsTable;
