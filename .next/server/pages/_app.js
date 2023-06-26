(function() {
var exports = {};
exports.id = 888;
exports.ids = [888,405];
exports.modules = {

/***/ 1542:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./components/context.js
var context = __webpack_require__(7041);
// EXTERNAL MODULE: ./pages/index.js + 1 modules
var pages = __webpack_require__(4431);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6099);
;// CONCATENATED MODULE: ./components/layout.js

var __jsx = (external_react_default()).createElement;




 //import { logout } from "../components/auth";
//import {withAuthSync} from "../components/auth";

const Layout = props => {
  const title = "Welcome to Nextjs"; //const {user} = useContext(AppContext);

  const {
    user,
    isAuthenticated,
    setIsAuthenticated,
    setRestaurant,
    setCart
  } = (0,external_react_.useContext)(context/* default */.Z);
  console.log(`User: ${user}`);
  console.log(`Is authenticated: ${isAuthenticated}`);
  /*
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  }
  
  */

  return __jsx("div", null, __jsx((head_default()), null, __jsx("title", null, title), __jsx("meta", {
    charSet: "utf-8"
  }), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
    crossOrigin: "anonymous"
  }), __jsx("script", {
    src: "https://js.stripe.com/v3"
  })), __jsx("header", {
    className: "jsx-3796417845"
  }, __jsx((style_default()), {
    id: "3796417845"
  }, ["a.jsx-3796417845{color:white;}", "h5.jsx-3796417845{color:white;padding-top:11px;}"]), __jsx(external_reactstrap_.Nav, {
    className: "navbar navbar-dark bg-dark"
  }, __jsx(external_reactstrap_.NavItem, null, __jsx(next_link.default, {
    href: "/"
  }, __jsx("a", {
    className: "jsx-3796417845" + " " + "navbar-brand"
  }, "Home"))), __jsx(external_reactstrap_.NavItem, {
    className: "ml-auto"
  }, user ? __jsx("h5", {
    style: {
      marginRight: "10px"
    },
    className: "jsx-3796417845"
  }, "Hello, ", user.username) : __jsx(next_link.default, {
    href: "/register"
  }, __jsx("a", {
    className: "jsx-3796417845" + " " + "nav-link"
  }, " Sign up"))), __jsx(external_reactstrap_.NavItem, null, user ? __jsx(next_link.default, {
    href: "/"
  }, __jsx("a", {
    onClick: () => {
      // logout();
      setUser(null);
      setIsAuthenticated(false);
    },
    className: "jsx-3796417845" + " " + "nav-link"
  }, "Logout")) : __jsx(next_link.default, {
    href: "/login"
  }, __jsx("a", {
    className: "jsx-3796417845" + " " + "nav-link"
  }, "Sign in"))))), __jsx(external_reactstrap_.Container, null, props.children));
};

/* harmony default export */ var layout = (Layout);
/*

*/
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6155);
;// CONCATENATED MODULE: ./pages/_app.js

var _app_jsx = (external_react_default()).createElement;








function MyApp(props) {
  //var {cart,addItem,removeItem, user, setUser} = useContext(AppContext);
  var {
    cart,
    addItem,
    removeItem
  } = (0,external_react_.useContext)(context/* default */.Z);
  const {
    0: user,
    1: setUser
  } = (0,external_react_.useState)(null);
  const {
    0: isAuthenticated,
    1: setIsAuthenticated
  } = (0,external_react_.useState)(false);
  const {
    0: restaurant,
    1: setRestaurant
  } = (0,external_react_.useState)(0);
  const {
    0: state,
    1: setState
  } = (0,external_react_.useState)({
    cart: cart
  });
  const {
    Component,
    pageProps
  } = props;
  /*
  setUser = (user) => {
    setState({ user });
  };
  */

  addItem = item => {
    let {
      items
    } = state.cart; //check for item already in cart
    //if not in cart, add item if item is found increase quanity ++

    let foundItem = true;

    if (items.length > 0) {
      foundItem = items.find(i => i.id === item.id);
      if (!foundItem) foundItem = false;
    } else {
      foundItem = false;
    }

    console.log(`Found Item value: ${JSON.stringify(foundItem)}`); // if item is not new, add to cart, set quantity to 1

    if (!foundItem) {
      //set quantity property to 1
      let temp = JSON.parse(JSON.stringify(item));
      temp.quantity = 1;
      var newCart = {
        items: [...state.cart.items, temp],
        total: state.cart.total + item.price
      };
      setState({
        cart: newCart
      });
      console.log(`Total items: ${JSON.stringify(newCart)}`);
    } else {
      // we already have it so just increase quantity ++
      console.log(`Total so far:  ${state.cart.total}`);
      newCart = {
        items: items.map(item => {
          if (item.id === foundItem.id) {
            return Object.assign({}, item, {
              quantity: item.quantity + 1
            });
          } else {
            return item;
          }
        }),
        total: state.cart.total + item.price
      };
    }

    setState({
      cart: newCart
    }); // problem is this is not updated yet

    console.log(`state reset to cart:${JSON.stringify(state)}`);
  };

  removeItem = item => {
    let {
      items
    } = state.cart; //check for item already in cart

    const foundItem = items.find(i => i.id === item.id);

    if (foundItem.quantity > 1) {
      var newCart = {
        items: items.map(item => {
          if (item.id === foundItem.id) {
            return Object.assign({}, item, {
              quantity: item.quantity - 1
            });
          } else {
            return item;
          }
        }),
        total: state.cart.total - item.price
      }; //console.log(`NewCart after remove: ${JSON.stringify(newCart)}`)
    } else {
      // only 1 in the cart so remove the whole item
      console.log(`Try remove item ${JSON.stringify(foundItem)}`);
      const index = items.findIndex(i => i.id === foundItem.id);
      items.splice(index, 1);
      var newCart = {
        items: items,
        total: state.cart.total - item.price
      };
    }

    setState({
      cart: newCart
    });
  };

  return (// <AppContext.Provider value={{cart: state.cart, addItem: addItem, removeItem: removeItem,isAuthenticated:false,user:null,setUser:()=>{}}}>
    _app_jsx(context/* default.Provider */.Z.Provider, {
      value: {
        cart: state.cart,
        addItem,
        removeItem,
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        restaurant,
        setRestaurant
      }
    }, _app_jsx((head_default()), null, _app_jsx("link", {
      rel: "stylesheet",
      href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
      integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
      crossOrigin: "anonymous"
    })), _app_jsx(layout, null, _app_jsx(Component, pageProps)))
  );
}

/* harmony default export */ var _app = (MyApp);
/*
    <AppContext.Provider value={{cart: state.cart, addItem: addItem, removeItem: removeItem,isAuthenticated:false,user:null,setUser:()=>{}}}>
    */

/***/ }),

/***/ 8074:
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ 6155:
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 3805:
/***/ (function(module) {

"use strict";
module.exports = require("react-anchor-link-smooth-scroll");;

/***/ }),

/***/ 6099:
/***/ (function(module) {

"use strict";
module.exports = require("reactstrap");;

/***/ }),

/***/ 3289:
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,41,646,578,431], function() { return __webpack_exec__(1542); });
module.exports = __webpack_exports__;

})();