webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/dishes.js":
/*!******************************!*\
  !*** ./components/dishes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart */ \"./components/cart.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ \"./components/context.js\");\n/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ \"./node_modules/react-anchor-link-smooth-scroll/lib/anchor-link.js\");\n/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n\n\nvar _jsxFileName = \"/Users/jennifergerred/Documents/MIT/Week 28/restaurant/components/dishes.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query($id: ID!) {\\n    restaurant(id: $id) {\\n      id\\n      name\\n      dishes {\\n        id\\n        name\\n        description\\n        price\\n        image {\\n          url\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\nfunction Dishes(_ref) {\n  _s();\n\n  var _this = this;\n\n  var restId = _ref.restId;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      restaurantID = _useState[0],\n      setRestaurantID = _useState[1];\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n      addItem = _useContext.addItem;\n\n  var GET_RESTAURANT_DISHES = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"gql\"])(_templateObject());\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"])(GET_RESTAURANT_DISHES, {\n    variables: {\n      id: restId\n    }\n  }),\n      loading = _useQuery.loading,\n      error = _useQuery.error,\n      data = _useQuery.data;\n\n  if (loading) return __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 23\n    }\n  }, \"Loading...\");\n  if (error) return __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 21\n    }\n  }, \"ERROR here\");\n  if (!data) return __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 21\n    }\n  }, \"Not found\");\n  var restaurant = data.restaurant;\n\n  if (restId > 0) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"h1\", {\n      style: {\n        marginTop: \"20px\",\n        marginRight: \"10px\",\n        fontFamily: 'georgia'\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 7\n      }\n    }, restaurant.name), __jsx(\"h1\", {\n      style: {\n        marginTop: \"20px\",\n        fontFamily: \"times-italic\"\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 104\n      }\n    }, \" ~ Specials\"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Row\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }\n    }, restaurant.dishes.map(function (res) {\n      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Col\"], {\n        xs: \"6\",\n        sm: \"4\",\n        style: {\n          marginTop: \"2rem\"\n        },\n        key: res.id,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 13\n        }\n      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Card\"], {\n        className: \"cards\",\n        style: {\n          maxWidth: \"300px\"\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 15\n        }\n      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"CardImg\"], {\n        top: true,\n        style: {\n          height: 200\n        },\n        src: \"http://localhost:1337\".concat(res.image.url),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 17\n        }\n      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"CardBody\"], {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 17\n        }\n      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"CardTitle\"], {\n        style: {\n          fontWeight: 'bold',\n          fontSize: '20px'\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 19\n        }\n      }, res.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"CardText\"], {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 19\n        }\n      }, res.description), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"CardText\"], {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 18\n        }\n      }, \"$\", res.price)), __jsx(\"div\", {\n        className: \"card-footer\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 17\n        }\n      }, __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        href: \"#cart\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 17\n        }\n      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Button\"], {\n        color: \"info\",\n        outline: true,\n        onClick: function onClick() {\n          return addItem(res);\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 42\n        }\n      }, \"+ Add To Cart\")))));\n    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Col\"], {\n      id: \"cart\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 11\n      }\n    }, __jsx(_cart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 14\n      }\n    }, \" \"))));\n  } else {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, \" \", __jsx(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 21\n      }\n    }, \" Click \"), \" \", __jsx(\"h1\", {\n      className: \"text-info\",\n      style: {\n        marginRight: \"10px\",\n        marginLeft: \"10px\"\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 38\n      }\n    }, \"View Specials\"), __jsx(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 11\n      }\n    }, \"to see the dishes\"));\n  }\n}\n\n_s(Dishes, \"fozMU1l7TGPKwww7Ipct1ceMLiM=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"], _apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"]];\n});\n\n_c = Dishes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dishes);\n/*\n\nimport {useRouter} from \"next/router\"\nimport {gql,useQuery} from '@apollo/client';\nimport {useState, useContext} from 'react'\nimport AppContext from \"./context\"\nimport {\n  Button,\n  Card,\n  CardBody,\n  CardImg,\n  CardText,\n  CardTitle,\n  Row,\n  Col} from \"reactstrap\";\n\n\nfunction Dishes({restId}){\n  const [restaurantID, setRestaurantID] = useState()\n  const {addItem} = useContext(AppContext)\n\nconst GET_RESTAURANT_DISHES = gql`\n  query($id: ID!) {\n    restaurant(id: $id) {\n      id\n      name\n      dishes {\n        id\n        name\n        description\n        price\n        image {\n          url\n        }\n      }\n    }\n  }\n`;\n\n  const router = useRouter();\n\n  const { loading, error, data } = useQuery(GET_RESTAURANT_DISHES, {\n    variables: { id: restId},\n  });\n\n  if (loading) return <p>Loading...</p>;\n  if (error) return <p>ERROR here</p>;\n  if (!data) return <p>Not found</p>;\n\n  let restaurant = data.restaurant;\n\n  if (restId > 0){\n\n    return (\n      <>\n       <h1>{restaurant.name}</h1>\n        <Row>\n          {restaurant.dishes.map((res) => (\n            <Col xs=\"6\" sm=\"4\" key={res.id}>\n              <Card style={{ margin: \"0 10px\", width: \"300px\"}}>\n                <CardImg\n                   top={true}\n                   style={{ height: 200 }}\n                  src={`http://localhost:1337${res.image.url}`}\n                />\n                <CardBody>\n                  <CardTitle style={{ fontWeight: 'bold' }}>{res.name}</CardTitle>\n                  <CardText>{res.description}</CardText>\n                  <CardText>${res.price}</CardText>\n                </CardBody>\n                <div className=\"card-footer\">\n                  <Button color=\"info\"\n                    outline\n                    color=\"primary\"\n                    onClick = {()=> addItem(res)}\n                  >\n                    + Add To Cart\n                  </Button>\n                  \n                </div>\n              </Card>\n            </Col>\n          ))}\n       \n        </>\n        )}\n        else{\n          return <> <h1> Click the</h1> <h1 className=\"text-info\" style={{marginRight: \"10px\", marginLeft: \"10px\"}}>restaurant</h1>\n         <h1>to see the dishes</h1></>\n        }\n    }\n    export default Dishes;\n\n    */\n\nvar _c;\n\n$RefreshReg$(_c, \"Dishes\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kaXNoZXMuanM/NDE0MyJdLCJuYW1lcyI6WyJEaXNoZXMiLCJyZXN0SWQiLCJ1c2VTdGF0ZSIsInJlc3RhdXJhbnRJRCIsInNldFJlc3RhdXJhbnRJRCIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwiYWRkSXRlbSIsIkdFVF9SRVNUQVVSQU5UX0RJU0hFUyIsImdxbCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiaWQiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwicmVzdGF1cmFudCIsIm1hcmdpblRvcCIsIm1hcmdpblJpZ2h0IiwiZm9udEZhbWlseSIsIm5hbWUiLCJkaXNoZXMiLCJtYXAiLCJyZXMiLCJtYXhXaWR0aCIsImhlaWdodCIsImltYWdlIiwidXJsIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsIm1hcmdpbkxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVNBLFNBQVNBLE1BQVQsT0FBeUI7QUFBQTs7QUFBQTs7QUFBQSxNQUFSQyxNQUFRLFFBQVJBLE1BQVE7O0FBQUEsa0JBQ2lCQyxzREFBUSxFQUR6QjtBQUFBLE1BQ2hCQyxZQURnQjtBQUFBLE1BQ0ZDLGVBREU7O0FBQUEsb0JBRUxDLHdEQUFVLENBQUNDLGdEQUFELENBRkw7QUFBQSxNQUVoQkMsT0FGZ0IsZUFFaEJBLE9BRmdCOztBQUl6QixNQUFNQyxxQkFBcUIsR0FBR0MsMERBQUgsbUJBQTNCO0FBa0JFLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBdEJ1QixrQkF3QlVDLCtEQUFRLENBQUNKLHFCQUFELEVBQXdCO0FBQy9ESyxhQUFTLEVBQUU7QUFBRUMsUUFBRSxFQUFFYjtBQUFOO0FBRG9ELEdBQXhCLENBeEJsQjtBQUFBLE1B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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9kaXNoZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7Z3FsLHVzZVF1ZXJ5fSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQge3VzZVN0YXRlLCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBDYXJ0IGZyb20gXCIuL2NhcnRcIlxuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4vY29udGV4dFwiXG5pbXBvcnQgQW5jaG9yTGluayBmcm9tIFwicmVhY3QtYW5jaG9yLWxpbmstc21vb3RoLXNjcm9sbFwiO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBDYXJkQm9keSxcbiAgQ2FyZEltZyxcbiAgQ2FyZFRleHQsXG4gIENhcmRUaXRsZSxcbiAgUm93LFxuICBDb2x9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5mdW5jdGlvbiBEaXNoZXMoe3Jlc3RJZH0pe1xuICBjb25zdCBbcmVzdGF1cmFudElELCBzZXRSZXN0YXVyYW50SURdID0gdXNlU3RhdGUoKVxuICBjb25zdCB7YWRkSXRlbX0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpXG5cbmNvbnN0IEdFVF9SRVNUQVVSQU5UX0RJU0hFUyA9IGdxbGBcbiAgcXVlcnkoJGlkOiBJRCEpIHtcbiAgICByZXN0YXVyYW50KGlkOiAkaWQpIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBkaXNoZXMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIHByaWNlXG4gICAgICAgIGltYWdlIHtcbiAgICAgICAgICB1cmxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfUkVTVEFVUkFOVF9ESVNIRVMsIHtcbiAgICB2YXJpYWJsZXM6IHsgaWQ6IHJlc3RJZH0sXG4gIH0pO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVSUk9SIGhlcmU8L3A+O1xuICBpZiAoIWRhdGEpIHJldHVybiA8cD5Ob3QgZm91bmQ8L3A+O1xuXG4gIGxldCByZXN0YXVyYW50ID0gZGF0YS5yZXN0YXVyYW50O1xuXG4gIGlmIChyZXN0SWQgPiAwKXtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgXG4gICAgICA8aDEgc3R5bGU9e3ttYXJnaW5Ub3A6IFwiMjBweFwiLG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgZm9udEZhbWlseTogJ2dlb3JnaWEnfX0+e3Jlc3RhdXJhbnQubmFtZX08L2gxPjxoMSBzdHlsZT17e21hcmdpblRvcDogXCIyMHB4XCIsIGZvbnRGYW1pbHk6IFwidGltZXMtaXRhbGljXCJ9fT4gfiBTcGVjaWFsczwvaDE+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAge3Jlc3RhdXJhbnQuZGlzaGVzLm1hcCgocmVzKSA9PiAoXG4gICAgICAgICAgICA8Q29sIHhzPVwiNlwiIHNtPVwiNFwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIycmVtXCJ9fSBrZXk9e3Jlcy5pZH0+XG4gICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImNhcmRzXCIgc3R5bGU9e3ttYXhXaWR0aDogXCIzMDBweFwifX0gPlxuICAgICAgICAgICAgICAgIDxDYXJkSW1nXG4gICAgICAgICAgICAgICAgICB0b3A9e3RydWV9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDIwMCB9fVxuICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDoxMzM3JHtyZXMuaW1hZ2UudXJsfWB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgZm9udFNpemU6ICcyMHB4JyB9fT57cmVzLm5hbWV9PC9DYXJkVGl0bGU+XG4gICAgICAgICAgICAgICAgICA8Q2FyZFRleHQ+e3Jlcy5kZXNjcmlwdGlvbn08L0NhcmRUZXh0PlxuICAgICAgICAgICAgICAgICA8Q2FyZFRleHQ+JHtyZXMucHJpY2V9PC9DYXJkVGV4dD5cbiAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPEFuY2hvckxpbmsgaHJlZj0nI2NhcnQnPjxCdXR0b24gY29sb3I9XCJpbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZVxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0geygpPT4gYWRkSXRlbShyZXMpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICArIEFkZCBUbyBDYXJ0XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvQW5jaG9yTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvQ29sPlxuXG4gICAgICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgKSl9XG4gICAgICAgICAgICAgXG4gICAgICAgICAgPENvbCBpZD1cImNhcnRcIj5cbiAgICAgICAgICAgICA8Q2FydD4gPC9DYXJ0PlxuICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgIFxuICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICByZXR1cm4gPD4gPGgxPiBDbGljayA8L2gxPiA8aDEgY2xhc3NOYW1lPVwidGV4dC1pbmZvXCIgc3R5bGU9e3ttYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpbkxlZnQ6IFwiMTBweFwifX0+VmlldyBTcGVjaWFsczwvaDE+XG4gICAgICAgICAgPGgxPnRvIHNlZSB0aGUgZGlzaGVzPC9oMT48Lz5cbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgZGVmYXVsdCBEaXNoZXNcblxuXG5cblxuXG4vKlxuXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7Z3FsLHVzZVF1ZXJ5fSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQge3VzZVN0YXRlLCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIlxuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBDYXJkQm9keSxcbiAgQ2FyZEltZyxcbiAgQ2FyZFRleHQsXG4gIENhcmRUaXRsZSxcbiAgUm93LFxuICBDb2x9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cblxuZnVuY3Rpb24gRGlzaGVzKHtyZXN0SWR9KXtcbiAgY29uc3QgW3Jlc3RhdXJhbnRJRCwgc2V0UmVzdGF1cmFudElEXSA9IHVzZVN0YXRlKClcbiAgY29uc3Qge2FkZEl0ZW19ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KVxuXG5jb25zdCBHRVRfUkVTVEFVUkFOVF9ESVNIRVMgPSBncWxgXG4gIHF1ZXJ5KCRpZDogSUQhKSB7XG4gICAgcmVzdGF1cmFudChpZDogJGlkKSB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgZGlzaGVzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBwcmljZVxuICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgdXJsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX1JFU1RBVVJBTlRfRElTSEVTLCB7XG4gICAgdmFyaWFibGVzOiB7IGlkOiByZXN0SWR9LFxuICB9KTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FUlJPUiBoZXJlPC9wPjtcbiAgaWYgKCFkYXRhKSByZXR1cm4gPHA+Tm90IGZvdW5kPC9wPjtcblxuICBsZXQgcmVzdGF1cmFudCA9IGRhdGEucmVzdGF1cmFudDtcblxuICBpZiAocmVzdElkID4gMCl7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICA8aDE+e3Jlc3RhdXJhbnQubmFtZX08L2gxPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIHtyZXN0YXVyYW50LmRpc2hlcy5tYXAoKHJlcykgPT4gKFxuICAgICAgICAgICAgPENvbCB4cz1cIjZcIiBzbT1cIjRcIiBrZXk9e3Jlcy5pZH0+XG4gICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpbjogXCIwIDEwcHhcIiwgd2lkdGg6IFwiMzAwcHhcIn19PlxuICAgICAgICAgICAgICAgIDxDYXJkSW1nXG4gICAgICAgICAgICAgICAgICAgdG9wPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMjAwIH19XG4gICAgICAgICAgICAgICAgICBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjEzMzcke3Jlcy5pbWFnZS51cmx9YH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGUgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PntyZXMubmFtZX08L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgICAgIDxDYXJkVGV4dD57cmVzLmRlc2NyaXB0aW9ufTwvQ2FyZFRleHQ+XG4gICAgICAgICAgICAgICAgICA8Q2FyZFRleHQ+JHtyZXMucHJpY2V9PC9DYXJkVGV4dD5cbiAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJpbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0geygpPT4gYWRkSXRlbShyZXMpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICArIEFkZCBUbyBDYXJ0XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICApKX1cbiAgICAgICBcbiAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgcmV0dXJuIDw+IDxoMT4gQ2xpY2sgdGhlPC9oMT4gPGgxIGNsYXNzTmFtZT1cInRleHQtaW5mb1wiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIn19PnJlc3RhdXJhbnQ8L2gxPlxuICAgICAgICAgPGgxPnRvIHNlZSB0aGUgZGlzaGVzPC9oMT48Lz5cbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgZGVmYXVsdCBEaXNoZXM7XG5cbiAgICAqLyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/dishes.js\n");

/***/ })

})