import * as React from 'react';

interface AnyObject {
  [key: string]: any;
}

export type YMapsApi = AnyObject;

export interface YMapsProps extends AnyObject {
  version?: string;
  enterprise?: boolean;
  query?: {
    lang?: 'tr_TR' | 'en_US' | 'en_RU' | 'ru_RU' | 'ru_UA' | 'uk_UA';
    apikey?: string;
    coordorder?: 'latlong' | 'longlat';
    load?: string;
    mode?: 'release' | 'debug';
    csp?: boolean;
    ns?: string;
  };
  children?: React.ReactNode;
  preload?: boolean;
}

export interface MapState extends AnyObject {
  bounds?: number[][];
  center?: number[];
  controls?: string[];
  behaviors?: string[];
  margin?: number[] | number[][];
  type?: 'yandex#map' | 'yandex#satellite' | 'yandex#hybrid';
  zoom?: number;
}

export interface MapOptions extends AnyObject {
  autoFitToViewport?: 'none' | 'ifNull' | 'always';
  avoidFractionalZoom?: boolean;
  exitFullscreenByEsc?: boolean;
  fullscreenZIndex?: number;
  mapAutoFocus?: boolean;
  maxAnimationZoomDifference?: number;
  maxZoom?: number;
  minZoom?: number;
  nativeFullscreen?: boolean;
  projection?: any;
  restrictMapArea?: boolean;
  suppressMapOpenBlock?: boolean;
  suppressObsoleteBrowserNotifier?: boolean;
  yandexMapAutoSwitch?: boolean;
  yandexMapDisablePoiInteractivity?: boolean;
}

export interface MapProps extends AnyObject {
  state?: MapState;
  defaultState?: MapState;
  options?: MapOptions;
  defaultOptions?: MapOptions;
  children?: ReactNode;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
  className?: string;
  instanceRef?: (instance: any) => void;
}

export interface ObjectManagerFeature {
  id: number | string;
  type: 'Feature';
  geometry: AnyObject;
  options?: AnyObject;
  properties?: AnyObject;
}

export interface ObjectManagerFeatureCollection {
  type: 'FeatureCollection';
  features: (ObjectManagerFeatureCollection | ObjectManagerFeature)[];
}

export type ObjectManagerFeatures =
  | (ObjectManagerFeatureCollection | ObjectManagerFeature)[]
  | ObjectManagerFeatureCollection;

export type ObjectManagerFilter = string | ((...args: any[]) => any);

export interface ObjectManagerOptions extends AnyObject {
  clusterize?: boolean;
  syncOverlayInit?: boolean;
  viewportMargin?: number | number[];
}

/**
 * FIXME:
 */
export type ObjectManagerObjectsOptions = AnyObject;
export type ObjectManagerClustersOptions = AnyObject;

export interface ObjectManagerProps {
  features?: ObjectManagerFeatures;
  defaultFeatures?: ObjectManagerFeatures;
  filter?: ObjectManagerFilter;
  defaultFilter?: ObjectManagerFilter;
  options?: ObjectManagerOptions;
  defaultOptions?: ObjectManagerOptions;
  objects?: ObjectManagerObjectsOptions;
  defaultObjects?: ObjectManagerObjectsOptions;
  clusters?: ObjectManagerClustersOptions;
  defaultClusters?: ObjectManagerClustersOptions;
  parent?: any;
  instanceRef?: (instance: any) => void;
}

export interface ClustererOptions extends AnyObject {
  gridSize?: number;
  groupByCoordinates?: boolean;
  hasBalloon?: boolean;
  hasHint?: boolean;
  margin?: number | number[] | number[][];
  maxZoom?: number | number[];
  minClusterSize?: number;
  preset?: string;
  showInAlphabeticalOrder?: boolean;
  useMapMargin?: boolean;
  viewportMargin?: number | number[] | number[][];
  zoomMargin?: number | number[] | number[][];
}

export interface ClustererProps extends AnyObject {
  options?: ClustererOptions;
  defaultOptions?: ClustererOptions;
  children?: React.ReactNode;
  parent?: any;
  instanceRef?: (instance: any) => void;
}

export interface GeoObjectProps<G, P = AnyObject, O = AnyObject>
  extends AnyObject {
  geometry?: G;
  defaultGeometry?: G;
  properties?: P;
  defaultProperties?: P;
  options?: O;
  defaultOptions?: O;
}

export type PlacemarkGeometry = number[];
export type PolylineGeometry = number[][];
export type RectangleGeometry = number[][];
export type PolygonGeometry = number[][][];
export type CircleGeometry = (number | number[])[];

export const YMaps: React.ComponentType<YMapsProps>;
export const Map: React.ComponentType<MapProps>;
export const ObjectManager: React.ComponentType<ObjectManagerProps>;
export const Clusterer: React.ComponentType<ClustererProps>;

export const GeoObject: React.ComponentType<GeoObjectProps<GeoObjectGeometry>>;
export const Placemark: React.ComponentType<GeoObjectProps<PlacemarkGeometry>>;
export const Polyline: React.ComponentType<GeoObjectProps<PolylineGeometry>>;
export const Rectangle: React.ComponentType<GeoObjectProps<RectangleGeometry>>;
export const Polygon: React.ComponentType<GeoObjectProps<PolygonGeometry>>;
export const Circle: React.ComponentType<GeoObjectProps<CircleGeometry>>;

/**
 * TODO: need more information about prop types
 */
export const Button: React.ComponentType<AnyObject>;
export const FullscreenControl: React.ComponentType<AnyObject>;
export const GeolocationControl: React.ComponentType<AnyObject>;
export const ListBox: React.ComponentType<AnyObject>;
export const ListBoxItem: React.ComponentType<AnyObject>;
export const RouteButton: React.ComponentType<AnyObject>;
export const RouteEditor: React.ComponentType<AnyObject>;
export const RoutePanel: React.ComponentType<AnyObject>;
export const RulerControl: React.ComponentType<AnyObject>;
export const SearchControl: React.ComponentType<AnyObject>;
export const TrafficControl: React.ComponentType<AnyObject>;
export const TypeSelector: React.ComponentType<AnyObject>;
export const ZoomControl: React.ComponentType<AnyObject>;
