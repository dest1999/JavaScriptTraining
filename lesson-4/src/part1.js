"use strict"

function Product(name, price) {
    if (!isNaN(price) && +price > 0) {
        this.price = +price;
        this.name = name;
    } else {
        throw Error(`Cant create product ${name}`)
    }
}

Product.prototype.make25PercentDiscount = function(){
    this.price -= this.price * 0.25;
}

let prodES5 = new Product("product1", 100);
prodES5.make25PercentDiscount();
console.log(`${prodES5.name} ${prodES5.price}`);
