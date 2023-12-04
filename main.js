let time = [3, 1, 4, 3, 2]
let sum = 0
let answer = 0

time = time.sort((a, b) => a - b)
for (let i=0; i<time.length; i++) {
  sum += time[i] // i번 째 사람이 기다린 총 시간
  answer += sum // 지금까지 소요된 총 시간
}
console.log(answer)