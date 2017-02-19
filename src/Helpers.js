import React from 'react'

import { GeoObject } from './GeoObject'
import { Control } from './Control'

import { GeoObject as GeoObjectSymbol, Control as ControlSymbol } from './util/symbols'

// --- GeoObjects

export function Placemark({geometry, ...props}) {
  return <GeoObject geometry={{type: 'Point', ...geometry}} {...props} />
}

Placemark[GeoObjectSymbol] = true

export function Polyline({geometry, ...props}) {
  return <GeoObject geometry={{type: 'LineString', ...geometry}} {...props} />
}

Polyline[GeoObjectSymbol] = true

export function Rectangle({geometry, ...props}) {
  return <GeoObject geometry={{type: 'Rectangle', ...geometry}} {...props} />
}

Rectangle[GeoObjectSymbol] = true

export function Polygon({geometry, ...props}) {
  return <GeoObject geometry={{type: 'Polygon', ...geometry}} {...props} />
}

Polygon[GeoObjectSymbol] = true

export function Circle({geometry, ...props}) {
  return <GeoObject geometry={{type: 'Circle', ...geometry}} {...props} />
}

Circle[GeoObjectSymbol] = true

// --- Controls

export function Button(props) {
  return <Control type={'Button'} {...props} />
}

Button[ControlSymbol] = true

export function FullscreenControl(props) {
  return <Control type={'FullscreenControl'} {...props} />
}

FullscreenControl[ControlSymbol] = true

export function GeolocationControl(props) {
  return <Control type={'GeolocationControl'} {...props} />
}

GeolocationControl[ControlSymbol] = true

export function RouteEditor(props) {
  return <Control type={'RouteEditor'} {...props} />
}

RouteEditor[ControlSymbol] = true

export function RulerControl(props) {
  return <Control type={'RulerControl'} {...props} />
}

RulerControl[ControlSymbol] = true

export function SearchControl(props) {
  return <Control type={'SearchControl'} {...props} />
}

SearchControl[ControlSymbol] = true

export function TrafficControl(props) {
  return <Control type={'TrafficControl'} {...props} />
}

TrafficControl[ControlSymbol] = true

export function TypeSelector(props) {
  return <Control type={'TypeSelector'} {...props} />
}

TypeSelector[ControlSymbol] = true

export function ZoomControl(props) {
  return <Control type={'ZoomControl'} {...props} />
}

ZoomControl[ControlSymbol] = true
