"use strict"
const _products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];
console.log("Сначала отсортируем, а потом выведем товары с фото");
_products.sort((element1, element2) => element1.price - element2.price);

for (let index = 0; index < _products.length; index++) {
    if (_products[index].photos !== undefined && _products[index].photos.length > 0) {
        console.log(_products[index]);
    }
}