"use strict"

let symbol = "x";

for (let i = 1; i <= 20; i++) {
    console.log(stringFormer(i, symbol));
}

function stringFormer(i, str) {
    if (i <= 1) {
        return str;
    }
    return stringFormer(--i, str + str[0]);
}