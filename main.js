// Storage(스토리지)

sessionStorage.setItem('a', 'Hello world!')
sessionStorage.setItem('b', JSON.stringify({x: 1, y: 2}))
sessionStorage.setItem('c', JSON.stringify(123))

console.log(sessionStorage.getItem('a'))
console.log(JSON.parse(sessionStorage.getItem('b')))
console.log(JSON.parse(sessionStorage.getItem('c')))

sessionStorage.removeItem('a')