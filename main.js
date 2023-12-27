// 불변성 & 가변성

let a = [1, 2, 3]
let b = a

b[0] = 4

console.log(b) // [4, 2, 3]
console.log(a) // [4, 2, 3]