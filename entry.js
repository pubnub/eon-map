window.PubNub = require('pubnub');
window.GoogleMapsLoader = require('google-maps');
window.L = require('leaflet');
require('./node_modules/mapbox.js/src/mapbox.js')
require('./node_modules/mapbox.js/theme/style.css');
require('leaflet.gridlayer.googlemutant');
module.exports = require('./src/pubnub-map.js')
