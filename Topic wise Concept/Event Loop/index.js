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


// Infinite Loop
function move(){
    setTimeout(() =>{
        let i=0
        while(i<1000000000){
            i++
        }
        console.log(1);
        move()
    })
}