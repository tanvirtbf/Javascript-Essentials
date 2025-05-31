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

class MyPromise{
  constructor(callback){
    callback(this.resolve, this.reject)
  }

  #resolve(){

  }
  #reject(){

  }

  then(){

  }
  catch(){

  }
  finally(){

  }

}

const p1 = new MyPromise(function(res, rej) {

})

console.log(p1);