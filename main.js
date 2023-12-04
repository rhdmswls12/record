let time = [3, 1, 4, 3, 2]
let answer = 0

time = time.sort((a, b) => a - b)
for (let i=0; i<time.length; i++) {
  let sum = 0
  for (let j=0; j<=i; j++) {
    sum += time[j]
  }
  answer += sum
}
console.log(answer)