// function demo(){
//     const box = document.getElementByClassName("box-r")

//     box.style.backgroundColor = "blue"
//     box.style.backgroundColor = "red"
//     box.style.backgroundColor = "green"
//     box.style.backgroundColor = "yellow"
//     box.style.backgroundColor = "lime"
//     box.style.backgroundColor = "purple"
//     box.style.backgroundColor = "orange"
//     box.style.backgroundColor = "maroon"

// }


// Infinite Loop with Macro (setTimeout)
// function move(){
//     setTimeout(() =>{
//         let i=0
//         while(i<1000000000){
//             i++
//         }
//         console.log(1);
//         move()
//     })
// }

// Infinite Loop with Micro (promises)
// function move(){
//     Promise.resolve().then(move)
// }


// Event Loop Example Code : 
console.log(1);

setTimeout(() =>{
    console.log(2);
})

Promise.resolve().then(() =>{
    console.log(3);
})

requestAnimationFrame(() =>{
    console.log(4);
})

console.log(5);

// output : 
// 1
// 5
// 3
// 2
// 4

// kintu 2 er age 4 ashar kotha . kintu na . event loop jokhon RAF e ashbe tokhon dekhbe akhn ki ui update er somoy ? answer is no . karon tokhon 16ms hoy nai . karon browser kokhonoii sathe sathe ui update kore na . se changes gula batch kore rakhe and frame create er somoy ui update kore . kintu macro theke thaka setTimeout tokhon executable thakay seta age execute hoye gese 