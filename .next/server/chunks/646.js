exports.id = 646;
exports.ids = [646];
exports.modules = {

/***/ 5376:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3289);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6099);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7041);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3805);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement);





 // we can pass cart data in via props method 
// the alternative is using useContext as below

function Cart() {
  let isAuthenticated = true;
  let {
    cart,
    addItem,
    removeItem
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z); //const [cartA, setCartA] = useState({cart})
  //cart = value.cart;
  //console.log('props:'+ JSON.stringify(value));

  console.log(`in CART: ${JSON.stringify(cart)}`); //   problem is that cart may not be set

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  console.log(`Router Path: ${JSON.stringify(router)}`);

  const renderItems = () => {
    let {
      items
    } = cart;
    console.log(`items: ${JSON.stringify(items)}`);

    if (items && items.length) {
      var itemList = cart.items.map(item => {
        if (item.quantity > 0) {
          return __jsx("div", {
            className: "items-one",
            style: {
              marginBottom: 15
            },
            key: item.id
          }, __jsx("div", null, __jsx("span", {
            id: "item-price"
          }, "\xA0 $", item.price), __jsx("span", {
            id: "item-name"
          }, "\xA0 ", item.name)), __jsx("div", null, __jsx((react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default()), {
            href: "#cart"
          }, " ", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
            style: {
              height: 25,
              padding: 0,
              width: 15,
              marginRight: 5,
              marginLeft: 10
            },
            onClick: () => addItem(item),
            color: "info"
          }, "+")), __jsx((react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default()), {
            href: "#cart"
          }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
            id: "cart",
            style: {
              height: 25,
              padding: 0,
              width: 15,
              marginRight: 10
            },
            onClick: () => removeItem(item),
            color: "info"
          }, "-")), __jsx("span", {
            style: {
              marginLeft: 5
            },
            id: "item-quantity"
          }, item.quantity, "x")));
        }
      });
      return itemList;
    } else {
      return __jsx("div", null);
    }
  };

  const checkoutItems = () => {
    return __jsx("div", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Badge, {
      style: {
        width: 200,
        padding: 10
      },
      color: "light"
    }, __jsx("h5", {
      style: {
        fontWeight: 100,
        color: "gray"
      }
    }, "Total:"), __jsx("h3", null, "$", cart.total)), __jsx("div", {
      style: {
        marginTop: "10px"
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6__.default, {
      href: "/checkout/"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
      style: {
        width: "60%"
      },
      color: "info"
    }, __jsx("a", null, "ORDER")))));
  }; // return Cart


  return __jsx("div", {
    className: "jsx-3161218026"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Card, {
    className: "shadow",
    style: {
      padding: "10px 5px",
      maxWidth: "240px"
    }
  }, __jsx("h1", {
    style: {
      textAlign: "center"
    },
    className: "jsx-3161218026"
  }, " Cart"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {
    style: {
      margin: 10
    }
  }, "Your Order:"), __jsx("hr", {
    className: "jsx-3161218026"
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.CardBody, {
    style: {
      padding: 10
    }
  }, __jsx("div", {
    style: {
      marginBottom: 6
    },
    className: "jsx-3161218026"
  }, __jsx("small", {
    className: "jsx-3161218026"
  }, "Items:")), __jsx("div", {
    className: "jsx-3161218026"
  }, renderItems()), __jsx("div", {
    className: "jsx-3161218026"
  }, checkoutItems()), console.log(`Router Path: ${router.asPath}`))), __jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
    id: "3161218026"
  }, ["#item-price.jsx-3161218026{font-size:1.3em;color:rgba(97,97,97,1);}", "#item-quantity.jsx-3161218026{font-size:0.95em;padding-bottom:4px;color:rgba(158,158,158,1);}", "#item-name.jsx-3161218026{font-size:1.3em;color:rgba(97,97,97,1);}"]));
}

/* harmony default export */ __webpack_exports__["Z"] = (Cart);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;