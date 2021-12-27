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
})({"bank.json":[function(require,module,exports) {
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
},{}],"js/common/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getData = getData;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var data = require("../../bank.json");

function getData(url) {
  var datas = data.bankList.reverse();
  var map = new Map();
  datas.forEach(function (data) {
    var key = "".concat(data.date);

    if (!map.has(key)) {
      map.set(key, []);
    }

    var values = [].concat(_toConsumableArray(map.get(key)), [data]);
    map.set(key, values);
  });
  return map;
}
},{"../../bank.json":"bank.json"}],"js/main/history.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAccountHistory = getAccountHistory;

var _data = require("../common/data");

var store = {
  historys: []
};

function getAccountHistory(page) {
  var accountHistorys = store.historys;
  var template = "\n  <div class=\"container hide-scroll\">\n    {{__days__}}\n  </div>\n  ";

  if (!accountHistorys.length) {
    accountHistorys = store.historys = (0, _data.getData)("#");
  }

  accountHistorys.forEach(function (dayHistorys) {
    // 덩어리들
    var numOfDaysPassed = "";
    var totalSpend = "";
    var dayHistoryLis = [];
    var dayHistorysTemplate = "\n      <div class=\"day\">\n        <div class=\"day-summary\">\n          <strong>{{__num_of_days_passed__}}</strong>\n          <span class=\"total-spend\">{{__total_spend__}}</span>\n        </div>\n        <ul>\n          {{__day_history_lis__}}\n        </ul>\n      </div>\n    ";
    dayHistorys.forEach(function (history) {
      console.log(history); //한줄한줄

      history.in;
    });
  });

  for (var i = 0; i < accountHistorys.length; i++) {// console.log(accountHistorys[i]);
    // dayHistorys.push(`
    // <div class="day">
    //   <div class="day-summary">
    //     <strong>오늘</strong>
    //     <span class="total-spend">127,600원 지출</span>
    //   </div>
    //   <ul>
    //     <li>
    //       미스터피자
    //       <span>32,000</span>
    //     </li>
    //     <li>
    //       택시
    //       <span>4,800</spanss=>
    //     </li>
    //     <li>
    //       이마트
    //       <span>86,000</spanss=>
    //     </li>
    //     <li>
    //       스타벅스
    //       <span>4,800</spanclass=>
    //     </li>
    //     <li>
    //       전길수
    //       <span class="income">+20,000</span>
    //     </li>
    //   </ul>
    // </div>
    // `);
  }
}
},{"../common/data":"js/common/data.js"}],"js/main.js":[function(require,module,exports) {
"use strict";

var _history = require("./main/history");

console.log((0, _history.getAccountHistory)());
var container = document.getElementById("root");
var mouseMotion = {
  isMove: false,
  before: {
    x: 0,
    y: 0
  },
  after: {
    x: 0,
    y: 0
  }
};

function mainPage() {
  var template = "\n   <div class=\"wrap\">\n      <section class=\"native\"></section>\n      <nav class=\"tab-bar\">\n        <ul>\n          <li class=\"icon-cover\">\n            <a href=\"javascript:void(0)\" class=\"selected\">\n              <div class=\"icon icon--home\"></div>\n            </a>\n          </li>\n          <li class=\"icon-cover\">\n            <a href=\"javascript:void(0)\">\n              <div class=\"icon icon--transfer\"></div>\n            </a>\n          </li>\n          <li class=\"icon-cover\">\n            <a href=\"javascript:void(0)\">\n              <div class=\"icon icon--msg\"></div>\n            </a>\n          </li>\n          <li class=\"icon-cover\">\n            <a href=\"javascript:void(0)\">\n              <div class=\"icon icon--more\"></div>\n            </a>\n          </li>\n        </ul>\n      </nav>\n      <section class=\"account\">\n        <header class=\"account__title\">\n          <div class=\"profile\">\n            <img\n              src=\"https://sojoong.joins.com/wp-content/uploads/sites/4/2019/01/peulopil1.jpg\"\n              alt=\"profile\"\n            />\n          </div>\n          <h2 class=\"subtitle\">\uC0DD\uD65C\uBE44</h2>\n          <ul class=\"options\">\n            <li class=\"qr\">\n              <span class=\"material-icons-outlined\">\n                indeterminate_check_box\n              </span>\n            </li>\n            <li class=\"search\">\n              <span class=\"material-icons-outlined\"> search </span>\n            </li>\n          </ul>\n        </header>\n        <section class=\"account__status\">\n          <h3 class=\"hide\">status</h3>\n          <div class=\"status__total\">\n            <div class=\"status__account-num\">\n              <strong>355-673877-78773</strong>\n              <span>\uC774\uCCB4</span>\n            </div>\n            <div class=\"status__account-balance\">\n              <strong>1,240,000</strong><span>\uC6D0</span>\n            </div>\n            <div class=\"status__graph\">\n              <div class=\"bar\">\n                <div class=\"total\"></div>\n                <div class=\"now\"></div>\n                <div class=\"set\">\n                  <div class=\"controller\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"chart icon-cover\">\n              <div class=\"icon icon--chart\"></div>\n            </div>\n            <span class=\"status__summary\">5\uC77C \uB3D9\uC548 210,000\uC6D0 \uB0A8\uC74C</span>\n          </div>\n          <aside class=\"ad\">\n            <a href=\"javascript:void(0)\">\n              \uC9C0\uAE08 \uB0AE\uC740 \uC774\uC790\uB85C \uC0DD\uD65C\uB300\uCD9C\uC744 \uC2E0\uCCAD\uD558\uC138\uC694!\n            </a>\n            <a href=\"javascript:void(0)\">Go</a>\n          </aside>\n        </section>\n        <section class=\"account__history\">\n          <h3 class=\"hide\">history</h3>\n          <div class=\"history__more\">\n            <div class=\"controll-space\">\n              <div class=\"controll-bar\"></div>\n            </div>\n          </div>\n          <div class=\"history__saving mySwiper swiper-container\">\n            <div class=\"container swiper-wrapper\">\n              <div class=\"saving-box swiper-slide\">\n                <div class=\"achieve\"></div>\n                <strong>\uC5EC\uD589\uAC00\uC790!</strong>\n                <span class=\"price\">842,200\uC6D0</span>\n              </div>\n              <div class=\"saving-box swiper-slide\">\n                <div class=\"achieve\"></div>\n                <strong>\uB0C9\uC7A5\uACE0\uC0AC\uAE30!</strong>\n                <span class=\"price\">142,200\uC6D0</span>\n              </div>\n            </div>\n            <div class=\"swiper-pagination\"></div>\n          </div>\n          <div class=\"history__recent\">\n            <div class=\"container hide-scroll\">\n              <div class=\"day\">\n                <div class=\"day-summary\">\n                  <strong>\uC624\uB298</strong>\n                  <span class=\"total-spend\">127,600\uC6D0 \uC9C0\uCD9C</span>\n                </div>\n                <ul>\n                  <li>\n                    \uBBF8\uC2A4\uD130\uD53C\uC790\n                    <span class=\"price\">32,000</span>\n                  </li>\n                  <li>\n                    \uD0DD\uC2DC\n                    <span class=\"price\">4,800</span>\n                  </li>\n                  <li>\n                    \uC774\uB9C8\uD2B8\n                    <span class=\"price\">86,000</span>\n                  </li>\n                  <li>\n                    \uC2A4\uD0C0\uBC85\uC2A4\n                    <span class=\"price\">4,800</span>\n                  </li>\n                  <li>\n                    \uC804\uAE38\uC218\n                    <span class=\"price income\">+20,000</span>\n                  </li>\n                </ul>\n              </div>\n\n              <div class=\"day\">\n                <div class=\"day-summary\">\n                  <strong>\uC5B4\uC81C</strong>\n                  <span class=\"total-spend\">71,600\uC6D0 \uC9C0\uCD9C</span>\n                </div>\n                <ul>\n                  <li>\n                    \uBBF8\uC2A4\uD130\uD53C\uC790\n                    <span class=\"price\">32,000</span>\n                  </li>\n                  <li>\n                    \uD0DD\uC2DC\n                    <span class=\"price\">4,800</span>\n                  </li>\n                  <li>\n                    \uC774\uB9C8\uD2B8\n                    <span class=\"price\">86,000</span>\n                  </li>\n                  <li>\n                    \uC2A4\uD0C0\uBC85\uC2A4\n                    <span class=\"price\">4,800</span>\n                  </li>\n                  <li>\n                    \uC804\uAE38\uC218\n                    <span class=\"price\">+20,000</span>\n                  </li>\n                </ul>\n              </div>\n\n              <div class=\"day\">\n                <div class=\"day-summary\">\n                  <strong>2\uC77C\uC804</strong>\n                  <span class=\"total-spend\">71,600\uC6D0 \uC9C0\uCD9C</span>\n                </div>\n                <ul>\n                  <li>\n                    \uBBF8\uC2A4\uD130\uD53C\uC790\n                    <span class=\"price\">32,000</span>\n                  </li>\n                  <li>\n                    \uD0DD\uC2DC\n                    <span class=\"price\">4,800</span>\n                  </li>\n                  <li>\n                    \uC2A4\uD0C0\uBC85\uC2A4\n                    <span class=\"price\">11,100</span>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </section>\n      </section>\n    </div>\n  ";
  container.innerHTML = template;
}

function downHandler(e) {
  mouseMotion.isMove = true;
  mouseMotion.before.x = e.clientX;
  mouseMotion.before.y = e.clientY;
}

function upHandler(e) {
  mouseMotion.isMove = false;
  mouseMotion.after.x = e.clientX;
  mouseMotion.after.y = e.clientY; // 왼쪽인지, 오른인지 위인지 아래인지 방향 계산

  var diffX = mouseMotion.after.x - mouseMotion.before.x;
  var diffY = mouseMotion.after.y - mouseMotion.before.y; // for X

  if (diffX > 0) {
    console.log("to left");
  } else if (diffX < 0) {
    console.log("to right");
  } // for Y


  if (diffY > 0) {
    console.log("to down");
  } else if (diffY < 0) {
    console.log("to up");
  } // 초기화


  mouseMotion.before.x = 0;
  mouseMotion.before.y = 0;
  mouseMotion.after.x = 0;
  mouseMotion.after.y = 0;
}

function nowWH() {
  console.log("w: ".concat(document.documentElement.clientWidth));
  console.log("h: ".concat(document.documentElement.clientHeight));
} //============================
// resize events
//============================


window.addEventListener("resize", _.throttle(function () {
  // _.throttle(함수, 시간)
  // event가 너무 많이 발생되어 생기는 부하를 줄여줌
  // throttle n초마다 익명함수를 실행
  nowWH();
}, 500)); //============================
// mouse/touch up down events
//============================

window.addEventListener("mousedown", downHandler);
window.addEventListener("touchstart", downHandler);
window.addEventListener("mouseup", upHandler);
window.addEventListener("touchend", upHandler);
},{"./main/history":"js/main/history.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52746" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map