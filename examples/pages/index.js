import React from 'react';

import md from '../components/md';
import Page from '../components/Page';

const markdown = md`
# \`react-yandex-maps\`

\`react-yandex-maps\` is a wrapper around Yandex.Maps API that allows you to
render Yandex Maps in your React application with minimum amount of hassle 🎉

## Getting Started

### Installation

To add the library to your project you can either use one of the CDN services

~~~html
<script src="TODO: unpkg url after release"></script>
~~~

Or npm/yarn to install the library from npm registry:

~~~bash
# With npm:
npm install --save react-yandex-maps
# With yarn:
yarn add react-yandex-maps
~~~

### Adding Maps to Your Application

Adding maps to your application can be splitted in two steps.

First, we will add provider component, that will handle loading the Yandex.Maps
API and providing it to any interested component on the page. Usually you don't
want to have several providers on one page. A good place to put your provider
could the at the top of your application:

~~~jsx
import { YMaps } from 'react-yandex-maps';

const App = () => (
  <YMaps>
    <div>My awesome application with maps!</div>
  </YMaps>
);
~~~

Then add the Map component with desired state somewhere on the page:

~~~jsx
import { YMaps, Map } from 'react-yandex-maps';

const App = () => (
  <YMaps>
    <div>
      My awesome application with maps!
      <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
    </div>
  </YMaps>
);
~~~

That's it! Now, as soon as Yandex.Maps API is loaded by \`YMaps\` provider
component, \`Map\` component will render \`ymaps.Map\` object on the page.

Before you run away playing around with the library in your project I higly
recommend taking a quick look at the "What is supported?" section and a more
thorough look at "Basic Principles" section

## What Is Supported?

This library is a thin wrapper over Yandex.Maps API, a lot of Yandex.Maps API
objects and features are supported with React components but not all of them and
not all of their features.

Here is a list of supported features and objects:

### Supported Features

* [x] Modifying Yandex.Maps API request via \`YMaps\` provider component
* [x] Getting acces to Yandex.Maps API in your components via \`withYMaps\` HOC
* [x] Granular load of the required API modules with Yandex.Maps modules API
* [x] Controlled^ and uncontrolled components for every supported object

^ - see the note on controlled props in "not supported section"

### Supported Objects

* [x] Map
* [x] GeoObject
* [x] Placemark
* [x] Polyline
* [x] Rectangle
* [x] Polygon
* [x] Circle
* [x] Clusterer
* [ ] ObjectManager
* [ ] ObjectManager

## What Is Not Supported?

* Rendering React DOM nodes to the Yandex.Maps template factories is not
  supported yet
* Controlled props that are mentioned above are not 100% controlled as there is
  no way to stop Yandex.Maps objects from updating completely with the library
  API. When using controlled props, you should keep in mind that your
  state/properties/options and Yandex.Maps object state/properties/options could
  go out of sync.

## Basic Principles

There are a few basic principles that are forming the base of this library. It
will be very helpful to keep those in mind, when you are using it.

### React Context. Provider and Consumer Components

This library uses React Context API to provide Yandex.Maps API to every
component, that needs it.

> #WARN# Make sure that you used YMaps provider component and all Yandex.Maps
> objects are inside this component tree. This library will throw an error, if
> the Yandex.Maps context is missing.

This library also uses React Context API so parent Yandex.Maps objects (e.g.,
Map, Clusterer, ObjectManager) could provide children Yandex.Maps objects with a
parent instance.

If you want to know more about React Context and Provider/Consumer components,
you can check out [React documentation section on the topic][4.1.1].

[4.1.1]: https://reactjs.org/docs/context.html

### Controlled and Uncontrolled Components

Another React pattern that you should be aware of is controlled and uncontroled
components. This pattern is all about who is responsible for handling updates
and storing components state.

Applied to this library, that means that based on which props you are using,
either Yandex.Maps API or your application will be responsible for being the
source of truth for your map objects.

In the example below, map state (more specifically zoom and coordinates) is
controlled by application on the first map component, but is not controlled by
application on the second map component. When you click the button, first map
zoom and coordinates will be updated, but the second map will preserve its
state. This happens because instead of \`state\` prop, we are using
\`defaultState\` prop.

~~~react-live
class Application extends React.Component {
  constructor() {
    super();
    this.state = { center: [55.75, 37.57], zoom: 9 };
  }

  render() {
    return (
      <YMaps>
        <React.Fragment>
          <button
            onClick={() =>
              this.setState(prevState => ({
                zoom: prevState.zoom === 9 ? 12 : 9,
                coordinates: [0, 0],
              }))
            }
          >
            Toggle map zoom
          </button>
          <div style={{ display: 'flex' }}>
            {/* This map will be controlled by application state */}
            <Map state={this.state} />
            {/* This map will only get its initial state from application */}
            <Map defaultState={this.state} />
          </div>
        </React.Fragment>
      </YMaps>
    );
  }
}

render(<Application />);
~~~

Every prop on every map object is this library supports the \`default\` version
(e.g, state and defaultState, options and defaultOptions, properties and
defaultProperties, geometry and defaultGeometry). By choosing to use \`default\`
version you are opting out of this library updating map objects when the props
are changed.

If you want to know more about controlled and uncontrolled components, there are
a few useful links from React documentation:

* [Glossary: Controlled vs. Uncontroled Components][4.2.1]
* [Uncontroled Components][4.2.2]
* [Forms: Controlled Components][4.2.3]

> #WARN# As mentioned above, there is no way to prevent Yandex.Maps from
> updating maps objects state completely, so it is very easy to go out of sync
> if you are using these components in a controlled way and not synchronizing
> the state back to your application state.
>
> From the personal experience you would want to use \`default\` props for most
> of the cases in your app and maybe even update maps object instances manually
> in the rare cases where this is actually needed.

[4.2.1]: https://reactjs.org/docs/glossary.html#controlled-vs-uncontrolled-components
[4.2.2]: https://reactjs.org/docs/uncontrolled-components.html
[4.2.3]: https://reactjs.org/docs/forms.html#controlled-components

### Modular Approach

This library heavily utilizes Yandex.Maps API module system to make amount of
downloaded and executed code from Yandex.Maps as minimal as possible. There are
some pros and cons to this system and there are also a way to opt out of this
completely.

By default this library will download only the modules that are actually
rendered on the page. If \`<Placemark />\` or \`<ObjectManager />\` is not
mounted in the page, corresponding would not be downloaded.

That means that the amount of code your clients will download and execute will
be as minimal as possible. On the other hand that means that instead of getting
a lot of familiar Yandex.Maps API modules by default, now you need to really
think about what you are using on the page.

In the example below, we are mounting Map with a Placemark on the page:

~~~react-live
const state = { center: [55.75, 37.57], zoom: 9 };

const Application = () => (
  <YMaps>
    <Map defaultState={state}>
      <Placemark defaultGeometry={state.center} />
    </Map>
  </YMaps>
);

render(<Application />);
~~~

You can notice that all map controls that are usually provided on the map by
default are missing here. This is happening because they are not part of the
"core" Yandex.Maps module, not they are part of the Map or Placemark module.

#### Loading Modules with \`modules\` Prop

Let's fix this by specifying which controls we want exactly in the map \`state\`
and then let's use the \`modules\` prop to load the ones we need:

~~~react-live
const state = {
  center: [55.75, 37.57],
  zoom: 9,
  controls: ['zoomControl', 'fullscreenControl'],
};

const Application = () => (
  <YMaps>
    <Map
      defaultState={state}
      modules={['control.ZoomControl', 'control.FullscreenControl']}
    >
      <Placemark defaultGeometry={state.center} />
    </Map>
  </YMaps>
);

render(<Application />);
~~~

Nice! Now we have controls on the map and we also avoided downloading the full
package of Yandex.Maps API.

All components in this library support \`modules\` prop, that will allow you to
download additional modules when they are needed.

Let's add another one the the example above. This time we will add balloon to
the placemark. Balloon module is not downloaded with the base minimum bundle of
Yandex.Maps API, so to enable balloon for the placemark we will not only add

~~~react-live
const state = {
  center: [55.75, 37.57],
  zoom: 9,
  controls: ['zoomControl', 'fullscreenControl'],
};

const Application = () => (
  <YMaps>
    <Map
      defaultState={state}
      modules={['control.ZoomControl', 'control.FullscreenControl']}
    >
      <Placemark
        modules={['geoObject.addon.balloon']}
        defaultGeometry={state.center}
        properties={{
          balloonContentBody:
            'This is balloon loaded by the Yandex.Maps API module system',
        }}
      />
    </Map>
  </YMaps>
);

render(<Application />);
~~~

#### Loading Modules With YMaps Provider \`query\` Prop

Manually specifying required modules is not the only way to load them. You can
also take advantage of \`load\` option when you are specifying \`query\` on your
Provider component.

This option is part of Yandex.Maps API request and can be used to define what
modules you want to load right away with the Yandex.Maps API.

Lets see how the previous example could be changed to use this option:

~~~react-live
const state = {
  center: [55.75, 37.57],
  zoom: 9,
  controls: ['zoomControl', 'fullscreenControl'],
};

const Application = () => (
  <YMaps
    query={{
      ns: 'use-load-option',
      load:
        'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon',
    }}
  >
    <Map defaultState={state}>
      <Placemark
        defaultGeometry={state.center}
        properties={{
          balloonContentBody:
            'This is balloon is pre-loaded with initial Yandex.Maps API request',
        }}
      />
    </Map>
  </YMaps>
);

render(<Application />);
~~~

Notice how we removed all \`modules\` props from all components and used
\`query.load\` prop instead to specify all modules that are required.

> #INFO# Yandex.Maps API default value for this option is \`package.full\`.
> Setting \`query.load\` to \`'package.full'\` will basically set this library
> to the mode, that is more or less completely matching the default Yandex.Maps
> API behavior in the amount of modules that are available right away

You can learn more about [Yandex.Maps API on-demand module system][5.3.1] and
[API loading parameters][5.3.2] in Yandex.Maps documentation.

[5.3.1]: https://tech.yandex.com/maps/doc/jsapi/2.1/dg/concepts/modules-docpage/#require
[5.3.2]: https://tech.yandex.com/maps/doc/jsapi/2.1/dg/concepts/load-docpage/#param
`;

const Route = () => <Page>{markdown}</Page>;

export default Route;
