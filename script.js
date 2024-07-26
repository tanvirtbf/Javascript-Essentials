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
let firstName = 'Tanvir'
let userAge = 25
let isGraduate = false
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
// 1. window 2. this (window === this => true) --> tar mane window and this same memory location point kore 

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

//3. Block Scope 
// Tricky part
// if(true){
//   var x = 10;
// }
// console.log(x) // Ans : 10 
// kintu ai answer kivabe holo ? eta to houyar chilo na . niche tar bekkha kora holo -> 
// var holo only function scope . tar mane var diye kono function er vitore variable create hole seta oi function er baire access kora jabe na . kintu var kintu block scope na . tar mane holo if(){}, {..}, for(){..} ai type er block er vitor var diye kono variable create korleo seta ai block gular baire access kora jabe . kintu let and const block scope . tar mane block er baire access kora jay na 

// Difference between var , let and const 
// var : var holo functional scope . function er baire access kora jay na . kintu block er baire access kora jay . karon var block scope na . 
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


// Immutability and Mutability 
// definition : immutability mane jeta change kora jay na . mutability mane jeta change kora jay 

// primitive data type immutable or mutable ? 
// let a = 'hello'
// a = 'hii'
// console.log(a) // Ans : hii
// ekhane dekha jacche je primitive data type er value change kora jacche , tar mane ki eta mutable ? Ans is No. ekhane javascript kokhonoii ager a variable er value ke shoraiya notun value ke rakhe nai . javascript kono notun memory container er new value ta rakhse and just a er pointer ta change kore notun value jei memory address e ase setay point kortese . tar mane primitive data type sob gulaii immutable 

// Object and Array is Mutable 




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

// getElementsByTagName
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
//1. element.style.color = 'red'
//2. element.style.cssText = 'background-color: black; color: green; font-weight: 500;'
//3. element.className = 'className'
//4. element.setAttributes('class','className')
//5. element.classList.add('className')
  // element.classList.remove('classNamve)
  // element.classList.toggle('className')

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

// Node Node Node ChildNode

//Text Node change
// let nodes = document.body.childNodes
// nodes = document.body.childNodes[2]
// document.body.childNodes[1].childNodes[0].nodeValue = 'Hello World'
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
// //let myHtml ;

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
let input = document.querySelector('input')
let para = document.querySelector('p')

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
let h1 = document.querySelector('h1')
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


