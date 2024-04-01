// Methods (Without Argument)
// toUpperCase()
// toLowerCase()
// trim()
// trimStart()
// trimEnd()

const names = 'Tanvir'
console.log(names[2]) //result : n
console.log('helloWorld'[6])
const message = "Hello World"
console.log(message.length)
const upperMessage = message.toUpperCase();
console.log(upperMessage)
const lowerMessage = message.toLowerCase();
console.log(lowerMessage)
const trimMethod = '         hello world        ';
console.log(trimMethod.trim())
const trimStart = trimMethod.trimStart();
console.log(trimStart)
const trimEnd = trimMethod.trimEnd();
console.log(trimEnd)
const chaining = '   hello world   '.trim().toUpperCase(); //chaining
console.log(chaining)

