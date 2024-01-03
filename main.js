// 클로저(Closure)

function createCount() {
  let a = 0
  return function () {
    return a += 1
  }
}

const count1 = createCount()

console.log(count1()) // 1
console.log(count1()) // 2
console.log(count1()) // 3

const count2 = createCount()

console.log(count2()) // 1
console.log(count2()) // 2