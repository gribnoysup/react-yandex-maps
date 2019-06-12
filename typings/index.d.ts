import * as React from 'react';

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

interface AnyObject {
  [key: string]: any;
}

interface CommonProps<T = any> extends AnyObject {
  instanceRef?: (instance: React.Ref<T>) => void;
  onLoad?: (ymaps: YMapsApi) => void;
  onError?: (error: Error) => void;
  modules?: string[];
  children?: React.ReactNode;
}

export type MapType = 'yandex#map' | 'yandex#satellite' | 'yandex#hybrid';

export interface YMapsApi extends AnyObject {}

//
// Main components
// ----------------------------------------------------------------------

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

interface MapStateBase extends AnyObject {
  controls?: string[];
  behaviors?: string[];
  margin?: number[] | number[][];
  type?: MapType;
}

interface MapStateBounds {
  bounds: number[][];
  zoom?: never;
  center?: never;
}

interface MapStateCenter {
  center: number[];
  zoom: number;
  bounds?: never;
}

/**
 * REVIEW: discuss if this behavior is necessary
 */
export type MapState = MapStateBase & (MapStateBounds | MapStateCenter);

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

export interface MapProps extends CommonProps {
  state?: MapState;
  defaultState?: MapState;
  options?: MapOptions;
  defaultOptions?: MapOptions;
  children?: React.ReactNode;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
  className?: string;
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
  | ObjectManagerFeature
  | ObjectManagerFeatureCollection
  | (ObjectManagerFeatureCollection | ObjectManagerFeature)[];

export type ObjectManagerFilter =
  | string
  | ((feature: ObjectManagerFeature) => void);

export interface ObjectManagerOptions extends AnyObject {
  clusterize?: boolean;
  syncOverlayInit?: boolean;
  viewportMargin?: number | number[];
}

/**
 * TODO: replace `AnyObject` with definitions
 */
export interface ObjectManagerObjectsOptions extends AnyObject {}
export interface ObjectManagerClustersOptions extends AnyObject {}

export interface ObjectManagerProps extends CommonProps {
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

export interface ClustererProps extends CommonProps {
  options?: ClustererOptions;
  defaultOptions?: ClustererOptions;
}

export interface PanoramaOptions extends AnyObject {
  autoFitToViewport?: 'none' | 'ifNull' | 'always';
  controls?: string[];
  direction?: string | number[];
  hotkeysEnabled?: boolean;
  scrollZoomBehavior?: boolean;
  span?: string | number[];
  suppressMapOpenBlock?: boolean;
}

export interface PanoramaProps extends CommonProps {
  coordinates?: number[];
  defaultCoordinates?: number[];
  options?: PanoramaOptions;
  defaultOptions?: PanoramaOptions;
  children?: React.ReactNode;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
  className?: string;
}

export interface WithYMapsProps {
  ymaps: YMapsApi;
}

export function withYMaps<P>(
  component: React.ComponentType<P>,
  waitForApi?: boolean,
  modules?: string[]
): React.ComponentType<P & WithYMapsProps>;

export const YMaps: React.ComponentType<YMapsProps>;
export const Map: React.ComponentType<MapProps>;
export const ObjectManager: React.ComponentType<ObjectManagerProps>;
export const Clusterer: React.ComponentType<ClustererProps>;
export const Panorama: React.ComponentType<PanoramaProps>;

//
// Geo Objects components
// ----------------------------------------------------------------------

export interface GeoObjectProps<G, P = AnyObject, O = AnyObject>
  extends AnyObject {
  geometry?: G;
  defaultGeometry?: G;
  properties?: P;
  defaultProperties?: P;
  options?: O;
  defaultOptions?: O;
}

export interface GeoObjectGeometry extends AnyObject {
  type: 'Point' | 'LineString' | 'Rectangle' | 'Polygon' | 'Circle';
  coordinates: number[] | number[][] | number[][][];
  radius?: number;
}

export type PlacemarkGeometry = number[];
export type PolylineGeometry = number[][];
export type RectangleGeometry = number[][];
export type PolygonGeometry = number[][][];
export type CircleGeometry = (number | number[])[];

export const GeoObject: React.ComponentType<GeoObjectProps<GeoObjectGeometry>>;
export const Placemark: React.ComponentType<GeoObjectProps<PlacemarkGeometry>>;
export const Polyline: React.ComponentType<GeoObjectProps<PolylineGeometry>>;
export const Rectangle: React.ComponentType<GeoObjectProps<RectangleGeometry>>;
export const Polygon: React.ComponentType<GeoObjectProps<PolygonGeometry>>;
export const Circle: React.ComponentType<GeoObjectProps<CircleGeometry>>;

//
// Controls components
// ----------------------------------------------------------------------

/**
 * REVIEW: discuss about detailed props for `data`, `options`, `state`
 */
export interface ControlProps<D = AnyObject, O = AnyObject, S = AnyObject>
  extends CommonProps {
  data?: D;
  defaultData?: D;
  options?: O;
  defaultOptions?: O;
  state?: S;
  defaultState?: S;
}

export type ControlPropsWithoutData<
  D = AnyObject,
  O = AnyObject,
  S = AnyObject
> = Omit<ControlProps<D, O, S>, 'data' | 'defaultData'>;

export type TypeSelectorProps<
  D = AnyObject,
  O = AnyObject,
  S = AnyObject
> = ControlProps<D, O, S> & {
  mapTypes?: MapType[];
  defaultMapTypes?: MapType[];
};

export const Button: React.ComponentType<ControlProps>;
export const FullscreenControl: React.ComponentType<ControlProps>;
export const GeolocationControl: React.ComponentType<ControlProps>;
export const ListBox: React.ComponentType<ControlProps>;
export const ListBoxItem: React.ComponentType<ControlProps>;
export const RouteButton: React.ComponentType<ControlProps>;
export const RouteEditor: React.ComponentType<ControlProps>;
export const RoutePanel: React.ComponentType<ControlPropsWithoutData>;
export const RulerControl: React.ComponentType<ControlProps>;
export const SearchControl: React.ComponentType<ControlProps>;
export const TrafficControl: React.ComponentType<ControlPropsWithoutData>;
export const TypeSelector: React.ComponentType<TypeSelectorProps>;
export const ZoomControl: React.ComponentType<ControlProps>;
