"use strict";
class Car {
    constructor(name) {
        this.acceleration = 0;
        this.name = name;
    }
    honk() {
        console.log('Toooooot!');
    }
    accelerate(speed) {
        this.acceleration += speed;
    }
}
const car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
class BaseObject {
    constructor(width, length) {
        this.width = 0;
        this.length = 0;
        this.width = width;
        this.length = length;
    }
}
class Rectangle extends BaseObject {
    constructor(width, length) {
        super(width, length);
    }
    calcSize() {
        return this.width * this.length;
    }
}
const rectangle = new Rectangle(5, 2);
console.log(rectangle.calcSize());
class Person2 {
    constructor() {
        this._firstName = 'default';
    }
    set firstName(name) {
        if (name.length > 3) {
            this._firstName = name;
        }
        else {
            this._firstName = '';
        }
    }
    get firstName() {
        return this._firstName;
    }
}
const person2 = new Person2();
console.log(person2.firstName);
person2.firstName = 'Ma';
console.log(person2.firstName);
person2.firstName = 'Maxillian';
console.log(person2.firstName);
//# sourceMappingURL=exercise3.js.map