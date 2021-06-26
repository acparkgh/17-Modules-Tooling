
import cloneDeep from "../node_modules/lodash-es/cloneDeep.js";

// Importing module
// import {
//   addToCart,
//   totalPrice as price,
//   quantity,
// } from "./shoppingCart.js";

// import * as ShoppingCart from "./shoppingCart.js";
// console.log(ShoppingCart);

console.log("Importing module");
// ShoppingCart.addToCart("pencil", 10);

// console.log(ShoppingCart.totalPrice, ShoppingCart.quantity);

import { totalPrice } from "./shoppingCart.js";
import addToCart from "./shoppingCart.js";

addToCart("banana", 6);
console.log(totalPrice);

const state = {
  cart: [
    {product: "bread", quantity: 5},
    {product: "pizza", quantity: 5},
  ],
  user: {loggedIn: true},
};

const stateClone = Object.assign({}, state);

const stateDeepClone = cloneDeep(state);
// state.user.loggedIn = false;
stateDeepClone.user.loggedIn = false;

console.log(state);
console.log(stateClone);
console.log(stateDeepClone);
