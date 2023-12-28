// 가비지 컬렉션(GC, Garbage Collection, 쓰레기 수집)

let a = {x: 1}
let b = a

b.x = 2
console.log(b) // 2
console.log(a) // 2
// 1이 저장됐던 메모리 주소는 더 이상 사용되지 않으므로 가비지 컬렉션이 해당 내용 해제

const user = {
  name: 'apple',
  age: 25,
  emails: ['apple@gmail.com', 'aaa@abc.com']
}

delete user.emails // emails 속성이 제거된 후 해당 속성이 참조하는 메모리 주소들 모두 가비지 컬렉션에 의해 해제됨 
console.log(user)