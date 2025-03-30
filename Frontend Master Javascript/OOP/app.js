// class Person {
//   myName = 'Tanvir Ahmed'

//   showName (){
//     return this.myName
//   }
// }

// const person1 = new Person()
// console.log(person1.showName())


// Same this goes in object

const obj = {
  myName : 'Tanvir',
  showName (){
    return this.myName
  }
}
console.log(obj.showName())
