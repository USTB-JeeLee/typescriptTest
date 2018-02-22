var Calc = /** @class */ (function () {
    function Calc(a, b) {
        this.a = a;
        this.b = b;
    }
    Calc.prototype.show = function (c) {
        console.log(this.a);
        console.log(this.b);
        console.log(c);
    };
    return Calc;
}());
var obj = new Calc(13, 43);
obj.show(5);
