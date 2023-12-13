// Cookie(쿠키)

document.cookie = `a=1; max-age=${60*60*24}`
document.cookie = `b=2; expires=${new Date(2023, 11, 15).toUTCString()}`
document.cookie = 'a=3'

console.log(document.cookie)
 
function getCookie(name) {
  const cookie = document.cookie
  .split('; ')
  .find(cookie => cookie.split('=')[0] === name)
  return cookie ? cookie.split('=')[1] : null
}
console.log(getCookie('a'))