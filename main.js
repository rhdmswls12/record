// BigInt

console.log(12345677890123456789012345678901234567890)
console.log(12345677890123456789012345678901234567890n)
console.log(BigInt('12345677890123456789012345678901234567890'))

const a = 11n
const b = 22

// 숫자 => BigInt
console.log(a + BigInt(b))
console.log(typeof (a + BigInt(b)))

// BigInt => 숫자
console.log(Number(a) + b)
console.log(typeof(Number(a) + b))