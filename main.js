let num = 18
let count = 0


while (num) {
  if (num < 0) {
    count = -1
    break
  }
  if (num % 5 === 0) {
    count += num / 5
    break
  } else {
    num -= 3
    count++
  }
}
console.log(count)