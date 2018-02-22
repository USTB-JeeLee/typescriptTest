var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.showMe = function () {
        console.log(this.name + this.age);
    };
    return Person;
}());
var p = new Person('lijin', 20);
p.showMe();
