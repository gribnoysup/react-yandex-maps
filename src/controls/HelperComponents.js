import React from 'react'
import Control from './Control'
import {CONTROL} from '../util/symbols'

export function Button(props) {
  return <Control type={'Button'} {...props} />
}

Button[CONTROL] = true

export function FullscreenControl(props) {
  return <Control type={'FullscreenControl'} {...props} />
}

FullscreenControl[CONTROL] = true

export function GeolocationControl(props) {
  return <Control type={'GeolocationControl'} {...props} />
}

GeolocationControl[CONTROL] = true

export function RouteEditor(props) {
  return <Control type={'RouteEditor'} {...props} />
}

RouteEditor[CONTROL] = true

export function RulerControl(props) {
  return <Control type={'RulerControl'} {...props} />
}

RulerControl[CONTROL] = true

export function SearchControl(props) {
  return <Control type={'SearchControl'} {...props} />
}

SearchControl[CONTROL] = true

export function TrafficControl(props) {
  return <Control type={'TrafficControl'} {...props} />
}

TrafficControl[CONTROL] = true

export function TypeSelector(props) {
  return <Control type={'TypeSelector'} {...props} />
}

TypeSelector[CONTROL] = true

export function ZoomControl(props) {
  return <Control type={'ZoomControl'} {...props} />
}

ZoomControl[CONTROL] = true
