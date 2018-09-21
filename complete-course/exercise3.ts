class Car {
  name: string;
  acceleration: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  honk(): void {
    console.log('Toooooot!');
  }

  accelerate(speed: number): void {
    this.acceleration += speed;
  }
}

const car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);


abstract class BaseObject {
  width: number = 0;
  length: number = 0;

  constructor(width: number, length: number) {
    this.width = width;
    this.length = length;
  }

  abstract calcSize(): number;
}
class Rectangle extends BaseObject {
  constructor(width: number, length: number) {
    super(width, length)
  }

  calcSize(): number {
    return this.width * this.length;
  }
}
const rectangle = new Rectangle(5, 2);
console.log(rectangle.calcSize());

class Person2 {
  private _firstName: string = 'default';

  set firstName(name: string) {
    if (name.length > 3) {
      this._firstName = name;
    } else {
      this._firstName = '';
    }
  }

  get firstName(): string {
    return this._firstName;
  }
}
const person2 = new Person2();

console.log(person2.firstName);
person2.firstName = 'Ma';
console.log(person2.firstName);
person2.firstName = 'Maxillian';
console.log(person2.firstName);