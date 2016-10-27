export const EVENTS = {
  GeoObject: {
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
  },
  ObjectManager: {
    onClick: 'click',
    onContextMenu: 'contextmenu',
    onDblClick: 'dblclick',
    onGeometryChange: 'geometrychange',
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
  },
  Clusterer: {
    onBalloonClose: 'balloonclose',
    onBalloonOpen: 'balloonopen',
    onHintClose: 'hintclose',
    onHintOpen: 'hintopen',
    onMapChange: 'mapchange',
    onOptionsChange: 'optionschange',
    onParentChange: 'parentchange',
  },
  Map: {
    onActionBegin: 'actionbegin',
    onActionBreak: 'actionbreak',
    onActionEnd: 'actionend',
    onActionTick: 'actiontick',
    onActionTickComplete: 'actiontickcomplete',
    onBalloonClose: 'balloonclose',
    onBalloonOpen: 'balloonopen',
    onBoundsChange: 'boundschange',
    onClick: 'click',
    onContextMenu: 'contextmenu',
    onDblClick: 'dblclick',
    onDestroy: 'destroy',
    onHintClose: 'hintclose',
    onHintOpen: 'hintopen',
    onMarginChange: 'marginchange',
    onMouseDown: 'mousedown',
    onMouseEnter: 'mouseenter',
    onMouseLeave: 'mouseleave',
    onMouseMove: 'mousemove',
    onMouseUp: 'mouseup',
    onMultiTouchEnd: 'multitouchend',
    onMultiTouchMove: 'multitouchmove',
    onMultiTouchStart: 'multitouchstart',
    onOptionsChange: 'optionschange',
    onSizeChange: 'sizechange',
    onTypeChange: 'typechange',
    onWheel: 'wheel'
  },
}

export function separateEvents(props) {
  const eventsRegExp = /^on[A-Z]/
  const events = {}
  const rest = {}

  Object.keys(props).forEach((key) => {
    if (eventsRegExp.test(key)) {
      events[key] = props[key]
    } else {
      rest[key] = props[key]
    }
  })

  return {events, ...rest}
}
