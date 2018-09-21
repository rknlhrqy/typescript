function echo(data) {
    return data;
}
console.log(echo('max').length);
console.log(echo(27).length);
console.log(echo({ name: 'max', age: 27 }).length);
function betterEcho(data) {
    return data;
}
console.log(betterEcho('max').length);
console.log(betterEcho(27));
console.log(betterEcho({ name: 'max', age: 27 }));
var testResules = [1.94, 2.07];
testResules.push(-2.99);
//testResules.push('max');
function printAll(args) {
    args.forEach(function (each) {
        console.log(each);
    });
}
printAll(['max', 'jean', 'joy', 'life']);
var echo2 = betterEcho;
console.log(echo2("something"));
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simplyMath1 = new SimpleMath();
simplyMath1.baseValue = 10;
simplyMath1.multiplyValue = 20;
console.log(simplyMath1.calculate());
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.mapData = [];
    }
    MyMap.prototype.setItem = function (key, value) {
        this.mapData.push({ key: key, value: value });
    };
    MyMap.prototype.getItem = function (key) {
        return this.mapData[key];
    };
    MyMap.prototype.clear = function () {
        this.mapData = [];
    };
    MyMap.prototype.printMap = function () {
        this.mapData.map(function (each) {
            console.log('key:', each.key, ' value:', each.value);
        });
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.setItem('peaches', 15);
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('name', 'Max');
stringMap.setItem('age', '27');
stringMap.printMap();
var MyMap2 = /** @class */ (function () {
    function MyMap2() {
        this.mapData = {};
    }
    MyMap2.prototype.setItem = function (key, value) {
        this.mapData[key] = value;
    };
    MyMap2.prototype.getItem = function (key, value) {
        return this.mapData[key];
    };
    MyMap2.prototype.clear = function () {
        this.mapData = {};
    };
    MyMap2.prototype.printMap = function () {
        for (var key in this.mapData) {
            console.log('key:', key, ' value:', this.mapData[key]);
        }
    };
    return MyMap2;
}());
var numberMap2 = new MyMap2();
numberMap2.setItem('apples', 5);
numberMap2.setItem('bananas', 10);
numberMap2.setItem('peaches', 15);
numberMap2.printMap();
var stringMap2 = new MyMap2();
stringMap2.setItem('name', 'Max');
stringMap2.setItem('age', '27');
stringMap2.printMap();
