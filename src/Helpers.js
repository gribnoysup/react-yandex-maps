import React from 'react';

import { GeoObject } from './GeoObject';
import { Control } from './Control';

// --- GeoObjects

export function Placemark({ geometry, ...props }) {
  return <GeoObject geometry={{ type: 'Point', ...geometry }} {...props} />;
}

export function Polyline({ geometry, ...props }) {
  return (
    <GeoObject geometry={{ type: 'LineString', ...geometry }} {...props} />
  );
}

export function Rectangle({ geometry, ...props }) {
  return <GeoObject geometry={{ type: 'Rectangle', ...geometry }} {...props} />;
}

export function Polygon({ geometry, ...props }) {
  return <GeoObject geometry={{ type: 'Polygon', ...geometry }} {...props} />;
}

export function Circle({ geometry, ...props }) {
  return <GeoObject geometry={{ type: 'Circle', ...geometry }} {...props} />;
}

// --- Controls

export function Button(props) {
  return <Control type="Button" {...props} />;
}

export function FullscreenControl(props) {
  return <Control type="FullscreenControl" {...props} />;
}

export function GeolocationControl(props) {
  return <Control type="GeolocationControl" {...props} />;
}

export function RouteEditor(props) {
  return <Control type="RouteEditor" {...props} />;
}

export function RulerControl(props) {
  return <Control type="RulerControl" {...props} />;
}

export function SearchControl(props) {
  return <Control type="SearchControl" {...props} />;
}

export function TrafficControl(props) {
  return <Control type="TrafficControl" {...props} />;
}

export function TypeSelector(props) {
  return <Control type="TypeSelector" {...props} />;
}

export function ZoomControl(props) {
  return <Control type="ZoomControl" {...props} />;
}

export function ListBox(props) {
  return <Control type="ListBox" {...props} />;
}

export function ListBoxItem(props) {
  return <Control type="ListBoxItem" {...props} />;
}

export const Fragment = React.Fragment || 'div';
