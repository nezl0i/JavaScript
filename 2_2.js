'use strict';

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price - (this.price * 0.25);
    }
}

let obj2 = new Product('Phone', 2550);
obj2.make25PercentDiscount();