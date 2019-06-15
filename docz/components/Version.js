import React from 'react';
import { useComponents } from 'docz';

import { version } from '../../package.json';

export default function Version() {
  const components = useComponents();
  return <components.inlineCode>v{version}</components.inlineCode>;
}
