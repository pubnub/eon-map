(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function corslite(url, callback, cors) {
    var sent = false;

    if (typeof window.XMLHttpRequest === 'undefined') {
        return callback(Error('Browser not supported'));
    }

    if (typeof cors === 'undefined') {
        var m = url.match(/^\s*https?:\/\/[^\/]*/);
        cors = m && (m[0] !== location.protocol + '//' + location.domain +
                (location.port ? ':' + location.port : ''));
    }

    var x = new window.XMLHttpRequest();

    function isSuccessful(status) {
        return status >= 200 && status < 300 || status === 304;
    }

    if (cors && !('withCredentials' in x)) {
        // IE8-9
        x = new window.XDomainRequest();

        // Ensure callback is never called synchronously, i.e., before
        // x.send() returns (this has been observed in the wild).
        // See https://github.com/mapbox/mapbox.js/issues/472
        var original = callback;
        callback = function() {
            if (sent) {
                original.apply(this, arguments);
            } else {
                var that = this, args = arguments;
                setTimeout(function() {
                    original.apply(that, args);
                }, 0);
            }
        }
    }

    function loaded() {
        if (
            // XDomainRequest
            x.status === undefined ||
            // modern browsers
            isSuccessful(x.status)) callback.call(x, null, x);
        else callback.call(x, x, null);
    }

    // Both `onreadystatechange` and `onload` can fire. `onreadystatechange`
    // has [been supported for longer](http://stackoverflow.com/a/9181508/229001).
    if ('onload' in x) {
        x.onload = loaded;
    } else {
        x.onreadystatechange = function readystate() {
            if (x.readyState === 4) {
                loaded();
            }
        };
    }

    // Call the callback with the XMLHttpRequest object as an error and prevent
    // it from ever being called again by reassigning it to `noop`
    x.onerror = function error(evt) {
        // XDomainRequest provides no evt parameter
        callback.call(this, evt || true, null);
        callback = function() { };
    };

    // IE9 must have onprogress be set to a unique function.
    x.onprogress = function() { };

    x.ontimeout = function(evt) {
        callback.call(this, evt, null);
        callback = function() { };
    };

    x.onabort = function(evt) {
        callback.call(this, evt, null);
        callback = function() { };
    };

    // GET is the only supported HTTP Verb by XDomainRequest and is the
    // only one supported here.
    x.open('GET', url, true);

    // Send the request. Sending data is not supported.
    x.send(null);
    sent = true;

    return x;
}

if (typeof module !== 'undefined') module.exports = corslite;

},{}],2:[function(require,module,exports){
module.exports={
  "author": "Mapbox",
  "name": "mapbox.js",
  "description": "mapbox javascript api",
  "version": "2.4.0",
  "homepage": "http://mapbox.com/",
  "repository": {
    "type": "git",
    "url": "git://github.com/mapbox/mapbox.js.git"
  },
  "main": "src/index.js",
  "dependencies": {
    "corslite": "0.0.6",
    "isarray": "0.0.1",
    "leaflet": "0.7.7",
    "mustache": "2.2.1",
    "sanitize-caja": "0.1.3"
  },
  "scripts": {
    "test": "eslint --no-eslintrc -c .eslintrc src && mocha-phantomjs test/index.html"
  },
  "license": "BSD-3-Clause",
  "devDependencies": {
    "browserify": "^13.0.0",
    "clean-css": "~2.0.7",
    "eslint": "^0.23.0",
    "expect.js": "0.3.1",
    "happen": "0.1.3",
    "leaflet-fullscreen": "0.0.4",
    "leaflet-hash": "0.2.1",
    "marked": "~0.3.0",
    "minifyify": "^6.1.0",
    "minimist": "0.0.5",
    "mocha": "2.4.5",
    "mocha-phantomjs": "4.0.2",
    "sinon": "1.10.2"
  },
  "optionalDependencies": {},
  "engines": {
    "node": "*"
  }
}

},{}],3:[function(require,module,exports){
'use strict';

module.exports = {
    HTTP_URL: 'http://a.tiles.mapbox.com/v4',
    HTTPS_URL: 'https://a.tiles.mapbox.com/v4',
    FORCE_HTTPS: false,
    REQUIRE_ACCESS_TOKEN: true
};

},{}],4:[function(require,module,exports){
'use strict';

var config = require('./config'),
    version = require('../package.json').version;

module.exports = function(path, accessToken) {
    accessToken = accessToken || L.mapbox.accessToken;

    if (!accessToken && config.REQUIRE_ACCESS_TOKEN) {
        throw new Error('An API access token is required to use Mapbox.js. ' +
            'See https://www.mapbox.com/mapbox.js/api/v' + version + '/api-access-tokens/');
    }

    var url = (document.location.protocol === 'https:' || config.FORCE_HTTPS) ? config.HTTPS_URL : config.HTTP_URL;
    url = url.replace(/\/v4$/, '');
    url += path;

    if (config.REQUIRE_ACCESS_TOKEN) {
        if (accessToken[0] === 's') {
            throw new Error('Use a public access token (pk.*) with Mapbox.js, not a secret access token (sk.*). ' +
                'See https://www.mapbox.com/mapbox.js/api/v' + version + '/api-access-tokens/');
        }

        url += url.indexOf('?') !== -1 ? '&access_token=' : '?access_token=';
        url += accessToken;
    }

    return url;
};

module.exports.tileJSON = function(urlOrMapID, accessToken) {

    if (urlOrMapID.indexOf('mapbox://styles') === 0) {
        throw new Error('Styles created with Mapbox Studio need to be used with ' +
            'L.mapbox.styleLayer, not L.mapbox.tileLayer');
    }

    if (urlOrMapID.indexOf('/') !== -1)
        return urlOrMapID;

    var url = module.exports('/v4/' + urlOrMapID + '.json', accessToken);

    // TileJSON requests need a secure flag appended to their URLs so
    // that the server knows to send SSL-ified resource references.
    if (url.indexOf('https') === 0)
        url += '&secure';

    return url;
};


module.exports.style = function(styleURL, accessToken) {
    if (styleURL.indexOf('mapbox://styles/') === -1) throw new Error('Incorrectly formatted Mapbox style at ' + styleURL);

    var ownerIDStyle = styleURL.split('mapbox://styles/')[1];
    var url = module.exports('/styles/v1/' + ownerIDStyle, accessToken)
        .replace('http://', 'https://');

    return url;
};

},{"../package.json":2,"./config":3}],5:[function(require,module,exports){
'use strict';

function utfDecode(c) {
    if (c >= 93) c--;
    if (c >= 35) c--;
    return c - 32;
}

module.exports = function(data) {
    return function(x, y) {
        if (!data) return;
        var idx = utfDecode(data.grid[y].charCodeAt(x)),
            key = data.keys[idx];
        return data.data[key];
    };
};

},{}],6:[function(require,module,exports){
window.internals = {
    url: require('./format_url'),
    config: require('./config'),
    util: require('./util'),
    grid: require('./grid'),
    request: require('./request')
};

},{"./config":3,"./format_url":4,"./grid":5,"./request":7,"./util":8}],7:[function(require,module,exports){
'use strict';

var corslite = require('corslite'),
    strict = require('./util').strict,
    config = require('./config');

var protocol = /^(https?:)?(?=\/\/(.|api)\.tiles\.mapbox\.com\/)/;

module.exports = function(url, callback) {
    strict(url, 'string');
    strict(callback, 'function');

    url = url.replace(protocol, function(match, protocol) {
        if (!('withCredentials' in new window.XMLHttpRequest())) {
            // XDomainRequest in use; doesn't support cross-protocol requests
            return document.location.protocol;
        } else if (protocol === 'https:' || document.location.protocol === 'https:' || config.FORCE_HTTPS) {
            return 'https:';
        } else {
            return 'http:';
        }
    });

    function onload(err, resp) {
        if (!err && resp) {
            resp = JSON.parse(resp.responseText);
        }
        callback(err, resp);
    }

    return corslite(url, onload);
};

},{"./config":3,"./util":8,"corslite":1}],8:[function(require,module,exports){
'use strict';

function contains(item, list) {
    if (!list || !list.length) return false;
    for (var i = 0; i < list.length; i++) {
        if (list[i] === item) return true;
    }
    return false;
}

module.exports = {
    idUrl: function(_, t) {
        if (_.indexOf('/') === -1) t.loadID(_);
        else t.loadURL(_);
    },
    log: function(_) {
        if (typeof console === 'object' &&
            typeof console.error === 'function') {
            console.error(_);
        }
    },
    strict: function(_, type) {
        if (typeof _ !== type) {
            throw new Error('Invalid argument: ' + type + ' expected');
        }
    },
    strict_instance: function(_, klass, name) {
        if (!(_ instanceof klass)) {
            throw new Error('Invalid argument: ' + name + ' expected');
        }
    },
    strict_oneof: function(_, values) {
        if (!contains(_, values)) {
            throw new Error('Invalid argument: ' + _ + ' given, valid values are ' +
                values.join(', '));
        }
    },
    strip_tags: function(_) {
        return _.replace(/<[^<]+>/g, '');
    },
    lbounds: function(_) {
        // leaflet-compatible bounds, since leaflet does not do geojson
        return new L.LatLngBounds([[_[1], _[0]], [_[3], _[2]]]);
    }
};

},{}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvY29yc2xpdGUvY29yc2xpdGUuanMiLCJwYWNrYWdlLmpzb24iLCJzcmMvY29uZmlnLmpzIiwic3JjL2Zvcm1hdF91cmwuanMiLCJzcmMvZ3JpZC5qcyIsInNyYy9pbnRlcm5hbHMuanMiLCJzcmMvcmVxdWVzdC5qcyIsInNyYy91dGlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJmdW5jdGlvbiBjb3JzbGl0ZSh1cmwsIGNhbGxiYWNrLCBjb3JzKSB7XG4gICAgdmFyIHNlbnQgPSBmYWxzZTtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93LlhNTEh0dHBSZXF1ZXN0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soRXJyb3IoJ0Jyb3dzZXIgbm90IHN1cHBvcnRlZCcpKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvcnMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBtID0gdXJsLm1hdGNoKC9eXFxzKmh0dHBzPzpcXC9cXC9bXlxcL10qLyk7XG4gICAgICAgIGNvcnMgPSBtICYmIChtWzBdICE9PSBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5kb21haW4gK1xuICAgICAgICAgICAgICAgIChsb2NhdGlvbi5wb3J0ID8gJzonICsgbG9jYXRpb24ucG9ydCA6ICcnKSk7XG4gICAgfVxuXG4gICAgdmFyIHggPSBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICBmdW5jdGlvbiBpc1N1Y2Nlc3NmdWwoc3RhdHVzKSB7XG4gICAgICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMCB8fCBzdGF0dXMgPT09IDMwNDtcbiAgICB9XG5cbiAgICBpZiAoY29ycyAmJiAhKCd3aXRoQ3JlZGVudGlhbHMnIGluIHgpKSB7XG4gICAgICAgIC8vIElFOC05XG4gICAgICAgIHggPSBuZXcgd2luZG93LlhEb21haW5SZXF1ZXN0KCk7XG5cbiAgICAgICAgLy8gRW5zdXJlIGNhbGxiYWNrIGlzIG5ldmVyIGNhbGxlZCBzeW5jaHJvbm91c2x5LCBpLmUuLCBiZWZvcmVcbiAgICAgICAgLy8geC5zZW5kKCkgcmV0dXJucyAodGhpcyBoYXMgYmVlbiBvYnNlcnZlZCBpbiB0aGUgd2lsZCkuXG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbWFwYm94L21hcGJveC5qcy9pc3N1ZXMvNDcyXG4gICAgICAgIHZhciBvcmlnaW5hbCA9IGNhbGxiYWNrO1xuICAgICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHNlbnQpIHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWwuYXBwbHkodGhhdCwgYXJncyk7XG4gICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkZWQoKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIC8vIFhEb21haW5SZXF1ZXN0XG4gICAgICAgICAgICB4LnN0YXR1cyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAvLyBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgICAgIGlzU3VjY2Vzc2Z1bCh4LnN0YXR1cykpIGNhbGxiYWNrLmNhbGwoeCwgbnVsbCwgeCk7XG4gICAgICAgIGVsc2UgY2FsbGJhY2suY2FsbCh4LCB4LCBudWxsKTtcbiAgICB9XG5cbiAgICAvLyBCb3RoIGBvbnJlYWR5c3RhdGVjaGFuZ2VgIGFuZCBgb25sb2FkYCBjYW4gZmlyZS4gYG9ucmVhZHlzdGF0ZWNoYW5nZWBcbiAgICAvLyBoYXMgW2JlZW4gc3VwcG9ydGVkIGZvciBsb25nZXJdKGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzkxODE1MDgvMjI5MDAxKS5cbiAgICBpZiAoJ29ubG9hZCcgaW4geCkge1xuICAgICAgICB4Lm9ubG9hZCA9IGxvYWRlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB4Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIHJlYWR5c3RhdGUoKSB7XG4gICAgICAgICAgICBpZiAoeC5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgbG9hZGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQ2FsbCB0aGUgY2FsbGJhY2sgd2l0aCB0aGUgWE1MSHR0cFJlcXVlc3Qgb2JqZWN0IGFzIGFuIGVycm9yIGFuZCBwcmV2ZW50XG4gICAgLy8gaXQgZnJvbSBldmVyIGJlaW5nIGNhbGxlZCBhZ2FpbiBieSByZWFzc2lnbmluZyBpdCB0byBgbm9vcGBcbiAgICB4Lm9uZXJyb3IgPSBmdW5jdGlvbiBlcnJvcihldnQpIHtcbiAgICAgICAgLy8gWERvbWFpblJlcXVlc3QgcHJvdmlkZXMgbm8gZXZ0IHBhcmFtZXRlclxuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIGV2dCB8fCB0cnVlLCBudWxsKTtcbiAgICAgICAgY2FsbGJhY2sgPSBmdW5jdGlvbigpIHsgfTtcbiAgICB9O1xuXG4gICAgLy8gSUU5IG11c3QgaGF2ZSBvbnByb2dyZXNzIGJlIHNldCB0byBhIHVuaXF1ZSBmdW5jdGlvbi5cbiAgICB4Lm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbigpIHsgfTtcblxuICAgIHgub250aW1lb3V0ID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZXZ0LCBudWxsKTtcbiAgICAgICAgY2FsbGJhY2sgPSBmdW5jdGlvbigpIHsgfTtcbiAgICB9O1xuXG4gICAgeC5vbmFib3J0ID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZXZ0LCBudWxsKTtcbiAgICAgICAgY2FsbGJhY2sgPSBmdW5jdGlvbigpIHsgfTtcbiAgICB9O1xuXG4gICAgLy8gR0VUIGlzIHRoZSBvbmx5IHN1cHBvcnRlZCBIVFRQIFZlcmIgYnkgWERvbWFpblJlcXVlc3QgYW5kIGlzIHRoZVxuICAgIC8vIG9ubHkgb25lIHN1cHBvcnRlZCBoZXJlLlxuICAgIHgub3BlbignR0VUJywgdXJsLCB0cnVlKTtcblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3QuIFNlbmRpbmcgZGF0YSBpcyBub3Qgc3VwcG9ydGVkLlxuICAgIHguc2VuZChudWxsKTtcbiAgICBzZW50ID0gdHJ1ZTtcblxuICAgIHJldHVybiB4O1xufVxuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIG1vZHVsZS5leHBvcnRzID0gY29yc2xpdGU7XG4iLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwiYXV0aG9yXCI6IFwiTWFwYm94XCIsXG4gIFwibmFtZVwiOiBcIm1hcGJveC5qc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwibWFwYm94IGphdmFzY3JpcHQgYXBpXCIsXG4gIFwidmVyc2lvblwiOiBcIjIuNC4wXCIsXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwOi8vbWFwYm94LmNvbS9cIixcbiAgXCJyZXBvc2l0b3J5XCI6IHtcbiAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICBcInVybFwiOiBcImdpdDovL2dpdGh1Yi5jb20vbWFwYm94L21hcGJveC5qcy5naXRcIlxuICB9LFxuICBcIm1haW5cIjogXCJzcmMvaW5kZXguanNcIixcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiY29yc2xpdGVcIjogXCIwLjAuNlwiLFxuICAgIFwiaXNhcnJheVwiOiBcIjAuMC4xXCIsXG4gICAgXCJsZWFmbGV0XCI6IFwiMC43LjdcIixcbiAgICBcIm11c3RhY2hlXCI6IFwiMi4yLjFcIixcbiAgICBcInNhbml0aXplLWNhamFcIjogXCIwLjEuM1wiXG4gIH0sXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJ0ZXN0XCI6IFwiZXNsaW50IC0tbm8tZXNsaW50cmMgLWMgLmVzbGludHJjIHNyYyAmJiBtb2NoYS1waGFudG9tanMgdGVzdC9pbmRleC5odG1sXCJcbiAgfSxcbiAgXCJsaWNlbnNlXCI6IFwiQlNELTMtQ2xhdXNlXCIsXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImJyb3dzZXJpZnlcIjogXCJeMTMuMC4wXCIsXG4gICAgXCJjbGVhbi1jc3NcIjogXCJ+Mi4wLjdcIixcbiAgICBcImVzbGludFwiOiBcIl4wLjIzLjBcIixcbiAgICBcImV4cGVjdC5qc1wiOiBcIjAuMy4xXCIsXG4gICAgXCJoYXBwZW5cIjogXCIwLjEuM1wiLFxuICAgIFwibGVhZmxldC1mdWxsc2NyZWVuXCI6IFwiMC4wLjRcIixcbiAgICBcImxlYWZsZXQtaGFzaFwiOiBcIjAuMi4xXCIsXG4gICAgXCJtYXJrZWRcIjogXCJ+MC4zLjBcIixcbiAgICBcIm1pbmlmeWlmeVwiOiBcIl42LjEuMFwiLFxuICAgIFwibWluaW1pc3RcIjogXCIwLjAuNVwiLFxuICAgIFwibW9jaGFcIjogXCIyLjQuNVwiLFxuICAgIFwibW9jaGEtcGhhbnRvbWpzXCI6IFwiNC4wLjJcIixcbiAgICBcInNpbm9uXCI6IFwiMS4xMC4yXCJcbiAgfSxcbiAgXCJvcHRpb25hbERlcGVuZGVuY2llc1wiOiB7fSxcbiAgXCJlbmdpbmVzXCI6IHtcbiAgICBcIm5vZGVcIjogXCIqXCJcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBIVFRQX1VSTDogJ2h0dHA6Ly9hLnRpbGVzLm1hcGJveC5jb20vdjQnLFxuICAgIEhUVFBTX1VSTDogJ2h0dHBzOi8vYS50aWxlcy5tYXBib3guY29tL3Y0JyxcbiAgICBGT1JDRV9IVFRQUzogZmFsc2UsXG4gICAgUkVRVUlSRV9BQ0NFU1NfVE9LRU46IHRydWVcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZycpLFxuICAgIHZlcnNpb24gPSByZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKS52ZXJzaW9uO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHBhdGgsIGFjY2Vzc1Rva2VuKSB7XG4gICAgYWNjZXNzVG9rZW4gPSBhY2Nlc3NUb2tlbiB8fCBMLm1hcGJveC5hY2Nlc3NUb2tlbjtcblxuICAgIGlmICghYWNjZXNzVG9rZW4gJiYgY29uZmlnLlJFUVVJUkVfQUNDRVNTX1RPS0VOKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQW4gQVBJIGFjY2VzcyB0b2tlbiBpcyByZXF1aXJlZCB0byB1c2UgTWFwYm94LmpzLiAnICtcbiAgICAgICAgICAgICdTZWUgaHR0cHM6Ly93d3cubWFwYm94LmNvbS9tYXBib3guanMvYXBpL3YnICsgdmVyc2lvbiArICcvYXBpLWFjY2Vzcy10b2tlbnMvJyk7XG4gICAgfVxuXG4gICAgdmFyIHVybCA9IChkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicgfHwgY29uZmlnLkZPUkNFX0hUVFBTKSA/IGNvbmZpZy5IVFRQU19VUkwgOiBjb25maWcuSFRUUF9VUkw7XG4gICAgdXJsID0gdXJsLnJlcGxhY2UoL1xcL3Y0JC8sICcnKTtcbiAgICB1cmwgKz0gcGF0aDtcblxuICAgIGlmIChjb25maWcuUkVRVUlSRV9BQ0NFU1NfVE9LRU4pIHtcbiAgICAgICAgaWYgKGFjY2Vzc1Rva2VuWzBdID09PSAncycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVXNlIGEgcHVibGljIGFjY2VzcyB0b2tlbiAocGsuKikgd2l0aCBNYXBib3guanMsIG5vdCBhIHNlY3JldCBhY2Nlc3MgdG9rZW4gKHNrLiopLiAnICtcbiAgICAgICAgICAgICAgICAnU2VlIGh0dHBzOi8vd3d3Lm1hcGJveC5jb20vbWFwYm94LmpzL2FwaS92JyArIHZlcnNpb24gKyAnL2FwaS1hY2Nlc3MtdG9rZW5zLycpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXJsICs9IHVybC5pbmRleE9mKCc/JykgIT09IC0xID8gJyZhY2Nlc3NfdG9rZW49JyA6ICc/YWNjZXNzX3Rva2VuPSc7XG4gICAgICAgIHVybCArPSBhY2Nlc3NUb2tlbjtcbiAgICB9XG5cbiAgICByZXR1cm4gdXJsO1xufTtcblxubW9kdWxlLmV4cG9ydHMudGlsZUpTT04gPSBmdW5jdGlvbih1cmxPck1hcElELCBhY2Nlc3NUb2tlbikge1xuXG4gICAgaWYgKHVybE9yTWFwSUQuaW5kZXhPZignbWFwYm94Oi8vc3R5bGVzJykgPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdHlsZXMgY3JlYXRlZCB3aXRoIE1hcGJveCBTdHVkaW8gbmVlZCB0byBiZSB1c2VkIHdpdGggJyArXG4gICAgICAgICAgICAnTC5tYXBib3guc3R5bGVMYXllciwgbm90IEwubWFwYm94LnRpbGVMYXllcicpO1xuICAgIH1cblxuICAgIGlmICh1cmxPck1hcElELmluZGV4T2YoJy8nKSAhPT0gLTEpXG4gICAgICAgIHJldHVybiB1cmxPck1hcElEO1xuXG4gICAgdmFyIHVybCA9IG1vZHVsZS5leHBvcnRzKCcvdjQvJyArIHVybE9yTWFwSUQgKyAnLmpzb24nLCBhY2Nlc3NUb2tlbik7XG5cbiAgICAvLyBUaWxlSlNPTiByZXF1ZXN0cyBuZWVkIGEgc2VjdXJlIGZsYWcgYXBwZW5kZWQgdG8gdGhlaXIgVVJMcyBzb1xuICAgIC8vIHRoYXQgdGhlIHNlcnZlciBrbm93cyB0byBzZW5kIFNTTC1pZmllZCByZXNvdXJjZSByZWZlcmVuY2VzLlxuICAgIGlmICh1cmwuaW5kZXhPZignaHR0cHMnKSA9PT0gMClcbiAgICAgICAgdXJsICs9ICcmc2VjdXJlJztcblxuICAgIHJldHVybiB1cmw7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzLnN0eWxlID0gZnVuY3Rpb24oc3R5bGVVUkwsIGFjY2Vzc1Rva2VuKSB7XG4gICAgaWYgKHN0eWxlVVJMLmluZGV4T2YoJ21hcGJveDovL3N0eWxlcy8nKSA9PT0gLTEpIHRocm93IG5ldyBFcnJvcignSW5jb3JyZWN0bHkgZm9ybWF0dGVkIE1hcGJveCBzdHlsZSBhdCAnICsgc3R5bGVVUkwpO1xuXG4gICAgdmFyIG93bmVySURTdHlsZSA9IHN0eWxlVVJMLnNwbGl0KCdtYXBib3g6Ly9zdHlsZXMvJylbMV07XG4gICAgdmFyIHVybCA9IG1vZHVsZS5leHBvcnRzKCcvc3R5bGVzL3YxLycgKyBvd25lcklEU3R5bGUsIGFjY2Vzc1Rva2VuKVxuICAgICAgICAucmVwbGFjZSgnaHR0cDovLycsICdodHRwczovLycpO1xuXG4gICAgcmV0dXJuIHVybDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHV0ZkRlY29kZShjKSB7XG4gICAgaWYgKGMgPj0gOTMpIGMtLTtcbiAgICBpZiAoYyA+PSAzNSkgYy0tO1xuICAgIHJldHVybiBjIC0gMzI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHJldHVybiBmdW5jdGlvbih4LCB5KSB7XG4gICAgICAgIGlmICghZGF0YSkgcmV0dXJuO1xuICAgICAgICB2YXIgaWR4ID0gdXRmRGVjb2RlKGRhdGEuZ3JpZFt5XS5jaGFyQ29kZUF0KHgpKSxcbiAgICAgICAgICAgIGtleSA9IGRhdGEua2V5c1tpZHhdO1xuICAgICAgICByZXR1cm4gZGF0YS5kYXRhW2tleV07XG4gICAgfTtcbn07XG4iLCJ3aW5kb3cuaW50ZXJuYWxzID0ge1xuICAgIHVybDogcmVxdWlyZSgnLi9mb3JtYXRfdXJsJyksXG4gICAgY29uZmlnOiByZXF1aXJlKCcuL2NvbmZpZycpLFxuICAgIHV0aWw6IHJlcXVpcmUoJy4vdXRpbCcpLFxuICAgIGdyaWQ6IHJlcXVpcmUoJy4vZ3JpZCcpLFxuICAgIHJlcXVlc3Q6IHJlcXVpcmUoJy4vcmVxdWVzdCcpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29yc2xpdGUgPSByZXF1aXJlKCdjb3JzbGl0ZScpLFxuICAgIHN0cmljdCA9IHJlcXVpcmUoJy4vdXRpbCcpLnN0cmljdCxcbiAgICBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZycpO1xuXG52YXIgcHJvdG9jb2wgPSAvXihodHRwcz86KT8oPz1cXC9cXC8oLnxhcGkpXFwudGlsZXNcXC5tYXBib3hcXC5jb21cXC8pLztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1cmwsIGNhbGxiYWNrKSB7XG4gICAgc3RyaWN0KHVybCwgJ3N0cmluZycpO1xuICAgIHN0cmljdChjYWxsYmFjaywgJ2Z1bmN0aW9uJyk7XG5cbiAgICB1cmwgPSB1cmwucmVwbGFjZShwcm90b2NvbCwgZnVuY3Rpb24obWF0Y2gsIHByb3RvY29sKSB7XG4gICAgICAgIGlmICghKCd3aXRoQ3JlZGVudGlhbHMnIGluIG5ldyB3aW5kb3cuWE1MSHR0cFJlcXVlc3QoKSkpIHtcbiAgICAgICAgICAgIC8vIFhEb21haW5SZXF1ZXN0IGluIHVzZTsgZG9lc24ndCBzdXBwb3J0IGNyb3NzLXByb3RvY29sIHJlcXVlc3RzXG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2w7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvdG9jb2wgPT09ICdodHRwczonIHx8IGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6JyB8fCBjb25maWcuRk9SQ0VfSFRUUFMpIHtcbiAgICAgICAgICAgIHJldHVybiAnaHR0cHM6JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnaHR0cDonO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBvbmxvYWQoZXJyLCByZXNwKSB7XG4gICAgICAgIGlmICghZXJyICYmIHJlc3ApIHtcbiAgICAgICAgICAgIHJlc3AgPSBKU09OLnBhcnNlKHJlc3AucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBjYWxsYmFjayhlcnIsIHJlc3ApO1xuICAgIH1cblxuICAgIHJldHVybiBjb3JzbGl0ZSh1cmwsIG9ubG9hZCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBjb250YWlucyhpdGVtLCBsaXN0KSB7XG4gICAgaWYgKCFsaXN0IHx8ICFsaXN0Lmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobGlzdFtpXSA9PT0gaXRlbSkgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgaWRVcmw6IGZ1bmN0aW9uKF8sIHQpIHtcbiAgICAgICAgaWYgKF8uaW5kZXhPZignLycpID09PSAtMSkgdC5sb2FkSUQoXyk7XG4gICAgICAgIGVsc2UgdC5sb2FkVVJMKF8pO1xuICAgIH0sXG4gICAgbG9nOiBmdW5jdGlvbihfKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY29uc29sZSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICAgIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKF8pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzdHJpY3Q6IGZ1bmN0aW9uKF8sIHR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBfICE9PSB0eXBlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJndW1lbnQ6ICcgKyB0eXBlICsgJyBleHBlY3RlZCcpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzdHJpY3RfaW5zdGFuY2U6IGZ1bmN0aW9uKF8sIGtsYXNzLCBuYW1lKSB7XG4gICAgICAgIGlmICghKF8gaW5zdGFuY2VvZiBrbGFzcykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhcmd1bWVudDogJyArIG5hbWUgKyAnIGV4cGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHN0cmljdF9vbmVvZjogZnVuY3Rpb24oXywgdmFsdWVzKSB7XG4gICAgICAgIGlmICghY29udGFpbnMoXywgdmFsdWVzKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFyZ3VtZW50OiAnICsgXyArICcgZ2l2ZW4sIHZhbGlkIHZhbHVlcyBhcmUgJyArXG4gICAgICAgICAgICAgICAgdmFsdWVzLmpvaW4oJywgJykpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzdHJpcF90YWdzOiBmdW5jdGlvbihfKSB7XG4gICAgICAgIHJldHVybiBfLnJlcGxhY2UoLzxbXjxdKz4vZywgJycpO1xuICAgIH0sXG4gICAgbGJvdW5kczogZnVuY3Rpb24oXykge1xuICAgICAgICAvLyBsZWFmbGV0LWNvbXBhdGlibGUgYm91bmRzLCBzaW5jZSBsZWFmbGV0IGRvZXMgbm90IGRvIGdlb2pzb25cbiAgICAgICAgcmV0dXJuIG5ldyBMLkxhdExuZ0JvdW5kcyhbW19bMV0sIF9bMF1dLCBbX1szXSwgX1syXV1dKTtcbiAgICB9XG59O1xuIl19
