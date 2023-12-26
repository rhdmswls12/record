import {birthKey, emailsKey} from './keys.js'

export default {
  firstName: 'Eunjin',
  lastName: 'Ko',
  age: 25,
  [birthKey]: new Date(1999, 1, 9, 2, 30),
  [emailsKey]: ['aaaa@gmail.com', 'abc@naver.com']
}