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

// How to See variable address in dev tools
// const firstName = 'Tanvir'
// const lastName = 'Ahmed'
// const userAge = 25
// const isGraduate = false
// const firstName = 'Tanvir'
// const firstRule = 'Tanvir'
// const userAge = 15
// const isGraduate = false //@75
// const hasJob = false //@75
// const isStudent = true // @73 fixed for true value
// const isNull = null // @71 address is fixed everywhere
// const isUndefined = undefined // @67 fixed for undefined value

// Important Note :
// const firstName = 'Tanvir' // @1757053 address
// const name = 'Tanvir' // @1757053 address
// console.log(firstName === name ) // Ans : true
// // But....
// const fname = 'Tanvir' // @1757053
// const lname = 'Tan' + 'vi' + 'r' // @2676783
// console.log(fname === lname) // Ans : true
// ekhane same variable address na hoyeo output true ashce karon primitive data type kokhono memory address diye compare kore na . primitive data type value diye compare kore . value same hoile true hobe jodio memory address change thakuk

//Objects => Non-premitive Data Type
// const firstName = "Tanvir"; // @1757053
// const lastName = "Tan" + "vir"; // @2457343
// console.log(firstName === lastName); // Ans : true
// const user1 = {
//   firstName: "Tanvir",
//   "last Name": "Ahmed",
//   age: 25,
//   hasJob: true,
// }; // @620689
// const user2 = {
//   firstName: "Tanvir",
//   "last Name": "Ahmed",
//   age: 25,
//   hasJob: true,
// }; // @620689
// console.log(user1 === user2); // Ans : false

// Note : user1 and user2 er value same diye create kora holeo tader variable address same na and user1 === user2 is false . karon object non-primitive . tai ekhane value compare na hoye memory address compare hoise .
// jehetu user1 and user2 const diye declare hoise tai value same holeo vinno vinno memory te tader rakha hoise

// key value pair
// const hello = {
//   "firstName" : "Tanvir",
//   'lastName' : 'Ahmed',
//   address : 'Dhaka',
//   'userAge' : 25
// }
// Note : object er key by default string hoye thake . eta ke double qoute or single quote na dileo eta string hishebei count hobe

// const user2 = {
//   'first Name': 'Sadia',
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

//Object inside Object
// const obj = {
//   firstName: "Tanvir",
//   lastName: "Ahmed",
//   address: {
//     town: "Dhaka",
//     elaka: "Sonir Akhra",
//     moreDetails: {
//       more: "Polashpur",
//       age: 122,
//     },
//   },
// };

// Memory Allocation :

// obj // @446743
// {
//   firstName : 'Tanvir',
//   lastName : 'Ahmed',
//   address : @658734
// }

// address // @658734
// {
//   town : 'Dhaka',
//   elaka : 'Sonir Akhra',
//   moreDetails : @436464
// }

// moreDetails //@436464
// {
//   more : "Polashpur",
//   age : 122
// }

// Note :  obj object tar vitore address object , address object er vitore moreDetails object ache . ekhane address object and moreDetails object 2 ta alada alada memory te create hoyeche . tarpor obj object er address key te address object er memory address ashce , tar value ashe nai . then address object er moreDetails key te moreDetails key er memory address ashce , tar value ashe nai . evabeii tara nested obosthay address e point kore thake .

// Object.seal(obj) and Object.freeze(obj)

// Object.seal(obj)
// const user = {
//   fname : 'Tanvir',
//   lname : 'Ahmed',
//   address : {
//     state : 'Dhaka',
//     city : 'Polashpur'
//   }
// }
// Object.seal(user)
// Object.seal function ta object ke delete korte dibe na + kono kichu new add korte dibe na kintu object er kono property er value update korte dibe

// Object.freeze(obj)
// const user = {
//   fname : 'Tanvir',
//   lname : 'Ahmed',
//   address : {
//     state : 'Dhaka',
//     city : 'Polashpur'
//   }
// }
// Object.freeze(user)
// Object.freeze use korle oi object e r keu kokhono property add korte parbe na + property delete korte parbe na and property value update korte parbe na . mot kotha kichui korte parbe na

// In keyword
// object er vitore kono property ache kina check korar jonno use hoy
// const user = {
//   fname : 'Tanvir',
//   lname : 'Ahmed',
//   address : {
//     state : 'Dhaka',
//     city : 'Polashpur'
//   }
// }
// console.log('fname' in user ) // Ans : True
// console.log('designation' in user) // Ans : false
// console.log('address' in user) // Ans : true
// console.log('state' in user) // Ans : false

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
// const user1 = {firstName:'Tanvir',lastName:'Ahmed'}
// let user2 = {...user1}

// Arrays
// let a = ['Mango','Banana','Jackfruits','Grapes','Dates']

// Push Method
// a.push('Kola','Aam')
// console.log(a)
// Ans : ['Mango', 'Banana', 'Jackfruits', 'Grapes', 'Dates', 'Kola', 'Aam']
// push method diye array er last e kono value add kora jay

// Pop Method
// a.pop()
// a.pop()
// console.log(a)
// Ans : ['Mango', 'Banana', 'Jackfruits', 'Grapes', 'Dates']
// pop method diye array last theke value delete kora hoy

// Unshift Method (opposite of Push Method)
// a.unshift('kola','ruti')
// console.log(a)
// Ans : ['kola', 'ruti', 'Mango', 'Banana', 'Jackfruits', 'Grapes', 'Dates']
// eta push method er ulta kaj kore . mane array er first e value add kore

// Shift Method (Opposite of Pop Method)
// a.shift()
// a.shift()
// console.log(a)
// Ans : ['Mango', 'Banana', 'Jackfruits', 'Grapes', 'Dates']
// eta pop method er ulta kaj kore . mane array er first theke value delete kore

// Deep Copy and Shallow Copy
// let firstName = 'Tanvir' // @39939
// let name = firstName // @39939

// name = name + ' Ahmed'
// console.log(name === firstName+' Ahmed') // Ans : true

// let fruits = ['Mango','Banana','Jackfruits','Grapes','Dates']
// let arr = fruits
// jehetu fruits variable e tar value na theke tar address thake tai let arr = fruits ei code e fruits er bodole tar memory address ashce . tar mane let arr = [memory address of fruits]
// arr.push('hello')
// console.log(fruits) // ['Mango', 'Banana', 'Jackfruits', 'Grapes', 'Dates', 'hello']
// console.log(arr) // ['Mango', 'Banana', 'Jackfruits', 'Grapes', 'Dates', 'hello']
// karon ekhane arr and fruits 2 taii same memory address e point kora chilo tai arr e change korle fruits e hobe, fruits e korle arr e hobe

// Note :
// let arr1 = [1,2,3]
// let arr2 = arr1

// let obj1 = {fname : 'Tanvir', age : 24}
// let obj2 = obj1
// ekhane equal sign operator diye same value onno variable e ante gele ager memory address tai point hoy
// arr1 address is : @123456
// arr2 address is : @123456
// obj1 address is : @434343
// obj2 address is : @434343

// Shallow Copy with Object.assign(newItem,oldItem)
// let obj1 = {
//   fname : 'Tanvir',
//   lname : 'Ahmed',
//   age : 25
// } // @123456
// let obj2 = {} // @546434
// Object.assign(obj2,obj1)
// console.log(obj1 === obj2) // Ans : false
// ekhane obj1 and obj2 er memory address not same

// Shallow Copy with spread operator
// let obj1 = {
//   fname : 'Tanvir',
//   lname : 'Ahmed',
//   age : 24,
// } // @123456
// let obj2 = {...obj1} // @343434
// console.log(obj1 === obj2)

// let arr1 = [1,2,3]
// let arr2 = [...arr1]
// console.log(arr1 === arr2)

// Shallow Copy with for loop
// numbers = [1, 2, 3];
// numbersCopy = [];

// for (i = 0; i < numbers.length; i++) {
//   numbersCopy[i] = numbers[i];
// }

//Shallow Copy with while loop
// numbers = [1, 2, 3];
// numbersCopy = [];
// i = -1;

// while (++i < numbers.length) {
//   numbersCopy[i] = numbers[i];
// }

// Shallow Copy with Map
// numbers = [1, 2, 3];
// numbersCopy = numbers.map((x) => x);

// Shallow Copy with filter method
// [1, 2, 3].filter((x) => x % 2 === 0);
// // [2]
// numbers = [1, 2, 3];
// numbersCopy = numbers.filter(() => true);

// Shallow Copy with Reduce
// numbers = [1, 2, 3];

// numbersCopy = numbers.reduce((newArray, element) => {
//   newArray.push(element);

//   return newArray;
// }, []);

// Shallow Copy with Slice
// numbers = [1, 2, 3, 4, 5];
// numbersCopy = numbers.slice();
// // [1, 2, 3, 4, 5]
// [1, 2, 3, 4, 5].slice(0, 3);
// // [1, 2, 3]
// // Starts at index 0, stops at index 3

// Shallow Copy with Concat method
// [1, 2, 3].concat(4); // [1, 2, 3, 4]
// [1, 2, 3].concat([4, 5]); // [1, 2, 3, 4, 5]

// let fruits = ['Mango','Banana','Jackfruits','Grapes','Dates']
// fruits.push('Amm') // add last in element in same reference array
// fruits.pop() // delete last element in same reference array
// let allFruits = fruits
// console.log(allFruits===fruits)
// let allFruits = []
// Object.assign(allFruits,fruits)
// console.log(allFruits === fruits)
// let allFruits = [...fruits]
// console.log(allFruits===fruits)

// let namArray = ['tanvir','sadia','maymuna','humaira']
// let namObj = {
//   firstName:'Tanvir',
//   lastName:'Ahmed',
//   address:'Sonir Akhra'
// }
// let namObjCopy = namObj
// console.log(namObjCopy===namObj)

// shallow copy with Object.assign
// let namArrayCopy = []
// Object.assign(namArrayCopy,namArray)
// console.log(namArray===namArrayCopy)

//shallow copy with spread operator
// let namArrayCopy = [...namArray]
// console.log(namArray===namArrayCopy)
// namArrayCopy[5]='lamia'
// console.log(namArray,namArrayCopy)

//Deep Copy
// const hello = {
//   firstName:'Tanvir',
//   lastName:'Ahmed',
//   address:{
//     country:'Bangladesh',
//     city:'Dhaka',
//   }
// }
//Deep Copy using spreed operator
// let copyHello = {...hello, address:{...hello.address}}
// console.log(copyHello===hello)

// copyHello.address.city = 'New York'
// hello.address.country = 'USA'
// console.log(copyHello)
// console.log(hello)

//Deep Copy using JSON technique
// let p1 = {...hello}
// p1 = JSON.stringify(p1)
// let copyHello = JSON.parse(p1)
// copyHello.address.city = 'New York'
// hello.address.country = 'USA'
// console.log(copyHello)
// console.log(hello)

//Function
// function hello(){
//   console.log('hello world')
// }
// hell o()
// const hellos = () => {
//   console.log("Hello World!")
// }
// function num (){
//   console.log("hello world")
// }
// const numfun = num()

// Return Keyword
// function testReturn(){
//   console.log('hello world')
//   return 5 + 5
// }
// const funVal = testReturn()
// console.log(funVal)

// String
// const fname = 'Tanvir'
// const repoCount = 75

// string interpolation
// console.log(`${fname} ${repoCount} Value`)

// Access character using index
// console.log(fname[1]) // a
// console.log(repoCount[0]) // undefined // number not access with index

// // toUpperCase
// console.log(fname.toUpperCase()) // TANVIR

// // charAt
// console.log(fname.charAt(3)) // v (fname variable er 3 no. index value)

// // indexOf
// console.log(fname.indexOf('v')) // 3 (fname variable er 'v' kon index)

// const gameName = 'Tanvir-Ahmed'

// // Substring
// const newGameName = gameName.substring(0,4)
// console.log(newGameName) // Tanv (0 index theke 4 index er age 3 index porjonto)

// // slice
// const anotherName = gameName.slice(-8,4)
// console.log(anotherName) // ans will be similer with substring , but only difference is slice can set negative value , but substring are not

// // trim
// const newString1 = '       Tanvir  Ahmed      '
// console.log(newString1.trim()) // Tanvir  Ahmed

// // replace
// const url = 'https://tanvir.com/tanvir ahmed'
// const newUrl =url.replace(' ','%20')
// console.log(newUrl) // https://tanvir.com/tanvir%20ahmed

// // includes
// console.log(url.includes('tanvir')) // true
// console.log(url.includes('tanvirrr')) // false

// splite

// Arrays
// const myArr = [1,2,3,4,5,6,7]
// const myHeros = ["Tanvir","Sadia"]
// const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr2)

// // Array Methods

// // 1. push (array er last e element add korbe)
// myArr.push(8)
// myArr.push(9)
// console.log(myArr)

// // 2. pop (array er last theke element delete korbe)
// myArr.pop()
// console.log(myArr)

// // 3. unshift (array er first e element add kore)
// myArr.unshift(0)
// console.log(myArr)

// // 4. shift (array er first theke element delete kore)
// myArr.shift()
// console.log(myArr)

// // 5. includes (array er moddhe kono value exist hole true, na hole false)
// console.log(myArr.includes(5)) // true
// console.log(myArr.includes(15)) // false

// // 6. indexOf (etao array er moddhe search kora . kintu includes only true false value return kore . kintu eta jodi false hoy, orthat jodi oi value ta array te na thake tahole -1 return kore . r thakle oi value er index number return kore)
// console.log(myArr.indexOf(2)) // 1 (2 value in 1 number index)
// console.log(myArr.indexOf(17)) // -1 (not find 17 in myArr)

// // 7. join (array ke string e convert kore)
// const newArray = myArr.join()
// console.log(newArray) // 1,2,3,4,5,6,7,8
// console.log(typeof(newArray)) // string

// 8. slice and splice
// slice origin array ke change korte pare na , kintu splice original array ke change korte pare

// Slice Method
// const arr = [1,2,3,4,5]
// console.log(arr) // [1, 2, 3, 4, 5]
// const sliceArr = arr.slice(1,4)
// console.log(sliceArr) // [2, 3, 4]
// console.log(arr) // [1, 2, 3, 4, 5]

// Splice Method
// const arr = [1,2,3,4,5]
// console.log(arr) // [1, 2, 3, 4, 5]
// const spliceArr = arr.splice(2,4)
// console.log(spliceArr) // [3, 4, 5]
// console.log(arr) // [1, 2]

// concat method
// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// // arr1.push(arr2)
// // console.log(arr1) // [1,2,3,[4,5,6]]
// // push method change the original array but concat is create a new Array
// const newArr = arr1.concat(arr2)
// console.log(newArr) // [1, 2, 3, 4, 5, 6]
// console.log(arr1) // [1, 2, 3]

// spread operator
// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// const newArr = [...arr1, ...arr2]
// console.log(newArr)

// isArray
// console.log(Array.isArray('Tanvir')) // False (karon Tanvir ekta string not array)

// // Array.from (convert array)
// console.log(Array.from('Tanvir')) // ['T', 'a', 'n', 'v', 'i', 'r']
// const convertArr = Array.from('Tanvir Ahmed')
// console.log(convertArr) // ['T', 'a', 'n', 'v', 'i', 'r', ' ', 'A', 'h', 'm', 'e', 'd']

// // Array.of (convert in array of multiple variable)
// const a = 10;
// const b = 20;
// const c = 30;
// const arrayOf = Array.of(a,b,c)
// console.log(arrayOf) // [10, 20, 30]

// Object

// object literals
// const jsUser = {
//   name : 'Tanvir',
//   age : 25,
//   location : 'Dhaka',
//   email : 'tanvir@gmail.com',
//   isLogin : false,
//   lastLoginDays : ['Monday','Saturday']
// }
// jsUser.email = 'tanvir018765@gmail.com'
// Object.freeze(jsUser)
// Object.freeze use korle kono object ke add update delete kisui kora jay na
// jsUser.name = 'Sadia'
// console.log(jsUser)
// jsUser.hobby = 'Software Engineer'
// console.log(jsUser)
// delete jsUser.name;
// console.log(jsUser)

// jsUser.greeting = function (){
//   console.log("Hello Js User")
// }
// jsUser.greeting2 = function (){
//   console.log(`Hello Js User ${this.name}`)
// }
// console.log(jsUser.greeting2())

// singleton object and non-singleton object
// const tinder = new Object(); // singleton object
// const dinder = {} // non-singleton object
// console.log(tinder) // {}
// console.log(dinder) // {}

// tinder.id = "1"
// tinder.name = 'Tanvir'
// tinder.isLogin = false
// console.log(tinder)

// const regular = {
//   email : 'tanvir@gmail.com',
//   fullName : {
//     fname : 'Tanvir',
//     lname : 'Ahmed',
//     total : {
//       name : 'Tanvir Ahmed '
//     }
//   }
// }

// Object de-structure and JSON API
// const course = {
//   courseName : 'React',
//   price : "999",
//   courseIns : 'Tanvir'
// }
// const {courseName,price} = course
// console.log(price) // 999
// console.log(courseName) // React
// console.log(courseIns) // courseIns is not defined

// Stack and Heap
// ager kaler language gulay jokhon kaj hoito tokhon memory ke reserve kora, memory ke free kora sob programmer der kaj chilo . jar karone extra pera nite hoito . jemon kono kichu define korar age vabte hoito kothay memory dibo, kototuku memory dibo etc . kintu modern language e memoryr eto beshi control deya hoy na . automatic egula handling hoy

// 2 types of memory
// 1. Stack memory (for Primitive)
// 2. Heap memory (for Non-Primitive)

// Primitive data store korar jonno use hoy Stack Memory
// Non-Primitive data store korar jonno heap memory use hoy

// jei value stack memory te store hoy tokhon setar copy pauya jay
// jei value heap memory te store hoy tokhon setar theke only memory address pauya jay , actual value directly access kora jay na .

// Example :
// let fname = 'Tanvir'
// let funName = fname ;
// console.log(fname) // Ans : Tanvir
// console.log(funName) // Ans : Tanvir
// funName = 'Tanvir Ahmed'
// console.log(fname) // Ans : Tanvir
// console.log(funName) // Ans : Tanvir Ahmed
// ekhane let funName = fname jokhon kora hoy tokhon fname er value copy hoye funName er moddhe ashe . tai funName change korle fname er value change hoy na . abar fname er value change korle funName er value change hoy .

// Tokenization in Javascript
// javascript ekdom first e tar code gula ke tukra tukra kore vag kore . eta kei Tokenization bole

// var code = 'var x = 5 + 3;';
// var tokens = code.match(/(\b\w+\b|[^\s])/g);
// console.log(tokens); //  Answer : ["var", "x", "=", "5", "+", "3", ";"] -> Tokenization
// Tokenization in Deep
// function hello (){
//   let a = 10;
//   return a + 1;
// }
//Tokenization => "function(keyword)","hello(a function name)","(){ (function start)","let(a variable will be declared)","a(a variable name)","10(value of a)","return(keyword)","a+1(expresstion for return where it's called)","}(function end)"

//Abstract Syntex Tree
// Tokenization complete houyar por javascript sob tukro tukro token gula ke niye ekta tree banay . jake bole Abstract Syntex Tree
// tarpor Abstract Syntex Tree bananor por setake as a input hishebe niye javascript finally machine code e convart kore
// let a = 99
// function hello(){
// 	return a;
// }
// hello()

// AST JSON for that code
// {
//   "type": "Program",
//   "start": 0,
//   "end": 49,
//   "body": [
//     {
//       "type": "VariableDeclaration",
//       "start": 0,
//       "end": 10,
//       "declarations": [
//         {
//           "type": "VariableDeclarator",
//           "start": 4,
//           "end": 10,
//           "id": {
//             "type": "Identifier",
//             "start": 4,
//             "end": 5,
//             "name": "a"
//           },
//           "init": {
//             "type": "Literal",
//             "start": 8,
//             "end": 10,
//             "value": 99,
//             "raw": "99"
//           }
//         }
//       ],
//       "kind": "let"
//     },
//     {
//       "type": "FunctionDeclaration",
//       "start": 11,
//       "end": 41,
//       "id": {
//         "type": "Identifier",
//         "start": 20,
//         "end": 25,
//         "name": "hello"
//       },
//       "expression": false,
//       "generator": false,
//       "async": false,
//       "params": [],
//       "body": {
//         "type": "BlockStatement",
//         "start": 27,
//         "end": 41,
//         "body": [
//           {
//             "type": "ReturnStatement",
//             "start": 30,
//             "end": 39,
//             "argument": {
//               "type": "Identifier",
//               "start": 37,
//               "end": 38,
//               "name": "a"
//             }
//           }
//         ]
//       }
//     },
//     {
//       "type": "ExpressionStatement",
//       "start": 42,
//       "end": 49,
//       "expression": {
//         "type": "CallExpression",
//         "start": 42,
//         "end": 49,
//         "callee": {
//           "type": "Identifier",
//           "start": 42,
//           "end": 47,
//           "name": "hello"
//         },
//         "arguments": [],
//         "optional": false
//       }
//     }
//   ],
//   "sourceType": "module"
// }

//Execution Contaxt start

//Lexical Position or Lexical Contaxt or Lexical Environment
// prottekta single code er position keii lexical position bole . position bolte bujhano hoise ei particular code ta file er thik kothay ache .
// const a = 10; // Lexical Position or Lexical context is line number 819
// let b = 'Hello' // Lexical Position or Lexical context is line number 820

// function hello(){ // Lexical Position or Lexical context is line number 822-824
//   console.log('Hello World!')
// }

// let c = 11; // Lexical Position or Lexical context is line number 827

// hello(); // Lexical Position or Lexical context is line number 829

//Execution Contaxt understand by some text:
// onk boro source code er moddhe onk lexical contaxt thake . prottekta lexical contaxt or prottekta particular code ke execute korar jonno javascript er ja ja dorkar tai holo oi particular code er jonno execution contaxt . line number 371 er jonno alada execution contaxt create hoy, line number 372 er jonno alada execution contaxt create hoy,line number 374-376  er jonno alada execution contaxt create hoy,evabe prottekta particular code er jonno alada alada execution contaxt create hoy

// Globar Execution Contaxt (GEC)
//jokhon javascript first time load hoy tokhon by default ekta execution contaxt create kore jar nam holo Global Execution Contaxt(GEC)
// GEC 2 ta special jinish amader dey(jodio 0 line code thake)
// 1. window 2. this (window === this => true) --> tar mane window and this same memory location point kore

// GEC er 2 ta phase thake
// 1. Creation phase
// 2. Execution phase

// Creation phase eii 2 ta special object peye thaki, 1. window(global object) 2. this (point on window)

// Global execution contaxt er creation phase e ki ki hobe ? nicher coder er jonno..
// var tom = 'Hello Tom'
// function hiTom(){
//   console.log(this.tom)
// }
// Global execution contaxt er creation phase e ja ja hobe....
// 1. window (global object)
// 2. this (window)
// 3. tom and hiTom memory allocated(sob variable , function er jonno memory allocated korbe)
// 3. tom = undefined (jodi kono variable thake tahole sekhane undefined diye dibe)
// 4. hiTom = function hiTom(){
//              console.log(this.tom)
//             } (jodi kono function thake tahole function er definition ta tule hiTom e set kore dibe)

// Global execution contaxt er creation phase sesh , akhn execution phase start hobe
// 1. tom = "Hello Tom" (tom er vitor tar value assign kore deya hobe)
// 2. (jehetu hiTom function ke call kora hoy nai tai tokhono ei function er jonno kono execution contaxt hobe na . kintu hiddenly er jonno kichu kaj hoye thake ja amra function execution contaxt e dekhbo)

// test 1 :
// var jerry = "Hello Jerry"
// function helloJerry(){
//   let hi = 1;
//   console.log('Hello Jerry')
// }
// helloJerry()

//GEC for test 1 =>
//Creation phase :
//jerry : undefined
//helloJerry : function helloJerry(){clg()}
//Execution phase :
//jerry: "Hello Jerry"
//(in lexical position 420, execute a function . that's why create a new execution contaxt named function execution contaxt(FEC))

// FEC for Lexical position 420
//creation phase :
//hi=undefined
//execution phase:
//log() from console() (will create new execution contaxt FEC)

// FEC for console.log()
//Creation phase:
//Execution phase: so on...

//How Javascript Engine Managed execution contaxt tree ? Answer : Using Call Stack(last in first out)

//test 2 code
// console.log("Inside global execution context")
// var a = 5;
// function testMe(){
//   console.log("Inside testMe execution context")
//   var b = 10;
//   var user = {
//     name:'tanvir',
//     county:'Bangladesh',
//   }
//   function testAgain(){
//     console.log("Inside testAgain execution context")
//     console.log("Exiting testAgain execution context")
//   }
//   testAgain();
//   console.log("Exiting global execution context")
// }
// testMe();
// console.log("Exiting global execution context")

// Now test 2 code Execution Context design:
// GEC
//   CP
//     a:undefined
//     testMe: function(){code...}
//   EP
//     a:5
//     testMe: Execute

//     FEC
//       CP
//         b: undefined
//         user:undefined
//         testAgain: function(){code...}
//       EP
//         b:10
//         user:{name:'tanvir',...}
//         testAgain: Execute...

//         FEC
//           CP
//           EP

// Understand Stack and Heap Memory in video Tapas

//Visualiza variable address

// const firstName = 'Tanvir'
// const lastName = 'Ahmed'
// const userAge = 15
// const isGraduated = false
// const firstName2 = 'Tanvir'
// const firstName2 = 'Tan'+'vir'
// const isMale = !!0
// const isFemale = true
// const isNull = null
// const isUndefined = undefined
// const isEmptyString = ''

// Execution Context Again
//test code
// var name = 'Tanvir'

// function sayHi(){
//   console.log(this.name)
// }
//NOW FEC (Function Execution Context)
// sayHi()



// Scope and Scope Chain
// var hello = 'Hello World'
// function sayHello(){
//   console.log(hello)
// }

// const userName = "Tanvir";
// const userAge = 25;

// function add() {
//   const x = 5;
//   const y = 8;
//   console.log(x + y);
//   console.log(userName);
// }
// console.log(x + y);
// add();
// console.log("Program Ended");

// Hoisting
//1. Variable hoisting (variable create korar ageii oi variable ke use kora)
//2. function hoisting (function ke create korar agei oi function ke use kora)

//A tricky question
// test();
// var test = function (){
//   console.log('Hello World')
// }
//Ans : Error- test is not a function
// karon test ekta variable hishebe count hoise. test er value ekta function kintu test kono function na .

// note for hoisting :
// let and const er khetre variable hoisting possible na . karon var er khetre creation phase e undefined assign kora hoy kintu let and const er khetre kichuii assign kora hoy na . tai let and const er khetre hoisting korle error ashbe . tar mane javascript amader pressure dicche jate amra kono variable or function declare korar age execute na kori

// Scope and Scope Chain
//4 types of scope
//1. Global Scope (without block scope or local scope)
//2. Local Scope or Functional Scope (function(){..})
//3. Block Scope ({} or if(){} or for(){} etc..)
//4. Module Scope

//1. Global Scope
// rules :  jodi kono function er vitor othoba kono block er vitor na thake tahole seta global scope . var let const jeta diyeii variable declare kori na kno seta global scope hoye jay .
// rules : eta jekono function block everything sob jayga theke access hote pare
// rules : global scope use korar ee dorkar nei . jodi use korteii hoy tahole const diye use korle valo . nahole variable override hoye jauyar chance thake

//2. Local Scope or Functional Scope
// rules : function er vitor var diye hok, let diye hok , const diye hok jeta diyeii variable declare kori na kno seta oi function er baire access kora jay na . etaii local scope or functional scope

// function sayHi(){
//   const a = 10;
//   function hello(){
//     if(true){
//       function xx(){
//         console.log(a) // 10
//       }
//       xx()
//     }
//   }
//   hello();
// }
// sayHi()

// Shadowing
// jodi globally kono variable er same name diye locally kono variable declare kora hoy and tader value jodi change hoy tahole localscope e local variable value taii show hobe r global scope e global variable er value ta show hobe
// EX :
// var a = 'hello'
// function sayHi(){
//   var a = 'hello world'
//   console.log(a) // Ans : hello world
// }
// console.log(a) // Ans : hello
// ekhane global scope er variable er value ta ke local scope e hide kora hoyeche
// othoba jodi amra execution context diye eta map kori tahole bujhte parbo kno ei code er answer erokom holo

// EX : 
// const greeting = 'hello'
// function showGreeting(){
//   const greeting = 'valo achen?'
//   console.log(greeting) // valo achen?
// }
// showGreeting()
// console.log(greeting) // hello

// Concept of shadowing..

// const greeting = 'hello'
// function showGreeting(){
//   const greeting = 'valo achen?'
//   console.log(greeting) // valo achen?
// }
// showGreeting()
// console.log(greeting) // hello

// ******Important note***** ekhane global scope e greeting er value global execution context er execution phase e 'hello' deya hoyeche.tarpor jokhon showGreeting er execution phase start hoy tokhon notun vabe greeting name e variable create hoy, tar value undefined assign hoy . tarpor execution phase e greeting er value 'valo achen?' deya hoy . tarpor jokhon showGreeting er execution phase sesh hoye jay tokhon to callStack theke showGreeting ber hoye jay . tar mane showGreeting er vitore joto variable ase sob gula moira jay . showGreeting er vitor r kono kichur ostitto thake na . tar mane showGreeting er baire console.log(greeting) er value 'valo achen?' hobe na . karon function er vitor greeting already moira gese . tai jei greeting akhno beche ase , greeting = 'hello' sei greeting tai show hoise .    

//3. Block Scope
// Tricky part
// if(true){
//   var x = 10;
// }
// console.log(x) // Ans : 10
// kintu ai answer kivabe holo ? eta to houyar chilo na . niche tar bekkha kora holo ->
// var holo only function scope . tar mane var diye kono function er vitore variable create hole seta oi function er baire access kora jabe na . kintu var kintu block scope na . tar mane holo if(){}, {..}, for(){..} ai type er block er vitor var diye kono variable create korleo seta ai block gular baire access kora jabe . kintu let and const block scope . tar mane block er baire access kora jay na

// Difference between var , let and const
// var : var holo functional scope . function er baire access kora jay na . kintu block er baire access kora jay . karon var block scope na , var functional scope
// let and const : kintu let and const block scope . block er baire access kora jay na
// EX :
// if(true){
//   let x = 10;
//   const y  = 20;
// }
// console.log(x) // Error : x is not defined
// console.log(y) // Error : y is not defined

// Scope Chain
// jokhon kono variable tar value ke existing scope e na pay tokhon se tar thik immidiate next scope e take khujte thake . jodi sekhaneo na pay tahole setar immidiate next scope e variable ta khujte thake . evabe variable khujar jonno scope nicher dike jete thake
// EX :
// function hello(){
//   var a = 10;
//   hello1()
//   function hello1(){
//     hello2()
//     function hello2(){
//       console.log(a)
//     }
//   }
// }
// hello()
// Ans : 10

// EX :
// function hello(){
//   function one(){
//     console.log(a)
//   }
//   function two(){
//     var a = 10;
//   }
//   var a = 100000;
//   two()
//   one()
// }
// hello() // Ans : 100000
// ekhane console.log(a) te aisha a variable ke na peye se tar immidiate scope , mane hello() function er scope e a ke khujte thake . se kintu tar siblings kono scope e check korbe na , mane two() function er scope er vitor khujbe na . se only tar parent scope e khujbe . tokhon se parent scope e giye a er value 100000 peyeche and print kore diyeche

// More about Scope Chain
// lexical context or lexical scope
// jokhon jei function or variable jekhane rakha hoy setai holo tar lexical scope or lexical context . aro bujhate gele bolte nicher example er jerry function er lexical scope hocche global scope, karon take globally placed kora hoyeche and tom function er vitor name variable er lexical scope or lexical context hocche tom function er functional scope, karon take tom function er vitore define kora hoyeche . abar tom function er lexical context or lexical scope hocche global scope , karon tom ke globally define kora hoyeche 
// function ke jekhanei call or invoked kora hok function er scope hocche jekhane take rakha hoyeche , orthat jei scoope e take rakha hoyeche . ai khetre niche jerry function ke tom function er vitore  call kora holeo jerry function er lexical context or lexical scope kintu tom function er baire global scope e . 
// Ex: 
// function jerry(){
//   console.log(name)
// }
// function tom(){
//   var name = 'jerry'
//   jerry()
// }
// var name = 'cartoon'
// tom()
// ekhane jerry jokhon name pacchilo na tokhon se tar immidiate next scope orthat global scope e khuje name er value 'cartoon' pay . tai se cartoon print kore dey . jerry kintu jekhane take call kora hoyeche sekhane khujeni , orthat tom function er vitore khujeni . karon take tom er vitor define kora hoy nai . just call kora hoyeche . tar mane call jekhaneii koruk function er definition jekhane ase setaii tar scope . sekhane na pele tar uporer scope e khujbe 



// closure
// function outer(){
//   var x = 'hello world'
//   function inner(){
//     x = 'hii'
//     console.log(x) // Ans : hii
//   }
//   console.log(x) // Ans : hello world
//   inner()
//   console.log(x) // Ans : hii
// }
// outer()
// ekhane inner function tar parent er variable x ke access korte parche + x er value change korte parche . etaii closure er concept

// tahole closure ki ?
// function outer(){
//   var x = 'hello world'
//   return function inner(){
//     console.log(x)
//   }
// }
// console.log(outer)
// Ans : -->
// ƒ outer(){
//   var x = 'hello world'
//   return function inner(){
//     console.log(x)
//   }
// }

// jehetu outer function return korche inner function ke tai outer function ke call korle sekhane tar return value ta ashbe . tar mane holo outer() = function inner(){..}

// const closureFun = outer()
// ekhane outer function er return value orthat inner function ta closureFun variable e pass kora hoyeche . tai closureFun call korle inner function ke call korle jei value ashto seta ashbe
// console.log(closureFun)
// Ans : -->
// ƒ outer(){
//   var x = 'hello world'
//   return function inner(){
//     console.log(x)
//   }
// }

// closureFun() // Ans : hello world

// definition of closure
// outer function er vitor x variable jehetu inner function use koreche and sei inner function closureFun variable er vitor rakha hoyeche tai outer function execute houyar poreo outer function er variable x er ostitto theke jacche inner function orthat closureFun variable e . jotokkhon porjonto child function orthat inner function ba closureFun ke execute kora sesh hobe totokkhon variable x er ostitto thakbe . ekhane inner function taii closure

// Some Example of Closure

// Example 1 :
// function outer(){
//   var x = 10;
//   function inner(){
//     console.log(x)
//   }
//   x=20;
//   return inner;
// }
// var innerFunc = outer()
// innerFunc() // Ans : 20
// innerFunc ke call korle 20 ashbe kno ? ashar kotha to 10 . karon x =20 houyar ageii inner function er definition memory te chole gese . kintu na . ekhane inner function ke use kora hoyeche innerFunc() er maddhome . totokkhone x er value 20 hoye gesilo . r jokhon innerFunc() kora holo tokhon oi somoy x ke pauyar jonno x er present memory te point kora obosthay chilo

// Example 2 :
// function outer(){
//   var x = 10;
//   function inner(){
//     var y = 5;
//     console.log(x + y)
//   }
//   var x=20;
//   return inner;
// }
// var innerFunc = outer()
// innerFunc() // Ans : 25
// var x = 20 jokhon kora hoyeche tokhon ashole ager x er 10 value ke replace kore 20 kora hoyeche . r jehetu innerFunc() hoite hoite x er value 20 kora hoise tai x = 20 ei address e point kora chilo x er value

// Very Important Note for Closure
// closure jokhon kono variable ke close kore, orthat parent er kono variable ke nije use kore  tokhon sei variable er immidiate value ke dhore rakhe na . sei variable er memory address ke point kora thake . orthat jokhon closure function ta call kora hobe tokhon oi variable er present value show hobe . example niche deya holo
// for(var i = 0; i<5; i++){
//   setTimeout(function(){
//     console.log(i)
//   },1000)
// }
// Ans is expected 0 1 2 3 4 but Ans is : 5 5 5 5 5
// ekhane i=0 er somoy setTimeout ke callback queue te rakha hocche, temni vabe i = 1, 2, 3, 4 er jonno setTimeout ke callback queue te rakha hocche. jokhon call stack khali hobe tokhon event loop er maddhome ekta ekta kore setTimeout total 5 ta setTimeout callStack e aisha ekta ekta kore execute hote thakbe . kintu jokhon execute hote thakbe tokhon to already for loop execution sesh . and last e i er value 5 hoye gesilo . tai setTimeout er i er value always 5 thakbe . karon closure always i er memory address e point kora thake

// example 4 :
// for(var i = 0; i<5; i++){
//   (function(j){
//     setTimeout(function(){
//       console.log(j)
//     },1000)
//   })(i)
// }
// Now Ans is : 0 1 2 3 4

// example 5 :
// for(let i = 0; i<5; i++){
//   setTimeout(()=>{
//     console.log(i)
//   },1000)
// }
// Ans : 0 1 2 3 4
// ekhane let use koray loop jotobar ghurche totobar notun i variable create korche notun notun memory address e rakhche . kintu var diye loop ghuranor somoy protibar same i er value change kora hocchilo jekhane let diye protibar notun i create kora hocchilo .

// Immutability and Mutability
// definition : immutability mane jeta change kora jay na . mutability mane jeta change kora jay

// primitive data type immutable or mutable ?
// let a = 'hello'
// a = 'hii'
// console.log(a) // Ans : hii
// ekhane dekha jacche je primitive data type er value change kora jacche , tar mane ki eta mutable ? Ans is No. ekhane javascript kokhonoii ager a variable er value ke shoraiya notun value ke rakhe nai . javascript kono notun memory container er new value ta rakhse and just a er pointer ta change kore notun value jei memory address e ase setay point kortese . tar mane primitive data type sob gulaii immutable

// Object and Array is Mutable

// Higher Order Function (HOC)
// What is Higher Order Function
// Ans : jokhon kono function er vitor onno kono function ke return kora hoy othoba function ke pass kora hoy tokhon seta Higher Order Function .  amra function ke call korar somoy tar parameter e string , integer , object , array etc onk dhoroner data type er data pathai . kintu function jokhon pathabo tokhon seta higher order function

// function sayHi(){
//   console.log('Hiiii')
// }
// const x = sayHi
// x()
// console.dir(x)
// x.age = 24

// Example of Higher order function
// function a(b){
//   console.dir(b)
//   b()
// }
// function sayHi(){
//   console.log('Hiiiiiiiii')
// }
// a(sayHi)
// // a is a Higher Order Function

// function add(f){
//   console.dir(f)
//   f()
// }

//Callback function
// jokhon function ke call korar somoy onno kono function ke pass kora hoy , tokhon jei function ke pass kora hoy seta ke bola hoy callback function .
// add(function(){
//   console.log('HIIIIIII')
// })
// ekhane add() holo higher order function and add er vitor jei function pass kora hoise seta callback function

// SetTimeout and SetInterval

// setTimeout
// setTimeout('console.log("Tanvir")') // Ans : Tanvir
// ekhane javascript 'console.log(true)' ai string ta ke behind the scene javascript code er moto nicche . tai true print hocche
// setTimeout('hiii') // Error : hiii is not defined
// ekhane javascript hiii ke ekta variable hishebe dekhche tai jehetu hiii nam e kono variable nei tai error message ashce hiii is not defined
// const hiii = 'Hello World!'
// setTimeout('hiii') // Not Error

//setTimeout with second parameter
// second parameter holo time milisecond e . jei time por tar vitorer code run hobe
// setTimeout('console.log("Hello World")', 2000) // Ans : Hello World (After 2 second)
// setTimeout('console.log("hii"); console.log("hello")',3000) // Ans : hii hello (After 3 second)

// In Browser console with clearTimeout
// setTimeout('console.log("1 Second")',1000)
// setTimeout('console.log("2 Second")',3000)
// setTimeout('console.log("9 Second")',9000)
// 13 ---> Timer Id of last setTimeout
// 1 Second
// 2 Second
// clearTimeout(13)
// ekhane browser console e eksathe 3 ta setTimeout deyar por Enter dile return value 13 pathay jeta kina timer id . oi timer id diyeii ami clearTimeOut kore disi 9 second er ageii . tai 9 second print hoy nai

// SetTimeout Timer Id
// const timer1 = setTimeout('console.log("set time 1")',2000)
// const timer2 = setTimeout('console.log("set time 2")',4000)
// const timer3 = setTimeout('console.log("set time 3")',9000)
// ekhane timer1, timer2, timer3 variable er vitore setTimeout set kore only setTimout gular timer id dhorar jonno . jate sei timer id diye clearTimeout korte pare

// console.log(timer1) // Ans is timer id
// console.log(timer2) // Ans is timer id
// console.log(timer3) // Ans is timer id

// ClearTimeOut
// const timer1 = setTimeout('console.log("set time 1")', 2000);
// const timer2 = setTimeout('console.log("set time 2")', 4000);
// const timer3 = setTimeout('console.log("set time 3")', 9000);
// // ekhane timer1, timer2, timer3 variable er vitore setTimeout set kore only setTimout gular timer id dhorar jonno . jate sei timer id diye clearTimeout korte pare
// clearTimeout(timer2);
// clearTimeout(timer1);
// ekhane timer1 and timer2 er setTimeout kokhonoii run hobe na . jehetu timer3 id diye clear kori nai tai 9 second por timer3 er setTimeout run hobe

// setTimeout with Higher Order Function
// const timer1 = setTimeout('console.log("set time 1")',2000)
// const timer2 = setTimeout('console.log("set time 2")',4000)
// const timer3 = setTimeout(a,9000) // a ke setTimeout internally call kore
// // ekhane timer3 er setTimeout higher order function hoye gese . karon etar parameter e ekta function pass kora hoise

// function a(){
//   console.log("Hiii")
// }

// const timer1 = setTimeout('console.log("set time 1")',0)
// const timer2 = setTimeout('console.log("set time 2")')
// const timer3 = setTimeout('console.log("set time 3")',100)

// console.log('Hello World')
// Ans : Hello World - set time 1 - set time 2 - set time 3

// setInterval
// const timer1 = setInterval('console.log("set time 1")',1000)
// // 1 second por por output print hoite thakbe
// setTimeout(()=>{
//   clearInterval(timer1)
// },5000)
// Ans : set time 1
//       set time 1
//       set time 1
//       set time 1
//       set time 1

// setTimeout with HOC

// const timerId = setInterval(a,1000)

// function a(){
//   console.log('hiii')
// }

//Browser Object Mode
//1. Location = window.location OR location
//2. History = window.history OR history

//Location
// console.log(window.location.pathname)
// console.log(window.location.href)
// setTimeout(()=>{
//   window.location.reload();
// }, 10000)

//History
// console.log(history.forward())
// console.log(history.back())
// console.log(history.go(-2))
// console.log(history.go(4))

//Inner Height Inner Width
// console.log(innerHeight,innerWidth,outerHeight,outerWidth)

// ScrollBy
// scrollBy(0,200);
// scrollTo()
// scroll

// print()
// print()

// DOM - Document Object Model
// function sayHello() {
//   document.children[0].children[1].children[4].innerText = "Hello World";
// }

// var hello = document.body.children[0].innerText = "Hello World@"
// function changeImage(){
//   document.body.children[4].src = '';
//   document.children[0].children[1].children[4].alt = 'hello image';
// }

// console.dir(document)

// const heading = document.getElementById('h1').className

// getElementsByTagName
// const hello = document.getElementsByTagName('h2');
// const hello2 = document.getElementsByTagName('img');

//getElementsByClassName
// const hello = document.getElementsByClassName('hello')

//getElementById
// const hello = document.getElementById('ids')

//querySelector
// document.querySelector('h1') // ekhane page e joto h1 tag ache tar moddhe first h1 ekhane diye dibe
// querySelectorAll
// document.querySelectorAll('h1') // ekhane page e joto h1 tag ache sob gula eksathe kore array or nodeList akare diye dibe . jekhane array er property forEach use kora jabe

// const input = document.querySelector('[type="password"]')
// const input1 = document.querySelector('input[type="password"]')

// Important Note for HTMLcollection and NodeList
// HTMLcollection e array er kono method jemon map, forEach , filter etc pauya jay na . tai html collection ke use kore array er moto use kora jay na . kintu NodeList er vitor only forEach use kora jay jeta diye amra prottekta array er element ke ekta ekta kore access korte pari .
// jodi ami chai html collection or nodeList ke pure array baniye tarpor array er sob method use korte tahole html collection or nodeList ke array te convart korte hobe

// Convert HTMLCollection to Array
// const li = document.getElementsByClassName('li')
// // Ans : HTMLCollection(3) [li.li, li.li, li.li]

// const convertLiArr = Array.from(li)
// console.log(convertLiArr)
// convertLiArr.map((l)=>{
//   console.log(l)
// })

// Convert NodeList to Array
// const li = document.querySelectorAll('.li')
// console.log(li)
// // Ans : NodeList(3) [li.li, li.li, li.li]

// const convertLiArr = Array.from(li)
// console.log(convertLiArr)
// convertLiArr.forEach((l)=>{
//   console.log(l)
// })

// let img = document.querySelectorAll('img');

// let allImages = [
//   './image/me1.jpg',
//   './image/me2.jpg',
//   './image/me3.jpg',
// ]

// img.forEach((image,i)=>{
//   image.src = allImages[i]
//   image.width = 300
// })

// for(let i = 0; i<=2; i++){
//   img[i].src = allImages[i];
//   img[i].width = '300'
// }

// for(let i = 0; i<=2; i++){
//   img[i].src = `./image/me${i+1}.jpg`
//   img[i].width = '300'
// }

// img[0].src = './image/me1.jpg'
// img[0].width = '300'

// img[1].src = './image/me2.jpg'
// img[1].width = '300'

// img[2].src = './image/me3.jpg'
// img[2].width = '300'

// let ols = document.querySelector('.ol');
// let olHello = ols.querySelector('.hello')

//copy js path
// let hello = document.querySelector("body > ol:nth-child(3) > li:nth-child(2)")

// let text = document.querySelector('.inner')

// Attribute Selector
// let att = document.querySelector("[tanvir='ahmed']")
// let att1 = document.querySelector("[tanvir='ahmed']").attributes
// let att2 = document.querySelector("[tanvir='ahmed']").attributes.tanvir
// let att3 = document.querySelector("[tanvir='ahmed']").attributes.tanvir.value

// let manualAtt = document.children[0].children[1].children[0].attributes.tanvir.value
// console.log(manualAtt)
// let manualAttBody = document.body.children[0].attributes.tanvir.value
// console.log(manualAttBody)

// let att = document.querySelector("[tanvir='ahmed']").getAttribute('class')

// const heading = document.getElementById('h1')
// console.log(heading.getAttribute('class'))
// console.log(heading.getAttribute('id'))
// console.log(heading.getAttribute('tanvir'))

// const heading = document.getElementById('h1')
// heading.setAttribute('class','test')
// // ekhane age class e heading nam e class chilo . kintu ami jokhon setAttribute diye test class set korlam tokhon ager class heading ta muche diye only test add kora hoise . tai heading class er kono css apply hobe na . only test er css apply hobe
// // jodi chai ager class o thakbe, new class o thakbe tahole...
// heading.setAttribute('class','heading test')
// // karon setAttribute always override kore thake

// function att(){
//   document.querySelector("[tanvir='ahmed']").setAttribute("id","heading")
// }
// function headings(){
//   window.document.children[0].children[1].children[0].setAttribute("id","heading")
// }

// function headings(){
//   document.querySelector("[tanvir='ahmed']").id = 'heading'
// }

// document.body.children[0].className = 'tanvirss'

// Change Style
//1. element.style.color = 'red'
//2. element.style.cssText = 'background-color: black; color: green; font-weight: 500;'
//3. element.className = 'className'
//4. element.setAttributes('class','className')
//5. element.classList.add('className')
// element.classList.remove('classNamve)
// element.classList.toggle('className') // jodi ai className thake tahole remove kore dau, jodi na thake add kore dau

// setInterval(()=>{
//   h1.classList.toggle('head') // .5s por por head class add hobe remove hobe
// },500)

// let h1 = document.querySelector('.hell')

// let ol = document.querySelectorAll('.ol li')

// ol.forEach((li)=>{
//   li.style.color = 'yellow'
// })

// for(let li of ol){
//   li.style.color = 'yellowgreen'
// }

// for(let i = 0; i<=ol.length; i++){
//   ol[i].style.color = 'pink'
// }

// cssText
// let ol = document.querySelectorAll('.ol li')

// ol.forEach((li)=>{
//   li.style.cssText = 'font-size : 40px; background-color: pink; color: red; margin-bottom: 2px; padding: 4px; text-decoration: underline'
// })

//className
// ol.forEach((li)=>{
//   li.className = 'changeCSS'
// })

//setAttribute
// ol.forEach((li)=>{
//   li.setAttribute('class','changeCSS')
// })

//classList
//   ol.forEach((li)=>{
//     // li.classList.add('changeCSS')
//     li.classList.toggle('changeCSS')
//   })
// setTimeout(()=>{
//   document.body.children[0].classList.remove('hell');
// },2000)

// some notes for class in js
// classList chara baki method e ager kono className thakleo seta override hoye jay kintu classList e ager gula ager motoii thake, just another class add or remove kora hoy

// all css style change summary
// let p = window.document.children[0].children[1];
// let allP = p.querySelectorAll('p');

// for(let i = 0; i<allP.length; i++){
//   allP[i].classList.add('helloP')
//   allP[i].classList.toggle('helloP')
//   allP[i].className = 'helloP'
//   allP[i].setAttribute('class','helloP underline')
//   allP[i].style.cssText = 'font-size: 40px; color: red;'
//   allP[i].className = 'helloP'
//   allP[i].style.color = 'red'
// }

// Access Parent , Sibling and children element

// Access Parent
// const li = document.querySelector('ul li:nth-child(3)')
// li.parentElement.parentElement // body
// li.parentElement // ul
// li.parentElement.parentElement.parentElement // html

// Access children
// const body = document.body.children[0] // h1

// Access Sibling
// const li3 = document.querySelector('ul li:nth-child(3)')
// li3.nextElementSibling.nextElementSibling // li5
// li3.nextElementSibling.nextElementSibling.nextElementSibling // null
// li3.previousElementSibling // li2
// li3.previousElementSibling.previousElementSibling //li1
// li3.previousElementSibling.previousElementSibling.previousElementSibling // null

// Access firstElementChild and lastElementChild
// const parent = document.querySelector('.parent')
// console.log(parent.firstElementChild) // parent div er first child return hobe
// console.log(parent.lastElementChild) // parent div er last child return hobe

// Node Node Node ChildNode

// const parent = document.querySelector('.parent')
// console.dir(parent.childNodes[1].childNodes[0].nodeValue)
// const newText = document.createTextNode('Hello World');
// const div = document.createElement('div')
// div.appendChild(newText)
// document.body.querySelector('.parent').appendChild(div)

//Text Node change
// let nodes = document.body.childNodes
// nodes = document.body.childNodes[2]
// document.body.childNodes[1].childNodes[0].nodeValue = 'Hello World'
// nodes = document.body.childNodes[2].nodeValue

// document.body.childNodes[2].nodeValue = 'Hii Tanvir!!'
// const node = document.childNodes[1].childNodes[2].childNodes[1]

// document.children[0].children[1].children[1].childNodes[1].childNodes[0].nodeValue = 'Hello My Love!!'

// Clone Node
// const parent = document.querySelector('.parent')
// const cloneParentWithoutChildNodes = parent.cloneNode();
// const cloneParentWithAllChildNodes = parent.cloneNode(true);
// console.log(cloneParentWithoutChildNodes)
// console.log(cloneParentWithAllChildNodes)
// parent.appendChild(parent.cloneNode(true))
// container.appendChild(h1.cloneNode())
// function cloneNodeWithoutText(){
//   container.appendChild(h1.cloneNode())
// }
// function cloneNodeWithAllNode(){
//   container.appendChild(h1.cloneNode(true))
// }

// Append & AppendChild -- append , appendChild
// Append and AppendChild kono element ke onno element er vitore cut kore last e place kore dey . kintu jodi oi element ke copy node kore tarpor appendChild or Append kore tahole oitar copy ashe kintu oi element ager jayga teii thake
// let h1 = document.querySelector('h1')
// let container = document.querySelector('.container')
// let card = document.querySelector('.card')

// document.body.appendChild(document.children[0].children[1].children[2].children[0])

// document.querySelector('body > .container').appendChild(document.querySelector('body > h1'))
// function appendH1(){
//   container.appendChild(h1)
// }
// function cloneAppend(){
//   container.appendChild(h1.cloneNode(true))
// }
// for(let i = 0; i<99; i++){
//   let newCard = card.cloneNode()
//   newCard.innerText = i+2
//   container.appendChild(newCard)
// }

// function appendH1(){
//   container.appendChild(h1)
// }

// function appendChangeNode(){
//   h1.childNodes[0].nodeValue = 'Append P is Here'
//   h1.appendChild(document.querySelector('p'))
// }
// function appendChangeDirectionNode(){
//   let newTextNode = document.createTextNode(h1.childNodes[0].nodeValue)
//   h1.childNodes[0].nodeValue = 'Append P is Here'
//   h1.appendChild(document.querySelector('p'))
//   h1.appendChild(newTextNode)
//   h1.childNodes[0].nodeValue = null
// }

// Clone Node
// container.appendChild(h1.cloneNode())
// function cloneNodeWithoutText(){
//   container.appendChild(h1.cloneNode())
// }
// function cloneNodeWithAllNode(){
//   container.appendChild(h1.cloneNode(true))
// }

// difference between append and appendChild - 3 types of differences

//1. append function return undefined but appendChild function return dom element
//Example :
//container.append(h1)
// Ans : undefined
//container.appendChild(h1)
// Ans : <h1>'all node'</h1>

//2. append function accept normal text for append but appendChild not accept any type of normal text, but appendChild accept child node . thats why first you create a text node using document.createTextNode('Hello World') then append
// EXample:
//container.append('any text');
// Ans : append Successfully in the last
// container.appendChild('any text');
// Ans : ERROR!
// But the solution is first i am creating a text node for 'any text' then put it
// Solution :
// let newTextNode = document.createTextNode('any text')
// container.appendChild(newTextNode)
// Ans : append successfully

//3. append function appended multiple node at a time but appendChild function appended not able to multiple node at a time . its append only first node
//Example :
// container.append('hello world',h1)
// Ans : append 2 at a time
// let newText = document.createTextNode('hello world')
// container.appendChild(newText,h1)
// Ans : append only first parameter , that's mean append only newText, not append h1

//Mini Project
// const container = document.querySelector('.container')
// const image = document.querySelector('.container > img')
// let j = 2
// for(let i = 1; i<100; i++){
//   if(i%3 == 0){
//     j = 1;
//   }
//   container.appendChild(image.cloneNode(true))
//   container.children[i].attributes[0].nodeValue = `./image/me${j}.jpg`
//   j++
// }

//Creatae Any Element

// Create Element -- document.createElement('div')

// const container = document.querySelector('.container')
// const para = document.createElement('p')
// para.innerText = 'Hi, My name is Tanvir Ahmed'
// // para.classList.add('para')
// // para.classList.toggle('para')
// // para.style.color = 'blue'
// // para.style.cssText = 'color : pink;'
// para.className = 'para'
// container.appendChild(para)

// simple project using document.createElement

// let container = document.body.querySelector(".container");
// let x = 1;
// let myHtml ;

// for (let i = 1; i <= 100; i++) {
//   // myHtml = myHtml + `
//   //     <div class="divCon">
//   //       <img src='./image/me${x}.JPG' alt="">
//   //       <p class="para">${i}</p>
//   //     </div>
//   //   `;

//   let div = document.createElement('div')
//   let image = document.createElement("img");
//   let paragraph = document.createElement('h4')
//   container.appendChild(div)
//   div.appendChild(image);
//   div.appendChild(paragraph)
//   div.classList.add('divCon')
//   paragraph.innerHTML = `<i>Image ${i} </i>`
//   image.src = `./image/me${x}.JPG`;
//   image.alt = `image${i}`;

//   x++;
//   if (i % 3 == 0) {
//     x = 1;
//   }
// }
// //container.innerHTML = myHtml

// Remove Element -- 2 Way
//1. OLD Way
// container.parentElement.removeChild(container) // ui container remove but memory container not remove
// container = null // remove in memory
// //2. New Way
// container.remove()// ui container remove but memory container not remove
// container = null// remove in memory

// Event Listener
//1. using onclick
//2. ondblclick
//3. addEventListener

// difference between onclick,ondblclick and adEventListener :
//1. onclick and ondblclick er khetre ek sathe multiple event thakle sob gula event fire hoy na . last event ta fire hoy . kintu addEventListener er khetre multiple listener thakleo sob gula fire hoy

// onclick
// function sayHi(){
//   console.log('clicked')
// }
// function sayHello(){
//   console.log('hello')
// }
// document.querySelector('h1').onclick = sayHi
// document.body.childNodes[1].setAttribute('onclick','console.log("helloooo")')
// document.body.childNodes[1].setAttribute('onclick','sayHello()')

// ondblclick
// function sayHi(){
//   console.log("Hello World")
// }
// document.querySelector('h1').ondblclick = sayHi
// document.body.children[0].setAttribute('ondblclick','sayHi()')
// document.children[0].children[1].childNodes[1].setAttribute('ondblclick','console.log("Helloooooo")')

// addEventListener
// syntext : element.addEventListener('event type',any type of function)
// function sayHi(){
//   console.log('hello2')
// }
// let h1 = document.querySelector('h1')
// h1.addEventListener('click',()=>{
//   console.log('hello1')
// })
// h1.addEventListener('click', sayHi)
// h1.addEventListener('click',function(){
//   console.log('hello3')
// })

// mini project with addEventListener

// using create Element
// let container = document.querySelector('.container')
// let card = document.querySelector('.card')
// card.style.cssText = 'cursor:pointer'
// let x = 0

// card.addEventListener('click',()=>{
//   x++
//   let cardItem = document.createElement('div')
//   let cardTextNode = document.createTextNode(`${x}`)
//   cardItem.appendChild(cardTextNode)
//   container.appendChild(cardItem)
//   cardItem.classList.add('card')
//   cardItem.style.cssText = 'cursor:initial'
// })

// using clone node
// let container = document.querySelector('.container')
// let card = document.querySelector('.plusIcon')
// let x = 0;

// card.addEventListener('click',()=>{
//   x++
//   let cloneCard = card.cloneNode(true)
//   cloneCard.childNodes[0].nodeValue = `${x}`
//   container.appendChild(cloneCard)
//   if(x>=1){
//     container.children[x].classList.add('card')
//     container.children[x].classList.remove('plusIcon')
//   }
// })

// Form Event and Event Object
// let input = document.querySelector('input')
// let para = document.querySelector('p')

//input event (input e kichu likhleii fire hote thake)
// input.addEventListener('input',(e)=>{
//   console.log(e)
//   para.innerText = e.target.value
// })

//change event (input er baire click korle fire hoy)
// input.addEventListener('change',(e)=>{
//   console.log(e)
//   para.innerText = e.target.value
// })

//focus event (input er vitor click korle fire hoy)
// input.addEventListener('focus',(e)=>{
//   console.log(e)
//   para.innerText = e.target.value
// })

//blur event (input er baire click korle fire hoy)
// input.addEventListener('blur',(e)=>{
//   console.log(e)
//   para.innerText = e.target.value
// })

// Form
// let form = document.querySelector('form')
// form.addEventListener('submit',(e)=>{
//   e.preventDefault()
//   console.log(e)
// })

// FormData
// let form = document.querySelector('form')
// form.addEventListener('submit',(e)=>{
//   e.preventDefault()
//   const formData = new FormData(form) // form or e.target
//   for(const p of formData.entries()){
//     console.log(p)
//   }
// })

// KeyBoard Event
// 3 types of keyboard event
//1. keyup
//2. keydown
//3. keypress

//note: jekono event jodi focus obosthay thake tahole sei element er upor keyboard event lagano jabe

//1. keypress event
// let h1 = document.querySelector('h1')
// keypress event e shift key press korle kono event hoy na
// h1.addEventListener('keypress', (e)=>{
//   console.log(e.key)
//   console.log(e)
//   e.target.childNodes[0].nodeValue = e.key
// })
//understand key code -- e.code
// window er upor keypress event dile attribute tabindex="0" deya lage na
// window.addEventListener('keypress',(e)=>{
//   console.log(e.code)
//   console.log(e.key)
// })

// //2. keyup
// // keyup and keydown event e shift kaj kore
// // sob kichu keypress er motoi , just kono key press kore dhore rakhle event fire hoy na , jodi key press kore chere dei tokhon fire hoy . aijonnoi nam keyup event
// h1.addEventListener('keyup',(e)=>{
//   console.log(e)
//   console.log(e.key)
//   console.log(e.code)
// })

//3. keydown
// ekdom keyup er biporit . press kore rakhle event fire hoy, press kore chere dile event kaj kore na
// h1.addEventListener('keydown',(e)=>{
//   console.log(e)
//   console.log(e.key)
//   console.log(e.code)
// })

// summary of keyboard event
// 1. jekono element e keyboard event dei na kno sei element er attribute e tabindex="0" eta dite hobe . kintu window or document er upor event listener lagale eta dite hobe na . maximum usecase window or document er uporeii hoye thake . bishesh kore document

// Mouse Event

// Advance Javascript (Async)
// JSON
// let data;
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => {
//         console.log(json)
//         data = json;
//       })

//Dog Api Mini Project

// let data;
// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json);
//     data = json;
//     const image = document.querySelector("#image");
//     const btn = document.querySelector("#btn");
//     image.src = json.message;
//     image.style.width = "200px";
//   });

// btn.addEventListener("click", () => {
//   let data;
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then((response) => response.json())
//     .then((json) => {
//       console.log(json);
//       data = json;
//       const image = document.querySelector("#image");
//       const btn = document.querySelector("#btn");
//       image.src = json.message;
//       image.style.width = "200px";
//     });
// });

// XMLHttpRequest (XHR)
// amra fetch diye kono api fetch kori , eta ashce 2015 shale . tar age manush api fetch korar jonno XMLHttpRequest (XHR) use korto

// const image = document.querySelector("#image");
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//       // const image = document.querySelector("#image");
//       // const btn = document.querySelector("#btn");
//       const xhr = new XMLHttpRequest();

//       console.log(xhr)
//       xhr.addEventListener('load',()=>{

//         console.log(xhr.response) // {"message":"https:\/\/images.dog.ceo\/breeds\/gaddi-indian\/Gaddi.jpg","status":"success"}
//         console.log(JSON.parse(xhr.response)) // xhr response object er format e ashbe

//       }) // jokhon xhr e data server theke ashbe tokhon eta run korbe

//       xhr.open('GET','https://dog.ceo/api/breeds/image/random')
//       xhr.send(); // request ke server e pathanor jonno send call kora hoy
// });

// Dog api mini project with XHR

// const image = document.querySelector("#image");
// const btn = document.querySelector("#btn");

// const xhr = new XMLHttpRequest()
// console.log(xhr)

// xhr.responseType = 'json'

// xhr.addEventListener('load',()=>{
//   // const src = JSON.parse(xhr.response)
//   btn.addEventListener('click',()=>{
//     // image.src = src.message
//     image.src = xhr.response.message
//   })
// })

// xhr.onload = ()=>{
//   btn.addEventListener('click',()=>{
//     image.src = xhr.response.message
//   })
// }

// xhr.open('GET','https://dog.ceo/api/breeds/image/random');
// xhr.send();

// Card Project using XHR

// const wrapper = document.querySelector(".wrapper");
// const btn = document.querySelector('button')

// const xhr = new XMLHttpRequest();
// console.log(xhr);
// xhr.responseType = 'json'
// xhr.onload = () => {
//   console.log(xhr);
//   btn.addEventListener('click',()=>{
//     const card = document.createElement("div");
//     const title = document.createElement("h3");
//     const text = document.createElement("p");

//   })
// };

// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
// xhr.send();

// Synchronous , Asynchronous and Ajax

// javascript single threaded houyay eksathe multiple kaj korte pare na . kintu jodi asynchrous code run kora lage, orthat jodi setTimeout, setInterval, XHR, fetch request etc er moto asynchronous code thake tahole javascript nije segula handle na kore browser ke diye dey handle korar jonno . karon browser multi threaded. pore browser oi code gula re run kore callback queue te diye rakhe . jokhon pura call stack khali hoye jay tokhon seigula call stack e giye ekta ekta kore execute hote thake

// Dog api mini project with XHR and Synchronously

// const image = document.querySelector("#image");
// const btn = document.querySelector("#btn");

// const xhr = new XMLHttpRequest()
// console.log(xhr)

// xhr.responseType = 'json'

// xhr.addEventListener('load',()=>{
//   // const src = JSON.parse(xhr.response)
//   btn.addEventListener('click',()=>{
//     // image.src = src.message
//     image.src = xhr.response.message
//   })
// })

// xhr.onload = ()=>{
//   btn.addEventListener('click',()=>{
//     image.src = xhr.response.message
//   })
// }

// xhr.open('GET','https://dog.ceo/api/breeds/image/random', false); // jokhon third argument false deya hobe tokhon seta api request synchrously korbe . by default true deya thake . tar mane hocche by default asynchrously run hoy
// xhr.send();

// console.log('hello')

// Ajax
// ajax alada kichu na . eta holo asynchronous javascript er ekta example . ajax mane holo asynchronous javascript xml

// Callback Hell

// xhr revision
// const image = document.querySelector("#image")
// const btn = document.querySelector("#btn")

// btn.addEventListener('click',()=>{
//   const xhr = new XMLHttpRequest();
//   console.log(xhr)
//   // xhr.responseType = 'json'
//   xhr.onload = ()=>{
//     const res = JSON.parse(xhr.response)
//     const {message} = res
//     image.src = message
//     image.style.width = '200px'
//     image.style.height = '200px'
//   }
//   // xhr.addEventListener('load',()=>{
//   //   console.log(xhr)
//   // })
//   xhr.open('GET','https://dog.ceo/api/breeds/image/random')
//   xhr.send();
// })

// Reusable function

// function makeHttpRequest(method, url, callback) {
//   const xhr = new XMLHttpRequest();
//   console.log(xhr);
//   xhr.responseType = "json";
//   xhr.addEventListener("load", () => {
//     callback(xhr.response);
//   });
//   xhr.open(method, url);
//   xhr.send();
// }
// makeHttpRequest("GET", "https://dummyjson.com/users", (data) => {
//   console.log(data);
//   console.log("Hii");
// });
// makeHttpRequest("GET", "https://dummyjson.com/users/1", (data)=>{
//   console.log(data)
// });

// Some important api
// 'https://dummyjson.com/users' // get all users
// 'https://dummyjson.com/users/2' // get single users by id
// 'https://dummyjson.com/posts/user/5' // get posts by user id
// 'https://dummyjson.com/comments/post/6' // get comments by post id

// function makeHttpRequest(method,url,callback){
//   const xhr = new XMLHttpRequest()
//   xhr.responseType = 'json'

//   xhr.onload = () => {
//     callback(xhr.response)
//   }

//   xhr.open(method,url)
//   xhr.send()
// }
// makeHttpRequest('GET','https://dummyjson.com/users',(userData)=>{
//   console.log(userData)

//   makeHttpRequest('GET',`https://dummyjson.com/posts/user/${userData.users[0].id}`,(userPosts)=>{
//     console.log(userPosts)
//     console.log(userPosts.posts[0].id)

//     makeHttpRequest('GET',`https://dummyjson.com/comments/post/${userPosts.posts[0].id}`, (postComment)=>{
//       console.log(postComment)
//       console.log(postComment.comments[0].body)

//       makeHttpRequest('GET',`https://dummyjson.com/users/${postComment.comments[0].user.id}`,(foundUser)=>{
//         console.log(foundUser)
//       })

//     })

//   })

// })
// // This is called Callback Hell . this piramid is a callback hell


// Some important api
// 'https://dummyjson.com/users' // get all users
// 'https://dummyjson.com/users/2' // get single users by id
// 'https://dummyjson.com/posts/user/5' // get posts by user id
// 'https://dummyjson.com/comments/post/6' // get comments by post id


// function makeHttpRequest(method,url,callback){
//   const xhr = new XMLHttpRequest()
//   xhr.responseType = 'json'
//   xhr.onload = ()=>{
//     callback(xhr.response)
//   }
//   xhr.open(method,url)
//   xhr.send()
// }

// makeHttpRequest('GET','https://dummyjson.com/users',(data)=>{
//   console.log(data.users)
//   makeHttpRequest('GET',`https://dummyjson.com/users/${data.users[0].id}`,(data)=>{
//     console.log(data)
//     makeHttpRequest('GET',`https://dummyjson.com/posts/user/${data.id}`,(data)=>{
//       console.log(data.posts[0])
//       makeHttpRequest('GET',`https://dummyjson.com/comments/post/${data.posts[0].id}`,(data)=>{
//         console.log(data.comments[0])
//         console.log(data.comments[0].user.id)
//         makeHttpRequest('GET',`https://dummyjson.com/users/${data.comments[0].user.id}`,(data)=>{
//           console.log(data)
//         })
//       })
//     })
//   })
// })

// Promises






















