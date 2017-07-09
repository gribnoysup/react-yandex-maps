import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';

import styled from 'styled-components';

const List = styled.ul`
  width: 200px;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 14px;
`;

const NavHeader = styled.li`
  padding: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  cursor: pointer;

  &:hover {
    background-color: #f6f5f3;
  }
`;

const NavItem = styled.li`
  padding: 10px 10px 10px 30px;
  font-size: 13px;
  cursor: pointer;

  &:last-child {
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }

  &:hover {
    background-color: #f6f5f3;
  }
`;

const Navigation = ({ path, name, id, onClick, routes, active, ...props }) =>
  <List>
    <NavHeader id={id} onClick={onClick}>
      {name}
    </NavHeader>

    {active &&
      routes.map(route =>
        <NavItem key={route.name} onClick={() => props.push(path + route.to)}>
          <Link to={path + route.to} onClick={event => event.preventDefault()}>
            {route.name}
          </Link>
        </NavItem>
      )}
  </List>;

export default withRouter(Navigation);
