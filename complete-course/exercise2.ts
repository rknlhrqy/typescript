const double = (value: number): number => value * 2;
console.log(double(10));

const greet = (name: string = 'Max'): void => console.log(`Hello, ${name}`);
greet();
greet('Anna');

const numbers1: number[] = [-3, 33, 38, 5];
console.log(Math.min(...numbers1));

let newArray: number[] = [55, 20];
console.log(...newArray, ...numbers1);

const testResults: number[] = [3.89, 2.99, 1.38];
const [r1, r2, r3] = testResults;
console.log(r1, r2, r3);

const scientist = {
  firstName: 'Will',
  experience: 12,
};
const { firstName: myFirstName, experience: myExperience } = scientist;
console.log(myFirstName, myExperience);