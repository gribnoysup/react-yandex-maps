/* eslint-disable import/no-webpack-loader-syntax */

import React from 'react';

import Demo from './Demo';

import MapBasics from 'sandbox/map/MapBasics';
import rawMapBasics from '!raw-loader!sandbox/map/MapBasics';

import MapParams from 'sandbox/map/MapParams';
import rawMapParams from '!raw-loader!sandbox/map/MapParams';

import FillContainer from 'sandbox/map/FillContainer';
import rawFillContainer from '!raw-loader!sandbox/map/FillContainer';

import Placemark from 'sandbox/geoobjects/Placemark';
import rawPlacemark from '!raw-loader!sandbox/geoobjects/Placemark';

import IconCustomImage from 'sandbox/geoobjects/IconCustomImage';
import rawIconCustomImage from '!raw-loader!sandbox/geoobjects/IconCustomImage';

import Polyline from 'sandbox/geoobjects/Polyline';
import rawPolyline from '!raw-loader!sandbox/geoobjects/Polyline';

import Rectangle from 'sandbox/geoobjects/Rectangle';
import rawRectangle from '!raw-loader!sandbox/geoobjects/Rectangle';

import Polygon from 'sandbox/geoobjects/Polygon';
import rawPolygon from '!raw-loader!sandbox/geoobjects/Polygon';

import Circle from 'sandbox/geoobjects/Circle';
import rawCircle from '!raw-loader!sandbox/geoobjects/Circle';

import ObjectManager from 'sandbox/objectmanager/ObjectManager';
import rawObjectManager from '!raw-loader!sandbox/objectmanager/ObjectManager';

import ClustererCreate from 'sandbox/clustering/ClustererCreate';
import rawClustererCreate from '!raw-loader!sandbox/clustering/ClustererCreate';

const demos = {
  map: {
    'map-basics': {
      name: 'Putting the map on a page',
      component: MapBasics,
      src: rawMapBasics,
    },
    'map-params': {
      name: 'Setting and changing the map settings',
      component: MapParams,
      src: rawMapParams,
    },
    'fill-container': {
      name: 'Resizing the map',
      component: FillContainer,
      src: rawFillContainer,
    },
  },

  geoobjects: {
    placemark: {
      name: 'Placemark',
      component: Placemark,
      src: rawPlacemark,
    },
    'icon-custom-image': {
      name: 'Setting a custom placemark image',
      component: IconCustomImage,
      src: rawIconCustomImage,
    },
    polyline: {
      name: 'Polylines',
      component: Polyline,
      src: rawPolyline,
    },
    rectangle: {
      name: 'Rectangle',
      component: Rectangle,
      src: rawRectangle,
    },
    polygon: {
      name: 'Polygon',
      component: Polygon,
      src: rawPolygon,
    },
    circle: {
      name: 'Circle',
      component: Circle,
      src: rawCircle,
    },
  },

  objectmanager: {
    objectmanager: {
      name: 'Adding a large number of objects to the map',
      component: ObjectManager,
      src: rawObjectManager,
    },
  },

  clustering: {
    'clusterer-create': {
      name: 'Adding a large number of objects to the map',
      component: ClustererCreate,
      src: rawClustererCreate,
    },
  },
};

const DemoProvider = ({ match }) => {
  if (!match) return null;

  const { demoGroup, demoName } = match.params;
  const demoProps = demos[demoGroup][demoName];

  return <Demo {...demoProps} />;
};

export default DemoProvider;
