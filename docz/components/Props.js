// TODO: Remove if https://github.com/pedronauck/docz/pull/905 lands in docz
import * as React from 'react';
import { first, get } from 'lodash/fp';
import capitalize from 'capitalize';
import marksy from 'marksy';
import { doczState, useComponents } from 'docz';

import { humanize } from './humanize';

export const getPropType = prop => {
  const propName = get('name', prop.flowType || prop.type);
  if (!propName) return null;

  const isEnum = propName.startsWith('"') || propName === 'enum';
  const name = capitalize(isEnum ? 'enum' : propName);
  const value = get('type.value', prop);
  if (!name) return null;

  if (
    (isEnum && typeof value === 'string') ||
    (!prop.flowType && !isEnum && !value) ||
    (prop.flowType && !prop.flowType.elements)
  ) {
    return name;
  }

  return prop.flowType ? humanize(prop.flowType) : humanize(prop.type);
};

// eslint-disable-next-line react/prop-types
export const Props = ({ title, isToggle, isRaw, of: component }) => {
  const components = useComponents();
  const { props: stateProps } = React.useContext(doczState.context);
  const PropsComponent = components.props;
  const filename = get('__filemeta.filename', component);
  const filemetaName = get('__filemeta.name', component);
  const componentName = filemetaName || component.displayName || component.name;
  const found =
    stateProps &&
    stateProps.length > 0 &&
    stateProps.find(item =>
      filename ? item.key === filename : item.key.includes(`${componentName}.`)
    );

  const value = get('value', found) || [];
  const firstDefinition = first(value);
  const definition = value.find(i => i.displayName === componentName);

  const compileMarkdown = React.useMemo(
    () => marksy({ createElement: React.createElement, elements: components }),
    [components]
  );

  const props = React.useMemo(() => {
    const props = { ...get('props', definition || firstDefinition) };

    for (const key of Object.keys(props)) {
      if (
        props[key].description &&
        typeof props[key].description === 'string'
      ) {
        if (props[key].description.includes('@ignore')) {
          delete props[key];
        } else {
          try {
            props[key].description = compileMarkdown(
              props[key].description
            ).tree;
          } catch (e) {
            /* eslint-disable no-console */
            console.warn("Couldn't compile mardown to React tree");
            console.warn('Input:');
            console.warn(props[key].description);
            console.warn('Error:');
            console.warn(e);
            /* eslint-enable no-console */
          }
        }
      }
    }

    return Object.keys(props).length > 0 ? props : null;
  }, [compileMarkdown, definition || firstDefinition]);

  if (!props) return null;
  if (!PropsComponent) return null;
  return (
    <PropsComponent
      title={title}
      isRaw={isRaw}
      isToggle={isToggle}
      props={props}
      getPropType={getPropType}
    />
  );
};
