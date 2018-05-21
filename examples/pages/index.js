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
* [x] ObjectManager

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

Another React pattern that you should keep in mind is controlled and uncontroled
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
            onClick={() => this.setState({ zoom: 12, coordinates: [0, 0] })}
          >
            Change map zoom
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
rendered on the page. That means that the amount of code your clients will
download and execute will be as minimal as possible. On the other hand that
means that instead of getting a lot of familiar Yandex.Maps API modules by
default, now you need to really think about what you are using on the page.

In the example below, we are mounting Map with a Placemark on the page:

~~~jsx
~~~
`;

const Route = () => <Page>{markdown}</Page>;

export default Route;
