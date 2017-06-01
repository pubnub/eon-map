# Leaflet.GridLayer.GoogleMutant

A [LeafletJS](http://www.leafletjs.com) plugin to use Google maps basemaps.

## Demo

[http://ivansanchez.gitlab.io/Leaflet.GridLayer.GoogleMutant/demo.html](http://ivansanchez.gitlab.io/Leaflet.GridLayer.GoogleMutant/demo.html)

## Compatibility

* This plugin doesn't work on IE10 or lower, as [that browser doesn't implement DOM mutation observers](http://caniuse.com/#search=mutation). Chrome, Firefox, Safari, IE11 and Edge are fine.

* IE11 and [browsers that don't support `Promise`s](http://caniuse.com/#search=promise) need a polyfill in order to work. See the "Known caveats" section.

* The `maxNativeZoom` functionality introduced in v0.5.0 (thanks, @luiscamacho!) requires Leaflet >1.0.3. At the time of this writing, this means "using the `master` branch of Leaflet".

## Usage

Include the GMaps JS API in your HTML, plus Leaflet:

```
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY" async defer></script>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.0.3/dist/leaflet.js"></script>
```

Include the GoogleMutant javascript file:

```
<script src='https://unpkg.com/leaflet.gridlayer.googlemutant@latest/Leaflet.GoogleMutant.js'></script>
```

Then, you can create an instance of `L.GridLayer.GoogleMutant` on your JS code:

```
var roads = L.gridLayer.googleMutant({
	type: 'roadmap'	// valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
}).addTo(map);
```

It's also possible to use [custom styling](https://developers.google.com/maps/documentation/javascript/styling)
by passing a value to the `styles` option, e.g.:

```
var styled = L.gridLayer.googleMutant({
	type: 'roadmap',
	styles: [
		{elementType: 'labels', stylers: [{visibility: 'off'}]},
		{featureType: 'water', stylers: [{color: '#444444'}]}
	]
}).addTo(map);
```

## Installing a local copy

If you don't want to rely on a CDN to load GoogleMutant, you can:

* Fetch it with [NPM](https://www.npmjs.com/) by running `npm install --save leaflet.gridlayer.googlemutant`.
* Fetch it with [Yarn](https://yarnpkg.com/) by running `yarn add leaflet.gridlayer.googlemutant`.
* We discourage using [Bower](https://bower.io/) but, if you must, `bower install https://gitlab.com/IvanSanchez/Leaflet.GridLayer.GoogleMutant.git`.

You can also download a static copy from the CDN, or clone this git repo.

## Known caveats

* `hybrid` mode prunes tiles before needed for no apparent reason, so the map flickers when there is a zoom change.

* If you are targeting IE11, then include the following **before** the `script` element that references
the GoogleMutant javascript file:

```
<script src="https://unpkg.com/es6-promise@4.0.5/dist/es6-promise.min.js"></script>
<script>ES6Promise.polyfill();</script>
```

This will polyfill in Javascript Promises for IE.

* GoogleMutant is meant to provide a reliable (and ToC-compliant) way of loading Google Map's tiles into Leaflet, nothing more.

## Motivation

Before GoogleMutant, it was already possible to display Google Maps in Leaflet, but unfortunately the state of the art was far from perfect:

* [Shramov's Leaflet plugin implementation](https://github.com/shramov/leaflet-plugins) (as well as an old, not recommended [OpenLayers technique](http://openlayers.org/en/v3.0.0/examples/google-map.html)) suffer from a [big drawback](https://github.com/shramov/leaflet-plugins/issues/111): the basemap and whatever overlays are on top are *off sync*. This is very noticeable when dragging or zooming.
* [MapGear's implementation with OpenLayers](https://github.com/mapgears/ol3-google-maps) uses a different technique (decorate OL3 with GMaps methods), but has a different set of [limitations](https://github.com/mapgears/ol3-google-maps/blob/master/LIMITATIONS.md).
* [Avin Mathew's implementation](https://avinmathew.com/leaflet-and-google-maps/) uses a clever timer-based technique, but it requires jQuery and still feels jittery due to the timers.

Before, an instance of the Google Maps JS API was displayed behind the Leaflet container, and synchronized as best as it could be done.

Now, in order to provide the best Leaflet experience, GoogleMutant uses both [DOM mutation observers](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) and `L.GridLayer` from Leaflet 1.0.0. The basemap tiles are still requested *through* the Google maps JavaScript API, but they switch places to use Leaflet drag and zoom.


## Legalese

----------------------------------------------------------------------------

"THE BEER-WARE LICENSE":
<ivan@sanchezortega.es> wrote this file. As long as you retain this notice you
can do whatever you want with this stuff. If we meet some day, and you think
this stuff is worth it, you can buy me a beer in return.

----------------------------------------------------------------------------

