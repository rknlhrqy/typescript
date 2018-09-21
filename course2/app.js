var CircleMath;
(function (CircleMath) {
    var Circle;
    (function (Circle) {
        var PI = 3.14;
        function calcPeremeter(diameter) {
            return PI * diameter;
        }
        Circle.calcPeremeter = calcPeremeter;
    })(Circle = CircleMath.Circle || (CircleMath.Circle = {}));
})(CircleMath || (CircleMath = {}));
var RectMath;
(function (RectMath) {
    function calcPeremeter(width, length) {
        return 2 * (width + length);
    }
    RectMath.calcPeremeter = calcPeremeter;
})(RectMath || (RectMath = {}));
/// <reference path="circleMath.ts" />
/// <reference path="rectMath.ts" />
var myCircle = CircleMath.Circle;
console.log(myCircle.calcPeremeter(10));
console.log(RectMath.calcPeremeter(10, 2));
