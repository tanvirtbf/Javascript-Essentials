// Type Conversion Code 

// Implicit Type Conversion
// console.log('5' - 2) // 3

// console.log('Hello' - 2) // NaN (karon ekhane type conversion kora somvob na)
// console.log('Hello' + 2) // Hello2 (ekhane type conversion somvob tai kore nise string e)

// boolean to number
// console.log(true + 1) // 2
// console.log(true + 10) // 11
// console.log(false + 1) // 1
// console.log(false - 3) // -3

// Explicit Type Conversion 

// let str = "123"
// console.log(typeof str) // string
// let num = Number(str) 
// console.log(num) // 123
// console.log(typeof num) // number

// let num = 123;
// let str = String(num);
// console.log(str); // Output: "123"
// console.log(typeof str); // Output: string

// let isTrue = true;
// let num = Number(isTrue);
// console.log(num); // Output: 1

// let num = 0;
// let bool = Boolean(num);
// console.log(bool); // Output: false


// let num = "8"
// let result = 4 + num++
// console.log(result) // 12






// Closure 

// function show(){
//   let myName = 'Tanvir'
//   let dept = 'web'
//   function inner(){
//     console.log(myName)
//     console.log(dept)
//   }
//   console.dir(inner)
// }
// show()





// function createCounter(){
//     let count = 0;
//     return function(){
//         return count
//     }
// }
// const counter = createCounter()
// let count = counter()
// console.log(count)


// function createCounter(){
//     let count = 0
//     return function(){
//         count++
//         return count
//     }
// }
// const counter = createCounter()
// console.log(counter)

// const count = counter()
// console.log(count) // 1

// console.log(counter()) // 2
// console.log(counter()) // 3
// console.log(counter()) // 4

// const bankBalance = (amount) => {
//     let myAmount = amount
//     return {
//         deposite : function(amount) {
//             myAmount = myAmount + amount
//         },
//         withdraw : function(amount) {
//             if(amount<=myAmount){
//                 myAmount = myAmount - amount
//             }else {
//                 return "Insufficient Balance!"
//             }
//         },
//         checkBalence : function(){
//             return myAmount
//         }
//     }
// }

// const tanvir = bankBalance(2000)
// console.log(tanvir.checkBalence()) // 2000

// tanvir.deposite(500)
// console.log(tanvir.checkBalence()) // 2500

// tanvir.withdraw(1500)
// console.log(tanvir.checkBalence()) // 1000

// console.log(tanvir.withdraw(1200)) // Insufficient Balance!
// console.log(tanvir.checkBalence())



// Private Variable 
// closure use kore amon ekta variable create korbo ja bairer code theke access kora jabe na 

// function person (name) {
//     let privateName = name
//     return {
//         getName : function(){
//             return privateName
//         }, 
//         setName : function(newName) {
//             privateName = newName
//         }
//     }
// }

// const personName = person("Tanvir")
// console.log(personName.getName()) // Tanvir
// personName.setName("Sadia")
// console.log(personName.getName()) // Sadia



// akhn closure diye private variable create korar kichu example deya holo...

// 1. Setter and Getter
// function createPerson(name){
//     let privateName = name
//     return {
//         getName : function(){
//             return privateName
//         },
//         setName : function(newName){
//             privateName = newName
//         }
//     }
// }
// const person = createPerson("Tanvir")
// console.log(person.getName())
// person.setName("Tanvir Ahmed")
// console.log(person.getName())
// ব্যাখ্যা:
// privateName ভেরিয়েবল createPerson ফাংশনের scope-এর মধ্যে encapsulated। শুধুমাত্র getName এবং setName ফাংশনের মাধ্যমে এটি অ্যাক্সেস করা যায়।



// 2. create a counter

// function createCounter(){
//     let count = 0

//     return {
//         increment : function(){
//             count++
//         },
//         decrement : function(){
//             count--
//         },
//         getCount : function(){
//             return count
//         }
//     }
// }
// const counter = createCounter()

// counter.increment()
// counter.increment()
// counter.increment()
// console.log(counter.getCount()) // 3

// counter.increment()
// console.log(counter.getCount()) // 4

// counter.decrement()
// counter.decrement()
// counter.decrement()
// console.log(counter.getCount()) // 1




// 3. Banking System 

// function bankAccount(initialBalance){
//     let balance = initialBalance
//     return {
//         deposit : function(amount){
//             if(amount > 0){
//                 balance = balance + amount
//             } else {
//                 return "Invalid deposit amount"
//             }
//         },
//         withdraw : function(amount){
//             if(amount > 0 && balance>=amount){
//                 balance = balance - amount
//             }else {
//                 return "Insufficient Balance for withdraw!"
//             }
//         },
//         getBalance : function(){
//             return balance
//         }
//     }
// }
// const myAccount = bankAccount(2000)

// myAccount.deposit(1000)
// console.log(myAccount.getBalance()) // 3000

// myAccount.withdraw(500)
// console.log(myAccount.getBalance()) // 2500

// myAccount.deposit(2)
// console.log(myAccount.getBalance()) // 2502



// 4. Shopping Cart System :

// function createCart(){
//     let items = []

//     return {
//         addItem : function(item){
//             items.push(item);
//             return `${item} added to the cart.`;
//         },
//         removeItem: function(item) {
//             const index = items.indexOf(item);
//             if (index > -1) {
//                 items.splice(index, 1);
//                 return `${item} removed from the cart.`;
//             } else {
//                 return `${item} not found in the cart.`;
//             }
//         },
//         getItems : function(){
//             return [...items]
//         }
//     }
// }
// const myCart = createCart()

// myCart.addItem("tanvir")
// myCart.addItem("sadia")
// console.log(myCart.getItems())
// myCart.removeItem("tanvir")
// console.log(myCart.getItems())

// myCart.addItem("maymuna")
// myCart.addItem("humaira")
// console.log(myCart.getItems())






// 5 Hard Problem with Closure :

// 1. Traffic Light Controller
// A traffic light changes to different colors (red, green, yellow). Create a function that stores the current state of the light and will display the next light each time it is called.

// function trafficLight(){
//   let colors = ['green', 'red', 'yellow']
//   let indexNumber = 0

//   return {
//     changeLight : function(){
//       indexNumber = (indexNumber + 1) % colors.length
//       return `Current Light : ${colors[indexNumber]}`
//     }
//   }
// }
// const myLight = trafficLight()
// console.log(myLight.changeLight()) // Current Light : red
// console.log(myLight.changeLight()) // Current Light : yellow
// console.log(myLight.changeLight()) // Current Light : green
// console.log(myLight.changeLight()) // Current Light : red



// IIFE : 


// (function(){
//   var myName = 'Tanvir Ahmed'
//   function show(){
//     myName = 'Sadia Ahmed'
//     console.log('Show :', myName)
//   }
//   show()
// })();
// console.log(window.myName) // error


// for(var i = 0; i<10; i++){
//   setTimeout(()=>{
//     console.log(i)
//   }, 1000)
// }
// Output : 10 10 10 10 10 10 10 10 10 10 
// kintu ami chai 1 2 3 4 5... evabe ashuk 
// tahole eta let diyeo solve kora jay . jemon: 
// for(let i = 0; i<10; i++){
//   setTimeout(()=>{
//     console.log(i)
//   }, 1000)
// }
// Output : 0 1 2 3 4 5 6 7 8 9
// kintu evabe let diye korle prottekta iteration e new variable create hoye thake . eta onk memory consume kore . tahole kivabe eta solve kora jay ? 
// Answer holo IIFE diye eta solve kora jay . eta onk popular ekta problem 
// for(var i = 0; i<10; i++){
//   (function(i){
//     console.log(i)
//   })(i)
// }




// IIFE Example : 

// (function(){
//   console.log('HEllo')
// })()

// (function(){
//   console.log("Hiii")
// }())


// (function(){
//   var secret = 'Tanvir Ahmed'
//   console.log(secret)
// })()
// console.log(secret) // secret is not defined


// Module Pattern (IIFE)

// var counter = (function(){
//   var count = 0
//   return {
//     increment : function(){
//       count ++ 
//     },
//     decrement : function(){
//       count--
//     },
//     getCount : function(){
//       return count
//     }
//   }
// }())
// console.log(counter) // {increment: ƒ, decrement: ƒ}

// console.log(counter.getCount()) // 0

// counter.increment()
// counter.increment()

// console.log(counter.getCount()) // 2

// counter.decrement()

// console.log(counter.getCount()) // 1

// counter.increment()
// counter.increment()
// counter.increment()

// console.log(counter.getCount()) // 4


// Asynchronous Task Handling: 

// for(var i = 0; i<5; i++){
//   (function(index){
//     setTimeout(()=>{
//       console.log(index)
//     }, 5000)
//   }(i))
// }


// Currying 

// function curryAdd(a){
//   return function(b){
//     return a*b
//   }
// }
// console.log(curryAdd(5)(5))



// Example : 

// function checkRole(role){
//   return function(user){
//     if(user.role === role){
//       return true
//     } else{
//       return false
//     }
//   }
// }
// const user = {name: 'Tanvir', role:'admin'}
// console.log(checkRole('admin')(user)) // true
// console.log(checkRole('student')(user)) // false


// const checkRole = a => b => a*b 
// console.log(checkRole(2)(2)) // 4
// console.log(checkRole(5)(2)) // 10






// Currying 5 problem solve : 

// 1 . Login System Customization 
// A logging system where each log message should be displayed with different levels (info, warning, error) and timestamps.

// function createLogger(state){
//     return function(time){
//         return function(logMessage){
//             return `[${state} :${time}] ${logMessage}`
//         }
//     }
// }

// const myLog = createLogger('info')(new Date().toISOString())
// console.log(myLog('This is Info Message!'))


// // 2. Custom Discount System 
// // A system needs to be created where discounts will be applied according to the product.

// function applyDiscount(product){
//     return function(discountPercentage){
//         return function(price){
//             return (price - (price * discountPercentage)/100)
//         }
//     }
// }
// const myPurchase1 = applyDiscount('shirt')(10)
// console.log(myPurchase1(100))

// const myPurchase2 = applyDiscount('laptop')(20)
// console.log(myPurchase2(120000))




// 3. Multi Level File Filter 
// A file manager needs to be created where files will be filtered by type, size, and extension.

// function filterFiles(fileType){
//     return function(limit){
//         return function(fileExtention){
//             return function(files){
//                 return files.filter((item) => item.fileType===fileType && item.length<=limit && item.fileExtention===fileExtention)
//             }
//         }
//     }
// }

// const files = [
//     { id: 1, fileType : 'image', length: 30, fileExtention: '.jpg'},
//     { id: 2, fileType : 'video', length: 400, fileExtention: '.mp4'},
//     { id: 3, fileType : 'image', length: 300, fileExtention: '.jpg'},
//     { id: 4, fileType : 'image', length: 10, fileExtention: '.png'},
//     { id: 5, fileType : 'image', length: 70, fileExtention: '.jpg'},
// ]

// const myfiles = filterFiles('image')(200)('.jpg')
// console.log(myfiles(files))


// 4. Custom Form Validation
// A dynamic form validation system needs to be created.

// function validateField(type){
//     return function(fn){
//         return function(val){
//             const isValidate = fn(val)
//             return {type: type, value : val, isValidate }
//         }
//     }
// }
// const email = validateField('email')(value=> value==='tanver018765@gmail.com')
// console.log(email('tanver018765@gmail.com')) 
// // { type: 'email', value: 'tanver018765@gmail.com', isValidate: true }

// const password = validateField('password')(value => value === 'mypassword')
// console.log(password('mypass')) 
// // { type: 'password', value: 'mypass', isValidate: false }



// 5. Data Sorting System 
// Sorting a data set according to specific criteria.

// function sortData(sortingColumn){
//     return function(order){
//         return function(data){
//             return data.sort((a,b)=> order==='asc' ? a[sortingColumn] - b[sortingColumn] : b[sortingColumn] - a[sortingColumn])
//         }
//     }
// }
// const dataArr = [
//     {id: 1, name: 'Tanvir', age: 25, salary: 22000},
//     {id: 2, name: 'Sabbir', age: 15, salary: 18000},
//     {id: 3, name: 'Rifat', age: 18, salary: 26000},
//     {id: 4, name: 'Riduan', age: 17, salary: 28000},
//     {id: 5, name: 'Hasib', age: 16, salary: 35000},
//     {id: 6, name: 'Muntasin', age: 24, salary: 32000}
// ]
// const sortByAge = sortData('age')('asc')
// console.log(sortByAge(dataArr))

// const sortBySalary = sortData('salary')('desc')
// console.log(sortBySalary(dataArr))

// const sortByName = sortData('name')('asc')
// console.log(sortByName(dataArr))
