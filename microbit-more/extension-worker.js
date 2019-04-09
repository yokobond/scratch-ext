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
   * A button (not an actual block) for some special action, like making a variable
   */
  BUTTON: 'button',

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HVUkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vR1VJLy4vbm9kZV9tb2R1bGVzL3NjcmF0Y2gtdm0vc3JjL2V4dGVuc2lvbi1zdXBwb3J0L2V4dGVuc2lvbi13b3JrZXIuanMiLCJ3ZWJwYWNrOi8vR1VJLy4vbm9kZV9tb2R1bGVzL3NjcmF0Y2gtdm0vbm9kZV9tb2R1bGVzL21pY3JvZWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vR1VJLy4vbm9kZV9tb2R1bGVzL3NjcmF0Y2gtdm0vbm9kZV9tb2R1bGVzL21pbmlsb2cvbGliL2NvbW1vbi9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vR1VJLy4vbm9kZV9tb2R1bGVzL3NjcmF0Y2gtdm0vbm9kZV9tb2R1bGVzL21pbmlsb2cvbGliL2NvbW1vbi9taW5pbG9nLmpzIiwid2VicGFjazovL0dVSS8uL25vZGVfbW9kdWxlcy9zY3JhdGNoLXZtL25vZGVfbW9kdWxlcy9taW5pbG9nL2xpYi9jb21tb24vdHJhbnNmb3JtLmpzIiwid2VicGFjazovL0dVSS8uL25vZGVfbW9kdWxlcy9zY3JhdGNoLXZtL25vZGVfbW9kdWxlcy9taW5pbG9nL2xpYi93ZWIvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vR1VJLy4vbm9kZV9tb2R1bGVzL3NjcmF0Y2gtdm0vbm9kZV9tb2R1bGVzL21pbmlsb2cvbGliL3dlYi9jb25zb2xlLmpzIiwid2VicGFjazovL0dVSS8uL25vZGVfbW9kdWxlcy9zY3JhdGNoLXZtL25vZGVfbW9kdWxlcy9taW5pbG9nL2xpYi93ZWIvZm9ybWF0dGVycy9jb2xvci5qcyIsIndlYnBhY2s6Ly9HVUkvLi9ub2RlX21vZHVsZXMvc2NyYXRjaC12bS9ub2RlX21vZHVsZXMvbWluaWxvZy9saWIvd2ViL2Zvcm1hdHRlcnMvbWluaWxvZy5qcyIsIndlYnBhY2s6Ly9HVUkvLi9ub2RlX21vZHVsZXMvc2NyYXRjaC12bS9ub2RlX21vZHVsZXMvbWluaWxvZy9saWIvd2ViL2Zvcm1hdHRlcnMvdXRpbC5qcyIsIndlYnBhY2s6Ly9HVUkvLi9ub2RlX21vZHVsZXMvc2NyYXRjaC12bS9ub2RlX21vZHVsZXMvbWluaWxvZy9saWIvd2ViL2luZGV4LmpzIiwid2VicGFjazovL0dVSS8uL25vZGVfbW9kdWxlcy9zY3JhdGNoLXZtL25vZGVfbW9kdWxlcy9taW5pbG9nL2xpYi93ZWIvanF1ZXJ5X3NpbXBsZS5qcyIsIndlYnBhY2s6Ly9HVUkvLi9ub2RlX21vZHVsZXMvc2NyYXRjaC12bS9ub2RlX21vZHVsZXMvbWluaWxvZy9saWIvd2ViL2xvY2Fsc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9HVUkvLi9ub2RlX21vZHVsZXMvc2NyYXRjaC12bS9zcmMvZGlzcGF0Y2gvc2hhcmVkLWRpc3BhdGNoLmpzIiwid2VicGFjazovL0dVSS8uL25vZGVfbW9kdWxlcy9zY3JhdGNoLXZtL3NyYy9kaXNwYXRjaC93b3JrZXItZGlzcGF0Y2guanMiLCJ3ZWJwYWNrOi8vR1VJLy4vbm9kZV9tb2R1bGVzL3NjcmF0Y2gtdm0vc3JjL2V4dGVuc2lvbi1zdXBwb3J0L2FyZ3VtZW50LXR5cGUuanMiLCJ3ZWJwYWNrOi8vR1VJLy4vbm9kZV9tb2R1bGVzL3NjcmF0Y2gtdm0vc3JjL2V4dGVuc2lvbi1zdXBwb3J0L2Jsb2NrLXR5cGUuanMiLCJ3ZWJwYWNrOi8vR1VJLy4vbm9kZV9tb2R1bGVzL3NjcmF0Y2gtdm0vc3JjL2V4dGVuc2lvbi1zdXBwb3J0L3RhcmdldC10eXBlLmpzIiwid2VicGFjazovL0dVSS8uL25vZGVfbW9kdWxlcy9zY3JhdGNoLXZtL3NyYy91dGlsL2xvZy5qcyIsIndlYnBhY2s6Ly9HVUkvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sIm5hbWVzIjpbIkFyZ3VtZW50VHlwZSIsInJlcXVpcmUiLCJCbG9ja1R5cGUiLCJkaXNwYXRjaCIsIlRhcmdldFR5cGUiLCJFeHRlbnNpb25Xb3JrZXIiLCJuZXh0RXh0ZW5zaW9uSWQiLCJpbml0aWFsUmVnaXN0cmF0aW9ucyIsIndhaXRGb3JDb25uZWN0aW9uIiwidGhlbiIsImNhbGwiLCJ4IiwiaWQiLCJleHRlbnNpb24iLCJ3b3JrZXJJZCIsImltcG9ydFNjcmlwdHMiLCJQcm9taXNlIiwiYWxsIiwiZSIsImV4dGVuc2lvbnMiLCJleHRlbnNpb25PYmplY3QiLCJleHRlbnNpb25JZCIsInB1c2giLCJzZXJ2aWNlTmFtZSIsInByb21pc2UiLCJzZXRTZXJ2aWNlIiwiZ2xvYmFsIiwiU2NyYXRjaCIsImV4dGVuc2lvbldvcmtlciIsInJlZ2lzdGVyIiwiYmluZCIsImxvZyIsIlNoYXJlZERpc3BhdGNoIiwiY2FsbGJhY2tzIiwibmV4dFJlc3BvbnNlSWQiLCJzZXJ2aWNlIiwibWV0aG9kIiwiYXJncyIsInRyYW5zZmVyQ2FsbCIsInRyYW5zZmVyIiwiX2dldFNlcnZpY2VQcm92aWRlciIsInByb3ZpZGVyIiwiaXNSZW1vdGUiLCJfcmVtb3RlVHJhbnNmZXJDYWxsIiwicmVzdWx0IiwiYXBwbHkiLCJyZXNvbHZlIiwicmVqZWN0IiwiRXJyb3IiLCJyZXNwb25zZUlkIiwiX3N0b3JlQ2FsbGJhY2tzIiwibGVuZ3RoIiwieWllbGQiLCJwb3AiLCJwb3N0TWVzc2FnZSIsIm1lc3NhZ2UiLCJlcnJvciIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3b3JrZXIiLCJldmVudCIsImRhdGEiLCJfb25EaXNwYXRjaE1lc3NhZ2UiLCJfZGVsaXZlclJlc3BvbnNlIiwibW9kdWxlIiwiZXhwb3J0cyIsIldvcmtlckRpc3BhdGNoIiwiX2Nvbm5lY3Rpb25Qcm9taXNlIiwiX29uQ29ubmVjdCIsInNlcnZpY2VzIiwiX29uTWVzc2FnZSIsInNlbGYiLCJvbm1lc3NhZ2UiLCJoYXNPd25Qcm9wZXJ0eSIsIndhcm4iLCJfcmVtb3RlQ2FsbCIsInNldFRpbWVvdXQiLCJjbG9zZSIsIkFOR0xFIiwiQk9PTEVBTiIsIkNPTE9SIiwiTlVNQkVSIiwiU1RSSU5HIiwiTUFUUklYIiwiTk9URSIsIkJVVFRPTiIsIkNPTU1BTkQiLCJDT05ESVRJT05BTCIsIkVWRU5UIiwiSEFUIiwiTE9PUCIsIlJFUE9S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N0IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCN0QsVUFBakIsQzs7Ozs7Ozs7Ozs7QUNoQkEsSUFBTTBGLE9BQU8sR0FBRzdGLG1CQUFPLENBQUMsZ0ZBQUQsQ0FBdkI7O0FBQ0E2RixPQUFPLENBQUNDLE1BQVI7QUFFQS9CLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjZCLE9BQU8sQ0FBQyxJQUFELENBQXhCLEM7Ozs7Ozs7Ozs7O0FDSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDIiwiZmlsZSI6ImV4dGVuc2lvbi13b3JrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zY3JhdGNoLXZtL3NyYy9leHRlbnNpb24tc3VwcG9ydC9leHRlbnNpb24td29ya2VyLmpzXCIpO1xuIiwiLyogZXNsaW50LWVudiB3b3JrZXIgKi9cblxuY29uc3QgQXJndW1lbnRUeXBlID0gcmVxdWlyZSgnLi4vZXh0ZW5zaW9uLXN1cHBvcnQvYXJndW1lbnQtdHlwZScpO1xuY29uc3QgQmxvY2tUeXBlID0gcmVxdWlyZSgnLi4vZXh0ZW5zaW9uLXN1cHBvcnQvYmxvY2stdHlwZScpO1xuY29uc3QgZGlzcGF0Y2ggPSByZXF1aXJlKCcuLi9kaXNwYXRjaC93b3JrZXItZGlzcGF0Y2gnKTtcbmNvbnN0IFRhcmdldFR5cGUgPSByZXF1aXJlKCcuLi9leHRlbnNpb24tc3VwcG9ydC90YXJnZXQtdHlwZScpO1xuXG5jbGFzcyBFeHRlbnNpb25Xb3JrZXIge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5uZXh0RXh0ZW5zaW9uSWQgPSAwO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbFJlZ2lzdHJhdGlvbnMgPSBbXTtcblxuICAgICAgICBkaXNwYXRjaC53YWl0Rm9yQ29ubmVjdGlvbi50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoLmNhbGwoJ2V4dGVuc2lvbnMnLCAnYWxsb2NhdGVXb3JrZXInKS50aGVuKHggPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtpZCwgZXh0ZW5zaW9uXSA9IHg7XG4gICAgICAgICAgICAgICAgdGhpcy53b3JrZXJJZCA9IGlkO1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0U2NyaXB0cyhleHRlbnNpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxSZWdpc3RyYXRpb25zID0gdGhpcy5pbml0aWFsUmVnaXN0cmF0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsUmVnaXN0cmF0aW9ucyA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoaW5pdGlhbFJlZ2lzdHJhdGlvbnMpLnRoZW4oKCkgPT4gZGlzcGF0Y2guY2FsbCgnZXh0ZW5zaW9ucycsICdvbldvcmtlckluaXQnLCBpZCkpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2guY2FsbCgnZXh0ZW5zaW9ucycsICdvbldvcmtlckluaXQnLCBpZCwgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZXh0ZW5zaW9ucyA9IFtdO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyIChleHRlbnNpb25PYmplY3QpIHtcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uSWQgPSB0aGlzLm5leHRFeHRlbnNpb25JZCsrO1xuICAgICAgICB0aGlzLmV4dGVuc2lvbnMucHVzaChleHRlbnNpb25PYmplY3QpO1xuICAgICAgICBjb25zdCBzZXJ2aWNlTmFtZSA9IGBleHRlbnNpb24uJHt0aGlzLndvcmtlcklkfS4ke2V4dGVuc2lvbklkfWA7XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBkaXNwYXRjaC5zZXRTZXJ2aWNlKHNlcnZpY2VOYW1lLCBleHRlbnNpb25PYmplY3QpXG4gICAgICAgICAgICAudGhlbigoKSA9PiBkaXNwYXRjaC5jYWxsKCdleHRlbnNpb25zJywgJ3JlZ2lzdGVyRXh0ZW5zaW9uU2VydmljZScsIHNlcnZpY2VOYW1lKSk7XG4gICAgICAgIGlmICh0aGlzLmluaXRpYWxSZWdpc3RyYXRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxSZWdpc3RyYXRpb25zLnB1c2gocHJvbWlzZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxufVxuXG5nbG9iYWwuU2NyYXRjaCA9IGdsb2JhbC5TY3JhdGNoIHx8IHt9O1xuZ2xvYmFsLlNjcmF0Y2guQXJndW1lbnRUeXBlID0gQXJndW1lbnRUeXBlO1xuZ2xvYmFsLlNjcmF0Y2guQmxvY2tUeXBlID0gQmxvY2tUeXBlO1xuZ2xvYmFsLlNjcmF0Y2guVGFyZ2V0VHlwZSA9IFRhcmdldFR5cGU7XG5cbi8qKlxuICogRXhwb3NlIG9ubHkgc3BlY2lmaWMgcGFydHMgb2YgdGhlIHdvcmtlciB0byBleHRlbnNpb25zLlxuICovXG5jb25zdCBleHRlbnNpb25Xb3JrZXIgPSBuZXcgRXh0ZW5zaW9uV29ya2VyKCk7XG5nbG9iYWwuU2NyYXRjaC5leHRlbnNpb25zID0ge1xuICAgIHJlZ2lzdGVyOiBleHRlbnNpb25Xb3JrZXIucmVnaXN0ZXIuYmluZChleHRlbnNpb25Xb3JrZXIpXG59O1xuIiwiZnVuY3Rpb24gTSgpIHsgdGhpcy5fZXZlbnRzID0ge307IH1cbk0ucHJvdG90eXBlID0ge1xuICBvbjogZnVuY3Rpb24oZXYsIGNiKSB7XG4gICAgdGhpcy5fZXZlbnRzIHx8ICh0aGlzLl9ldmVudHMgPSB7fSk7XG4gICAgdmFyIGUgPSB0aGlzLl9ldmVudHM7XG4gICAgKGVbZXZdIHx8IChlW2V2XSA9IFtdKSkucHVzaChjYik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIHJlbW92ZUxpc3RlbmVyOiBmdW5jdGlvbihldiwgY2IpIHtcbiAgICB2YXIgZSA9IHRoaXMuX2V2ZW50c1tldl0gfHwgW10sIGk7XG4gICAgZm9yKGkgPSBlLmxlbmd0aC0xOyBpID49IDAgJiYgZVtpXTsgaS0tKXtcbiAgICAgIGlmKGVbaV0gPT09IGNiIHx8IGVbaV0uY2IgPT09IGNiKSB7IGUuc3BsaWNlKGksIDEpOyB9XG4gICAgfVxuICB9LFxuICByZW1vdmVBbGxMaXN0ZW5lcnM6IGZ1bmN0aW9uKGV2KSB7XG4gICAgaWYoIWV2KSB7IHRoaXMuX2V2ZW50cyA9IHt9OyB9XG4gICAgZWxzZSB7IHRoaXMuX2V2ZW50c1tldl0gJiYgKHRoaXMuX2V2ZW50c1tldl0gPSBbXSk7IH1cbiAgfSxcbiAgbGlzdGVuZXJzOiBmdW5jdGlvbihldikge1xuICAgIHJldHVybiAodGhpcy5fZXZlbnRzID8gdGhpcy5fZXZlbnRzW2V2XSB8fCBbXSA6IFtdKTtcbiAgfSxcbiAgZW1pdDogZnVuY3Rpb24oZXYpIHtcbiAgICB0aGlzLl9ldmVudHMgfHwgKHRoaXMuX2V2ZW50cyA9IHt9KTtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksIGksIGUgPSB0aGlzLl9ldmVudHNbZXZdIHx8IFtdO1xuICAgIGZvcihpID0gZS5sZW5ndGgtMTsgaSA+PSAwICYmIGVbaV07IGktLSl7XG4gICAgICBlW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgd2hlbjogZnVuY3Rpb24oZXYsIGNiKSB7XG4gICAgcmV0dXJuIHRoaXMub25jZShldiwgY2IsIHRydWUpO1xuICB9LFxuICBvbmNlOiBmdW5jdGlvbihldiwgY2IsIHdoZW4pIHtcbiAgICBpZighY2IpIHJldHVybiB0aGlzO1xuICAgIGZ1bmN0aW9uIGMoKSB7XG4gICAgICBpZighd2hlbikgdGhpcy5yZW1vdmVMaXN0ZW5lcihldiwgYyk7XG4gICAgICBpZihjYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpICYmIHdoZW4pIHRoaXMucmVtb3ZlTGlzdGVuZXIoZXYsIGMpO1xuICAgIH1cbiAgICBjLmNiID0gY2I7XG4gICAgdGhpcy5vbihldiwgYyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG5NLm1peGluID0gZnVuY3Rpb24oZGVzdCkge1xuICB2YXIgbyA9IE0ucHJvdG90eXBlLCBrO1xuICBmb3IgKGsgaW4gbykge1xuICAgIG8uaGFzT3duUHJvcGVydHkoaykgJiYgKGRlc3QucHJvdG90eXBlW2tdID0gb1trXSk7XG4gIH1cbn07XG5tb2R1bGUuZXhwb3J0cyA9IE07XG4iLCIvLyBkZWZhdWx0IGZpbHRlclxudmFyIFRyYW5zZm9ybSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtLmpzJyk7XG5cbnZhciBsZXZlbE1hcCA9IHsgZGVidWc6IDEsIGluZm86IDIsIHdhcm46IDMsIGVycm9yOiA0IH07XG5cbmZ1bmN0aW9uIEZpbHRlcigpIHtcbiAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgdGhpcy5kZWZhdWx0UmVzdWx0ID0gdHJ1ZTtcbiAgdGhpcy5jbGVhcigpO1xufVxuXG5UcmFuc2Zvcm0ubWl4aW4oRmlsdGVyKTtcblxuLy8gYWxsb3cgYWxsIG1hdGNoaW5nLCB3aXRoIGxldmVsID49IGdpdmVuIGxldmVsXG5GaWx0ZXIucHJvdG90eXBlLmFsbG93ID0gZnVuY3Rpb24obmFtZSwgbGV2ZWwpIHtcbiAgdGhpcy5fd2hpdGUucHVzaCh7IG46IG5hbWUsIGw6IGxldmVsTWFwW2xldmVsXSB9KTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBkZW55IGFsbCBtYXRjaGluZywgd2l0aCBsZXZlbCA8PSBnaXZlbiBsZXZlbFxuRmlsdGVyLnByb3RvdHlwZS5kZW55ID0gZnVuY3Rpb24obmFtZSwgbGV2ZWwpIHtcbiAgdGhpcy5fYmxhY2sucHVzaCh7IG46IG5hbWUsIGw6IGxldmVsTWFwW2xldmVsXSB9KTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5GaWx0ZXIucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX3doaXRlID0gW107XG4gIHRoaXMuX2JsYWNrID0gW107XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gdGVzdChydWxlLCBuYW1lKSB7XG4gIC8vIHVzZSAudGVzdCBmb3IgUmVnRXhwc1xuICByZXR1cm4gKHJ1bGUubi50ZXN0ID8gcnVsZS5uLnRlc3QobmFtZSkgOiBydWxlLm4gPT0gbmFtZSk7XG59O1xuXG5GaWx0ZXIucHJvdG90eXBlLnRlc3QgPSBmdW5jdGlvbihuYW1lLCBsZXZlbCkge1xuICB2YXIgaSwgbGVuID0gTWF0aC5tYXgodGhpcy5fd2hpdGUubGVuZ3RoLCB0aGlzLl9ibGFjay5sZW5ndGgpO1xuICBmb3IoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGlmKHRoaXMuX3doaXRlW2ldICYmIHRlc3QodGhpcy5fd2hpdGVbaV0sIG5hbWUpICYmIGxldmVsTWFwW2xldmVsXSA+PSB0aGlzLl93aGl0ZVtpXS5sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYodGhpcy5fYmxhY2tbaV0gJiYgdGVzdCh0aGlzLl9ibGFja1tpXSwgbmFtZSkgJiYgbGV2ZWxNYXBbbGV2ZWxdIDw9IHRoaXMuX2JsYWNrW2ldLmwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXMuZGVmYXVsdFJlc3VsdDtcbn07XG5cbkZpbHRlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbihuYW1lLCBsZXZlbCwgYXJncykge1xuICBpZighdGhpcy5lbmFibGVkIHx8IHRoaXMudGVzdChuYW1lLCBsZXZlbCkpIHtcbiAgICByZXR1cm4gdGhpcy5lbWl0KCdpdGVtJywgbmFtZSwgbGV2ZWwsIGFyZ3MpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpbHRlcjtcbiIsInZhciBUcmFuc2Zvcm0gPSByZXF1aXJlKCcuL3RyYW5zZm9ybS5qcycpLFxuICAgIEZpbHRlciA9IHJlcXVpcmUoJy4vZmlsdGVyLmpzJyk7XG5cbnZhciBsb2cgPSBuZXcgVHJhbnNmb3JtKCksXG4gICAgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShuYW1lKSB7XG4gIHZhciBvICAgPSBmdW5jdGlvbigpIHsgbG9nLndyaXRlKG5hbWUsIHVuZGVmaW5lZCwgc2xpY2UuY2FsbChhcmd1bWVudHMpKTsgcmV0dXJuIG87IH07XG4gIG8uZGVidWcgPSBmdW5jdGlvbigpIHsgbG9nLndyaXRlKG5hbWUsICdkZWJ1ZycsIHNsaWNlLmNhbGwoYXJndW1lbnRzKSk7IHJldHVybiBvOyB9O1xuICBvLmluZm8gID0gZnVuY3Rpb24oKSB7IGxvZy53cml0ZShuYW1lLCAnaW5mbycsICBzbGljZS5jYWxsKGFyZ3VtZW50cykpOyByZXR1cm4gbzsgfTtcbiAgby53YXJuICA9IGZ1bmN0aW9uKCkgeyBsb2cud3JpdGUobmFtZSwgJ3dhcm4nLCAgc2xpY2UuY2FsbChhcmd1bWVudHMpKTsgcmV0dXJuIG87IH07XG4gIG8uZXJyb3IgPSBmdW5jdGlvbigpIHsgbG9nLndyaXRlKG5hbWUsICdlcnJvcicsIHNsaWNlLmNhbGwoYXJndW1lbnRzKSk7IHJldHVybiBvOyB9O1xuICBvLmxvZyAgID0gby5kZWJ1ZzsgLy8gZm9yIGludGVyZmFjZSBjb21wbGlhbmNlIHdpdGggTm9kZSBhbmQgYnJvd3NlciBjb25zb2xlc1xuICBvLnN1Z2dlc3QgPSBleHBvcnRzLnN1Z2dlc3Q7XG4gIG8uZm9ybWF0ID0gbG9nLmZvcm1hdDtcbiAgcmV0dXJuIG87XG59O1xuXG4vLyBmaWxsZWQgaW4gc2VwYXJhdGVseVxuZXhwb3J0cy5kZWZhdWx0QmFja2VuZCA9IGV4cG9ydHMuZGVmYXVsdEZvcm1hdHRlciA9IG51bGw7XG5cbmV4cG9ydHMucGlwZSA9IGZ1bmN0aW9uKGRlc3QpIHtcbiAgcmV0dXJuIGxvZy5waXBlKGRlc3QpO1xufTtcblxuZXhwb3J0cy5lbmQgPSBleHBvcnRzLnVucGlwZSA9IGV4cG9ydHMuZGlzYWJsZSA9IGZ1bmN0aW9uKGZyb20pIHtcbiAgcmV0dXJuIGxvZy51bnBpcGUoZnJvbSk7XG59O1xuXG5leHBvcnRzLlRyYW5zZm9ybSA9IFRyYW5zZm9ybTtcbmV4cG9ydHMuRmlsdGVyID0gRmlsdGVyO1xuLy8gdGhpcyBpcyB0aGUgZGVmYXVsdCBmaWx0ZXIgdGhhdCdzIGFwcGxpZWQgd2hlbiAuZW5hYmxlKCkgaXMgY2FsbGVkIG5vcm1hbGx5XG4vLyB5b3UgY2FuIGJ5cGFzcyBpdCBjb21wbGV0ZWx5IGFuZCBzZXQgdXAgeW91ciBvd24gcGlwZXNcbmV4cG9ydHMuc3VnZ2VzdCA9IG5ldyBGaWx0ZXIoKTtcblxuZXhwb3J0cy5lbmFibGUgPSBmdW5jdGlvbigpIHtcbiAgaWYoZXhwb3J0cy5kZWZhdWx0Rm9ybWF0dGVyKSB7XG4gICAgcmV0dXJuIGxvZy5waXBlKGV4cG9ydHMuc3VnZ2VzdCkgLy8gZmlsdGVyXG4gICAgICAgICAgICAgIC5waXBlKGV4cG9ydHMuZGVmYXVsdEZvcm1hdHRlcikgLy8gZm9ybWF0dGVyXG4gICAgICAgICAgICAgIC5waXBlKGV4cG9ydHMuZGVmYXVsdEJhY2tlbmQpOyAvLyBiYWNrZW5kXG4gIH1cbiAgcmV0dXJuIGxvZy5waXBlKGV4cG9ydHMuc3VnZ2VzdCkgLy8gZmlsdGVyXG4gICAgICAgICAgICAucGlwZShleHBvcnRzLmRlZmF1bHRCYWNrZW5kKTsgLy8gZm9ybWF0dGVyXG59O1xuXG4iLCJ2YXIgbWljcm9lZSA9IHJlcXVpcmUoJ21pY3JvZWUnKTtcblxuLy8gSW1wbGVtZW50cyBhIHN1YnNldCBvZiBOb2RlJ3Mgc3RyZWFtLlRyYW5zZm9ybSAtIGluIGEgY3Jvc3MtcGxhdGZvcm0gbWFubmVyLlxuZnVuY3Rpb24gVHJhbnNmb3JtKCkge31cblxubWljcm9lZS5taXhpbihUcmFuc2Zvcm0pO1xuXG4vLyBUaGUgd3JpdGUoKSBzaWduYXR1cmUgaXMgZGlmZmVyZW50IGZyb20gTm9kZSdzXG4vLyAtLT4gbWFrZXMgaXQgbXVjaCBlYXNpZXIgdG8gd29yayB3aXRoIG9iamVjdHMgaW4gbG9ncy5cbi8vIE9uZSBvZiB0aGUgbGVzc29ucyBmcm9tIHYxIHdhcyB0aGF0IGl0J3MgYmV0dGVyIHRvIHRhcmdldFxuLy8gYSBnb29kIGJyb3dzZXIgcmF0aGVyIHRoYW4gdGhlIGxvd2VzdCBjb21tb24gZGVub21pbmF0b3Jcbi8vIGludGVybmFsbHkuXG4vLyBJZiB5b3Ugd2FudCB0byB1c2UgZXh0ZXJuYWwgc3RyZWFtcywgcGlwZSgpIHRvIC4vc3RyaW5naWZ5LmpzIGZpcnN0LlxuVHJhbnNmb3JtLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uKG5hbWUsIGxldmVsLCBhcmdzKSB7XG4gIHRoaXMuZW1pdCgnaXRlbScsIG5hbWUsIGxldmVsLCBhcmdzKTtcbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZW1pdCgnZW5kJyk7XG4gIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG59O1xuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnBpcGUgPSBmdW5jdGlvbihkZXN0KSB7XG4gIHZhciBzID0gdGhpcztcbiAgLy8gcHJldmVudCBkb3VibGUgcGlwaW5nXG4gIHMuZW1pdCgndW5waXBlJywgZGVzdCk7XG4gIC8vIHRlbGwgdGhlIGRlc3QgdGhhdCBpdCdzIGJlaW5nIHBpcGVkIHRvXG4gIGRlc3QuZW1pdCgncGlwZScsIHMpO1xuXG4gIGZ1bmN0aW9uIG9uSXRlbSgpIHtcbiAgICBkZXN0LndyaXRlLmFwcGx5KGRlc3QsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICB9XG4gIGZ1bmN0aW9uIG9uRW5kKCkgeyAhZGVzdC5faXNTdGRpbyAmJiBkZXN0LmVuZCgpOyB9XG5cbiAgcy5vbignaXRlbScsIG9uSXRlbSk7XG4gIHMub24oJ2VuZCcsIG9uRW5kKTtcblxuICBzLndoZW4oJ3VucGlwZScsIGZ1bmN0aW9uKGZyb20pIHtcbiAgICB2YXIgbWF0Y2ggPSAoZnJvbSA9PT0gZGVzdCkgfHwgdHlwZW9mIGZyb20gPT0gJ3VuZGVmaW5lZCc7XG4gICAgaWYobWF0Y2gpIHtcbiAgICAgIHMucmVtb3ZlTGlzdGVuZXIoJ2l0ZW0nLCBvbkl0ZW0pO1xuICAgICAgcy5yZW1vdmVMaXN0ZW5lcignZW5kJywgb25FbmQpO1xuICAgICAgZGVzdC5lbWl0KCd1bnBpcGUnKTtcbiAgICB9XG4gICAgcmV0dXJuIG1hdGNoO1xuICB9KTtcblxuICByZXR1cm4gZGVzdDtcbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUudW5waXBlID0gZnVuY3Rpb24oZnJvbSkge1xuICB0aGlzLmVtaXQoJ3VucGlwZScsIGZyb20pO1xuICByZXR1cm4gdGhpcztcbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oZGVzdCkge1xuICB0aHJvdyBuZXcgRXJyb3IoW1xuICAgICdXYXJuaW5nOiAuZm9ybWF0KCkgaXMgZGVwcmVjYXRlZCBpbiBNaW5pbG9nIHYyISBVc2UgLnBpcGUoKSBpbnN0ZWFkLiBGb3IgZXhhbXBsZTonLFxuICAgICd2YXIgTWluaWxvZyA9IHJlcXVpcmUoXFwnbWluaWxvZ1xcJyk7JyxcbiAgICAnTWluaWxvZycsXG4gICAgJyAgLnBpcGUoTWluaWxvZy5iYWNrZW5kcy5jb25zb2xlLmZvcm1hdENsZWFuKScsXG4gICAgJyAgLnBpcGUoTWluaWxvZy5iYWNrZW5kcy5jb25zb2xlKTsnXS5qb2luKCdcXG4nKSk7XG59O1xuXG5UcmFuc2Zvcm0ubWl4aW4gPSBmdW5jdGlvbihkZXN0KSB7XG4gIHZhciBvID0gVHJhbnNmb3JtLnByb3RvdHlwZSwgaztcbiAgZm9yIChrIGluIG8pIHtcbiAgICBvLmhhc093blByb3BlcnR5KGspICYmIChkZXN0LnByb3RvdHlwZVtrXSA9IG9ba10pO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zZm9ybTtcbiIsInZhciBUcmFuc2Zvcm0gPSByZXF1aXJlKCcuLi9jb21tb24vdHJhbnNmb3JtLmpzJyksXG4gICAgY2FjaGUgPSBbIF07XG5cbnZhciBsb2dnZXIgPSBuZXcgVHJhbnNmb3JtKCk7XG5cbmxvZ2dlci53cml0ZSA9IGZ1bmN0aW9uKG5hbWUsIGxldmVsLCBhcmdzKSB7XG4gIGNhY2hlLnB1c2goWyBuYW1lLCBsZXZlbCwgYXJncyBdKTtcbn07XG5cbi8vIHV0aWxpdHkgZnVuY3Rpb25zXG5sb2dnZXIuZ2V0ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjYWNoZTsgfTtcbmxvZ2dlci5lbXB0eSA9IGZ1bmN0aW9uKCkgeyBjYWNoZSA9IFtdOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvZ2dlcjtcbiIsInZhciBUcmFuc2Zvcm0gPSByZXF1aXJlKCcuLi9jb21tb24vdHJhbnNmb3JtLmpzJyk7XG5cbnZhciBuZXdsaW5lcyA9IC9cXG4rJC8sXG4gICAgbG9nZ2VyID0gbmV3IFRyYW5zZm9ybSgpO1xuXG5sb2dnZXIud3JpdGUgPSBmdW5jdGlvbihuYW1lLCBsZXZlbCwgYXJncykge1xuICB2YXIgaSA9IGFyZ3MubGVuZ3RoLTE7XG4gIGlmICh0eXBlb2YgY29uc29sZSA9PT0gJ3VuZGVmaW5lZCcgfHwgIWNvbnNvbGUubG9nKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmKGNvbnNvbGUubG9nLmFwcGx5KSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIFtuYW1lLCBsZXZlbF0uY29uY2F0KGFyZ3MpKTtcbiAgfSBlbHNlIGlmKEpTT04gJiYgSlNPTi5zdHJpbmdpZnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZy5hcHBseSBpcyB1bmRlZmluZWQgaW4gSUU4IGFuZCBJRTlcbiAgICAvLyBmb3IgSUU4Lzk6IG1ha2UgY29uc29sZS5sb2cgYXQgbGVhc3QgYSBiaXQgbGVzcyBhd2Z1bFxuICAgIGlmKGFyZ3NbaV0gJiYgdHlwZW9mIGFyZ3NbaV0gPT0gJ3N0cmluZycpIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmdzW2ldLnJlcGxhY2UobmV3bGluZXMsICcnKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGZvcihpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXJnc1tpXSA9IEpTT04uc3RyaW5naWZ5KGFyZ3NbaV0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2goZSkge31cbiAgICBjb25zb2xlLmxvZyhhcmdzLmpvaW4oJyAnKSk7XG4gIH1cbn07XG5cbmxvZ2dlci5mb3JtYXR0ZXJzID0gWydjb2xvcicsICdtaW5pbG9nJ107XG5sb2dnZXIuY29sb3IgPSByZXF1aXJlKCcuL2Zvcm1hdHRlcnMvY29sb3IuanMnKTtcbmxvZ2dlci5taW5pbG9nID0gcmVxdWlyZSgnLi9mb3JtYXR0ZXJzL21pbmlsb2cuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBsb2dnZXI7XG4iLCJ2YXIgVHJhbnNmb3JtID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3RyYW5zZm9ybS5qcycpLFxuICAgIGNvbG9yID0gcmVxdWlyZSgnLi91dGlsLmpzJyk7XG5cbnZhciBjb2xvcnMgPSB7IGRlYnVnOiBbJ2N5YW4nXSwgaW5mbzogWydwdXJwbGUnIF0sIHdhcm46IFsgJ3llbGxvdycsIHRydWUgXSwgZXJyb3I6IFsgJ3JlZCcsIHRydWUgXSB9LFxuICAgIGxvZ2dlciA9IG5ldyBUcmFuc2Zvcm0oKTtcblxubG9nZ2VyLndyaXRlID0gZnVuY3Rpb24obmFtZSwgbGV2ZWwsIGFyZ3MpIHtcbiAgdmFyIGZuID0gY29uc29sZS5sb2c7XG4gIGlmKGNvbnNvbGVbbGV2ZWxdICYmIGNvbnNvbGVbbGV2ZWxdLmFwcGx5KSB7XG4gICAgZm4gPSBjb25zb2xlW2xldmVsXTtcbiAgICBmbi5hcHBseShjb25zb2xlLCBbICclYycrbmFtZSsnICVjJytsZXZlbCwgY29sb3IoJ2dyYXknKSwgY29sb3IuYXBwbHkoY29sb3IsIGNvbG9yc1tsZXZlbF0pXS5jb25jYXQoYXJncykpO1xuICB9XG59O1xuXG4vLyBOT1AsIGJlY2F1c2UgcGlwaW5nIHRoZSBmb3JtYXR0ZWQgbG9ncyBjYW4gb25seSBjYXVzZSB0cm91YmxlLlxubG9nZ2VyLnBpcGUgPSBmdW5jdGlvbigpIHsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBsb2dnZXI7XG4iLCJ2YXIgVHJhbnNmb3JtID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3RyYW5zZm9ybS5qcycpLFxuICAgIGNvbG9yID0gcmVxdWlyZSgnLi91dGlsLmpzJyksXG4gICAgY29sb3JzID0geyBkZWJ1ZzogWydncmF5J10sIGluZm86IFsncHVycGxlJyBdLCB3YXJuOiBbICd5ZWxsb3cnLCB0cnVlIF0sIGVycm9yOiBbICdyZWQnLCB0cnVlIF0gfSxcbiAgICBsb2dnZXIgPSBuZXcgVHJhbnNmb3JtKCk7XG5cbmxvZ2dlci53cml0ZSA9IGZ1bmN0aW9uKG5hbWUsIGxldmVsLCBhcmdzKSB7XG4gIHZhciBmbiA9IGNvbnNvbGUubG9nO1xuICBpZihsZXZlbCAhPSAnZGVidWcnICYmIGNvbnNvbGVbbGV2ZWxdKSB7XG4gICAgZm4gPSBjb25zb2xlW2xldmVsXTtcbiAgfVxuXG4gIHZhciBzdWJzZXQgPSBbXSwgaSA9IDA7XG4gIGlmKGxldmVsICE9ICdpbmZvJykge1xuICAgIGZvcig7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZih0eXBlb2YgYXJnc1tpXSAhPSAnc3RyaW5nJykgYnJlYWs7XG4gICAgfVxuICAgIGZuLmFwcGx5KGNvbnNvbGUsIFsgJyVjJytuYW1lICsnICcrIGFyZ3Muc2xpY2UoMCwgaSkuam9pbignICcpLCBjb2xvci5hcHBseShjb2xvciwgY29sb3JzW2xldmVsXSkgXS5jb25jYXQoYXJncy5zbGljZShpKSkpO1xuICB9IGVsc2Uge1xuICAgIGZuLmFwcGx5KGNvbnNvbGUsIFsgJyVjJytuYW1lLCBjb2xvci5hcHBseShjb2xvciwgY29sb3JzW2xldmVsXSkgXS5jb25jYXQoYXJncykpO1xuICB9XG59O1xuXG4vLyBOT1AsIGJlY2F1c2UgcGlwaW5nIHRoZSBmb3JtYXR0ZWQgbG9ncyBjYW4gb25seSBjYXVzZSB0cm91YmxlLlxubG9nZ2VyLnBpcGUgPSBmdW5jdGlvbigpIHsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBsb2dnZXI7XG4iLCJ2YXIgaGV4ID0ge1xuICBibGFjazogJyMwMDAnLFxuICByZWQ6ICcjYzIzNjIxJyxcbiAgZ3JlZW46ICcjMjViYzI2JyxcbiAgeWVsbG93OiAnI2JiYmIwMCcsXG4gIGJsdWU6ICAnIzQ5MmVlMScsXG4gIG1hZ2VudGE6ICcjZDMzOGQzJyxcbiAgY3lhbjogJyMzM2JiYzgnLFxuICBncmF5OiAnIzgwODA4MCcsXG4gIHB1cnBsZTogJyM3MDgnXG59O1xuZnVuY3Rpb24gY29sb3IoZmcsIGlzSW52ZXJzZSkge1xuICBpZihpc0ludmVyc2UpIHtcbiAgICByZXR1cm4gJ2NvbG9yOiAjZmZmOyBiYWNrZ3JvdW5kOiAnK2hleFtmZ10rJzsnO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnY29sb3I6ICcraGV4W2ZnXSsnOyc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb2xvcjtcbiIsInZhciBNaW5pbG9nID0gcmVxdWlyZSgnLi4vY29tbW9uL21pbmlsb2cuanMnKTtcblxudmFyIG9sZEVuYWJsZSA9IE1pbmlsb2cuZW5hYmxlLFxuICAgIG9sZERpc2FibGUgPSBNaW5pbG9nLmRpc2FibGUsXG4gICAgaXNDaHJvbWUgPSAodHlwZW9mIG5hdmlnYXRvciAhPSAndW5kZWZpbmVkJyAmJiAvY2hyb21lL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSksXG4gICAgY29uc29sZSA9IHJlcXVpcmUoJy4vY29uc29sZS5qcycpO1xuXG4vLyBVc2UgYSBtb3JlIGNhcGFibGUgbG9nZ2luZyBiYWNrZW5kIGlmIG9uIENocm9tZVxuTWluaWxvZy5kZWZhdWx0QmFja2VuZCA9IChpc0Nocm9tZSA/IGNvbnNvbGUubWluaWxvZyA6IGNvbnNvbGUpO1xuXG4vLyBhcHBseSBlbmFibGUgaW5wdXRzIGZyb20gbG9jYWxTdG9yYWdlIGFuZCBmcm9tIHRoZSBVUkxcbmlmKHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgdHJ5IHtcbiAgICBNaW5pbG9nLmVuYWJsZShKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2VbJ21pbmlsb2dTZXR0aW5ncyddKSk7XG4gIH0gY2F0Y2goZSkge31cbiAgaWYod2luZG93LmxvY2F0aW9uICYmIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpIHtcbiAgICB2YXIgbWF0Y2ggPSBSZWdFeHAoJ1s/Jl1taW5pbG9nPShbXiZdKiknKS5leGVjKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgIG1hdGNoICYmIE1pbmlsb2cuZW5hYmxlKGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFsxXSkpO1xuICB9XG59XG5cbi8vIE1ha2UgZW5hYmxlIGFsc28gYWRkIHRvIGxvY2FsU3RvcmFnZVxuTWluaWxvZy5lbmFibGUgPSBmdW5jdGlvbigpIHtcbiAgb2xkRW5hYmxlLmNhbGwoTWluaWxvZywgdHJ1ZSk7XG4gIHRyeSB7IHdpbmRvdy5sb2NhbFN0b3JhZ2VbJ21pbmlsb2dTZXR0aW5ncyddID0gSlNPTi5zdHJpbmdpZnkodHJ1ZSk7IH0gY2F0Y2goZSkge31cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5NaW5pbG9nLmRpc2FibGUgPSBmdW5jdGlvbigpIHtcbiAgb2xkRGlzYWJsZS5jYWxsKE1pbmlsb2cpO1xuICB0cnkgeyBkZWxldGUgd2luZG93LmxvY2FsU3RvcmFnZS5taW5pbG9nU2V0dGluZ3M7IH0gY2F0Y2goZSkge31cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBNaW5pbG9nO1xuXG5leHBvcnRzLmJhY2tlbmRzID0ge1xuICBhcnJheTogcmVxdWlyZSgnLi9hcnJheS5qcycpLFxuICBicm93c2VyOiBNaW5pbG9nLmRlZmF1bHRCYWNrZW5kLFxuICBsb2NhbFN0b3JhZ2U6IHJlcXVpcmUoJy4vbG9jYWxzdG9yYWdlLmpzJyksXG4gIGpRdWVyeTogcmVxdWlyZSgnLi9qcXVlcnlfc2ltcGxlLmpzJylcbn07XG4iLCJ2YXIgVHJhbnNmb3JtID0gcmVxdWlyZSgnLi4vY29tbW9uL3RyYW5zZm9ybS5qcycpO1xuXG52YXIgY2lkID0gbmV3IERhdGUoKS52YWx1ZU9mKCkudG9TdHJpbmcoMzYpO1xuXG5mdW5jdGlvbiBBamF4TG9nZ2VyKG9wdGlvbnMpIHtcbiAgdGhpcy51cmwgPSBvcHRpb25zLnVybCB8fCAnJztcbiAgdGhpcy5jYWNoZSA9IFtdO1xuICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgdGhpcy5pbnRlcnZhbCA9IG9wdGlvbnMuaW50ZXJ2YWwgfHwgMzAqMTAwMDtcbiAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgdGhpcy5qUXVlcnkgPSB3aW5kb3cualF1ZXJ5O1xuICB0aGlzLmV4dHJhcyA9IHt9O1xufVxuXG5UcmFuc2Zvcm0ubWl4aW4oQWpheExvZ2dlcik7XG5cbkFqYXhMb2dnZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24obmFtZSwgbGV2ZWwsIGFyZ3MpIHtcbiAgaWYoIXRoaXMudGltZXIpIHsgdGhpcy5pbml0KCk7IH1cbiAgdGhpcy5jYWNoZS5wdXNoKFtuYW1lLCBsZXZlbF0uY29uY2F0KGFyZ3MpKTtcbn07XG5cbkFqYXhMb2dnZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgaWYoIXRoaXMuZW5hYmxlZCB8fCAhdGhpcy5qUXVlcnkpIHJldHVybjtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLnRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICB2YXIgaSwgbG9ncyA9IFtdLCBhamF4RGF0YSwgdXJsID0gc2VsZi51cmw7XG4gICAgaWYoc2VsZi5jYWNoZS5sZW5ndGggPT0gMCkgcmV0dXJuIHNlbGYuaW5pdCgpO1xuICAgIC8vIFRlc3QgZWFjaCBsb2cgbGluZSBhbmQgb25seSBsb2cgdGhlIG9uZXMgdGhhdCBhcmUgdmFsaWQgKGUuZy4gZG9uJ3QgaGF2ZSBjaXJjdWxhciByZWZlcmVuY2VzKS5cbiAgICAvLyBTbGlnaHQgcGVyZm9ybWFuY2UgaGl0IGJ1dCBiZW5lZml0IGlzIHdlIGxvZyBhbGwgdmFsaWQgbGluZXMuXG4gICAgZm9yKGkgPSAwOyBpIDwgc2VsZi5jYWNoZS5sZW5ndGg7IGkrKykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoc2VsZi5jYWNoZVtpXSk7XG4gICAgICAgIGxvZ3MucHVzaChzZWxmLmNhY2hlW2ldKTtcbiAgICAgIH0gY2F0Y2goZSkgeyB9XG4gICAgfVxuICAgIGlmKHNlbGYualF1ZXJ5LmlzRW1wdHlPYmplY3Qoc2VsZi5leHRyYXMpKSB7XG4gICAgICAgIGFqYXhEYXRhID0gSlNPTi5zdHJpbmdpZnkoeyBsb2dzOiBsb2dzIH0pO1xuICAgICAgICB1cmwgPSBzZWxmLnVybCArICc/Y2xpZW50X2lkPScgKyBjaWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWpheERhdGEgPSBKU09OLnN0cmluZ2lmeShzZWxmLmpRdWVyeS5leHRlbmQoe2xvZ3M6IGxvZ3N9LCBzZWxmLmV4dHJhcykpO1xuICAgIH1cblxuICAgIHNlbGYualF1ZXJ5LmFqYXgodXJsLCB7XG4gICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICBjYWNoZTogZmFsc2UsXG4gICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICBkYXRhOiBhamF4RGF0YSxcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB0aW1lb3V0OiAxMDAwMFxuICAgIH0pLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSwgc3RhdHVzLCBqcXhocikge1xuICAgICAgaWYoZGF0YS5pbnRlcnZhbCkge1xuICAgICAgICBzZWxmLmludGVydmFsID0gTWF0aC5tYXgoMTAwMCwgZGF0YS5pbnRlcnZhbCk7XG4gICAgICB9XG4gICAgfSkuZXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgICBzZWxmLmludGVydmFsID0gMzAwMDA7XG4gICAgfSkuYWx3YXlzKGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5pbml0KCk7XG4gICAgfSk7XG4gICAgc2VsZi5jYWNoZSA9IFtdO1xuICB9LCB0aGlzLmludGVydmFsKTtcbn07XG5cbkFqYXhMb2dnZXIucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uKCkge307XG5cbi8vIHdhaXQgdW50aWwgalF1ZXJ5IGlzIGRlZmluZWQuIFVzZWZ1bCBpZiB5b3UgZG9uJ3QgY29udHJvbCB0aGUgbG9hZCBvcmRlci5cbkFqYXhMb2dnZXIualF1ZXJ5V2FpdCA9IGZ1bmN0aW9uKG9uRG9uZSkge1xuICBpZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAod2luZG93LmpRdWVyeSB8fCB3aW5kb3cuJCkpIHtcbiAgICByZXR1cm4gb25Eb25lKHdpbmRvdy5qUXVlcnkgfHwgd2luZG93LiQpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgQWpheExvZ2dlci5qUXVlcnlXYWl0KG9uRG9uZSk7IH0sIDIwMCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQWpheExvZ2dlcjtcbiIsInZhciBUcmFuc2Zvcm0gPSByZXF1aXJlKCcuLi9jb21tb24vdHJhbnNmb3JtLmpzJyksXG4gICAgY2FjaGUgPSBmYWxzZTtcblxudmFyIGxvZ2dlciA9IG5ldyBUcmFuc2Zvcm0oKTtcblxubG9nZ2VyLndyaXRlID0gZnVuY3Rpb24obmFtZSwgbGV2ZWwsIGFyZ3MpIHtcbiAgaWYodHlwZW9mIHdpbmRvdyA9PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgSlNPTiA9PSAndW5kZWZpbmVkJyB8fCAhSlNPTi5zdHJpbmdpZnkgfHwgIUpTT04ucGFyc2UpIHJldHVybjtcbiAgdHJ5IHtcbiAgICBpZighY2FjaGUpIHsgY2FjaGUgPSAod2luZG93LmxvY2FsU3RvcmFnZS5taW5pbG9nID8gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLm1pbmlsb2cpIDogW10pOyB9XG4gICAgY2FjaGUucHVzaChbIG5ldyBEYXRlKCkudG9TdHJpbmcoKSwgbmFtZSwgbGV2ZWwsIGFyZ3MgXSk7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5taW5pbG9nID0gSlNPTi5zdHJpbmdpZnkoY2FjaGUpO1xuICB9IGNhdGNoKGUpIHt9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvZ2dlcjsiLCJjb25zdCBsb2cgPSByZXF1aXJlKCcuLi91dGlsL2xvZycpO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtvYmplY3R9IERpc3BhdGNoQ2FsbE1lc3NhZ2UgLSBhIG1lc3NhZ2UgdG8gdGhlIGRpc3BhdGNoIHN5c3RlbSByZXByZXNlbnRpbmcgYSBzZXJ2aWNlIG1ldGhvZCBjYWxsXG4gKiBAcHJvcGVydHkgeyp9IHJlc3BvbnNlSWQgLSBzZW5kIGEgcmVzcG9uc2UgbWVzc2FnZSB3aXRoIHRoaXMgcmVzcG9uc2UgSUQuIFNlZSB7QGxpbmsgRGlzcGF0Y2hSZXNwb25zZU1lc3NhZ2V9XG4gKiBAcHJvcGVydHkge3N0cmluZ30gc2VydmljZSAtIHRoZSBuYW1lIG9mIHRoZSBzZXJ2aWNlIHRvIGJlIGNhbGxlZFxuICogQHByb3BlcnR5IHtzdHJpbmd9IG1ldGhvZCAtIHRoZSBuYW1lIG9mIHRoZSBtZXRob2QgdG8gYmUgY2FsbGVkXG4gKiBAcHJvcGVydHkge0FycmF5fHVuZGVmaW5lZH0gYXJncyAtIHRoZSBhcmd1bWVudHMgdG8gYmUgcGFzc2VkIHRvIHRoZSBtZXRob2RcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtvYmplY3R9IERpc3BhdGNoUmVzcG9uc2VNZXNzYWdlIC0gYSBtZXNzYWdlIHRvIHRoZSBkaXNwYXRjaCBzeXN0ZW0gcmVwcmVzZW50aW5nIHRoZSByZXN1bHRzIG9mIGEgY2FsbFxuICogQHByb3BlcnR5IHsqfSByZXNwb25zZUlkIC0gYSBjb3B5IG9mIHRoZSByZXNwb25zZSBJRCBmcm9tIHRoZSBjYWxsIHdoaWNoIGdlbmVyYXRlZCB0aGlzIHJlc3BvbnNlXG4gKiBAcHJvcGVydHkgeyp8dW5kZWZpbmVkfSBlcnJvciAtIGlmIHRoaXMgaXMgdHJ1dGh5LCB0aGVuIGl0IGNvbnRhaW5zIHJlc3VsdHMgZnJvbSBhIGZhaWxlZCBjYWxsIChzdWNoIGFzIGFuIGV4Y2VwdGlvbilcbiAqIEBwcm9wZXJ0eSB7Knx1bmRlZmluZWR9IHJlc3VsdCAtIGlmIGVycm9yIGlzIG5vdCB0cnV0aHksIHRoZW4gdGhpcyBjb250YWlucyB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBjYWxsIChpZiBhbnkpXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7RGlzcGF0Y2hDYWxsTWVzc2FnZXxEaXNwYXRjaFJlc3BvbnNlTWVzc2FnZX0gRGlzcGF0Y2hNZXNzYWdlXG4gKiBBbnkgbWVzc2FnZSB0byB0aGUgZGlzcGF0Y2ggc3lzdGVtLlxuICovXG5cbi8qKlxuICogVGhlIFNoYXJlZERpc3BhdGNoIGNsYXNzIGlzIHJlc3BvbnNpYmxlIGZvciBkaXNwYXRjaCBmZWF0dXJlcyBzaGFyZWQgYnlcbiAqIHtAbGluayBDZW50cmFsRGlzcGF0Y2h9IGFuZCB7QGxpbmsgV29ya2VyRGlzcGF0Y2h9LlxuICovXG5jbGFzcyBTaGFyZWREaXNwYXRjaCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogTGlzdCBvZiBjYWxsYmFjayByZWdpc3RyYXRpb25zIGZvciBwcm9taXNlcyB3YWl0aW5nIGZvciBhIHJlc3BvbnNlIGZyb20gYSBjYWxsIHRvIGEgc2VydmljZSBvbiBhbm90aGVyXG4gICAgICAgICAqIHdvcmtlci4gQSBjYWxsYmFjayByZWdpc3RyYXRpb24gaXMgYW4gYXJyYXkgb2YgW3Jlc29sdmUscmVqZWN0XSBQcm9taXNlIGZ1bmN0aW9ucy5cbiAgICAgICAgICogQ2FsbHMgdG8gbG9jYWwgc2VydmljZXMgZG9uJ3QgZW50ZXIgdGhpcyBsaXN0LlxuICAgICAgICAgKiBAdHlwZSB7QXJyYXkuPEZ1bmN0aW9uW10+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSBbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG5leHQgcmVzcG9uc2UgSUQgdG8gYmUgdXNlZC5cbiAgICAgICAgICogQHR5cGUge2ludH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmV4dFJlc3BvbnNlSWQgPSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGwgYSBwYXJ0aWN1bGFyIG1ldGhvZCBvbiBhIHBhcnRpY3VsYXIgc2VydmljZSwgcmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoYXQgc2VydmljZSBpcyBwcm92aWRlZCBsb2NhbGx5IG9yIG9uXG4gICAgICogYSB3b3JrZXIuIElmIHRoZSBzZXJ2aWNlIGlzIHByb3ZpZGVkIGJ5IGEgd29ya2VyLCB0aGUgYGFyZ3NgIHdpbGwgYmUgY29waWVkIHVzaW5nIHRoZSBTdHJ1Y3R1cmVkIENsb25lXG4gICAgICogYWxnb3JpdGhtLCBleGNlcHQgZm9yIGFueSBpdGVtcyB3aGljaCBhcmUgYWxzbyBpbiB0aGUgYHRyYW5zZmVyYCBsaXN0LiBPd25lcnNoaXAgb2YgdGhvc2UgaXRlbXMgd2lsbCBiZVxuICAgICAqIHRyYW5zZmVycmVkIHRvIHRoZSB3b3JrZXIsIGFuZCB0aGV5IHNob3VsZCBub3QgYmUgdXNlZCBhZnRlciB0aGlzIGNhbGwuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIGRpc3BhdGNoZXIuY2FsbCgndm0nLCAnc2V0RGF0YScsICdjYXQnLCA0Mik7XG4gICAgICogICAgICAvLyB0aGlzIGZpbmRzIHRoZSB3b3JrZXIgZm9yIHRoZSAndm0nIHNlcnZpY2UsIHRoZW4gb24gdGhhdCB3b3JrZXIgY2FsbHM6XG4gICAgICogICAgICB2bS5zZXREYXRhKCdjYXQnLCA0Mik7XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlcnZpY2UgLSB0aGUgbmFtZSBvZiB0aGUgc2VydmljZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIC0gdGhlIG5hbWUgb2YgdGhlIG1ldGhvZC5cbiAgICAgKiBAcGFyYW0geyp9IFthcmdzXSAtIHRoZSBhcmd1bWVudHMgdG8gYmUgY29waWVkIHRvIHRoZSBtZXRob2QsIGlmIGFueS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gLSBhIHByb21pc2UgZm9yIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIHNlcnZpY2UgbWV0aG9kLlxuICAgICAqL1xuICAgIGNhbGwgKHNlcnZpY2UsIG1ldGhvZCwgLi4uYXJncykge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2ZlckNhbGwoc2VydmljZSwgbWV0aG9kLCBudWxsLCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsIGEgcGFydGljdWxhciBtZXRob2Qgb24gYSBwYXJ0aWN1bGFyIHNlcnZpY2UsIHJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGF0IHNlcnZpY2UgaXMgcHJvdmlkZWQgbG9jYWxseSBvciBvblxuICAgICAqIGEgd29ya2VyLiBJZiB0aGUgc2VydmljZSBpcyBwcm92aWRlZCBieSBhIHdvcmtlciwgdGhlIGBhcmdzYCB3aWxsIGJlIGNvcGllZCB1c2luZyB0aGUgU3RydWN0dXJlZCBDbG9uZVxuICAgICAqIGFsZ29yaXRobSwgZXhjZXB0IGZvciBhbnkgaXRlbXMgd2hpY2ggYXJlIGFsc28gaW4gdGhlIGB0cmFuc2ZlcmAgbGlzdC4gT3duZXJzaGlwIG9mIHRob3NlIGl0ZW1zIHdpbGwgYmVcbiAgICAgKiB0cmFuc2ZlcnJlZCB0byB0aGUgd29ya2VyLCBhbmQgdGhleSBzaG91bGQgbm90IGJlIHVzZWQgYWZ0ZXIgdGhpcyBjYWxsLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICBkaXNwYXRjaGVyLnRyYW5zZmVyQ2FsbCgndm0nLCAnc2V0RGF0YScsIFtteUFycmF5QnVmZmVyXSwgJ2NhdCcsIG15QXJyYXlCdWZmZXIpO1xuICAgICAqICAgICAgLy8gdGhpcyBmaW5kcyB0aGUgd29ya2VyIGZvciB0aGUgJ3ZtJyBzZXJ2aWNlLCB0cmFuc2ZlcnMgYG15QXJyYXlCdWZmZXJgIHRvIGl0LCB0aGVuIG9uIHRoYXQgd29ya2VyIGNhbGxzOlxuICAgICAqICAgICAgdm0uc2V0RGF0YSgnY2F0JywgbXlBcnJheUJ1ZmZlcik7XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlcnZpY2UgLSB0aGUgbmFtZSBvZiB0aGUgc2VydmljZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIC0gdGhlIG5hbWUgb2YgdGhlIG1ldGhvZC5cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBbdHJhbnNmZXJdIC0gb2JqZWN0cyB0byBiZSB0cmFuc2ZlcnJlZCBpbnN0ZWFkIG9mIGNvcGllZC4gTXVzdCBiZSBwcmVzZW50IGluIGBhcmdzYCB0byBiZSB1c2VmdWwuXG4gICAgICogQHBhcmFtIHsqfSBbYXJnc10gLSB0aGUgYXJndW1lbnRzIHRvIGJlIGNvcGllZCB0byB0aGUgbWV0aG9kLCBpZiBhbnkuXG4gICAgICogQHJldHVybnMge1Byb21pc2V9IC0gYSBwcm9taXNlIGZvciB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBzZXJ2aWNlIG1ldGhvZC5cbiAgICAgKi9cbiAgICB0cmFuc2ZlckNhbGwgKHNlcnZpY2UsIG1ldGhvZCwgdHJhbnNmZXIsIC4uLmFyZ3MpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHtwcm92aWRlciwgaXNSZW1vdGV9ID0gdGhpcy5fZ2V0U2VydmljZVByb3ZpZGVyKHNlcnZpY2UpO1xuICAgICAgICAgICAgaWYgKHByb3ZpZGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzUmVtb3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZW1vdGVUcmFuc2ZlckNhbGwocHJvdmlkZXIsIHNlcnZpY2UsIG1ldGhvZCwgdHJhbnNmZXIsIC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHByb3ZpZGVyW21ldGhvZF0uYXBwbHkocHJvdmlkZXIsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoYFNlcnZpY2Ugbm90IGZvdW5kOiAke3NlcnZpY2V9YCkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBhIHBhcnRpY3VsYXIgc2VydmljZSBsaXZlcyBvbiBhbm90aGVyIHdvcmtlci5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VydmljZSAtIHRoZSBzZXJ2aWNlIHRvIGNoZWNrLlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSAtIHRydWUgaWYgdGhlIHNlcnZpY2UgaXMgcmVtb3RlIChjYWxscyBtdXN0IGNyb3NzIGEgV29ya2VyIGJvdW5kYXJ5KSwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2lzUmVtb3RlU2VydmljZSAoc2VydmljZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0U2VydmljZVByb3ZpZGVyKHNlcnZpY2UpLmlzUmVtb3RlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExpa2Uge0BsaW5rIGNhbGx9LCBidXQgZm9yY2UgdGhlIGNhbGwgdG8gYmUgcG9zdGVkIHRocm91Z2ggYSBwYXJ0aWN1bGFyIGNvbW11bmljYXRpb24gY2hhbm5lbC5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcHJvdmlkZXIgLSBzZW5kIHRoZSBjYWxsIHRocm91Z2ggdGhpcyBvYmplY3QncyBgcG9zdE1lc3NhZ2VgIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZXJ2aWNlIC0gdGhlIG5hbWUgb2YgdGhlIHNlcnZpY2UuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZCAtIHRoZSBuYW1lIG9mIHRoZSBtZXRob2QuXG4gICAgICogQHBhcmFtIHsqfSBbYXJnc10gLSB0aGUgYXJndW1lbnRzIHRvIGJlIGNvcGllZCB0byB0aGUgbWV0aG9kLCBpZiBhbnkuXG4gICAgICogQHJldHVybnMge1Byb21pc2V9IC0gYSBwcm9taXNlIGZvciB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBzZXJ2aWNlIG1ldGhvZC5cbiAgICAgKi9cbiAgICBfcmVtb3RlQ2FsbCAocHJvdmlkZXIsIHNlcnZpY2UsIG1ldGhvZCwgLi4uYXJncykge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVtb3RlVHJhbnNmZXJDYWxsKHByb3ZpZGVyLCBzZXJ2aWNlLCBtZXRob2QsIG51bGwsIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExpa2Uge0BsaW5rIHRyYW5zZmVyQ2FsbH0sIGJ1dCBmb3JjZSB0aGUgY2FsbCB0byBiZSBwb3N0ZWQgdGhyb3VnaCBhIHBhcnRpY3VsYXIgY29tbXVuaWNhdGlvbiBjaGFubmVsLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm92aWRlciAtIHNlbmQgdGhlIGNhbGwgdGhyb3VnaCB0aGlzIG9iamVjdCdzIGBwb3N0TWVzc2FnZWAgZnVuY3Rpb24uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlcnZpY2UgLSB0aGUgbmFtZSBvZiB0aGUgc2VydmljZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIC0gdGhlIG5hbWUgb2YgdGhlIG1ldGhvZC5cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBbdHJhbnNmZXJdIC0gb2JqZWN0cyB0byBiZSB0cmFuc2ZlcnJlZCBpbnN0ZWFkIG9mIGNvcGllZC4gTXVzdCBiZSBwcmVzZW50IGluIGBhcmdzYCB0byBiZSB1c2VmdWwuXG4gICAgICogQHBhcmFtIHsqfSBbYXJnc10gLSB0aGUgYXJndW1lbnRzIHRvIGJlIGNvcGllZCB0byB0aGUgbWV0aG9kLCBpZiBhbnkuXG4gICAgICogQHJldHVybnMge1Byb21pc2V9IC0gYSBwcm9taXNlIGZvciB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBzZXJ2aWNlIG1ldGhvZC5cbiAgICAgKi9cbiAgICBfcmVtb3RlVHJhbnNmZXJDYWxsIChwcm92aWRlciwgc2VydmljZSwgbWV0aG9kLCB0cmFuc2ZlciwgLi4uYXJncykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VJZCA9IHRoaXMuX3N0b3JlQ2FsbGJhY2tzKHJlc29sdmUsIHJlamVjdCk7XG5cbiAgICAgICAgICAgIC8qKiBAVE9ETzogcmVtb3ZlIHRoaXMgaGFjayEgdGhpcyBpcyBqdXN0IGhlcmUgc28gd2UgZG9uJ3QgdHJ5IHRvIHNlbmQgYHV0aWxgIHRvIGEgd29ya2VyICovXG4gICAgICAgICAgICBpZiAoKGFyZ3MubGVuZ3RoID4gMCkgJiYgKHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0ueWllbGQgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICAgICAgICAgICAgYXJncy5wb3AoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRyYW5zZmVyKSB7XG4gICAgICAgICAgICAgICAgcHJvdmlkZXIucG9zdE1lc3NhZ2Uoe3NlcnZpY2UsIG1ldGhvZCwgcmVzcG9uc2VJZCwgYXJnc30sIHRyYW5zZmVyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvdmlkZXIucG9zdE1lc3NhZ2Uoe3NlcnZpY2UsIG1ldGhvZCwgcmVzcG9uc2VJZCwgYXJnc30pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9yZSBjYWxsYmFjayBmdW5jdGlvbnMgcGVuZGluZyBhIHJlc3BvbnNlIG1lc3NhZ2UuXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSAtIGZ1bmN0aW9uIHRvIGNhbGwgaWYgdGhlIHNlcnZpY2UgbWV0aG9kIHJldHVybnMuXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IC0gZnVuY3Rpb24gdG8gY2FsbCBpZiB0aGUgc2VydmljZSBtZXRob2QgdGhyb3dzLlxuICAgICAqIEByZXR1cm5zIHsqfSAtIGEgdW5pcXVlIHJlc3BvbnNlIElEIGZvciB0aGlzIHNldCBvZiBjYWxsYmFja3MuIFNlZSB7QGxpbmsgX2RlbGl2ZXJSZXNwb25zZX0uXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIF9zdG9yZUNhbGxiYWNrcyAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlSWQgPSB0aGlzLm5leHRSZXNwb25zZUlkKys7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzW3Jlc3BvbnNlSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gICAgICAgIHJldHVybiByZXNwb25zZUlkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGl2ZXIgY2FsbCByZXNwb25zZSBmcm9tIGEgd29ya2VyLiBUaGlzIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBhcyB0aGUgcmVzdWx0IG9mIGEgbWVzc2FnZSBmcm9tIGEgd29ya2VyLlxuICAgICAqIEBwYXJhbSB7aW50fSByZXNwb25zZUlkIC0gdGhlIHJlc3BvbnNlIElEIG9mIHRoZSBjYWxsYmFjayBzZXQgdG8gY2FsbC5cbiAgICAgKiBAcGFyYW0ge0Rpc3BhdGNoUmVzcG9uc2VNZXNzYWdlfSBtZXNzYWdlIC0gdGhlIG1lc3NhZ2UgY29udGFpbmluZyB0aGUgcmVzcG9uc2UgdmFsdWUocykuXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIF9kZWxpdmVyUmVzcG9uc2UgKHJlc3BvbnNlSWQsIG1lc3NhZ2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IFtyZXNvbHZlLCByZWplY3RdID0gdGhpcy5jYWxsYmFja3NbcmVzcG9uc2VJZF07XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5jYWxsYmFja3NbcmVzcG9uc2VJZF07XG4gICAgICAgICAgICBpZiAobWVzc2FnZS5lcnJvcikge1xuICAgICAgICAgICAgICAgIHJlamVjdChtZXNzYWdlLmVycm9yKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShtZXNzYWdlLnJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGxvZy5lcnJvcihgRGlzcGF0Y2ggY2FsbGJhY2sgZmFpbGVkOiAke0pTT04uc3RyaW5naWZ5KGUpfWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGEgbWVzc2FnZSBldmVudCByZWNlaXZlZCBmcm9tIGEgY29ubmVjdGVkIHdvcmtlci5cbiAgICAgKiBAcGFyYW0ge1dvcmtlcn0gd29ya2VyIC0gdGhlIHdvcmtlciB3aGljaCBzZW50IHRoZSBtZXNzYWdlLCBvciB0aGUgZ2xvYmFsIG9iamVjdCBpZiBydW5uaW5nIGluIGEgd29ya2VyLlxuICAgICAqIEBwYXJhbSB7TWVzc2FnZUV2ZW50fSBldmVudCAtIHRoZSBtZXNzYWdlIGV2ZW50IHRvIGJlIGhhbmRsZWQuXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIF9vbk1lc3NhZ2UgKHdvcmtlciwgZXZlbnQpIHtcbiAgICAgICAgLyoqIEB0eXBlIHtEaXNwYXRjaE1lc3NhZ2V9ICovXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBldmVudC5kYXRhO1xuICAgICAgICBtZXNzYWdlLmFyZ3MgPSBtZXNzYWdlLmFyZ3MgfHwgW107XG4gICAgICAgIGxldCBwcm9taXNlO1xuICAgICAgICBpZiAobWVzc2FnZS5zZXJ2aWNlKSB7XG4gICAgICAgICAgICBpZiAobWVzc2FnZS5zZXJ2aWNlID09PSAnZGlzcGF0Y2gnKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZSA9IHRoaXMuX29uRGlzcGF0Y2hNZXNzYWdlKHdvcmtlciwgbWVzc2FnZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb21pc2UgPSB0aGlzLmNhbGwobWVzc2FnZS5zZXJ2aWNlLCBtZXNzYWdlLm1ldGhvZCwgLi4ubWVzc2FnZS5hcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbWVzc2FnZS5yZXNwb25zZUlkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgbG9nLmVycm9yKGBEaXNwYXRjaCBjYXVnaHQgbWFsZm9ybWVkIG1lc3NhZ2UgZnJvbSBhIHdvcmtlcjogJHtKU09OLnN0cmluZ2lmeShldmVudCl9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9kZWxpdmVyUmVzcG9uc2UobWVzc2FnZS5yZXNwb25zZUlkLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvbWlzZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlLnJlc3BvbnNlSWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgbG9nLmVycm9yKGBEaXNwYXRjaCBtZXNzYWdlIG1pc3NpbmcgcmVxdWlyZWQgcmVzcG9uc2UgSUQ6ICR7SlNPTi5zdHJpbmdpZnkoZXZlbnQpfWApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9PiB3b3JrZXIucG9zdE1lc3NhZ2Uoe3Jlc3BvbnNlSWQ6IG1lc3NhZ2UucmVzcG9uc2VJZCwgcmVzdWx0fSksXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHdvcmtlci5wb3N0TWVzc2FnZSh7cmVzcG9uc2VJZDogbWVzc2FnZS5yZXNwb25zZUlkLCBlcnJvcn0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZldGNoIHRoZSBzZXJ2aWNlIHByb3ZpZGVyIG9iamVjdCBmb3IgYSBwYXJ0aWN1bGFyIHNlcnZpY2UgbmFtZS5cbiAgICAgKiBAYWJzdHJhY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VydmljZSAtIHRoZSBuYW1lIG9mIHRoZSBzZXJ2aWNlIHRvIGxvb2sgdXBcbiAgICAgKiBAcmV0dXJucyB7e3Byb3ZpZGVyOihvYmplY3R8V29ya2VyKSwgaXNSZW1vdGU6Ym9vbGVhbn19IC0gdGhlIG1lYW5zIHRvIGNvbnRhY3QgdGhlIHNlcnZpY2UsIGlmIGZvdW5kXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIF9nZXRTZXJ2aWNlUHJvdmlkZXIgKHNlcnZpY2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZ2V0IHByb3ZpZGVyIGZvciAke3NlcnZpY2V9OiBfZ2V0U2VydmljZVByb3ZpZGVyIG5vdCBpbXBsZW1lbnRlZGApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBhIGNhbGwgbWVzc2FnZSBzZW50IHRvIHRoZSBkaXNwYXRjaCBzZXJ2aWNlIGl0c2VsZlxuICAgICAqIEBhYnN0cmFjdFxuICAgICAqIEBwYXJhbSB7V29ya2VyfSB3b3JrZXIgLSB0aGUgd29ya2VyIHdoaWNoIHNlbnQgdGhlIG1lc3NhZ2UuXG4gICAgICogQHBhcmFtIHtEaXNwYXRjaENhbGxNZXNzYWdlfSBtZXNzYWdlIC0gdGhlIG1lc3NhZ2UgdG8gYmUgaGFuZGxlZC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZXx1bmRlZmluZWR9IC0gYSBwcm9taXNlIGZvciB0aGUgcmVzdWx0cyBvZiB0aGlzIG9wZXJhdGlvbiwgaWYgYXBwcm9wcmlhdGVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9vbkRpc3BhdGNoTWVzc2FnZSAod29ya2VyLCBtZXNzYWdlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5pbXBsZW1lbnRlZCBkaXNwYXRjaCBtZXNzYWdlIGhhbmRsZXIgY2Fubm90IGhhbmRsZSAke21lc3NhZ2UubWV0aG9kfSBtZXRob2RgKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2hhcmVkRGlzcGF0Y2g7XG4iLCJjb25zdCBTaGFyZWREaXNwYXRjaCA9IHJlcXVpcmUoJy4vc2hhcmVkLWRpc3BhdGNoJyk7XG5cbmNvbnN0IGxvZyA9IHJlcXVpcmUoJy4uL3V0aWwvbG9nJyk7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBwcm92aWRlcyBhIFdvcmtlciB3aXRoIHRoZSBtZWFucyB0byBwYXJ0aWNpcGF0ZSBpbiB0aGUgbWVzc2FnZSBkaXNwYXRjaCBzeXN0ZW0gbWFuYWdlZCBieSBDZW50cmFsRGlzcGF0Y2guXG4gKiBGcm9tIGFueSBjb250ZXh0IGluIHRoZSBtZXNzYWdpbmcgc3lzdGVtLCB0aGUgZGlzcGF0Y2hlcidzIFwiY2FsbFwiIG1ldGhvZCBjYW4gY2FsbCBhbnkgbWV0aG9kIG9uIGFueSBcInNlcnZpY2VcIlxuICogcHJvdmlkZWQgaW4gYW55IHBhcnRpY2lwYXRpbmcgY29udGV4dC4gVGhlIGRpc3BhdGNoIHN5c3RlbSB3aWxsIGZvcndhcmQgZnVuY3Rpb24gYXJndW1lbnRzIGFuZCByZXR1cm4gdmFsdWVzIGFjcm9zc1xuICogd29ya2VyIGJvdW5kYXJpZXMgYXMgbmVlZGVkLlxuICogQHNlZSB7Q2VudHJhbERpc3BhdGNofVxuICovXG5jbGFzcyBXb3JrZXJEaXNwYXRjaCBleHRlbmRzIFNoYXJlZERpc3BhdGNoIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgcHJvbWlzZSB3aWxsIGJlIHJlc29sdmVkIHdoZW4gd2UgaGF2ZSBzdWNjZXNzZnVsbHkgY29ubmVjdGVkIHRvIGNlbnRyYWwgZGlzcGF0Y2guXG4gICAgICAgICAqIEB0eXBlIHtQcm9taXNlfVxuICAgICAgICAgKiBAc2VlIHt3YWl0Rm9yQ29ubmVjdGlvbn1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25Qcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9vbkNvbm5lY3QgPSByZXNvbHZlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTWFwIG9mIHNlcnZpY2UgbmFtZSB0byBsb2NhbCBzZXJ2aWNlIHByb3ZpZGVyLlxuICAgICAgICAgKiBJZiBhIHNlcnZpY2UgaXMgbm90IGxpc3RlZCBoZXJlLCBpdCBpcyBhc3N1bWVkIHRvIGJlIHByb3ZpZGVkIGJ5IGFub3RoZXIgY29udGV4dCAoYW5vdGhlciBXb3JrZXIgb3IgdGhlIG1haW5cbiAgICAgICAgICogdGhyZWFkKS5cbiAgICAgICAgICogQHNlZSB7c2V0U2VydmljZX1cbiAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2VydmljZXMgPSB7fTtcblxuICAgICAgICB0aGlzLl9vbk1lc3NhZ2UgPSB0aGlzLl9vbk1lc3NhZ2UuYmluZCh0aGlzLCBzZWxmKTtcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgc2VsZi5vbm1lc3NhZ2UgPSB0aGlzLl9vbk1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gYSBwcm9taXNlIHdoaWNoIHdpbGwgcmVzb2x2ZSB1cG9uIGNvbm5lY3Rpb24gdG8gY2VudHJhbCBkaXNwYXRjaC4gSWYgeW91IG5lZWQgdG8gbWFrZSBhIGNhbGxcbiAgICAgKiBpbW1lZGlhdGVseSBvbiBcInN0YXJ0dXBcIiB5b3UgY2FuIGF0dGFjaCBhICd0aGVuJyB0byB0aGlzIHByb21pc2UuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIGRpc3BhdGNoLndhaXRGb3JDb25uZWN0aW9uLnRoZW4oKCkgPT4ge1xuICAgICAqICAgICAgICAgIGRpc3BhdGNoLmNhbGwoJ215U2VydmljZScsICdoZWxsbycpO1xuICAgICAqICAgICAgfSlcbiAgICAgKi9cbiAgICBnZXQgd2FpdEZvckNvbm5lY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29ubmVjdGlvblByb21pc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGEgbG9jYWwgb2JqZWN0IGFzIHRoZSBnbG9iYWwgcHJvdmlkZXIgb2YgdGhlIHNwZWNpZmllZCBzZXJ2aWNlLlxuICAgICAqIFdBUk5JTkc6IEFueSBtZXRob2Qgb24gdGhlIHByb3ZpZGVyIGNhbiBiZSBjYWxsZWQgZnJvbSBhbnkgd29ya2VyIHdpdGhpbiB0aGUgZGlzcGF0Y2ggc3lzdGVtLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZXJ2aWNlIC0gYSBnbG9iYWxseSB1bmlxdWUgc3RyaW5nIGlkZW50aWZ5aW5nIHRoaXMgc2VydmljZS4gRXhhbXBsZXM6ICd2bScsICdndWknLCAnZXh0ZW5zaW9uOScuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHByb3ZpZGVyIC0gYSBsb2NhbCBvYmplY3Qgd2hpY2ggcHJvdmlkZXMgdGhpcyBzZXJ2aWNlLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfSAtIGEgcHJvbWlzZSB3aGljaCB3aWxsIHJlc29sdmUgb25jZSB0aGUgc2VydmljZSBpcyByZWdpc3RlcmVkLlxuICAgICAqL1xuICAgIHNldFNlcnZpY2UgKHNlcnZpY2UsIHByb3ZpZGVyKSB7XG4gICAgICAgIGlmICh0aGlzLnNlcnZpY2VzLmhhc093blByb3BlcnR5KHNlcnZpY2UpKSB7XG4gICAgICAgICAgICBsb2cud2FybihgV29ya2VyIGRpc3BhdGNoIHJlcGxhY2luZyBleGlzdGluZyBzZXJ2aWNlIHByb3ZpZGVyIGZvciAke3NlcnZpY2V9YCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXJ2aWNlc1tzZXJ2aWNlXSA9IHByb3ZpZGVyO1xuICAgICAgICByZXR1cm4gdGhpcy53YWl0Rm9yQ29ubmVjdGlvbi50aGVuKCgpID0+IHRoaXMuX3JlbW90ZUNhbGwoc2VsZiwgJ2Rpc3BhdGNoJywgJ3NldFNlcnZpY2UnLCBzZXJ2aWNlKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmV0Y2ggdGhlIHNlcnZpY2UgcHJvdmlkZXIgb2JqZWN0IGZvciBhIHBhcnRpY3VsYXIgc2VydmljZSBuYW1lLlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZXJ2aWNlIC0gdGhlIG5hbWUgb2YgdGhlIHNlcnZpY2UgdG8gbG9vayB1cFxuICAgICAqIEByZXR1cm5zIHt7cHJvdmlkZXI6KG9iamVjdHxXb3JrZXIpLCBpc1JlbW90ZTpib29sZWFufX0gLSB0aGUgbWVhbnMgdG8gY29udGFjdCB0aGUgc2VydmljZSwgaWYgZm91bmRcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgX2dldFNlcnZpY2VQcm92aWRlciAoc2VydmljZSkge1xuICAgICAgICAvLyBpZiB3ZSBkb24ndCBoYXZlIGEgbG9jYWwgc2VydmljZSBieSB0aGlzIG5hbWUsIGNvbnRhY3QgY2VudHJhbCBkaXNwYXRjaCBieSBjYWxsaW5nIGBwb3N0TWVzc2FnZWAgb24gc2VsZlxuICAgICAgICBjb25zdCBwcm92aWRlciA9IHRoaXMuc2VydmljZXNbc2VydmljZV07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm92aWRlcjogcHJvdmlkZXIgfHwgc2VsZixcbiAgICAgICAgICAgIGlzUmVtb3RlOiAhcHJvdmlkZXJcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgYSBjYWxsIG1lc3NhZ2Ugc2VudCB0byB0aGUgZGlzcGF0Y2ggc2VydmljZSBpdHNlbGZcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKiBAcGFyYW0ge1dvcmtlcn0gd29ya2VyIC0gdGhlIHdvcmtlciB3aGljaCBzZW50IHRoZSBtZXNzYWdlLlxuICAgICAqIEBwYXJhbSB7RGlzcGF0Y2hDYWxsTWVzc2FnZX0gbWVzc2FnZSAtIHRoZSBtZXNzYWdlIHRvIGJlIGhhbmRsZWQuXG4gICAgICogQHJldHVybnMge1Byb21pc2V8dW5kZWZpbmVkfSAtIGEgcHJvbWlzZSBmb3IgdGhlIHJlc3VsdHMgb2YgdGhpcyBvcGVyYXRpb24sIGlmIGFwcHJvcHJpYXRlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIF9vbkRpc3BhdGNoTWVzc2FnZSAod29ya2VyLCBtZXNzYWdlKSB7XG4gICAgICAgIGxldCBwcm9taXNlO1xuICAgICAgICBzd2l0Y2ggKG1lc3NhZ2UubWV0aG9kKSB7XG4gICAgICAgIGNhc2UgJ2hhbmRzaGFrZSc6XG4gICAgICAgICAgICBwcm9taXNlID0gdGhpcy5fb25Db25uZWN0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndGVybWluYXRlJzpcbiAgICAgICAgICAgIC8vIERvbid0IGNsb3NlIHVudGlsIG5leHQgdGljaywgYWZ0ZXIgc2VuZGluZyBjb25maXJtYXRpb24gYmFja1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZWxmLmNsb3NlKCksIDApO1xuICAgICAgICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBsb2cuZXJyb3IoYFdvcmtlciBkaXNwYXRjaCByZWNlaXZlZCBtZXNzYWdlIGZvciB1bmtub3duIG1ldGhvZDogJHttZXNzYWdlLm1ldGhvZH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFdvcmtlckRpc3BhdGNoKCk7XG4iLCIvKipcbiAqIEJsb2NrIGFyZ3VtZW50IHR5cGVzXG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG5jb25zdCBBcmd1bWVudFR5cGUgPSB7XG4gICAgLyoqXG4gICAgICogTnVtZXJpYyB2YWx1ZSB3aXRoIGFuZ2xlIHBpY2tlclxuICAgICAqL1xuICAgIEFOR0xFOiAnYW5nbGUnLFxuXG4gICAgLyoqXG4gICAgICogQm9vbGVhbiB2YWx1ZSB3aXRoIGhleGFnb25hbCBwbGFjZWhvbGRlclxuICAgICAqL1xuICAgIEJPT0xFQU46ICdCb29sZWFuJyxcblxuICAgIC8qKlxuICAgICAqIE51bWVyaWMgdmFsdWUgd2l0aCBjb2xvciBwaWNrZXJcbiAgICAgKi9cbiAgICBDT0xPUjogJ2NvbG9yJyxcblxuICAgIC8qKlxuICAgICAqIE51bWVyaWMgdmFsdWUgd2l0aCB0ZXh0IGZpZWxkXG4gICAgICovXG4gICAgTlVNQkVSOiAnbnVtYmVyJyxcblxuICAgIC8qKlxuICAgICAqIFN0cmluZyB2YWx1ZSB3aXRoIHRleHQgZmllbGRcbiAgICAgKi9cbiAgICBTVFJJTkc6ICdzdHJpbmcnLFxuXG4gICAgLyoqXG4gICAgICogU3RyaW5nIHZhbHVlIHdpdGggbWF0cml4IGZpZWxkXG4gICAgICovXG4gICAgTUFUUklYOiAnbWF0cml4JyxcblxuICAgIC8qKlxuICAgICAqIE1JREkgbm90ZSBudW1iZXIgd2l0aCBub3RlIHBpY2tlciAocGlhbm8pIGZpZWxkXG4gICAgICovXG4gICAgTk9URTogJ25vdGUnXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFyZ3VtZW50VHlwZTtcbiIsIi8qKlxuICogVHlwZXMgb2YgYmxvY2tcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbmNvbnN0IEJsb2NrVHlwZSA9IHtcbiAgICAvKipcbiAgICAgKiBCb29sZWFuIHJlcG9ydGVyIHdpdGggaGV4YWdvbmFsIHNoYXBlXG4gICAgICovXG4gICAgQk9PTEVBTjogJ0Jvb2xlYW4nLFxuXG4gICAgLyoqXG4gICAgICogQSBidXR0b24gKG5vdCBhbiBhY3R1YWwgYmxvY2spIGZvciBzb21lIHNwZWNpYWwgYWN0aW9uLCBsaWtlIG1ha2luZyBhIHZhcmlhYmxlXG4gICAgICovXG4gICAgQlVUVE9OOiAnYnV0dG9uJyxcblxuICAgIC8qKlxuICAgICAqIENvbW1hbmQgYmxvY2tcbiAgICAgKi9cbiAgICBDT01NQU5EOiAnY29tbWFuZCcsXG5cbiAgICAvKipcbiAgICAgKiBTcGVjaWFsaXplZCBjb21tYW5kIGJsb2NrIHdoaWNoIG1heSBvciBtYXkgbm90IHJ1biBhIGNoaWxkIGJyYW5jaFxuICAgICAqIFRoZSB0aHJlYWQgY29udGludWVzIHdpdGggdGhlIG5leHQgYmxvY2sgd2hldGhlciBvciBub3QgYSBjaGlsZCBicmFuY2ggcmFuLlxuICAgICAqL1xuICAgIENPTkRJVElPTkFMOiAnY29uZGl0aW9uYWwnLFxuXG4gICAgLyoqXG4gICAgICogU3BlY2lhbGl6ZWQgaGF0IGJsb2NrIHdpdGggbm8gaW1wbGVtZW50YXRpb24gZnVuY3Rpb25cbiAgICAgKiBUaGlzIHN0YWNrIG9ubHkgcnVucyBpZiB0aGUgY29ycmVzcG9uZGluZyBldmVudCBpcyBlbWl0dGVkIGJ5IG90aGVyIGNvZGUuXG4gICAgICovXG4gICAgRVZFTlQ6ICdldmVudCcsXG5cbiAgICAvKipcbiAgICAgKiBIYXQgYmxvY2sgd2hpY2ggY29uZGl0aW9uYWxseSBzdGFydHMgYSBibG9jayBzdGFja1xuICAgICAqL1xuICAgIEhBVDogJ2hhdCcsXG5cbiAgICAvKipcbiAgICAgKiBTcGVjaWFsaXplZCBjb21tYW5kIGJsb2NrIHdoaWNoIG1heSBvciBtYXkgbm90IHJ1biBhIGNoaWxkIGJyYW5jaFxuICAgICAqIElmIGEgY2hpbGQgYnJhbmNoIHJ1bnMsIHRoZSB0aHJlYWQgZXZhbHVhdGVzIHRoZSBsb29wIGJsb2NrIGFnYWluLlxuICAgICAqL1xuICAgIExPT1A6ICdsb29wJyxcblxuICAgIC8qKlxuICAgICAqIEdlbmVyYWwgcmVwb3J0ZXIgd2l0aCBudW1lcmljIG9yIHN0cmluZyB2YWx1ZVxuICAgICAqL1xuICAgIFJFUE9SVEVSOiAncmVwb3J0ZXInXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJsb2NrVHlwZTtcbiIsIi8qKlxuICogRGVmYXVsdCB0eXBlcyBvZiBUYXJnZXQgc3VwcG9ydGVkIGJ5IHRoZSBWTVxuICogQGVudW0ge3N0cmluZ31cbiAqL1xuY29uc3QgVGFyZ2V0VHlwZSA9IHtcbiAgICAvKipcbiAgICAgKiBSZW5kZXJlZCB0YXJnZXQgd2hpY2ggY2FuIG1vdmUsIGNoYW5nZSBjb3N0dW1lcywgZXRjLlxuICAgICAqL1xuICAgIFNQUklURTogJ3Nwcml0ZScsXG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJlZCB0YXJnZXQgd2hpY2ggY2Fubm90IG1vdmUgYnV0IGNhbiBjaGFuZ2UgYmFja2Ryb3BzXG4gICAgICovXG4gICAgU1RBR0U6ICdzdGFnZSdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGFyZ2V0VHlwZTtcbiIsImNvbnN0IG1pbmlsb2cgPSByZXF1aXJlKCdtaW5pbG9nJyk7XG5taW5pbG9nLmVuYWJsZSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1pbmlsb2coJ3ZtJyk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iXSwic291cmNlUm9vdCI6IiJ9