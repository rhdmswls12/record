// 불변성 & 가변성

let a = 1
let b = a

b = 2

console.log(b)
console.log(a)

let c = { x: 1 }
let d = c

d.x = 2

console.log(d)
console.log(c)

c.x = 7
console.log(d)
console.log(c)

d.x = 1
console.log(d)
console.log(c)

console.log(c === d)