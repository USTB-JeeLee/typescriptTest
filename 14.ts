class Calc<T>{
    a:T;
    b:T;

    constructor(a:T,b:T) {
        this.a=a;
        this.b=b;
    }

    show(c:T) {
        console.log(this.a)
        console.log(this.b)
        console.log(c)
    }
}

var obj = new Calc<number>(13,43);

obj.show(5)