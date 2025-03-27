function createStudent(stuName, stuAge){
  let obj = {}
  obj.name = stuName
  obj.age = stuAge
  obj.checkAge = function(){
    if(this.age>20){
      console.log('Yess')
    }else{
      console.log('Noo')
    }
  }
  return obj
}

const student1 = createStudent('Tanvir Ahmed', 25)
const student2 = createStudent('Sabbir Ahmed', 17)
console.log(student1.checkAge())
console.log(student2.checkAge())
