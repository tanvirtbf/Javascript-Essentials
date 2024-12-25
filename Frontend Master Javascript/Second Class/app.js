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
function createPerson(name){
    let privateName = name
    return {
        getName : function(){
            return privateName
        },
        setName : function(newName){
            privateName = newName
        }
    }
}
const person = createPerson("Tanvir")
console.log(person.getName())
person.setName("Tanvir Ahmed")
console.log(person.getName())
// ব্যাখ্যা:
// privateName ভেরিয়েবল createPerson ফাংশনের scope-এর মধ্যে encapsulated। শুধুমাত্র getName এবং setName ফাংশনের মাধ্যমে এটি অ্যাক্সেস করা যায়।