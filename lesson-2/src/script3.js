"use strict";
let a3 = +prompt("введите первое число");
let b3 = +prompt("введите второе число");

if (a3 >= 0 && b3 >= 0) {
    alert(a3 - b3);
} else if (a3 < 0 && b3 < 0) {
    alert(a3 * b3);
} else {
    alert(a3 + b3);
}