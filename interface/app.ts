// Interface for class
interface NamedPerson {
  firstName: string;
  age?: number;
  [propName: string]: any;
  selfIntroduce(lastName: string): void;
}

class Person implements NamedPerson {
  firstName: string;
  age: number;

  constructor(firstName: string, age: number) {
    this.firstName = firstName;
    this.age = age;
  }

  selfIntroduce(lastName: string): void {
    console.log('Hello, I am', lastName);
  }
}

const myPerson = new Person('John', 27);
myPerson.selfIntroduce('Smitch');

// Interface for function
interface DoubleValueFunc {
  (number1: number, number2: number): number;
}

const myFunc: DoubleValueFunc = (num1: number, num2: number): number => {
  return (num1 + num2);
};

console.log(myFunc(2, 3));

// Interface inheritance

interface NamedPerson {
  firstName: string;
  age?: number;
  selfIntroduce(lastName: string): void;
}

interface AgedPerson extends NamedPerson {
  age: number;
  sex: string;
  getSex(): string;
}

class OneAgedPerson implements AgedPerson {
  firstName: string;
  age: number;
  sex: string;

  constructor(firstName: string, sex: string, age: number) {
    this.firstName = firstName;
    this.age = age;
    this.sex = sex;
  }

  selfIntroduce(lastName: string): void {
    console.log('Hello, I am', this.firstName, lastName);
  }

  getSex(): string {
    return this.sex;
  }
}

const myAgedPerson = new OneAgedPerson('John', 'male', 27);

console.log(myAgedPerson.getSex());
myAgedPerson.selfIntroduce('Smith');

