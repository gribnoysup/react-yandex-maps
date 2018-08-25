import React from 'react';
import { withParentContext } from '../Context';
import withYMaps from '../withYMaps';

import { Control as BaseControl } from './Control';

export function createControl(name, propTypes) {
  const Control = props => <BaseControl name={name} {...props} />;

  if (process.env.NODE_ENV !== 'production') {
    Control.displayName = name;
    Control.propTypes = propTypes;
  }

  return withParentContext(withYMaps(Control, true, [`control.${name}`]));
}
