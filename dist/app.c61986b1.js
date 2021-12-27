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
})({"../node_modules/@babel/runtime/helpers/classCallCheck.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"../node_modules/@babel/runtime/helpers/createClass.js":[function(require,module,exports) {
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"core/router.ts":[function(require,module,exports) {
"use strict";

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Router = /*#__PURE__*/function () {
  function Router() {
    (0, _classCallCheck2.default)(this, Router);
    this.isStart = false;
    this.routeTable = [];
    this.defaultRoute = null;
    window.addEventListener("hashchange", this.route.bind(this)); // 4-6 참조
  }

  (0, _createClass2.default)(Router, [{
    key: "setDefaultPage",
    value: function setDefaultPage(page) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.defaultRoute = {
        path: "",
        page: page,
        params: params
      };

      if (!this.isStart) {
        this.isStart = true;
        setTimeout(this.route.bind(this), 0);
      }
    }
  }, {
    key: "addRoutePath",
    value: function addRoutePath(path, page) {
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.routeTable.push({
        path: path,
        page: page,
        params: params
      });
    }
  }, {
    key: "route",
    value: function route() {
      var routePath = location.hash;

      if (routePath === "" && this.defaultRoute) {
        this.defaultRoute.page.render();
        return;
      } // routeInfo를 List가 아니라 Map 같은걸로 변경해서 개선할 수 있을 듯


      var _iterator = _createForOfIteratorHelper(this.routeTable),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var routeInfo = _step.value;

          if (routePath.indexOf(routeInfo.path) >= 0) {
            if (routeInfo.params) {
              var parseParams = routePath.match(routeInfo.params);

              if (parseParams) {
                routeInfo.page.render.apply(null, [parseParams[1]]);
              }
            } else {
              routeInfo.page.render();
            }

            return;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);
  return Router;
}();

exports.default = Router;
},{"@babel/runtime/helpers/classCallCheck":"../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"../node_modules/@babel/runtime/helpers/createClass.js"}],"../node_modules/@babel/runtime/helpers/arrayWithHoles.js":[function(require,module,exports) {
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":[function(require,module,exports) {
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"../node_modules/@babel/runtime/helpers/arrayLikeToArray.js":[function(require,module,exports) {
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":[function(require,module,exports) {
var arrayLikeToArray = require("./arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayLikeToArray.js":"../node_modules/@babel/runtime/helpers/arrayLikeToArray.js"}],"../node_modules/@babel/runtime/helpers/nonIterableRest.js":[function(require,module,exports) {
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"../node_modules/@babel/runtime/helpers/slicedToArray.js":[function(require,module,exports) {
var arrayWithHoles = require("./arrayWithHoles.js");

var iterableToArrayLimit = require("./iterableToArrayLimit.js");

var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");

var nonIterableRest = require("./nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayWithHoles.js":"../node_modules/@babel/runtime/helpers/arrayWithHoles.js","./iterableToArrayLimit.js":"../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js","./unsupportedIterableToArray.js":"../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js","./nonIterableRest.js":"../node_modules/@babel/runtime/helpers/nonIterableRest.js"}],"../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":[function(require,module,exports) {
var arrayLikeToArray = require("./arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayLikeToArray.js":"../node_modules/@babel/runtime/helpers/arrayLikeToArray.js"}],"../node_modules/@babel/runtime/helpers/iterableToArray.js":[function(require,module,exports) {
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"../node_modules/@babel/runtime/helpers/nonIterableSpread.js":[function(require,module,exports) {
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"../node_modules/@babel/runtime/helpers/toConsumableArray.js":[function(require,module,exports) {
var arrayWithoutHoles = require("./arrayWithoutHoles.js");

var iterableToArray = require("./iterableToArray.js");

var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");

var nonIterableSpread = require("./nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayWithoutHoles.js":"../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js","./iterableToArray.js":"../node_modules/@babel/runtime/helpers/iterableToArray.js","./unsupportedIterableToArray.js":"../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js","./nonIterableSpread.js":"../node_modules/@babel/runtime/helpers/nonIterableSpread.js"}],"../node_modules/@babel/runtime/helpers/setPrototypeOf.js":[function(require,module,exports) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"../node_modules/@babel/runtime/helpers/inherits.js":[function(require,module,exports) {
var setPrototypeOf = require("./setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  Object.defineProperty(subClass, "prototype", {
    value: Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    }),
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./setPrototypeOf.js":"../node_modules/@babel/runtime/helpers/setPrototypeOf.js"}],"../node_modules/@babel/runtime/helpers/typeof.js":[function(require,module,exports) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"../node_modules/@babel/runtime/helpers/assertThisInitialized.js":[function(require,module,exports) {
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":[function(require,module,exports) {
var _typeof = require("@babel/runtime/helpers/typeof")["default"];

var assertThisInitialized = require("./assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"@babel/runtime/helpers/typeof":"../node_modules/@babel/runtime/helpers/typeof.js","./assertThisInitialized.js":"../node_modules/@babel/runtime/helpers/assertThisInitialized.js"}],"../node_modules/@babel/runtime/helpers/getPrototypeOf.js":[function(require,module,exports) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"common/utils.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numToWon = void 0;

function numToWon(number) {
  return String(number).split("").reverse().map(function (value, index, origin) {
    return value = (index + 1) % 3 === 0 && index !== origin.length - 1 ? "," + value : value + "";
  }).reverse().join("");
}

exports.numToWon = numToWon;
},{}],"bank.json":[function(require,module,exports) {
module.exports = {
  "bankList": [{
    "date": "2021-09-01",
    "income": "in",
    "classify": "",
    "history": "용돈",
    "price": 20000
  }, {
    "date": "2021-09-01",
    "income": "out",
    "classify": "health",
    "history": "샐러드",
    "price": 10000
  }, {
    "date": "2021-09-01",
    "income": "out",
    "classify": "eatout",
    "history": "맛있어돈까스",
    "price": 8000
  }, {
    "date": "2021-09-01",
    "income": "out",
    "classify": "mart",
    "history": "이마트",
    "price": 36000
  }, {
    "date": "2021-09-01",
    "income": "out",
    "classify": "eatout",
    "history": "냉면",
    "price": 8000
  }, {
    "date": "2021-09-02",
    "income": "in",
    "classify": "",
    "history": "월급",
    "price": 4000000
  }, {
    "date": "2021-09-02",
    "income": "out",
    "classify": "mart",
    "history": "홈플러스",
    "price": 35000
  }, {
    "date": "2021-09-02",
    "income": "out",
    "classify": "mart",
    "history": "롯데마트",
    "price": 15900
  }, {
    "date": "2021-09-02",
    "income": "out",
    "classify": "eatout",
    "history": "우리할매떡볶이",
    "price": 10500
  }, {
    "date": "2021-09-03",
    "income": "out",
    "classify": "eatout",
    "history": "뼈해장국",
    "price": 6500
  }, {
    "date": "2021-09-03",
    "income": "out",
    "classify": "mart",
    "history": "코스트코",
    "price": 130000
  }, {
    "date": "2021-09-03",
    "income": "out",
    "classify": "shopping",
    "history": "잔스포츠",
    "price": 55000
  }, {
    "date": "2021-09-03",
    "income": "out",
    "classify": "shopping",
    "history": "올리브영",
    "price": 10000
  }, {
    "date": "2021-09-03",
    "income": "in",
    "classify": "",
    "history": "용돈",
    "price": 30000
  }, {
    "date": "2021-09-04",
    "income": "out",
    "classify": "shopping",
    "history": "책",
    "price": 23000
  }, {
    "date": "2021-09-04",
    "income": "out",
    "classify": "mart",
    "history": "롯데마트",
    "price": 36500
  }, {
    "date": "2021-09-04",
    "income": "out",
    "classify": "shopping",
    "history": "CGV",
    "price": 16000
  }, {
    "date": "2021-09-04",
    "income": "out",
    "classify": "mart",
    "history": "code책",
    "price": 22500
  }, {
    "date": "2021-09-04",
    "income": "out",
    "classify": "mart",
    "history": "홈플러스창동점",
    "price": 13500
  }, {
    "date": "2021-09-05",
    "income": "in",
    "classify": "health",
    "history": "광역알뜰 마일리지",
    "price": 6500
  }, {
    "date": "2021-09-05",
    "income": "out",
    "classify": "mart",
    "history": "고등어",
    "price": 10000
  }, {
    "date": "2021-09-05",
    "income": "out",
    "classify": "mart",
    "history": "yes24",
    "price": 30000
  }, {
    "date": "2021-09-05",
    "income": "out",
    "classify": "health",
    "history": "마카다미아 견과류",
    "price": 17000
  }, {
    "date": "2021-09-06",
    "income": "in",
    "classify": "",
    "history": "용돈",
    "price": 50000
  }, {
    "date": "2021-09-06",
    "income": "out",
    "classify": "oiling",
    "history": "성남주유소",
    "price": 50000
  }, {
    "date": "2021-09-06",
    "income": "out",
    "classify": "mart",
    "history": "롯데마트",
    "price": 112000
  }, {
    "date": "2021-09-06",
    "income": "out",
    "classify": "mart",
    "history": "마트킹",
    "price": 5500
  }, {
    "date": "2021-09-07",
    "income": "out",
    "classify": "health",
    "history": "미소치과",
    "price": 70000
  }, {
    "date": "2021-09-07",
    "income": "out",
    "classify": "eatout",
    "history": "아웃백",
    "price": 45000
  }, {
    "date": "2021-09-07",
    "income": "out",
    "classify": "mart",
    "history": "홈플러스",
    "price": 64000
  }, {
    "date": "2021-09-07",
    "income": "out",
    "classify": "mart",
    "history": "농협하나로마트",
    "price": 23530
  }, {
    "date": "2021-09-07",
    "income": "out",
    "classify": "eatout",
    "history": "푸라닭치킨",
    "price": 19800
  }, {
    "date": "2021-09-07",
    "income": "out",
    "classify": "eatout",
    "history": "배달의민족",
    "price": 32000
  }, {
    "date": "2021-09-08",
    "income": "out",
    "classify": "mart",
    "history": "홈플러스",
    "price": 12300
  }, {
    "date": "2021-09-08",
    "income": "in",
    "classify": "",
    "history": "근로장려금",
    "price": 362850
  }, {
    "date": "2021-09-08",
    "income": "out",
    "classify": "eatout",
    "history": "쉑쉑버거",
    "price": 10500
  }, {
    "date": "2021-09-10",
    "income": "out",
    "classify": "mart",
    "history": "이마트 트레이더스",
    "price": 82300
  }, {
    "date": "2021-09-11",
    "income": "in",
    "classify": "",
    "history": "유튜브 수익",
    "price": 100000
  }, {
    "date": "2021-09-12",
    "income": "out",
    "classify": "eatout",
    "history": "신선설농탕",
    "price": 9800
  }, {
    "date": "2021-09-12",
    "income": "out",
    "classify": "eatout",
    "history": "교촌치킨",
    "price": 48900
  }, {
    "date": "2021-09-12",
    "income": "out",
    "classify": "eatout",
    "history": "아미초밥",
    "price": 11900
  }, {
    "date": "2021-09-12",
    "income": "in",
    "classify": "",
    "history": "추석 용돈",
    "price": 50000
  }, {
    "date": "2021-09-13",
    "income": "out",
    "classify": "oiling",
    "history": "GS칼텍스",
    "price": 50000
  }, {
    "date": "2021-09-13",
    "income": "out",
    "classify": "mart",
    "history": "이마트",
    "price": 33500
  }, {
    "date": "2021-09-13",
    "income": "out",
    "classify": "mart",
    "history": "이마트 트레이더스",
    "price": 79800
  }, {
    "date": "2021-09-13",
    "income": "out",
    "classify": "health",
    "history": "헬스 PT",
    "price": 700000
  }, {
    "date": "2021-09-13",
    "income": "out",
    "classify": "eatout",
    "history": "엽기떡볶이",
    "price": 16000
  }, {
    "date": "2021-09-14",
    "income": "out",
    "classify": "mart",
    "history": "GS25",
    "price": 3100
  }, {
    "date": "2021-09-14",
    "income": "out",
    "classify": "eatout",
    "history": "맘스터치",
    "price": 10900
  }, {
    "date": "2021-09-14",
    "income": "out",
    "classify": "mart",
    "history": "휴지",
    "price": 22000
  }, {
    "date": "2021-09-14",
    "income": "out",
    "classify": "mart",
    "history": "김밥 재료",
    "price": 40000
  }, {
    "date": "2021-09-14",
    "income": "out",
    "classify": "eatout",
    "history": "명동칼국수",
    "price": 7000
  }, {
    "date": "2021-09-14",
    "income": "out",
    "classify": "eatout",
    "history": "배스킨라빈스",
    "price": 14000
  }, {
    "date": "2021-09-15",
    "income": "out",
    "classify": "eatout",
    "history": "땅스부대찌개",
    "price": 9900
  }, {
    "date": "2021-09-15",
    "income": "out",
    "classify": "health",
    "history": "비타민D 구미젤리",
    "price": 10000
  }, {
    "date": "2021-09-15",
    "income": "out",
    "classify": "mart",
    "history": "세븐일레븐",
    "price": 5300
  }, {
    "date": "2021-09-16",
    "income": "out",
    "classify": "eatout",
    "history": "버거킹",
    "price": 7000
  }, {
    "date": "2021-09-16",
    "income": "out",
    "classify": "mart",
    "history": "CU",
    "price": 2000
  }, {
    "date": "2021-09-17",
    "income": "out",
    "classify": "eatout",
    "history": "초밥",
    "price": 16000
  }, {
    "date": "2021-09-17",
    "income": "out",
    "classify": "shopping",
    "history": "G마켓",
    "price": 40000
  }, {
    "date": "2021-09-17",
    "income": "in",
    "classify": "",
    "history": "근로장려금",
    "price": 300000
  }, {
    "date": "2021-09-17",
    "income": "out",
    "classify": "mart",
    "history": "GS25",
    "price": 3000
  }, {
    "date": "2021-09-18",
    "income": "out",
    "classify": "shopping",
    "history": "테크노마트",
    "price": 41000
  }, {
    "date": "2021-09-18",
    "income": "out",
    "classify": "health",
    "history": "오메가3",
    "price": 11000
  }, {
    "date": "2021-09-18",
    "income": "out",
    "classify": "mart",
    "history": "k마트",
    "price": 25410
  }, {
    "date": "2021-09-19",
    "income": "out",
    "classify": "shopping",
    "history": "쿠팡로켓배송",
    "price": 15000
  }, {
    "date": "2021-09-19",
    "income": "out",
    "classify": "shopping",
    "history": "하이마트",
    "price": 310000
  }, {
    "date": "2021-09-19",
    "income": "out",
    "classify": "mart",
    "history": "이마트구로점",
    "price": 14000
  }, {
    "date": "2021-09-20",
    "income": "out",
    "classify": "oiling",
    "history": "SOil",
    "price": 30000
  }, {
    "date": "2021-09-20",
    "income": "out",
    "classify": "shopping",
    "history": "쿠팡",
    "price": 42000
  }, {
    "date": "2021-09-20",
    "income": "out",
    "classify": "mart",
    "history": "홈플러스동대문점",
    "price": 16580
  }, {
    "date": "2021-09-20",
    "income": "out",
    "classify": "shopping",
    "history": "아디다스영통점",
    "price": 69000
  }, {
    "date": "2021-09-21",
    "income": "in",
    "classify": "",
    "history": "쿠팡급여",
    "price": 78000
  }, {
    "date": "2021-09-21",
    "income": "out",
    "classify": "shopping",
    "history": "영풍문고",
    "price": 21000
  }, {
    "date": "2021-09-21",
    "income": "out",
    "classify": "shopping",
    "history": "교보문고",
    "price": 19000
  }, {
    "date": "2021-09-21",
    "income": "out",
    "classify": "oiling",
    "history": "GS 칼텍스",
    "price": 50000
  }, {
    "date": "2021-09-22",
    "income": "out",
    "classify": "shopping",
    "history": "애플 워치",
    "price": 539000
  }, {
    "date": "2021-09-22",
    "income": "out",
    "classify": "shopping",
    "history": "맥북 프로",
    "price": 3190000
  }, {
    "date": "2021-09-22",
    "income": "out",
    "classify": "mart",
    "history": "코카콜라 2박스",
    "price": 51800
  }, {
    "date": "2021-09-23",
    "income": "out",
    "classify": "shopping",
    "history": "닌텐도 스위치",
    "price": 318710
  }, {
    "date": "2021-09-23",
    "income": "out",
    "classify": "shopping",
    "history": "나이키 강남점",
    "price": 69000
  }, {
    "date": "2021-09-24",
    "income": "out",
    "classify": "health",
    "history": "프로틴",
    "price": 20000
  }, {
    "date": "2021-09-24",
    "income": "out",
    "classify": "mart",
    "history": "늘 조은 마트",
    "price": 21650
  }, {
    "date": "2021-09-24",
    "income": "out",
    "classify": "shopping",
    "history": "검은색 슬랙스바지",
    "price": 29000
  }, {
    "date": "2021-09-24",
    "income": "in",
    "classify": "",
    "history": "알바 수당",
    "price": 50000
  }, {
    "date": "2021-09-25",
    "income": "out",
    "classify": "shopping",
    "history": "유산균 2개월치",
    "price": 39000
  }, {
    "date": "2021-09-25",
    "income": "out",
    "classify": "mart",
    "history": "콘칩",
    "price": 1500
  }, {
    "date": "2021-09-25",
    "income": "out",
    "classify": "shopping",
    "history": "대파",
    "price": 3100
  }, {
    "date": "2021-09-26",
    "income": "out",
    "classify": "health",
    "history": "수영 레슨비",
    "price": 14000
  }, {
    "date": "2021-09-26",
    "income": "out",
    "classify": "shopping",
    "history": "AWS 서버 구입",
    "price": 8100
  }, {
    "date": "2021-09-26",
    "income": "out",
    "classify": "eatout",
    "history": "스타벅스",
    "price": 4100
  }, {
    "date": "2021-09-26",
    "income": "out",
    "classify": "shopping",
    "history": "11번가",
    "price": 70700
  }, {
    "date": "2021-09-29",
    "income": "out",
    "classify": "eatout",
    "history": "김밥천국",
    "price": 6000
  }, {
    "date": "2021-09-29",
    "income": "out",
    "classify": "shopping",
    "history": "알라딘",
    "price": 62000
  }, {
    "date": "2021-09-29",
    "income": "in",
    "classify": "",
    "history": "국민지원금",
    "price": 250000
  }, {
    "date": "2021-09-30",
    "income": "out",
    "classify": "mart",
    "history": "이마트",
    "price": 99999
  }, {
    "date": "2021-09-30",
    "income": "out",
    "classify": "shopping",
    "history": "교보문고",
    "price": 25000
  }, {
    "date": "2021-10-01",
    "income": "out",
    "classify": "eatout",
    "history": "더파크뷰",
    "price": 195000
  }, {
    "date": "2021-10-01",
    "income": "out",
    "classify": "shopping",
    "history": "JARA",
    "price": 59000
  }, {
    "date": "2021-10-01",
    "income": "out",
    "classify": "eatout",
    "history": "파스퇴르",
    "price": 7000
  }, {
    "date": "2021-10-01",
    "income": "out",
    "classify": "shopping",
    "history": "젤네일",
    "price": 115000
  }, {
    "date": "2021-10-02",
    "income": "in",
    "classify": "",
    "history": "아프리카TV",
    "price": 236000
  }, {
    "date": "2021-10-02",
    "income": "out",
    "classify": "shopping",
    "history": "블루투스 마우스",
    "price": 116000
  }, {
    "date": "2021-10-02",
    "income": "out",
    "classify": "eatout",
    "history": "아웃백 스테이크하우스",
    "price": 114000
  }, {
    "date": "2021-10-03",
    "income": "in",
    "classify": "",
    "history": "업비트",
    "price": 370000
  }, {
    "date": "2021-10-03",
    "income": "out",
    "classify": "mart",
    "history": "Costco",
    "price": 135000
  }]
};
},{}],"core/api.ts":[function(require,module,exports) {
"use strict";

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = void 0 && (void 0).__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainApi = exports.Api = void 0;

var data = __importStar(require("../bank.json"));

var Api = /*#__PURE__*/function () {
  function Api(url) {
    (0, _classCallCheck2.default)(this, Api);
    this.url = url;
  }

  (0, _createClass2.default)(Api, [{
    key: "request",
    value: function request(url) {
      return data.bankList.reverse(); // 원래 fetch 및 .json() 실행
    }
  }]);
  return Api;
}();

exports.Api = Api;

var MainApi = /*#__PURE__*/function (_Api) {
  (0, _inherits2.default)(MainApi, _Api);

  var _super = _createSuper(MainApi);

  function MainApi() {
    (0, _classCallCheck2.default)(this, MainApi);
    return _super.call(this, "");
  }

  (0, _createClass2.default)(MainApi, [{
    key: "getData",
    value: function getData() {
      return this.request("");
    }
  }]);
  return MainApi;
}(Api);

exports.MainApi = MainApi;
},{"@babel/runtime/helpers/inherits":"../node_modules/@babel/runtime/helpers/inherits.js","@babel/runtime/helpers/possibleConstructorReturn":"../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"../node_modules/@babel/runtime/helpers/getPrototypeOf.js","@babel/runtime/helpers/classCallCheck":"../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"../node_modules/@babel/runtime/helpers/createClass.js","../bank.json":"bank.json"}],"core/view.ts":[function(require,module,exports) {
"use strict";

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var View = /*#__PURE__*/function () {
  function View(containerId, template) {
    (0, _classCallCheck2.default)(this, View);
    var containerElement = document.getElementById(containerId);

    if (!containerElement) {
      throw "최상위 컨테이너가 없어 UI를 진행하지 못합니다";
    }

    this.container = containerElement;
    this.template = template;
    this.renderTemplate = template;
    this.htmlList = [];
  }

  (0, _createClass2.default)(View, [{
    key: "updateView",
    value: function updateView() {
      this.container.innerHTML = this.renderTemplate;
      this.renderTemplate = this.template;
    }
  }, {
    key: "addHtml",
    value: function addHtml(htmlString) {
      this.htmlList.push(htmlString);
    }
  }, {
    key: "getHtml",
    value: function getHtml() {
      var snapshot = this.htmlList.join("");
      this.clearHtmlList();
      return snapshot;
    }
  }, {
    key: "setTemplateData",
    value: function setTemplateData(key, value) {
      this.renderTemplate = this.renderTemplate.replace("{{__".concat(key, "__}}"), value);
    }
  }, {
    key: "clearHtmlList",
    value: function clearHtmlList() {
      this.htmlList = [];
    }
  }]);
  return View;
}();

exports.default = View;
},{"@babel/runtime/helpers/classCallCheck":"../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"../node_modules/@babel/runtime/helpers/createClass.js"}],"page/main-view.ts":[function(require,module,exports) {
"use strict";

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var utils_1 = require("../common/utils");

var api_1 = require("../core/api");

var view_1 = __importDefault(require("../core/view"));

var template = "\n<div class=\"wrap\">\n  <section class=\"native\"></section>\n  <nav class=\"tab-bar\">\n    <ul>\n      <li class=\"icon-cover\">\n        <a href=\"javascript:void(0)\" class=\"selected\">\n          <div class=\"icon icon--home\"></div>\n        </a>\n      </li>\n      <li class=\"icon-cover\">\n        <a href=\"javascript:void(0)\">\n          <div class=\"icon icon--transfer\"></div>\n        </a>\n      </li>\n      <li class=\"icon-cover\">\n        <a href=\"javascript:void(0)\">\n          <div class=\"icon icon--msg\"></div>\n        </a>\n      </li>\n      <li class=\"icon-cover\">\n        <a href=\"javascript:void(0)\">\n          <div class=\"icon icon--more\"></div>\n        </a>\n      </li>\n    </ul>\n  </nav>\n  <section class=\"account\">\n    <header class=\"account__title\">\n      {{__account_title__}}\n    </header>\n    <section class=\"account__status\">\n      {{__account_status__}}\n    </section>\n    <section class=\"account__history\">\n      <h3 class=\"hide\">history</h3>\n      <div class=\"history__more\">\n        <div class=\"controll-btn\">\n          <div class=\"controll-bar\"></div>\n        </div>\n      </div>\n      <div class=\"history__saving swiper\">\n        {{__history_saving__}}\n      </div>\n      <div class=\"history__recent\">\n        {{__history_recent__}}\n      </div>\n    </section>\n  </section>\n</div>\n";

var MainView = /*#__PURE__*/function (_view_1$default) {
  (0, _inherits2.default)(MainView, _view_1$default);

  var _super = _createSuper(MainView);

  function MainView(containerId, store) {
    var _this;

    (0, _classCallCheck2.default)(this, MainView);
    _this = _super.call(this, containerId, template);

    _this.render = function () {
      _this.setTemplateData("account_title", _this.makeAccountTitle(_this.store.getAccount()));

      _this.setTemplateData("account_status", _this.makeAccountStatus(_this.store.getAccount()));

      _this.setTemplateData("history_saving", _this.makeHistorySaving(_this.store.getSavingBoxes()));

      _this.setTemplateData("history_recent", _this.makeHistoryRecent(_this.api.getData()));

      _this.updateView();
    };

    _this.store = store;
    _this.api = new api_1.MainApi();
    return _this;
  }

  (0, _createClass2.default)(MainView, [{
    key: "makeAccountTitle",
    value: function makeAccountTitle(_ref) {
      var profile = _ref.profile,
          title = _ref.title;
      this.addHtml("\n      <div class=\"profile\">\n        <img\n          src=\"".concat(profile, "\"\n          alt=\"profile\"\n        />\n      </div>\n      <h2 class=\"subtitle\">").concat(title, "</h2>\n      <ul class=\"options\">\n        <li class=\"qr\">\n          <span class=\"material-icons-outlined\">\n            indeterminate_check_box\n          </span>\n        </li>\n        <li class=\"search\">\n          <span class=\"material-icons-outlined\"> search </span>\n        </li>\n      </ul>\n    "));
      return this.getHtml();
    }
  }, {
    key: "makeAccountStatus",
    value: function makeAccountStatus(_ref2) {
      var accountNum = _ref2.accountNum,
          balance = _ref2.balance;
      this.addHtml("\n      <h3 class=\"hide\">status</h3>\n      <div class=\"status__total\">\n        <div class=\"status__account-num\">\n          <strong>".concat(accountNum, "</strong>\n          <span>\uC774\uCCB4</span>\n        </div>\n        <div class=\"status__account-balance\">\n          <strong>").concat((0, utils_1.numToWon)(balance), "</strong><span>\uC6D0</span>\n        </div>\n        <div class=\"status__graph\">\n          <div class=\"bar\">\n            <div class=\"total\"></div>\n            <div class=\"now\"></div>\n            <div class=\"set\">\n              <div class=\"controller\"></div>\n            </div>\n          </div>\n        </div>\n        <div class=\"chart icon-cover\">\n          <div class=\"icon icon--chart\"></div>\n        </div>\n        <span class=\"status__summary\">5\uC77C \uB3D9\uC548 210,000\uC6D0 \uB0A8\uC74C</span>\n      </div>\n      <aside class=\"ad\">\n        <a href=\"javascript:void(0)\">\n          \uC9C0\uAE08 \uB0AE\uC740 \uC774\uC790\uB85C \uC0DD\uD65C\uB300\uCD9C\uC744 \uC2E0\uCCAD\uD558\uC138\uC694!\n        </a>\n        <a href=\"javascript:void(0)\">Go</a>\n      </aside>\n    "));
      return this.getHtml();
    }
  }, {
    key: "makeHistorySaving",
    value: function makeHistorySaving(savingBoxes) {
      this.addHtml("<div class=\"swiper-wrapper\">");

      for (var i = 0; i < savingBoxes.length; i++) {
        var _savingBoxes$i = savingBoxes[i],
            title = _savingBoxes$i.title,
            saving_goal = _savingBoxes$i.saving_goal,
            saving_now = _savingBoxes$i.saving_now;
        this.addHtml("\n        <div class=\"saving-box swiper-slide\">\n          <div class=\"achieve\"></div>\n          <strong>".concat(title, "</strong>\n          <span class=\"price\">").concat((0, utils_1.numToWon)(saving_goal), "\uC6D0</span>\n        </div>\n      "));
      }

      this.addHtml("\n      <div class=\"add-btn swiper-slide\">\n        <span class=\"material-icons-outlined\">add_circle</span>\n        <span class=\"text\">\uC800\uAE08\uD1B5 \uB9CC\uB4E4\uAE30</span>\n      </div>\n    ");
      this.addHtml("</div>");
      return this.getHtml();
    }
  }, {
    key: "makeHistoryRecent",
    value: function makeHistoryRecent(datas) {
      var _this2 = this;

      // data 정제
      var map = new Map();
      datas.forEach(function (data) {
        var key = "".concat(data.date);

        if (!map.has(key)) {
          map.set(key, []);
        }

        var oldValue = map.get(key);

        if (oldValue) {
          var values = [].concat((0, _toConsumableArray2.default)(oldValue), [data]);
          map.set(key, values);
        }
      }); // getHistoryRecent

      this.addHtml("<div class=\"container hide-scroll\">");
      map.forEach(function (daysData) {
        var numOfDaysPassed = "";
        var totalSpend = 0;

        if (numOfDaysPassed === "") {
          var dayData = daysData[0];
          var today = new Date();

          var _dayData$date$split$m = dayData.date.split("-").map(function (value) {
            return +value;
          }),
              _dayData$date$split$m2 = (0, _slicedToArray2.default)(_dayData$date$split$m, 3),
              year = _dayData$date$split$m2[0],
              month = _dayData$date$split$m2[1],
              day = _dayData$date$split$m2[2];

          var dayAgo = new Date(year, month + 1, day);
          var diffDay = Math.floor((today.getTime() - dayAgo.getTime()) / (1000 * 60 * 60 * 24));
          numOfDaysPassed = diffDay === 0 ? "오늘" : diffDay === 1 ? "어제" : "".concat(diffDay, "\uC77C\uC804");
        }

        daysData.forEach(function (dayData) {
          totalSpend += dayData.income === "out" ? -dayData.price : dayData.price;
        });
        var totalSpendWon = totalSpend > 0 ? (0, utils_1.numToWon)(Math.abs(totalSpend)) + "원 수입" : (0, utils_1.numToWon)(Math.abs(totalSpend)) + "원 지출";

        _this2.addHtml("\n        <div class=\"day\">\n          <div class=\"day-summary\">\n            <strong>".concat(numOfDaysPassed, "</strong>\n            <span class=\"total-spend\">").concat(totalSpendWon, "</span>\n          </div>\n      "));

        _this2.addHtml("<ul>");

        daysData.forEach(function (dayData) {
          _this2.addHtml("\n          <li>\n            ".concat(dayData.history, "\n            ").concat(dayData.income === "out" ? "<span>".concat((0, utils_1.numToWon)(dayData.price), "</span>") : "<span class=\"income\">+".concat((0, utils_1.numToWon)(dayData.price), "</span>"), "\n          </li>\n        "));
        });

        _this2.addHtml("</ul>");

        _this2.addHtml("</div>");
      });
      this.addHtml("</div>");
      return this.getHtml();
    }
  }]);
  return MainView;
}(view_1.default);

exports.default = MainView;
},{"@babel/runtime/helpers/slicedToArray":"../node_modules/@babel/runtime/helpers/slicedToArray.js","@babel/runtime/helpers/toConsumableArray":"../node_modules/@babel/runtime/helpers/toConsumableArray.js","@babel/runtime/helpers/classCallCheck":"../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"../node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/helpers/inherits":"../node_modules/@babel/runtime/helpers/inherits.js","@babel/runtime/helpers/possibleConstructorReturn":"../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"../node_modules/@babel/runtime/helpers/getPrototypeOf.js","../common/utils":"common/utils.ts","../core/api":"core/api.ts","../core/view":"core/view.ts"}],"page/index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainView = void 0;

var main_view_1 = require("./main-view");

Object.defineProperty(exports, "MainView", {
  enumerable: true,
  get: function get() {
    return __importDefault(main_view_1).default;
  }
});
},{"./main-view":"page/main-view.ts"}],"store.ts":[function(require,module,exports) {
"use strict";

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Store = void 0;

var Store = /*#__PURE__*/function () {
  function Store() {
    (0, _classCallCheck2.default)(this, Store);
    this.account = {
      profile: "https://lh3.googleusercontent.com/proxy/vNcXDb1es8vnIdHjdWZlgdxoodXjlu06kPc6yWjiE9wbPSJHeERV5CXaHcOv6OOtST1i8vTXzIScHHwgd-Mf0QXcX3LlsSKL_1JVq0DVcQ8DVA",
      title: "생활비",
      accountNum: "355-673877-78773",
      balance: 1240000
    };
    this.savingBoxes = [{
      title: "여행가자",
      saving_goal: 1200000,
      saving_now: 842200
    }, {
      title: "냉장고사자",
      saving_goal: 800000,
      saving_now: 142200
    }];
  }

  (0, _createClass2.default)(Store, [{
    key: "getAccount",
    value: function getAccount() {
      return this.account;
    }
  }, {
    key: "setSavingBox",
    value: function setSavingBox(title, saving_goal, saving_now) {
      this.savingBoxes.push({
        title: title,
        saving_goal: saving_goal,
        saving_now: saving_now
      });
    }
  }, {
    key: "getSavingBoxes",
    value: function getSavingBoxes() {
      return this.savingBoxes;
    }
  }]);
  return Store;
}();

exports.Store = Store;
},{"@babel/runtime/helpers/classCallCheck":"../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"../node_modules/@babel/runtime/helpers/createClass.js"}],"app.ts":[function(require,module,exports) {
"use strict";

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var router_1 = __importDefault(require("./core/router"));

var page_1 = require("./page");

var store_1 = require("./store");

var App = /*#__PURE__*/function () {
  function App() {
    (0, _classCallCheck2.default)(this, App);
    this.store = new store_1.Store();
    this.router = new router_1.default();
    this.views = [new page_1.MainView("root", this.store)];
  }

  (0, _createClass2.default)(App, [{
    key: "run",
    value: function run() {
      this.router.setDefaultPage(this.views[0]);
    }
  }]);
  return App;
}();

var app = new App();
app.run();
},{"@babel/runtime/helpers/classCallCheck":"../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"../node_modules/@babel/runtime/helpers/createClass.js","./core/router":"core/router.ts","./page":"page/index.ts","./store":"store.ts"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49869" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.ts"], null)
//# sourceMappingURL=/app.c61986b1.js.map