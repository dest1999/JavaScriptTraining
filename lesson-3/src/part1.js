//исходя из "https://ru.wikipedia.org/wiki/%D0%A7%D1%91%D1%82%D0%BD%D0%BE%D1%81%D1%82%D1%8C_%D0%BD%D1%83%D0%BB%D1%8F" ноль является чётным числом
"use strict"

for(let i = 0; i <= 10; i++){
    if (i % 2 == 0) {
        console.log(`${i} - это чётное число`);
    }else{
        console.log(`${i} - это нечётное число`);
    }
}