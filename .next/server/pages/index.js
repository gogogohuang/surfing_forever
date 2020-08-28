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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/network */ \"./utils/network.ts\");\nvar _jsxFileName = \"/Users/gogogohuang/Documents/Project/surfing_forever/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst HomePage = () => {\n  const {\n    0: data,\n    1: setData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const getData = async () => {\n      const res = await _utils_network__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getSeaData();\n      setData(res);\n    };\n\n    getData();\n  }, []);\n  console.log(data);\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 10\n    }\n  }, \"Welcome to Next.js!\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJIb21lUGFnZSIsImRhdGEiLCJzZXREYXRhIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXREYXRhIiwicmVzIiwibmV0d29yayIsImdldFNlYURhdGEiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBTSxJQUFOLENBQWhDO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1DLE9BQU8sR0FBRyxZQUFZO0FBQzFCLFlBQU1DLEdBQUcsR0FBRyxNQUFNQyxzREFBTyxDQUFDQyxVQUFSLEVBQWxCO0FBRUFOLGFBQU8sQ0FBQ0ksR0FBRCxDQUFQO0FBQ0QsS0FKRDs7QUFNQUQsV0FBTztBQUNSLEdBUlEsRUFRTixFQVJNLENBQVQ7QUFVQUksU0FBTyxDQUFDQyxHQUFSLENBQVlULElBQVo7QUFHQSxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQVA7QUFDRCxDQWpCRDs7QUFtQmVELHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBuZXR3b3JrIGZyb20gJy4uL3V0aWxzL25ldHdvcmsnO1xuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8YW55PihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBuZXR3b3JrLmdldFNlYURhdGEoKTtcblxuICAgICAgc2V0RGF0YShyZXMpO1xuICAgIH1cblxuICAgIGdldERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuXG5cbiAgcmV0dXJuIDxkaXY+V2VsY29tZSB0byBOZXh0LmpzITwvZGl2PlxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./utils/network.ts":
/*!**************************!*\
  !*** ./utils/network.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var idx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! idx */ \"idx\");\n/* harmony import */ var idx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(idx__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst apiKey = \"CWB-27A80F1A-A586-4FDC-BE8A-641BF50848FA\";\nconst apiUrl = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore';\n\nconst getSeaData = () => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${apiUrl}/O-A0018-001`, {\n  params: {\n    Authorization: apiKey,\n    limit: 10,\n    stationId: '46708A',\n    elementName: '浪高'\n  }\n}).then(res => {\n  const success = idx__WEBPACK_IMPORTED_MODULE_1___default()(res, _ => _.data.success);\n  const records = idx__WEBPACK_IMPORTED_MODULE_1___default()(res, _ => _.data.records);\n\n  if (success === 'true') {\n    return records || {};\n  }\n\n  return {};\n}).catch(e => console.log(e));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getSeaData\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9uZXR3b3JrLnRzP2I0MjAiXSwibmFtZXMiOlsiYXBpS2V5IiwiYXBpVXJsIiwiZ2V0U2VhRGF0YSIsImF4aW9zIiwiZ2V0IiwicGFyYW1zIiwiQXV0aG9yaXphdGlvbiIsImxpbWl0Iiwic3RhdGlvbklkIiwiZWxlbWVudE5hbWUiLCJ0aGVuIiwicmVzIiwic3VjY2VzcyIsImlkeCIsIl8iLCJkYXRhIiwicmVjb3JkcyIsImNhdGNoIiwiZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTUEsTUFBTSxHQUFHLDBDQUFmO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLG1EQUFmOztBQUVBLE1BQU1DLFVBQVUsR0FBRyxNQUNqQkMsNENBQUssQ0FBQ0MsR0FBTixDQUFXLEdBQUVILE1BQU8sY0FBcEIsRUFDRTtBQUNFSSxRQUFNLEVBQUU7QUFDTkMsaUJBQWEsRUFBRU4sTUFEVDtBQUVOTyxTQUFLLEVBQUUsRUFGRDtBQUdOQyxhQUFTLEVBQUUsUUFITDtBQUlOQyxlQUFXLEVBQUU7QUFKUDtBQURWLENBREYsRUFTR0MsSUFUSCxDQVNRQyxHQUFHLElBQUk7QUFDWCxRQUFNQyxPQUFPLEdBQUdDLDBDQUFHLENBQUNGLEdBQUQsRUFBTUcsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLElBQUYsQ0FBT0gsT0FBbEIsQ0FBbkI7QUFDQSxRQUFNSSxPQUFPLEdBQUdILDBDQUFHLENBQUNGLEdBQUQsRUFBTUcsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLElBQUYsQ0FBT0MsT0FBbEIsQ0FBbkI7O0FBRUEsTUFBSUosT0FBTyxLQUFLLE1BQWhCLEVBQXdCO0FBQ3RCLFdBQU9JLE9BQU8sSUFBSSxFQUFsQjtBQUNEOztBQUVELFNBQU8sRUFBUDtBQUNELENBbEJILEVBbUJHQyxLQW5CSCxDQW1CU0MsQ0FBQyxJQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWixDQW5CZCxDQURGOztBQXVCZTtBQUNiaEI7QUFEYSxDQUFmIiwiZmlsZSI6Ii4vdXRpbHMvbmV0d29yay50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgaWR4IGZyb20gJ2lkeCc7XG5cbmNvbnN0IGFwaUtleSA9IFwiQ1dCLTI3QTgwRjFBLUE1ODYtNEZEQy1CRThBLTY0MUJGNTA4NDhGQVwiO1xuY29uc3QgYXBpVXJsID0gJ2h0dHBzOi8vb3BlbmRhdGEuY3diLmdvdi50dy9hcGkvdjEvcmVzdC9kYXRhc3RvcmUnO1xuXG5jb25zdCBnZXRTZWFEYXRhID0gKCkgPT4gKFxuICBheGlvcy5nZXQoYCR7YXBpVXJsfS9PLUEwMDE4LTAwMWAsXG4gICAge1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGFwaUtleSxcbiAgICAgICAgbGltaXQ6IDEwLFxuICAgICAgICBzdGF0aW9uSWQ6ICc0NjcwOEEnLFxuICAgICAgICBlbGVtZW50TmFtZTogJ+a1qumrmCdcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICBjb25zdCBzdWNjZXNzID0gaWR4KHJlcywgXyA9PiBfLmRhdGEuc3VjY2Vzcyk7XG4gICAgICBjb25zdCByZWNvcmRzID0gaWR4KHJlcywgXyA9PiBfLmRhdGEucmVjb3Jkcyk7XG5cbiAgICAgIGlmIChzdWNjZXNzID09PSAndHJ1ZScpIHtcbiAgICAgICAgcmV0dXJuIHJlY29yZHMgfHwge307XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7fTtcbiAgICB9KVxuICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKVxuKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRTZWFEYXRhLFxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/network.ts\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "idx":
/*!**********************!*\
  !*** external "idx" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"idx\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpZHhcIj9iN2RiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImlkeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlkeFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///idx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });