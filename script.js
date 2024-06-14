// Methods (Without Argument)
// toUpperCase()
// toLowerCase()
// trim()
// trimStart()
// trimEnd()
// length

// const names = 'Tanvir'
// console.log(names[2]) //result : n
// console.log('helloWorld'[6])
// const message = "Hello World"
// console.log(message.length)
// const upperMessage = message.toUpperCase();
// console.log(upperMessage)
// const lowerMessage = message.toLowerCase();
// console.log(lowerMessage)
// const trimMethod = '         hello world        ';
// console.log(trimMethod.trim())
// const trimStart = trimMethod.trimStart();
// console.log(trimStart)
// const trimEnd = trimMethod.trimEnd();
// console.log(trimEnd)
// const chaining = '   hello world   '.trim().toUpperCase(); //chaining
// console.log(chaining)

// const faltuMessage = '   Hi, I am Tanvir    '
// const finalMessage = 'Hi, I am Tanvir'.toUpperCase()
// const a = 'Tanvir Sadia Maymuna Humaira'
// console.log(a.toLowerCase())
// console.log(a.includes('Sadia'))
// console.log(a.indexOf('ra'))
// const replacedA = a.replace('Sadia', 'Ayesha')
// console.log(replacedA)
// const nothingReplace = replacedA.replace('Khadiza','Hello')
// console.log(nothingReplace)

// const all = 'aaaaaa'
// console.log(all.replaceAll('a','b'))

// const m = 'Hello'
// const n = ', I am '
// const wife = 'Sadia'
// const final = m.concat(n,'Tanvir ', 'My Wife Name is ', wife)
// console.log(final)

// Methods (With Argument)
// includes() ans: true or false(is character exist or not)
// indexOf()  ans: return the character index number and not match character return -1 value
// replace()
// replaceAll()
// concat()
// padStart()
// padEnd()
// charAt()
// charCodeAt()
// split()

//includes method
// const message = 'Hello, I am Tanvir'
// const isHere = message.includes(', a')
// console.log(isHere)

//indexof method
// const message = 'Hello World i Am Tanvir ahmed'
// const isHere = message.indexOf('ias')
// console.log(isHere)

//replace method
// const message = 'Hello, I am Tanvir'.replace('e','E')
// console.log(message)
// console.log(message.replaceAll('a','A'))

//concat method
// const messageOne = 'Hello'
// const messageTwo = 'I am'
// const messageThree = 'Tanvir'
// const finalMessage = messageOne.concat(' ',messageTwo, ' ' ,messageThree)
// console.log(finalMessage)

//includes method
// const hello = 'hello world'
// console.log(hello.includes('llo',2)) //true

//indexOf method
// console.log(hello.indexOf('hello',2)) // false

// const num = 123.321;
// console.log(Math.floor(num))
// console.log(Math.ceil(num))
// console.log(Math.round(num))
// console.log(Math.random())

// Ternary Operator
// debugger
// const userName = 5 > 2 ? 'Tanvir' : 'Ahmed'
// const gender = 'F'
// const userMessage = `${'' ? 'She' : 'He'} is a college student`
// console.log(userMessage)
// const result = null ? 'Tanvir' : '' ? 12 : 1 ? 11 : 22
// console.log(result)

// How to see variable address in dev tools
// const firstName = 'Tanvir'
// const firstRule = 'Tanvir'
// const userAge = 15
// const isGraduate = false
// const hasJob = false
// const isStudent = true
// const isNull = null
// const isUndefined = undefined

//Objects => Non-premitive Data Type
// const user1 = {
//   firstName: 'Tanvir',
//   'last Name': 'Ahmed',
//   age: 25,
//   'hasJob': true,
// }
// const user2 = {
//   'firs tName': 'Sadia',
//   'last Name': 'Ahmed',
//   'age': 15,
//   'has Job': false,
// }
// const pri1 = 'hello'
// const pri2 = 'hello'
// console.log(user1.firstName)
// console.log(user1['lastName'])
// console.log(user1['a'+'g'+'e'])
// console.log(user2[`${ '' ? 'age' : 'hasJob'}`])
// console.log(user2)
// user2.age = 16 // value re-pain
// user2['is-Student'] = 'student' // added a new property

// const obj = {
//   firstName : 'Tanvir',
//   'last Name' : 'Ahmed',
//   'my address' : {
//     town : 'Dhaka',
//     'elaka' : 'Sonir Akhra',
//     moreDetails : {
//       more: 'Polashpur',
//       age: 122,
//     }
//   }
// }

// Object.seal(obj)
// Object.freeze(obj)

// console.log('my addresss' in obj)

// const arr = [1,2,3,4,5]
// const obj = {names:'tanvir'}
// console.log(typeof(arr))
// console.log(typeof(obj))

// const fruits = ['Mango','Banana','Jackfruits','Grapes','Dates']

// console.log(fruits.push('Chal','Dal'))
// console.log(fruits.pop())
// console.log(fruits.shift())
// console.log(fruits.unshift())
// console.log(fruits.concat(['hello','gelo']))
// console.log(fruits.indexOf('Banana'))
// console.log(fruits.includes('Mango'))
// console.log(fruits.reverse())

// const firstName = 'Tanvir'
// let lastName = 'Tanvir'

// const userName = {
//   firstName : 'Tanvir',
//   lastName : 'Ahmed',
// }

// let userName2 = userName
// userName2.firstName = 'Sadia'
// console.log(userName)

const user1 = {firstName:'Tanvir',lastName:'Ahmed'}
let user2 = {...user1}
