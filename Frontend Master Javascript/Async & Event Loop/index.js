// callback code example : 
const num = 500;
function getData(callback){
    let i=0;
    while (i<1000){
        i++
    }
    const num2 = i
    callback(num2)
}

getData(addIt)

function addIt(num2){
    const result = num2 + num;
    console.log(result)
}