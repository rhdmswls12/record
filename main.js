// 심볼(Symbol)
import apple from './apple.js'
import { birthKey, emailsKey } from './keys.js'

const sKey = Symbol('Hello!')
const user = {
  key: '일반 정보!',
  [sKey]: '민감한 정보!'
}

console.log(user.key)
console.log(user['key'])
console.log(user[sKey])
console.log(user[Symbol('Hello!')])
console.log(sKey)
console.log(typeof sKey)

console.log(apple)
console.log(Object.keys(apple))
console.log(apple[birthKey])
console.log(apple[emailsKey])