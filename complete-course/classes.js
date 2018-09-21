"use strict";
class Person {
    constructor(name, username) {
        this.username = username;
        this.gender = 'male';
        this.name = name;
        this.type = 'time';
        this.age = 0;
    }
    printAge() {
        console.log(this.age);
        console.log(this.getType());
    }
    setType(type) {
        this.type = type;
        console.log(this.type);
        console.log(this.gender);
    }
    getType() {
        return this.type;
    }
}
const person = new Person('Max', 'max');
person.printAge();
person.setType('Hii');
class Max extends Person {
    constructor(username) {
        super('Max', username);
        this.age = 37;
    }
}
const max = new Max('max');
console.log(max);
class Plant {
    constructor() {
        this._species = 'default';
    }
    set species(value) {
        this._species = value;
    }
    get species() {
        return this._species;
    }
}
const plant = new Plant();
plant.species = 'Sunflower';
console.log(plant.species);
class Helper {
    static calcCircumference(diameter) {
        return 2 * this.PI * diameter;
    }
}
Helper.PI = 3.14;
console.log(2 * Helper.PI);
console.log(Helper.calcCircumference(8));
class Project {
    constructor() {
        this.projectName = 'Default';
        this.budget = 10;
    }
    calcBudget() {
        return this.budget * 2;
    }
}
class ITProject extends Project {
    changeName(name) {
        this.projectName = name;
    }
}
const newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super IT project');
console.log(newProject);
class SingletonClass {
    constructor(name) {
        this.name = name;
    }
    static getInstance() {
        if (!SingletonClass.instance) {
            SingletonClass.instance = new SingletonClass('OnlyOne');
        }
        return SingletonClass.instance;
    }
}
const myClass = SingletonClass.getInstance();
console.log(myClass);
myClass.name = 'OnlyTwo';
console.log(myClass.name);
class SingletonClass2 {
    constructor(name) {
        this.name = name;
    }
    static getInstance() {
        if (!SingletonClass2.instance) {
            SingletonClass2.instance = new SingletonClass2('OnlyOne');
        }
        return SingletonClass2.instance;
    }
}
const myClass2 = SingletonClass2.getInstance();
console.log(myClass2);
//myClass2.name = 'OnlyTwo';
console.log(myClass2.name);
//# sourceMappingURL=classes.js.map