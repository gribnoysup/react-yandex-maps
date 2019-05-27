---
name: Frequently Asked Questions
route: /faq
---

# Frequently Asked Questions

## Is X Supported?

[Here][] you can find list of all supported objects from Yandex.Maps API. We
always welcome PRs with the missing objects from Yandex.Maps API.

[here]: /#what-is-supported

## Can I Render React DOM Components Into Yandex.Maps Balloons or Placemark Icons?

No at the moment. This behavior is not supported yet.

## How To Style Map Container? Why Width and Height Props?

By default you can only control Map container with width and height props. This
is done so that `react-yandex-maps` library can keep track of size changes and
call special Map method to fit the Map UI into available view.

You can opt-out of this behavior by providing your own `style` or `className`
prop to the Map component. Your props will be passed to the Map container node
and the library will ignore the width and height props.

## How To Get Access to Yandex.Maps API Instance?

There are two ways to achieve this:

1. Use `onLoad` callback prop on any map component from this library, when
   Yandex.Maps API will finish loading, this callback will be called with API
   instance as the first argument.

2. Use [`withYMaps` HOC][withymaps] and create you rown custom component with
   full access to Yandex.Maps API as a prop.

[withymaps]: /provider-consumer/with-ymaps-hoc

## How To Get Object Instance?

To get instance of any Yandex.Maps object that rendered by this library, use can
use `instanceRef` prop. Keep in mind that this will behave as React [callback
refs][]: it will call the ref callback with the Yandex.Maps API object instance
when the component mounts, and call it with `null` when it unmounts.

[callback refs]: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
