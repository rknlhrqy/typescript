class Person {
    constructor(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }
    selfIntroduce(lastName) {
        console.log('Hello, I am', lastName);
    }
}
const myPerson = new Person('John', 27);
myPerson.selfIntroduce('Smitch');
const myFunc = (num1, num2) => {
    return (num1 + num2);
};
console.log(myFunc(2, 3));
class OneAgedPerson {
    constructor(firstName, sex, age) {
        this.firstName = firstName;
        this.age = age;
        this.sex = sex;
    }
    selfIntroduce(lastName) {
        console.log('Hello, I am', this.firstName, lastName);
    }
    getSex() {
        return this.sex;
    }
}
const myAgedPerson = new OneAgedPerson('John', 'male', 27);
console.log(myAgedPerson.getSex());
myAgedPerson.selfIntroduce('Smith');
