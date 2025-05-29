// function sum(){
//     let i=0;
//     while(i<1000000){
//         i++;
//     }
//     return 1+1;
// }
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());

// ekhane sum function barbar call hocche but same output dicche karon tar argument same , sob gula call e same jinish return hocche . tahole eta ke kivabe amra memoize korte pari ? 

// Answer : 

// var result = null

// function sum(){
//     if(result){
//         return result
//     }
//     let i=0;
//     while(i<1000000000){
//         i++;
//     }
//     result = 1+1
//     return 1+1
// }
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());

// ekhn ami function ta ke memoized kore dilam . but eta optimized way na . jodio eta kaj korbe . 





// Closure way : 
// function memoizedSum(){
//     let result = null
//     return function(){
//         if(result) return result
//         let i=0;
//         while(i<10000000000){
//             i++;
//         }
//         result = 1+1
//         return 1+1
//     }
// }

// const sum = memoizedSum()
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());



// Dynamic way 
function memoizedSum(){
    let result = {}
    return function(n1, n2){
        if(result[`${n1},${n2}`]){
            console.log("Cached");
            return result[`${n1},${n2}`]
        }

        const sumResult = n1+n2;
        result[`${n1},${n2}`] = sumResult;
        return sumResult
    }
}

const sum = memoizedSum()
console.log(sum(2,3));
console.log(sum(3,1));
console.log(sum(3,1));
console.log(sum(5,1));
console.log(sum(4,2));
console.log(sum(4,2));
console.log(sum(4,2));
console.log(sum(9,2));
console.log(sum(1,1));
