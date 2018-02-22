interface A{
    x: number,
    y: number
}

interface B{
    x: number,
    y: number,
    z: number
}

var a:A|B;

console.log(a.x)
console.log(a.z)