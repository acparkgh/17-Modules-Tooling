// Exporting module
console.log("Exporting Module");

const shippingCost = 10;
const cart = [];

const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

addToCart("bottle", 5)
console.log(cart);

export const totalPrice = 100;
const totalQuantity = 23;

// export { totalPrice, totalQuantity as quantity };
export default addToCart;