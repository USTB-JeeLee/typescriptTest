class Person {
    name: string;
    age: number;

    constructor(name:string, age:number) {
        this.name=name;
        this.age=age;
    }

    showMe() {
        console.log(this.name + this.age)
    }
}

var p = new Person('lijin', 20)

p.showMe()