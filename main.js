// 불변성 & 가변성

let a = { x: 1 }
let b = { x: 1 }

console.log(a === b) // 데이터를 바꾸기 전이어도 참조형이므로 false 출력

b.x = 2

console.log(b)
console.log(a)

console.log(1 === 1) // true
console.log({} === {}) // false