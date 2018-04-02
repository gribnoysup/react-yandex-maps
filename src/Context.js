import React from 'react';
import createReactContext from 'create-react-context';

import { getDisplayName as name } from './util/getDisplayName';

export const YMapsContext = createReactContext(null);

export const withYMapsContext = Component => {
  const WithYMapsContext = props => (
    <YMapsContext.Consumer>
      {ymaps => <Component ymaps={ymaps} {...props} />}
    </YMapsContext.Consumer>
  );

  WithYMapsContext.displayName = `withYMapsContext(${name(Component)})`;

  return WithYMapsContext;
};

export const ParentContext = createReactContext(null);

export const withParentContext = Component => {
  const WithParentContext = props => (
    <ParentContext.Consumer>
      {parent => <Component parent={parent} {...props} />}
    </ParentContext.Consumer>
  );

  WithParentContext.displayName = `withParentContext(${name(Component)})`;

  return WithParentContext;
};
