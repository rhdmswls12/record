// 클로저(Closure)

const h1El = document.querySelector('h1')
const h2El = document.querySelector('h2')

// 별도의 상태 관리 필요
// let h1IsRed = false
// let h2IsRed = false

// h1El.addEventListener('click', () => {
//   h1IsRed = !h1IsRed
//   h1El.style.color = h1IsRed ? 'red' : 'black'
// })
// h2El.addEventListener('click', () => {
//   h2IsRed = !h2IsRed
//   h2El.style.color = h2IsRed ? 'red' : 'black'
// })

// 하나의 함수로 정리
const createToggleHandler = () => {
  let isRed = false
  return e => {
    isRed = !isRed
    e.target.style.color = isRed ? 'red' : 'black'
  }
}
h1El.addEventListener('click', createToggleHandler())
h2El.addEventListener('click', createToggleHandler())