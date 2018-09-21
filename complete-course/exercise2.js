"use strict";
const double = (value) => value * 2;
console.log(double(10));
const greet = (name = 'Max') => console.log(`Hello, ${name}`);
greet();
greet('Anna');
const numbers1 = [-3, 33, 38, 5];
console.log(Math.min(...numbers1));
let newArray = [55, 20];
console.log(...newArray, ...numbers1);
const testResults = [3.89, 2.99, 1.38];
const [r1, r2, r3] = testResults;
console.log(r1, r2, r3);
const scientist = {
    firstName: 'Will',
    experience: 12,
};
const { firstName: myFirstName, experience: myExperience } = scientist;
console.log(myFirstName, myExperience);
//# sourceMappingURL=exercise2.js.map