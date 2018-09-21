"use strict";
console.log('It works!');
let myName = 'Kening';
let myBool = false;
let myNum;
myNum = 10;
let hobbies = ['Cooking', 'Sports'];
hobbies = [100];
let address = ['Main Street', 99];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Purple"] = 2] = "Purple";
})(Color || (Color = {}));
;
let myColor = Color.Green;
console.log(myColor);
var Country;
(function (Country) {
    Country[Country["US"] = 0] = "US";
    Country[Country["UK"] = 1] = "UK";
    Country[Country["China"] = 100] = "China";
    Country[Country["Germany"] = 101] = "Germany";
})(Country || (Country = {}));
;
let myCountry = Country.Germany;
let hisCountry = Country.China;
console.log(myCountry);
let anyNum = 100;
anyNum = 'Any';
function printString() {
    console.log('Hello');
}
printString();
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 3));
let myMultiply;
myMultiply = multiply;
console.log(myMultiply(5, 6));
let userData = {
    name: 'Kening',
    age: 27
};
let complex = {
    data: [1100, 3.99, 0],
    output: function (all) {
        if (all) {
            return this.data;
        }
        return [];
    }
};
let complex2 = {
    data: [123, 43.4, 324],
    output: function (all) {
        if (all) {
            return this.data;
        }
        return [];
    }
};
let myDadAge;
myDadAge = 65;
myDadAge = '65';
let finalValue = '65';
if (typeof finalValue == 'string') {
    console.log('it is a string');
}
function throwError() {
    throw new Error('An Error');
}
let canBeNull = 12;
canBeNull = null;
let myVar;
myVar = 12;
myVar = '12';
let myVar2 = 12;
const multiplyNumber = (num1, num2) => {
    return num1 * num2;
};
console.log(multiplyNumber(10, 30));
const greetFriend = (friend) => console.log(friend);
const countDown = (start = 200, end = start - 100) => {
    while (start > end) {
        start--;
    }
    console.log('Done');
};
countDown();
const numbers = [1, 20, 39, 99, 4];
``;
console.log(Math.max(...numbers));
const makeArray = (...args) => {
    return args;
};
console.log(makeArray(1, 2, 3, 4, 5, 6));
//# sourceMappingURL=app.js.map