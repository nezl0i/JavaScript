'use strict';

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - (this.price * 0.25);
};

let obj1 = new Product('notebook', 1200);
obj1.make25PercentDiscount();