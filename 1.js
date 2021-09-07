'use strict'

function DigitOfNumber(num) {

    if (!Number.isInteger(num) || num < 0 || num > 999) {
        console.log('Введено неверное число');
        return {}
    }
    else {
        return {
            unit: num % 10,
            hundered: Math.floor(num / 100),
            ten: Math.floor(num / 10) % 10
        }
    }
}

console.log(DigitOfNumber(567))