function logged(constructor: Function) {
  console.log(constructor);
}

@logged
class Person {
  constructor() {
    console.log('Hi, There!');
  }
}

function logging(value: boolean) {
  return value?logged: null;
}

@logging(true)
class Car {
  constructor() {
    console.log('This is class Car');
  }
}

function printable(constructor: Function) {
  constructor.prototype.print = () => {
    console.log('this:', this.plant);
  };
}

@logging(true)
@printable
class Plant {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const plant = new Plant('Green Plant');
(<any>plant).print();


//method decorator
function editable(value: boolean) {
  return (target: any, propName: string, descriptor: PropertyDescriptor) => {
    descriptor.writable = value;
  };
}

function overwritable(value: boolean) {
  return (target: any, propName: string): any => {
    const newDescriptor: PropertyDescriptor = {
      writable: value,
    }
    return newDescriptor;
  };
}

class Project {
  @overwritable(false)
  projectName: string;

  constructor(name: string) {
    this.projectName = name;
  }

  @editable(false)
  calc() {
    console.log(1000);
  }
}

const project = new Project('New Project');
project.calc();
project.calc = () => {
  console.log(2000);
};
project.calc();
console.log(project.projectName);
project.projectName = 'Old project';
console.log(project.projectName);

// Parameter decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log('target:', target);
  console.log('methodName:', methodName);
  console.log('paramIndex:', paramIndex);
}

class Course {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  printStudentNumber(mode: string, @printInfo printAll: boolean) {
    if (printAll) {
      console.log(1000);
    } else {
      console.log(200);
    }
  }
}

const course = new Course('Surper Course');
course.printStudentNumber('', true);
course.printStudentNumber('', false);