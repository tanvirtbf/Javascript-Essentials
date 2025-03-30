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
// class Parent {
//   myName = 'Tanvir'
//   myAge = 23
//   showName (){
//     console.log(this.myName)
//   }
// }
// const person1 = new Parent()

// class Child extends Parent {

// }
// const childOfPerson1 = new Child()
// console.log(childOfPerson1)


// class Parent {
//   constructor(){
//     console.log('Parent Class Constructor!')
//   }
// }
// class Child extends Parent {

// }
// const child1 = new Parent()


// Super Keyword
// class Parent {
//   parentName = 'Tanvir'
//   constructor (name){
//     this.parentName = name
//   }
//   showParentName (){
//     console.log(this.parentName)
//   }
// }
// class Child extends Parent {
//   constructor (){
//     super("Tanvir Ahmed") 
//   }
// }

// const parent = new Parent()
// console.log(parent.showParentName())
// const child1 = new Child()
// console.log(child1.showParentName())
// console.log(parent.showParentName())


// Object-Oriented Programming (OOP)-এ inheritance নিয়ে কাজ করার সময় super keyword ব্যবহার করা হয়। কিন্তু অনেকেই super এর আসল কাজ সম্পর্কে পরিষ্কার নই বা কখন এটি ব্যবহার করতে হবে, তা ভালোভাবে জানি না।

// আজ চলুন super keyword-এর মূল কাজ এবং ব্যবহারিক দিক বিস্তারিতভাবে বুঝে নিই।

// 🔥 super keyword-এর প্রধান দুইটি কাজ:
// ✅ ১. Parent Class-এর Constructor-এ তথ্য পাঠানো
// Inheritance ব্যবহারের সময় child class-এর constructor থেকে parent class-এর constructor-এ ডাটা পাঠাতে super() ব্যবহার করা হয়। এটি parent class-এর প্রপার্টিগুলো ঠিকভাবে initialize করতে সাহায্য করে, যাতে child class স্বাভাবিকভাবে কাজ করতে পারে।

// 👉 বিষয়টি খুবই গুরুত্বপূর্ণ, কারণ যদি child class-এর constructor-এ super() ব্যবহার না করা হয়, তাহলে JavaScript একটি error দেবে, যেহেতু parent class-এর properties ঠিকভাবে initialize হবে না।

// ✅ ২. Parent Class-এর Method এক্সেস করা (Method Overriding Handling)
// Inheritance-এ parent এবং child class-এর method-এর নাম একই হতে পারে। তখন method overriding ঘটে, অর্থাৎ child class-এর method parent-এর method কে replace করে দেয়।

// কিন্তু যদি আমরা child class-এর method থেকে parent class-এর original method call করতে চাই, তাহলে super.methodName() ব্যবহার করতে হবে।

// 👉 এর ফলে:

// Parent class-এর method call করা সম্ভব হয়,

// Method overriding-এর কারণে কোনো conflict তৈরি হয় না,

// Child class তার নিজস্ব behavior retain করেও parent class-এর behavior ব্যবহার করতে পারে।

// 🎯 কেন super keyword এত গুরুত্বপূর্ণ?
// ✅ Code Reusability: Parent class-এর logic পুনরায় ব্যবহার করা যায়, যা DRY (Don't Repeat Yourself) principle মেনে চলে।
// ✅ Method Overriding Issue সমাধান: Parent class-এর method সরাসরি ব্যবহার করা যায়, যা function overriding-এর সমস্যাগুলো সমাধান করে।
// ✅ Object Construction সহজ করে: Parent class-এর properties এবং methods ঠিকভাবে inherit হয়, child class-এর code আরও ক্লিন ও ম্যানেজেবল থাকে।

// 💡 শেষ কথা:
// super() ছাড়া child class-এর constructor কাজ করবে না।

// super.methodName() method overriding-এর সমস্যা সমাধান করে।

// super inheritance ব্যবহারের ক্ষেত্রে অন্যতম গুরুত্বপূর্ণ একটি keyword।



// Some Example of Super keyword
// class Parent {
//   myName = 'Tanvir'
//   myAge = 25
//   constructor(name, age){
//     this.myName = name
//     this.myAge = age
//   }

//   showName(){
//     console.log('Parent Name : ', this.myName)
//   }
//   showAge(){
//     console.log('Parent Age : ', this.myAge)
//   }
// }

// class Child extends Parent {
//   constructor(){
//     super("Tanvir Ahmed", 26)
//   }

//   showDetails(){
//     console.log(this.myName)
//     console.log(this.myAge)
//     this.showName()
//     this.showAge()
//   }
// }

// const child1 = new Child()
// console.log(child1.showDetails())



// Private 
class Parent {
  #myName = 'Tanvir Ahmed'

  showName(){
    return this.#myName
  }

}
const parent = new Parent()
console.log(parent.showName())



