// class Person {
//   myName = 'Tanvir Ahmed'

//   showName (){
//     return this.myName
//   }
// }

// const person1 = new Person()
// console.log(person1.showName())


// Same this goes in object

// const obj = {
//   myName : 'Tanvir',
//   showName (){
//     return this.myName
//   }
// }
// console.log(obj.showName())



// Constructor 
// class Person {
//   myName = 'Tanvir Ahmed'

//   constructor (name){
//     this.myName = name
//     console.log(this.myName)
//   }
//   showName (){
//     return this.myName
//   }
// }

// const person1 = new Person("Tanvir")
// console.log(person1)



// Inheritance
class Parent {
  myName = 'Tanvir'
  myAge = 23
  showName (){
    console.log(this.myName)
  }
}
const person1 = new Parent()

class Child extends Parent {

}
const childOfPerson1 = new Child()
console.log(childOfPerson1)



