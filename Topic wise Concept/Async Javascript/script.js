// console.log(1)
// setTimeout(() =>{
//     console.log(2)
// }, 2000)
// setTimeout(() =>{
//     console.log(3)
// },1000)
// setTimeout(() =>{
//     console.log(4)
// }, 3000)
// setTimeout(() =>{
//      console.log(5)
// })
// setTimeout(() =>{
//     console.log(6)
// }, 1500)
// console.log(7)
// // result : 1 7 5 3 6 2 4

// Callback example
// function sum(){
//     console.log('Hello World!');
// }
// function message(callback){
//     callback()
// }
// message(sum)

// problem of setTimeout

// setTimeout(() =>{
//     console.log('setTimeout running!');
// }, 10)

// let i=0
// while(i<1000000000){
//     i++
// }
// let z=0
// while(z<1000000000){
//     z++
// }
// let a = 0
// while(a<1000000000){
//     a++
// }

// // Higher order function
// function hof(callback){
//     console.log('Hof');
//     callback()
// }

// function sum(){
//     console.log('Callback');
// }
// hof(sum)
// // --- ekhane hof holo Higher order function and sum hoilo callback function

// Promise

// Creation Phase
// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Done");
//     resolve("promise done");
//   }, 3000);
// });
// console.log(p1);

// // Consumption Phase
// p1.then((data) => console.log(data))
//   .catch((err) => console.log(err))
//   .finally(() => {
//     console.log("complete this promise");
//   });



// Implement a Promise via Class

// class MyPromise{
//   constructor(callback){
//     callback(this.resolve, this.reject)
//   }

//   #resolve(){

//   }
//   #reject(){

//   }

//   then(){

//   }
//   catch(){

//   }
//   finally(){

//   }

// }

// const p1 = new MyPromise(function(res, rej) {

// })

// console.log(p1);

// akhn ami ai MyPromise ke workable banabo real life Promise er motoi 

// const States = {
//   PENDING : "PENDING",
//   FULLFILLED : "FULLFILLED",
//   REJECTED : "REJECTED"
// }

// class MyPromise{

//   #promiseState=States.PENDING
//   #handlers = [];

//   constructor(callback){
//     callback(this.#resolve, this.#reject)
//   }

//   #resolve(value){
//     this.#promiseState= States.FULLFILLED;

//     this.#handlers.forEach((fns) =>{
//       fns(value)
//     })
//   }

//   #reject(value){

//   }

//   then(thenCallback){
//     this.#handlers.push(thenCallback)
//   }

//   catch(){

//   }

//   finally(){

//   }

// }

// const p1 = new MyPromise(function(res, rej) {
//   setTimeout(() =>{
//     console.log('Time From MyPromise');
//   }, 3000)
// })

// p1.then((data) =>{
//   console.log("Data from Resolve", data);
//   console.log("I am Inside then Block");
// })

// console.log(p1);


// How Then Works 

// const p1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(1)
//   }, 2000)
// })

// p1.then((data) => {
//   console.log(data);
// }).then((data2) =>{
//   console.log(data2);
// })
// ekhane data2 console.log korle undefined ashe . kno ashlo ? first time then er somoy to data thiki ashce . 
// karon ta holo p1.then() first time e take setTimeout theke resolve call kore 1 diye deya hoy res(1) evabe . but next then to ashce first then theke . sekhane kisuii return kora hoy na . 

// tahole kisui jodi return na hoy tahole ki actually kisuii return hoy na ? 
// answer is NO . jodi ami kono then e kisu return nao kori tao Promise internally ekta resolve method return kore . 

// Important notes ***********
// prottekta then() method ekta Resolved Promise return kore . kon resolve promise ? jeta ami upore original promise er callback function e res(1) korchi setaii . karon ai res(1) dara sei p1 promise er first then e 1 chole jay using Resolved Promises. next then ke data dibe first then . evabeii chaining chole . so next then ke jodi first then kisu return nao kore taholeo internally "return Promise.resolve()" eta kore amader jonno . r jodi ami first then e return 2 kore dei tahole internally first then() method eta kore - "return Promise.resolve(2)" . r ei 2 data ta next then er arguments e chole jay .

// mot kotha then() method always return a Resolve Promise



// then(), catch(), finally() chaining ta kivabe chole ektu dekhai. 
//Important notes*****
//  amra upore manually Promise implement korar somoy dekhaisi je handlers nam e ekta array ase jekhane then() method er sob function push hocche . and ekta ekta kore call hocche. similerly catch() method er jonno o array thake jekhane catch er joto method ase sob push hoy and finally er khetreo same . 

// Example : 
// .then(){

// }.then(){

// }.catch(){

// }.finally(){

// }.finally(){

// }
// --- ekhane first 2 ta then cholbe and niche thaka catch ignore kore finally 2 ta cholbe . karon state is resolve . 
// r jodi state is reject hoito tahole upore 2 ta then ignore hoito and nicher finally 2 ta call hoito . 

// another example code : 
// .then(){}
// .then(){}
// .catch(){}
// .then(){}
// .finally(){}
// .finally(){}
// ----- ekhane upore first 2 ta then ignore hobe . niche thaka catch() run hobe and tarpore thaka then o call hobe . tarpor 2 ta finally call hobe . 
// jodi catch theke kichu return kori tahole porer line e thaka then seta recieve korte parbe 

// Example : 
// .then(){}
// .then(){}
// .catch(){
//   return 2
// }.then(data => {
//   console.log(data); // 2
// })
// .finally(){}
// .finally(){}

// ekhane catch theke jeta return hoise seta then e dhorte parsi and run hoise 

// Important notes*********  : 
// catch er pore joto then ase sob call hobe but catch er age thaka kono then call hobe na 




// Important Notes ************
// catch er pore jodi arekta catch thake tahole seta call hobe na . catch only 1 taii call hobe . but catch er pore then thakle seta thiki call hobe 

// Example : 
// .then(){}
// .then(){}
// .then(){}
// .catch(){}
// .then(){}
// .catch(){}
// .finally(){}

// -------- ekhane second catch call hobe na 


// akhn ami ja ja sikhechi sob gula test korbo Promise diye 

// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(() =>{
//     console.log('Done');
//     reject('Promise Done!')
//   }, 3000)
// })
// p1.then((data) =>{
//   console.log(data);
//   return `${data}2`
// }).then((data) => {
//   console.log(data);
//   return `${data}3`
// }).catch((err) =>{
//   console.log(err);
//   return `${err}error1`
// }).then((data) =>{
//   console.log(data);
// }).finally(() =>{
//   console.log('Finally 1');
// }).finally(() =>{
//   console.log('Finally 2');
// })


