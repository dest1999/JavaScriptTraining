"use strict";

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return Add(arg1, arg2);

        case "-":
            return Subst(arg1, arg2);

        case "*":
            return Multiple(arg1, arg2);

        case "/":
            return Divide(arg1, arg2);
    
        default:
            alert("операция определена неверно");
            return NaN;
    }
}

let n = mathOperation(
        prompt("введите число 1"),
        prompt("введите число 2"),
        prompt("введите знак операции (+ - * /)")
    );

alert(n);