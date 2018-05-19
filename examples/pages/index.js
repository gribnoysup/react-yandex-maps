import React from 'react';

import md from '../components/md';
import Page from '../components/Page';

const markdown = md`
# \`react-yandex-maps\`

\`react-yandex-maps\` is a wrapper around Yandex.Maps API that allows you to
render Yandex Maps in your React application with minimum amount of hassle 🎉

Only a few steps needed to make this work with your application.

### 1. Install the library

<!-- TODO: unpkg URL -->

Use npm or yarn to install library to your project dependencies

~~~bash
npm install --save react-yandex-maps
~~~

or

~~~bash
yarn add react-yandex-maps
~~~

### 2. Add Provider component somewhere in your app

~~~jsx
import { YMaps } from 'react-yandex-maps';

const App = () => (
  <YMaps>
    <div>My awesome app with a map somewhere</div>
  </YMaps>
);
~~~

### 3. Put the Map component somewhere to see Yandex.Map in your app!

~~~jsx
import { YMaps } from 'react-yandex-maps';
import { YMaps, Map } from 'react-yandex-maps';

const App = () => (
  <YMaps>
    <div>
      My awesome app with a map right here
      <Map />
    </div>
  </YMaps>
);
~~~
`;

const Route = () => <Page>{markdown}</Page>;

export default Route;
