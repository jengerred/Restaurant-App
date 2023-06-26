exports.id = 41;
exports.ids = [41];
exports.modules = {

/***/ 7041:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const AppContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  isAuthenticated: false,
  cart: {
    items: [],
    total: 0
  },
  addItem: () => {},
  removeItem: () => {},
  user: false,
  setUser: () => {}
});
/* harmony default export */ __webpack_exports__["Z"] = (AppContext);
/*

import { createContext, useState } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [globalData, setGlobalData] = useState({
    isAuthenticated: false,
    setIsAuthenticated: () => {},
    cart: {
      items: [],
      total: 0,
    },
    user: false,
    setUser: () => {},
    addItems: () => {},
    removeItems: () => {},
  });

  globalData.setIsAuthenticated = (boolVal) => {
    setGlobalData((prev) => ({ ...prev, isAuthenticated: boolVal }));
  };

  globalData.setUser = (userData) => {
    setGlobalData((prev) => ({ ...prev, user: userData }));
  };

  globalData.addItems = (item) => {
    let { items } = globalData.cart;
    let foundItem = true;

    if (items.length > 0) {
      foundItem = items.find(
        (i) => i.attributes.dishId === item.attributes.dishId
      );

      if (!foundItem) foundItem = false;
    } else {
      foundItem = false;
    }

    if (!foundItem) {
      let temp = JSON.parse(JSON.stringify(item));
      temp.quantity = 1;

      var newCart = {
        items: [...globalData.cart.items, temp],
        total: globalData.cart.total + item.attributes.price,
      };

      setGlobalData((prev) => ({ ...prev, cart: newCart }));
    } else {
      newCart = {
        items: items.map((item) => {
          if (item.attributes.dishId === foundItem.attributes.dishId) {
            return Object.assign({}, item, { quantity: item.quantity + 1 });
          } else {
            return item;
          }
        }),
        total: globalData.cart.total + item.attributes.price,
      };

      setGlobalData((prev) => ({ ...prev, cart: newCart }));
    }
  };

  globalData.removeItems = (item) => {
    let { items } = globalData.cart;

    const foundItem = items.find(
      (i) => i.attributes.dishId === item.attributes.dishId
    );

    console.log(foundItem);

    if (foundItem.quantity > 1) {
      var newCart = {
        items: items.map((item) => {
          if (item.attributes.dishId === foundItem.attributes.dishId) {
            return Object.assign({}, item, { quantity: item.quantity - 1 });
          } else {
            return item;
          }
        }),
        total: globalData.cart.total - item.attributes.price,
      };
    } else {
      const index = items.findIndex(
        (i) => i.attributes.dishId === foundItem.attributes.dishId
      );

      items.splice(index, 1);

      var newCart = {
        items: items,
        total: globalData.cart.total - item.attributes.price,
      };
    }

    setGlobalData((prev) => ({ ...prev, cart: newCart }));
  };

  return (
    <AppContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

*/

/***/ })

};
;