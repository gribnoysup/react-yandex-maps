import React from 'react';
import PropTypes from 'prop-types';
import { PropItem } from '../components/Props';
import { InlineCode } from '../components/markdown/InlineCode';
import { Link } from '../components/markdown/Link';

export const ModulesDescription = () => (
  <React.Fragment>
    Array of{' '}
    <Link href="https://tech.yandex.com/maps/doc/jsapi/2.1/dg/concepts/modules-docpage/">
      Yandex.Maps API module
    </Link>{' '}
    names
  </React.Fragment>
);

export const CommonProps = ({
  componentName = 'T',
  hideInstanceRef = false,
}) => (
  <React.Fragment>
    {!hideInstanceRef && (
      <PropItem
        name="instanceRef"
        type={`(ref: Ref<${componentName}> | null) => void`}
        description={
          <React.Fragment>
            Behaves similarly to{' '}
            <Link href="https://reactjs.org/docs/refs-and-the-dom.html#callback-refs">
              React ref callbacks
            </Link>
            . Called with Yandex.Maps API object instance when component is
            mounted, and with <InlineCode>null</InlineCode> when component is
            unmounted.
          </React.Fragment>
        }
      />
    )}
    <PropItem
      name="onLoad"
      type="(ymaps: YMapsAPI) => void"
      description="Callback that will be called when Yandex.Maps API and requested modules (if any) are finished loading"
    />
    <PropItem
      name="onError"
      type="(error: Error) => void"
      description="Callback that will be called when error happenes during API loading"
    />
    <PropItem
      name="modules"
      type="string[]"
      defaultValue={[]}
      description={<ModulesDescription />}
    />
  </React.Fragment>
);

CommonProps.propTypes = {
  componentName: PropTypes.string,
  hideInstanceRef: PropTypes.boolean,
};
