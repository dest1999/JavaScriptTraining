"use strict";
/* складываем 10+10 получаем 20, затем следующее сложение, а точнее конкатенация: 20(число приводится к строке) + строка("10"),
и получаем конечный результат 2010*/
let tmp = 10 + 10 + "10";
console.log(tmp);

/* складываем 10(число) + "10"(строка) получаем строку "1010", затем следующее сложение: строка("1010") + число(10), которое автоприводится к строке
и получаем конечный результат 101010*/
tmp = 10 + "10" + 10;
console.log(tmp);

/*последний литерал "10" благодаря унарному оператору (+) приводится к числу, в результате складываем 3 числа и получаем 30*/
tmp = 10 + 10 + +"10";
console.log(tmp);

/* унарным минусом приводим пустую строку к числу и получаем значение (-0), а в результате деления числа (10) на -0 получаем значение минус бесконечность*/
tmp = 10 / -"";
console.log(tmp);

/*попытка привести к числу унарным плюсом строку "2,5" неудаётся, т.к. корректным разделителем целой и дробной частей числа является точка
в итоге происходит попытка поделить число 10 на не-число "2,5" и конечный результат Not a Number (NaN)*/
tmp = 10 / +"2,5";
console.log(tmp);