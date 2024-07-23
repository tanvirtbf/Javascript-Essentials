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
// const user1 = {firstName:'Tanvir',lastName:'Ahmed'}
// let user2 = {...user1}

// let fruits = ['Mango','Banana','Jackfruits','Grapes','Dates']
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

// Tokenization in Javascript
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
// const a = 10; // Lexical Position or Lexical context is line number 369
// let b = 'Hello' // Lexical Position or Lexical context is line number 370

// function hello(){ // Lexical Position or Lexical context is line number 372-374
//   console.log('Hello World!')
// }

// let c = 11; // Lexical Position or Lexical context is line number 376

// hello(); // Lexical Position or Lexical context is line number 378

//Execution Contaxt understand by some text:
// onk boro source code er moddhe onk lexical contaxt thake . prottekta lexical contaxt or prottekta particular code ke execute korar jonno javascript er ja ja dorkar tai holo oi particular code er jonno execution contaxt . line number 371 er jonno alada execution contaxt create hoy, line number 372 er jonno alada execution contaxt create hoy,line number 374-376  er jonno alada execution contaxt create hoy,evabe prottekta particular code er jonno alada alada execution contaxt create hoy

// Globar Execution Contaxt (GEC)
//jokhon javascript first time load hoy tokhon by default ekta execution contaxt create kore jar nam holo Global Execution Contaxt(GEC)
// GEC 2 ta special jinish amader dey(jodio 0 line code thake)
// 1. window 2. this (window === this => true)

// GEC er 2 ta phase thake
// 1. Creation phase
// 2. Execution phase

// Creation phase eii 2 ta special object peye thaki, 1. window(global object) 2. this (point on window)

// Global execution contaxt er creation phase e ki ki hobe ?
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

//getElementsByTagName
  // const hello = document.getElementsByTagName('h2');
  // const hello2 = document.getElementsByTagName('img');

//getElementsByClassName
  // const hello = document.getElementsByClassName('hello')

//getElementById
  // const hello = document.getElementById('ids')

//querySelector
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

//Access Parent , Sibling and children element 

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

// Node 

//Text Node change
// let nodes = document.body.childNodes
// nodes = document.body.childNodes[2]
// nodes = document.body.childNodes[2].nodeValue

// document.body.childNodes[2].nodeValue = 'Hii Tanvir!!'

// document.children[0].children[1].children[1].childNodes[1].childNodes[0].nodeValue = 'Hello My Love!!'


// Append & AppendChild -- append , appendChild
// let h1 = document.querySelector('h1')
// let container = document.querySelector('.container')
// let card = document.querySelector('.card')

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


// Create Element -- document.createElement('div')
const container = document.querySelector('.container')
const para = document.createElement('p')
para.innerText = 'Hi, My name is Tanvir Ahmed'
// para.classList.add('para')
// para.classList.toggle('para')
// para.style.color = 'blue'
// para.style.cssText = 'color : pink;'
para.className = 'para'
container.appendChild(para)

