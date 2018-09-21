var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logged(constructor) {
    console.log(constructor);
}
var Person = /** @class */ (function () {
    function Person() {
        console.log('Hi, There!');
    }
    Person = __decorate([
        logged
    ], Person);
    return Person;
}());
function logging(value) {
    return value ? logged : null;
}
var Car = /** @class */ (function () {
    function Car() {
        console.log('This is class Car');
    }
    Car = __decorate([
        logging(true)
    ], Car);
    return Car;
}());
function printable(constructor) {
    var _this = this;
    constructor.prototype.print = function () {
        console.log('this:', _this.plant);
    };
}
var Plant = /** @class */ (function () {
    function Plant(name) {
        this.name = name;
    }
    Plant = __decorate([
        logging(true),
        printable
    ], Plant);
    return Plant;
}());
var plant = new Plant('Green Plant');
plant.print();
//method decorator
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
function overwritable(value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value,
        };
        return newDescriptor;
    };
}
var Project = /** @class */ (function () {
    function Project(name) {
        this.projectName = name;
    }
    Project.prototype.calc = function () {
        console.log(1000);
    };
    __decorate([
        overwritable(false)
    ], Project.prototype, "projectName", void 0);
    __decorate([
        editable(false)
    ], Project.prototype, "calc", null);
    return Project;
}());
var project = new Project('New Project');
project.calc();
project.calc = function () {
    console.log(2000);
};
project.calc();
console.log(project.projectName);
project.projectName = 'Old project';
console.log(project.projectName);
// Parameter decorator
function printInfo(target, methodName, paramIndex) {
    console.log('target:', target);
    console.log('methodName:', methodName);
    console.log('paramIndex:', paramIndex);
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudentNumber = function (mode, printAll) {
        if (printAll) {
            console.log(1000);
        }
        else {
            console.log(200);
        }
    };
    __decorate([
        __param(1, printInfo)
    ], Course.prototype, "printStudentNumber", null);
    return Course;
}());
var course = new Course('Surper Course');
course.printStudentNumber('', true);
course.printStudentNumber('', false);
