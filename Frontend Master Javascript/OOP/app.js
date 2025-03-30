class Person {
  myName = 'Tanvir Ahmed'

  showName (){
    return this.myName
  }
}

const person1 = new Person()
console.log(person1.showName())

