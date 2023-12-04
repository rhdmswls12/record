let input = '55-50+40'
let groups = input.split('-')
let answer = 0

for (let i=0; i<groups.length; i++) {
  let cur = groups[i].split('+').map(Number).reduce((a, b) => a + b, 0)
  if (i === 0) answer += cur // 첫 번째 그룹은 항상 덧셈
  else answer -= cur // 두 번째 그룹부터 뺄셈
}
console.log(answer)