console.log('It works!');

let myName: string = 'Kening';
let myBool: boolean = false;

let myNum: number;
myNum = 10;

let hobbies: any[] = ['Cooking', 'Sports'];
hobbies = [100];

let address: [string, number] = ['Main Street', 99];

enum Color {
  Red,
  Green,
  Purple,
};

let myColor: Color = Color.Green;
console.log(myColor);

enum Country {
  US,
  UK,
  China = 100,
  Germany,
};

let myCountry: Country = Country.Germany;
let hisCountry: Country = Country.China;
console.log(myCountry);

let anyNum: any = 100;
anyNum = 'Any';

function printString(): void {
  console.log('Hello');
}
printString();

function multiply(value1: number, value2: number): number {
  return value1 * value2;
}

console.log(multiply(2, 3));

let myMultiply: (val1: number, val2: number) => number;
myMultiply = multiply;
console.log(myMultiply(5, 6));

let userData: { name: string, age: number } = {
  name: 'Kening',
  age: 27
};

let complex: {data: number[], output: (all: boolean) => number[]} = {
  data: [1100, 3.99, 0],
  output: function(all: boolean): number[] {
    if (all) {
      return this.data;
    }
    return [];
  }
};

type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
  data: [123, 43.4, 324],
  output: function(all: boolean): number[]{
    if (all) {
      return this.data;
    }
    return [];
  }
}

let myDadAge: number | string;
myDadAge = 65;
myDadAge = '65';


let finalValue = '65';
if (typeof finalValue == 'string') {
  console.log('it is a string');
}

function throwError(): never {
  throw new Error('An Error');
}

let canBeNull: number | null = 12;
canBeNull = null;

let myVar;
myVar = 12;
myVar = '12';

let myVar2: any = 12;

const multiplyNumber = (num1: number, num2: number) => {
  return num1 * num2;
};
console.log(multiplyNumber(10, 30));

const greetFriend = (friend: string) => console.log(friend); 

const countDown = (start: number = 200, end: number = start -100): void => {
  while (start > end) {
    start--;
  }
  console.log('Done');
};

countDown();

const numbers: number[] = [1, 20, 39, 99, 4];``
console.log(Math.max(...numbers));

const makeArray = (...args: number[]): number[] => {
  return args;
};

console.log(makeArray(1, 2,3 ,4 ,5, 6));
