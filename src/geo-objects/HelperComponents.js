import React from 'react'
import GeoObject from './GeoObject'
import {GEO_OBJECT} from '../util/symbols'

export function Placemark({geometry, ...props}) {
  return <GeoObject geometry={{type: 'Point', ...geometry}} {...props} />
}

Placemark[GEO_OBJECT] = true

export function Polyline({geometry, ...props}) {
  return <GeoObject geometry={{type: 'LineString', ...geometry}} {...props} />
}

Polyline[GEO_OBJECT] = true

export function Rectangle({geometry, ...props}) {
  return <GeoObject geometry={{type: 'Rectangle', ...geometry}} {...props} />
}

Rectangle[GEO_OBJECT] = true

export function Polygon({geometry, ...props}) {
  return <GeoObject geometry={{type: 'Polygon', ...geometry}} {...props} />
}

Polygon[GEO_OBJECT] = true

export function Circle({geometry, ...props}) {
  return <GeoObject geometry={{type: 'Circle', ...geometry}} {...props} />
}

Circle[GEO_OBJECT] = true
