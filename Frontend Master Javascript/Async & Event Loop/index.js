// callback code example : 
// const num = 500;
// function getData(callback){
//     let i=0;
//     while (i<1000){
//         i++
//     }
//     const num2 = i
//     callback(num2)
// }

// getData(addIt)

// function addIt(num2){
//     const result = num2 + num;
//     console.log(result)
// }


// Promises code Example : 
// const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Data Recieved Successfully")
//     }, 3000)
// })

// let loading = true

// promise.then((data) => {
//     console.log(data, 'data')
// }).catch((err) => {
//     console.log(err, 'error')
// }).finally(() => {
//     loading=false
//     console.log("finally")
// })