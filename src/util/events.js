export const events = {
  onBallonClose: 'balloonclose',
  onBalloonOpen: 'balloonopen',
  onBeforeDrag: 'beforedrag',
  onBeforeDragStart: 'beforedragstart',
  onClick: 'click',
  onContextMenu: 'contextmenu',
  onDblClick: 'dblclick',
  onDrag: 'drag',
  onDragEnd: 'dragend',
  onDragStart: 'dragstart',
  onEditorStateChange: 'editorstatechange',
  onGeometryChange: 'geometrychange',
  onHintClose: 'hintclose',
  onHintOpen: 'hintopen',
  onMapChange: 'mapchange',
  onMouseDown: 'mousedown',
  onMouseEnter: 'mouseenter',
  onMouseLeave: 'mouseleave',
  onMouseMove: 'mousemove',
  onMouseUp: 'mouseup',
  onMultiTouchEnd: 'multitouchend',
  onMultiTouchMove: 'multitouchmove',
  onMultiTouchStart: 'multitouchstart',
  onOptionsChange: 'optionschange',
  onOverlayChange: 'overlaychange',
  onParentChange: 'parentchange',
  onPropertiesChange: 'propertieschange',
  onWheel: 'wheel',
  onBalloonClose: 'balloonclose',
  onActionBegin: 'actionbegin',
  onActionBreak: 'actionbreak',
  onActionEnd: 'actionend',
  onActionTick: 'actiontick',
  onActionTickComplete: 'actiontickcomplete',
  onBoundsChange: 'boundschange',
  onDestroy: 'destroy',
  onMarginChange: 'marginchange',
  onSizeChange: 'sizechange',
  onTypeChange: 'typechange',
  onDeselect: 'deselect',
  onDisable: 'disable',
  onEnable: 'enable',
  onPress: 'press',
  onSelect: 'select',
  onFullscreenEnter: 'fullscreenenter',
  onFullscreenExit: 'fullscreenexit',
  onLocationChange: 'locationchange',
  onClear: 'clear',
  onError: 'error',
  onLoad: 'load',
  onResultSelect: 'resultselect',
  onResultShow: 'resultshow',
  onSubmit: 'submit',
  onCollapse: 'collapse',
  onExpand: 'expand',
  onHideTraffic: 'hidetraffic',
  onProviderKeyChange: 'providerkeychange',
  onShowTraffic: 'showtraffic',
  onAdd: 'add',
  onRemove: 'remove',
};

export function separateEvents(props) {
  const eventsRegExp = /^on[A-Z]/;
  const events = {};
  const rest = {};

  Object.keys(props).forEach(key => {
    if (eventsRegExp.test(key)) {
      events[key] = props[key];
    } else {
      rest[key] = props[key];
    }
  });

  return { events, ...rest };
}

export function addEvent(event, key, instance) {
  if (events[key] && typeof event === 'function') {
    instance.events.add(events[key], event);
  }
}

export function removeEvent(event, key, instance) {
  if (events[key] && typeof event === 'function') {
    instance.events.remove(events[key], event);
  }
}
