"use strict"

class Product {
    constructor(name, price) {
        if (!isNaN(price) && +price > 0) {
            this.price = +price;
            this.name = name;
        } else {
            throw Error(`Cant create product ${name}`);
        }
    }
    make25PercentDiscount() {
        this.price -= this.price * 0.25;
    }
}

let prodES6 = new Product("product1", 100);
prodES6.make25PercentDiscount();
console.log(`${prodES6.name} ${prodES6.price}`);
