"use strict"
let discount = 0.15;
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

for (let index = 0; index < products.length; index++) {
    products[index].price -= products[index].price * discount;
    console.log(`Product ID: ${products[index].id}, actual price ${products[index].price}`);
}
