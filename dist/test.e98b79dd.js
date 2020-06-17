// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/apple-scroller/index.js":[function(require,module,exports) {
class appleScroller {

  constructor (wrapper, imgs, scrollHeight) {

    this.wrapper = wrapper
    this.imgs = imgs

    // height of scroll area. don't use different units between these
    this.scrollHeight = scrollHeight

    this.index = 0
    this.frameLength = 0
    this.img = new Image()
    this.html = document.documentElement
    this.preloadImages()
    this.initContainer()
    this.initCanvas()

    this.img.src = this.getFrame(1)
    this.img.onload = () => {this.fillImage(this.img)}
    this.addScrollListener()
  }

  getFrame (index) {
    return this.imgs[index.toString()]
  }
  preloadImages () {
    Object.keys(this.imgs).forEach((key, ind) => {
      const img = new Image
      img.src = this.getFrame(ind)
      this.frameLength += 1
    })
  }

  initContainer () {
    this.wrapper.innerHTML = ''
    this.container = document.createElement('div')
    this.wrapper.appendChild(this.container)
    this.container.classList.add('apple-scroller-container')
    this.wrapper.style.height = this.scrollHeight
    this.container.style.height = this.scrollHeight
  }
  initCanvas () {
    const canvas = document.createElement('canvas')
    this.canvas = canvas
    this.container.appendChild(canvas)
    this.canvas.classList.add('apple-scroller-canvas')
    this.context = canvas.getContext('2d')

    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  }

  fillImage (img) {
    let scale = Math.max(this.canvas.width/img.width, this.canvas.height/img.height)
    this.context.drawImage(img, 0, 0, img.width*scale, img.height*scale)
  }
  update (idx) {
    this.img.src = this.getFrame(idx)
    this.fillImage(this.img)
  }

  addScrollListener () {
    window.addEventListener('scroll', () => {
      const scrollTop = Math.max(this.html.scrollTop - this.wrapper.offsetTop, 0)
      const maxScrollTop = this.container.scrollHeight - window.innerHeight
      const scrollFraction = Math.min(scrollTop / maxScrollTop, 1)
      this.index = Math.min(
        this.frameLength - 1,
        Math.ceil(scrollFraction * this.frameLength)
      )
      requestAnimationFrame(() => this.update(this.index + 1))
    })
  }

  redraw (self) {
    self.initContainer()
    self.initCanvas()
    self.addScrollListener()
    this.img.src = this.getFrame(this.index)
    this.img.onload = () => {this.fillImage(this.img)}
  }
}

module.exports = appleScroller
},{}],"node_modules/parcel/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel/src/builtins/bundle-url.js"}],"node_modules/apple-scroller/style.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"render/1.png":[function(require,module,exports) {
module.exports = "/1.d78dd651.png";
},{}],"render/10.png":[function(require,module,exports) {
module.exports = "/10.7e4717e8.png";
},{}],"render/11.png":[function(require,module,exports) {
module.exports = "/11.62e74a8b.png";
},{}],"render/12.png":[function(require,module,exports) {
module.exports = "/12.6fa97447.png";
},{}],"render/14.png":[function(require,module,exports) {
module.exports = "/14.5fe89dad.png";
},{}],"render/13.png":[function(require,module,exports) {
module.exports = "/13.e9402973.png";
},{}],"render/15.png":[function(require,module,exports) {
module.exports = "/15.4aba5cfe.png";
},{}],"render/16.png":[function(require,module,exports) {
module.exports = "/16.f167a8a7.png";
},{}],"render/18.png":[function(require,module,exports) {
module.exports = "/18.67c3f9c6.png";
},{}],"render/17.png":[function(require,module,exports) {
module.exports = "/17.787ea844.png";
},{}],"render/19.png":[function(require,module,exports) {
module.exports = "/19.434638a5.png";
},{}],"render/2.png":[function(require,module,exports) {
module.exports = "/2.25d422a4.png";
},{}],"render/20.png":[function(require,module,exports) {
module.exports = "/20.106f6544.png";
},{}],"render/21.png":[function(require,module,exports) {
module.exports = "/21.93d5653c.png";
},{}],"render/23.png":[function(require,module,exports) {
module.exports = "/23.0bb45334.png";
},{}],"render/22.png":[function(require,module,exports) {
module.exports = "/22.fa94f1b8.png";
},{}],"render/24.png":[function(require,module,exports) {
module.exports = "/24.0d1b6ad8.png";
},{}],"render/25.png":[function(require,module,exports) {
module.exports = "/25.b2a7b8cf.png";
},{}],"render/26.png":[function(require,module,exports) {
module.exports = "/26.e86807d8.png";
},{}],"render/27.png":[function(require,module,exports) {
module.exports = "/27.f471fbed.png";
},{}],"render/29.png":[function(require,module,exports) {
module.exports = "/29.2dd3bf5e.png";
},{}],"render/28.png":[function(require,module,exports) {
module.exports = "/28.8199e907.png";
},{}],"render/3.png":[function(require,module,exports) {
module.exports = "/3.4d65c7e1.png";
},{}],"render/30.png":[function(require,module,exports) {
module.exports = "/30.ccdfa8e2.png";
},{}],"render/32.png":[function(require,module,exports) {
module.exports = "/32.bee59d92.png";
},{}],"render/31.png":[function(require,module,exports) {
module.exports = "/31.405b7fb5.png";
},{}],"render/33.png":[function(require,module,exports) {
module.exports = "/33.c092b3e1.png";
},{}],"render/34.png":[function(require,module,exports) {
module.exports = "/34.b4d1c097.png";
},{}],"render/36.png":[function(require,module,exports) {
module.exports = "/36.de10bfff.png";
},{}],"render/35.png":[function(require,module,exports) {
module.exports = "/35.6552cee2.png";
},{}],"render/37.png":[function(require,module,exports) {
module.exports = "/37.86dd9c7e.png";
},{}],"render/38.png":[function(require,module,exports) {
module.exports = "/38.7313b074.png";
},{}],"render/4.png":[function(require,module,exports) {
module.exports = "/4.72a89031.png";
},{}],"render/39.png":[function(require,module,exports) {
module.exports = "/39.56c536f8.png";
},{}],"render/40.png":[function(require,module,exports) {
module.exports = "/40.945d40dd.png";
},{}],"render/41.png":[function(require,module,exports) {
module.exports = "/41.a915a08a.png";
},{}],"render/43.png":[function(require,module,exports) {
module.exports = "/43.dbfbb122.png";
},{}],"render/42.png":[function(require,module,exports) {
module.exports = "/42.964e5038.png";
},{}],"render/44.png":[function(require,module,exports) {
module.exports = "/44.0048a701.png";
},{}],"render/45.png":[function(require,module,exports) {
module.exports = "/45.28cc67a5.png";
},{}],"render/47.png":[function(require,module,exports) {
module.exports = "/47.7e4da075.png";
},{}],"render/46.png":[function(require,module,exports) {
module.exports = "/46.de4c2282.png";
},{}],"render/48.png":[function(require,module,exports) {
module.exports = "/48.9e9c8cb9.png";
},{}],"render/49.png":[function(require,module,exports) {
module.exports = "/49.7621111f.png";
},{}],"render/5.png":[function(require,module,exports) {
module.exports = "/5.4540cd58.png";
},{}],"render/50.png":[function(require,module,exports) {
module.exports = "/50.94cc15a1.png";
},{}],"render/52.png":[function(require,module,exports) {
module.exports = "/52.a8cc9711.png";
},{}],"render/51.png":[function(require,module,exports) {
module.exports = "/51.58e398d4.png";
},{}],"render/54.png":[function(require,module,exports) {
module.exports = "/54.37c1a845.png";
},{}],"render/53.png":[function(require,module,exports) {
module.exports = "/53.5e8a8750.png";
},{}],"render/55.png":[function(require,module,exports) {
module.exports = "/55.50518697.png";
},{}],"render/56.png":[function(require,module,exports) {
module.exports = "/56.34670894.png";
},{}],"render/57.png":[function(require,module,exports) {
module.exports = "/57.569eb297.png";
},{}],"render/58.png":[function(require,module,exports) {
module.exports = "/58.1fc0dffb.png";
},{}],"render/59.png":[function(require,module,exports) {
module.exports = "/59.92432c6c.png";
},{}],"render/6.png":[function(require,module,exports) {
module.exports = "/6.243a634e.png";
},{}],"render/60.png":[function(require,module,exports) {
module.exports = "/60.1e2ec505.png";
},{}],"render/61.png":[function(require,module,exports) {
module.exports = "/61.8e331e08.png";
},{}],"render/7.png":[function(require,module,exports) {
module.exports = "/7.320a3079.png";
},{}],"render/8.png":[function(require,module,exports) {
module.exports = "/8.9f88adde.png";
},{}],"render/9.png":[function(require,module,exports) {
module.exports = "/9.981c4d3c.png";
},{}],"render/*.png":[function(require,module,exports) {
module.exports = {
  "1": require("./1.png"),
  "2": require("./2.png"),
  "3": require("./3.png"),
  "4": require("./4.png"),
  "5": require("./5.png"),
  "6": require("./6.png"),
  "7": require("./7.png"),
  "8": require("./8.png"),
  "9": require("./9.png"),
  "10": require("./10.png"),
  "11": require("./11.png"),
  "12": require("./12.png"),
  "13": require("./13.png"),
  "14": require("./14.png"),
  "15": require("./15.png"),
  "16": require("./16.png"),
  "17": require("./17.png"),
  "18": require("./18.png"),
  "19": require("./19.png"),
  "20": require("./20.png"),
  "21": require("./21.png"),
  "22": require("./22.png"),
  "23": require("./23.png"),
  "24": require("./24.png"),
  "25": require("./25.png"),
  "26": require("./26.png"),
  "27": require("./27.png"),
  "28": require("./28.png"),
  "29": require("./29.png"),
  "30": require("./30.png"),
  "31": require("./31.png"),
  "32": require("./32.png"),
  "33": require("./33.png"),
  "34": require("./34.png"),
  "35": require("./35.png"),
  "36": require("./36.png"),
  "37": require("./37.png"),
  "38": require("./38.png"),
  "39": require("./39.png"),
  "40": require("./40.png"),
  "41": require("./41.png"),
  "42": require("./42.png"),
  "43": require("./43.png"),
  "44": require("./44.png"),
  "45": require("./45.png"),
  "46": require("./46.png"),
  "47": require("./47.png"),
  "48": require("./48.png"),
  "49": require("./49.png"),
  "50": require("./50.png"),
  "51": require("./51.png"),
  "52": require("./52.png"),
  "53": require("./53.png"),
  "54": require("./54.png"),
  "55": require("./55.png"),
  "56": require("./56.png"),
  "57": require("./57.png"),
  "58": require("./58.png"),
  "59": require("./59.png"),
  "60": require("./60.png"),
  "61": require("./61.png")
};
},{"./1.png":"render/1.png","./10.png":"render/10.png","./11.png":"render/11.png","./12.png":"render/12.png","./14.png":"render/14.png","./13.png":"render/13.png","./15.png":"render/15.png","./16.png":"render/16.png","./18.png":"render/18.png","./17.png":"render/17.png","./19.png":"render/19.png","./2.png":"render/2.png","./20.png":"render/20.png","./21.png":"render/21.png","./23.png":"render/23.png","./22.png":"render/22.png","./24.png":"render/24.png","./25.png":"render/25.png","./26.png":"render/26.png","./27.png":"render/27.png","./29.png":"render/29.png","./28.png":"render/28.png","./3.png":"render/3.png","./30.png":"render/30.png","./32.png":"render/32.png","./31.png":"render/31.png","./33.png":"render/33.png","./34.png":"render/34.png","./36.png":"render/36.png","./35.png":"render/35.png","./37.png":"render/37.png","./38.png":"render/38.png","./4.png":"render/4.png","./39.png":"render/39.png","./40.png":"render/40.png","./41.png":"render/41.png","./43.png":"render/43.png","./42.png":"render/42.png","./44.png":"render/44.png","./45.png":"render/45.png","./47.png":"render/47.png","./46.png":"render/46.png","./48.png":"render/48.png","./49.png":"render/49.png","./5.png":"render/5.png","./50.png":"render/50.png","./52.png":"render/52.png","./51.png":"render/51.png","./54.png":"render/54.png","./53.png":"render/53.png","./55.png":"render/55.png","./56.png":"render/56.png","./57.png":"render/57.png","./58.png":"render/58.png","./59.png":"render/59.png","./6.png":"render/6.png","./60.png":"render/60.png","./61.png":"render/61.png","./7.png":"render/7.png","./8.png":"render/8.png","./9.png":"render/9.png"}],"test.js":[function(require,module,exports) {
"use strict";

var _ = _interopRequireDefault(require("./render/*.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appleScroller = require('apple-scroller');

require('apple-scroller/style.css');

var container1 = document.getElementById('scroll1');
var appleScroll1 = new appleScroller(container1, _.default, '300vh');
document.getElementById('redraw').addEventListener('click', function () {
  appleScroll1.redraw(appleScroll1);
});
var container2 = document.getElementById('scroll2');
var appleScroll2 = new appleScroller(container2, _.default, '1000vh');
},{"apple-scroller":"node_modules/apple-scroller/index.js","apple-scroller/style.css":"node_modules/apple-scroller/style.css","./render/*.png":"render/*.png"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59285" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map