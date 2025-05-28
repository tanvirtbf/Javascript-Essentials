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
function sum(){
    console.log('Hello World!');
}

function message(callback){
    callback()
}
message(sum)
