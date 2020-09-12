module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1p/x":
/***/ (function(module, exports) {

module.exports = require("idx");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "6jsY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("mYab");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "aC+f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ reducer; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ realtimeOcean_getSeaData; });

// UNUSED EXPORTS: initialState

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "idx"
var external_idx_ = __webpack_require__("1p/x");
var external_idx_default = /*#__PURE__*/__webpack_require__.n(external_idx_);

// CONCATENATED MODULE: ./utils/network.ts


const apiKey = "CWB-27A80F1A-A586-4FDC-BE8A-641BF50848FA";
const apiUrl = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore';

const getSeaData = stationId => external_axios_default.a.get(`${apiUrl}/O-A0018-001`, {
  params: {
    Authorization: apiKey,
    limit: 10,
    sort: 'obsTime',
    stationId,
    elementName: '風向,平均風,週期,陣風,海溫,浪高,波向'
  }
}).then(res => {
  const success = external_idx_default()(res, _ => _.data.success);
  const records = external_idx_default()(res, _ => _.data.records);

  if (success === 'true') {
    return records || {};
  }

  return {};
}).catch(e => console.log(e));

/* harmony default export */ var network = ({
  getSeaData
});
// CONCATENATED MODULE: ./redux/modules/realtimeOcean.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var ActionTypes;

(function (ActionTypes) {
  ActionTypes["FETCHING"] = "realtimeOcean/FETCHING";
  ActionTypes["FETCHED_SUCCESS"] = "realtimeOcean/FETCHED_SUCCESS";
  ActionTypes["FETCHED_FAIL"] = "realtimeOcean/FETCHED_FAIL";
})(ActionTypes || (ActionTypes = {}));

const dataElementName = ['週期', '海溫', '浪高', '波向'];
const initialState = {
  data: null,
  isLoading: false,
  hasError: false
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCHING:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoading: true,
          hasError: false
        });
      }

    case ActionTypes.FETCHED_SUCCESS:
      {
        const {
          result
        } = action;
        const {
          locationName,
          time
        } = result === null || result === void 0 ? void 0 : result.location[0];
        const _data = {
          locationName,
          data: time
        };
        return {
          data: _data,
          isLoading: false,
          hasError: false
        };
      }

    case ActionTypes.FETCHED_FAIL:
      {
        return {
          date: [],
          isLoading: false,
          hasError: true
        };
      }

    default:
      return state;
  }
}
const realtimeOcean_getSeaData = id => {
  return {
    types: [ActionTypes.FETCHING, ActionTypes.FETCHED_SUCCESS, ActionTypes.FETCHED_FAIL],
    promise: () => {
      const request = network.getSeaData(id);
      request.catch(error => {
        const statusCode = external_idx_default()(error, _ => _.response.status);
        const unexpectedError = !error.response || statusCode >= 500;

        if (unexpectedError) {
          return Promise.reject(error);
        }

        return console.log(statusCode);
      });
      return request;
    }
  };
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: ../node_modules/next/app.js
var app = __webpack_require__("o42t");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./layout/Layout.style.ts
const _defaultExport = [".content-title.jsx-3477992224{font-size:30px;margin-left:29px;margin-top:43px;margin-bottom:21px;font-weight:400;}", "main.jsx-3477992224{width:100%;min-height:100%;}", ".container.jsx-3477992224{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;margin:50px;}"];
_defaultExport.__hash = "3477992224";
/* harmony default export */ var Layout_style = (_defaultExport);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/App/App.tsx
var __jsx = external_react_default.a.createElement;


/* harmony default export */ var App = (({
  children
}) => __jsx(external_react_default.a.Fragment, null, __jsx(head_default.a, null, __jsx("meta", {
  name: "description",
  content: "surfing forever"
}), __jsx("meta", {
  property: "og:locale",
  content: "zh_TW"
}), __jsx("meta", {
  property: "og:title",
  content: "surfing"
}), __jsx("meta", {
  property: "og:description",
  content: "surfing"
})), children));
// CONCATENATED MODULE: ./layout/Layout.tsx

var Layout_jsx = external_react_default.a.createElement;



/* harmony default export */ var Layout = (({
  children
}) => {
  return Layout_jsx(App, null, Layout_jsx(external_react_default.a.Fragment, null, Layout_jsx("div", {
    className: `jsx-${Layout_style.__hash}` + " " + "container"
  }, Layout_jsx("main", {
    className: `jsx-${Layout_style.__hash}`
  }, children)), Layout_jsx(style_default.a, {
    id: Layout_style.__hash
  }, Layout_style)));
});
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// CONCATENATED MODULE: ./redux/middleWare.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function clientMiddleware(client, extraArgument) {
  return ({
    dispatch,
    getState
  }) => {
    return next => action => {
      if (typeof action === 'function') {
        return action(dispatch, getState, extraArgument);
      }

      if (!action) {
        return next(action);
      }

      const {
        promise,
        types
      } = action,
            rest = _objectWithoutProperties(action, ["promise", "types"]);

      if (!promise) {
        return next(action);
      }

      const [REQUEST, SUCCESS, FAILURE] = types;
      next(_objectSpread(_objectSpread({}, rest), {}, {
        type: REQUEST
      }));
      const actionPromise = promise(client);
      actionPromise.then(result => next(_objectSpread(_objectSpread({}, rest), {}, {
        result: result && result.data ? result.data : result,
        type: SUCCESS
      })), error => {
        let responseError = error === null || error === void 0 ? void 0 : error.response.data;

        if (responseError) {
          next({
            error: responseError
          });
          responseError = null;
        }

        return next(_objectSpread(_objectSpread({}, rest), {}, {
          error: typeof responseError !== 'undefined' ? responseError : error,
          type: FAILURE
        }));
      }).catch(error => {
        next(_objectSpread(_objectSpread({}, rest), {}, {
          error,
          type: FAILURE
        }));
      });
      return actionPromise;
    };
  };
}
// EXTERNAL MODULE: ./redux/modules/realtimeOcean.ts + 1 modules
var realtimeOcean = __webpack_require__("aC+f");

// CONCATENATED MODULE: ./redux/reducer.ts


/* harmony default export */ var reducer = (Object(external_redux_["combineReducers"])({
  realtimeOcean: realtimeOcean["a" /* default */]
}));
// CONCATENATED MODULE: ./redux/store.js




const makeStore = initialState => {
  const middleware = [clientMiddleware()];
  const enhancers = [Object(external_redux_["applyMiddleware"])(...middleware),  false ? undefined : f => f];
  const store = Object(external_redux_["createStore"])(reducer, initialState, Object(external_redux_["compose"])(...enhancers));
  return store;
};

/* harmony default export */ var redux_store = (makeStore);
// CONCATENATED MODULE: ./styles/reset.style.js
/* stylelint-disable */
const reset_style_defaultExport = ["html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;vertical-align:baseline;}", "article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}", "body{line-height:1;}", "ol,ul{list-style:none;}", "blockquote,q{quotes:none;}", "blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}", "table{border-collapse:collapse;border-spacing:0;}", "html{box-sizing:border-box;}", "html,body{margin:0;padding:0;height:100%;}", "*,*:before,*:after{box-sizing:inherit;}", "a,a:link,a:active,a:visited{-webkit-text-decoration:none;text-decoration:none;}", "input{border:none;}", "input,select,button{margin:0;border:0;padding:0;display:inline-block;vertical-align:middle;white-space:normal;background:none;line-height:1;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);}", "input:focus,button:focus{outline:0;}", "input{-webkit-appearance:none;border-radius:0;}", "input[type='search']{-webkit-appearance:none;-webkit-box-sizing:content-box;}", "input[type='search']::-webkit-search-decoration,input[type='search']::-webkit-search-cancel-button,input[type='search']::-webkit-search-results-button,input[type='search']::-webkit-search-results-decoration{display:none;}", "::-webkit-search-decoration{display:none;}"];
reset_style_defaultExport.__hash = "3389535933";
/* harmony default export */ var reset_style = (reset_style_defaultExport);
// CONCATENATED MODULE: ./pages/_app.tsx

var _app_jsx = external_react_default.a.createElement;








class _app_MyApp extends app_default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return _app_jsx(external_react_redux_["Provider"], {
      store: store
    }, _app_jsx(Layout, null, _app_jsx(Component, pageProps)), _app_jsx(style_default.a, {
      id: reset_style.__hash
    }, reset_style));
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (external_next_redux_wrapper_default()(redux_store)(_app_MyApp));

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "mYab":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "o42t":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("6jsY")


/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });