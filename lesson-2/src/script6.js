"use strict";

function word(arg) {
    let tmpArr = String(arg).split('');
    let lastSymbol = tmpArr[tmpArr.length - 1];

    switch (lastSymbol) {
        case "1":
            return "рубль";
        
        case "2":
        case "3":
        case "4":
            return "рубля";

        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
            return "рублей";
    }
}

function isCorrect(params) {
    return (!isNaN(params) && +params > 0);
}

let userInput = prompt("Введите сумму пополнения:");

if (isCorrect(userInput)) {
    alert(`Счёт пополнен на ${userInput} ${word(userInput)}`);
} else {
    alert(`Кажется ввод некорректен: ${userInput}`);
}