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