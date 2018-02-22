class Person{
    public name:string;
    private age:number;

    show() {
        this.age = 18;
    }
}

var p = new Person();

p.name = 'lijin';
// p.age = 20