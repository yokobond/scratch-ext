/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/babel-loader/lib/index.js?!./node_modules/scratch-vm/src/extension-support/extension-worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/scratch-vm/src/extension-support/extension-worker.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4!./node_modules/scratch-vm/src/extension-support/extension-worker.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-env worker */
var ArgumentType = __webpack_require__(/*! ../extension-support/argument-type */ "./node_modules/scratch-vm/src/extension-support/argument-type.js");

var BlockType = __webpack_require__(/*! ../extension-support/block-type */ "./node_modules/scratch-vm/src/extension-support/block-type.js");

var dispatch = __webpack_require__(/*! ../dispatch/worker-dispatch */ "./node_modules/scratch-vm/src/dispatch/worker-dispatch.js");

var TargetType = __webpack_require__(/*! ../extension-support/target-type */ "./node_modules/scratch-vm/src/extension-support/target-type.js");

var ExtensionWorker =
/*#__PURE__*/
function () {
  function ExtensionWorker() {
    var _this = this;

    _classCallCheck(this, ExtensionWorker);

    this.nextExtensionId = 0;
    this.initialRegistrations = [];
    dispatch.waitForConnection.then(function () {
      dispatch.call('extensions', 'allocateWorker').then(function (x) {
        var _x = _slicedToArray(x, 2),
            id = _x[0],
            extension = _x[1];

        _this.workerId = id;

        try {
          importScripts(extension);
          var initialRegistrations = _this.initialRegistrations;
          _this.initialRegistrations = null;
          Promise.all(initialRegistrations).then(function () {
            return dispatch.call('extensions', 'onWorkerInit', id);
          });
        } catch (e) {
          dispatch.call('extensions', 'onWorkerInit', id, e);
        }
      });
    });
    this.extensions = [];
  }

  _createClass(ExtensionWorker, [{
    key: "register",
    value: function register(extensionObject) {
      var extensionId = this.nextExtensionId++;
      this.extensions.push(extensionObject);
      var serviceName = "extension.".concat(this.workerId, ".").concat(extensionId);
      var promise = dispatch.setService(serviceName, extensionObject).then(function () {
        return dispatch.call('extensions', 'registerExtensionService', serviceName);
      });

      if (this.initialRegistrations) {
        this.initialRegistrations.push(promise);
      }

      return promise;
    }
  }]);

  return ExtensionWorker;
}();

global.Scratch = global.Scratch || {};
global.Scratch.ArgumentType = ArgumentType;
global.Scratch.BlockType = BlockType;
global.Scratch.TargetType = TargetType;
/**
 * Expose only specific parts of the worker to extensions.
 */

var extensionWorker = new ExtensionWorker();
global.Scratch.extensions = {
  register: extensionWorker.register.bind(extensionWorker)
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/scratch-vm/node_modules/microee/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/scratch-vm/node_modules/microee/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function M() { this._events = {}; }
M.prototype = {
  on: function(ev, cb) {
    this._events || (this._events = {});
    var e = this._events;
    (e[ev] || (e[ev] = [])).push(cb);
    return this;
  },
  removeListener: function(ev, cb) {
    var e = this._events[ev] || [], i;
    for(i = e.length-1; i >= 0 && e[i]; i--){
      if(e[i] === cb || e[i].cb === cb) { e.splice(i, 1); }
    }
  },
  removeAllListeners: function(ev) {
    if(!ev) { this._events = {}; }
    else { this._events[ev] && (this._events[ev] = []); }
  },
  listeners: function(ev) {
    return (this._events ? this._events[ev] || [] : []);
  },
  emit: function(ev) {
    this._events || (this._events = {});
    var args = Array.prototype.slice.call(arguments, 1), i, e = this._events[ev] || [];
    for(i = e.length-1; i >= 0 && e[i]; i--){
      e[i].apply(this, args);
    }
    return this;
  },
  when: function(ev, cb) {
    return this.once(ev, cb, true);
  },
  once: function(ev, cb, when) {
    if(!cb) return this;
    function c() {
      if(!when) this.removeListener(ev, c);
      if(cb.apply(this, arguments) && when) this.removeListener(ev, c);
    }
    c.cb = cb;
    this.on(ev, c);
    return this;
  }
};
M.mixin = function(dest) {
  var o = M.prototype, k;
  for (k in o) {
    o.hasOwnProperty(k) && (dest.prototype[k] = o[k]);
  }
};
module.exports = M;


/***/ }),

/***/ "./node_modules/scratch-vm/node_modules/minilog/lib/common/filter.js":
/*!***************************************************************************!*\
  !*** ./node_modules/scratch-vm/node_modules/minilog/lib/common/filter.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// default filter
var Transform = __webpack_require__(/*! ./transform.js */ "./node_modules/scratch-vm/node_modules/minilog/lib/common/transform.js");

var levelMap = { debug: 1, info: 2, warn: 3, error: 4 };

function Filter() {
  this.enabled = true;
  this.defaultResult = true;
  this.clear();
}

Transform.mixin(Filter);

// allow all matching, with level >= given level
Filter.prototype.allow = function(name, level) {
  this._white.push({ n: name, l: levelMap[level] });
  return this;
};

// deny all matching, with level <= given level
Filter.prototype.deny = function(name, level) {
  this._black.push({ n: name, l: levelMap[level] });
  return this;
};

Filter.prototype.clear = function() {
  this._white = [];
  this._black = [];
  return this;
};

function test(rule, name) {
  // use .test for RegExps
  return (rule.n.test ? rule.n.test(name) : rule.n == name);
};

Filter.prototype.test = function(name, level) {
  var i, len = Math.max(this._white.length, this._black.length);
  for(i = 0; i < len; i++) {
    if(this._white[i] && test(this._white[i], name) && levelMap[level] >= this._white[i].l) {
      return true;
    }
    if(this._black[i] && test(this._black[i], name) && levelMap[level] <= this._black[i].l) {
      return false;
    }
  }
  return this.defaultResult;
};

Filter.prototype.write = function(name, level, args) {
  if(!this.enabled || this.test(name, level)) {
    return this.emit('item', name, level, args);
  }
};

module.exports = Filter;


/***/ }),

/***/ "./node_modules/scratch-vm/node_modules/minilog/lib/common/minilog.js":
/*!****************************************************************************!*\
  !*** ./node_modules/scratch-vm/node_modules/minilog/lib/common/minilog.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ./transform.js */ "./node_modules/scratch-vm/node_modules/minilog/lib/common/transform.js"),
    Filter = __webpack_require__(/*! ./filter.js */ "./node_modules/scratch-vm/node_modules/minilog/lib/common/filter.js");

var log = new Transform(),
    slice = Array.prototype.slice;

exports = module.exports = function create(name) {
  var o   = function() { log.write(name, undefined, slice.call(arguments)); return o; };
  o.debug = function() { log.write(name, 'debug', slice.call(arguments)); return o; };
  o.info  = function() { log.write(name, 'info',  slice.call(arguments)); return o; };
  o.warn  = function() { log.write(name, 'warn',  slice.call(arguments)); return o; };
  o.error = function() { log.write(name, 'error', slice.call(arguments)); return o; };
  o.log   = o.debug; // for interface compliance with Node and browser consoles
  o.suggest = exports.suggest;
  o.format = log.format;
  return o;
};

// filled in separately
exports.defaultBackend = exports.defaultFormatter = null;

exports.pipe = function(dest) {
  return log.pipe(dest);
};

exports.end = exports.unpipe = exports.disable = function(from) {
  return log.unpipe(from);
};

exports.Transform = Transform;
exports.Filter = Filter;
// this is the default filter that's applied when .enable() is called normally
// you can bypass it completely and set up your own pipes
exports.suggest = new Filter();

exports.enable = function() {
  if(exports.defaultFormatter) {
    return log.pipe(exports.suggest) // filter
              .pipe(exports.defaultFormatter) // formatter
              .pipe(exports.defaultBackend); // backend
  }
  return log.pipe(exports.suggest) // filter
            .pipe(exports.defaultBackend); // formatter
};



/***/ }),

/***/ "./node_modules/scratch-vm/node_modules/minilog/lib/common/transform.js":
/*!******************************************************************************!*\
  !*** ./node_modules/scratch-vm/node_modules/minilog/lib/common/transform.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var microee = __webpack_require__(/*! microee */ "./node_modules/scratch-vm/node_modules/microee/index.js");

// Implements a subset of Node's stream.Transform - in a cross-platform manner.
function Transform() {}

microee.mixin(Transform);

// The write() signature is different from Node's
// --> makes it much easier to work with objects in logs.
// One of the lessons from v1 was that it's better to target
// a good browser rather than the lowest common denominator
// internally.
// If you want to use external streams, pipe() to ./stringify.js first.
Transform.prototype.write = function(name, level, args) {
  this.emit('item', name, level, args);
};

Transform.prototype.end = function() {
  this.emit('end');
  this.removeAllListeners();
};

Transform.prototype.pipe = function(dest) {
  var s = this;
  // prevent double piping
  s.emit('unpipe', dest);
  // tell the dest that it's being piped to
  dest.emit('pipe', s);

  function onItem() {
    dest.write.apply(dest, Array.prototype.slice.call(arguments));
  }
  function onEnd() { !dest._isStdio && dest.end(); }

  s.on('item', onItem);
  s.on('end', onEnd);

  s.when('unpipe', function(from) {
    var match = (from === dest) || typeof from == 'undefined';
    if(match) {
      s.removeListener('item', onItem);
      s.removeListener('end', onEnd);
      dest.emit('unpipe');
    }
    return match;
  });

  return dest;
};

Transform.prototype.unpipe = function(from) {
  this.emit('unpipe', from);
  return this;
};

Transform.prototype.format = function(dest) {
  throw new Error([
    'Warning: .format() is deprecated in Minilog v2! Use .pipe() instead. For example:',
    'var Minilog = require(\'minilog\');',
    'Minilog',
    '  .pipe(Minilog.backends.console.formatClean)',
    '  .pipe(Minilog.backends.console);'].join('\n'));
};

Transform.mixin = function(dest) {
  var o = Transform.prototype, k;
  for (k in o) {
    o.hasOwnProperty(k) && (dest.prototype[k] = o[k]);
  }
};

module.exports = Transform;


/***/ }),

/***/ "./node_modules/scratch-vm/node_modules/minilog/lib/web/array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/scratch-vm/node_modules/minilog/lib/web/array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../common/transform.js */ "./node_modules/scratch-vm/node_modules/minilog/lib/common/transform.js"),
    cache = [ ];

var logger = new Transform();

logger.write = function(name, level, args) {
  cache.push([ name, level, args ]);
};

// utility functions
logger.get = function() { return cache; };
logger.empty = function() { cache = []; };

module.exports = logger;


/***/ }),

/***/ "./node_modules/scratch-vm/node_modules/minilog/lib/web/console.js":
/*!*************************************************************************!*\
  !*** ./node_modules/scratch-vm/node_modules/minilog/lib/web/console.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../common/transform.js */ "./node_modules/scratch-vm/node_modules/minilog/lib/common/transform.js");

var newlines = /\n+$/,
    logger = new Transform();

logger.write = function(name, level, args) {
  var i = args.length-1;
  if (typeof console === 'undefined' || !console.log) {
    return;
  }
  if(console.log.apply) {
    return console.log.apply(console, [name, level].concat(args));
  } else if(JSON && JSON.stringify) {
    // console.log.apply is undefined in IE8 and IE9
    // for IE8/9: make console.log at least a bit less awful
    if(args[i] && typeof args[i] == 'string') {
      args[i] = args[i].replace(newlines, '');
    }
    try {
      for(i = 0; i < args.length; i++) {
        args[i] = JSON.stringify(args[i]);
      }
    } catch(e) {}
    console.log(args.join(' '));
  }
};

logger.formatters = ['color', 'minilog'];
logger.color = __webpack_require__(/*! ./formatters/color.js */ "./node_modules/scratch-vm/node_modules/minilog/lib/web/formatters/color.js");
logger.minilog = __webpack_require__(/*! ./formatters/minilog.js */ "./node_modules/scratch-vm/node_modules/minilog/lib/web/formatters/minilog.js");

module.exports = logger;


/***/ }),

/***/ "./node_modules/scratch-vm/node_modules/minilog/lib/web/formatters/color.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/scratch-vm/node_modules/minilog/lib/web/formatters/color.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../../common/transform.js */ "./node_modules/scratch-vm/node_modules/minilog/lib/common/transform.js"),
    color = __webpack_require__(/*! ./util.js */ "./node_modules/scratch-vm/node_modules/minilog/lib/web/formatters/util.js");

var colors = { debug: ['cyan'], info: ['purple' ], warn: [ 'yellow', true ], error: [ 'red', true ] },
    logger = new Transform();

logger.write = function(name, level, args) {
  var fn = console.log;
  if(console[level] && console[level].apply) {
    fn = console[level];
    fn.apply(console, [ '%c'+name+' %c'+level, color('gray'), color.apply(color, colors[level])].concat(args));
  }
};

// NOP, because piping the formatted logs can only cause trouble.
logger.pipe = function() { };

module.exports = logger;


/***/ }),

/***/ "./node_modules/scratch-vm/node_modules/minilog/lib/web/formatters/minilog.js":
/*!************************************************************************************!*\
  !*** ./node_modules/scratch-vm/node_modules/minilog/lib/web/formatters/minilog.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../../common/transform.js */ "./node_modules/scratch-vm/node_modules/minilog/lib/common/transform.js"),
    color = __webpack_require__(/*! ./util.js */ "./node_modules/scratch-vm/node_modules/minilog/lib/web/formatters/util.js"),
    colors = { debug: ['gray'], info: ['purple' ], warn: [ 'yellow', true ], error: [ 'red', true ] },
    logger = new Transform();

logger.write = function(name, level, args) {
  var fn = console.log;
  if(level != 'debug' && console[level]) {
    fn = console[level];
  }

  var subset = [], i = 0;
  if(level != 'info') {
    for(; i < args.length; i++) {
      if(typeof args[i] != 'string') break;
    }
    fn.apply(console, [ '%c'+name +' '+ args.slice(0, i).join(' '), color.apply(color, colors[level]) ].concat(args.slice(i)));
  } else {
    fn.apply(console, [ '%c'+name, color.apply(color, colors[level]) ].concat(args));
  }
};

// NOP, because piping the formatted logs can only cause trouble.
logger.pipe = function() { };

module.exports = logger;


/***/ }),

/***/ "./node_modules/scratch-vm/node_modules/minilog/lib/web/formatters/util.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/scratch-vm/node_modules/minilog/lib/web/formatters/util.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hex = {
  black: '#000',
  red: '#c23621',
  green: '#25bc26',
  yellow: '#bbbb00',
  blue:  '#492ee1',
  magenta: '#d338d3',
  cyan: '#33bbc8',
  gray: '#808080',
  purple: '#708'
};
function color(fg, isInverse) {
  if(isInverse) {
    return 'color: #fff; background: '+hex[fg]+';';
  } else {
    return 'color: '+hex[fg]+';';
  }
}

module.exports = color;


/***/ }),

/***/ "./node_modules/scratch-vm/node_modules/minilog/lib/web/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/scratch-vm/node_modules/minilog/lib/web/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Minilog = __webpack_require__(/*! ../common/minilog.js */ "./node_modules/scratch-vm/node_modules/minilog/lib/common/minilog.js");

var oldEnable = Minilog.enable,
    oldDisable = Minilog.disable,
    isChrome = (typeof navigator != 'undefined' && /chrome/i.test(navigator.userAgent)),
    console = __webpack_require__(/*! ./console.js */ "./node_modules/scratch-vm/node_modules/minilog/lib/web/console.js");

// Use a more capable logging backend if on Chrome
Minilog.defaultBackend = (isChrome ? console.minilog : console);

// apply enable inputs from localStorage and from the URL
if(typeof window != 'undefined') {
  try {
    Minilog.enable(JSON.parse(window.localStorage['minilogSettings']));
  } catch(e) {}
  if(window.location && window.location.search) {
    var match = RegExp('[?&]minilog=([^&]*)').exec(window.location.search);
    match && Minilog.enable(decodeURIComponent(match[1]));
  }
}

// Make enable also add to localStorage
Minilog.enable = function() {
  oldEnable.call(Minilog, true);
  try { window.localStorage['minilogSettings'] = JSON.stringify(true); } catch(e) {}
  return this;
};

Minilog.disable = function() {
  oldDisable.call(Minilog);
  try { delete window.localStorage.minilogSettings; } catch(e) {}
  return this;
};

exports = module.exports = Minilog;

exports.backends = {
  array: __webpack_require__(/*! ./array.js */ "./node_modules/scratch-vm/node_modules/minilog/lib/web/array.js"),
  browser: Minilog.defaultBackend,
  localStorage: __webpack_require__(/*! ./localstorage.js */ "./node_modules/scratch-vm/node_modules/minilog/lib/web/localstorage.js"),
  jQuery: __webpack_require__(/*! ./jquery_simple.js */ "./node_modules/scratch-vm/node_modules/minilog/lib/web/jquery_simple.js")
};


/***/ }),

/***/ "./node_modules/scratch-vm/node_modules/minilog/lib/web/jquery_simple.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/scratch-vm/node_modules/minilog/lib/web/jquery_simple.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../common/transform.js */ "./node_modules/scratch-vm/node_modules/minilog/lib/common/transform.js");

var cid = new Date().valueOf().toString(36);

function AjaxLogger(options) {
  this.url = options.url || '';
  this.cache = [];
  this.timer = null;
  this.interval = options.interval || 30*1000;
  this.enabled = true;
  this.jQuery = window.jQuery;
  this.extras = {};
}

Transform.mixin(AjaxLogger);

AjaxLogger.prototype.write = function(name, level, args) {
  if(!this.timer) { this.init(); }
  this.cache.push([name, level].concat(args));
};

AjaxLogger.prototype.init = function() {
  if(!this.enabled || !this.jQuery) return;
  var self = this;
  this.timer = setTimeout(function() {
    var i, logs = [], ajaxData, url = self.url;
    if(self.cache.length == 0) return self.init();
    // Test each log line and only log the ones that are valid (e.g. don't have circular references).
    // Slight performance hit but benefit is we log all valid lines.
    for(i = 0; i < self.cache.length; i++) {
      try {
        JSON.stringify(self.cache[i]);
        logs.push(self.cache[i]);
      } catch(e) { }
    }
    if(self.jQuery.isEmptyObject(self.extras)) {
        ajaxData = JSON.stringify({ logs: logs });
        url = self.url + '?client_id=' + cid;
    } else {
        ajaxData = JSON.stringify(self.jQuery.extend({logs: logs}, self.extras));
    }

    self.jQuery.ajax(url, {
      type: 'POST',
      cache: false,
      processData: false,
      data: ajaxData,
      contentType: 'application/json',
      timeout: 10000
    }).success(function(data, status, jqxhr) {
      if(data.interval) {
        self.interval = Math.max(1000, data.interval);
      }
    }).error(function() {
      self.interval = 30000;
    }).always(function() {
      self.init();
    });
    self.cache = [];
  }, this.interval);
};

AjaxLogger.prototype.end = function() {};

// wait until jQuery is defined. Useful if you don't control the load order.
AjaxLogger.jQueryWait = function(onDone) {
  if(typeof window !== 'undefined' && (window.jQuery || window.$)) {
    return onDone(window.jQuery || window.$);
  } else if (typeof window !== 'undefined') {
    setTimeout(function() { AjaxLogger.jQueryWait(onDone); }, 200);
  }
};

module.exports = AjaxLogger;


/***/ }),

/***/ "./node_modules/scratch-vm/node_modules/minilog/lib/web/localstorage.js":
/*!******************************************************************************!*\
  !*** ./node_modules/scratch-vm/node_modules/minilog/lib/web/localstorage.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../common/transform.js */ "./node_modules/scratch-vm/node_modules/minilog/lib/common/transform.js"),
    cache = false;

var logger = new Transform();

logger.write = function(name, level, args) {
  if(typeof window == 'undefined' || typeof JSON == 'undefined' || !JSON.stringify || !JSON.parse) return;
  try {
    if(!cache) { cache = (window.localStorage.minilog ? JSON.parse(window.localStorage.minilog) : []); }
    cache.push([ new Date().toString(), name, level, args ]);
    window.localStorage.minilog = JSON.stringify(cache);
  } catch(e) {}
};

module.exports = logger;

/***/ }),

/***/ "./node_modules/scratch-vm/src/dispatch/shared-dispatch.js":
/*!*****************************************************************!*\
  !*** ./node_modules/scratch-vm/src/dispatch/shared-dispatch.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var log = __webpack_require__(/*! ../util/log */ "./node_modules/scratch-vm/src/util/log.js");
/**
 * @typedef {object} DispatchCallMessage - a message to the dispatch system representing a service method call
 * @property {*} responseId - send a response message with this response ID. See {@link DispatchResponseMessage}
 * @property {string} service - the name of the service to be called
 * @property {string} method - the name of the method to be called
 * @property {Array|undefined} args - the arguments to be passed to the method
 */

/**
 * @typedef {object} DispatchResponseMessage - a message to the dispatch system representing the results of a call
 * @property {*} responseId - a copy of the response ID from the call which generated this response
 * @property {*|undefined} error - if this is truthy, then it contains results from a failed call (such as an exception)
 * @property {*|undefined} result - if error is not truthy, then this contains the return value of the call (if any)
 */

/**
 * @typedef {DispatchCallMessage|DispatchResponseMessage} DispatchMessage
 * Any message to the dispatch system.
 */

/**
 * The SharedDispatch class is responsible for dispatch features shared by
 * {@link CentralDispatch} and {@link WorkerDispatch}.
 */


var SharedDispatch =
/*#__PURE__*/
function () {
  function SharedDispatch() {
    _classCallCheck(this, SharedDispatch);

    /**
     * List of callback registrations for promises waiting for a response from a call to a service on another
     * worker. A callback registration is an array of [resolve,reject] Promise functions.
     * Calls to local services don't enter this list.
     * @type {Array.<Function[]>}
     */
    this.callbacks = [];
    /**
     * The next response ID to be used.
     * @type {int}
     */

    this.nextResponseId = 0;
  }
  /**
   * Call a particular method on a particular service, regardless of whether that service is provided locally or on
   * a worker. If the service is provided by a worker, the `args` will be copied using the Structured Clone
   * algorithm, except for any items which are also in the `transfer` list. Ownership of those items will be
   * transferred to the worker, and they should not be used after this call.
   * @example
   *      dispatcher.call('vm', 'setData', 'cat', 42);
   *      // this finds the worker for the 'vm' service, then on that worker calls:
   *      vm.setData('cat', 42);
   * @param {string} service - the name of the service.
   * @param {string} method - the name of the method.
   * @param {*} [args] - the arguments to be copied to the method, if any.
   * @returns {Promise} - a promise for the return value of the service method.
   */


  _createClass(SharedDispatch, [{
    key: "call",
    value: function call(service, method) {
      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      return this.transferCall.apply(this, [service, method, null].concat(args));
    }
    /**
     * Call a particular method on a particular service, regardless of whether that service is provided locally or on
     * a worker. If the service is provided by a worker, the `args` will be copied using the Structured Clone
     * algorithm, except for any items which are also in the `transfer` list. Ownership of those items will be
     * transferred to the worker, and they should not be used after this call.
     * @example
     *      dispatcher.transferCall('vm', 'setData', [myArrayBuffer], 'cat', myArrayBuffer);
     *      // this finds the worker for the 'vm' service, transfers `myArrayBuffer` to it, then on that worker calls:
     *      vm.setData('cat', myArrayBuffer);
     * @param {string} service - the name of the service.
     * @param {string} method - the name of the method.
     * @param {Array} [transfer] - objects to be transferred instead of copied. Must be present in `args` to be useful.
     * @param {*} [args] - the arguments to be copied to the method, if any.
     * @returns {Promise} - a promise for the return value of the service method.
     */

  }, {
    key: "transferCall",
    value: function transferCall(service, method, transfer) {
      try {
        var _this$_getServiceProv = this._getServiceProvider(service),
            provider = _this$_getServiceProv.provider,
            isRemote = _this$_getServiceProv.isRemote;

        if (provider) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
            args[_key2 - 3] = arguments[_key2];
          }

          if (isRemote) {
            return this._remoteTransferCall.apply(this, [provider, service, method, transfer].concat(args));
          }

          var result = provider[method].apply(provider, args);
          return Promise.resolve(result);
        }

        return Promise.reject(new Error("Service not found: ".concat(service)));
      } catch (e) {
        return Promise.reject(e);
      }
    }
    /**
     * Check if a particular service lives on another worker.
     * @param {string} service - the service to check.
     * @returns {boolean} - true if the service is remote (calls must cross a Worker boundary), false otherwise.
     * @private
     */

  }, {
    key: "_isRemoteService",
    value: function _isRemoteService(service) {
      return this._getServiceProvider(service).isRemote;
    }
    /**
     * Like {@link call}, but force the call to be posted through a particular communication channel.
     * @param {object} provider - send the call through this object's `postMessage` function.
     * @param {string} service - the name of the service.
     * @param {string} method - the name of the method.
     * @param {*} [args] - the arguments to be copied to the method, if any.
     * @returns {Promise} - a promise for the return value of the service method.
     */

  }, {
    key: "_remoteCall",
    value: function _remoteCall(provider, service, method) {
      for (var _len3 = arguments.length, args = new Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
        args[_key3 - 3] = arguments[_key3];
      }

      return this._remoteTransferCall.apply(this, [provider, service, method, null].concat(args));
    }
    /**
     * Like {@link transferCall}, but force the call to be posted through a particular communication channel.
     * @param {object} provider - send the call through this object's `postMessage` function.
     * @param {string} service - the name of the service.
     * @param {string} method - the name of the method.
     * @param {Array} [transfer] - objects to be transferred instead of copied. Must be present in `args` to be useful.
     * @param {*} [args] - the arguments to be copied to the method, if any.
     * @returns {Promise} - a promise for the return value of the service method.
     */

  }, {
    key: "_remoteTransferCall",
    value: function _remoteTransferCall(provider, service, method, transfer) {
      var _this = this;

      for (var _len4 = arguments.length, args = new Array(_len4 > 4 ? _len4 - 4 : 0), _key4 = 4; _key4 < _len4; _key4++) {
        args[_key4 - 4] = arguments[_key4];
      }

      return new Promise(function (resolve, reject) {
        var responseId = _this._storeCallbacks(resolve, reject);
        /** @TODO: remove this hack! this is just here so we don't try to send `util` to a worker */


        if (args.length > 0 && typeof args[args.length - 1].yield === 'function') {
          args.pop();
        }

        if (transfer) {
          provider.postMessage({
            service: service,
            method: method,
            responseId: responseId,
            args: args
          }, transfer);
        } else {
          provider.postMessage({
            service: service,
            method: method,
            responseId: responseId,
            args: args
          });
        }
      });
    }
    /**
     * Store callback functions pending a response message.
     * @param {Function} resolve - function to call if the service method returns.
     * @param {Function} reject - function to call if the service method throws.
     * @returns {*} - a unique response ID for this set of callbacks. See {@link _deliverResponse}.
     * @protected
     */

  }, {
    key: "_storeCallbacks",
    value: function _storeCallbacks(resolve, reject) {
      var responseId = this.nextResponseId++;
      this.callbacks[responseId] = [resolve, reject];
      return responseId;
    }
    /**
     * Deliver call response from a worker. This should only be called as the result of a message from a worker.
     * @param {int} responseId - the response ID of the callback set to call.
     * @param {DispatchResponseMessage} message - the message containing the response value(s).
     * @protected
     */

  }, {
    key: "_deliverResponse",
    value: function _deliverResponse(responseId, message) {
      try {
        var _this$callbacks$respo = _slicedToArray(this.callbacks[responseId], 2),
            resolve = _this$callbacks$respo[0],
            reject = _this$callbacks$respo[1];

        delete this.callbacks[responseId];

        if (message.error) {
          reject(message.error);
        } else {
          resolve(message.result);
        }
      } catch (e) {
        log.error("Dispatch callback failed: ".concat(JSON.stringify(e)));
      }
    }
    /**
     * Handle a message event received from a connected worker.
     * @param {Worker} worker - the worker which sent the message, or the global object if running in a worker.
     * @param {MessageEvent} event - the message event to be handled.
     * @protected
     */

  }, {
    key: "_onMessage",
    value: function _onMessage(worker, event) {
      /** @type {DispatchMessage} */
      var message = event.data;
      message.args = message.args || [];
      var promise;

      if (message.service) {
        if (message.service === 'dispatch') {
          promise = this._onDispatchMessage(worker, message);
        } else {
          promise = this.call.apply(this, [message.service, message.method].concat(_toConsumableArray(message.args)));
        }
      } else if (typeof message.responseId === 'undefined') {
        log.error("Dispatch caught malformed message from a worker: ".concat(JSON.stringify(event)));
      } else {
        this._deliverResponse(message.responseId, message);
      }

      if (promise) {
        if (typeof message.responseId === 'undefined') {
          log.error("Dispatch message missing required response ID: ".concat(JSON.stringify(event)));
        } else {
          promise.then(function (result) {
            return worker.postMessage({
              responseId: message.responseId,
              result: result
            });
          }, function (error) {
            return worker.postMessage({
              responseId: message.responseId,
              error: error
            });
          });
        }
      }
    }
    /**
     * Fetch the service provider object for a particular service name.
     * @abstract
     * @param {string} service - the name of the service to look up
     * @returns {{provider:(object|Worker), isRemote:boolean}} - the means to contact the service, if found
     * @protected
     */

  }, {
    key: "_getServiceProvider",
    value: function _getServiceProvider(service) {
      throw new Error("Could not get provider for ".concat(service, ": _getServiceProvider not implemented"));
    }
    /**
     * Handle a call message sent to the dispatch service itself
     * @abstract
     * @param {Worker} worker - the worker which sent the message.
     * @param {DispatchCallMessage} message - the message to be handled.
     * @returns {Promise|undefined} - a promise for the results of this operation, if appropriate
     * @private
     */

  }, {
    key: "_onDispatchMessage",
    value: function _onDispatchMessage(worker, message) {
      throw new Error("Unimplemented dispatch message handler cannot handle ".concat(message.method, " method"));
    }
  }]);

  return SharedDispatch;
}();

module.exports = SharedDispatch;

/***/ }),

/***/ "./node_modules/scratch-vm/src/dispatch/worker-dispatch.js":
/*!*****************************************************************!*\
  !*** ./node_modules/scratch-vm/src/dispatch/worker-dispatch.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SharedDispatch = __webpack_require__(/*! ./shared-dispatch */ "./node_modules/scratch-vm/src/dispatch/shared-dispatch.js");

var log = __webpack_require__(/*! ../util/log */ "./node_modules/scratch-vm/src/util/log.js");
/**
 * This class provides a Worker with the means to participate in the message dispatch system managed by CentralDispatch.
 * From any context in the messaging system, the dispatcher's "call" method can call any method on any "service"
 * provided in any participating context. The dispatch system will forward function arguments and return values across
 * worker boundaries as needed.
 * @see {CentralDispatch}
 */


var WorkerDispatch =
/*#__PURE__*/
function (_SharedDispatch) {
  _inherits(WorkerDispatch, _SharedDispatch);

  function WorkerDispatch() {
    var _this;

    _classCallCheck(this, WorkerDispatch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WorkerDispatch).call(this));
    /**
     * This promise will be resolved when we have successfully connected to central dispatch.
     * @type {Promise}
     * @see {waitForConnection}
     * @private
     */

    _this._connectionPromise = new Promise(function (resolve) {
      _this._onConnect = resolve;
    });
    /**
     * Map of service name to local service provider.
     * If a service is not listed here, it is assumed to be provided by another context (another Worker or the main
     * thread).
     * @see {setService}
     * @type {object}
     */

    _this.services = {};
    _this._onMessage = _this._onMessage.bind(_assertThisInitialized(_this), self);

    if (typeof self !== 'undefined') {
      self.onmessage = _this._onMessage;
    }

    return _this;
  }
  /**
   * @returns {Promise} a promise which will resolve upon connection to central dispatch. If you need to make a call
   * immediately on "startup" you can attach a 'then' to this promise.
   * @example
   *      dispatch.waitForConnection.then(() => {
   *          dispatch.call('myService', 'hello');
   *      })
   */


  _createClass(WorkerDispatch, [{
    key: "setService",

    /**
     * Set a local object as the global provider of the specified service.
     * WARNING: Any method on the provider can be called from any worker within the dispatch system.
     * @param {string} service - a globally unique string identifying this service. Examples: 'vm', 'gui', 'extension9'.
     * @param {object} provider - a local object which provides this service.
     * @returns {Promise} - a promise which will resolve once the service is registered.
     */
    value: function setService(service, provider) {
      var _this2 = this;

      if (this.services.hasOwnProperty(service)) {
        log.warn("Worker dispatch replacing existing service provider for ".concat(service));
      }

      this.services[service] = provider;
      return this.waitForConnection.then(function () {
        return _this2._remoteCall(self, 'dispatch', 'setService', service);
      });
    }
    /**
     * Fetch the service provider object for a particular service name.
     * @override
     * @param {string} service - the name of the service to look up
     * @returns {{provider:(object|Worker), isRemote:boolean}} - the means to contact the service, if found
     * @protected
     */

  }, {
    key: "_getServiceProvider",
    value: function _getServiceProvider(service) {
      // if we don't have a local service by this name, contact central dispatch by calling `postMessage` on self
      var provider = this.services[service];
      return {
        provider: provider || self,
        isRemote: !provider
      };
    }
    /**
     * Handle a call message sent to the dispatch service itself
     * @override
     * @param {Worker} worker - the worker which sent the message.
     * @param {DispatchCallMessage} message - the message to be handled.
     * @returns {Promise|undefined} - a promise for the results of this operation, if appropriate
     * @protected
     */

  }, {
    key: "_onDispatchMessage",
    value: function _onDispatchMessage(worker, message) {
      var promise;

      switch (message.method) {
        case 'handshake':
          promise = this._onConnect();
          break;

        case 'terminate':
          // Don't close until next tick, after sending confirmation back
          setTimeout(function () {
            return self.close();
          }, 0);
          promise = Promise.resolve();
          break;

        default:
          log.error("Worker dispatch received message for unknown method: ".concat(message.method));
      }

      return promise;
    }
  }, {
    key: "waitForConnection",
    get: function get() {
      return this._connectionPromise;
    }
  }]);

  return WorkerDispatch;
}(SharedDispatch);

module.exports = new WorkerDispatch();

/***/ }),

/***/ "./node_modules/scratch-vm/src/extension-support/argument-type.js":
/*!************************************************************************!*\
  !*** ./node_modules/scratch-vm/src/extension-support/argument-type.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Block argument types
 * @enum {string}
 */
var ArgumentType = {
  /**
   * Numeric value with angle picker
   */
  ANGLE: 'angle',

  /**
   * Boolean value with hexagonal placeholder
   */
  BOOLEAN: 'Boolean',

  /**
   * Numeric value with color picker
   */
  COLOR: 'color',

  /**
   * Numeric value with text field
   */
  NUMBER: 'number',

  /**
   * String value with text field
   */
  STRING: 'string',

  /**
   * String value with matrix field
   */
  MATRIX: 'matrix',

  /**
   * MIDI note number with note picker (piano) field
   */
  NOTE: 'note'
};
module.exports = ArgumentType;

/***/ }),

/***/ "./node_modules/scratch-vm/src/extension-support/block-type.js":
/*!*********************************************************************!*\
  !*** ./node_modules/scratch-vm/src/extension-support/block-type.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Types of block
 * @enum {string}
 */
var BlockType = {
  /**
   * Boolean reporter with hexagonal shape
   */
  BOOLEAN: 'Boolean',

  /**
   * Command block
   */
  COMMAND: 'command',

  /**
   * Specialized command block which may or may not run a child branch
   * The thread continues with the next block whether or not a child branch ran.
   */
  CONDITIONAL: 'conditional',

  /**
   * Specialized hat block with no implementation function
   * This stack only runs if the corresponding event is emitted by other code.
   */
  EVENT: 'event',

  /**
   * Hat block which conditionally starts a block stack
   */
  HAT: 'hat',

  /**
   * Specialized command block which may or may not run a child branch
   * If a child branch runs, the thread evaluates the loop block again.
   */
  LOOP: 'loop',

  /**
   * General reporter with numeric or string value
   */
  REPORTER: 'reporter'
};
module.exports = BlockType;

/***/ }),

/***/ "./node_modules/scratch-vm/src/extension-support/target-type.js":
/*!**********************************************************************!*\
  !*** ./node_modules/scratch-vm/src/extension-support/target-type.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Default types of Target supported by the VM
 * @enum {string}
 */
var TargetType = {
  /**
   * Rendered target which can move, change costumes, etc.
   */
  SPRITE: 'sprite',

  /**
   * Rendered target which cannot move but can change backdrops
   */
  STAGE: 'stage'
};
module.exports = TargetType;

/***/ }),

/***/ "./node_modules/scratch-vm/src/util/log.js":
/*!*************************************************!*\
  !*** ./node_modules/scratch-vm/src/util/log.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var minilog = __webpack_require__(/*! minilog */ "./node_modules/scratch-vm/node_modules/minilog/lib/web/index.js");

minilog.enable();
module.exports = minilog('vm');

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HVUkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vR1VJLy4vbm9kZV9tb2R1bGVzL3NjcmF0Y2gtdm0vc3JjL2V4dGVuc2lvbi1zdXBwb3J0L2V4dGVuc2lvbi13b3JrZXIuanMiLCJ3ZWJwYWNrOi8vR1VJLy4vbm9kZV9tb2R1bGVzL3NjcmF0Y2gtdm0vbm9kZV9tb2R1bGVzL21pY3JvZWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vR1VJLy4vbm9kZV9tb2R1bGVzL3NjcmF0Y2gtdm0vbm9kZV9tb2R1bGVzL21pbmlsb2cvbGliL2NvbW1vbi9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vR1VJLy4vbm9kZV9tb2R1bGVzL3NjcmF0Y2gtdm0vbm9kZV9tb2R1bGVzL21pbmlsb2cvbGliL2NvbW1vbi9taW5pbG9nLmpzIiwid2VicGFjazovL0dVSS8uL25vZGVfbW9kdWxlcy9zY3JhdGNoLXZtL25vZGVfbW9kdWxlcy9taW5pbG9nL2xpYi9jb21tb24vdHJhbnNmb3JtLmpzIiwid2VicGFjazovL0dVSS8uL25vZGVfbW9kdWxlcy9zY3JhdGNoLXZtL25vZGVfbW9kdWxlcy9taW5pbG9nL2xpYi93ZWIvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vR1VJLy4vbm9kZV9tb2R1bGVzL3NjcmF0Y2gtdm0vbm9kZV9tb2R1bGVzL21pbmlsb2cvbGliL3dlYi9jb25zb2xlLmpzIiwid2VicGFjazovL0dVSS8uL25vZGVfbW9kdWxlcy9zY3JhdGNoLXZtL25vZGVfbW9kdWxlcy9taW5pbG9nL2xpYi93ZWIvZm9ybWF0dGVycy9jb2xvci5qcyIsIndlYnBhY2s6Ly9HVUkvLi9ub2RlX21vZHVsZXMvc2NyYXRjaC12bS9ub2RlX21vZHVsZXMvbWluaWxvZy9saWIvd2ViL2Zvcm1hdHRlcnMvbWluaWxvZy5qcyIsIndlYnBhY2s6Ly9HVUkvLi9ub2RlX21vZHVsZXMvc2NyYXRjaC12bS9ub2RlX21vZHVsZXMvbWluaWxvZy9saWIvd2ViL2Zvcm1hdHRlcnMvdXRpbC5qcyIsIndlYnBhY2s6Ly9HVUkvLi9ub2RlX21vZHVsZXMvc2NyYXRjaC12bS9ub2RlX21vZHVsZXMvbWluaWxvZy9saWIvd2ViL2luZGV4LmpzIiwid2VicGFjazovL0dVSS8uL25vZGVfbW9kdWxlcy9zY3JhdGNoLXZtL25vZGVfbW9kdWxlcy9taW5pbG9nL2xpYi93ZWIvanF1ZXJ5X3NpbXBsZS5qcyIsIndlYnBhY2s6Ly9HVUkvLi9ub2RlX21vZHVsZXMvc2NyYXRjaC12bS9ub2RlX21vZHVsZXMvbWluaWxvZy9saWIvd2ViL2xvY2Fsc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9HVUkvLi9ub2RlX21vZHVsZXMvc2NyYXRjaC12bS9zcmMvZGlzcGF0Y2gvc2hhcmVkLWRpc3BhdGNoLmpzIiwid2VicGFjazovL0dVSS8uL25vZGVfbW9kdWxlcy9zY3JhdGNoLXZtL3NyYy9kaXNwYXRjaC93b3JrZXItZGlzcGF0Y2guanMiLCJ3ZWJwYWNrOi8vR1VJLy4vbm9kZV9tb2R1bGVzL3NjcmF0Y2gtdm0vc3JjL2V4dGVuc2lvbi1zdXBwb3J0L2FyZ3VtZW50LXR5cGUuanMiLCJ3ZWJwYWNrOi8vR1VJLy4vbm9kZV9tb2R1bGVzL3NjcmF0Y2gtdm0vc3JjL2V4dGVuc2lvbi1zdXBwb3J0L2Jsb2NrLXR5cGUuanMiLCJ3ZWJwYWNrOi8vR1VJLy4vbm9kZV9tb2R1bGVzL3NjcmF0Y2gtdm0vc3JjL2V4dGVuc2lvbi1zdXBwb3J0L3RhcmdldC10eXBlLmpzIiwid2VicGFjazovL0dVSS8uL25vZGVfbW9kdWxlcy9zY3JhdGNoLXZtL3NyYy91dGlsL2xvZy5qcyIsIndlYnBhY2s6Ly9HVUkvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sIm5hbWVzIjpbIkFyZ3VtZW50VHlwZSIsInJlcXVpcmUiLCJCbG9ja1R5cGUiLCJkaXNwYXRjaCIsIlRhcmdldFR5cGUiLCJFeHRlbnNpb25Xb3JrZXIiLCJuZXh0RXh0ZW5zaW9uSWQiLCJpbml0aWFsUmVnaXN0cmF0aW9ucyIsIndhaXRGb3JDb25uZWN0aW9uIiwidGhlbiIsImNhbGwiLCJ4IiwiaWQiLCJleHRlbnNpb24iLCJ3b3JrZXJJZCIsImltcG9ydFNjcmlwdHMiLCJQcm9taXNlIiwiYWxsIiwiZSIsImV4dGVuc2lvbnMiLCJleHRlbnNpb25PYmplY3QiLCJleHRlbnNpb25JZCIsInB1c2giLCJzZXJ2aWNlTmFtZSIsInByb21pc2UiLCJzZXRTZXJ2aWNlIiwiZ2xvYmFsIiwiU2NyYXRjaCIsImV4dGVuc2lvbldvcmtlciIsInJlZ2lzdGVyIiwiYmluZCIsImxvZyIsIlNoYXJlZERpc3BhdGNoIiwiY2FsbGJhY2tzIiwibmV4dFJlc3BvbnNlSWQiLCJzZXJ2aWNlIiwibWV0aG9kIiwiYXJncyIsInRyYW5zZmVyQ2FsbCIsInRyYW5zZmVyIiwiX2dldFNlcnZpY2VQcm92aWRlciIsInByb3ZpZGVyIiwiaXNSZW1vdGUiLCJfcmVtb3RlVHJhbnNmZXJDYWxsIiwicmVzdWx0IiwiYXBwbHkiLCJyZXNvbHZlIiwicmVqZWN0IiwiRXJyb3IiLCJyZXNwb25zZUlkIiwiX3N0b3JlQ2FsbGJhY2tzIiwibGVuZ3RoIiwieWllbGQiLCJwb3AiLCJwb3N0TWVzc2FnZSIsIm1lc3NhZ2UiLCJlcnJvciIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3b3JrZXIiLCJldmVudCIsImRhdGEiLCJfb25EaXNwYXRjaE1lc3NhZ2UiLCJfZGVsaXZlclJlc3BvbnNlIiwibW9kdWxlIiwiZXhwb3J0cyIsIldvcmtlckRpc3BhdGNoIiwiX2Nvbm5lY3Rpb25Qcm9taXNlIiwiX29uQ29ubmVjdCIsInNlcnZpY2VzIiwiX29uTWVzc2FnZSIsInNlbGYiLCJvbm1lc3NhZ2UiLCJoYXNPd25Qcm9wZXJ0eSIsIndhcm4iLCJfcmVtb3RlQ2FsbCIsInNldFRpbWVvdXQiLCJjbG9zZSIsIkFOR0xFIiwiQk9PTEVBTiIsIkNPTE9SIiwiTlVNQkVSIiwiU1RSSU5HIiwiTUFUUklYIiwiTk9URSIsIkNPTU1BTkQiLCJDT05ESVRJT05BTCIsIkVWRU5UIiwiSEFUIiwiTE9PUCIsIlJFUE9SVEVSIiwiU1BS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Ozs7OztBQ2hCQSxJQUFNeUYsT0FBTyxHQUFHNUYsbUJBQU8sQ0FBQyxnRkFBRCxDQUF2Qjs7QUFDQTRGLE9BQU8sQ0FBQ0MsTUFBUjtBQUVBOUIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCNEIsT0FBTyxDQUFDLElBQUQsQ0FBeEIsQzs7Ozs7Ozs7Ozs7QUNIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUMiLCJmaWxlIjoiZXh0ZW5zaW9uLXdvcmtlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3NjcmF0Y2gtdm0vc3JjL2V4dGVuc2lvbi1zdXBwb3J0L2V4dGVuc2lvbi13b3JrZXIuanNcIik7XG4iLCIvKiBlc2xpbnQtZW52IHdvcmtlciAqL1xuXG5jb25zdCBBcmd1bWVudFR5cGUgPSByZXF1aXJlKCcuLi9leHRlbnNpb24tc3VwcG9ydC9hcmd1bWVudC10eXBlJyk7XG5jb25zdCBCbG9ja1R5cGUgPSByZXF1aXJlKCcuLi9leHRlbnNpb24tc3VwcG9ydC9ibG9jay10eXBlJyk7XG5jb25zdCBkaXNwYXRjaCA9IHJlcXVpcmUoJy4uL2Rpc3BhdGNoL3dvcmtlci1kaXNwYXRjaCcpO1xuY29uc3QgVGFyZ2V0VHlwZSA9IHJlcXVpcmUoJy4uL2V4dGVuc2lvbi1zdXBwb3J0L3RhcmdldC10eXBlJyk7XG5cbmNsYXNzIEV4dGVuc2lvbldvcmtlciB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLm5leHRFeHRlbnNpb25JZCA9IDA7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsUmVnaXN0cmF0aW9ucyA9IFtdO1xuXG4gICAgICAgIGRpc3BhdGNoLndhaXRGb3JDb25uZWN0aW9uLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2guY2FsbCgnZXh0ZW5zaW9ucycsICdhbGxvY2F0ZVdvcmtlcicpLnRoZW4oeCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2lkLCBleHRlbnNpb25dID0geDtcbiAgICAgICAgICAgICAgICB0aGlzLndvcmtlcklkID0gaWQ7XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpbXBvcnRTY3JpcHRzKGV4dGVuc2lvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbFJlZ2lzdHJhdGlvbnMgPSB0aGlzLmluaXRpYWxSZWdpc3RyYXRpb25zO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxSZWdpc3RyYXRpb25zID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChpbml0aWFsUmVnaXN0cmF0aW9ucykudGhlbigoKSA9PiBkaXNwYXRjaC5jYWxsKCdleHRlbnNpb25zJywgJ29uV29ya2VySW5pdCcsIGlkKSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaC5jYWxsKCdleHRlbnNpb25zJywgJ29uV29ya2VySW5pdCcsIGlkLCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5leHRlbnNpb25zID0gW107XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIgKGV4dGVuc2lvbk9iamVjdCkge1xuICAgICAgICBjb25zdCBleHRlbnNpb25JZCA9IHRoaXMubmV4dEV4dGVuc2lvbklkKys7XG4gICAgICAgIHRoaXMuZXh0ZW5zaW9ucy5wdXNoKGV4dGVuc2lvbk9iamVjdCk7XG4gICAgICAgIGNvbnN0IHNlcnZpY2VOYW1lID0gYGV4dGVuc2lvbi4ke3RoaXMud29ya2VySWR9LiR7ZXh0ZW5zaW9uSWR9YDtcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGRpc3BhdGNoLnNldFNlcnZpY2Uoc2VydmljZU5hbWUsIGV4dGVuc2lvbk9iamVjdClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IGRpc3BhdGNoLmNhbGwoJ2V4dGVuc2lvbnMnLCAncmVnaXN0ZXJFeHRlbnNpb25TZXJ2aWNlJywgc2VydmljZU5hbWUpKTtcbiAgICAgICAgaWYgKHRoaXMuaW5pdGlhbFJlZ2lzdHJhdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFJlZ2lzdHJhdGlvbnMucHVzaChwcm9taXNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG59XG5cbmdsb2JhbC5TY3JhdGNoID0gZ2xvYmFsLlNjcmF0Y2ggfHwge307XG5nbG9iYWwuU2NyYXRjaC5Bcmd1bWVudFR5cGUgPSBBcmd1bWVudFR5cGU7XG5nbG9iYWwuU2NyYXRjaC5CbG9ja1R5cGUgPSBCbG9ja1R5cGU7XG5nbG9iYWwuU2NyYXRjaC5UYXJnZXRUeXBlID0gVGFyZ2V0VHlwZTtcblxuLyoqXG4gKiBFeHBvc2Ugb25seSBzcGVjaWZpYyBwYXJ0cyBvZiB0aGUgd29ya2VyIHRvIGV4dGVuc2lvbnMuXG4gKi9cbmNvbnN0IGV4dGVuc2lvbldvcmtlciA9IG5ldyBFeHRlbnNpb25Xb3JrZXIoKTtcbmdsb2JhbC5TY3JhdGNoLmV4dGVuc2lvbnMgPSB7XG4gICAgcmVnaXN0ZXI6IGV4dGVuc2lvbldvcmtlci5yZWdpc3Rlci5iaW5kKGV4dGVuc2lvbldvcmtlcilcbn07XG4iLCJmdW5jdGlvbiBNKCkgeyB0aGlzLl9ldmVudHMgPSB7fTsgfVxuTS5wcm90b3R5cGUgPSB7XG4gIG9uOiBmdW5jdGlvbihldiwgY2IpIHtcbiAgICB0aGlzLl9ldmVudHMgfHwgKHRoaXMuX2V2ZW50cyA9IHt9KTtcbiAgICB2YXIgZSA9IHRoaXMuX2V2ZW50cztcbiAgICAoZVtldl0gfHwgKGVbZXZdID0gW10pKS5wdXNoKGNiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgcmVtb3ZlTGlzdGVuZXI6IGZ1bmN0aW9uKGV2LCBjYikge1xuICAgIHZhciBlID0gdGhpcy5fZXZlbnRzW2V2XSB8fCBbXSwgaTtcbiAgICBmb3IoaSA9IGUubGVuZ3RoLTE7IGkgPj0gMCAmJiBlW2ldOyBpLS0pe1xuICAgICAgaWYoZVtpXSA9PT0gY2IgfHwgZVtpXS5jYiA9PT0gY2IpIHsgZS5zcGxpY2UoaSwgMSk7IH1cbiAgICB9XG4gIH0sXG4gIHJlbW92ZUFsbExpc3RlbmVyczogZnVuY3Rpb24oZXYpIHtcbiAgICBpZighZXYpIHsgdGhpcy5fZXZlbnRzID0ge307IH1cbiAgICBlbHNlIHsgdGhpcy5fZXZlbnRzW2V2XSAmJiAodGhpcy5fZXZlbnRzW2V2XSA9IFtdKTsgfVxuICB9LFxuICBsaXN0ZW5lcnM6IGZ1bmN0aW9uKGV2KSB7XG4gICAgcmV0dXJuICh0aGlzLl9ldmVudHMgPyB0aGlzLl9ldmVudHNbZXZdIHx8IFtdIDogW10pO1xuICB9LFxuICBlbWl0OiBmdW5jdGlvbihldikge1xuICAgIHRoaXMuX2V2ZW50cyB8fCAodGhpcy5fZXZlbnRzID0ge30pO1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSwgaSwgZSA9IHRoaXMuX2V2ZW50c1tldl0gfHwgW107XG4gICAgZm9yKGkgPSBlLmxlbmd0aC0xOyBpID49IDAgJiYgZVtpXTsgaS0tKXtcbiAgICAgIGVbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICB3aGVuOiBmdW5jdGlvbihldiwgY2IpIHtcbiAgICByZXR1cm4gdGhpcy5vbmNlKGV2LCBjYiwgdHJ1ZSk7XG4gIH0sXG4gIG9uY2U6IGZ1bmN0aW9uKGV2LCBjYiwgd2hlbikge1xuICAgIGlmKCFjYikgcmV0dXJuIHRoaXM7XG4gICAgZnVuY3Rpb24gYygpIHtcbiAgICAgIGlmKCF3aGVuKSB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2LCBjKTtcbiAgICAgIGlmKGNiLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgJiYgd2hlbikgdGhpcy5yZW1vdmVMaXN0ZW5lcihldiwgYyk7XG4gICAgfVxuICAgIGMuY2IgPSBjYjtcbiAgICB0aGlzLm9uKGV2LCBjKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufTtcbk0ubWl4aW4gPSBmdW5jdGlvbihkZXN0KSB7XG4gIHZhciBvID0gTS5wcm90b3R5cGUsIGs7XG4gIGZvciAoayBpbiBvKSB7XG4gICAgby5oYXNPd25Qcm9wZXJ0eShrKSAmJiAoZGVzdC5wcm90b3R5cGVba10gPSBvW2tdKTtcbiAgfVxufTtcbm1vZHVsZS5leHBvcnRzID0gTTtcbiIsIi8vIGRlZmF1bHQgZmlsdGVyXG52YXIgVHJhbnNmb3JtID0gcmVxdWlyZSgnLi90cmFuc2Zvcm0uanMnKTtcblxudmFyIGxldmVsTWFwID0geyBkZWJ1ZzogMSwgaW5mbzogMiwgd2FybjogMywgZXJyb3I6IDQgfTtcblxuZnVuY3Rpb24gRmlsdGVyKCkge1xuICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICB0aGlzLmRlZmF1bHRSZXN1bHQgPSB0cnVlO1xuICB0aGlzLmNsZWFyKCk7XG59XG5cblRyYW5zZm9ybS5taXhpbihGaWx0ZXIpO1xuXG4vLyBhbGxvdyBhbGwgbWF0Y2hpbmcsIHdpdGggbGV2ZWwgPj0gZ2l2ZW4gbGV2ZWxcbkZpbHRlci5wcm90b3R5cGUuYWxsb3cgPSBmdW5jdGlvbihuYW1lLCBsZXZlbCkge1xuICB0aGlzLl93aGl0ZS5wdXNoKHsgbjogbmFtZSwgbDogbGV2ZWxNYXBbbGV2ZWxdIH0pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8vIGRlbnkgYWxsIG1hdGNoaW5nLCB3aXRoIGxldmVsIDw9IGdpdmVuIGxldmVsXG5GaWx0ZXIucHJvdG90eXBlLmRlbnkgPSBmdW5jdGlvbihuYW1lLCBsZXZlbCkge1xuICB0aGlzLl9ibGFjay5wdXNoKHsgbjogbmFtZSwgbDogbGV2ZWxNYXBbbGV2ZWxdIH0pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkZpbHRlci5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fd2hpdGUgPSBbXTtcbiAgdGhpcy5fYmxhY2sgPSBbXTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiB0ZXN0KHJ1bGUsIG5hbWUpIHtcbiAgLy8gdXNlIC50ZXN0IGZvciBSZWdFeHBzXG4gIHJldHVybiAocnVsZS5uLnRlc3QgPyBydWxlLm4udGVzdChuYW1lKSA6IHJ1bGUubiA9PSBuYW1lKTtcbn07XG5cbkZpbHRlci5wcm90b3R5cGUudGVzdCA9IGZ1bmN0aW9uKG5hbWUsIGxldmVsKSB7XG4gIHZhciBpLCBsZW4gPSBNYXRoLm1heCh0aGlzLl93aGl0ZS5sZW5ndGgsIHRoaXMuX2JsYWNrLmxlbmd0aCk7XG4gIGZvcihpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYodGhpcy5fd2hpdGVbaV0gJiYgdGVzdCh0aGlzLl93aGl0ZVtpXSwgbmFtZSkgJiYgbGV2ZWxNYXBbbGV2ZWxdID49IHRoaXMuX3doaXRlW2ldLmwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZih0aGlzLl9ibGFja1tpXSAmJiB0ZXN0KHRoaXMuX2JsYWNrW2ldLCBuYW1lKSAmJiBsZXZlbE1hcFtsZXZlbF0gPD0gdGhpcy5fYmxhY2tbaV0ubCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGhpcy5kZWZhdWx0UmVzdWx0O1xufTtcblxuRmlsdGVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uKG5hbWUsIGxldmVsLCBhcmdzKSB7XG4gIGlmKCF0aGlzLmVuYWJsZWQgfHwgdGhpcy50ZXN0KG5hbWUsIGxldmVsKSkge1xuICAgIHJldHVybiB0aGlzLmVtaXQoJ2l0ZW0nLCBuYW1lLCBsZXZlbCwgYXJncyk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsdGVyO1xuIiwidmFyIFRyYW5zZm9ybSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtLmpzJyksXG4gICAgRmlsdGVyID0gcmVxdWlyZSgnLi9maWx0ZXIuanMnKTtcblxudmFyIGxvZyA9IG5ldyBUcmFuc2Zvcm0oKSxcbiAgICBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlKG5hbWUpIHtcbiAgdmFyIG8gICA9IGZ1bmN0aW9uKCkgeyBsb2cud3JpdGUobmFtZSwgdW5kZWZpbmVkLCBzbGljZS5jYWxsKGFyZ3VtZW50cykpOyByZXR1cm4gbzsgfTtcbiAgby5kZWJ1ZyA9IGZ1bmN0aW9uKCkgeyBsb2cud3JpdGUobmFtZSwgJ2RlYnVnJywgc2xpY2UuY2FsbChhcmd1bWVudHMpKTsgcmV0dXJuIG87IH07XG4gIG8uaW5mbyAgPSBmdW5jdGlvbigpIHsgbG9nLndyaXRlKG5hbWUsICdpbmZvJywgIHNsaWNlLmNhbGwoYXJndW1lbnRzKSk7IHJldHVybiBvOyB9O1xuICBvLndhcm4gID0gZnVuY3Rpb24oKSB7IGxvZy53cml0ZShuYW1lLCAnd2FybicsICBzbGljZS5jYWxsKGFyZ3VtZW50cykpOyByZXR1cm4gbzsgfTtcbiAgby5lcnJvciA9IGZ1bmN0aW9uKCkgeyBsb2cud3JpdGUobmFtZSwgJ2Vycm9yJywgc2xpY2UuY2FsbChhcmd1bWVudHMpKTsgcmV0dXJuIG87IH07XG4gIG8ubG9nICAgPSBvLmRlYnVnOyAvLyBmb3IgaW50ZXJmYWNlIGNvbXBsaWFuY2Ugd2l0aCBOb2RlIGFuZCBicm93c2VyIGNvbnNvbGVzXG4gIG8uc3VnZ2VzdCA9IGV4cG9ydHMuc3VnZ2VzdDtcbiAgby5mb3JtYXQgPSBsb2cuZm9ybWF0O1xuICByZXR1cm4gbztcbn07XG5cbi8vIGZpbGxlZCBpbiBzZXBhcmF0ZWx5XG5leHBvcnRzLmRlZmF1bHRCYWNrZW5kID0gZXhwb3J0cy5kZWZhdWx0Rm9ybWF0dGVyID0gbnVsbDtcblxuZXhwb3J0cy5waXBlID0gZnVuY3Rpb24oZGVzdCkge1xuICByZXR1cm4gbG9nLnBpcGUoZGVzdCk7XG59O1xuXG5leHBvcnRzLmVuZCA9IGV4cG9ydHMudW5waXBlID0gZXhwb3J0cy5kaXNhYmxlID0gZnVuY3Rpb24oZnJvbSkge1xuICByZXR1cm4gbG9nLnVucGlwZShmcm9tKTtcbn07XG5cbmV4cG9ydHMuVHJhbnNmb3JtID0gVHJhbnNmb3JtO1xuZXhwb3J0cy5GaWx0ZXIgPSBGaWx0ZXI7XG4vLyB0aGlzIGlzIHRoZSBkZWZhdWx0IGZpbHRlciB0aGF0J3MgYXBwbGllZCB3aGVuIC5lbmFibGUoKSBpcyBjYWxsZWQgbm9ybWFsbHlcbi8vIHlvdSBjYW4gYnlwYXNzIGl0IGNvbXBsZXRlbHkgYW5kIHNldCB1cCB5b3VyIG93biBwaXBlc1xuZXhwb3J0cy5zdWdnZXN0ID0gbmV3IEZpbHRlcigpO1xuXG5leHBvcnRzLmVuYWJsZSA9IGZ1bmN0aW9uKCkge1xuICBpZihleHBvcnRzLmRlZmF1bHRGb3JtYXR0ZXIpIHtcbiAgICByZXR1cm4gbG9nLnBpcGUoZXhwb3J0cy5zdWdnZXN0KSAvLyBmaWx0ZXJcbiAgICAgICAgICAgICAgLnBpcGUoZXhwb3J0cy5kZWZhdWx0Rm9ybWF0dGVyKSAvLyBmb3JtYXR0ZXJcbiAgICAgICAgICAgICAgLnBpcGUoZXhwb3J0cy5kZWZhdWx0QmFja2VuZCk7IC8vIGJhY2tlbmRcbiAgfVxuICByZXR1cm4gbG9nLnBpcGUoZXhwb3J0cy5zdWdnZXN0KSAvLyBmaWx0ZXJcbiAgICAgICAgICAgIC5waXBlKGV4cG9ydHMuZGVmYXVsdEJhY2tlbmQpOyAvLyBmb3JtYXR0ZXJcbn07XG5cbiIsInZhciBtaWNyb2VlID0gcmVxdWlyZSgnbWljcm9lZScpO1xuXG4vLyBJbXBsZW1lbnRzIGEgc3Vic2V0IG9mIE5vZGUncyBzdHJlYW0uVHJhbnNmb3JtIC0gaW4gYSBjcm9zcy1wbGF0Zm9ybSBtYW5uZXIuXG5mdW5jdGlvbiBUcmFuc2Zvcm0oKSB7fVxuXG5taWNyb2VlLm1peGluKFRyYW5zZm9ybSk7XG5cbi8vIFRoZSB3cml0ZSgpIHNpZ25hdHVyZSBpcyBkaWZmZXJlbnQgZnJvbSBOb2RlJ3Ncbi8vIC0tPiBtYWtlcyBpdCBtdWNoIGVhc2llciB0byB3b3JrIHdpdGggb2JqZWN0cyBpbiBsb2dzLlxuLy8gT25lIG9mIHRoZSBsZXNzb25zIGZyb20gdjEgd2FzIHRoYXQgaXQncyBiZXR0ZXIgdG8gdGFyZ2V0XG4vLyBhIGdvb2QgYnJvd3NlciByYXRoZXIgdGhhbiB0aGUgbG93ZXN0IGNvbW1vbiBkZW5vbWluYXRvclxuLy8gaW50ZXJuYWxseS5cbi8vIElmIHlvdSB3YW50IHRvIHVzZSBleHRlcm5hbCBzdHJlYW1zLCBwaXBlKCkgdG8gLi9zdHJpbmdpZnkuanMgZmlyc3QuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24obmFtZSwgbGV2ZWwsIGFyZ3MpIHtcbiAgdGhpcy5lbWl0KCdpdGVtJywgbmFtZSwgbGV2ZWwsIGFyZ3MpO1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5lbWl0KCdlbmQnKTtcbiAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUucGlwZSA9IGZ1bmN0aW9uKGRlc3QpIHtcbiAgdmFyIHMgPSB0aGlzO1xuICAvLyBwcmV2ZW50IGRvdWJsZSBwaXBpbmdcbiAgcy5lbWl0KCd1bnBpcGUnLCBkZXN0KTtcbiAgLy8gdGVsbCB0aGUgZGVzdCB0aGF0IGl0J3MgYmVpbmcgcGlwZWQgdG9cbiAgZGVzdC5lbWl0KCdwaXBlJywgcyk7XG5cbiAgZnVuY3Rpb24gb25JdGVtKCkge1xuICAgIGRlc3Qud3JpdGUuYXBwbHkoZGVzdCwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gIH1cbiAgZnVuY3Rpb24gb25FbmQoKSB7ICFkZXN0Ll9pc1N0ZGlvICYmIGRlc3QuZW5kKCk7IH1cblxuICBzLm9uKCdpdGVtJywgb25JdGVtKTtcbiAgcy5vbignZW5kJywgb25FbmQpO1xuXG4gIHMud2hlbigndW5waXBlJywgZnVuY3Rpb24oZnJvbSkge1xuICAgIHZhciBtYXRjaCA9IChmcm9tID09PSBkZXN0KSB8fCB0eXBlb2YgZnJvbSA9PSAndW5kZWZpbmVkJztcbiAgICBpZihtYXRjaCkge1xuICAgICAgcy5yZW1vdmVMaXN0ZW5lcignaXRlbScsIG9uSXRlbSk7XG4gICAgICBzLnJlbW92ZUxpc3RlbmVyKCdlbmQnLCBvbkVuZCk7XG4gICAgICBkZXN0LmVtaXQoJ3VucGlwZScpO1xuICAgIH1cbiAgICByZXR1cm4gbWF0Y2g7XG4gIH0pO1xuXG4gIHJldHVybiBkZXN0O1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS51bnBpcGUgPSBmdW5jdGlvbihmcm9tKSB7XG4gIHRoaXMuZW1pdCgndW5waXBlJywgZnJvbSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbihkZXN0KSB7XG4gIHRocm93IG5ldyBFcnJvcihbXG4gICAgJ1dhcm5pbmc6IC5mb3JtYXQoKSBpcyBkZXByZWNhdGVkIGluIE1pbmlsb2cgdjIhIFVzZSAucGlwZSgpIGluc3RlYWQuIEZvciBleGFtcGxlOicsXG4gICAgJ3ZhciBNaW5pbG9nID0gcmVxdWlyZShcXCdtaW5pbG9nXFwnKTsnLFxuICAgICdNaW5pbG9nJyxcbiAgICAnICAucGlwZShNaW5pbG9nLmJhY2tlbmRzLmNvbnNvbGUuZm9ybWF0Q2xlYW4pJyxcbiAgICAnICAucGlwZShNaW5pbG9nLmJhY2tlbmRzLmNvbnNvbGUpOyddLmpvaW4oJ1xcbicpKTtcbn07XG5cblRyYW5zZm9ybS5taXhpbiA9IGZ1bmN0aW9uKGRlc3QpIHtcbiAgdmFyIG8gPSBUcmFuc2Zvcm0ucHJvdG90eXBlLCBrO1xuICBmb3IgKGsgaW4gbykge1xuICAgIG8uaGFzT3duUHJvcGVydHkoaykgJiYgKGRlc3QucHJvdG90eXBlW2tdID0gb1trXSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhbnNmb3JtO1xuIiwidmFyIFRyYW5zZm9ybSA9IHJlcXVpcmUoJy4uL2NvbW1vbi90cmFuc2Zvcm0uanMnKSxcbiAgICBjYWNoZSA9IFsgXTtcblxudmFyIGxvZ2dlciA9IG5ldyBUcmFuc2Zvcm0oKTtcblxubG9nZ2VyLndyaXRlID0gZnVuY3Rpb24obmFtZSwgbGV2ZWwsIGFyZ3MpIHtcbiAgY2FjaGUucHVzaChbIG5hbWUsIGxldmVsLCBhcmdzIF0pO1xufTtcblxuLy8gdXRpbGl0eSBmdW5jdGlvbnNcbmxvZ2dlci5nZXQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNhY2hlOyB9O1xubG9nZ2VyLmVtcHR5ID0gZnVuY3Rpb24oKSB7IGNhY2hlID0gW107IH07XG5cbm1vZHVsZS5leHBvcnRzID0gbG9nZ2VyO1xuIiwidmFyIFRyYW5zZm9ybSA9IHJlcXVpcmUoJy4uL2NvbW1vbi90cmFuc2Zvcm0uanMnKTtcblxudmFyIG5ld2xpbmVzID0gL1xcbiskLyxcbiAgICBsb2dnZXIgPSBuZXcgVHJhbnNmb3JtKCk7XG5cbmxvZ2dlci53cml0ZSA9IGZ1bmN0aW9uKG5hbWUsIGxldmVsLCBhcmdzKSB7XG4gIHZhciBpID0gYXJncy5sZW5ndGgtMTtcbiAgaWYgKHR5cGVvZiBjb25zb2xlID09PSAndW5kZWZpbmVkJyB8fCAhY29uc29sZS5sb2cpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYoY29uc29sZS5sb2cuYXBwbHkpIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgW25hbWUsIGxldmVsXS5jb25jYXQoYXJncykpO1xuICB9IGVsc2UgaWYoSlNPTiAmJiBKU09OLnN0cmluZ2lmeSkge1xuICAgIC8vIGNvbnNvbGUubG9nLmFwcGx5IGlzIHVuZGVmaW5lZCBpbiBJRTggYW5kIElFOVxuICAgIC8vIGZvciBJRTgvOTogbWFrZSBjb25zb2xlLmxvZyBhdCBsZWFzdCBhIGJpdCBsZXNzIGF3ZnVsXG4gICAgaWYoYXJnc1tpXSAmJiB0eXBlb2YgYXJnc1tpXSA9PSAnc3RyaW5nJykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3NbaV0ucmVwbGFjZShuZXdsaW5lcywgJycpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgZm9yKGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICBhcmdzW2ldID0gSlNPTi5zdHJpbmdpZnkoYXJnc1tpXSk7XG4gICAgICB9XG4gICAgfSBjYXRjaChlKSB7fVxuICAgIGNvbnNvbGUubG9nKGFyZ3Muam9pbignICcpKTtcbiAgfVxufTtcblxubG9nZ2VyLmZvcm1hdHRlcnMgPSBbJ2NvbG9yJywgJ21pbmlsb2cnXTtcbmxvZ2dlci5jb2xvciA9IHJlcXVpcmUoJy4vZm9ybWF0dGVycy9jb2xvci5qcycpO1xubG9nZ2VyLm1pbmlsb2cgPSByZXF1aXJlKCcuL2Zvcm1hdHRlcnMvbWluaWxvZy5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvZ2dlcjtcbiIsInZhciBUcmFuc2Zvcm0gPSByZXF1aXJlKCcuLi8uLi9jb21tb24vdHJhbnNmb3JtLmpzJyksXG4gICAgY29sb3IgPSByZXF1aXJlKCcuL3V0aWwuanMnKTtcblxudmFyIGNvbG9ycyA9IHsgZGVidWc6IFsnY3lhbiddLCBpbmZvOiBbJ3B1cnBsZScgXSwgd2FybjogWyAneWVsbG93JywgdHJ1ZSBdLCBlcnJvcjogWyAncmVkJywgdHJ1ZSBdIH0sXG4gICAgbG9nZ2VyID0gbmV3IFRyYW5zZm9ybSgpO1xuXG5sb2dnZXIud3JpdGUgPSBmdW5jdGlvbihuYW1lLCBsZXZlbCwgYXJncykge1xuICB2YXIgZm4gPSBjb25zb2xlLmxvZztcbiAgaWYoY29uc29sZVtsZXZlbF0gJiYgY29uc29sZVtsZXZlbF0uYXBwbHkpIHtcbiAgICBmbiA9IGNvbnNvbGVbbGV2ZWxdO1xuICAgIGZuLmFwcGx5KGNvbnNvbGUsIFsgJyVjJytuYW1lKycgJWMnK2xldmVsLCBjb2xvcignZ3JheScpLCBjb2xvci5hcHBseShjb2xvciwgY29sb3JzW2xldmVsXSldLmNvbmNhdChhcmdzKSk7XG4gIH1cbn07XG5cbi8vIE5PUCwgYmVjYXVzZSBwaXBpbmcgdGhlIGZvcm1hdHRlZCBsb2dzIGNhbiBvbmx5IGNhdXNlIHRyb3VibGUuXG5sb2dnZXIucGlwZSA9IGZ1bmN0aW9uKCkgeyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvZ2dlcjtcbiIsInZhciBUcmFuc2Zvcm0gPSByZXF1aXJlKCcuLi8uLi9jb21tb24vdHJhbnNmb3JtLmpzJyksXG4gICAgY29sb3IgPSByZXF1aXJlKCcuL3V0aWwuanMnKSxcbiAgICBjb2xvcnMgPSB7IGRlYnVnOiBbJ2dyYXknXSwgaW5mbzogWydwdXJwbGUnIF0sIHdhcm46IFsgJ3llbGxvdycsIHRydWUgXSwgZXJyb3I6IFsgJ3JlZCcsIHRydWUgXSB9LFxuICAgIGxvZ2dlciA9IG5ldyBUcmFuc2Zvcm0oKTtcblxubG9nZ2VyLndyaXRlID0gZnVuY3Rpb24obmFtZSwgbGV2ZWwsIGFyZ3MpIHtcbiAgdmFyIGZuID0gY29uc29sZS5sb2c7XG4gIGlmKGxldmVsICE9ICdkZWJ1ZycgJiYgY29uc29sZVtsZXZlbF0pIHtcbiAgICBmbiA9IGNvbnNvbGVbbGV2ZWxdO1xuICB9XG5cbiAgdmFyIHN1YnNldCA9IFtdLCBpID0gMDtcbiAgaWYobGV2ZWwgIT0gJ2luZm8nKSB7XG4gICAgZm9yKDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmKHR5cGVvZiBhcmdzW2ldICE9ICdzdHJpbmcnKSBicmVhaztcbiAgICB9XG4gICAgZm4uYXBwbHkoY29uc29sZSwgWyAnJWMnK25hbWUgKycgJysgYXJncy5zbGljZSgwLCBpKS5qb2luKCcgJyksIGNvbG9yLmFwcGx5KGNvbG9yLCBjb2xvcnNbbGV2ZWxdKSBdLmNvbmNhdChhcmdzLnNsaWNlKGkpKSk7XG4gIH0gZWxzZSB7XG4gICAgZm4uYXBwbHkoY29uc29sZSwgWyAnJWMnK25hbWUsIGNvbG9yLmFwcGx5KGNvbG9yLCBjb2xvcnNbbGV2ZWxdKSBdLmNvbmNhdChhcmdzKSk7XG4gIH1cbn07XG5cbi8vIE5PUCwgYmVjYXVzZSBwaXBpbmcgdGhlIGZvcm1hdHRlZCBsb2dzIGNhbiBvbmx5IGNhdXNlIHRyb3VibGUuXG5sb2dnZXIucGlwZSA9IGZ1bmN0aW9uKCkgeyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvZ2dlcjtcbiIsInZhciBoZXggPSB7XG4gIGJsYWNrOiAnIzAwMCcsXG4gIHJlZDogJyNjMjM2MjEnLFxuICBncmVlbjogJyMyNWJjMjYnLFxuICB5ZWxsb3c6ICcjYmJiYjAwJyxcbiAgYmx1ZTogICcjNDkyZWUxJyxcbiAgbWFnZW50YTogJyNkMzM4ZDMnLFxuICBjeWFuOiAnIzMzYmJjOCcsXG4gIGdyYXk6ICcjODA4MDgwJyxcbiAgcHVycGxlOiAnIzcwOCdcbn07XG5mdW5jdGlvbiBjb2xvcihmZywgaXNJbnZlcnNlKSB7XG4gIGlmKGlzSW52ZXJzZSkge1xuICAgIHJldHVybiAnY29sb3I6ICNmZmY7IGJhY2tncm91bmQ6ICcraGV4W2ZnXSsnOyc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICdjb2xvcjogJytoZXhbZmddKyc7JztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbG9yO1xuIiwidmFyIE1pbmlsb2cgPSByZXF1aXJlKCcuLi9jb21tb24vbWluaWxvZy5qcycpO1xuXG52YXIgb2xkRW5hYmxlID0gTWluaWxvZy5lbmFibGUsXG4gICAgb2xkRGlzYWJsZSA9IE1pbmlsb2cuZGlzYWJsZSxcbiAgICBpc0Nocm9tZSA9ICh0eXBlb2YgbmF2aWdhdG9yICE9ICd1bmRlZmluZWQnICYmIC9jaHJvbWUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSxcbiAgICBjb25zb2xlID0gcmVxdWlyZSgnLi9jb25zb2xlLmpzJyk7XG5cbi8vIFVzZSBhIG1vcmUgY2FwYWJsZSBsb2dnaW5nIGJhY2tlbmQgaWYgb24gQ2hyb21lXG5NaW5pbG9nLmRlZmF1bHRCYWNrZW5kID0gKGlzQ2hyb21lID8gY29uc29sZS5taW5pbG9nIDogY29uc29sZSk7XG5cbi8vIGFwcGx5IGVuYWJsZSBpbnB1dHMgZnJvbSBsb2NhbFN0b3JhZ2UgYW5kIGZyb20gdGhlIFVSTFxuaWYodHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJykge1xuICB0cnkge1xuICAgIE1pbmlsb2cuZW5hYmxlKEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZVsnbWluaWxvZ1NldHRpbmdzJ10pKTtcbiAgfSBjYXRjaChlKSB7fVxuICBpZih3aW5kb3cubG9jYXRpb24gJiYgd2luZG93LmxvY2F0aW9uLnNlYXJjaCkge1xuICAgIHZhciBtYXRjaCA9IFJlZ0V4cCgnWz8mXW1pbmlsb2c9KFteJl0qKScpLmV4ZWMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgbWF0Y2ggJiYgTWluaWxvZy5lbmFibGUoZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzFdKSk7XG4gIH1cbn1cblxuLy8gTWFrZSBlbmFibGUgYWxzbyBhZGQgdG8gbG9jYWxTdG9yYWdlXG5NaW5pbG9nLmVuYWJsZSA9IGZ1bmN0aW9uKCkge1xuICBvbGRFbmFibGUuY2FsbChNaW5pbG9nLCB0cnVlKTtcbiAgdHJ5IHsgd2luZG93LmxvY2FsU3RvcmFnZVsnbWluaWxvZ1NldHRpbmdzJ10gPSBKU09OLnN0cmluZ2lmeSh0cnVlKTsgfSBjYXRjaChlKSB7fVxuICByZXR1cm4gdGhpcztcbn07XG5cbk1pbmlsb2cuZGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xuICBvbGREaXNhYmxlLmNhbGwoTWluaWxvZyk7XG4gIHRyeSB7IGRlbGV0ZSB3aW5kb3cubG9jYWxTdG9yYWdlLm1pbmlsb2dTZXR0aW5nczsgfSBjYXRjaChlKSB7fVxuICByZXR1cm4gdGhpcztcbn07XG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IE1pbmlsb2c7XG5cbmV4cG9ydHMuYmFja2VuZHMgPSB7XG4gIGFycmF5OiByZXF1aXJlKCcuL2FycmF5LmpzJyksXG4gIGJyb3dzZXI6IE1pbmlsb2cuZGVmYXVsdEJhY2tlbmQsXG4gIGxvY2FsU3RvcmFnZTogcmVxdWlyZSgnLi9sb2NhbHN0b3JhZ2UuanMnKSxcbiAgalF1ZXJ5OiByZXF1aXJlKCcuL2pxdWVyeV9zaW1wbGUuanMnKVxufTtcbiIsInZhciBUcmFuc2Zvcm0gPSByZXF1aXJlKCcuLi9jb21tb24vdHJhbnNmb3JtLmpzJyk7XG5cbnZhciBjaWQgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKS50b1N0cmluZygzNik7XG5cbmZ1bmN0aW9uIEFqYXhMb2dnZXIob3B0aW9ucykge1xuICB0aGlzLnVybCA9IG9wdGlvbnMudXJsIHx8ICcnO1xuICB0aGlzLmNhY2hlID0gW107XG4gIHRoaXMudGltZXIgPSBudWxsO1xuICB0aGlzLmludGVydmFsID0gb3B0aW9ucy5pbnRlcnZhbCB8fCAzMCoxMDAwO1xuICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICB0aGlzLmpRdWVyeSA9IHdpbmRvdy5qUXVlcnk7XG4gIHRoaXMuZXh0cmFzID0ge307XG59XG5cblRyYW5zZm9ybS5taXhpbihBamF4TG9nZ2VyKTtcblxuQWpheExvZ2dlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbihuYW1lLCBsZXZlbCwgYXJncykge1xuICBpZighdGhpcy50aW1lcikgeyB0aGlzLmluaXQoKTsgfVxuICB0aGlzLmNhY2hlLnB1c2goW25hbWUsIGxldmVsXS5jb25jYXQoYXJncykpO1xufTtcblxuQWpheExvZ2dlci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICBpZighdGhpcy5lbmFibGVkIHx8ICF0aGlzLmpRdWVyeSkgcmV0dXJuO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIHZhciBpLCBsb2dzID0gW10sIGFqYXhEYXRhLCB1cmwgPSBzZWxmLnVybDtcbiAgICBpZihzZWxmLmNhY2hlLmxlbmd0aCA9PSAwKSByZXR1cm4gc2VsZi5pbml0KCk7XG4gICAgLy8gVGVzdCBlYWNoIGxvZyBsaW5lIGFuZCBvbmx5IGxvZyB0aGUgb25lcyB0aGF0IGFyZSB2YWxpZCAoZS5nLiBkb24ndCBoYXZlIGNpcmN1bGFyIHJlZmVyZW5jZXMpLlxuICAgIC8vIFNsaWdodCBwZXJmb3JtYW5jZSBoaXQgYnV0IGJlbmVmaXQgaXMgd2UgbG9nIGFsbCB2YWxpZCBsaW5lcy5cbiAgICBmb3IoaSA9IDA7IGkgPCBzZWxmLmNhY2hlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0cnkge1xuICAgICAgICBKU09OLnN0cmluZ2lmeShzZWxmLmNhY2hlW2ldKTtcbiAgICAgICAgbG9ncy5wdXNoKHNlbGYuY2FjaGVbaV0pO1xuICAgICAgfSBjYXRjaChlKSB7IH1cbiAgICB9XG4gICAgaWYoc2VsZi5qUXVlcnkuaXNFbXB0eU9iamVjdChzZWxmLmV4dHJhcykpIHtcbiAgICAgICAgYWpheERhdGEgPSBKU09OLnN0cmluZ2lmeSh7IGxvZ3M6IGxvZ3MgfSk7XG4gICAgICAgIHVybCA9IHNlbGYudXJsICsgJz9jbGllbnRfaWQ9JyArIGNpZDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhamF4RGF0YSA9IEpTT04uc3RyaW5naWZ5KHNlbGYualF1ZXJ5LmV4dGVuZCh7bG9nczogbG9nc30sIHNlbGYuZXh0cmFzKSk7XG4gICAgfVxuXG4gICAgc2VsZi5qUXVlcnkuYWpheCh1cmwsIHtcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgIGRhdGE6IGFqYXhEYXRhLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIHRpbWVvdXQ6IDEwMDAwXG4gICAgfSkuc3VjY2VzcyhmdW5jdGlvbihkYXRhLCBzdGF0dXMsIGpxeGhyKSB7XG4gICAgICBpZihkYXRhLmludGVydmFsKSB7XG4gICAgICAgIHNlbGYuaW50ZXJ2YWwgPSBNYXRoLm1heCgxMDAwLCBkYXRhLmludGVydmFsKTtcbiAgICAgIH1cbiAgICB9KS5lcnJvcihmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYuaW50ZXJ2YWwgPSAzMDAwMDtcbiAgICB9KS5hbHdheXMoZnVuY3Rpb24oKSB7XG4gICAgICBzZWxmLmluaXQoKTtcbiAgICB9KTtcbiAgICBzZWxmLmNhY2hlID0gW107XG4gIH0sIHRoaXMuaW50ZXJ2YWwpO1xufTtcblxuQWpheExvZ2dlci5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24oKSB7fTtcblxuLy8gd2FpdCB1bnRpbCBqUXVlcnkgaXMgZGVmaW5lZC4gVXNlZnVsIGlmIHlvdSBkb24ndCBjb250cm9sIHRoZSBsb2FkIG9yZGVyLlxuQWpheExvZ2dlci5qUXVlcnlXYWl0ID0gZnVuY3Rpb24ob25Eb25lKSB7XG4gIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICh3aW5kb3cualF1ZXJ5IHx8IHdpbmRvdy4kKSkge1xuICAgIHJldHVybiBvbkRvbmUod2luZG93LmpRdWVyeSB8fCB3aW5kb3cuJCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBBamF4TG9nZ2VyLmpRdWVyeVdhaXQob25Eb25lKTsgfSwgMjAwKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBamF4TG9nZ2VyO1xuIiwidmFyIFRyYW5zZm9ybSA9IHJlcXVpcmUoJy4uL2NvbW1vbi90cmFuc2Zvcm0uanMnKSxcbiAgICBjYWNoZSA9IGZhbHNlO1xuXG52YXIgbG9nZ2VyID0gbmV3IFRyYW5zZm9ybSgpO1xuXG5sb2dnZXIud3JpdGUgPSBmdW5jdGlvbihuYW1lLCBsZXZlbCwgYXJncykge1xuICBpZih0eXBlb2Ygd2luZG93ID09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBKU09OID09ICd1bmRlZmluZWQnIHx8ICFKU09OLnN0cmluZ2lmeSB8fCAhSlNPTi5wYXJzZSkgcmV0dXJuO1xuICB0cnkge1xuICAgIGlmKCFjYWNoZSkgeyBjYWNoZSA9ICh3aW5kb3cubG9jYWxTdG9yYWdlLm1pbmlsb2cgPyBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UubWluaWxvZykgOiBbXSk7IH1cbiAgICBjYWNoZS5wdXNoKFsgbmV3IERhdGUoKS50b1N0cmluZygpLCBuYW1lLCBsZXZlbCwgYXJncyBdKTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLm1pbmlsb2cgPSBKU09OLnN0cmluZ2lmeShjYWNoZSk7XG4gIH0gY2F0Y2goZSkge31cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbG9nZ2VyOyIsImNvbnN0IGxvZyA9IHJlcXVpcmUoJy4uL3V0aWwvbG9nJyk7XG5cbi8qKlxuICogQHR5cGVkZWYge29iamVjdH0gRGlzcGF0Y2hDYWxsTWVzc2FnZSAtIGEgbWVzc2FnZSB0byB0aGUgZGlzcGF0Y2ggc3lzdGVtIHJlcHJlc2VudGluZyBhIHNlcnZpY2UgbWV0aG9kIGNhbGxcbiAqIEBwcm9wZXJ0eSB7Kn0gcmVzcG9uc2VJZCAtIHNlbmQgYSByZXNwb25zZSBtZXNzYWdlIHdpdGggdGhpcyByZXNwb25zZSBJRC4gU2VlIHtAbGluayBEaXNwYXRjaFJlc3BvbnNlTWVzc2FnZX1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzZXJ2aWNlIC0gdGhlIG5hbWUgb2YgdGhlIHNlcnZpY2UgdG8gYmUgY2FsbGVkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gdGhlIG5hbWUgb2YgdGhlIG1ldGhvZCB0byBiZSBjYWxsZWRcbiAqIEBwcm9wZXJ0eSB7QXJyYXl8dW5kZWZpbmVkfSBhcmdzIC0gdGhlIGFyZ3VtZW50cyB0byBiZSBwYXNzZWQgdG8gdGhlIG1ldGhvZFxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge29iamVjdH0gRGlzcGF0Y2hSZXNwb25zZU1lc3NhZ2UgLSBhIG1lc3NhZ2UgdG8gdGhlIGRpc3BhdGNoIHN5c3RlbSByZXByZXNlbnRpbmcgdGhlIHJlc3VsdHMgb2YgYSBjYWxsXG4gKiBAcHJvcGVydHkgeyp9IHJlc3BvbnNlSWQgLSBhIGNvcHkgb2YgdGhlIHJlc3BvbnNlIElEIGZyb20gdGhlIGNhbGwgd2hpY2ggZ2VuZXJhdGVkIHRoaXMgcmVzcG9uc2VcbiAqIEBwcm9wZXJ0eSB7Knx1bmRlZmluZWR9IGVycm9yIC0gaWYgdGhpcyBpcyB0cnV0aHksIHRoZW4gaXQgY29udGFpbnMgcmVzdWx0cyBmcm9tIGEgZmFpbGVkIGNhbGwgKHN1Y2ggYXMgYW4gZXhjZXB0aW9uKVxuICogQHByb3BlcnR5IHsqfHVuZGVmaW5lZH0gcmVzdWx0IC0gaWYgZXJyb3IgaXMgbm90IHRydXRoeSwgdGhlbiB0aGlzIGNvbnRhaW5zIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGNhbGwgKGlmIGFueSlcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtEaXNwYXRjaENhbGxNZXNzYWdlfERpc3BhdGNoUmVzcG9uc2VNZXNzYWdlfSBEaXNwYXRjaE1lc3NhZ2VcbiAqIEFueSBtZXNzYWdlIHRvIHRoZSBkaXNwYXRjaCBzeXN0ZW0uXG4gKi9cblxuLyoqXG4gKiBUaGUgU2hhcmVkRGlzcGF0Y2ggY2xhc3MgaXMgcmVzcG9uc2libGUgZm9yIGRpc3BhdGNoIGZlYXR1cmVzIHNoYXJlZCBieVxuICoge0BsaW5rIENlbnRyYWxEaXNwYXRjaH0gYW5kIHtAbGluayBXb3JrZXJEaXNwYXRjaH0uXG4gKi9cbmNsYXNzIFNoYXJlZERpc3BhdGNoIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMaXN0IG9mIGNhbGxiYWNrIHJlZ2lzdHJhdGlvbnMgZm9yIHByb21pc2VzIHdhaXRpbmcgZm9yIGEgcmVzcG9uc2UgZnJvbSBhIGNhbGwgdG8gYSBzZXJ2aWNlIG9uIGFub3RoZXJcbiAgICAgICAgICogd29ya2VyLiBBIGNhbGxiYWNrIHJlZ2lzdHJhdGlvbiBpcyBhbiBhcnJheSBvZiBbcmVzb2x2ZSxyZWplY3RdIFByb21pc2UgZnVuY3Rpb25zLlxuICAgICAgICAgKiBDYWxscyB0byBsb2NhbCBzZXJ2aWNlcyBkb24ndCBlbnRlciB0aGlzIGxpc3QuXG4gICAgICAgICAqIEB0eXBlIHtBcnJheS48RnVuY3Rpb25bXT59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IFtdO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbmV4dCByZXNwb25zZSBJRCB0byBiZSB1c2VkLlxuICAgICAgICAgKiBAdHlwZSB7aW50fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5uZXh0UmVzcG9uc2VJZCA9IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbCBhIHBhcnRpY3VsYXIgbWV0aG9kIG9uIGEgcGFydGljdWxhciBzZXJ2aWNlLCByZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhhdCBzZXJ2aWNlIGlzIHByb3ZpZGVkIGxvY2FsbHkgb3Igb25cbiAgICAgKiBhIHdvcmtlci4gSWYgdGhlIHNlcnZpY2UgaXMgcHJvdmlkZWQgYnkgYSB3b3JrZXIsIHRoZSBgYXJnc2Agd2lsbCBiZSBjb3BpZWQgdXNpbmcgdGhlIFN0cnVjdHVyZWQgQ2xvbmVcbiAgICAgKiBhbGdvcml0aG0sIGV4Y2VwdCBmb3IgYW55IGl0ZW1zIHdoaWNoIGFyZSBhbHNvIGluIHRoZSBgdHJhbnNmZXJgIGxpc3QuIE93bmVyc2hpcCBvZiB0aG9zZSBpdGVtcyB3aWxsIGJlXG4gICAgICogdHJhbnNmZXJyZWQgdG8gdGhlIHdvcmtlciwgYW5kIHRoZXkgc2hvdWxkIG5vdCBiZSB1c2VkIGFmdGVyIHRoaXMgY2FsbC5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAgZGlzcGF0Y2hlci5jYWxsKCd2bScsICdzZXREYXRhJywgJ2NhdCcsIDQyKTtcbiAgICAgKiAgICAgIC8vIHRoaXMgZmluZHMgdGhlIHdvcmtlciBmb3IgdGhlICd2bScgc2VydmljZSwgdGhlbiBvbiB0aGF0IHdvcmtlciBjYWxsczpcbiAgICAgKiAgICAgIHZtLnNldERhdGEoJ2NhdCcsIDQyKTtcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VydmljZSAtIHRoZSBuYW1lIG9mIHRoZSBzZXJ2aWNlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgLSB0aGUgbmFtZSBvZiB0aGUgbWV0aG9kLlxuICAgICAqIEBwYXJhbSB7Kn0gW2FyZ3NdIC0gdGhlIGFyZ3VtZW50cyB0byBiZSBjb3BpZWQgdG8gdGhlIG1ldGhvZCwgaWYgYW55LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfSAtIGEgcHJvbWlzZSBmb3IgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgc2VydmljZSBtZXRob2QuXG4gICAgICovXG4gICAgY2FsbCAoc2VydmljZSwgbWV0aG9kLCAuLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zZmVyQ2FsbChzZXJ2aWNlLCBtZXRob2QsIG51bGwsIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGwgYSBwYXJ0aWN1bGFyIG1ldGhvZCBvbiBhIHBhcnRpY3VsYXIgc2VydmljZSwgcmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoYXQgc2VydmljZSBpcyBwcm92aWRlZCBsb2NhbGx5IG9yIG9uXG4gICAgICogYSB3b3JrZXIuIElmIHRoZSBzZXJ2aWNlIGlzIHByb3ZpZGVkIGJ5IGEgd29ya2VyLCB0aGUgYGFyZ3NgIHdpbGwgYmUgY29waWVkIHVzaW5nIHRoZSBTdHJ1Y3R1cmVkIENsb25lXG4gICAgICogYWxnb3JpdGhtLCBleGNlcHQgZm9yIGFueSBpdGVtcyB3aGljaCBhcmUgYWxzbyBpbiB0aGUgYHRyYW5zZmVyYCBsaXN0LiBPd25lcnNoaXAgb2YgdGhvc2UgaXRlbXMgd2lsbCBiZVxuICAgICAqIHRyYW5zZmVycmVkIHRvIHRoZSB3b3JrZXIsIGFuZCB0aGV5IHNob3VsZCBub3QgYmUgdXNlZCBhZnRlciB0aGlzIGNhbGwuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIGRpc3BhdGNoZXIudHJhbnNmZXJDYWxsKCd2bScsICdzZXREYXRhJywgW215QXJyYXlCdWZmZXJdLCAnY2F0JywgbXlBcnJheUJ1ZmZlcik7XG4gICAgICogICAgICAvLyB0aGlzIGZpbmRzIHRoZSB3b3JrZXIgZm9yIHRoZSAndm0nIHNlcnZpY2UsIHRyYW5zZmVycyBgbXlBcnJheUJ1ZmZlcmAgdG8gaXQsIHRoZW4gb24gdGhhdCB3b3JrZXIgY2FsbHM6XG4gICAgICogICAgICB2bS5zZXREYXRhKCdjYXQnLCBteUFycmF5QnVmZmVyKTtcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VydmljZSAtIHRoZSBuYW1lIG9mIHRoZSBzZXJ2aWNlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgLSB0aGUgbmFtZSBvZiB0aGUgbWV0aG9kLlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IFt0cmFuc2Zlcl0gLSBvYmplY3RzIHRvIGJlIHRyYW5zZmVycmVkIGluc3RlYWQgb2YgY29waWVkLiBNdXN0IGJlIHByZXNlbnQgaW4gYGFyZ3NgIHRvIGJlIHVzZWZ1bC5cbiAgICAgKiBAcGFyYW0geyp9IFthcmdzXSAtIHRoZSBhcmd1bWVudHMgdG8gYmUgY29waWVkIHRvIHRoZSBtZXRob2QsIGlmIGFueS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gLSBhIHByb21pc2UgZm9yIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIHNlcnZpY2UgbWV0aG9kLlxuICAgICAqL1xuICAgIHRyYW5zZmVyQ2FsbCAoc2VydmljZSwgbWV0aG9kLCB0cmFuc2ZlciwgLi4uYXJncykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qge3Byb3ZpZGVyLCBpc1JlbW90ZX0gPSB0aGlzLl9nZXRTZXJ2aWNlUHJvdmlkZXIoc2VydmljZSk7XG4gICAgICAgICAgICBpZiAocHJvdmlkZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNSZW1vdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbW90ZVRyYW5zZmVyQ2FsbChwcm92aWRlciwgc2VydmljZSwgbWV0aG9kLCB0cmFuc2ZlciwgLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcHJvdmlkZXJbbWV0aG9kXS5hcHBseShwcm92aWRlciwgYXJncyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihgU2VydmljZSBub3QgZm91bmQ6ICR7c2VydmljZX1gKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGEgcGFydGljdWxhciBzZXJ2aWNlIGxpdmVzIG9uIGFub3RoZXIgd29ya2VyLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZXJ2aWNlIC0gdGhlIHNlcnZpY2UgdG8gY2hlY2suXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IC0gdHJ1ZSBpZiB0aGUgc2VydmljZSBpcyByZW1vdGUgKGNhbGxzIG11c3QgY3Jvc3MgYSBXb3JrZXIgYm91bmRhcnkpLCBmYWxzZSBvdGhlcndpc2UuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfaXNSZW1vdGVTZXJ2aWNlIChzZXJ2aWNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRTZXJ2aWNlUHJvdmlkZXIoc2VydmljZSkuaXNSZW1vdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGlrZSB7QGxpbmsgY2FsbH0sIGJ1dCBmb3JjZSB0aGUgY2FsbCB0byBiZSBwb3N0ZWQgdGhyb3VnaCBhIHBhcnRpY3VsYXIgY29tbXVuaWNhdGlvbiBjaGFubmVsLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm92aWRlciAtIHNlbmQgdGhlIGNhbGwgdGhyb3VnaCB0aGlzIG9iamVjdCdzIGBwb3N0TWVzc2FnZWAgZnVuY3Rpb24uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlcnZpY2UgLSB0aGUgbmFtZSBvZiB0aGUgc2VydmljZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIC0gdGhlIG5hbWUgb2YgdGhlIG1ldGhvZC5cbiAgICAgKiBAcGFyYW0geyp9IFthcmdzXSAtIHRoZSBhcmd1bWVudHMgdG8gYmUgY29waWVkIHRvIHRoZSBtZXRob2QsIGlmIGFueS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gLSBhIHByb21pc2UgZm9yIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIHNlcnZpY2UgbWV0aG9kLlxuICAgICAqL1xuICAgIF9yZW1vdGVDYWxsIChwcm92aWRlciwgc2VydmljZSwgbWV0aG9kLCAuLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZW1vdGVUcmFuc2ZlckNhbGwocHJvdmlkZXIsIHNlcnZpY2UsIG1ldGhvZCwgbnVsbCwgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGlrZSB7QGxpbmsgdHJhbnNmZXJDYWxsfSwgYnV0IGZvcmNlIHRoZSBjYWxsIHRvIGJlIHBvc3RlZCB0aHJvdWdoIGEgcGFydGljdWxhciBjb21tdW5pY2F0aW9uIGNoYW5uZWwuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHByb3ZpZGVyIC0gc2VuZCB0aGUgY2FsbCB0aHJvdWdoIHRoaXMgb2JqZWN0J3MgYHBvc3RNZXNzYWdlYCBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VydmljZSAtIHRoZSBuYW1lIG9mIHRoZSBzZXJ2aWNlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgLSB0aGUgbmFtZSBvZiB0aGUgbWV0aG9kLlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IFt0cmFuc2Zlcl0gLSBvYmplY3RzIHRvIGJlIHRyYW5zZmVycmVkIGluc3RlYWQgb2YgY29waWVkLiBNdXN0IGJlIHByZXNlbnQgaW4gYGFyZ3NgIHRvIGJlIHVzZWZ1bC5cbiAgICAgKiBAcGFyYW0geyp9IFthcmdzXSAtIHRoZSBhcmd1bWVudHMgdG8gYmUgY29waWVkIHRvIHRoZSBtZXRob2QsIGlmIGFueS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gLSBhIHByb21pc2UgZm9yIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIHNlcnZpY2UgbWV0aG9kLlxuICAgICAqL1xuICAgIF9yZW1vdGVUcmFuc2ZlckNhbGwgKHByb3ZpZGVyLCBzZXJ2aWNlLCBtZXRob2QsIHRyYW5zZmVyLCAuLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZUlkID0gdGhpcy5fc3RvcmVDYWxsYmFja3MocmVzb2x2ZSwgcmVqZWN0KTtcblxuICAgICAgICAgICAgLyoqIEBUT0RPOiByZW1vdmUgdGhpcyBoYWNrISB0aGlzIGlzIGp1c3QgaGVyZSBzbyB3ZSBkb24ndCB0cnkgdG8gc2VuZCBgdXRpbGAgdG8gYSB3b3JrZXIgKi9cbiAgICAgICAgICAgIGlmICgoYXJncy5sZW5ndGggPiAwKSAmJiAodHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXS55aWVsZCA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgICAgICAgICBhcmdzLnBvcCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHJhbnNmZXIpIHtcbiAgICAgICAgICAgICAgICBwcm92aWRlci5wb3N0TWVzc2FnZSh7c2VydmljZSwgbWV0aG9kLCByZXNwb25zZUlkLCBhcmdzfSwgdHJhbnNmZXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm92aWRlci5wb3N0TWVzc2FnZSh7c2VydmljZSwgbWV0aG9kLCByZXNwb25zZUlkLCBhcmdzfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3JlIGNhbGxiYWNrIGZ1bmN0aW9ucyBwZW5kaW5nIGEgcmVzcG9uc2UgbWVzc2FnZS5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIC0gZnVuY3Rpb24gdG8gY2FsbCBpZiB0aGUgc2VydmljZSBtZXRob2QgcmV0dXJucy5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgLSBmdW5jdGlvbiB0byBjYWxsIGlmIHRoZSBzZXJ2aWNlIG1ldGhvZCB0aHJvd3MuXG4gICAgICogQHJldHVybnMgeyp9IC0gYSB1bmlxdWUgcmVzcG9uc2UgSUQgZm9yIHRoaXMgc2V0IG9mIGNhbGxiYWNrcy4gU2VlIHtAbGluayBfZGVsaXZlclJlc3BvbnNlfS5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgX3N0b3JlQ2FsbGJhY2tzIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VJZCA9IHRoaXMubmV4dFJlc3BvbnNlSWQrKztcbiAgICAgICAgdGhpcy5jYWxsYmFja3NbcmVzcG9uc2VJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlSWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsaXZlciBjYWxsIHJlc3BvbnNlIGZyb20gYSB3b3JrZXIuIFRoaXMgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIGFzIHRoZSByZXN1bHQgb2YgYSBtZXNzYWdlIGZyb20gYSB3b3JrZXIuXG4gICAgICogQHBhcmFtIHtpbnR9IHJlc3BvbnNlSWQgLSB0aGUgcmVzcG9uc2UgSUQgb2YgdGhlIGNhbGxiYWNrIHNldCB0byBjYWxsLlxuICAgICAqIEBwYXJhbSB7RGlzcGF0Y2hSZXNwb25zZU1lc3NhZ2V9IG1lc3NhZ2UgLSB0aGUgbWVzc2FnZSBjb250YWluaW5nIHRoZSByZXNwb25zZSB2YWx1ZShzKS5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgX2RlbGl2ZXJSZXNwb25zZSAocmVzcG9uc2VJZCwgbWVzc2FnZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgW3Jlc29sdmUsIHJlamVjdF0gPSB0aGlzLmNhbGxiYWNrc1tyZXNwb25zZUlkXTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmNhbGxiYWNrc1tyZXNwb25zZUlkXTtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG1lc3NhZ2UuZXJyb3IpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG1lc3NhZ2UucmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgbG9nLmVycm9yKGBEaXNwYXRjaCBjYWxsYmFjayBmYWlsZWQ6ICR7SlNPTi5zdHJpbmdpZnkoZSl9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgYSBtZXNzYWdlIGV2ZW50IHJlY2VpdmVkIGZyb20gYSBjb25uZWN0ZWQgd29ya2VyLlxuICAgICAqIEBwYXJhbSB7V29ya2VyfSB3b3JrZXIgLSB0aGUgd29ya2VyIHdoaWNoIHNlbnQgdGhlIG1lc3NhZ2UsIG9yIHRoZSBnbG9iYWwgb2JqZWN0IGlmIHJ1bm5pbmcgaW4gYSB3b3JrZXIuXG4gICAgICogQHBhcmFtIHtNZXNzYWdlRXZlbnR9IGV2ZW50IC0gdGhlIG1lc3NhZ2UgZXZlbnQgdG8gYmUgaGFuZGxlZC5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgX29uTWVzc2FnZSAod29ya2VyLCBldmVudCkge1xuICAgICAgICAvKiogQHR5cGUge0Rpc3BhdGNoTWVzc2FnZX0gKi9cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgIG1lc3NhZ2UuYXJncyA9IG1lc3NhZ2UuYXJncyB8fCBbXTtcbiAgICAgICAgbGV0IHByb21pc2U7XG4gICAgICAgIGlmIChtZXNzYWdlLnNlcnZpY2UpIHtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlLnNlcnZpY2UgPT09ICdkaXNwYXRjaCcpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gdGhpcy5fb25EaXNwYXRjaE1lc3NhZ2Uod29ya2VyLCBtZXNzYWdlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZSA9IHRoaXMuY2FsbChtZXNzYWdlLnNlcnZpY2UsIG1lc3NhZ2UubWV0aG9kLCAuLi5tZXNzYWdlLmFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtZXNzYWdlLnJlc3BvbnNlSWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBsb2cuZXJyb3IoYERpc3BhdGNoIGNhdWdodCBtYWxmb3JtZWQgbWVzc2FnZSBmcm9tIGEgd29ya2VyOiAke0pTT04uc3RyaW5naWZ5KGV2ZW50KX1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2RlbGl2ZXJSZXNwb25zZShtZXNzYWdlLnJlc3BvbnNlSWQsIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9taXNlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UucmVzcG9uc2VJZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBsb2cuZXJyb3IoYERpc3BhdGNoIG1lc3NhZ2UgbWlzc2luZyByZXF1aXJlZCByZXNwb25zZSBJRDogJHtKU09OLnN0cmluZ2lmeShldmVudCl9YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb21pc2UudGhlbihcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0+IHdvcmtlci5wb3N0TWVzc2FnZSh7cmVzcG9uc2VJZDogbWVzc2FnZS5yZXNwb25zZUlkLCByZXN1bHR9KSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gd29ya2VyLnBvc3RNZXNzYWdlKHtyZXNwb25zZUlkOiBtZXNzYWdlLnJlc3BvbnNlSWQsIGVycm9yfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmV0Y2ggdGhlIHNlcnZpY2UgcHJvdmlkZXIgb2JqZWN0IGZvciBhIHBhcnRpY3VsYXIgc2VydmljZSBuYW1lLlxuICAgICAqIEBhYnN0cmFjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZXJ2aWNlIC0gdGhlIG5hbWUgb2YgdGhlIHNlcnZpY2UgdG8gbG9vayB1cFxuICAgICAqIEByZXR1cm5zIHt7cHJvdmlkZXI6KG9iamVjdHxXb3JrZXIpLCBpc1JlbW90ZTpib29sZWFufX0gLSB0aGUgbWVhbnMgdG8gY29udGFjdCB0aGUgc2VydmljZSwgaWYgZm91bmRcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgX2dldFNlcnZpY2VQcm92aWRlciAoc2VydmljZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBnZXQgcHJvdmlkZXIgZm9yICR7c2VydmljZX06IF9nZXRTZXJ2aWNlUHJvdmlkZXIgbm90IGltcGxlbWVudGVkYCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGEgY2FsbCBtZXNzYWdlIHNlbnQgdG8gdGhlIGRpc3BhdGNoIHNlcnZpY2UgaXRzZWxmXG4gICAgICogQGFic3RyYWN0XG4gICAgICogQHBhcmFtIHtXb3JrZXJ9IHdvcmtlciAtIHRoZSB3b3JrZXIgd2hpY2ggc2VudCB0aGUgbWVzc2FnZS5cbiAgICAgKiBAcGFyYW0ge0Rpc3BhdGNoQ2FsbE1lc3NhZ2V9IG1lc3NhZ2UgLSB0aGUgbWVzc2FnZSB0byBiZSBoYW5kbGVkLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfHVuZGVmaW5lZH0gLSBhIHByb21pc2UgZm9yIHRoZSByZXN1bHRzIG9mIHRoaXMgb3BlcmF0aW9uLCBpZiBhcHByb3ByaWF0ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX29uRGlzcGF0Y2hNZXNzYWdlICh3b3JrZXIsIG1lc3NhZ2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmltcGxlbWVudGVkIGRpc3BhdGNoIG1lc3NhZ2UgaGFuZGxlciBjYW5ub3QgaGFuZGxlICR7bWVzc2FnZS5tZXRob2R9IG1ldGhvZGApO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaGFyZWREaXNwYXRjaDtcbiIsImNvbnN0IFNoYXJlZERpc3BhdGNoID0gcmVxdWlyZSgnLi9zaGFyZWQtZGlzcGF0Y2gnKTtcblxuY29uc3QgbG9nID0gcmVxdWlyZSgnLi4vdXRpbC9sb2cnKTtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHByb3ZpZGVzIGEgV29ya2VyIHdpdGggdGhlIG1lYW5zIHRvIHBhcnRpY2lwYXRlIGluIHRoZSBtZXNzYWdlIGRpc3BhdGNoIHN5c3RlbSBtYW5hZ2VkIGJ5IENlbnRyYWxEaXNwYXRjaC5cbiAqIEZyb20gYW55IGNvbnRleHQgaW4gdGhlIG1lc3NhZ2luZyBzeXN0ZW0sIHRoZSBkaXNwYXRjaGVyJ3MgXCJjYWxsXCIgbWV0aG9kIGNhbiBjYWxsIGFueSBtZXRob2Qgb24gYW55IFwic2VydmljZVwiXG4gKiBwcm92aWRlZCBpbiBhbnkgcGFydGljaXBhdGluZyBjb250ZXh0LiBUaGUgZGlzcGF0Y2ggc3lzdGVtIHdpbGwgZm9yd2FyZCBmdW5jdGlvbiBhcmd1bWVudHMgYW5kIHJldHVybiB2YWx1ZXMgYWNyb3NzXG4gKiB3b3JrZXIgYm91bmRhcmllcyBhcyBuZWVkZWQuXG4gKiBAc2VlIHtDZW50cmFsRGlzcGF0Y2h9XG4gKi9cbmNsYXNzIFdvcmtlckRpc3BhdGNoIGV4dGVuZHMgU2hhcmVkRGlzcGF0Y2gge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBwcm9taXNlIHdpbGwgYmUgcmVzb2x2ZWQgd2hlbiB3ZSBoYXZlIHN1Y2Nlc3NmdWxseSBjb25uZWN0ZWQgdG8gY2VudHJhbCBkaXNwYXRjaC5cbiAgICAgICAgICogQHR5cGUge1Byb21pc2V9XG4gICAgICAgICAqIEBzZWUge3dhaXRGb3JDb25uZWN0aW9ufVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fY29ubmVjdGlvblByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHRoaXMuX29uQ29ubmVjdCA9IHJlc29sdmU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYXAgb2Ygc2VydmljZSBuYW1lIHRvIGxvY2FsIHNlcnZpY2UgcHJvdmlkZXIuXG4gICAgICAgICAqIElmIGEgc2VydmljZSBpcyBub3QgbGlzdGVkIGhlcmUsIGl0IGlzIGFzc3VtZWQgdG8gYmUgcHJvdmlkZWQgYnkgYW5vdGhlciBjb250ZXh0IChhbm90aGVyIFdvcmtlciBvciB0aGUgbWFpblxuICAgICAgICAgKiB0aHJlYWQpLlxuICAgICAgICAgKiBAc2VlIHtzZXRTZXJ2aWNlfVxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zZXJ2aWNlcyA9IHt9O1xuXG4gICAgICAgIHRoaXMuX29uTWVzc2FnZSA9IHRoaXMuX29uTWVzc2FnZS5iaW5kKHRoaXMsIHNlbGYpO1xuICAgICAgICBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBzZWxmLm9ubWVzc2FnZSA9IHRoaXMuX29uTWVzc2FnZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfSBhIHByb21pc2Ugd2hpY2ggd2lsbCByZXNvbHZlIHVwb24gY29ubmVjdGlvbiB0byBjZW50cmFsIGRpc3BhdGNoLiBJZiB5b3UgbmVlZCB0byBtYWtlIGEgY2FsbFxuICAgICAqIGltbWVkaWF0ZWx5IG9uIFwic3RhcnR1cFwiIHlvdSBjYW4gYXR0YWNoIGEgJ3RoZW4nIHRvIHRoaXMgcHJvbWlzZS5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAgZGlzcGF0Y2gud2FpdEZvckNvbm5lY3Rpb24udGhlbigoKSA9PiB7XG4gICAgICogICAgICAgICAgZGlzcGF0Y2guY2FsbCgnbXlTZXJ2aWNlJywgJ2hlbGxvJyk7XG4gICAgICogICAgICB9KVxuICAgICAqL1xuICAgIGdldCB3YWl0Rm9yQ29ubmVjdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW9uUHJvbWlzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgYSBsb2NhbCBvYmplY3QgYXMgdGhlIGdsb2JhbCBwcm92aWRlciBvZiB0aGUgc3BlY2lmaWVkIHNlcnZpY2UuXG4gICAgICogV0FSTklORzogQW55IG1ldGhvZCBvbiB0aGUgcHJvdmlkZXIgY2FuIGJlIGNhbGxlZCBmcm9tIGFueSB3b3JrZXIgd2l0aGluIHRoZSBkaXNwYXRjaCBzeXN0ZW0uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlcnZpY2UgLSBhIGdsb2JhbGx5IHVuaXF1ZSBzdHJpbmcgaWRlbnRpZnlpbmcgdGhpcyBzZXJ2aWNlLiBFeGFtcGxlczogJ3ZtJywgJ2d1aScsICdleHRlbnNpb245Jy5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcHJvdmlkZXIgLSBhIGxvY2FsIG9iamVjdCB3aGljaCBwcm92aWRlcyB0aGlzIHNlcnZpY2UuXG4gICAgICogQHJldHVybnMge1Byb21pc2V9IC0gYSBwcm9taXNlIHdoaWNoIHdpbGwgcmVzb2x2ZSBvbmNlIHRoZSBzZXJ2aWNlIGlzIHJlZ2lzdGVyZWQuXG4gICAgICovXG4gICAgc2V0U2VydmljZSAoc2VydmljZSwgcHJvdmlkZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VydmljZXMuaGFzT3duUHJvcGVydHkoc2VydmljZSkpIHtcbiAgICAgICAgICAgIGxvZy53YXJuKGBXb3JrZXIgZGlzcGF0Y2ggcmVwbGFjaW5nIGV4aXN0aW5nIHNlcnZpY2UgcHJvdmlkZXIgZm9yICR7c2VydmljZX1gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlcnZpY2VzW3NlcnZpY2VdID0gcHJvdmlkZXI7XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JDb25uZWN0aW9uLnRoZW4oKCkgPT4gdGhpcy5fcmVtb3RlQ2FsbChzZWxmLCAnZGlzcGF0Y2gnLCAnc2V0U2VydmljZScsIHNlcnZpY2UpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGZXRjaCB0aGUgc2VydmljZSBwcm92aWRlciBvYmplY3QgZm9yIGEgcGFydGljdWxhciBzZXJ2aWNlIG5hbWUuXG4gICAgICogQG92ZXJyaWRlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlcnZpY2UgLSB0aGUgbmFtZSBvZiB0aGUgc2VydmljZSB0byBsb29rIHVwXG4gICAgICogQHJldHVybnMge3twcm92aWRlcjoob2JqZWN0fFdvcmtlciksIGlzUmVtb3RlOmJvb2xlYW59fSAtIHRoZSBtZWFucyB0byBjb250YWN0IHRoZSBzZXJ2aWNlLCBpZiBmb3VuZFxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBfZ2V0U2VydmljZVByb3ZpZGVyIChzZXJ2aWNlKSB7XG4gICAgICAgIC8vIGlmIHdlIGRvbid0IGhhdmUgYSBsb2NhbCBzZXJ2aWNlIGJ5IHRoaXMgbmFtZSwgY29udGFjdCBjZW50cmFsIGRpc3BhdGNoIGJ5IGNhbGxpbmcgYHBvc3RNZXNzYWdlYCBvbiBzZWxmXG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gdGhpcy5zZXJ2aWNlc1tzZXJ2aWNlXTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb3ZpZGVyOiBwcm92aWRlciB8fCBzZWxmLFxuICAgICAgICAgICAgaXNSZW1vdGU6ICFwcm92aWRlclxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBhIGNhbGwgbWVzc2FnZSBzZW50IHRvIHRoZSBkaXNwYXRjaCBzZXJ2aWNlIGl0c2VsZlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqIEBwYXJhbSB7V29ya2VyfSB3b3JrZXIgLSB0aGUgd29ya2VyIHdoaWNoIHNlbnQgdGhlIG1lc3NhZ2UuXG4gICAgICogQHBhcmFtIHtEaXNwYXRjaENhbGxNZXNzYWdlfSBtZXNzYWdlIC0gdGhlIG1lc3NhZ2UgdG8gYmUgaGFuZGxlZC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZXx1bmRlZmluZWR9IC0gYSBwcm9taXNlIGZvciB0aGUgcmVzdWx0cyBvZiB0aGlzIG9wZXJhdGlvbiwgaWYgYXBwcm9wcmlhdGVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgX29uRGlzcGF0Y2hNZXNzYWdlICh3b3JrZXIsIG1lc3NhZ2UpIHtcbiAgICAgICAgbGV0IHByb21pc2U7XG4gICAgICAgIHN3aXRjaCAobWVzc2FnZS5tZXRob2QpIHtcbiAgICAgICAgY2FzZSAnaGFuZHNoYWtlJzpcbiAgICAgICAgICAgIHByb21pc2UgPSB0aGlzLl9vbkNvbm5lY3QoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0ZXJtaW5hdGUnOlxuICAgICAgICAgICAgLy8gRG9uJ3QgY2xvc2UgdW50aWwgbmV4dCB0aWNrLCBhZnRlciBzZW5kaW5nIGNvbmZpcm1hdGlvbiBiYWNrXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNlbGYuY2xvc2UoKSwgMCk7XG4gICAgICAgICAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGxvZy5lcnJvcihgV29ya2VyIGRpc3BhdGNoIHJlY2VpdmVkIG1lc3NhZ2UgZm9yIHVua25vd24gbWV0aG9kOiAke21lc3NhZ2UubWV0aG9kfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgV29ya2VyRGlzcGF0Y2goKTtcbiIsIi8qKlxuICogQmxvY2sgYXJndW1lbnQgdHlwZXNcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbmNvbnN0IEFyZ3VtZW50VHlwZSA9IHtcbiAgICAvKipcbiAgICAgKiBOdW1lcmljIHZhbHVlIHdpdGggYW5nbGUgcGlja2VyXG4gICAgICovXG4gICAgQU5HTEU6ICdhbmdsZScsXG5cbiAgICAvKipcbiAgICAgKiBCb29sZWFuIHZhbHVlIHdpdGggaGV4YWdvbmFsIHBsYWNlaG9sZGVyXG4gICAgICovXG4gICAgQk9PTEVBTjogJ0Jvb2xlYW4nLFxuXG4gICAgLyoqXG4gICAgICogTnVtZXJpYyB2YWx1ZSB3aXRoIGNvbG9yIHBpY2tlclxuICAgICAqL1xuICAgIENPTE9SOiAnY29sb3InLFxuXG4gICAgLyoqXG4gICAgICogTnVtZXJpYyB2YWx1ZSB3aXRoIHRleHQgZmllbGRcbiAgICAgKi9cbiAgICBOVU1CRVI6ICdudW1iZXInLFxuXG4gICAgLyoqXG4gICAgICogU3RyaW5nIHZhbHVlIHdpdGggdGV4dCBmaWVsZFxuICAgICAqL1xuICAgIFNUUklORzogJ3N0cmluZycsXG5cbiAgICAvKipcbiAgICAgKiBTdHJpbmcgdmFsdWUgd2l0aCBtYXRyaXggZmllbGRcbiAgICAgKi9cbiAgICBNQVRSSVg6ICdtYXRyaXgnLFxuXG4gICAgLyoqXG4gICAgICogTUlESSBub3RlIG51bWJlciB3aXRoIG5vdGUgcGlja2VyIChwaWFubykgZmllbGRcbiAgICAgKi9cbiAgICBOT1RFOiAnbm90ZSdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXJndW1lbnRUeXBlO1xuIiwiLyoqXG4gKiBUeXBlcyBvZiBibG9ja1xuICogQGVudW0ge3N0cmluZ31cbiAqL1xuY29uc3QgQmxvY2tUeXBlID0ge1xuICAgIC8qKlxuICAgICAqIEJvb2xlYW4gcmVwb3J0ZXIgd2l0aCBoZXhhZ29uYWwgc2hhcGVcbiAgICAgKi9cbiAgICBCT09MRUFOOiAnQm9vbGVhbicsXG5cbiAgICAvKipcbiAgICAgKiBDb21tYW5kIGJsb2NrXG4gICAgICovXG4gICAgQ09NTUFORDogJ2NvbW1hbmQnLFxuXG4gICAgLyoqXG4gICAgICogU3BlY2lhbGl6ZWQgY29tbWFuZCBibG9jayB3aGljaCBtYXkgb3IgbWF5IG5vdCBydW4gYSBjaGlsZCBicmFuY2hcbiAgICAgKiBUaGUgdGhyZWFkIGNvbnRpbnVlcyB3aXRoIHRoZSBuZXh0IGJsb2NrIHdoZXRoZXIgb3Igbm90IGEgY2hpbGQgYnJhbmNoIHJhbi5cbiAgICAgKi9cbiAgICBDT05ESVRJT05BTDogJ2NvbmRpdGlvbmFsJyxcblxuICAgIC8qKlxuICAgICAqIFNwZWNpYWxpemVkIGhhdCBibG9jayB3aXRoIG5vIGltcGxlbWVudGF0aW9uIGZ1bmN0aW9uXG4gICAgICogVGhpcyBzdGFjayBvbmx5IHJ1bnMgaWYgdGhlIGNvcnJlc3BvbmRpbmcgZXZlbnQgaXMgZW1pdHRlZCBieSBvdGhlciBjb2RlLlxuICAgICAqL1xuICAgIEVWRU5UOiAnZXZlbnQnLFxuXG4gICAgLyoqXG4gICAgICogSGF0IGJsb2NrIHdoaWNoIGNvbmRpdGlvbmFsbHkgc3RhcnRzIGEgYmxvY2sgc3RhY2tcbiAgICAgKi9cbiAgICBIQVQ6ICdoYXQnLFxuXG4gICAgLyoqXG4gICAgICogU3BlY2lhbGl6ZWQgY29tbWFuZCBibG9jayB3aGljaCBtYXkgb3IgbWF5IG5vdCBydW4gYSBjaGlsZCBicmFuY2hcbiAgICAgKiBJZiBhIGNoaWxkIGJyYW5jaCBydW5zLCB0aGUgdGhyZWFkIGV2YWx1YXRlcyB0aGUgbG9vcCBibG9jayBhZ2Fpbi5cbiAgICAgKi9cbiAgICBMT09QOiAnbG9vcCcsXG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmFsIHJlcG9ydGVyIHdpdGggbnVtZXJpYyBvciBzdHJpbmcgdmFsdWVcbiAgICAgKi9cbiAgICBSRVBPUlRFUjogJ3JlcG9ydGVyJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCbG9ja1R5cGU7XG4iLCIvKipcbiAqIERlZmF1bHQgdHlwZXMgb2YgVGFyZ2V0IHN1cHBvcnRlZCBieSB0aGUgVk1cbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbmNvbnN0IFRhcmdldFR5cGUgPSB7XG4gICAgLyoqXG4gICAgICogUmVuZGVyZWQgdGFyZ2V0IHdoaWNoIGNhbiBtb3ZlLCBjaGFuZ2UgY29zdHVtZXMsIGV0Yy5cbiAgICAgKi9cbiAgICBTUFJJVEU6ICdzcHJpdGUnLFxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyZWQgdGFyZ2V0IHdoaWNoIGNhbm5vdCBtb3ZlIGJ1dCBjYW4gY2hhbmdlIGJhY2tkcm9wc1xuICAgICAqL1xuICAgIFNUQUdFOiAnc3RhZ2UnXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRhcmdldFR5cGU7XG4iLCJjb25zdCBtaW5pbG9nID0gcmVxdWlyZSgnbWluaWxvZycpO1xubWluaWxvZy5lbmFibGUoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBtaW5pbG9nKCd2bScpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==