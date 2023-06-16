/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist */ \"redux-persist\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-persist/integration/react */ \"redux-persist/integration/react\");\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-persist/lib/storage */ \"redux-persist/lib/storage\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n\n\n\n\n\n\n\n\nconst persistConfig = {\n    key: \"hackaTweet\",\n    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_6___default())\n};\nconst reducers = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7__.combineReducers)({\n    user: _reducers_user__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n});\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7__.configureStore)({\n    reducer: (0,redux_persist__WEBPACK_IMPORTED_MODULE_4__.persistReducer)(persistConfig, reducers),\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({\n            serializableCheck: false\n        })\n});\nconst persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_4__.persistStore)(store);\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n        store: store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5__.PersistGate, {\n            persistor: persistor,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"HackaTweet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/cecile/Desktop/TweeterClone/TweeterClone-frontend/pages/_app.js\",\n                            lineNumber: 26,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            type: \"image/svg\",\n                            href: \"favicon.svg\"\n                        }, void 0, false, {\n                            fileName: \"/Users/cecile/Desktop/TweeterClone/TweeterClone-frontend/pages/_app.js\",\n                            lineNumber: 27,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/cecile/Desktop/TweeterClone/TweeterClone-frontend/pages/_app.js\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/cecile/Desktop/TweeterClone/TweeterClone-frontend/pages/_app.js\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/cecile/Desktop/TweeterClone/TweeterClone-frontend/pages/_app.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/cecile/Desktop/TweeterClone/TweeterClone-frontend/pages/_app.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ0Y7QUFFVTtBQUNzQjtBQUNDO0FBQ2Q7QUFDbUI7QUFDbkUsTUFBTVEsYUFBYSxHQUFHO0lBQUVDLEdBQUcsRUFBRSxZQUFZO0lBQUVKLE9BQU87Q0FBRTtBQUVwRCxNQUFNSyxRQUFRLEdBQUdKLGlFQUFlLENBQUM7SUFBRUssSUFBSTtDQUFFLENBQUM7QUFFMUMsTUFBTUMsS0FBSyxHQUFHTCxnRUFBYyxDQUFDO0lBQzNCTSxPQUFPLEVBQUVWLDZEQUFjLENBQUNLLGFBQWEsRUFBRUUsUUFBUSxDQUFDO0lBQ2hESSxVQUFVLEVBQUUsQ0FBQ0Msb0JBQW9CLEdBQUtBLG9CQUFvQixDQUFDO1lBQUVDLGlCQUFpQixFQUFFLEtBQUs7U0FBRSxDQUFDO0NBQ3hGLENBQUM7QUFDSCxNQUFNQyxTQUFTLEdBQUdmLDJEQUFZLENBQUNVLEtBQUssQ0FBQztBQUNEO0FBR3BDLFNBQVNNLEdBQUcsQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3JDLHFCQUNFLDhEQUFDbkIsaURBQVE7UUFBQ1csS0FBSyxFQUFFQSxLQUFLO2tCQUNwQiw0RUFBQ1Isd0VBQVc7WUFBQ2EsU0FBUyxFQUFFQSxTQUFTOzs4QkFDakMsOERBQUNqQixrREFBSTs7c0NBQ0gsOERBQUNxQixPQUFLO3NDQUFDLFlBQVU7Ozs7O2dDQUFRO3NDQUN6Qiw4REFBQ0MsTUFBSTs0QkFBQ0MsR0FBRyxFQUFDLE1BQU07NEJBQUNDLElBQUksRUFBQyxXQUFXOzRCQUFDQyxJQUFJLEVBQUMsYUFBYTs7Ozs7Z0NBQUU7Ozs7Ozt3QkFDakQ7OEJBQ1AsOERBQUNOLFNBQVM7b0JBQUUsR0FBR0MsU0FBUzs7Ozs7d0JBQUk7Ozs7OztnQkFDZDs7Ozs7WUFDTCxDQUNYO0NBQ0g7QUFFRCxpRUFBZUYsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXRlbXBsYXRlLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgcGVyc2lzdFN0b3JlLCBwZXJzaXN0UmVkdWNlciB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnO1xuaW1wb3J0IHsgUGVyc2lzdEdhdGUgfSBmcm9tICdyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0JztcbmltcG9ydCBzdG9yYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UnO1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzLCBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuY29uc3QgcGVyc2lzdENvbmZpZyA9IHsga2V5OiAnaGFja2FUd2VldCcsIHN0b3JhZ2UgfTtcblxuY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoeyB1c2VyIH0pO1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjogcGVyc2lzdFJlZHVjZXIocGVyc2lzdENvbmZpZywgcmVkdWNlcnMpLFxuICBtaWRkbGV3YXJlOiAoZ2V0RGVmYXVsdE1pZGRsZXdhcmUpID0+IGdldERlZmF1bHRNaWRkbGV3YXJlKHsgc2VyaWFsaXphYmxlQ2hlY2s6IGZhbHNlIH0pLFxuIH0pO1xuY29uc3QgcGVyc2lzdG9yID0gcGVyc2lzdFN0b3JlKHN0b3JlKTtcbmltcG9ydCB1c2VyIGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xuXG5cbmZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxQZXJzaXN0R2F0ZSBwZXJzaXN0b3I9e3BlcnNpc3Rvcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkhhY2thVHdlZXQ8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3N2Z1wiIGhyZWY9XCJmYXZpY29uLnN2Z1wiLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvUGVyc2lzdEdhdGU+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJQcm92aWRlciIsInBlcnNpc3RTdG9yZSIsInBlcnNpc3RSZWR1Y2VyIiwiUGVyc2lzdEdhdGUiLCJzdG9yYWdlIiwiY29tYmluZVJlZHVjZXJzIiwiY29uZmlndXJlU3RvcmUiLCJwZXJzaXN0Q29uZmlnIiwia2V5IiwicmVkdWNlcnMiLCJ1c2VyIiwic3RvcmUiLCJyZWR1Y2VyIiwibWlkZGxld2FyZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwic2VyaWFsaXphYmxlQ2hlY2siLCJwZXJzaXN0b3IiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJ0eXBlIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"logout\": () => (/* binding */ logout),\n/* harmony export */   \"userSlice\": () => (/* binding */ userSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    value: {\n        firstname: null,\n        username: null,\n        token: null\n    }\n};\nconst userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"user\",\n    initialState,\n    reducers: {\n        login: (state, action)=>{\n            console.log(\"avant\", state.value);\n            state.value.firstname = action.payload.firstname;\n            state.value.username = action.payload.username;\n            state.value.token = action.payload.token;\n        },\n        logout: (state)=>{\n            state.value.username = null;\n            state.value.firstname = null;\n            state.value.token = null;\n        }\n    }\n});\nconst { login , logout  } = userSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy91c2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUErQztBQUUvQyxNQUFNQyxZQUFZLEdBQUc7SUFDbkJDLEtBQUssRUFBRTtRQUFFQyxTQUFTLEVBQUUsSUFBSTtRQUFFQyxRQUFRLEVBQUUsSUFBSTtRQUFFQyxLQUFLLEVBQUUsSUFBSTtLQUFFO0NBQ3hEO0FBRU0sTUFBTUMsU0FBUyxHQUFHTiw2REFBVyxDQUFDO0lBQ25DTyxJQUFJLEVBQUUsTUFBTTtJQUNaTixZQUFZO0lBQ1pPLFFBQVEsRUFBRTtRQUNSQyxLQUFLLEVBQUUsQ0FBQ0MsS0FBSyxFQUFFQyxNQUFNLEdBQUs7WUFDdEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sRUFBRUgsS0FBSyxDQUFDUixLQUFLLENBQUM7WUFDakNRLEtBQUssQ0FBQ1IsS0FBSyxDQUFDQyxTQUFTLEdBQUdRLE1BQU0sQ0FBQ0csT0FBTyxDQUFDWCxTQUFTLENBQUM7WUFDakRPLEtBQUssQ0FBQ1IsS0FBSyxDQUFDRSxRQUFRLEdBQUdPLE1BQU0sQ0FBQ0csT0FBTyxDQUFDVixRQUFRLENBQUM7WUFDL0NNLEtBQUssQ0FBQ1IsS0FBSyxDQUFDRyxLQUFLLEdBQUdNLE1BQU0sQ0FBQ0csT0FBTyxDQUFDVCxLQUFLLENBQUM7U0FDNUM7UUFDRFUsTUFBTSxFQUFFLENBQUNMLEtBQUssR0FBSztZQUNmQSxLQUFLLENBQUNSLEtBQUssQ0FBQ0UsUUFBUSxHQUFHLElBQUksQ0FBQztZQUM1Qk0sS0FBSyxDQUFDUixLQUFLLENBQUNDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDN0JPLEtBQUssQ0FBQ1IsS0FBSyxDQUFDRyxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQzVCO0tBQ0Y7Q0FDRixDQUFDLENBQUM7QUFFSSxNQUFNLEVBQUVJLEtBQUssR0FBRU0sTUFBTSxHQUFFLEdBQUdULFNBQVMsQ0FBQ1UsT0FBTyxDQUFDO0FBQ25ELGlFQUFlVixTQUFTLENBQUNXLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy10ZW1wbGF0ZS8uL3JlZHVjZXJzL3VzZXIuanM/MGRmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHZhbHVlOiB7IGZpcnN0bmFtZTogbnVsbCwgdXNlcm5hbWU6IG51bGwsIHRva2VuOiBudWxsIH0sXG59O1xuXG5leHBvcnQgY29uc3QgdXNlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAndXNlcicsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBsb2dpbjogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJhdmFudFwiLCBzdGF0ZS52YWx1ZSlcbiAgICAgICAgc3RhdGUudmFsdWUuZmlyc3RuYW1lID0gYWN0aW9uLnBheWxvYWQuZmlyc3RuYW1lO1xuICAgICAgICBzdGF0ZS52YWx1ZS51c2VybmFtZSA9IGFjdGlvbi5wYXlsb2FkLnVzZXJuYW1lO1xuICAgICAgICBzdGF0ZS52YWx1ZS50b2tlbiA9IGFjdGlvbi5wYXlsb2FkLnRva2VuO1xuICAgIH0sXG4gICAgbG9nb3V0OiAoc3RhdGUpID0+IHtcbiAgICAgICAgc3RhdGUudmFsdWUudXNlcm5hbWUgPSBudWxsO1xuICAgICAgICBzdGF0ZS52YWx1ZS5maXJzdG5hbWUgPSBudWxsO1xuICAgICAgICBzdGF0ZS52YWx1ZS50b2tlbiA9IG51bGw7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBsb2dpbiwgbG9nb3V0IH0gPSB1c2VyU2xpY2UuYWN0aW9ucztcbmV4cG9ydCBkZWZhdWx0IHVzZXJTbGljZS5yZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwidmFsdWUiLCJmaXJzdG5hbWUiLCJ1c2VybmFtZSIsInRva2VuIiwidXNlclNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwibG9naW4iLCJzdGF0ZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwibG9nb3V0IiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();