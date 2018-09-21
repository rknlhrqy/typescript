class Person {
  name: string;
  private type: string;
  protected age: number;
  private gender: string = 'male';

  constructor(name: string, public username: string) {
    this.name = name;
    this.type = 'time';
    this.age = 0;
  }

  printAge() {
    console.log(this.age);
    console.log(this.getType());
  }

  setType(type: string) {
    this.type = type;
    console.log(this.type);
    console.log(this.gender);
  }

  private getType(): string {
    return this.type;
  }
}
const person = new Person('Max', 'max');
person.printAge();
person.setType('Hii');


class Max extends Person {
  constructor(username: string) {
    super('Max', username);
    this.age = 37;
  }
}

const max = new Max('max');
console.log(max);


class Plant {
  private _species: string = 'default';

  set species(value: string) {
    this._species = value;
  }

  get species(): string {
    return this._species;
  }
}

const plant = new Plant();
plant.species = 'Sunflower';
console.log(plant.species);

class Helper {
  static PI: number = 3.14;
  static calcCircumference (diameter: number): number {
    return 2 * this.PI * diameter;
  }
}

console.log( 2 * Helper.PI);
console.log( Helper.calcCircumference(8));

abstract class Project {
  projectName: string = 'Default';
  budget: number = 10;

  abstract changeName(name: string): void;

  calcBudget(): number {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName(name: string): void {
    this.projectName = name;
  }
}

const newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super IT project');
console.log(newProject);


class SingletonClass {
  private static instance: SingletonClass;
  private constructor(public name: string) {}

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
console.log (myClass.name);

class SingletonClass2 {
  public readonly name: string;
  private static instance: SingletonClass2;
  private constructor(name: string) {
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
console.log (myClass2.name);

