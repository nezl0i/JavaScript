'use strict';

/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
    где arg1, arg2– значения аргументов, operation– строка с названием операции.В зависимости от
переданного значения операции(использовать
    switch) выполнить одну из арифметических
операций
    (использовать функции из задания 4) и вернуть полученное значение.
    */

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function mathOperation(arg1, arg2, operation) {

    switch (operation) {
        case 'ADD':
            return addition(+arg1, +arg2);
        case 'SUBTRACT':
            return subtraction(+arg1, +arg2);
        case 'MULTIPLY':
            return multiplication(+arg1, +arg2);
        case 'DIVIDE':
            return division(+arg1, +arg2);
        default:
            console.log('Введены не все параметры, либо параметры неверны')

    }
}

console.log(mathOperation(4, 8, 'ADD'));
console.log(mathOperation(4, 8, 'SUBTRACT'));
console.log(mathOperation(4, 8, 'MULTIPLY'));
console.log(mathOperation(4, 8, 'DIVIDE'));
console.log(mathOperation(4, 8, 'OTHER'));