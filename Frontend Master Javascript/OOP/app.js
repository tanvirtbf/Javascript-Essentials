// function createStudent(stuName, stuAge){
//   let obj = Object.create(checkAgeObject)
//   obj.name = stuName
//   obj.age = stuAge
//   return obj
// }

// const checkAgeObject = {
//   checkAge : function(){
//     if(this.age>20){
//       console.log('Yess')
//     }else{
//       console.log('Noo')
//     }
//   }
// }

// const student1 = createStudent('Tanvir Ahmed', 25)
// const student2 = createStudent('Sabbir Ahmed', 17)
// console.log(student1)
// console.log(student2)


const obj = {}
const key = "hello"

if(obj[key]){
  console.log('Grant Admin Permission')
}else {
  console.log('Blocked!')
}


