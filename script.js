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

const num = 123.321;
console.log(Math.floor(num))
console.log(Math.ceil(num))
console.log(Math.round(num))
