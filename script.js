// String All Method
// *********Important Notes***************
// All string methods return a new string. They don't modify the original string.

// How i convert a number or others data type to string ?
// using toString() method
// let number = 123
// console.log(typeof(number)) // number
// let str = number.toString()
// console.log(typeof(str)) // string

// number.toString()
// console.log(typeof(number)) // number

// All String Method... (total 22 string methods)

// 1. length

// There are 4 methods for extracting string characters :
// 2. charAt()
// 3. charCodeAt()
// 4. at()
// 5. []

// There are 3 methods for extracting a part of a string:
// 6. slice(start,end)
// 7. substring(start,end)
// 8. substr(start,length)

// 9. toUpperCase()
// 10. toLowerCase()
// 11. concat()
// 12. trim()
// 13. trimStart()
// 14. trimEnd()
// 15. padStart()
// 16. padEnd()
// 17. repeat()
// 18. replace()
// 19. replaceAll()
// 20. split()
// 21. includes()
// 22. indexOf()

// 1. length
// let text = "ABCdf"
// console.log(text.length) // 5

// 2. charAt()
// The charAt() method returns the character at a specified index (position) in a string (mane charAt method diye kono text er specific index e ki character ase seta return hoy)

// Example :
// let text = "ABCDefgh"
// console.log(text.charAt(3)) // D
// console.log(text.charAt(1)) // B
// console.log(text.charAt(5)) // f
// console.log(text.charAt(64)) // null

// 3. charCodeAt()
// ai function er parameter e ekta string er index number deya hoy and sei index number e jei character exist kore sei character er unicode value return kore

// Example :
// let text = 'ABCDE'
// console.log(text.charCodeAt(3)) // 68
// console.log(text.charCodeAt(0)) // 65
// console.log(text.charCodeAt(1)) // 66
// console.log(text.charCodeAt(2)) // 67
// console.log(text.charCodeAt(4)) // 69
// upore A er unicode value 65
// B er unicode value 66
// C er unicode value 67
// D er unicode value 68
// E er unicode value 69 and so on...

// 4. at()
// eta similar charAt() er motoi . just parthokko hocche charAt() negative index number nite pare na kintu at() negative index number parameter e accept kore
// The at() method is a new addition to JavaScript. It allows the use of negative indexes while charAt() do not.

// kivabe negative index dile kaj kore ?
// negative index dile ulta dik theke string er character nite thake . suppose 'ABCDE' ekta string tar -2 index e ache D , -1 index e ache E, -4 index e ache B and so on...

// let text = 'ABCDE'
// console.log(text.at(2)) // C
// console.log(text.at(1)) // B
// console.log(text.at(-2)) //D
// console.log(text.at(-4)) // B

// []
// let text = 'ABCDE'
// console.log(text[2]) // C
// console.log(text[5]) // undefined
// console.log(text[4]) // E

// 6. slice(start,end)
// slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: start position, and end position (end not included).
// slice method accept negative value or index in parameter

// Example :- Slice out a portion of a string from position 7 to position 13:

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7,13)
// console.log(part) // Banana
// console.log(text.slice(1,4)) // ppl
// console.log(text.slice(3,8)) // le, B

// 7. substring(start,end)
// substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring().
// ekhane substring er ekta bishesh gun hocche jodi start position boro hoy and end position choto hoy, jemon text.slice(4,1) tahole substring automatic (4,1) ke (1,4) banaiya dibe and sei onujayii output dibe . kintu ai jinish ta slice method e nei .
// arekta bishesh gun hocche jodi negative value deya hoy tahole substring automatic seta ke 0 hishebe count kore . tar mane text.substring(-3,2) dile seta actually text.substring(0,2) hishebe treat kore

// let text = 'ABCDE'
// console.log(text.substring(-4,2)) // AB (ekhane -4 ke 0 dhore nise and 0 theke 2 er ag porjonto mane 1 index porjonto character print korse)
// console.log(text.substring(3,-2)) // ABC (ekhane -2 ke 0 dhore nise and 0 theke 2 porjonto character print korse)
// console.log(text.substring(4,1))

// 8. substr(start,length)

// substr() is similar to slice(). The difference is that the second parameter specifies the length of the extracted part. (second parameter holo koyta character se nibe and first parameter holo koto number index theke neya start korbe)

// let text = 'ABCDEFG'
// console.log(text.substr(2,4)) // CDEF
// console.log(text.substr(3,0)) // null
// console.log(text.substr(3,1)) // D

// 9. toUpperCase()
// let text = 'Hello World!'
// text.toUpperCase() // HELLO WORLD!
// console.log(text) // Hello World!
// // But..
// let newText = text.toUpperCase()
// console.log(newText) // HELLO WORLD!
// console.log(text) // Hello World!

// 10. toLowerCase()
// let text = "Hello World!"
// let newText = text.toLowerCase();  // hello world!
// console.log(newText) // hello world!
// console.log(text.toLowerCase()) // hello world!

// 11. concat()
// concat() joins two or more strings:

// let text1 = 'Hello'
// let text2 = 'World'
// let text3 = text1.concat(' ',text2)
// console.log(text3) // Hello World

// let anotherText = text1.concat('My name is ',text2,' Tanvir Ahmed')
// console.log(anotherText) //HelloMy name is World Tanvir Ahmed

// 12. trim()
// The trim() method removes whitespace from both sides of a string:

// let text = '        Hello World          '
// let trimedText = text.trim()
// console.log(trimedText) // Hello World

// 13. trimStart()
// ECMAScript 2019 added the String method trimStart() to JavaScript.
// The trimStart() method works like trim(), but removes whitespace only from the start of a string.

// let text = '       Hello World        '
// let trimStart = text.trimStart()
// console.log(trimStart) // 'Hello World             '

// 14. trimEnd()
// ECMAScript 2019 added the string method trimEnd() to JavaScript.

// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

// let text = '       Hello World        '
// let trimEnd = text.trimEnd()
// console.log(trimEnd) // '             Hello World'

// 15. padStart()
// The padStart() method pads a string from the start.
// It pads a string with another string (multiple times) until it reaches a given length.

// Examples:- Pad a string with "0" until it reaches the length 4:
// let text = '5'
// let newText = text.padStart(4,'0')
// console.log(newText) // 0005

// Example :- Pad a string with "x" until it reaches the length 4:
// let text = "5";
// let padded = text.padStart(4,"x");

// some notes about padStart
// The padStart() method is a string method.
// To pad a number, convert the number to a string first.
// See the example below.
// let numb = 5;
// let text = numb.toString();
// let padded = text.padStart(4,"0");

// 16. padEnd()
// The padEnd() method pads a string from the end.
// It pads a string with another string (multiple times) until it reaches a given length.

// let text1 = '0131'
// let lastText = text1.padEnd(11,'*')
// console.log(lastText) // 0131*******

// Some Notes about padEnd
// The padEnd() method pads a string from the end.
// It pads a string with another string (multiple times) until it reaches a given length.
// See the example below.
// let numb = 5;
// let text = numb.toString();
// let padded = text.padEnd(4,"0");

// 17. repeat()

// The repeat() method returns a string with a number of copies of a string.
// The repeat() method returns a new string.
// The repeat() method does not change the original string.

// let text = 'Hello World!'
// let result = text.repeat(3)
// console.log(result) // Hello World!Hello World!Hello World!

// 18. replace()
// The replace() method replaces a specified value with another value in a string:

// let text = 'Hello World!'
// let newText = text.replace('Hello','Hiii')
// console.log(newText) // Hiii World!
// text.replace('Hello','Hi')
// console.log(text) // Hello World!

// let newText2 = text.replace('!','?')
// console.log(newText2) // Hello World?

// 19. replaceAll()

// 20. split()

// A string can be converted to an array with the split() method: (split method diye string ke array te convert kora jay)

// let text = 'Hello My name is Tanvir Ahmed'
// let arr = text.split(" ")
// console.log(arr) // (6) ['Hello', 'My', 'name', 'is', 'Tanvir', 'Ahmed']

// let text1 = 'Hello-My-Name-Is-Tanvir-Ahmed'
// let arr1 = text1.split('-')
// console.log(arr1) // (6) ['Hello', 'My', 'Name', 'Is', 'Tanvir', 'Ahmed']

// upore text ke split korse " " space er vittite string gula ke alada korse and serial maintain kore rakhse

// 21. includes()

// The includes() method returns true if a string contains a specified string.
// Otherwise it returns false.
// The includes() method is case sensitive.

// let text = "Hello world, welcome to the universe.";
// let result = text.includes("world");
// console.log(result) // true
// console.log(text.includes('wo')) // true

// includes method er second optional parameter holo index number . kon index number theke khuja start korbe seta sekhane deya hoy
// Example :
// console.log(text.includes('He',2)) // false
// console.log(text.includes('He',0)) // true

// 22. indexOf()

// The indexOf() method returns the position of the first occurrence of a value in a string.
// The indexOf() method returns -1 if the value is not found.
// The indexOf() method is case sensitive.

// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("welcome");
// console.log(result) // 13 (karon 13 number index theke 'welcome' string start hoise)

// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("Welcome");
// console.log(result) // Welcome bolte kono string nei text variable er moddhe . karon indexOf method case sensitive

// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf('e')
// console.log(result) // 1 (first e paise 1 number index e . tai return 1)
// console.log(text.indexOf("e")) // 1

// *********Important Notes***************

// All string methods return a new string. They don't modify the original string.

// *********Important Notes***************

// Math Object

// Methods (Without Argument)
// toUpperCase()
// toLowerCase()
// trim()
// trimStart()
// trimEnd()
// length

// const names = 'Tanvir'
// console.log(names[2]) //result : n
// console.log('helloWorld'[6])
// const message = "Hello World"
// console.log(message.length)
// const upperMessage = message.toUpperCase();
// console.log(upperMessage)
// const lowerMessage = message.toLowerCase();
// console.log(lowerMessage)
// const trimMethod = '         hello world        ';
// console.log(trimMethod.trim())
// const trimStart = trimMethod.trimStart();
// console.log(trimStart)
// const trimEnd = trimMethod.trimEnd();
// console.log(trimEnd)
// const chaining = '   hello world   '.trim().toUpperCase(); //chaining
// console.log(chaining)

// const faltuMessage = '   Hi, I am Tanvir    '
// const finalMessage = 'Hi, I am Tanvir'.toUpperCase()
// const a = 'Tanvir Sadia Maymuna Humaira'
// console.log(a.toLowerCase())
// console.log(a.includes('Sadia'))
// console.log(a.indexOf('ra'))
// const replacedA = a.replace('Sadia', 'Ayesha')
// console.log(replacedA)
// const nothingReplace = replacedA.replace('Khadiza','Hello')
// console.log(nothingReplace)

// const all = 'aaaaaa'
// console.log(all.replaceAll('a','b'))

// const m = 'Hello'
// const n = ', I am '
// const wife = 'Sadia'
// const final = m.concat(n,'Tanvir ', 'My Wife Name is ', wife)
// console.log(final)

// Methods (With Argument)
// includes() ans: true or false(is character exist or not)
// indexOf()  ans: return the character index number and not match character return -1 value
// replace()
// replaceAll()
// concat()
// padStart()
// padEnd()
// charAt()
// charCodeAt()
// split()

//includes method
// const message = 'Hello, I am Tanvir'
// const isHere = message.includes(', a')
// console.log(isHere)

//indexof method
// const message = 'Hello World i Am Tanvir ahmed'
// const isHere = message.indexOf('ias')
// console.log(isHere)

//replace method
// const message = 'Hello, I am Tanvir'.replace('e','E')
// console.log(message)
// console.log(message.replaceAll('a','A'))

//concat method
// const messageOne = 'Hello'
// const messageTwo = 'I am'
// const messageThree = 'Tanvir'
// const finalMessage = messageOne.concat(' ',messageTwo, ' ' ,messageThree)
// console.log(finalMessage)

//includes method
// const hello = 'hello world'
// console.log(hello.includes('llo',2)) //true

//indexOf method
// console.log(hello.indexOf('hello',2)) // false

// const num = 123.321;
// console.log(Math.floor(num))
// console.log(Math.ceil(num))
// console.log(Math.round(num))
// console.log(Math.random())

// Ternary Operator
// debugger
// const userName = 5 > 2 ? 'Tanvir' : 'Ahmed'
// const gender = 'F'
// const userMessage = `${'' ? 'She' : 'He'} is a college student`
// console.log(userMessage)
// const result = null ? 'Tanvir' : '' ? 12 : 1 ? 11 : 22
// console.log(result)





// How to See variable address in dev tools
// const firstName = 'Tanvir'
// const lastName = 'Ahmed'
// const userAge = 25
// const isGraduate = false
// const firstName = 'Tanvir'
// const firstRule = 'Tanvir'
// console.log(firstName === firstRule) // true
// ekhane 2 ta variable er memory address @1358351 . jodio variable name same na . kintu jehetu value same tai same memory address e 2 ta variable ke create kora hoise . tai true ashce
// important thing is string primitive data type . and primitive data type value compare kore . value same hoile true
// const userAge = 15
// const isGraduate = false //@75
// const hasJob = false //@75
// const isStudent = true // @73 fixed for true value
// const isNull = null // @71 address is fixed everywhere
// const isUndefined = undefined // @67 fixed for undefined value

// let name1 = 'Tanvir' // @2129197
// let name2 = 'Tan'+'vir' // @2194955
// console.log(name1 === name2) // true
// ekhane name1 and name2 er memory address change houyar poreo name1 === name2 true ashce. karon string primitive data type . primitive data type sob somoy value compare kore . value same hoileii true

// ****Important Note :
// const firstName = 'Tanvir' // @1757053 address
// const name = 'Tanvir' // @1757053 address
// console.log(firstName === name ) // Ans : true
// // But....
// const fname = 'Tanvir' // @1757053
// const lname = 'Tan' + 'vi' + 'r' // @2676783
// console.log(fname === lname) // Ans : true
// ekhane same variable address na hoyeo output true ashce karon primitive data type kokhono memory address diye compare kore na . primitive data type value diye compare kore . value same hoile true hobe jodio memory address change thakuk



//Objects => Non-premitive Data Type
// const firstName = "Tanvir"; // @1757053
// const lastName = "Tan" + "vir"; // @2457343
// console.log(firstName === lastName); // Ans : true

// const user1 = {
//   firstName: "Tanvir",
//   "last Name": "Ahmed",
//   age: 25,
//   hasJob: true,
// }; // @620689

// const user2 = {
//   firstName: "Tanvir",
//   "last Name": "Ahmed",
//   age: 25,
//   hasJob: true,
// }; // @620689

// console.log(user1 === user2); // Ans : false

// Note : user1 and user2 er value same diye create kora holeo tader variable address same na and user1 === user2 is false . karon object non-primitive . tai ekhane value compare na hoye memory address compare hoise .

// var user1 = {
//   firstName : 'Tanvir',
//   lastName : 'Ahmed'
// } // @3156889
// var user2 = {
//   firstName : 'Tanvir',
//   lastName : 'Ahmed'
// } // @3156891
// console.log(user1 === user2) // false

// key value pair
// const hello = {
//   "firstName" : "Tanvir",
//   'lastName' : 'Ahmed',
//   address : 'Dhaka',
//   'userAge' : 25
// }
// Note : object er key by default string hoye thake . eta ke double qoute or single quote na dileo eta string hishebei count hobe

// var user1 = {
//   firstName : 'Tanvir',
//   lastName : 'Ahmed'
// } // @3156889
// var user2 = {
//   firstName : 'Tanvir',
//   lastName : 'Ahmed'
// } // @3156891
// console.log(user1 === user2) // false

// let user1 = {
//   firstName : 'Tanvir', // @5302035
//   lastName : 'Ahmed'
// } // @3156889
// let user2 = {
//   firstName : 'Tanvir', // @5302035
//   lastName : 'Ahmed'
// } // @3156891
// console.log(user1 === user2) // false
// console.log(user1.firstName === user2.firstName) // true
// upore user1 and user2 er khetre firstName er value jehetu 2 khetreii same tai user1===user2 false houyar poreo user1.firstName===user2.firstName true hoise . karon firstName ekhane primitive , jodio tara non-primitive er vitore ase

// const user1 = {
//   firstName : 'Tanvir',
//   lastName : 'Ahmed',
//   age : 25
// } // @236161
// const user2 = {
//   firstName : 'Tanvir',
//   lastName : 'Tanvir',
//   age : 25
// } // @236167
// console.log(user1===user2) // false
// console.log(user1.firstName===user2.lastName) // true

// const user1 = {
//   firstName : 'Tanvir', // @5750265
//   lastName : 'Ahmed'
// } // @3156889
// const user2 = {
//   fname : 'Tanvir', // @5750265
//   lastName : 'Ahmed'
// } // @3156891
// console.log(user1 === user2) // false
// console.log(user1.firstName === user2.fname) // true
// upore firstName and fname 2 ta variable er name vinno houyar poreo jehetu value same tai tara same memory address e ase and user1===user2 false houyar poreo tara true . karon tara primitive data type

// const user2 = {
//   'first Name': 'Sadia',
//   'last Name': 'Ahmed',
//   'age': 15,
//   'has Job': false,
// }
// const pri1 = 'hello'
// const pri2 = 'hello'
// console.log(user1.firstName)
// console.log(user1['lastName'])
// console.log(user1['a'+'g'+'e'])
// console.log(user2[`${ '' ? 'age' : 'hasJob'}`])
// console.log(user2)
// user2.age = 16 // value re-pain
// user2['is-Student'] = 'student' // added a new property

//Object inside Object
// const obj = {
//   firstName: "Tanvir",
//   lastName: "Ahmed",
//   address: {
//     town: "Dhaka",
//     elaka: "Sonir Akhra",
//     moreDetails: {
//       more: "Polashpur",
//       age: 122,
//     },
//   },
// };

// Memory Allocation :

// obj // @446743
// {
//   firstName : 'Tanvir',
//   lastName : 'Ahmed',
//   address : @658734
// }

// address // @658734
// {
//   town : 'Dhaka',
//   elaka : 'Sonir Akhra',
//   moreDetails : @436464
// }

// moreDetails //@436464
// {
//   more : "Polashpur",
//   age : 122
// }

// Note :  obj object tar vitore address object , address object er vitore moreDetails object ache . ekhane address object and moreDetails object 2 ta alada alada memory te create hoyeche . tarpor obj object er address key te address object er memory address ashce , tar value ashe nai . then address object er moreDetails key te moreDetails key er memory address ashce , tar value ashe nai . evabeii tara nested obosthay address e point kore thake .

// Object.seal(obj) and Object.freeze(obj)

// Object.seal(obj)
// const user = {
//   fname : 'Tanvir',
//   lname : 'Ahmed',
//   address : {
//     state : 'Dhaka',
//     city : 'Polashpur'
//   }
// }
// Object.seal(user)
// Object.seal function ta object ke delete korte dibe na + kono kichu new add korte dibe na kintu object er kono property er value update korte dibe


// Object.freeze(obj)
// const user = {
//   fname : 'Tanvir',
//   lname : 'Ahmed',
//   address : {
//     state : 'Dhaka',
//     city : 'Polashpur'
//   }
// }
// Object.freeze(user)
// Object.freeze use korle oi object e r keu kokhono property add korte parbe na + property delete korte parbe na and property value update korte parbe na . mot kotha kichui korte parbe na

// In keyword
// object er vitore kono property ache kina check korar jonno use hoy
// const user = {
//   fname : 'Tanvir',
//   lname : 'Ahmed',
//   address : {
//     state : 'Dhaka',
//     city : 'Polashpur'
//   }
// }
// console.log('fname' in user ) // Ans : True
// console.log('designation' in user) // Ans : false
// console.log('address' in user) // Ans : true
// console.log('state' in user) // Ans : false

// console.log('my addresss' in obj)
// const arr = [1,2,3,4,5]
// const obj = {names:'tanvir'}
// console.log(typeof(arr))
// console.log(typeof(obj))

// const fruits = ['Mango','Banana','Jackfruits','Grapes','Dates']

// console.log(fruits.push('Chal','Dal'))
// console.log(fruits.pop())
// console.log(fruits.shift())
// console.log(fruits.unshift())
// console.log(fruits.concat(['hello','gelo'])) // ['Mango', 'Banana', 'Jackfruits', 'Grapes', 'Dates', 'hello', 'gelo']
// console.log(fruits.indexOf('Banana')) // 1 (Banana in 1 number index)
// console.log(fruits.includes('Mango')) // true (Mango is exist in fruits array, so true, otherwise return false)
// console.log(fruits.reverse()) // ['Dates', 'Grapes', 'Jackfruits', 'Banana', 'Mango'] (fruits array er value order ultaiya dise)

// const firstName = 'Tanvir'
// let lastName = 'Tanvir'

// const userName = {
//   firstName : 'Tanvir',
//   lastName : 'Ahmed',
// }

// let userName2 = userName
// userName2.firstName = 'Sadia'
// console.log(userName)
// const user1 = {firstName:'Tanvir',lastName:'Ahmed'}
// let user2 = {...user1}





// Arrays
// let a = ['Mango','Banana','Jackfruits','Grapes','Dates']

// Push Method
// a.push('Kola','Aam')
// console.log(a)
// Ans : ['Mango', 'Banana', 'Jackfruits', 'Grapes', 'Dates', 'Kola', 'Aam']
// push method diye array er last e kono value add kora jay

// Pop Method
// a.pop()
// a.pop()
// console.log(a)
// Ans : ['Mango', 'Banana', 'Jackfruits', 'Grapes', 'Dates']
// pop method diye array last theke value delete kora hoy

// Unshift Method (opposite of Push Method)
// a.unshift('kola','ruti')
// console.log(a)
// Ans : ['kola', 'ruti', 'Mango', 'Banana', 'Jackfruits', 'Grapes', 'Dates']
// eta push method er ulta kaj kore . mane array er first e value add kore

// Shift Method (Opposite of Pop Method)
// a.shift()
// a.shift()
// console.log(a)
// Ans : ['Mango', 'Banana', 'Jackfruits', 'Grapes', 'Dates']
// eta pop method er ulta kaj kore . mane array er first theke value delete kore


// Concat Method 
// The concat() method concatenates (joins) two or more arrays.
// The concat() method returns a new array, containing the joined arrays.
// The concat() method does not change the existing arrays.

// Example : 
// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let arr = arr1.concat(arr2)
// console.log(arr) // [1, 2, 3, 4, 5, 6]
// let newArray = arr.concat(arr1,arr2)
// console.log(newArray) // [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]


// indexOf Method 

// The indexOf() method returns the first index (position) of a specified value.
// The indexOf() method returns -1 if the value is not found.
// The indexOf() method starts at a specified index and searches from left to right (from the given start postion to the end of the array).
// By default the search starts at the first element and ends at the last.
// Negative start values counts from the last element (but still searches from left to right).

// Example : 
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let index = fruits.indexOf("Apple");
// console.log(index) // 2
// let newIndex = fruits.indexOf('Hello')
// console.log(newIndex) // -1

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
// let index = fruits.indexOf("Apple", 3); // should start finding at index 3
// console.log(index) // 4

// let index1 = fruits.indexOf('Orange',3) 
// console.log(index1) // -1 (fruits array er 3 number index theke find kora start korse tai 1 number index e thaka Orange khuje pay nai tai -1 return kroe dise)



// includes Method 

// The includes() method returns true if an array contains a specified value.
// The includes() method returns false if the value is not found.
// The includes() method is case sensitive.

// Syntax : array.includes(element, start)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.includes("Mango")) // true
// console.log(fruits.includes('hello')) // false



// reverse Method
// The reverse() method reverses the order of the elements in an array.
// The reverse() method overwrites the original array.****

// let arr = [1,2,3,4,5]
// arr.reverse()
// console.log(arr) // [5, 4, 3, 2, 1]
// reverse method original array ke modify kore 




// sort Method 

// The sort() method sorts the elements of an array.
// The sort() method sorts the elements as strings in alphabetical and ascending order.
// The sort() method overwrites the original array.****

// Create an Array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Sort the Array
// fruits.sort();
// console.log(fruits) // ['Apple', 'Banana', 'Mango', 'Orange']

// let arr = [5,3,7,1,2]
// arr.sort()
// console.log(arr) // [1, 2, 3, 5, 7]


// slice Method

// The slice() method returns selected elements in an array, as a new array.*****
// The slice() method selects from a given start, up to a (not inclusive) given end.
// The slice() method does not change the original array.******

// Syntax :
// array.slice(start, end)

// let arr = [1,2,3,4,5,6]
// let newArr = arr.slice(2,4)
// console.log(newArr) // [3, 4] (2 number index theke 4 er ag porjonto, mane 3 number index porjonto nise)

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const myBest = fruits.slice(-3, -1);
// console.log(myBest) //  ['Lemon', 'Apple']

// pichon theke dhorle -1 index e ache Mango , -2 = Apple , -3 = Lemon , -4 = Orange and -5 = Banana . tai -3 theke -1 er ag porjonto , mane -2 porjonto array hocche [Lemon, Apple]




// splice Method

// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.******

// Syntax : array.splice(index, count, item1, ....., itemX)
// index - 	Required. The index (position) to add or remove items. A negative value counts from the end of the array.
// count - This is Optional. Number of items to be removed.
// item1,....,itemx - This is Optional. The new elements(s) to be added.

// Example : 

// Create an Array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, remove 2 items
// fruits.splice(2, 2);
// console.log(fruits) // ['Banana', 'Orange']

// Example : 

// Create an Array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, remove 1 item, add "Lemon" and "Kiwi"
// fruits.splice(2, 1, "Lemon", "Kiwi");
// console.log(fruits) // ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Mango']




// Deep Copy and Shallow Copy
// let firstName = 'Tanvir' // @39939
// let name = firstName // @39939

// name = name + ' Ahmed'
// console.log(name === firstName+' Ahmed') // Ans : true
// jekono obosthay primitive data type er khetre 2 ta variable er value same hoile 2 ta variable equal hoy . tar mane equality check korle true ashbe

// let fruits = ['Mango','Banana','Jackfruits','Grapes','Dates']
// let newFruits = ['Mango','Banana','Jackfruits','Grapes','Dates']
// console.log(fruits===newFruits) // false (karon tara non-premitive)

// let fruits = ['Mango','Banana','Jackfruits','Grapes','Dates']
// let newFruits = fruits
// console.log(fruits===newFruits) // true
// ekhetre true ashce karon newFruits = fruits korar somoy newFruits = fruits er memory address newFruits er moddhe jay . tar mane newFruits = [memory address of fruits] . tar mane fruits and newFruits same memory address e point kora ase . tai fruits e jodi kono change kori newFruits e same change hobe
// fruits.push('new Fruits')
// console.log(fruits) // ['Mango', 'Banana', 'Jackfruits', 'Grapes', 'Dates', 'new Fruits']
// console.log(newFruits) // ['Mango', 'Banana', 'Jackfruits', 'Grapes', 'Dates', 'new Fruits']
// console.log(fruits===newFruits) // true

// let fruits = ['Mango','Banana','Jackfruits','Grapes','Dates']
// let arr = fruits
// jehetu fruits variable e tar value na thake tar address thake tai let arr = fruits ei code e fruits er bodole tar memory address ashce . tar mane let arr = [memory address of fruits]
// arr.push('hello')
// console.log(fruits) // ['Mango', 'Banana', 'Jackfruits', 'Grapes', 'Dates', 'hello']
// console.log(arr) // ['Mango', 'Banana', 'Jackfruits', 'Grapes', 'Dates', 'hello']
// karon ekhane arr and fruits 2 taii same memory address e point kora chilo tai arr e change korle fruits e hobe, fruits e korle arr e hobe

// Note :
// let arr1 = [1,2,3]
// let arr2 = arr1

// let obj1 = {fname : 'Tanvir', age : 24}
// let obj2 = obj1
// ekhane equal sign operator diye same value onno variable e ante gele ager memory address tai point hoy
// arr1 address is : @123456
// arr2 address is : @123456
// obj1 address is : @434343
// obj2 address is : @434343

// ******Important Notes*********
// Why need shallow copy and deep copy?
// normal copy :
// let obj1 = {fname : 'Tanvir', age : 24}
// let obj2 = obj1
// evabe copy korle somossha hocche obj1 e kichu change korle obj2 te change hoy, obj2 te kichu change korle obj1 eo change hoy . karon tara same memory address e point kora thake . karon obj2 = obj1 korar maddhome obj1 er memory address obj2 te store hoise .
// kintu evabe copy korle to project e somossha hobe . tai amon vabe copy korte hobe jate obj1 change korle obj2 change na hoy, obj2 change korle jate obj1 change na hoy . tar jonno obj1 and obj2 alada alada memory te store korte hobe . tar jonno need shallow copy . shallow copy korle obj1 er same value obj2 te ashe kintu tara alada alada memory address e point kora thake
// Deepy copy need :
// shallow copy just 1 stage porjonto copy korte pare . kintu jokhon object er vitor object thake, array er vitor array thake , or object er vitor array thake , mot kotha kono non-primitive er vitor arekta non-premitive thake tokhon setake copy korte pare na alada alada memory te rekhe . seikhetre vitorer sei non-premitive ke same memory address e rekhe dey . tai ektay change korle arektay o change hoye jay . ai problem solve korte ashe deep copy . deep copy diye vitorer nested sob non-premitive keo alada alada memory te rekehe copy korte pare

// Shallow Copy with Object.assign(newItem,oldItem)
// let obj1 = {
//   fname : 'Tanvir',
//   lname : 'Ahmed',
//   age : 25
// } // @123456
// let obj2 = {} // @546434
// Object.assign(obj2,obj1)
// console.log(obj1 === obj2) // Ans : false
// ekhane obj1 and obj2 er memory address not same
// let obj1 = {
//   fname: 'Tanvir',
//   age: 25
// } // @6973183
// let obj2 = {} // @6973187
// obj1 and obj2 is not same memory address . that's why obj1===obj2 false.
// now obj1 copy and paste in obj2 using Object.assign
// Object.assign(obj2,obj1)
// console.log(obj2) // {fname: 'Tanvir', age: 25}
// console.log(obj1===obj2) // false
// tate obj1 er sob value obj2 te ashlo kintu alada alada memory address e point holo


// Shallow Copy with spread operator
// let obj1 = {
//   fname : 'Tanvir',
//   lname : 'Ahmed',
//   age : 24,
// } // @123456
// let obj2 = {...obj1} // @343434
// console.log(obj1 === obj2)

// let arr1 = [1,2,3]
// let arr2 = [...arr1]
// console.log(arr1 === arr2)


// Shallow Copy with for loop
// numbers = [1, 2, 3];
// numbersCopy = [];

// for (i = 0; i < numbers.length; i++) {
//   numbersCopy[i] = numbers[i];
// }



//Shallow Copy with while loop
// numbers = [1, 2, 3];
// numbersCopy = [];
// i = -1;

// while (++i < numbers.length) {
//   numbersCopy[i] = numbers[i];
// }

// Shallow Copy with Map
// numbers = [1, 2, 3];
// numbersCopy = numbers.map((x) => x);

// Shallow Copy with filter method
// [1, 2, 3].filter((x) => x % 2 === 0);
// // [2]
// numbers = [1, 2, 3];
// numbersCopy = numbers.filter(() => true);

// Shallow Copy with Reduce
// numbers = [1, 2, 3];

// numbersCopy = numbers.reduce((newArray, element) => {
//   newArray.push(element);

//   return newArray;
// }, []);

// Shallow Copy with Slice
// let fruits = ['Mango','Banana','Jackfruits','Grapes','Dates']
// let newFruits = fruits.slice() // index number na dile full array copy hobe
// console.log(newFruits) // ['Mango', 'Banana', 'Jackfruits', 'Grapes', 'Dates']
// console.log(fruits===newFruits) // false
// let anotherCopy = fruits.slice(1,4) // fruits er 1 index theke 4 index copy hobe
// console.log(anotherCopy) // ['Banana', 'Jackfruits', 'Grapes']
// console.log(fruits===anotherCopy) // false

// Shallow Copy with Concat method
// let fruits = ['Mango','Banana','Jackfruits','Grapes','Dates']
// let newFruits = [].concat(fruits)
// console.log(newFruits) // ['Mango', 'Banana', 'Jackfruits', 'Grapes', 'Dates']
// console.log(fruits === newFruits) // false

// let fruits = ['Mango','Banana','Jackfruits','Grapes','Dates']
// fruits.push('Amm') // add last in element in same reference array
// fruits.pop() // delete last element in same reference array
// let allFruits = fruits
// console.log(allFruits===fruits)
// let allFruits = []
// Object.assign(allFruits,fruits)
// console.log(allFruits === fruits)
// let allFruits = [...fruits]
// console.log(allFruits===fruits)

// let namArray = ['tanvir','sadia','maymuna','humaira']
// let namObj = {
//   firstName:'Tanvir',
//   lastName:'Ahmed',
//   address:'Sonir Akhra'
// }
// let namObjCopy = namObj
// console.log(namObjCopy===namObj)

// shallow copy with Object.assign
// let namArrayCopy = []
// Object.assign(namArrayCopy,namArray)
// console.log(namArray===namArrayCopy)

//shallow copy with spread operator
// let namArrayCopy = [...namArray]
// console.log(namArray===namArrayCopy)
// namArrayCopy[5]='lamia'
// console.log(namArray,namArrayCopy)

// Problem of Shallow Copy
// const user1 = {
//   firstName : 'Tanvir',
//   lastName : 'Ahmed',
//   address : {
//     city : 'Dhaka',
//     country : 'Bangladesh'
//   }
// }
// const user2 = {...user1}
// console.log(user1===user2) // false (karon spread operator diye shallow copy kora hoise)
// // But...
// console.log(user1.address === user2.address) // true
// // ekhane shallow copy nested obosthay copy korte pare na . tar jonno deep copy korte hobe
// user2.address.city = 'Cumilla'
// console.log(user1.address.city) // Cumilla
// console.log(user2.address.city) // Cumilla
// ekhane user2 er address change koray user1 eo change hoise
// ai karone deep copy dorkar jate nested obosthay o copy hoite pare alada alada memory address e

//Deep Copy
// const hello = {
//   firstName:'Tanvir',
//   lastName:'Ahmed',
//   address:{
//     country:'Bangladesh',
//     city:'Dhaka',
//   }
// }
//Deep Copy using spreed operator
// let copyHello = {...hello, address:{...hello.address}}
// console.log(copyHello===hello)

// copyHello.address.city = 'New York'
// hello.address.country = 'USA'
// console.log(copyHello)
// console.log(hello)

//Deep Copy using JSON technique
// let p1 = {...hello}
// p1 = JSON.stringify(p1)
// let copyHello = JSON.parse(p1)
// copyHello.address.city = 'New York'
// hello.address.country = 'USA'
// console.log(copyHello)
// console.log(hello)

// Combined Assignment Operators
// 1. += (Addition Assignment Operator)
// 2. -= (Subtraction Assignment Operator)
// 3. %= (Reminder Assignment Operator)
// 4. *= (Multiplication Assignment Operator)
// 5. /= (Division Assignment Operator)
// 6. **= (Exponentiation Assignent Operator)
// 7. ++ (Increment)
// 8. -- (Decrement)

// += (Addition Assignment Operator)
// let num = 5;
// debugger
// num = num + 2;
// num = num + 2;
// num = num + 2;
// console.log(num) // 11
// num += 5
// num += 5
// num += 5

// -= (Subtraction Assignment Operator)
// let num = 5;
// num = num - 4;
// num = num - 4;
// num = num - 4;
// console.log(num) // -7
// num -= 5
// num -= 5
// num -= 5
// console.log(num) // -22

// %= (Reminder Assignment Operator)
// let num = 5;
// num = num % 2; // 5%2 = 1
// num = num % 2; // 1%2 = 1
// console.log(num) // 1
// let num = 101
// num %=3
// num %=3
// console.log(num) // 2

// *= (Multiplication Assignment Operator)
// let num = 5;
// num = num * 2; // 10
// num = num * 2; // 20
// console.log(num) // 20
// num *= 2
// num *= 2
// num *= 2
// console.log(num) // 160

// /= (Division Assignment Operator)
// let num = 5;
// num = num / 2;
// num = num / 2;
// console.log(num) // 1.25
// let num = 102;
// num /= 2 // 51
// num /= 2 // 25.5
// num /= 2 // 12.75
// console.log(num) // 12.75

// ++ (Increment)
// let num = 5
// num++
// console.log(num) // 6
// num++
// num++
// num++
// console.log(num) // 9
// num++ hoile age num=5 print hobe, then num er value 1 increase hobe. jodi ++num hoy tahole age 1 increase hobe then num value print hobe .
// num++ er khetre age num print hoy then increase hoy tai jodi console.log(num++) hoy tahole 5 print hoy . karon ++ houyar ageii num print hoye jay .
// ++num er khetre age 1 increase hoy then num print hoy tai console.log(++num) korle 6 print hoy .
// let num = 5;
// console.log(num++) // 5
// console.log(num) // 6
// let num = 5
// let newNum = num++
// console.log(newNum) // 5
// let num = 5
// let anotherNewName = ++num
// console.log(anotherNewName) // 6
// ekhane newNum e num++ assign korle se first time num er value store kore 5 . pore num er value 1 increase kora ta se store korte pare na .
// kintu second example e ++num assign koray age num er value 1 increase hoise tarpor num er update value 6 anotherNewName e assign hoise

// Another Example :
// let num = 5
// let newNum = num++
// console.log(newNum) // 5 (but num er value 6 hoye gese already)
// let anotherNum = ++num
// console.log(anotherNum) // 7 (ekhane age chilo num = 6 , then ++num er khetre age num er value 1 barse, then num store hoise anotherNum e . tai value 7 ashace)

// Same concept in --(Decrement Operator)

// **Important Notes**
// Behind the scene ++ and -- operator use += and -= operator
// Example :
// let num = 5
// num = num + 1 === num += 1 === num++ (true)
// num = num -1 === num -= 1 === num-- (true)

// While Loop

//Function
// function hello(){
//   console.log('hello world')
// }
// hello()
// const hellos = () => {
//   console.log("Hello World!")
// }
// function num (){
//   console.log("hello world")
// }
// const numfun = num()

// Return Keyword
// function testReturn(){
//   console.log('hello world')
//   return 5 + 5
// }
// const funVal = testReturn()
// console.log(funVal)

// String
// const fname = 'Tanvir'
// const repoCount = 75

// string interpolation
// console.log(`${fname} ${repoCount} Value`)

// Access character using index
// console.log(fname[1]) // a
// console.log(repoCount[0]) // undefined // number not access with index

// // toUpperCase
// console.log(fname.toUpperCase()) // TANVIR

// // charAt
// console.log(fname.charAt(3)) // v (fname variable er 3 no. index value)

// // indexOf
// console.log(fname.indexOf('v')) // 3 (fname variable er 'v' kon index)

// const gameName = 'Tanvir-Ahmed'

// // Substring
// const newGameName = gameName.substring(0,4)
// console.log(newGameName) // Tanv (0 index theke 4 index er age 3 index porjonto)

// // slice
// const anotherName = gameName.slice(-8,4)
// console.log(anotherName) // ans will be similer with substring , but only difference is slice can set negative value , but substring are not

// // trim
// const newString1 = '       Tanvir  Ahmed      '
// console.log(newString1.trim()) // Tanvir  Ahmed

// // replace
// const url = 'https://tanvir.com/tanvir ahmed'
// const newUrl =url.replace(' ','%20')
// console.log(newUrl) // https://tanvir.com/tanvir%20ahmed

// // includes
// console.log(url.includes('tanvir')) // true
// console.log(url.includes('tanvirrr')) // false

// splite

// Arrays
// const myArr = [1,2,3,4,5,6,7]
// const myHeros = ["Tanvir","Sadia"]
// const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr2)

// // Array Methods

// // 1. push (array er last e element add korbe)
// myArr.push(8)
// myArr.push(9)
// console.log(myArr)

// // 2. pop (array er last theke element delete korbe)
// myArr.pop()
// console.log(myArr)

// // 3. unshift (array er first e element add kore)
// myArr.unshift(0)
// console.log(myArr)

// // 4. shift (array er first theke element delete kore)
// myArr.shift()
// console.log(myArr)

// // 5. includes (array er moddhe kono value exist hole true, na hole false)
// console.log(myArr.includes(5)) // true
// console.log(myArr.includes(15)) // false

// // 6. indexOf (etao array er moddhe search kora . kintu includes only true false value return kore . kintu eta jodi false hoy, orthat jodi oi value ta array te na thake tahole -1 return kore . r thakle oi value er index number return kore)
// console.log(myArr.indexOf(2)) // 1 (2 value in 1 number index)
// console.log(myArr.indexOf(17)) // -1 (not find 17 in myArr)

// // 7. join (array ke string e convert kore)
// const newArray = myArr.join()
// console.log(newArray) // 1,2,3,4,5,6,7,8
// console.log(typeof(newArray)) // string

// 8. slice and splice
// slice origin array ke change korte pare na , kintu splice original array ke change korte pare

// Slice Method
// const arr = [1,2,3,4,5]
// console.log(arr) // [1, 2, 3, 4, 5]
// const sliceArr = arr.slice(1,4)
// console.log(sliceArr) // [2, 3, 4]
// console.log(arr) // [1, 2, 3, 4, 5]

// Splice Method
// const arr = [1,2,3,4,5]
// console.log(arr) // [1, 2, 3, 4, 5]
// const spliceArr = arr.splice(2,4)
// console.log(spliceArr) // [3, 4, 5]
// console.log(arr) // [1, 2]

// concat method
// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// // arr1.push(arr2)
// // console.log(arr1) // [1,2,3,[4,5,6]]
// // push method change the original array but concat is create a new Array
// const newArr = arr1.concat(arr2)
// console.log(newArr) // [1, 2, 3, 4, 5, 6]
// console.log(arr1) // [1, 2, 3]

// spread operator
// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// const newArr = [...arr1, ...arr2]
// console.log(newArr)

// isArray
// console.log(Array.isArray('Tanvir')) // False (karon Tanvir ekta string not array)

// // Array.from (convert array)
// console.log(Array.from('Tanvir')) // ['T', 'a', 'n', 'v', 'i', 'r']
// const convertArr = Array.from('Tanvir Ahmed')
// console.log(convertArr) // ['T', 'a', 'n', 'v', 'i', 'r', ' ', 'A', 'h', 'm', 'e', 'd']

// // Array.of (convert in array of multiple variable)
// const a = 10;
// const b = 20;
// const c = 30;
// const arrayOf = Array.of(a,b,c)
// console.log(arrayOf) // [10, 20, 30]

// Object

// object literals
// const jsUser = {
//   name : 'Tanvir',
//   age : 25,
//   location : 'Dhaka',
//   email : 'tanvir@gmail.com',
//   isLogin : false,
//   lastLoginDays : ['Monday','Saturday']
// }
// jsUser.email = 'tanvir018765@gmail.com'
// Object.freeze(jsUser)
// Object.freeze use korle kono object ke add update delete kisui kora jay na
// jsUser.name = 'Sadia'
// console.log(jsUser)
// jsUser.hobby = 'Software Engineer'
// console.log(jsUser)
// delete jsUser.name;
// console.log(jsUser)

// jsUser.greeting = function (){
//   console.log("Hello Js User")
// }
// jsUser.greeting2 = function (){
//   console.log(`Hello Js User ${this.name}`)
// }
// console.log(jsUser.greeting2())

// singleton object and non-singleton object
// const tinder = new Object(); // singleton object
// const dinder = {} // non-singleton object
// console.log(tinder) // {}
// console.log(dinder) // {}

// tinder.id = "1"
// tinder.name = 'Tanvir'
// tinder.isLogin = false
// console.log(tinder)

// const regular = {
//   email : 'tanvir@gmail.com',
//   fullName : {
//     fname : 'Tanvir',
//     lname : 'Ahmed',
//     total : {
//       name : 'Tanvir Ahmed '
//     }
//   }
// }

// Object de-structure and JSON API
// const course = {
//   courseName : 'React',
//   price : "999",
//   courseIns : 'Tanvir'
// }
// const {courseName,price} = course
// console.log(price) // 999
// console.log(courseName) // React
// console.log(courseIns) // courseIns is not defined

// Stack and Heap
// ager kaler language gulay jokhon kaj hoito tokhon memory ke reserve kora, memory ke free kora sob programmer der kaj chilo . jar karone extra pera nite hoito . jemon kono kichu define korar age vabte hoito kothay memory dibo, kototuku memory dibo etc . kintu modern language e memoryr eto beshi control deya hoy na . automatic egula handling hoy

// 2 types of memory
// 1. Stack memory (for Primitive)
// 2. Heap memory (for Non-Primitive)

// Primitive data store korar jonno use hoy Stack Memory
// Non-Primitive data store korar jonno heap memory use hoy

// jei value stack memory te store hoy tokhon setar copy pauya jay
// jei value heap memory te store hoy tokhon setar theke only memory address pauya jay , actual value directly access kora jay na .

// Example :
// let fname = 'Tanvir'
// let funName = fname ;
// console.log(fname) // Ans : Tanvir
// console.log(funName) // Ans : Tanvir
// funName = 'Tanvir Ahmed'
// console.log(fname) // Ans : Tanvir
// console.log(funName) // Ans : Tanvir Ahmed
// ekhane let funName = fname jokhon kora hoy tokhon fname er value copy hoye funName er moddhe ashe . tai funName change korle fname er value change hoy na . abar fname er value change korle funName er value change hoy .






// Execution Context (Tapas)
// Tokenization in Javascript
// javascript ekdom first e tar code gula ke tukra tukra kore vag kore . eta kei Tokenization bole

// var code = 'var x = 5 + 3;';
// var tokens = code.match(/(\b\w+\b|[^\s])/g);
// console.log(tokens); //  Answer : ["var", "x", "=", "5", "+", "3", ";"] -> Tokenization
// Tokenization in Deep
// function hello (){
//   let a = 10;
//   return a + 1;
// }
//Tokenization => "function(keyword)","hello(a function name)","(){ (function start)","let(a variable will be declared)","a(a variable name)","10(value of a)","return(keyword)","a+1(expresstion for return where it's called)","}(function end)"

//Abstract Syntex Tree
// Tokenization complete houyar por javascript sob tukro tukro token gula ke niye ekta tree banay . jake bole Abstract Syntex Tree
// tarpor Abstract Syntex Tree bananor por setake as a input hishebe niye javascript finally machine code e convart kore
// let a = 99
// function hello(){
// 	return a;
// }
// hello()

// AST JSON for that code
// {
//   "type": "Program",
//   "start": 0,
//   "end": 49,
//   "body": [
//     {
//       "type": "VariableDeclaration",
//       "start": 0,
//       "end": 10,
//       "declarations": [
//         {
//           "type": "VariableDeclarator",
//           "start": 4,
//           "end": 10,
//           "id": {
//             "type": "Identifier",
//             "start": 4,
//             "end": 5,
//             "name": "a"
//           },
//           "init": {
//             "type": "Literal",
//             "start": 8,
//             "end": 10,
//             "value": 99,
//             "raw": "99"
//           }
//         }
//       ],
//       "kind": "let"
//     },
//     {
//       "type": "FunctionDeclaration",
//       "start": 11,
//       "end": 41,
//       "id": {
//         "type": "Identifier",
//         "start": 20,
//         "end": 25,
//         "name": "hello"
//       },
//       "expression": false,
//       "generator": false,
//       "async": false,
//       "params": [],
//       "body": {
//         "type": "BlockStatement",
//         "start": 27,
//         "end": 41,
//         "body": [
//           {
//             "type": "ReturnStatement",
//             "start": 30,
//             "end": 39,
//             "argument": {
//               "type": "Identifier",
//               "start": 37,
//               "end": 38,
//               "name": "a"
//             }
//           }
//         ]
//       }
//     },
//     {
//       "type": "ExpressionStatement",
//       "start": 42,
//       "end": 49,
//       "expression": {
//         "type": "CallExpression",
//         "start": 42,
//         "end": 49,
//         "callee": {
//           "type": "Identifier",
//           "start": 42,
//           "end": 47,
//           "name": "hello"
//         },
//         "arguments": [],
//         "optional": false
//       }
//     }
//   ],
//   "sourceType": "module"
// }

//Execution Contaxt start

//Lexical Position or Lexical Contaxt or Lexical Environment
// prottekta single code er position keii lexical position bole . position bolte bujhano hoise ei particular code ta file er thik kothay ache .

// const a = 10; // Lexical Position or Lexical context is line number 1499
// let b = 'Hello' // Lexical Position or Lexical context is line number 1500

// function hello(){ // Lexical Position or Lexical context is line number 1502-1504
//   console.log('Hello World!')
// }

// let c = 11; // Lexical Position or Lexical context is line number 1506

// hello(); // Lexical Position or Lexical context is line number 1508

//Execution Contaxt understand by some text:
// onk boro source code er moddhe onk lexical contaxt thake . prottekta lexical contaxt or prottekta particular code ke execute korar jonno javascript er ja ja dorkar tai holo oi particular code er jonno execution contaxt . line number 371 er jonno alada execution contaxt create hoy, line number 372 er jonno alada execution contaxt create hoy,line number 374-376  er jonno alada execution contaxt create hoy,evabe prottekta particular code er jonno alada alada execution contaxt create hoy

// Globar Execution Contaxt (GEC)
//jokhon javascript first time load hoy tokhon by default ekta execution contaxt create kore jar nam holo Global Execution Contaxt(GEC)
// GEC 2 ta special jinish amader dey(jodio 0 line code thake)
// 1. window 2. this (window === this => true) --> tar mane window and this same memory location point kore

// GEC or jekono execution contaxt er 2 ta phase thake
// 1. Creation phase
// 2. Execution phase

// GEC er Creation phase eii 2 ta special object peye thaki, 1. window(global object) 2. this (point on window)

// Global execution contaxt er creation phase e ki ki hobe ? nicher coder er jonno..
// var tom = 'Hello Tom'
// function hiTom(){
//   console.log(this.tom)
// }
// Global execution contaxt er creation phase e ja ja hobe....
// 1. window (global object)
// 2. this (window)
// 3. tom and hiTom memory allocated(sob variable , function er jonno memory allocated korbe)
// 3. tom = undefined (jodi kono variable thake tahole sekhane undefined diye dibe)
// 4. hiTom = function hiTom(){
//              console.log(this.tom)
//             } (jodi kono function thake tahole function er definition ta tule hiTom e set kore dibe)

// Global execution contaxt er creation phase sesh , akhn execution phase start hobe
// 1. tom = "Hello Tom" (tom er vitor tar value assign kore deya hobe)
// 2. (jehetu hiTom function ke call kora hoy nai tai tokhono ei function er jonno kono execution contaxt hobe na)

// test 1 :
// var jerry = "Hello Jerry"
// function helloJerry(){
//   let hi = 1;
//   console.log('Hello Jerry')
// }
// helloJerry()

//GEC for test 1 =>
//Creation phase :
// jerry and helloJerry() er jonno memory allocated hobe
//jerry : undefined
//helloJerry : function helloJerry(){clg()}
//Execution phase :
//jerry: "Hello Jerry"
//(in lexical position 420, execute a function . that's why create a new execution contaxt named function execution contaxt(FEC))

// FEC for Lexical position 420

//creation phase :
//hi=undefined
//define log function in memory but no execute

//execution phase:
// hi=1;
//log() from console() (will create new execution contaxt FEC)

// FEC for console.log()
//Creation phase:
//Execution phase:  
// execute log function and print "Hello Jerry"

//How Javascript Engine Managed execution contaxt tree ? kivabe javascript ai execution contaxt gula manage kore ?  Answer : Using Call Stack(last in first out)

//test 2 code
// console.log("Inside global execution context")
// var a = 5;
// function testMe(){
//   console.log("Inside testMe execution context")
//   var b = 10;
//   var user = {
//     name:'tanvir',
//     county:'Bangladesh',
//   }
//   function testAgain(){
//     console.log("Inside testAgain execution context")
//     console.log("Exiting testAgain execution context")
//   }
//   testAgain();
//   console.log("Exiting global execution context")
// }
// testMe();
// console.log("Exiting global execution context")

// Now test 2 code Execution Context design:
// GEC
//   CP
//     a:undefined
//     testMe: function(){code...}
//   EP
//     a:5
//     testMe: Execute

//     FEC
//       CP
//         b: undefined
//         user:undefined
//         testAgain: function(){code...}
//       EP
//         b:10
//         user:{name:'tanvir',...}
//         testAgain: Execute...

//         FEC
//           CP
//           EP

// Understand Stack and Heap Memory in video Tapas


// Hoisting
//1. Variable hoisting (variable create korar ageii oi variable ke use kora)
//2. function hoisting (function ke create korar agei oi function ke use kora)

//A tricky question
// test();
// var test = function (){
//   console.log('Hello World')
// }
//Ans : Error- test is not a function
// karon test ekta variable hishebe count hoise. test er value ekta function kintu test kono function na .

// note for hoisting :
// let and const er khetre variable hoisting possible na . karon var er khetre creation phase e undefined assign kora hoy kintu let and const er khetre kichuii assign kora hoy na . tai let and const er khetre hoisting korle error ashbe . tar mane javascript let and const create kore amader pressure dicche jate amra kono variable or function declare korar age execute na kori
// best practice holo hoisting avoid kora 

// console.log(a) // undefined
// var a = 'hello'
// console.log(a) // hello

// console.log(b) // error
// let b = 'hiii'
// console.log(b) // hiii

// Scope and Scope Chain
//4 types of scope
//1. Global Scope (without block scope or local scope)
//2. Local Scope or Functional Scope (function(){..})
//3. Block Scope ({} or if(){} or for(){} etc..)
//4. Module Scope

//1. Global Scope
// rules :  jodi kono function er vitor othoba kono block er vitor na thake tahole seta global scope . var let const jeta diyeii variable declare kori na kno seta global scope hoye jay .
// rules : eta jekono function block everything sob jayga theke access hote pare
// rules : global scope use korar ee dorkar nei . jodi use korteii hoy tahole const diye use korle valo . nahole variable overwrite hoye jauyar chance thake

// Example of Global scope :
// const a = 10;
// let b = 'hello'
// var c = false
// function sayHi(){
//   function hello(){
//     if(true){
//       console.log(b) // hello
//       function xx(){
//         console.log(c) // false
//         console.log(a) // 10
//       }
//       xx()
//     }
//   }
//   hello();
// }
// sayHi()
// {console.log(a)} // 10
// if(!c) console.log(c) // false 

//2. Local Scope or Functional Scope
// rules : function er vitor var diye hok, let diye hok , const diye hok jeta diyeii variable declare kori na kno seta oi function er baire access kora jay na . etaii local scope or functional scope

// Example 1 :
// function hii(){
//   const a = 10;
//   let b = 20;
//   var c = 30;
//   console.log(a,b,c) // 10 , 20 , 30
// }
// console.log(a) // a is not defined
// console.log(b) // b is not defined
// console.log(c) // c is not defined

// Example 2 :
// function sayHi(){
//   console.log(a) // error
//   console.log(b) // error
//   console.log(c) // error
//   function hello(){
//     const a = 'hello'
//     let b = 10
//     var c = true
//     if(true){
//       function xx(){
//         console.log(a) // hello
//       }
//       xx()
//     }
//   }
//   hello();
// }
// sayHi()

// Shadowing
// jodi globally kono variable er same name diye locally kono variable declare kora hoy and tader value jodi same na hoy tahole localscope e local variable value taii show hobe r global scope e global variable er value ta show hobe

// EX :
// var a = 'hello'
// function sayHi(){
//   var a = 'hello world'
//   console.log(a) // Ans : hello world
// }
// console.log(a) // Ans : hello
// ekhane global scope er variable er value ta ke local scope e hide kora hoyeche
// othoba jodi amra execution context diye eta map kori tahole bujhte parbo kno ei code er answer erokom holo

// EX :
// const greeting = 'hello'
// function showGreeting(){
//   const greeting = 'valo achen?'
//   console.log(greeting) // valo achen?
// }
// showGreeting()
// console.log(greeting) // hello

// Concept of shadowing..

// const greeting = 'hello'
// function showGreeting(){
//   const greeting = 'valo achen?'
//   console.log(greeting) // valo achen?
// }
// showGreeting()
// console.log(greeting) // hello

// ******Important note***** ekhane global scope e greeting er value global execution context er execution phase e 'hello' deya hoyeche.tarpor jokhon showGreeting er execution phase start hoy tokhon notun vabe greeting name e variable create hoy, tar value undefined assign hoy . tarpor execution phase e greeting er value 'valo achen?' deya hoy . tarpor jokhon showGreeting er execution phase sesh hoye jay tokhon to callStack theke showGreeting ber hoye jay . tar mane showGreeting er vitore joto variable ase sob gula moira jay . showGreeting er vitor r kono kichur ostitto thake na . tar mane showGreeting er baire console.log(greeting) er value 'valo achen?' hobe na . karon function er vitor greeting already moira gese . tai jei greeting akhno beche ase , greeting = 'hello' sei greeting tai show hoise .

//3. Block Scope
// Tricky part
// if(true){
//   var x = 10;
// }
// console.log(x) // Ans : 10
// kintu ai answer kivabe holo ? eta to houyar chilo na . niche tar bekkha kora holo ->
// var holo only function scope . tar mane var diye kono function er vitore variable create hole seta oi function er baire access kora jabe na . kintu var kintu block scope na . tar mane holo if(){}, {..}, for(){..} ai type er block er vitor var diye kono variable create korleo seta ai block gular baire access kora jabe . kintu let and const block scope . tar mane block er baire access kora jay na

// Difference between var , let and const
// var : var holo functional scope . function er baire access kora jay na . kintu block er baire access kora jay . karon var block scope na , var functional scope
// let and const : kintu let and const block scope . block er baire access kora jay na , tar sathe let and const jodi kono function er vitor declare kora hoy tahole seta function er baireo access kora jay na

// EX :
// if(true){
//   let x = 10;
//   const y  = 20;
// }
// console.log(x) // Error : x is not defined
// console.log(y) // Error : y is not defined

// Scope Chain
// jokhon kono variable tar value ke existing scope e na pay tokhon se tar thik immidiate ager scope e take khujte thake . jodi sekhaneo na pay tahole setar immidiate ager scope e variable ta khujte thake . evabe variable khujar jonno scope uporer dike jete thake
// EX :
// function hello(){
//   var a = 10;
//   hello1()
//   function hello1(){
//     hello2()
//     function hello2(){
//       console.log(a)
//     }
//   }
// }
// hello()
// Ans : 10
// upore clg(a) jokhon hoise tokhon a ke print korar jonno a er value khuja start hoy . a er value hello2() er moddhe na peye se tar parent hello1() er moddhe jay , sekhaneo jokhon na pay tokhon se hello1() er parent hello() er kase jay and sekhane a er value khuje pay

// EX :
// function hello(){
//   function one(){
//     console.log(a)
//   }
//   function two(){
//     var a = 10;
//   }
//   var a = 100000;
//   two()
//   one()
// }
// hello() // Ans : 100000
// ekhane console.log(a) te aisha a variable ke na peye se tar immidiate scope , mane hello() function er scope e a ke khujte thake . se kintu tar siblings kono scope e check korbe na , mane two() function er scope er vitor khujbe na . se only tar parent scope e khujbe . tokhon se parent scope e giye a er value 100000 peyeche and print kore diyeche

// More about Scope Chain
// lexical context or lexical scope
// jokhon jei function or variable jekhane rakha hoy setai holo tar lexical scope or lexical context . aro bujhate gele nicher example er jerry function er lexical scope hocche global scope, karon take globally placed kora hoyeche and tom function er vitor name variable er lexical scope or lexical context hocche tom function er functional scope, karon take tom function er vitore define kora hoyeche . abar tom function er lexical context or lexical scope hocche global scope , karon tom ke globally define kora hoyeche
// function ke jekhanei call or invoked kora hok function er scope hocche jekhane take rakha hoyeche , orthat jei scoope e take rakha hoyeche . ai khetre niche jerry function ke tom function er vitore  call kora holeo jerry function er lexical context or lexical scope kintu tom function er baire global scope e .
// Ex:
// function jerry(){
//   console.log(name)
// }
// function tom(){
//   var name = 'jerry'
//   jerry()
// }
// var name = 'cartoon'
// tom()
// ekhane jerry jokhon name pacchilo na tokhon se tar immidiate ager scope orthat global scope e khuje name er value 'cartoon' pay . tai se cartoon print kore dey . jerry kintu jekhane take call kora hoyeche sekhane khujeni , orthat tom function er vitore khujeni . karon take tom er vitor define kora hoy nai . just call kora hoyeche . tar mane call jekhaneii koruk function er definition jekhane ase setaii tar scope . sekhane na pele tar uporer scope e khujbe

// Example : 
// var a = 10;
// function fun1(){

//   function fun2(){

//   }
//   function fun3(){

//     function fun4(){
//       var a = 20;
//       fun0()
//     }
//     fun4()
//   }
//   fun3()
// }
// fun1()
// function fun0(){
//   console.log(a)
// }
// // Ans : 10
// upore fun0 ke call kora hoise fun4() er moddhe . sekhane kintu a = 20 deya hoise . kintu fun0() er moddhe clg(a) kintu a = 20 ney nai . a=10 nise . karon jokhonii fun0() ke call kora hoise tokhon pointer soja fun4() theke ber hoye fun0() jei location e ase sekhane chole jay and sekhan thekeii child to parent , parent to grandparent akare variable khujte thake...



// JavaScript Memory Management 
// amader kono application jokhon kono user tar system e run kore tokhon oita run korar jonno sei system theke memory niye sei memory te application run hoy . oi application er jonno jototuku memory dorkar tototuku jodi system memory te khali thake tahole shundor vabe application ta run kore . dhoren application e 545 MB memory space e run kore . akhn user er Ram er moddhe jodi 545MB khali thake tahole sei khali memory dokhol kore application ta run kore . tai amader memory management thik vabe kora dorkar . karon jodi amar application onek beshi memory consume kore tahole user er system jodi sei onujayi amake free memory na dite pare tahole oi user dekhbe application crash kortese . tai jekono developer er memory management thik vabe korte hobe. developer er first podokkhep thakbe je developer joto ta kom memory te application ta run koraite pare user er system e. 
// jemon ekta int variable 4 byte memory dokhol kore, amni vabe ekta string variable o same 4 byte memory consume kore . evabe application e memory set hoye thake. 

// onnanno programming language jemon C, C++ egular moddhe developer der manually memory niye kaj korte hoy . jemon memory consume kora or memory allocate kora, oi specific memory er kaj sesh hoye gele segula ke free kore deya ittadi . ai jonnoi sekhane alloc, malloc, free etc function use hoy . kintu javascript e memory developer maintain korte pare na . js engine eta nijeii control kore . kintu amader sudhu eta mathay rakhte hobe amar application kototuku memory nicche, kivabe optimized way te korle memory kom khoroch hobe ittadi mathay rekhe code korle application er memory management best hobe and kom memory te user er system e load hobe . fole user er system configuration kom thakleo application sohoje crash korbe na . 


// Memory Management Cycle : 
// memory management e mainly 3 ta cycle thake 
// 1. Memory Allocation phase
// 2. Memory Usage phase
// 3. Memory Release phase 


// 1. Memory Allocation Phase : 
// ai phase e javascript only kono particular variable or function er jonno memory allocate or free memory ke sei code er jonno assign kore dibe

// 2. Memory Usage Phase : 
// ai phase e javascript sei allocate kora memory space er moddhe sei code ta use korbe

// 3. Memory Release Phase : 
// jodi sei memory te thaka code er kaj sesh hoye jay tokhon ai phase e aisha sei memory space ke free kore dibe 

// orthat amra jodi kolpona kori ekta variable declare kora hoise , sei variable er jonno javascript allocation phase er moddho diye jeye sei variable er jonno memory allocate kore . then sei variable jokhon use kora start hoy tokhon javascript memory usage phase diye jabe and sei variable ke use hote dibe sei memory er moddhe . and jokhon oi variable er use sesh hoye gese tokhon javascript Release or Free phase diye jabe and sei memory ta free kore dibe . evabeii cycle akare cholte thake....


// Stack and Heap Memory 
// Javascript kothay tar data ke store kore seta janar jonno amader Stack and Heap Memory niye kotha bolte hobe . 

// Stack Memory : 
// eta ke amra boli Last in First Out (LIFO). tar mane holo last e jei data stack e dhukbe etai sobar age stack theke ber hoye jabe.

// kintu stack javascript kijonno use kore ? 
// stack mainly static data or Primitive data store korar jonno use hoy 

// Stack Kivabe kaj kore ?
// const firstName = 'Tanvir'
// const lastName = 'Ahmed'
// const age = 25
// const address = 'Dhaka'
// ai code gular jonno obosshoi memory allocate kora hobe . eta stack memory te store kora hobe jeta kina last in first out process e chole . cholen dekhe nei kivabe eta dhuke and ber hoy 

// jehetu javascript ekta interpreted language tai line by line run hobe. tai sobar age firstName er jonno memory allocate hobe . tai stack er moddhe sobar age firstName dhukbe, then stack e dhukbe lastName , then age and so on... 
// Stack Memory holo ekta patil er moto . jeta age dhukano hoy seta niche pore thake and jeta sobar last e dhukano hoy seta sobar upore thake . tai jokhon variable gula memory theke free kora hobe tai sobar age address ke stack memory theke ber korbe , and tarpor age , then lastName and sobar pore ber kora hobe firstName ke . evabeii Stack memory te variable allocate and release hoy. 


// Important Note: 
// javascript e Stack er size kintu limited. ekta limit porjonto data store kore rakhe . tar jonnoi amra jokhon stack er moddhe onk beshi data dhukate chai tokhon ekta error ashe tar name holo stack overflow!


// Heap Memory : 
// head er moddhe amra only object store korte pari . orthat heap er moddhe only non-primitive data store kore. 
// Heap ekta dynamic memory allocation 

// Important Notes : 
// stack er khetre ja hoy javascript age thekei jante pare stack er moddhe jei variable gula jacche segula koto size er data . and sei onujayii stack ready thake . jemon int variable nile 4 byte nibe and bigint nile 8 byte nibe. kintu heap er khetre ta hoy na . Heap jehetu ekta dynamic memory allocation tai javascript runtime eii bujhte pare je ekta particular object kototuku size nite parbe. tar mane heap er khetre kono fixed size deya hoy na object ke . kintu stack er khetre ami onk boro string nei r choto string nei string variable er jonno 4 byte fixed kora hoy. 


// Compiled Time and Run Time er moddhe parthokko ki ? 

// Compiled Time : 
// javascript er code jokhon actually byte code(1010011100101) e convert hoy setake bole compiled time 

// Run Time : 
// Code gula Compiled hoye byte code e convert houyar pore sei byte code jokhon browser e run kore output pacchi setake bole Run Time



// Important Notes : 
// Heap er khetre ja hoy je somosto memory allocation gula Run Time e hoy 

// Stack Memory
// Stack Memory হল একটি দ্রুত এবং সীমিত মেমোরি এলাকা যা লাস্ট ইন, ফার্স্ট আউট (LIFO) নিয়মে কাজ করে। এখানে ছোট এবং নির্ধারিত সাইজের ডেটা সংরক্ষিত হয়, যেমন প্রিমিটিভ ডেটা (number, string, boolean, etc.) এবং ফাংশনের লোকাল ভেরিয়েবল।

// বৈশিষ্ট্য:
// ফাস্ট এক্সেস: মেমোরি খুব দ্রুত এক্সেস করা যায়।
// সীমিত সাইজ: স্ট্যাকের সাইজ সাধারণত সীমিত হয় এবং বড় ডেটা সঞ্চয় করতে পারে না।
// অর্ডার: স্ট্যাক মেমোরি একটি নির্ধারিত ক্রমে কাজ করে। প্রথমে ইন করলে, শেষের দিকে এক্সিকিউট হবে।
// অটোমেটিক ম্যানেজমেন্ট: স্ট্যাক মেমোরি অটোমেটিক্যালি অ্যালোকেট এবং ডিলোকেট হয়।
// প্রিমিটিভ ডেটার জন্য: ছোট এবং স্থির সাইজের ডেটার জন্য স্ট্যাক মেমোরি ব্যবহার করা হয়।

// উদাহরণ:
// function add(a, b) {
//     let sum = a + b; // 'sum' স্ট্যাক মেমোরিতে সংরক্ষিত হবে
//     return sum;
// }
// add(10, 20);
// উপরের কোডে a, b, এবং sum স্ট্যাক মেমোরিতে স্থান পায়।


// Heap Memory
// Heap Memory হল ডায়নামিক মেমোরি এলাকা, যেখানে বড় এবং জটিল ডেটা সংরক্ষিত হয়, যেমন অবজেক্ট বা অ্যারে। এটি স্ট্রাকচার্ড নয় এবং এলোমেলোভাবে ডেটা সংরক্ষণ করে।

// বৈশিষ্ট্য:
// ডাইনামিক সাইজ: হিপ মেমোরিতে বড় এবং ডাইনামিক সাইজের ডেটা সংরক্ষণ করা যায়।
// স্লো এক্সেস: হিপ মেমোরি তুলনামূলক ধীর, কারণ এটি স্ট্রাকচার্ড নয়।
// জটিল ডেটার জন্য: অবজেক্ট, অ্যারে, এবং ফাংশনের রেফারেন্স হিপ মেমোরিতে রাখা হয়।
// ম্যানুয়াল ম্যানেজমেন্ট: হিপ মেমোরি সাধারণত গার্বেজ কালেকশন প্রক্রিয়ার মাধ্যমে পরিষ্কার করা হয়।
// রেফারেন্স: স্ট্যাকের ভেরিয়েবলগুলো হিপের ডেটার রেফারেন্স ধরে রাখে।

// উদাহরণ:
// let obj = { name: "John", age: 30 }; // 'obj' হিপ মেমোরিতে সংরক্ষিত
// let arr = [1, 2, 3, 4]; // 'arr' হিপ মেমোরিতে সংরক্ষিত
// উপরের কোডে obj এবং arr হিপ মেমোরিতে থাকে, কিন্তু তাদের রেফারেন্স স্ট্যাক মেমোরিতে রাখা হয়।



// Stack and Heap memory kivabe kaj kore setar ekta presentation : 
// ./image/StackandHeap.png  aikhane gele pauya jabe 

// bekkha : 

// const employee = {
//   id: 1, 
//   name: 'Tanvir',
//   salary : 37233,
//   deptId : 3,
// }

// const companyName = 'BeautyBooth'

// const department = {
//   id: 3, 
//   name : 'Sadia', 
//   location : 'remote'
// }

// function findDepartmentDfEmployee(employee){
//   return department.find(dept => {
//     return dept.id === employee.deptId
//   })
// }

// const anotherDepartment = department



// ai code er jonno stack and heap sajano holo: StackandHeap.png

// js jehetu interpreted language tai line by line code porte thakbe . employee jehetu ekta variable tai eta stack e jabe sobar age. kintu employee er value ekta non-primitive value . tai value ta heap memory te randomly ekta space e store hoye jabe. then companyName ekta variable jehetu ase seta stack e jabe and tar value o ekta primitive tai value soho stack e store hobe . then department nam e ekta variable stack e jabe and tar value jehetu non-primitive tai heap memory te add hobe. tokhon stack er jekhane department ase sekhan theke heap er memory er jekhane department er value rakha hoise sekhane point kora thakbe . then findDepartmentDfEmployee nam e ekta function heap memory te add hobe and tar name findDepartmentDfEmployee stack memory te thakbe . karon javascript internally function fn_name(){...} ke var fn_name = function(){...} evabe dekhe . tai function tao ekta variable er moddhe thakay function er nam stack e thakbe and sekhan theke heap er jekhane function er body store kora hoise sekhane point kora obosthay thake. then anotherDepartment name e ekta variable dekha jay jetar moddhe department variable er value assign kora hoise . tai stack er moddhe sobar last e anotherDepartment dhukano hoy and jehetu department er value assign kora hoise and department er value ekta non-primitive tai department er value jei heap memory te ase anotherDepartment er belay same jaygay point kora ase .  eta holo memory allocate phase 


// akhon amra kivabe memory free hoy seta dekhbo 
// jokhonii stack theke anotherDepartment ber hoye jabe execution sesh hole tokhon stack e anotherDepartment chole geleo heap memory te tar value theke jabe . karon ai value already arekjon use kortese . and seta holo department . tai anotherDepartment chole jauyar karone heap memory te kichuii ghotbe na . then jokhon findDepartmentOfEmployee stack theke ber hoye jabe tokhon gurbage collector aisha dekhbe heap e amon ekta data store ase jetar upor stack theke kono point kora nai . tokhon gurbage collector take muche diye oi memory free kore dibe. then department  jokhon ber hobe tokhon gurbage collector aisha dekhbe heap e amon ekta data ase jetar sathe stack er kono value er kono connection nai . tokhon seta oikhan theke muche jabe . evabe stack and heap allocate and free hoy . 



const employee = {
  id: 1, 
  name: 'Tanvir',
  salary : 37233,
  deptId : 3,
}

const companyName = 'BeautyBooth'

const department = {
  id: 3, 
  name : 'Sadia', 
  location : 'remote'
}

function findDepartmentDfEmployee(employee){
  return department.find(dept => {
    return dept.id === employee.deptId
  })
}

const anotherDepartment = department

// এই কোডটির Stack এবং Heap Memory Management নিয়ে বিশ্লেষণসহ একটি গভীর ব্যাখ্যা এবং উপস্থাপনা নিচে দেওয়া হলো।

// Stack এবং Heap Memory Management
// JavaScript-এ মেমোরি দুটি প্রধান স্থানে রাখা হয়:

// Stack Memory:
// দ্রুত এক্সেসযোগ্য।
// ফাংশনের লোকাল ভেরিয়েবল এবং প্রিমিটিভ টাইপের ডেটা সংরক্ষণের জন্য ব্যবহৃত হয়।
// Heap Memory:
// ডাইনামিক ডেটার জন্য ব্যবহৃত হয় (যেমন অবজেক্ট বা অ্যারে)।
// এটি বড় এবং জটিল ডেটা সংরক্ষণে ব্যবহৃত হয়।
// এই কোডটি বিশ্লেষণ
// কোডের ডেটা স্ট্যাক এবং হিপে কীভাবে মেমোরিতে রাখা হয়:
// const employee = {
//   id: 1, 
//   name: 'Tanvir',
//   salary: 37233,
//   deptId: 3,
// }
// employee ভেরিয়েবলটি Stack-এ সংরক্ষিত, কিন্তু এটি একটি অবজেক্ট হওয়ায় অবজেক্টের ডেটা Heap মেমোরিতে সংরক্ষিত হয়।
// employee ভেরিয়েবল Stack-এ একটি রেফারেন্স ধরে রাখে যা Heap-এ অবজেক্টের লোকেশন নির্দেশ করে।
// const companyName = 'BeautyBooth'
// companyName Stack মেমোরিতে সংরক্ষিত হয়।
// এটি একটি প্রিমিটিভ টাইপ (string), তাই এর ডেটা সরাসরি Stack-এ রাখা হয়।
// const department = {
//   id: 3, 
//   name: 'Sadia', 
//   location: 'remote'
// }
// department ভেরিয়েবলটি Stack মেমোরিতে রাখা হয়, তবে অবজেক্টের ডেটা Heap মেমোরিতে যায়।
// Stack-এ থাকা department শুধুমাত্র Heap-এ অবজেক্টের রেফারেন্স ধারণ করে।
// ফাংশনের মেমোরি ম্যানেজমেন্ট:
// function findDepartmentDfEmployee(employee){
//   return department.find(dept => {
//     return dept.id === employee.deptId
//   })
// }
// findDepartmentDfEmployee ফাংশনটি Stack-এ সংরক্ষিত হয়।

// ফাংশনের কোড এবং এর লোকাল ভেরিয়েবল (যেমন employee) Stack-এ থাকে।
// এখানে .find মেথড ব্যবহৃত হচ্ছে, কিন্তু এটি শুধুমাত্র অ্যারে-তে কাজ করে। যেহেতু department একটি অবজেক্ট, তাই এখানে একটি ত্রুটি হবে।
// Callback ফাংশন (Arrow Function):

// .find এর ভিতরের কোলব্যাক ফাংশনও Stack-এ সংরক্ষিত হয়।
// এই ফাংশন চালু হওয়ার পরে, এর প্রিমিটিভ ডেটা Stack থেকে মুছে যায়।
// const anotherDepartment = department;
// anotherDepartment Stack মেমোরিতে রেফারেন্স হিসেবে রাখা হয়।
// এটি department অবজেক্টের একই রেফারেন্স ধরে রাখে, অর্থাৎ Heap মেমোরিতে নতুন কোনো কপি তৈরি হয় না।
// Stack এবং Heap এর মেমোরি ফ্লো:
// ধরা যাক, আমরা এই প্রোগ্রামটি রান করছি। তখন মেমোরির ফ্লোটি হবে:

// Stack Memory:
// employee ভেরিয়েবল (Heap-এর রেফারেন্স ধরে রাখে)।
// companyName (প্রিমিটিভ টাইপ, সরাসরি Stack-এ)।
// department ভেরিয়েবল (Heap-এর রেফারেন্স)।
// anotherDepartment (Heap-এর department রেফারেন্স শেয়ার করে)।
// ফাংশন findDepartmentDfEmployee (Stack-এ সংরক্ষিত)।
// Heap Memory:
// employee অবজেক্ট (ডেটাসহ)।
// {
//   id: 1, 
//   name: 'Tanvir',
//   salary: 37233,
//   deptId: 3
// }
// department অবজেক্ট (ডেটাসহ)।
// {
//   id: 3, 
//   name: 'Sadia', 
//   location: 'remote'
// }
// সমস্যাগুলো:
// .find মেথড ব্যবহার:
// .find শুধুমাত্র অ্যারেতে কাজ করে। যেহেতু department একটি অবজেক্ট, তাই এটি কাজ করবে না।

// সমাধান:
// .find ব্যবহার করার আগে department কে একটি অ্যারেতে রাখতে হবে।

// const departments = [
//   {
//     id: 3, 
//     name: 'Sadia', 
//     location: 'remote'
//   }
// ];

// function findDepartmentDfEmployee(employee){
//   return departments.find(dept => {
//     return dept.id === employee.deptId;
//   });
// }
// মেমোরি অপ্টিমাইজেশন:
// কোডে অতিরিক্ত রেফারেন্স (যেমন anotherDepartment) এড়িয়ে চলা উচিত, কারণ এটি একই অবজেক্টের রেফারেন্স ধরে রাখে।

// উপস্থাপনা:
// Stack এবং Heap Visualization
// Stack Memory:

// lua
// Copy code
// +-------------------+
// | companyName       | --> 'BeautyBooth'
// +-------------------+
// | employee          | --> Heap Reference (employee Object)
// +-------------------+
// | department        | --> Heap Reference (department Object)
// +-------------------+
// | anotherDepartment | --> Heap Reference (same as department)
// +-------------------+
// | findDepartmentDfEmployee | --> Function Code
// +-------------------+
// Heap Memory:

// css
// Copy code
// +------------------------------------------------+
// | employee Object:                               |
// | { id: 1, name: 'Tanvir', salary: 37233,       |
// |   deptId: 3 }                                 |
// +------------------------------------------------+
// | department Object:                            |
// | { id: 3, name: 'Sadia', location: 'remote' } |
// +------------------------------------------------+
// উপসংহার:
// Stack মেমোরি দ্রুত এবং সীমিত, যেখানে প্রিমিটিভ ডেটা এবং ফাংশনের লোকাল ভেরিয়েবল সংরক্ষণ করা হয়।
// Heap মেমোরি বড় অবজেক্ট এবং ডাইনামিক ডেটা সংরক্ষণের জন্য ব্যবহৃত হয়।
// কোড অপ্টিমাইজ করতে findDepartmentDfEmployee ফাংশনটি সঠিকভাবে পরিবর্তন করা উচিত এবং মেমোরি ব্যবস্থাপনা নিয়ে সচেতন থাকা দরকার।




// জাভাস্ক্রিপ্ট এ মেমোরি ম্যানেজমেন্ট কতটুকু গুরুত্বপূর্ণ ? 

// - আমরা অনেকেই মনে করি অন্যান্য লো লেভেল ল্যাঙ্গুয়েজ যেমন সি , সি++ এর মধ্যে ম্যানুয়ালি মেমোরি এলোকেট এবং মেমোরি ফ্রি করা হয় কিন্তু জাভাস্ক্রিপ্ট এর মধ্যে যেহেতু জাভাস্ক্রিপ্ট ইঞ্জিন এগুলাকে হ্যান্ডেল করে তাই ডেভেলপার হিসেবে আমাদের এগুলা মাথায় রেখে কাজ করতে হবে না। বিষয়টা একদমই ভুল! বরং একজন ডেভেলপার হিসেবে মেমরি ম্যানেজমেন্ট সম্পর্কে ভালো ধারণা থাকা অত্যন্ত গুরুত্বপূর্ণ, বিশেষ করে যখন আপনি উচ্চ মানের এবং দক্ষ কোড লিখতে চান। কারণ মেমরি ম্যানেজমেন্টের প্রভাব প্রোগ্রামের পারফরম্যান্স, স্থায়িত্ব, এবং স্কেলেবিলিটির উপর পড়ে। এখন আমরা দেখবো মেমরি ম্যানেজমেন্ট এর দক্ষতা আমাদের কোন কোন বিষয়ে সাহায্য করবে :-> 

// ১. মেমরি লিক প্রতিরোধ : 
// - যদি ডেভেলপার মেমরি ম্যানেজমেন্ট সম্পর্কে সচেতন না হন, তবে কোডে মেমরি লিক হতে পারে। মেমরি লিক হল এমন একটি অবস্থা যেখানে অবজেক্ট বা ডেটা মেমরিতে থেকে যায়, যদিও সেগুলো আর ব্যবহৃত হচ্ছে না।
// hashtag#এটি অ্যাপ্লিকেশনের পারফরম্যান্স কমিয়ে দেয়।
// hashtag#দীর্ঘ সময় চলার পর অ্যাপ্লিকেশন ক্র্যাশ করতে পারে।
// hashtag#ব্যবহারকারীর ডিভাইসের মেমরি শেষ হতে পারে।
// উদাহরণ:
// DOM ইভেন্ট লিসেনার সঠিকভাবে সরানো না হলে মেমরি লিক হতে পারে।

// ২. পারফরম্যান্স অপ্টিমাইজেশন
// মেমরি ব্যবস্থাপনার অজ্ঞানতার কারণে এমন কোড লেখা হতে পারে যা প্রয়োজনের তুলনায় অতিরিক্ত মেমরি ব্যবহার করে। এটি অ্যাপ্লিকেশনকে ধীর করে দেযডেটা hashtag#স্ট্রাকচারের সঠিক ব্যবহার: সঠিক ডেটা স্ট্রাকচার বেছে নেওয়া মেমরি খরচ কমিয়ে আনে।
// hashtag#জাঙ্ক অবজেক্ট অপসারণ: অব্যবহৃত অবজেক্টের জন্য মেমরি ফ্রি করা পারফরম্যান্স বাড়ায়।

// ৩. বড় স্কেল অ্যাপ্লিকেশনের জন্য গুরুত্বপূর্ণছোট অ্যাপ্লিকেশনে মেমরি সমস্যা বড় প্রভাব ফেলে না, কিন্তু স্কেলিং করার সময় এটি বড় সমস্যা তৈরি করতে পারে। বড় অ্যাপ্লিকেশনে মেমরি ব্যবস্থাপনার জন্য গার্বেজ কালেক্টরের উপর পুরোপুরি নির্ভরশীল হওয়া নিরাপদ নয়।
// উদাহরণ:
// ক্লাউড অ্যাপ্লিকেশন বা সার্ভার-সাইড প্রোগ্রামে অপ্রয়োজনীয় মেমরি খরচ হলে সার্ভার ব্যয় বৃদ্ধি পায়।

// ৪. রিয়েল-টাইম সিস্টেমে মেমরি গুরুত্বপূর্ণ
// রিয়েল-টাইম সিস্টেম যেমন গেমিং, IoT ডিভাইস, বা এয়ারক্রাফট কন্ট্রোল সিস্টেমে মেমরি ব্যবস্থাপনা অত্যন্ত গুরুত্বপূর্ণ। মেমরি ব্যবস্থাপনার ভুলের কারণে এই ধরনের সিস্টেমে বড় ক্ষতি হতে পারে।

// ৫. ডিবাগিং সহজ করা
// মেমরি ব্যবস্থাপনার জ্ঞান থাকা মানে মেমরি লিক বা অপ্রত্যাশিত ক্র্যাশের মতো সমস্যাগুলো দ্রুত চিহ্নিত করা ও সমাধান করা সহজ হয়।

// ৬. ব্যবহারকারীর অভিজ্ঞতা উন্নত করা
// একটি ভালোভাবে ম্যানেজ করা মেমরি অ্যাপ্লিকেশন ব্যবহারকারীদের জন্য মসৃণ অভিজ্ঞতা নিশ্চিত করে। এটি দ্রুত লোড হয় এবং কম রিসোর্স ব্যবহার করে।

// ৭. গবেষণার জন্য দরকার
// যদি ডেভেলপার গভীরভাবে প্রোগ্রামিং ভাষা বা ইঞ্জিন নিয়ে কাজ করতে চান (যেমন ব্রাউজার ইঞ্জিন বা গার্বেজ কালেক্টর), মেমরি ম্যানেজমেন্ট জানা অপরিহার্য।

// মোট কথা মেমরি ম্যানেজমেন্ট দক্ষতার সঙ্গে শেখা এবং প্রয়োগ করা একজন ডেভেলপারকে দক্ষ, দায়িত্বশীল এবং কার্যকরী কোড লেখক হিসেবে গড়ে তোলে। এটি কেবল অ্যাপ্লিকেশনের পারফরম্যান্স উন্নত করে না, বরং ডেভেলপারদের প্রকল্পে আত্মবিশ্বাস ও নিয়ন্ত্রণ বৃদ্ধি করে।


// Garbage Collection (GC) Banglay A to Z ব্যাখ্যা:

// Garbage Collection হল এমন একটি প্রক্রিয়া যেখানে JavaScript স্বয়ংক্রিয়ভাবে অব্যবহৃত মেমরি সাফ করে ফেলে। এটি প্রোগ্রামারের জন্য একটি সুবিধা কারণ ম্যানুয়াল মেমরি ব্যবস্থাপনা করার প্রয়োজন হয় না। JavaScript ইঞ্জিন, যেমন V8 (যা Chrome এবং Node.js-এ ব্যবহৃত হয়), স্বয়ংক্রিয়ভাবে GC পরিচালনা করে।

// Garbage Collection কিভাবে কাজ করে?
// 1. মেমরি ব্যবস্থাপনার প্রাথমিক ধারণা:
// যখন একটি প্রোগ্রাম রান করে:

// Allocate memory (মেমরি বরাদ্দ): নতুন ভ্যারিয়েবল, অবজেক্ট বা ডেটা তৈরি করলে মেমরি বরাদ্দ হয়।
// Use memory (মেমরি ব্যবহার): প্রোগ্রাম চলাকালীন এটি ব্যবহার করা হয়।
// Release memory (মেমরি মুক্তি): যখন মেমরির আর প্রয়োজন নেই, তখন এটি সাফ করা হয়।
// Garbage Collection-এর কাজ হল অব্যবহৃত (unused) মেমরি সনাক্ত করা এবং সেটি সাফ করা।

// 2. Roots এবং Reachability:
// Garbage Collection-এর প্রধান ধারণা হল reachability। যদি একটি অবজেক্ট অ্যাক্সেসযোগ্য (reachable) হয়, তাহলে সেটি মেমরি থেকে সরানো হবে না।

// Roots:
// JavaScript-এ root হল:

// Global Object (window বা globalThis)।
// Call Stack-এ সক্রিয় ফাংশনের ভ্যারিয়েবল।
// Closures-এর ভ্যারিয়েবল।
// Reachable Objects:
// যে কোনো root থেকে সরাসরি বা পরোক্ষভাবে reference থাকা অবজেক্টকে reachable বলে।

// Example:

// let obj = { name: "John" }; // obj root থেকে reachable
// obj = null; // এখন আর এটি reachable নয়
// 3. Mark-and-Sweep Algorithm:
// JavaScript-এর Garbage Collection প্রধানত Mark-and-Sweep অ্যালগরিদম ব্যবহার করে।

// Step 1: Marking Phase (চিহ্নিত করা):
// Garbage Collector সব roots থেকে traverse করে এবং reachable objects চিহ্নিত করে।

// Step 2: Sweeping Phase (অব্যবহৃত মেমরি মুক্ত করা):
// Mark করা হয়নি এমন সব অবজেক্ট মেমরি থেকে সাফ করে ফেলা হয়।

// Example:

// let obj1 = { name: "Alice" };
// let obj2 = { age: 25 };
// obj1.ref = obj2; // obj1 এবং obj2 পরস্পরের সাথে যুক্ত (reachable)

// // এখন obj1 null করলে:
// obj1 = null;
// // obj2-ও unreachable হয়ে যাবে এবং Garbage Collector এটি সাফ করবে।


// Reference Counting Algorithm: Banglay Deeply Explanation with Example
// Reference Counting Algorithm একটি প্রাথমিক মেমরি ম্যানেজমেন্ট পদ্ধতি। এটি অবজেক্ট বা ডেটার reference সংখ্যা গণনা করে এবং এই reference সংখ্যা 0 হলে সেটি মেমরি থেকে সরিয়ে ফেলে।

// এই পদ্ধতি JavaScript-এর প্রাথমিক সংস্করণে ব্যবহার করা হতো। কিন্তু Circular Reference সমস্যার কারণে এটি বর্তমানে Modern Garbage Collector-এ ব্যবহৃত হয় না। তবে এই পদ্ধতির কাজ এবং সীমাবদ্ধতা বোঝা গুরুত্বপূর্ণ।

// Reference Counting Algorithm কীভাবে কাজ করে?
// Reference Count Increment (বৃদ্ধি):
// একটি নতুন অবজেক্ট তৈরি হলে তার reference count বৃদ্ধি পায়।

// Reference Count Decrement (হ্রাস):
// একটি reference অবজেক্ট থেকে সরিয়ে ফেলা হলে তার reference count হ্রাস পায়।

// Garbage Collection:
// যদি কোনো অবজেক্টের reference count 0 হয়, তাহলে সেটি মেমরি থেকে সরিয়ে ফেলা হয়।


// Reference Counting Algorithm-এর উদাহরণ
// Basic Example:
// function referenceExample() {
//   let obj1 = { name: "Alice" }; // obj1 এর reference count = 1
//   let obj2 = obj1; // obj2 obj1 কে reference করে, count = 2

//   obj1 = null; // obj1 থেকে reference সরানো হলো, count = 1
//   obj2 = null; // obj2 থেকে reference সরানো হলো, count = 0

//   // এখন obj1 এবং obj2 মেমরি থেকে সাফ হবে।
// }

// Explanation:
// obj1 অবজেক্ট তৈরি করা হলে, তার reference count হয় 1।
// obj2 = obj1 করলে, একই অবজেক্টের reference count হয় 2।
// obj1 = null করলে, reference count হয় 1।
// obj2 = null করলে, reference count হয় 0, এবং Garbage Collector সেটি মেমরি থেকে সরিয়ে ফেলে।

// Circular Reference এর সমস্যা
// Reference Counting Algorithm-এর বড় একটি সমস্যা হল Circular Reference। যখন দুই বা ততোধিক অবজেক্ট পরস্পরকে reference করে এবং তাদের reference count 0 না হয়, তখন Garbage Collector সেটিকে সাফ করতে পারে না।

// Circular Reference Example:

// function circularReference() {
//   let obj1 = {};
//   let obj2 = {};

//   obj1.ref = obj2; // obj1 obj2 কে reference করে
//   obj2.ref = obj1; // obj2 obj1 কে reference করে

//   obj1 = null; // obj1 থেকে reference সরানো হলো
//   obj2 = null; // obj2 থেকে reference সরানো হলো

//   // Circular reference থাকার কারণে, obj1 এবং obj2 মেমরি থেকে সাফ হবে না।
// }

// Explanation:
// obj1 এবং obj2 পরস্পরকে reference করে।
// যদিও obj1 এবং obj2 null করা হয়, তবুও তারা একে অপরকে reference করার কারণে reference count 0 হয় না।
// এই অবস্থা মেমরি লিক (Memory Leak) সৃষ্টি করে।


// Reference Counting Algorithm-এর সীমাবদ্ধতা:
// Circular Reference সমস্যা:
// যেমন উপরের উদাহরণে, পরস্পরকে reference করা অবজেক্ট সাফ করা যায় না।

// Performance Issue:
// প্রতিটি অবজেক্টের reference count ট্র্যাক করা computationally expensive।

// Large Data Structure:
// বড় বড় ডেটা স্ট্রাকচারগুলির reference গুনে রাখা সময় সাপেক্ষ।


// Modern Garbage Collector কেন Reference Counting ব্যবহার করে না?
// Modern Garbage Collector (যেমন V8) Mark-and-Sweep Algorithm ব্যবহার করে, কারণ এটি Circular Reference-এর সমস্যাগুলি সমাধান করতে পারে। Reference Counting শুধুমাত্র সরল এবং নির্ভুল অবজেক্ট মেমরি ম্যানেজমেন্টে ভালো কাজ করে।

// Reference Counting Algorithm এর ব্যবহারযোগ্যতা কোথায়?
// Reference Counting এখনও কিছু ক্ষেত্রে ব্যবহৃত হয়:

// Embedded Systems: যেসব সিস্টেমে সীমিত রিসোর্স থাকে।
// Programming Languages: যেমন Python এর কিছু অংশ, C++-এ shared_ptr।
// Small-Scale Applications: যেখানে Circular Reference এর সম্ভাবনা কম।


// Reference Counting Algorithm ব্যবহার করলে কীভাবে Circular Reference সমস্যা সমাধান করা যায়?
// Weak References ব্যবহার:
// Modern JavaScript এ WeakMap এবং WeakSet ব্যবহার করে Circular Reference সমস্যা এড়ানো যায়।


// function weakReferenceExample() {
//   let obj1 = {};
//   let obj2 = {};

//   let weakMap = new WeakMap();
//   weakMap.set(obj1, obj2); // WeakMap circular reference এড়ায়

//   obj1 = null; // Garbage Collector obj2 কে সাফ করবে
// }


// Reference Counting Algorithm: মূল পয়েন্ট
// Reference Counting অবজেক্টের reference সংখ্যা গুনে মেমরি ম্যানেজমেন্ট করে।
// Circular Reference সমস্যা এটি সমাধান করতে পারে না।
// Modern Garbage Collectors Mark-and-Sweep এবং Generational GC ব্যবহার করে এই সীমাবদ্ধতা দূর করেছে।
// WeakMap এবং WeakSet Circular Reference সমস্যা সমাধানে কার্যকর।






// closure
// outer function inner function refreshment..
// function outer(){
//   function inner(){
//     console.log('inner')
//   }
//   console.log('outer')
//   inner()
// }
// outer() // inner call in outer
// Answer : 
// outer
// inner

// now outer function return inner function
// function outer(){
//   return function inner(){
//     console.log('inner')
//   }
// }
// console.log(outer)
// output :
// ƒ outer(){
//   return function inner(){
//     console.log('inner')
//   }
// }
// console.log(outer())
// output :
// ƒ inner(){
//   console.log('inner')
// }
// console.log(outer()()) // Ans : inner

// function outer(){
//   return function inner(){
//     console.log('inner')
//   }
// }
// const outerFun = outer
// console.log(outerFun) // outer function definition
// // ƒ outer(){
// //   return function inner(){
// //     console.log('inner')
// //   }
// // }
// const outerCall = outerFun()
// console.log(outerCall) // inner function definition
// // ƒ inner(){
// //   console.log('inner')
// // }
// outerCall() // inner (finally inner function called)

// function outer(){
//   let x = 'hello world'
//   function inner(){
//     x = 'hii'
//     console.log(x) // Ans : hii
//   }
//   console.log(x) // Ans : hello world
//   inner()
//   console.log(x) // Ans : hii
// }
// outer()
// ekhane inner function tar parent er variable x ke access korte parche + x er value change korte parche . etaii closure er concept
// scope chain er concept clear thakle uporer example ta bujhte parbo

// baba chele example
// function baba(){
//   let bari = 'shantinikaton'
//   function chele(){
//     console.log(bari) // shantinikaton
//     bari = 'hellonikaton'
//     console.log(bari) // hellonikaton
//   }
//   chele()
//   console.log(bari) // hellonikaton
// }
// baba()
// ekhane chele tar babar sob property access korte pare and take change korte pare

// function baba(){
//   let bari = 'shantinikaton'
//   function chele(){
//     console.log(bari) // shantinikaton
//     bari = 'hellonikaton'
//     console.log(bari) // hellonikaton
//     const myProperty = 'bike'
//   }
//   chele()
//   console.log(myProperty) // error : myProperty is not defined
// }
// baba()
// kintu cheler myProperty variable baba tar scope e access korte partese na

// tahole closure ki ?
// function outer(){
//   var x = 'hello world'
//   return function inner(){
//     console.log(x)
//   }
// }
// console.log(outer)
// Ans : -->
// ƒ outer(){
//   var x = 'hello world'
//   return function inner(){
//     console.log(x)
//   }
// }

// jehetu outer function return korche inner function ke tai outer function ke call korle sekhane tar return value ta ashbe . tar mane holo outer() = function inner(){..}

// const closureFun = outer()
// ekhane outer function er return value orthat inner function ta closureFun variable e pass kora hoyeche . tai closureFun call korle inner function ke call korle jei value ashto seta ashbe
// console.log(closureFun)
// Ans : -->
// ƒ outer(){
//   var x = 'hello world'
//   return function inner(){
//     console.log(x)
//   }
// }

// closureFun() // Ans : hello world

// definition of closure
// outer function er vitor x variable jehetu inner function use koreche and sei inner function closureFun variable er vitor rakha hoyeche tai outer function execute houyar poreo outer function er variable x er ostitto theke jacche inner function orthat closureFun variable e . jotokkhon porjonto child function orthat inner function ba closureFun ke execute kora sesh hobe totokkhon variable x er ostitto thakbe . ekhane inner function taii closure

// Definition of Closure Again
// function baba(){
//   const bari = 'myHome'
//   return function chele(){
//     console.log(bari)
//   }
// }
// const amarChele = baba() // ekhaneii baba function execute hoye gese
// console.log(amarChele)
// // ƒ chele(){
// //   console.log(bari)
// // }
// amarChele() // myHome
// baba function execute hoye jauyar pore to baba function er property bari callstack theke ber hoye jauyar kotha . kintu na . baba execute houyar poreo chele function ta babar property use korte parche , totokkhon use korte parbe jotokkhon chele purapuri vabe execute na hoy . ai jinishtaii closure . ekhane chele function taii closure . karon chele onno function er property use korte parche sei property jei function e ache sei function execute houyar poreo use korte parche . tai chele function taii closure

// *******Important Notes******** 
// tar mane amr bap moira jauyar poreo ami amar bap er shompotti use korte partesi jotokkhon na ami moira jaitesi etaii closure er concept and ami hoilam closure function


// Some Example of Closure

// Example 1 :
// function outer(){
//   var x = 10;
//   function inner(){
//     console.log(x)
//   }
//   x=20;
//   return inner;
// }
// var innerFunc = outer()
// innerFunc() // Ans : 20
// innerFunc ke call korle 20 ashbe kno ? ashar kotha to 10 . karon x =20 houyar ageii inner function er definition memory te chole gese . kintu na . ekhane inner function ke use kora hoyeche innerFunc() er maddhome . totokkhone x er value 20 hoye gesilo . r jokhon innerFunc() kora holo tokhon oi somoy x ke pauyar jonno x er present memory te point kora obosthay chilo
// mot kotha ekhane outer function er x jei memory location e point kora chilo inner function er vitor x same memory address e point kora ache . tai inner er baireo jodi x er value change hoy tahole x er value inner function eo change hobe

// Example 2 :
// function outer(){
//   var x = 10;
//   function inner(){
//     var y = 5;
//     console.log(x + y)
//   }
//   var x=20;
//   return inner;
// }
// var innerFunc = outer()
// innerFunc() // Ans : 25
// var x = 20 jokhon kora hoyeche tokhon ashole ager x er 10 value ke replace kore 20 kora hoyeche . r jehetu innerFunc() hoite hoite x er value 20 kora hoise tai x = 20 ei address e point kora chilo x er value

// ******Very Important Note for Closure********
// closure jokhon kono variable ke close kore, orthat parent er kono variable ke nije use kore  tokhon sei variable er immidiate value ke dhore rakhe na . sei variable er memory address ke point kora thake . orthat jokhon closure function ta call kora hobe tokhon oi variable er present value show hobe . example niche deya holo
// for(var i = 0; i<5; i++){
//   setTimeout(function(){
//     console.log(i)
//   },1000)
// }
// Ans is expected 0 1 2 3 4 but Ans is : 5 5 5 5 5
// ekhane i=0 er somoy setTimeout ke callback queue(task queue) te rakha hocche, temni vabe i = 1, 2, 3, 4 er jonno setTimeout ke callback queue te rakha hocche. jokhon call stack khali hobe tokhon event loop er maddhome ekta ekta kore setTimeout total 5 ta setTimeout callStack e aisha ekta ekta kore execute hote thakbe . kintu jokhon execute hote thakbe tokhon to already for loop execution sesh . and last e i er value 5 hoye gesilo . tai setTimeout er i er value always 5 thakbe . karon closure always i er memory address e point kora thake

// example 4 :
// for(var i = 0; i<5; i++){
//   (function(j){
//     setTimeout(function(){
//       console.log(j)
//     },1000)
//   })(i)
// }
// Now Ans is : 0 1 2 3 4

// example 5 :
// for(let i = 0; i<5; i++){
//   setTimeout(()=>{
//     console.log(i)
//   },1000)
// }
// Ans : 0 1 2 3 4
// ********Important Note******* : ekhane let use koray loop jotobar ghurche totobar notun i variable create korche notun notun memory address e rakhche . kintu var diye loop ghuranor somoy protibar same i er value change kora hocchilo jekhane let diye protibar notun i create kora hocchilo .

// Immutability and Mutability
// definition : immutability mane jeta change kora jay na . mutability mane jeta change kora jay

// primitive data type immutable or mutable ?
// let a = 'hello'
// a = 'hii'
// console.log(a) // Ans : hii
// ekhane dekha jacche je primitive data type er value change kora jacche , tar mane ki eta mutable ? Ans is No. ekhane javascript kokhonoii ager a variable er value ke shoraiya notun value ke rakhe nai . javascript kono notun memory container er new value ta rakhse and just a er pointer ta change kore notun value jei memory address e ase setay point kortese . tar mane primitive data type sob gulaii immutable

// Object and Array is Mutable

// Higher Order Function (HOC)
// What is Higher Order Function
// Ans : jokhon kono function er parameter er vitor onno kono function ke return kora hoy othoba function ke pass kora hoy tokhon seta Higher Order Function .  amra function ke call korar somoy tar parameter e string , integer , object , array etc onk dhoroner data type er data pathai . kintu function jokhon pathabo tokhon seta higher order function

// function sayHi(){
//   console.log('Hiiii')
// }
// const x = sayHi
// x()
// console.dir(x)
// x.age = 24

// Example of Higher order function
// function a(b){
//   console.dir(b)
//   b()
// }
// function sayHi(){
//   console.log('Hiiiiiiiii')
// }
// a(sayHi)
// // a is a Higher Order Function

// function add(f){
//   console.dir(f)
//   f()
// }

//Callback function
// jokhon function ke call korar somoy onno kono function ke pass kora hoy , tokhon jei function ke pass kora hoy seta ke bola hoy callback function .
// add(function(){
//   console.log('HIIIIIII')
// })
// ekhane add() holo higher order function and add er vitor jei function pass kora hoise seta callback function


// *****Important Note*********
// function a(b){
//   console.log('Hello')
//   return b
// }
// function b(){
//   console.log('hii')
// }
// const x = a(b)
// x()
// upore a function holo higher order function and b holo callback function


// SetTimeout and SetInterval

// setTimeout
// setTimeout('console.log("Tanvir")') // Ans : Tanvir
// ekhane javascript 'console.log(true)' ai string ta ke behind the scene javascript code er moto nicche . tai true print hocche

// setTimeout('console.log("Tanvir"); console.log("Hello")') // Tanvir   Hello
// setTimeout('var a = 10; console.log(a)') // 10
// ekhane setTimeout er vitor javascript er sob code likha jay .

// setTimeout('hiii') // Error : hiii is not defined
// ekhane javascript hiii ke ekta variable hishebe dekhche tai jehetu hiii nam e kono variable nei tai error message ashce hiii is not defined

// setTimeout("const hiii = 'Hello World'; console.log(hiii)") // Hello World

// const hiii = 'Hello World!'
// setTimeout('hiii') // Not Error

//setTimeout with second parameter
// setTimeout er first parameter holo jekono javascript code . and second parameter holo time in milisecond . ai time por first parameter e deya javascript code run korbe
// second parameter holo time milisecond e . jei time por tar vitorer code run hobe
// Example :
// setTimeout('console.log("Hello World")', 2000) // Ans : Hello World (After 2 second)
// setTimeout('console.log("hii"); console.log("hello")',3000) // Ans : hii hello (After 3 second)
// setTimeout("console.log('Hello World')",3000) // Hello World (After 3 second)


// In Browser console with clearTimeout
// browser er console e setTimeout function likhe enter korle sathe sathe ekta random number ashe . seta hocche oi setTimeout er jonno timer id . jei id use kore ami sei setTimeout ke clear korte pari . karon clear na korle eta browser e theke jay
// setTimeout('console.log("1 Second")',1000)
// setTimeout('console.log("2 Second")',3000)
// setTimeout('console.log("9 Second")',9000)
// 13 ---> Timer Id of last setTimeout
// 1 Second
// 2 Second
// clearTimeout(13)
// ekhane browser console e eksathe 3 ta setTimeout deyar por Enter dile return value 13 pathay jeta kina timer id . oi timer id diyeii ami clearTimeOut kore disi 9 second er ageii . tai 9 second print hoy nai

// SetTimeout Timer Id
// const timer1 = setTimeout('console.log("set time 1")',2000)
// const timer2 = setTimeout('console.log("set time 2")',4000)
// const timer3 = setTimeout('console.log("set time 3")',9000)
// ekhane timer1, timer2, timer3 variable er vitore setTimeout set kore only setTimout gular timer id dhorar jonno . jate sei timer id diye clearTimeout korte pare

// console.log(timer1) // Ans is timer id
// console.log(timer2) // Ans is timer id
// console.log(timer3) // Ans is timer id

// ClearTimeOut
// jokhon setTimeout browser er console e run kora hoy sathe sathe ekta number return kore dey . jodi amra setTimeout kono variable e likhi tahole sei number ta variable e return hoye store hoye thakbe . jeta diye ami pore clearTimeout korte pari
// const timer1 = setTimeout('console.log("set time 1")', 2000);
// const timer2 = setTimeout('console.log("set time 2")', 4000);
// const timer3 = setTimeout('console.log("set time 3")', 9000);
// // ekhane timer1, timer2, timer3 variable er vitore setTimeout set kore only setTimout gular timer id dhorar jonno . jate sei timer id diye clearTimeout korte pare
// clearTimeout(timer2);
// clearTimeout(timer1);
// jehetu timer3 id diye clear kori nai tai 9 second por timer3 er setTimeout run hobe . r jodi timer2 and timer1 tader run korar somoyer ageii clear korte pari tahole tarao run korbe na

// setTimeout with Higher Order Function
// ******Important Notes***** :
//jehetu setTimeout er first parameter e javascript code dite pari tai setTimeout er first parameter e callback function o dite pari .
// jodi first parameter e callback function dei tahole setTimeout ke higher order function bola hobe .
// kintu callback function pass korar khetre kono single quote or double quote deya hobe na
// const timer1 = setTimeout('console.log("set time 1")',2000)
// const timer2 = setTimeout('console.log("set time 2")',4000)
// const timer3 = setTimeout(a,9000) // a ke setTimeout internally call kore
// // ekhane timer3 er setTimeout higher order function hoye gese . karon etar parameter e ekta function pass kora hoise

// function a(){
//   console.log("Hiii")
// }

// setTimeout and setInterval asynchronous code . tara task queue hoye call stack e ashe

// function a(){
//   console.log('Hello')
// }
// const timer1 = setTimeout(a,3000)
// setTimeout(()=>{
//   clearTimeout(timer1)
// },2999)


// const timer1 = setTimeout('console.log("set time 1")',0)
// const timer2 = setTimeout('console.log("set time 2")')
// const timer3 = setTimeout('console.log("set time 3")',100)

// console.log('Hello World')
// Ans : Hello World - set time 1 - set time 2 - set time 3

// setTimeout with function
// setTimeout(function(){
//   console.log('Hello World')
// },3000) // Hello World (After 3 second)

// setTimeout(()=>{
//   console.log("Hello World")
// },2000) //  Hello World (After 2 second)

// setInterval
// setTimeout er motoii concept . kintu etar second parameter e jei time deya hoy sei time por por tar code run kore . kokhono thame na . r setTimeout just 1 bar run kore sei time er por
// const timer1 = setInterval('console.log("set time 1")',1000)
// // 1 second por por output print hoite thakbe . jotokkhon na clearInterval na kora hoy timer1 id use kore

// const timer1 = setInterval('console.log("Hello")',2000)
// setTimeout(function(){
//   clearInterval(timer1)
// },11000)
// Ans : Hello
//       Hello
//       Hello
//       Hello
//       Hello
// jokhonii 12 second er mathay 6 bar run korte jabe tokhonii setTimeout 11 second por setInterval ke clear kore dise using timer1 id . 6th time Hello Print hoy nai
// setTimeout with HOC

// const timerId = setInterval(a,1000)

// function a(){
//   console.log('hiii')
// }

// Function vs Methods
// jokhon kono object er vitor kono key er moddhe kono function pass kora hoy tokhon take method bole . kintu kono object er vitor function pass na kore khola jaygay function declare korle seta normal function not method

// Arrow Function
// akhn porjonto amra 2 vabe function create kora sikhechi .
// 1. function expression
// 2. function declaration

// function expression :
// jokhon kono function ke kono variable e store kora hoy take bole function expression .
// jokhon function expression create kori tokhon function er kono name deya lage na . oi variable er moddhe anonymous function create kora hoy
// const func = function(){
//   console.log('hello world')
// }
// func() // hello world

// function declaration :
// jokhon function keyword use kore function er ekta name diye jokhon kono function create kora hoy setake function declaration bole.
// example :
// function hello(){

// } // function declaration

// ebar dekhbo arrow function

// function declaration
// function square(num){
//   return num*num;
// }
// console.log(square(4)) // 16

// function expression
// const square = function(num){
//   return num*num
// }
// console.log(square(4)) // 16

// function declaration and function expression amra arrow function diyeo korte pari . jemon...

// const square = (num)=>{
//   return num * num;
// }
// console.log(square(4)) // 16

// new feature of arrow function : jodi chai return keyword charaii kichu return korte tahole seta possible . tar jonno 1 line er moddhe function sesh korte hobe
// const square = (num) => num * num
// console.log(square(4)) // 16
// etake bole Implicit return . mane holo return keyword charai return 1 line er moddhe
// jodi return keyword use kore return kori tahole setake bole explicit return

// example :
// const add = (a,b)=> a+b;
// console.log(add(2,4)) // 6

// example :
// const random = ()=> Math.random()
// console.log(random())

// example :
// const random = num => num * num
// console.log(random(4)) // 16
// ekhane jehetu ektaii parameter ase num . tai () charaii arrow function kaj hoise . kintu 1 er beshi parameter thakle () diteii hobe.
// const add = a,b => a+b // syntex error
// const add = (a,b) => a+b // syntex okay

// another technic
// const random = () => (
//   Math.floor(Math.random() * 10) + 1
// )
// console.log(random()) // 4
// console.log(random()) // 9
// console.log(random()) // 1
// tar mane ami chaile first breaket diye return keyword charai return korte pari

// const random = () => (
//   Math.floor(Math.random() * 10) + 1
// )
// random()

// for of vs for in loop
// let fruits = ['Mango','Banana','Jackfruits','Grapes']
// for(fruit of fruits){
//   console.log(fruit)
// }
// Answer :
// Mango
// Banana
// Jackfruits
// Grapes

// let fruits = ['Mango','Banana','Jackfruits','Grapes']
// for(let fruit of fruits){
//   debugger
//   console.log(fruit)
// }
// Answer :
// Mango
// Banana
// Jackfruits
// Grapes

// then..
// console.log(fruit) // Grapes

// ekhane upore for(fruit of fruits) korar maddhome fruit ekta variable jeta var let const kichu diyeii declare hoy nai . tai by default var thake . jai hok, fruits er prottekta value ekta ekta kore protibar fruit er moddhe ashbe , and loop prottekbar execute sesh houyar pore fruit notun vabe declare hobe and fruit er moddhe fruits er next value add hobe . evabeii cholte thake for of loop
// jehetu var diye create hoise fruit tai global context e fruit khuje pauya jay . jemon..
// console.log(fruit) // Grapes
// Grapes ashce karon last value chilo Grapes. tarpor jokhon fruits er value sesh tai loop o complete hoye jay and call stack theke uthe jay . tai last value Grapes holo fruit er value

// jodi let or const diye declare kortam tahole fruit ke baire theke access kora jeto na . karon let and const block scope . r amra jani block scope ke baire theke access kora jay na .
// let and const diye declare korle global context e fruit create hoito na .

// use strict
// jodi javascript er file er top e 'use strict' dei tahole for(fruit of fruits) likhle error dito . karon fruit declare korsi var let or const keyword charai .

// ******Important Notes********
// kar kar sathe for of loop use kora jay ?
// Array, String, TypedArray, Map, Set, NodeList
// Object er sathe for of loop use kora jay na

// string with for of loop
// const fullName = 'Tanvir Ahmed'
// for(let character of fullName){
//   console.log(character)
// }
// Answer :
// T
// a
// n
// v
// i
// r
// ' '
// A
// h
// m
// e
// d

// Object with for of loops
// Object er sathe for of loop use kora jay na

// const person = {
//   firstName : 'Tanvir',
//   lastName : 'Ahmed',
//   age : 25,
//   city : 'Dhaka'
// }
// for(const p of person){
//   console.log(p) // error
// }

// Object er sathe for in loop use kora jay

// for in loop

// const person = {
//   firstName : 'Tanvir',
//   lastName : 'Ahmed',
//   age : 25,
//   city : 'Dhaka'
// }

// for(const key in person){
//   console.log(key) // eta person er sob key print korbe
// }
// for(const key in person){
//   console.log(person[key]) // eta person er sob value print korbe
// }
// for(const key in person){
//   console.log(key + ' : ' + person[key]) // key value pair print korbe
// }


// ******Important Notes*****
//kintu object ke evabe access korar jonno for in loop khubii time consume hoy . etar jonno best hocche Object.keys() or Object.values() or Object.entries() method


// Object.keys()
// const person = {
//   firstName : 'Tanvir',
//   lastName : 'Ahmed',
//   age : 25,
//   city : 'Dhaka'
// }
// const personKeys = Object.keys(person)
// console.log(personKeys) // ['firstName', 'lastName', 'age', 'city']
// Object.keys() diye personKeys er moddhe person object er sob key eksathe array akare return kora hoise personKeys er moddhe

// for of loop jehetu object er sathe loop kore na kintu array ke loop kore tai Object.keys(person) diye person er sob key ekta ekta array te rekhe return kore personKeys er moddhe deya hobe . and tarpor oi array er sathe for of loop chalaiya person er key gula print kora hoy

// for(const key of personKeys){
//   console.log(key)
// }
// Answer :
// firstName
// lastName
// age
// city

// for(let key of Object.keys(person)){
//   console.log(key)
// }
// Answer :
// firstName
// lastName
// age
// city
// upore Object.keys(person) ekta array ke represents kore rakhse . r seta holo person er sob key er array . and sei array er upor for of loop chalano hoise , array er prottekta value key variable e ashtese and console hoitese

// for(const key of personKeys){
//   console.log(person[key])
// }
// // person er sob value print hoise
// for(const key of personKeys){
//   console.log(key + ' : ' + person[key])
// }
// person er key value eksathe print hoise

// Object.values()
// Object.Keys() er motoii just , object er value ke array te return kore

// const person = {
//   firstName : 'Tanvir',
//   lastName : 'Ahmed',
//   age : 25,
//   city : 'Dhaka'
// }
// const personKeys = Object.keys(person)
// const personValues = Object.values(person)
// console.log(personKeys) // ['firstName', 'lastName', 'age', 'city']
// console.log(personValues) // ['Tanvir', 'Ahmed', 25, 'Dhaka']

// tar mane Object.keys(object_name) oi object er sob key ke serial kore ekta array te rekhe seta return kore and Object.values(object_name) oi object er sob value ke serial kore ekta array te rekhe seta return kore

// Object.entries()
// key value eksathe pair kore array return kore
// const person = {
//   firstName : 'Tanvir',
//   lastName : 'Ahmed',
//   age : 25,
//   city : 'Dhaka'
// }
// for(let item of Object.entries(person)){
//   console.log(item)
// }
// Answer :
// ['firstName', 'Tanvir']
// ['lastName', 'Ahmed']
// ['age', 25]
// ['city', 'Dhaka']
// tar mane prottekbar person key and value ke separate array te index 0 te key and index 1 e rakhe value ke

// const user = {
//   firstName : 'Tanvir',
//   lastName : 'Ahmed',
//   age : 25,
//   city : 'Dhaka',
// }
// for(let key of Object.keys(user)){
//   console.log(key)
// } // user object er sob key print hoise
// for(let value of Object.values(user)){
//   console.log(value)
// } // user object er sob value print hoise
// for(let keyValue of Object.entries(user)){
//   console.log(keyValue[0] + ' : ' + keyValue[1])
// }
// firstName : Tanvir
// lastName : Ahmed
// age : 25
// city : Dhaka

// forEach() method (ata array er upor kaj kore)
// const fruits = ['Mango', 'Banana', 'Jackfruits', 'Grapes', 'Dates']
// fruits.forEach(function(fruit){
//   console.log(fruit)
// }) // fruits er sob gula value print hoise

// forEach Method kichui return kore na , korteo dey na . jodi keu forEach method er vitore kichu return kore tahole seta kokhonoii return hoy na . always return undefined . karon amra jani jokhon kono kichuii return hoy na tokhon undefined return hoy
// const fruits = ['Mango', 'Banana', 'Jackfruits', 'Grapes', 'Dates']
// fruits.forEach(function(fruit){
//   console.log(fruit)
//   return 'Hello World'
// }) // fruits er sob gula value print hoise but kichuii return hoy nai

// index with forEach
// forEach er vitor callback function er 2nd parameter e index pass kora jay , jeta prottekta iteration index 0 theke iteration ag projonto index dibe
// const months = ['January','February','March']
// const newMonths = months.forEach((m,i)=>{
//   console.log(i,m)
// })
// Answer :
// 0 'January'
// 1 'February'
// 2 'March'

// const myName = ['Tanvir','Sadia','Maymuna','Humaira','Ayesha']
// for(let i of myName){
//   console.log(i + ' = ' + myName[i])
// }
// const user = {
//   firstName: 'Tanvir',
//   lastName: 'Ahmed',
//   age: 25,
//   isActive: true,
// }
// //Object.keys
// const keys = Object.keys(user)
// console.log(keys)

// //Object.values
// const values = Object.values(user)
// console.log(values)

// //Object.entries
// const entries = Object.entries(user)
// console.log(entries)

// for(let i in user){
//   console.log(i + ' = ' + user[i])
// }




// Map, Filter and Reduce
// map ekdom forEach er motoi . just forEach kichui return kore na , kintu map array return kore .

// const month = ['January','February','March','April','May','June']
// month.forEach((m)=> {
//   console.log(m)
//   return m
// })
// ekhane month er sob gula value return hobe kintu undefined return hobe , jodio ami return korsilam onno kichu . karon forEach kichui return kore na .
// kintu map prottekta iteration ke ekta array te serial kore rekhe oi array ta return kore . jemon..
// console.log(month.map((m)=> {
//   console.log(m)
// }))
// Answer :
// January
// February
// March
// April
// May
// June
// [undefined, undefined, undefined, undefined, undefined, undefined]
// upore month ke map korar por kichuii return kore nai dekhe prottekbar iteration e undefined ekta array te rekhe sei array last e return kore .

// console.log(month.map((m)=>{
//   console.log(m)
//   return m
// }))
// Answer :
// January
// February
// March
// April
// May
// June
// ['January', 'February', 'March', 'April', 'May', 'June']
// upore sob gula iteration er result ke ekta array er moddhe serial kore rekhe last e return kore dey

// Example :
// console.log(month.map((m)=>{
//   console.log(m)
//   if(m==='March'){
//     console.log('hello world')
//   }
//   return m
// }))
// Answer :
// January
// February
// March
// hello world
// April
// May
// June
// ['January', 'February', 'March', 'April', 'May', 'June']
// upore March er por hello world print hoise . tar mane map jei array ta return kore seta ekdom last e return kore sob gula iteration complete houyar por

// jehetu map last e sob value ke niye ekta array return kore tai amra map method ke ekta variable e store korte pari jate map er return value oi variable er moddhe store thake

// const month = ['January','February','March','April','May','June']
// const storeMonth = month.map((m)=> {
//   console.log(m)
// })
// console.log(storeMonth) // [undefined, undefined, undefined, undefined, undefined, undefined]
// sob undefined hoise karon map ekhane kichuii return kore nai .

// const storeMonth = month.map((m)=> {
//   console.log(m)
//   return m ; // prottekbar iteration sesh e current m sei array er last element e
// })
// console.log(storeMonth) // ['January', 'February', 'March', 'April', 'May', 'June']
// console.log(month === storeMonth) // false
// ekhane month er value and storeMonth er value same holeo tara alada memory te ase . tai false ashce

// ***Important Notes****
// map jei array return kore seta notun array return kore . tar mane eta array ke shallow copy kore . tar mane map main array ke change kore na , destroy kore na . notun array banaiya tarpor return kore

// index with map
// map er callback function er 2nd parameter e index pass kora jay jeta return array er index number dibe
// const month = ['January','February','March','April','May','June']
// month.map((m,i)=>{
//   console.log(i,m)
// })

// map third parameter
// const month = ['January','February','March','April','May','June']
// const newMonth = month.map((m,i,arr)=> {
//   console.log(arr)
// })
// Answer :
// ['January', 'February', 'March', 'April', 'May', 'June']
// ['January', 'February', 'March', 'April', 'May', 'June']
// ['January', 'February', 'March', 'April', 'May', 'June']
// ['January', 'February', 'March', 'April', 'May', 'June']
// ['January', 'February', 'March', 'April', 'May', 'June']
// ['January', 'February', 'March', 'April', 'May', 'June']

// ekhane last parameter holo sei array jeta main array . tar mane arr ekhane month array ke represents kortese .

// Filter
// map and filter same concept , map er motoii new array return kore kintu filter oi element keii array te return korbe jetar return value true ashbe . kintu map true false er vittite return kore na .
// const month = ['January','February','March','April','May','June']
// const newMonth = month.filter(()=> {
//   return true
// })
// console.log(newMonth) // ['January', 'February', 'March', 'April', 'May', 'June']
// ekhane prottekta iteration e jehetu return value true tai month er sob gula value niyeii return hoise

// jodi kono iteration e return false hoy tahole oi iteration er value ta array te return korbe na . jemon...

// const month = ['January', 'February', 'March', 'April', 'May', 'June']
// const newMonth = month.filter((m,i)=>{
//   console.log(i, m)
//   if(i >2){
//     return true
//   }else{
//     return false
//   }
// })
// Answer :
// 0 'January'
// 1 'February'
// 2 'March'
// 3 'April'
// 4 'May'
// 5 'June'
// console.log(newMonth) // ['April', 'May', 'June']

// tar mane filter method onektaii map er moto , just filter e return value true hoile sei iteration er value ta array te return kore, return value false hoile kore na

// Example :
// const month = ['January', 'February', 'March', 'April', 'May', 'June']
// const newMonth = month.filter((m,i)=> {
//   if(m.length <= 5){
//     return true
//   }
//   return false
// })
// console.log(newMonth) // ['March', 'April', 'May', 'June']

// Example :
// const month = ['January', 'February', 'March', 'April', 'May', 'June']
// const newMonth = month.filter((m,i)=> {
//   return m.includes('u')
// })
// console.log(newMonth) // ['January', 'February', 'June']

// Example :
// const students = [
//   {name:'Tanvir', age:25},
//   {name:'Sadia',age:16},
//   {name:'Maymuna',age:19},
//   {name:'Humaira',age:17},
// ]
// // question : 18 bosorer beshi age er student er object ekta array te return korte hobe
// const filteredStudents = students.filter((stu,i)=>{
//   return stu.age >=18
// })
// console.log(filteredStudents)
// Answer :
// {name:'Tanvir', age:25}
// {name:'Maymuna',age:19}

// complex example :
// chaining..
// const students = [
//   {name:'Tanvir', age:25},
//   {name:'Sadia',age:16},
//   {name:'Maymuna',age:19},
//   {name:'Humaira',age:17},
// ]
// const filteredStudents = students.filter((student)=>{
//   return student.age >=18
// })
// const filteredStudentName = filteredStudents.map((stu)=>{
//   return stu.name
// })
// console.log(filteredStudentName) // ['Tanvir', 'Maymuna']

// shortcut
// const filtered = students.filter((stu)=>{
//   return stu.age >= 18
// }).map((student)=> {
//   return student.name
// })
// console.log(filtered) // ['Tanvir', 'Maymuna']

// Reduce
// kono array er sob gula value ke reduce kore 1 ta value te ane
// syntex of reducer :
// array_name.reduce((accumulator,currentValue, index , array)=>{

// }, initialValue)
// Accumulator => ekotrikarok
// currentValue => current value of nums
// index => index number similar with map, forEach and filter
// array => represents of nums array similar with map , forEach and filter
// initialValue => initial value

// const nums = [1,1,2,1,1,1]
// const totalNums = nums.reduce((accumulator,currentValue) => {
//   console.log(accumulator) // 0 1 2 3 4 5 6 (add korar por current add value represent kore)
//   return accumulator + currentValue
// },0)
// console.log(totalNums) // 7
// ekhane nums array er sob number gula plus korle answer ashe 7 . reduce method diye mainly etaii kora hoy .
// initialValue ja deya hoy seta diyeii nums er index 0 er 1 er sathe add kora theke shuru kore last value porjonto add kore

// ekhane reduce method khub simple er moddhe dekhano hoise . baki ta pore dekhano hobe details


// Some and Every Method 

// Notes : 
// some() method er moddhe callback function er moddhe jei condition return kora hobe prottekta iteration er jonno tar moddhe jodi jekono 1 ta iteration er belay jodi condition true hoy tahole pura some() method true return kore . and every() method ta some method er motoi, just true return kore jodi sob gula condition true hoy . jekono ekta false hoileii return korbe false



// some() method 
// The some() method checks if any array elements pass a test (provided as a callback function).
// The some() method executes the callback function once for each array element.
// The some() method returns true (and stops) if the function returns true for one of the array elements.
// The some() method returns false if the function returns false for all of the array elements.
// The some() method does not execute the function for empty array elements.
// The some() method does not change the original array.

// Example : 
// const ages = [3, 10, 18, 20];
// ages.some((item,i)=>{
//   return item>=20
// })

// every() method 
// The every() method executes a function for each array element.
// The every() method returns true if the function returns true for all elements.
// The every() method returns false if the function returns false for one element.
// The every() method does not execute the function for empty elements.
// The every() method does not change the original array


// const ages = [3,10,23,32,54]
// function checkAge(age){
//   return age> 3
// }
// console.log(ages.every(checkAge)) // false


//Browser Object Model (BOM)

// 1. location
// 2. history
// 3. innerHeight
// 4. innerWidth
// 5. open()
// 6. close()
// 7. resizeBy()
// 8. resizeTo()
// 9. moveTo()
// 10. moveBy()
// 11. scrollBy()
// 12. Scroll()
// 13. scrollTo()
// 14. print()
// 15. document

// 1. Location
// console.log(window.location)
// console.log(location.host) // localhost:5500
// console.log(location.hostname) // localhost
// console.log(location.href) // http://localhost:5500/?hello=%27world%27#hello
// console.log(location.origin) // http://localhost:5500
// console.log(location.protocol) // http:
// console.log(location.pathname) // "/"
// console.log(location.port) // 5500
// // console.log(location.reload()) // page reload hobe
// console.log(location.search) // for get query string
// console.log(location.hash) // url er moddhe # diye kichu likhle seta return kore

//Location
// console.log(window.location.pathname)
// console.log(window.location.href)
// setTimeout(()=>{
//   window.location.reload();
// }, 10000)

//2. History

// console.log(history.forward())
// console.log(history.back())
// console.log(history.go(-2))
// console.log(history.go(4))

//Inner Height Inner Width
// console.log(innerHeight,innerWidth,outerHeight,outerWidth)

// ScrollBy
// scrollBy(0,200);
// scrollBy() er argument 2 ta . prothom ta hocche x angle e kototuku scroll korbe, 2nd argument hocche y angle e kototuku scroll korbe
// scrollBy(100,-200) // x okkhe 100px and y okkher upore 200 px

// console.log(scrollY) // Y okkhe koto tuku scroll hoye niche neme ache seta pixel value te return hoy
// console.log(scrollX) // X okkhe koto tuku scroll hoye right or left e ase seta pixel value te return hoy

// scrollTo() -- eta onekta similar scrollBy er sathe

// scroll -- etao onekta similar scrollBy er sathe

// print()
// print()

// DOM - Document Object Model
// function sayHello() {
//   document.children[0].children[1].children[4].innerText = "Hello World";
// }

// var hello = document.body.children[0].innerText = "Hello World@"
// function changeImage(){
//   document.body.children[4].src = '';
//   document.children[0].children[1].children[4].alt = 'hello image';
// }

// console.dir(document)

// const heading = document.getElementById('h1').className

// getElementsByTagName
// const hello = document.getElementsByTagName('h2');
// const hello2 = document.getElementsByTagName('img');

//getElementsByClassName
// const hello = document.getElementsByClassName('hello')

//getElementById
// const hello = document.getElementById('ids')

//querySelector
// document.querySelector('h1') // ekhane page e joto h1 tag ache tar moddhe first h1 ekhane diye dibe
// querySelectorAll
// document.querySelectorAll('h1') // ekhane page e joto h1 tag ache sob gula eksathe kore array or nodeList akare diye dibe . jekhane array er property forEach use kora jabe

// const input = document.querySelector('[type="password"]')
// const input1 = document.querySelector('input[type="password"]')

// Important Note for HTMLcollection and NodeList
// HTMLcollection e array er kono method jemon map, forEach , filter etc pauya jay na . tai html collection ke use kore array er moto use kora jay na . kintu NodeList er vitor only forEach use kora jay jeta diye amra prottekta array er element ke ekta ekta kore access korte pari .
// jodi ami chai html collection or nodeList ke pure array baniye tarpor array er sob method use korte tahole html collection or nodeList ke array te convart korte hobe

// Convert HTMLCollection to Array
// const li = document.getElementsByClassName('li')
// // Ans : HTMLCollection(3) [li.li, li.li, li.li]

// const convertLiArr = Array.from(li)
// console.log(convertLiArr)
// convertLiArr.map((l)=>{
//   console.log(l)
// })

// Convert NodeList to Array
// const li = document.querySelectorAll('.li')
// console.log(li)
// // Ans : NodeList(3) [li.li, li.li, li.li]

// const convertLiArr = Array.from(li)
// console.log(convertLiArr)
// convertLiArr.forEach((l)=>{
//   console.log(l)
// })

// let img = document.querySelectorAll('img');

// let allImages = [
//   './image/me1.jpg',
//   './image/me2.jpg',
//   './image/me3.jpg',
// ]

// img.forEach((image,i)=>{
//   image.src = allImages[i]
//   image.width = 300
// })

// for(let i = 0; i<=2; i++){
//   img[i].src = allImages[i];
//   img[i].width = '300'
// }

// for(let i = 0; i<=2; i++){
//   img[i].src = `./image/me${i+1}.jpg`
//   img[i].width = '300'
// }

// img[0].src = './image/me1.jpg'
// img[0].width = '300'

// img[1].src = './image/me2.jpg'
// img[1].width = '300'

// img[2].src = './image/me3.jpg'
// img[2].width = '300'

// let ols = document.querySelector('.ol');
// let olHello = ols.querySelector('.hello')

//copy js path
// let hello = document.querySelector("body > ol:nth-child(3) > li:nth-child(2)")

// let text = document.querySelector('.inner')

// Attribute Selector
// let att = document.querySelector("[tanvir='ahmed']")
// let att1 = document.querySelector("[tanvir='ahmed']").attributes
// let att2 = document.querySelector("[tanvir='ahmed']").attributes.tanvir
// let att3 = document.querySelector("[tanvir='ahmed']").attributes.tanvir.value

// let manualAtt = document.children[0].children[1].children[0].attributes.tanvir.value
// console.log(manualAtt)
// let manualAttBody = document.body.children[0].attributes.tanvir.value
// console.log(manualAttBody)

// let att = document.querySelector("[tanvir='ahmed']").getAttribute('class')

// const heading = document.getElementById('h1')
// console.log(heading.getAttribute('class'))
// console.log(heading.getAttribute('id'))
// console.log(heading.getAttribute('tanvir'))
// const heading = document.getElementById('h1')
// heading.setAttribute('class','test')
// // ekhane age class e heading nam e class chilo . kintu ami jokhon setAttribute diye test class set korlam tokhon ager class heading ta muche diye only test add kora hoise . tai heading class er kono css apply hobe na . only test er css apply hobe
// // jodi chai ager class o thakbe, new class o thakbe tahole...
// heading.setAttribute('class','heading test')
// // karon setAttribute always override kore thake

// function att(){
//   document.querySelector("[tanvir='ahmed']").setAttribute("id","heading")
// }
// function headings(){
//   window.document.children[0].children[1].children[0].setAttribute("id","heading")
// }

// function headings(){
//   document.querySelector("[tanvir='ahmed']").id = 'heading'
// }

// document.body.children[0].className = 'tanvirss'

// Change Style
//1. element.style.color = 'red'
//2. element.style.cssText = 'background-color: black; color: green; font-weight: 500;'
//3. element.className = 'className'
//4. element.setAttributes('class','className')
//5. element.classList.add('className')
// element.classList.remove('classNamve)
// element.classList.toggle('className') // jodi ai className thake tahole remove kore dau, jodi na thake add kore dau

// setInterval(()=>{
//   h1.classList.toggle('head') // .5s por por head class add hobe remove hobe
// },500)

// let h1 = document.querySelector('.hell')

// let ol = document.querySelectorAll('.ol li')

// ol.forEach((li)=>{
//   li.style.color = 'yellow'
// })

// for(let li of ol){
//   li.style.color = 'yellowgreen'
// }

// for(let i = 0; i<=ol.length; i++){
//   ol[i].style.color = 'pink'
// }

// cssText
// let ol = document.querySelectorAll('.ol li')

// ol.forEach((li)=>{
//   li.style.cssText = 'font-size : 40px; background-color: pink; color: red; margin-bottom: 2px; padding: 4px; text-decoration: underline'
// })

//className
// ol.forEach((li)=>{
//   li.className = 'changeCSS'
// })

//setAttribute
// ol.forEach((li)=>{
//   li.setAttribute('class','changeCSS')
// })

//classList
//   ol.forEach((li)=>{
//     // li.classList.add('changeCSS')
//     li.classList.toggle('changeCSS')
//   })
// setTimeout(()=>{
//   document.body.children[0].classList.remove('hell');
// },2000)

// some notes for class in js
// classList chara baki method e ager kono className thakleo seta override hoye jay kintu classList e ager gula ager motoii thake, just another class add or remove kora hoy

// all css style change summary
// let p = window.document.children[0].children[1];
// let allP = p.querySelectorAll('p');

// for(let i = 0; i<allP.length; i++){
//   allP[i].classList.add('helloP')
//   allP[i].classList.toggle('helloP')
//   allP[i].className = 'helloP'
//   allP[i].setAttribute('class','helloP underline')
//   allP[i].style.cssText = 'font-size: 40px; color: red;'
//   allP[i].className = 'helloP'
//   allP[i].style.color = 'red'
// }

// Access Parent , Sibling and children element

// Access Parent
// const li = document.querySelector('ul li:nth-child(3)')
// li.parentElement.parentElement // body
// li.parentElement // ul
// li.parentElement.parentElement.parentElement // html

// Access children
// const body = document.body.children[0] // h1

// Access Sibling
// const li3 = document.querySelector('ul li:nth-child(3)')
// li3.nextElementSibling.nextElementSibling // li5
// li3.nextElementSibling.nextElementSibling.nextElementSibling // null
// li3.previousElementSibling // li2
// li3.previousElementSibling.previousElementSibling //li1
// li3.previousElementSibling.previousElementSibling.previousElementSibling // null

// Access firstElementChild and lastElementChild
// const parent = document.querySelector('.parent')
// console.log(parent.firstElementChild) // parent div er first child return hobe
// console.log(parent.lastElementChild) // parent div er last child return hobe

// Node Node Node ChildNode

// const parent = document.querySelector('.parent')
// console.dir(parent.childNodes[1].childNodes[0].nodeValue)
// const newText = document.createTextNode('Hello World');
// const div = document.createElement('div')
// div.appendChild(newText)
// document.body.querySelector('.parent').appendChild(div)

//Text Node change
// let nodes = document.body.childNodes
// nodes = document.body.childNodes[2]
// document.body.childNodes[1].childNodes[0].nodeValue = 'Hello World'
// nodes = document.body.childNodes[2].nodeValue

// document.body.childNodes[2].nodeValue = 'Hii Tanvir!!'
// const node = document.childNodes[1].childNodes[2].childNodes[1]

// document.children[0].children[1].children[1].childNodes[1].childNodes[0].nodeValue = 'Hello My Love!!'

// Clone Node
// const parent = document.querySelector('.parent')
// const cloneParentWithoutChildNodes = parent.cloneNode();
// const cloneParentWithAllChildNodes = parent.cloneNode(true);
// console.log(cloneParentWithoutChildNodes)
// console.log(cloneParentWithAllChildNodes)
// parent.appendChild(parent.cloneNode(true))
// container.appendChild(h1.cloneNode())
// function cloneNodeWithoutText(){
//   container.appendChild(h1.cloneNode())
// }
// function cloneNodeWithAllNode(){
//   container.appendChild(h1.cloneNode(true))
// }

// Append & AppendChild -- append , appendChild
// Append and AppendChild kono element ke onno element er vitore cut kore last e place kore dey . kintu jodi oi element ke copy node kore tarpor appendChild or Append kore tahole oitar copy ashe kintu oi element ager jayga teii thake
// let h1 = document.querySelector('h1')
// let container = document.querySelector('.container')
// let card = document.querySelector('.card')

// document.body.appendChild(document.children[0].children[1].children[2].children[0])

// document.querySelector('body > .container').appendChild(document.querySelector('body > h1'))
// function appendH1(){
//   container.appendChild(h1)
// }
// function cloneAppend(){
//   container.appendChild(h1.cloneNode(true))
// }
// for(let i = 0; i<99; i++){
//   let newCard = card.cloneNode()
//   newCard.innerText = i+2
//   container.appendChild(newCard)
// }

// function appendH1(){
//   container.appendChild(h1)
// }

// function appendChangeNode(){
//   h1.childNodes[0].nodeValue = 'Append P is Here'
//   h1.appendChild(document.querySelector('p'))
// }
// function appendChangeDirectionNode(){
//   let newTextNode = document.createTextNode(h1.childNodes[0].nodeValue)
//   h1.childNodes[0].nodeValue = 'Append P is Here'
//   h1.appendChild(document.querySelector('p'))
//   h1.appendChild(newTextNode)
//   h1.childNodes[0].nodeValue = null
// }

// Clone Node
// container.appendChild(h1.cloneNode())
// function cloneNodeWithoutText(){
//   container.appendChild(h1.cloneNode())
// }
// function cloneNodeWithAllNode(){
//   container.appendChild(h1.cloneNode(true))
// }

// difference between append and appendChild - 3 types of differences

//1. append function return undefined but appendChild function return dom element
//Example :
//container.append(h1)
// Ans : undefined
//container.appendChild(h1)
// Ans : <h1>'all node'</h1>

//2. append function accept normal text for append but appendChild not accept any type of normal text, but appendChild accept child node . thats why first you create a text node using document.createTextNode('Hello World') then append
// EXample:
//container.append('any text');
// Ans : append Successfully in the last
// container.appendChild('any text');
// Ans : ERROR!
// But the solution is first i am creating a text node for 'any text' then put it
// Solution :
// let newTextNode = document.createTextNode('any text')
// container.appendChild(newTextNode)
// Ans : append successfully

//3. append function appended multiple node at a time but appendChild function appended not able to multiple node at a time . its append only first node
//Example :
// container.append('hello world',h1)
// Ans : append 2 at a time
// let newText = document.createTextNode('hello world')
// container.appendChild(newText,h1)
// Ans : append only first parameter , that's mean append only newText, not append h1

//Mini Project
// const container = document.querySelector('.container')
// const image = document.querySelector('.container > img')
// let j = 2
// for(let i = 1; i<100; i++){
//   if(i%3 == 0){
//     j = 1;
//   }
//   container.appendChild(image.cloneNode(true))
//   container.children[i].attributes[0].nodeValue = `./image/me${j}.jpg`
//   j++
// }

//Creatae Any Element

// Create Element -- document.createElement('div')

// const container = document.querySelector('.container')
// const para = document.createElement('p')
// para.innerText = 'Hi, My name is Tanvir Ahmed'
// // para.classList.add('para')
// // para.classList.toggle('para')
// // para.style.color = 'blue'
// // para.style.cssText = 'color : pink;'
// para.className = 'para'
// container.appendChild(para)

// simple project using document.createElement

// let container = document.body.querySelector(".container");
// let x = 1;
// let myHtml ;

// for (let i = 1; i <= 100; i++) {
//   // myHtml = myHtml + `
//   //     <div class="divCon">
//   //       <img src='./image/me${x}.JPG' alt="">
//   //       <p class="para">${i}</p>
//   //     </div>
//   //   `;

//   let div = document.createElement('div')
//   let image = document.createElement("img");
//   let paragraph = document.createElement('h4')
//   container.appendChild(div)
//   div.appendChild(image);
//   div.appendChild(paragraph)
//   div.classList.add('divCon')
//   paragraph.innerHTML = `<i>Image ${i} </i>`
//   image.src = `./image/me${x}.JPG`;
//   image.alt = `image${i}`;

//   x++;
//   if (i % 3 == 0) {
//     x = 1;
//   }
// }
// //container.innerHTML = myHtml

// Remove Element -- 2 Way
//1. OLD Way
// container.parentElement.removeChild(container) // ui container remove but memory container not remove
// container = null // remove in memory
// //2. New Way
// container.remove()// ui container remove but memory container not remove
// container = null// remove in memory

// Event Listener
//1. using onclick
//2. ondblclick
//3. addEventListener

// difference between onclick,ondblclick and adEventListener :
//1. onclick and ondblclick er khetre ek sathe multiple event thakle sob gula event fire hoy na . last event ta fire hoy . kintu addEventListener er khetre multiple listener thakleo sob gula fire hoy

// onclick
// function sayHi(){
//   console.log('clicked')
// }
// function sayHello(){
//   console.log('hello')
// }
// document.querySelector('h1').onclick = sayHi
// document.body.childNodes[1].setAttribute('onclick','console.log("helloooo")')
// document.body.childNodes[1].setAttribute('onclick','sayHello()')

// ondblclick
// function sayHi(){
//   console.log("Hello World")
// }
// document.querySelector('h1').ondblclick = sayHi
// document.body.children[0].setAttribute('ondblclick','sayHi()')
// document.children[0].children[1].childNodes[1].setAttribute('ondblclick','console.log("Helloooooo")')

// addEventListener
// syntext : element.addEventListener('event type',any type of function)
// function sayHi(){
//   console.log('hello2')
// }
// let h1 = document.querySelector('h1')
// h1.addEventListener('click',()=>{
//   console.log('hello1')
// })
// h1.addEventListener('click', sayHi)
// h1.addEventListener('click',function(){
//   console.log('hello3')
// })

// mini project with addEventListener

// using create Element
// let container = document.querySelector('.container')
// let card = document.querySelector('.card')
// card.style.cssText = 'cursor:pointer'
// let x = 0

// card.addEventListener('click',()=>{
//   x++
//   let cardItem = document.createElement('div')
//   let cardTextNode = document.createTextNode(`${x}`)
//   cardItem.appendChild(cardTextNode)
//   container.appendChild(cardItem)
//   cardItem.classList.add('card')
//   cardItem.style.cssText = 'cursor:initial'
// })

// using clone node
// let container = document.querySelector('.container')
// let card = document.querySelector('.plusIcon')
// let x = 0;

// card.addEventListener('click',()=>{
//   x++
//   let cloneCard = card.cloneNode(true)
//   cloneCard.childNodes[0].nodeValue = `${x}`
//   container.appendChild(cloneCard)
//   if(x>=1){
//     container.children[x].classList.add('card')
//     container.children[x].classList.remove('plusIcon')
//   }
// })

// Form Event and Event Object
// let input = document.querySelector('input')
// let para = document.querySelector('p')

//input event (input e kichu likhleii fire hote thake)
// input.addEventListener('input',(e)=>{
//   console.log(e)
//   para.innerText = e.target.value
// })

//change event (input er baire click korle fire hoy)
// input.addEventListener('change',(e)=>{
//   console.log(e)
//   para.innerText = e.target.value
// })

//focus event (input er vitor click korle fire hoy)
// input.addEventListener('focus',(e)=>{
//   console.log(e)
//   para.innerText = e.target.value
// })

//blur event (input er baire click korle fire hoy)
// input.addEventListener('blur',(e)=>{
//   console.log(e)
//   para.innerText = e.target.value
// })

// Form
// let form = document.querySelector('form')
// form.addEventListener('submit',(e)=>{
//   e.preventDefault()
//   console.log(e)
// })

// FormData
// let form = document.querySelector('form')
// form.addEventListener('submit',(e)=>{
//   e.preventDefault()
//   const formData = new FormData(form) // form or e.target
//   for(const p of formData.entries()){
//     console.log(p)
//   }
// })

// KeyBoard Event
// 3 types of keyboard event
//1. keyup
//2. keydown
//3. keypress

//note: jekono event jodi focus obosthay thake tahole sei element er upor keyboard event lagano jabe

//1. keypress event
// let h1 = document.querySelector('h1')
// keypress event e shift key press korle kono event hoy na
// h1.addEventListener('keypress', (e)=>{
//   console.log(e.key)
//   console.log(e)
//   e.target.childNodes[0].nodeValue = e.key
// })
//understand key code -- e.code
// window er upor keypress event dile attribute tabindex="0" deya lage na
// window.addEventListener('keypress',(e)=>{
//   console.log(e.code)
//   console.log(e.key)
// })

// //2. keyup
// // keyup and keydown event e shift kaj kore
// // sob kichu keypress er motoi , just kono key press kore dhore rakhle event fire hoy na , jodi key press kore chere dei tokhon fire hoy . aijonnoi nam keyup event
// h1.addEventListener('keyup',(e)=>{
//   console.log(e)
//   console.log(e.key)
//   console.log(e.code)
// })

//3. keydown
// ekdom keyup er biporit . press kore rakhle event fire hoy, press kore chere dile event kaj kore na
// h1.addEventListener('keydown',(e)=>{
//   console.log(e)
//   console.log(e.key)
//   console.log(e.code)
// })

// summary of keyboard event
// 1. jekono element e keyboard event dei na kno sei element er attribute e tabindex="0" eta dite hobe . kintu window or document er upor event listener lagale eta dite hobe na . maximum usecase window or document er uporeii hoye thake . bishesh kore document

// Mouse Event

// Advance Javascript (Async)
// JSON
// let data;
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => {
//         console.log(json)
//         data = json;
//       })

//Dog Api Mini Project

// let data;
// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json);
//     data = json;
//     const image = document.querySelector("#image");
//     const btn = document.querySelector("#btn");
//     image.src = json.message;
//     image.style.width = "200px";
//   });

// btn.addEventListener("click", () => {
//   let data;
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then((response) => response.json())
//     .then((json) => {
//       console.log(json);
//       data = json;
//       const image = document.querySelector("#image");
//       const btn = document.querySelector("#btn");
//       image.src = json.message;
//       image.style.width = "200px";
//     });
// });

// Localstorage
// const input = document.querySelector('input')
// localstorage e force fully myName variable create kora hoyeche. akhn input e ja type korbo seta myName variable e add kore dibo
// input.addEventListener('input',(e)=>{
//   localStorage.myName = e.target.value
// })
// localStorage er myName variable e input er text update hoye overwrite hoyeche
// Or...
// input.addEventListener('input',(e)=>{
//   localStorage.myName = e.target.value
//   document.querySelector('h1').innerText =localStorage.myName
// })

// second approach for access and update localstorage variable
// getItem and setItem
// const input = document.querySelector('input')
// console.log(localStorage.getItem('myName'))

// input.addEventListener('input',(e)=>{
//   localStorage.setItem('myAge',e.target.value)
// })

// const input = document.querySelector('input')
// const h1 = document.querySelector('h1')

// h1.innerText = localStorage.getItem('myName')

// input.addEventListener('input',(e)=>{
//   localStorage.setItem('myName',e.target.value)
//   h1.innerText = localStorage.myName
// })

// Mini Project
// const nameInput = document.querySelector('#nameInput')
// const ageInput = document.querySelector('#ageInput')

// const myData = {
//   name : '',
//   age : '',
// }

// const para1 = document.createElement('p')
// const para2 = document.createElement('p')
// const df = document.createDocumentFragment()
// para1.innerText = localStorage.getItem('name')
// para2.innerText = localStorage.getItem('age')
// para1.className = 'para1'
// para2.className = 'para2'
// df.appendChild(para1)
// df.appendChild(para2)
// document.querySelector('body').appendChild(df)

// nameInput.addEventListener('input',(e)=>{
//   myData.name = e.target.value
//   localStorage.setItem('name',myData.name)
//   document.querySelector('.para1').innerText = localStorage.getItem('name')
// })
// ageInput.addEventListener('input',(e)=>{
//   myData.age = e.target.value
//   localStorage.setItem('age',myData.age)
//   document.querySelector('.para2').innerText = localStorage.getItem('age')
// })

// set and get Object in Localstorage
// amra sorasori kono object set korte parbo na localstorage e . karon localstorage only string accept kore . tai amader sei object ke age string e convart korte hobe then oita set korte hobe . get korar somoy o sei object string hishebe ashbe . seta ke abar string to object e convart kore kaj korte hobe

// string convert technique -- JSON.stringify(obj)
// const obj = {
//   name : 'Tanvir Ahmed',
//   age : 25
// }
// console.log(obj) // {name: 'Tanvir Ahmed', age: 25}
// console.log(typeof(obj)) // object
// const stringObj = JSON.stringify(obj)
// console.log(stringObj) // {"name":"Tanvir Ahmed","age":25}
// console.log(typeof(stringObj)) // string

// Convert string to object --- JSON.parse(string)
// const obj = {
//   name : 'Tanvir Ahmed',
//   age : 25,
// }
// const stringObj = JSON.stringify(obj)
// console.log(stringObj) // '{"name":"Tanvir Ahmed","age":25}'
// console.log(typeof(stringObj)) // string

// // convert object now
// const convertObj = JSON.parse(stringObj)
// console.log(convertObj) // {name: 'Tanvir Ahmed', age: 25}
// console.log(typeof(convertObj)) // object

// Mini Project
// const nameInput = document.querySelector('#nameInput')
// const ageInput = document.querySelector('#ageInput')
// const obj = {
//   name : '',
//   age : null,
// }
// const para1 = document.createElement('p')
// const para2 = document.createElement('p')
// para1.className = 'para1'
// para2.className = 'para2'

// const df = document.createDocumentFragment()
// df.appendChild(para1)
// df.appendChild(para2)

// document.querySelector('body').insertBefore(df,nameInput)

// nameInput.addEventListener('input',(e) => {
//   obj.name = e.target.value
//   const newObj = JSON.stringify(obj)
//   localStorage.setItem('object',newObj)

// })

// ageInput.addEventListener('input', (e) => {
//   obj.age = e.target.value
//   const newObj = JSON.stringify(obj)
//   localStorage.setItem('object',newObj)

// })

// const parseObj = JSON.parse(localStorage.getItem('object'))
// para1.innerText = 'My name is '+parseObj.name

// const parseObj1 = JSON.parse(localStorage.getItem('object'))
// para2.innerText = 'My age is '+parseObj1.age

// const button = document.querySelector('button')
// button.addEventListener('click',()=>{
//   window.location.reload()
// })

// remove all data from localstorage
// localStorage.clear() // all data clear hoye jabe joto variable object array chilo sob clear hoye jabe

// remove single data from localstorage
// localStorage.removeItem('data') // data nam e ekta variable chilo localstorage e , seta delete hoye gese





// XMLHttpRequest (XHR)
// amra fetch diye kono api fetch kori , eta ashce 2015 shale . tar age manush api fetch korar jonno XMLHttpRequest (XHR) use korto

// const image = document.querySelector('img')
// const btn = document.querySelector('button')

// const xhr = new XMLHttpRequest()
// xhr.responseType = 'json'

// btn.addEventListener('click',()=>{
//   const xhr = new XMLHttpRequest()
//   xhr.responseType = 'json'

//   xhr.onload = ()=>{
//     image.src = xhr.response.message
//   }

//   xhr.open('GET','https://dog.ceo/api/breeds/image/random')
//   xhr.send()
// })

// xhr.addEventListener('load',()=>{
//   image.src = xhr.response.message
//   image.style.cssText = 'width: 200px; height: 200px'
// })
// xhr.addEventListener('error',()=>{
//   console.log(xhr.response)
// })

// xhr.open('GET','https://dog.ceo/api/breeds/image/random')
// xhr.send()

// const resolveBtn = document.querySelector("#resolveBtn");
// const rejectBtn = document.querySelector("#rejectBtn");
// const image = document.querySelector("img");

// resolveBtn.addEventListener("click", () => {
//   const xhr = new XMLHttpRequest();
//   xhr.responseType = "json";
//   xhr.addEventListener("load", () => {
//     image.src = xhr.response.message;
//     image.style.width = "200px";
//     image.style.height = "200px";
//   });
//   xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
//   xhr.send();
// });

// const resolveBtn = document.querySelector("#resolveBtn");
// const rejectBtn = document.querySelector("#rejectBtn");
// const image = document.querySelector("img");

// const xhr = new XMLHttpRequest();

// xhr.addEventListener("load", () => {
//   const response = JSON.parse(xhr.response); // JSON convert
//   image.src = response.message;
//   image.style.width = "200px";
//   image.style.height = "200px";

//   resolveBtn.addEventListener('click',()=>{
//     const xhr = new XMLHttpRequest()
//     xhr.responseType = 'json'
//     xhr.onload = ()=>{
//       image.src = xhr.response.message
//       image.style.width = '200px'
//       image.style.height = '200px'
//     }
//     xhr.open('GET','https://dog.ceo/api/breeds/image/random')
//     xhr.send()
//   })
// });

// xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
// xhr.send();

// const image = document.querySelector("#image");
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//       // const image = document.querySelector("#image");
//       // const btn = document.querySelector("#btn");
//       const xhr = new XMLHttpRequest();

//       console.log(xhr)
//       xhr.addEventListener('load',()=>{

//         console.log(xhr.response) // {"message":"https:\/\/images.dog.ceo\/breeds\/gaddi-indian\/Gaddi.jpg","status":"success"}
//         console.log(JSON.parse(xhr.response)) // xhr response object er format e ashbe

//       }) // jokhon xhr e data server theke ashbe tokhon eta run korbe

//       xhr.open('GET','https://dog.ceo/api/breeds/image/random')
//       xhr.send(); // request ke server e pathanor jonno send call kora hoy
// });

// Dog api mini project with XHR

// const image = document.querySelector("#image");
// const btn = document.querySelector("#btn");

// const xhr = new XMLHttpRequest()
// console.log(xhr)

// xhr.responseType = 'json'

// xhr.addEventListener('load',()=>{
//   // const src = JSON.parse(xhr.response)
//   btn.addEventListener('click',()=>{
//     // image.src = src.message
//     image.src = xhr.response.message
//   })
// })

// xhr.onload = ()=>{
//   btn.addEventListener('click',()=>{
//     image.src = xhr.response.message
//   })
// }

// xhr.open('GET','https://dog.ceo/api/breeds/image/random');
// xhr.send();

// Card Project using XHR

// const wrapper = document.querySelector(".wrapper");
// const btn = document.querySelector('button')

// const xhr = new XMLHttpRequest();
// console.log(xhr);
// xhr.responseType = 'json'
// xhr.onload = () => {
//   console.log(xhr);
//   btn.addEventListener('click',()=>{
//     const card = document.createElement("div");
//     const title = document.createElement("h3");
//     const text = document.createElement("p");

//   })
// };

// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
// xhr.send();

// Synchronous , Asynchronous and Ajax

// javascript single threaded houyay eksathe multiple kaj korte pare na . kintu jodi asynchrous code run kora lage, orthat jodi setTimeout, setInterval, XHR, fetch request etc er moto asynchronous code thake tahole javascript nije segula handle na kore browser ke diye dey handle korar jonno . karon browser multi threaded. pore browser oi code gula re run kore callback queue te diye rakhe . jokhon pura call stack khali hoye jay tokhon seigula event loop er maddhome call stack e giye ekta ekta kore execute hote thake . event loop holo task queue and micro task queue theke code call stack e dey . se sarakkhon check korte thake call stack khali hoise kina . call stack khali holeii task queue or micro task queue theke code call stack e niye jay
// **** Important Notes ****
// task queue theke micro task queue er priority beshi thake.

// Dog api mini project with XHR and Synchronously

// const image = document.querySelector("#image");
// const btn = document.querySelector("#btn");

// const xhr = new XMLHttpRequest()
// console.log(xhr)

// xhr.responseType = 'json'

// xhr.addEventListener('load',()=>{
//   // const src = JSON.parse(xhr.response)
//   btn.addEventListener('click',()=>{
//     // image.src = src.message
//     image.src = xhr.response.message
//   })
// })

// xhr.onload = ()=>{
//   btn.addEventListener('click',()=>{
//     image.src = xhr.response.message
//   })
// }

// xhr.open('GET','https://dog.ceo/api/breeds/image/random', false); // jokhon third argument false deya hobe tokhon seta api request synchrously korbe . by default true deya thake . tar mane hocche by default asynchrously run hoy
// xhr.send();

// console.log('hello')

// Ajax
// ajax alada kichu na . eta holo asynchronous javascript er ekta example . ajax mane holo asynchronous javascript xml

// Callback Hell

// xhr revision
// const image = document.querySelector("#image")
// const btn = document.querySelector("#btn")

// btn.addEventListener('click',()=>{
//   const xhr = new XMLHttpRequest();
//   console.log(xhr)
//   // xhr.responseType = 'json'
//   xhr.onload = ()=>{
//     const res = JSON.parse(xhr.response)
//     const {message} = res
//     image.src = message
//     image.style.width = '200px'
//     image.style.height = '200px'
//   }
//   // xhr.addEventListener('load',()=>{
//   //   console.log(xhr)
//   // })
//   xhr.open('GET','https://dog.ceo/api/breeds/image/random')
//   xhr.send();
// })

// callback hell revision

// Some important api
// 'https://dummyjson.com/users' // get all users
// 'https://dummyjson.com/users/2' // get single users by id
// 'https://dummyjson.com/posts/user/5' // get posts by user id
// 'https://dummyjson.com/comments/post/6' // get comments by post id

// const xhr = new XMLHttpRequest()
// xhr.responseType = 'json'
// xhr.addEventListener('load',()=>{

//   const xhr1 = new XMLHttpRequest()
//   xhr1.responseType = 'json'
//   xhr1.addEventListener('load',()=>{

//     const xhr2 = new XMLHttpRequest()
//     xhr2.responseType = 'json'

//     xhr2.onload = ()=>{

//       const xhr3 = new XMLHttpRequest()
//       xhr3.responseType = 'json'

//       xhr3.onload = ()=>{
//         console.log(xhr3.response)
//       }

//       xhr3.open('GET','https://dummyjson.com/comments/post/6')
//       xhr3.send()

//     }

//     xhr2.open('GET','https://dummyjson.com/posts/user/5')
//     xhr2.send()

//   })

//   xhr1.open('GET','https://dummyjson.com/users/2')
//   xhr1.send()

// })

// xhr.open('GET','https://dummyjson.com/users')
// xhr.send()

// const xhr = new XMLHttpRequest();
// xhr.responseType = "json";
// xhr.addEventListener("load", () => {
//   console.log(xhr.response);
//   const singleUser = new XMLHttpRequest();
//   singleUser.responseType = "json";
//   singleUser.onload = () => {
//     const userPost = new XMLHttpRequest();
//     userPost.responseType = "json";
//     userPost.addEventListener("load", () => {
//       console.log(userPost.response.posts[0].id);
//     });
//     userPost.open("GET", `https://dummyjson.com/posts/user/5`);
//     userPost.send();
//   };
//   singleUser.open("GET", `https://dummyjson.com/users/${xhr.response.users[3].id}`);
//   singleUser.send();
// });
// xhr.open("GET", "https://dummyjson.com/users");
// xhr.send();

// const xhr = new XMLHttpRequest()
// xhr.responseType = 'json'
// console.log(xhr.response)
// xhr.addEventListener('load',()=>{
//     const xhr1 = new XMLHttpRequest()
//     xhr1.responseType = 'json'
//     xhr1.onload = ()=>{
//         const xhr2 = new XMLHttpRequest()
//         xhr2.responseType = 'json'
//         xhr2.onload = ()=>{
//             const xhr3 = new XMLHttpRequest()
//             xhr3.responseType = 'json'
//             xhr3.onload = ()=>{
//                 console.log(xhr3.response)
//             }
//             xhr3.open('GET','https://dummyjson.com/comments/post/6')
//             xhr3.send()
//         }
//         xhr2.open('GET','https://dummyjson.com/posts/user/5')
//         xhr2.send()
//     }
//     xhr1.open('GET','https://dummyjson.com/users/0')
//     xhr1.send()
// })
// xhr.open('GET','https://dummyjson.com/users')
// xhr.send()

// const xhr = new XMLHttpRequest()
// xhr.responseType = 'json'

// xhr.onload = ()=>{
//   const xhr1 = new XMLHttpRequest()
//   xhr1.responseType = 'json'

//   xhr1.addEventListener('load',()=>{
//     const xhr2 = new XMLHttpRequest()
//     xhr2.responseType = 'json'

//     xhr2.onload = ()=>{
//       const xhr3 = new XMLHttpRequest()
//       xhr3.responseType = 'json'

//       xhr3.addEventListener('load',()=>{
//         console.log(xhr3.response)
//       })

//       xhr3.open('GET',`https://dummyjson.com/comments/post/6`)
//       xhr3.send()
//     }

//     xhr2.open('GET',`https://dummyjson.com/posts/user/5`)
//     xhr2.send()
//   })

//   xhr1.open('GET',`https://dummyjson.com/users/5`)
//   xhr1.send()
// }

// xhr.open('GET','https://dummyjson.com/users')
// xhr.send();

// Reusable function with callback hell

// function makeHttpRequest(method,url){
//     const xhr = new XMLHttpRequest()
//     xhr.responseType = 'json'
//     xhr.onload = ()=>{
//         console.log(xhr.response)
//     }
//     xhr.open(method,url)
//     xhr.send()
// }
// makeHttpRequest('GET','https://dummyjson.com/users/')

// Some important api
// 'https://dummyjson.com/users' // get all users
// 'https://dummyjson.com/users/2' // get single users by id
// 'https://dummyjson.com/posts/user/5' // get posts by user id
// 'https://dummyjson.com/comments/post/6' // get comments by post id

// function makeHttpRequest(method,url,callback){
//     const xhr = new XMLHttpRequest()
//     xhr.responseType = 'json'
//     xhr.onload = ()=>{
//         callback(xhr.response)
//     }
//     xhr.open(method,url)
//     xhr.send()
// }
// makeHttpRequest('GET','https://dummyjson.com/users/',(allUser)=>{
//     console.log(allUser.users[0].id)
//     makeHttpRequest('GET',`https://dummyjson.com/users/${allUser.users[0].id}`,(singleUser)=>{
//         console.log(singleUser.id)
//         makeHttpRequest('GET',`https://dummyjson.com/posts/user/5`,(userPost)=>{
//             console.log(userPost.posts[0].id)
//             makeHttpRequest('GET',`https://dummyjson.com/comments/post/${userPost.posts[1].id}`,(postComment)=>{
//                 console.log(postComment.comments[0].user.id)
//                 makeHttpRequest('GET',`https://dummyjson.com/users/${postComment.comments[0].user.id}`,(user)=>{
//                     console.log(user)
//                 })
//             })
//         })
//     })
// })

// function makeHttpRequest(method, url, callback) {
//   const xhr = new XMLHttpRequest();
//   console.log(xhr);
//   xhr.responseType = "json";
//   xhr.addEventListener("load", () => {
//     callback(xhr.response);
//   });
//   xhr.open(method, url);
//   xhr.send();
// }
// makeHttpRequest("GET", "https://dummyjson.com/users", (data) => {
//   console.log(data);
//   console.log("Hii");
// });
// makeHttpRequest("GET", "https://dummyjson.com/users/1", (data)=>{
//   console.log(data)
// });

// Some important api
// 'https://dummyjson.com/users' // get all users
// 'https://dummyjson.com/users/2' // get single users by id
// 'https://dummyjson.com/posts/user/5' // get posts by user id
// 'https://dummyjson.com/comments/post/6' // get comments by post id

// function makeHttpRequest(method,url,callback){
//   const xhr = new XMLHttpRequest()
//   xhr.responseType = 'json'

//   xhr.onload = () => {
//     callback(xhr.response)
//   }

//   xhr.open(method,url)
//   xhr.send()
// }
// makeHttpRequest('GET','https://dummyjson.com/users',(userData)=>{
//   console.log(userData)

//   makeHttpRequest('GET',`https://dummyjson.com/posts/user/${userData.users[0].id}`,(userPosts)=>{
//     console.log(userPosts)
//     console.log(userPosts.posts[0].id)

//     makeHttpRequest('GET',`https://dummyjson.com/comments/post/${userPosts.posts[0].id}`, (postComment)=>{
//       console.log(postComment)
//       console.log(postComment.comments[0].body)

//       makeHttpRequest('GET',`https://dummyjson.com/users/${postComment.comments[0].user.id}`,(foundUser)=>{
//         console.log(foundUser)
//       })

//     })

//   })

// })
// // This is called Callback Hell . this piramid is a callback hell

// Some important api
// 'https://dummyjson.com/users' // get all users
// 'https://dummyjson.com/users/2' // get single users by id
// 'https://dummyjson.com/posts/user/5' // get posts by user id
// 'https://dummyjson.com/comments/post/6' // get comments by post id

// function makeHttpRequest(method,url,callback){
//   const xhr = new XMLHttpRequest()
//   xhr.responseType = 'json'
//   xhr.onload = ()=>{
//     callback(xhr.response)
//   }
//   xhr.open(method,url)
//   xhr.send()
// }

// makeHttpRequest('GET','https://dummyjson.com/users',(data)=>{
//   console.log(data.users)
//   makeHttpRequest('GET',`https://dummyjson.com/users/${data.users[0].id}`,(data)=>{
//     console.log(data)
//     makeHttpRequest('GET',`https://dummyjson.com/posts/user/${data.id}`,(data)=>{
//       console.log(data.posts[0])
//       makeHttpRequest('GET',`https://dummyjson.com/comments/post/${data.posts[0].id}`,(data)=>{
//         console.log(data.comments[0])
//         console.log(data.comments[0].user.id)
//         makeHttpRequest('GET',`https://dummyjson.com/users/${data.comments[0].user.id}`,(data)=>{
//           console.log(data)
//         })
//       })
//     })
//   })
// })

// Some important api
// 'https://dummyjson.com/users' // get all users
// 'https://dummyjson.com/users/2' // get single users by id
// 'https://dummyjson.com/posts/user/5' // get posts by user id
// 'https://dummyjson.com/comments/post/6' // get comments by post id

// function makeHttpRequest(method,url,callback){
//   const xhr = new XMLHttpRequest()
//   xhr.responseType = 'json'

//   xhr.onload = ()=>{
//     callback(xhr.response)
//   }

//   xhr.open(method,url)
//   xhr.send()
// }
// makeHttpRequest('GET','https://dummyjson.com/users',(allUser)=>{
//   makeHttpRequest('GET',`https://dummyjson.com/users/${allUser.users[0].id}`,(singleUser)=>{
//     makeHttpRequest('GET',`https://dummyjson.com/posts/user/${singleUser.id}`,(userPost)=>{
//       makeHttpRequest('GET',`https://dummyjson.com/comments/post/${userPost.posts[0].id}`,(userComment)=>{
//         makeHttpRequest('GET',`https://dummyjson.com/users/${userComment.comments[0].user.id}`,(user)=>{
//           console.log(user)
//         })
//       })
//     })
//   })
// })

// Callback hell Namaste Javascript
// callback good part : for asynchronous are good
// callback bad part are two
// 1. callback hell
// 2. inversion of control

// callback hell problem discuss
// const cart = ['shoes','pants','kurta']
// amr ekta ecommerce site ase . upore cart array te amr kichu product ase
// jokhon kono user amr site e dhuke order korbe tokhon product choose kora theke shuru kore payment korar ag porjonto kichu process er moddho diye jete hoy . jemon..
// 1. Add to cart
// 2. create order
// 3. payment
// 4. order summary
// 5. update wallet
// etc...
// ekhane uporer 5 ta kaj serial maintain kore ashte hobe . add to cart na korle order create hobe na . order create na hole payment hobe na . payment na korle order er summary ashbe na . order summary na korle wallet update hobe na . jehetu kaj gula serial maintain kore korte hoy tai prottekta kajer por immidiate next kaj korar jonno oi function ke ekta callback pass kore dite hoy next kaj korar jonno . jemon..
// api.addToCart(cart,function(){
//   api.createOrder(order,function(){
//     api.payment(payment,function(){
//       api.orderSummary(orderSummary,function(){
//         api.updateWallet(updateWallet,function(){
//           // and so on...
//         })
//       })
//     })
//   })
// })
//this is callback hell
// upore add to cart kora sesh hole ekta callback function call hobe order create er jonno . tar age hobe na . then order create er por immidiate payment er callback call hobe payment er jonno . then orderSummary and so on...

// Inversion of Control (callback problem)
// callback use korar maddhome amader code er upor control loose hoye jay . kintu kivabe?
// api.addToCart(cart,function(){
//   api.createOrder()
// })
// upore addToCart api call houyar por ami tar vitore createOrder function as a callback hishebe diye dilam . i am as a developer tension free hoye gelam je automatic addToCart er kaj sesh hole se nijeii createOrder api ke call korbe callback hishebe . kintu eta ki risky ?? eta ashole onk beshi risky. kivabe risky ?
// upore onk important ekta api createOrder api er control ami nijer kache na rekhe addToCart api er moddhe diye rakhsi . ekhetre ami blindly trust kortesi addToCart api ke je se tar kaj sesh kore createOrder api ke call korbe .
// addToCart api er personal bugs thakte pare . ai addToCart api ke aro onk developer change kore dite pare . tar jonno effect porbe createOrder api er upor .

// Recap two problem of callback
// Two issues while using callbacks

// 1 - Callback hell
// When a function is passed as an argument to another function, it becomes a callback function. This process continues and there are many callbacks inside another's Callback function.
// This grows the code horizontally instead of vertically. That mechanism is known as callback hell.

// 2 - Inversion of control
// The callback function is passed to another callback, this way we lose the control of our code. We don't know what is happening behind the scene and the program becomes very difficult to maintain.
// That process is called inversion of control.

// Promises with Namaste Javascript
// const cart = ["shoes","pants","kurta"]

// // createOrder(cart) // user jokhon cart e kono item add kore tokhon createOrder function call hoy and tar parameter e cart details pass hoy .

// const promise = createOrder(cart) // jehetu eta asynchronous operation tai kichu somoy por eta execute hobe . jokhon javascript first time run hoy tokhon createOrder(cart) ekta empty object return kore promise namok variable er moddhe . jar result thakbe undefined . kintu jokhon createOrder(cart) function successfully tar kaj sesh korbe tokhon automatically ekta result same variable promise e return korbe

// promise.then(function(orderId){
//   proceedToPayment(orderId)
// })
// // jokhon async operation complete hobe tokhon automatically promise.then(()=>{..}) function call hobe. .then() er vitor callback function er parameter e sei promise er result ashbe.

// Example :
// const GITHUM_API = "https://api.github.com/users/tanvirtbf"

// const user = fetch(GITHUM_API)
// console.log(user)
// user.then((data)=>{
//   console.log(data)
// })
// Important Notes : promise jei result dey seta Immutable

// Promise Definition : kono async operation handle korar jonno eta use hoye thake . jokhonii async operation first time run hobe tokhon sathe sathe ekta promise return kore jar state hocche pending and result hocche undefined. jokhon async operation fullfill hoy, orthat micro task queue theke call stack then fully execute hoy tokhon abar automatically sei ager return kora promise er state automatically fullfill kore dey and result aisha pore .

// Promise chaining

// callback hell : =>
// const cart = ["shoes","pants","Kurta"]
// createOrder(cart,(orderId)=>{
//   proceedToPayment(orderId, (paymentInfo)=>{
//     showOrderSummery(paymentInfo,(updateWalletBalance)=>{
//       updateWalletBalance();
//     })
//   })
// })
// // same concept in promise chaining..
// createOrder(cart) // eta return korbe ekta promise
//   .then((orderId)=> proceedToPayment(orderId))
//   .then((paymentInfo)=> showOrderSummery(paymentInfo))
//   .then((updateWalletBalance)=> updateWalletBalance())
// // upore createOrder(cart) initially ekta pending promise return koreche jeta pore resolve hole automatically then() er vitor callback call hoye tar parameter e createOrder orderId pass korbe . setao ekta promise return korbe . sei promise jokhon resolve hobe abaro tar pore then() function call hobe. evabeii chaining hocche...
// // This is just Promise Chaining

// Creating a Promise, Chaining & Error Handling

// Creating a promise
// Now I will try to write our own createOrder function
// function createOrder(cart){

//   const promise = new Promise((resolve,reject)=>{
//     if(!validateCart(cart)){
//       const err = new Error("Cart is not valid")
//       reject(err)
//     }
//     const orderId = "123456"
//     if(orderId){
//       setTimeout(()=>{
//         resolve(orderId)
//       },5000)
//     }
//   })

//   return promise;
// }
// const cart = ['Shoes','Pants','Kurta']
// const promise = createOrder(cart)
// console.log(promise)
// promise
//   .then((data)=> console.log(data))

// function validateCart(cart){
//   return true;
// }

// Now Advance Promise chaining project
// callback hell : =>
// const cart = ["shoes","pants","Kurta"]
// createOrder(cart,(orderId)=>{
//   proceedToPayment(orderId, (paymentInfo)=>{
//     showOrderSummery(paymentInfo,(updateWalletBalance)=>{
//       updateWalletBalance();
//     })
//   })
// })
// const cart = ['Shoes','Kurta','Pants']
// function validateCart(cart){
//   if(cart){
//     return true
//   }else{
//     return false
//   }
// }
// function createOrder(cart){
//   const p = new Promise((resolve,reject)=>{
//     if(!validateCart(cart)){
//       const err = new Error('Cart is not defined!')
//       reject(err)
//     }
//     const orderId = "123"
//     if(orderId){
//       resolve(orderId)
//     }
//   })
//   return p;
// }

// const promise = createOrder(cart)
// promise
//   .then((orderId)=> proceedToPayment(orderId))
//   .then((paymentInfo)=> console.log(paymentInfo))

// function proceedToPayment(orderId){
//   const p = new Promise((resolve,reject)=>{
//     if(orderId){
//       const paymentInfo = "Payment info is here"
//       resolve(paymentInfo)
//     }else{
//       const err = new Error("CreateOrder are not running")
//       reject(err)
//     }
//   })
//   return p;
// }

// Again this Project
// // callback hell demo : =>
// const cart = ["shoes","pants","Kurta"]
// createOrder(cart,(orderId)=>{
//   proceedToPayment(orderId, (paymentInfo)=>{
//     showOrderSummery(paymentInfo,(updateWalletBalance)=>{
//       updateWalletBalance();
//     })
//   })
// })

// A Great Promise Project....

// const cart = ['Shoes','Pants','Kurta']
// function validateCart(cart){
//   if(cart){
//     return true
//   }
//   else{
//     return false
//   }
// }

// function createOrder(cart){
//   const p = new Promise((resolve,reject)=>{
//     if(!validateCart(cart)){
//       const err = new Error("Cart is not defined!")
//       reject(err)
//     }
//     const orderId = "123"
//     if(orderId){
//       setTimeout(()=>{
//         resolve(orderId)
//       },3000)
//     }
//   })
//   return p;
// }

// function proceedToPayment(orderId){
//   const p = new Promise((resolve,reject)=>{
//     if(!orderId){
//       const err = new Error("order id is not found!")
//       reject(err)
//     }
//     const paymentInfo = "payment is clear"
//     if(paymentInfo){
//       setTimeout(()=>{
//         resolve(paymentInfo)
//       },3000)
//     }
//   })
//   return p;
// }

// function showOrderSummery(paymentInfo){
//   return new Promise((resolve,reject)=>{
//     if(!paymentInfo){
//       const err = new Error("payment not clear!")
//       reject(err)
//     }
//     const updateWalletBalance = "1200 Taka"
//     if(updateWalletBalance){
//       setTimeout(()=>{
//         resolve(updateWalletBalance)
//       },2000)
//     }
//   })
// }

// function isSuccess(updateWalletBalance){
//   return new Promise((resolve,reject)=>{
//     if(updateWalletBalance){
//       resolve("Finally Success")
//     }else{
//       const err = new Error("Something went wrong!!")
//       reject(err)
//     }
//   })
// }

// const promise = createOrder(cart)
// promise.then((orderId)=> proceedToPayment(orderId)).then((paymentInfo)=> showOrderSummery(paymentInfo)).then((updateWalletBalance)=> console.log(updateWalletBalance))

// createOrder(cart)
//   .then((orderId)=> proceedToPayment(orderId))
//   .then((paymentInfo)=> showOrderSummery(paymentInfo))
//   .then((updateWalletBalance)=> isSuccess(updateWalletBalance))
//   .then((successORnot)=> console.log(successORnot))

// createOrder(cart)
//   .then((orderId)=>{
//     console.log('order create successfully')
//     return proceedToPayment(orderId)
//   })
//   .then((paymentInfo)=>{
//     console.log('Update Payment info')
//     return showOrderSummery(paymentInfo)
//   })
//   .then((updateWalletBalance)=> {
//     console.log("Update wallet ballance")
//     return isSuccess(updateWalletBalance)
//   })
//   .then((success)=> console.log("Finally Success all Proccess"))

// Some important api
// 'https://dummyjson.com/users' // get all users
// 'https://dummyjson.com/users/2' // get single users by id
// 'https://dummyjson.com/posts/user/5' // get posts by user id
// 'https://dummyjson.com/comments/post/6' // get comments by post id

// callback hell solved with promise
// function makeHttpRequest(method,url){
//   const xhr = new XMLHttpRequest()
//   xhr.responseType = 'json'

//   const p = new Promise((resolve,reject)=>{
//     xhr.addEventListener('load',()=>{
//       resolve(xhr.response)
//     })
//     xhr.addEventListener('error',()=>{
//       reject("Something went wrong!")
//     })
//   })
//   xhr.open(method,url)
//   xhr.send()
//   return p;
// }
// makeHttpRequest('GET','https://dummyjson.com/users')
//   .then((allUser)=> makeHttpRequest('GET',`https://dummyjson.com/users/${allUser.users[0].id}`))
//   .then((singleUser)=> makeHttpRequest('GET',`https://dummyjson.com/posts/user/${singleUser.id}`))
//   .then((userPost)=> makeHttpRequest('GET',`https://dummyjson.com/comments/post/${userPost.posts[0].id}`))
//   .then((userComment)=> makeHttpRequest('GET',`https://dummyjson.com/users/${userComment.comments[0].user.id}`))
//   .then((user)=> console.log(user))

// Promises
// Promise is a special type of object
// Promise Asynchronously kaj hoye thake
// const p = new Promise((resolve,reject)=>{
//   // resolve('tanvir')
//   // reject('tanvir')
// }) // create a promise named p

// ekta promise er 3 ta state thake
// 1. pending state
// 2. resolved state (tar mane promise fullfill hoyeche)
// 3. rejected state (tar mane jeta korte chaisilam seta reject hoyeche)

// Understand promise using setTimeout (resolve after setTimeout time)
// const p = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve({
//       fname: 'Tanvir',
//       lname: 'Ahmed',
//       age: 25,
//     })
//     console.log(p) // after 4 second :-> promiseState: fullfilled , promiseResult:{fname: 'Tanvir', lname:'Ahmed', age:25}
//   },4000)
// })
// console.log(p) // promiseState: pending , promiseResult: undefined

// Understand Promise using button click (resolve after button click)
// const btn = document.querySelector('#btn')
// const p = new Promise((resolve,reject)=>{
//   btn.addEventListener('click',()=>{
//     resolve({
//       fname: 'Tanvir',
//       lname: 'Ahmed',
//       age: 25,
//     })
//     console.log(p) // after button click :-> promiseState: fullfilled , promiseResult: {fname: 'Tanvir', lname:'Ahmed', age:25}
//   })
// })
// console.log(p) // promiseState: pending , promiseResult: undefined

// .then and .catch

// const resolveBtn = document.querySelector('#resolveBtn')
// const rejectBtn = document.querySelector('#rejectBtn')

// const p = new Promise((resolve,reject)=>{
//     resolveBtn.addEventListener('click',()=>{
//         resolve('Resolve')
//         console.log(p)
//     })
//     rejectBtn.addEventListener('click',()=>{
//         reject('Rejected!')
//         console.log(p)
//     })
// })

// const resolveBtn = document.querySelector('#resolveBtn')
// const rejectBtn = document.querySelector('#rejectBtn')
// const p = new Promise((resolve,reject)=>{
//   resolveBtn.addEventListener('click',()=>{
//     resolve({fname:'Tanvir',lname:'Ahmed',age: 25,})
//   })
//   rejectBtn.addEventListener('click',()=>{
//     reject('Promise Rejected!')
//   })
// })

// // console.log(p) korle prototype name e ekta object ase . oi object er vitore 3 ta special object ase . 1. catch() 2. finally() 3. then()

// // rules of then() -> jokhonii promise resolve hoye jabe tokhonii then() method call hoye jabe
// // rules of then() -> then() method tar vitore ekta callback function accept kore thake

// p.then(()=>{
//   console.log('promise resolved') // jokhon p promise resolved hobe tokhon ai console log print hobe
// }).catch(()=>{
//   console.log('promise rejected') // jokhon p promise reject hobe tokhon ai console log print hobe
// })

// const resolveBtn = document.querySelector('#resolveBtn')
// const rejectBtn = document.querySelector('#rejectBtn')

// const p = new Promise((resolve,reject)=>{
//     resolveBtn.addEventListener('click',()=>{
//         resolve('Resolve')
//     })
//     rejectBtn.addEventListener('click',()=>{
//         reject('Rejected!')
//     })
// })
// p.then((data)=>{
//     console.log(data)
// }).catch((data)=>{
//     console.log(data)
// })

// const resolveBtn = document.querySelector('#resolveBtn')
// const rejectBtn = document.querySelector('#rejectBtn')

// const p = new Promise((resolve,reject)=>{
//   resolveBtn.addEventListener('click',()=>{
//     resolve('Promise Resolved!')
//   })
//   rejectBtn.addEventListener('click',()=>{
//     reject('404 not found!!')
//   })
// })
// p.then((data)=>{
//   console.log(data) // Promise Resolved!
// }).catch((err)=>{
//   console.log(err) // 404 not found!!
// }).finally((data)=>{
//   console.log('Finally promise complete')
// })
// promise resolve hok or reject hok tate kichu ashe jay na , finally er code run korbeii korbe . seta ekdom last e run korbe

// ekhane resolve() function call korar somoy jei arguments 'Promise Resolved!' deya hoyechilo setai p.then((data)=>{}) er data er moddhe gese. reject er khetreo same .catch() er err er moddhe gese

// promise er kaj javascript er main thread kore na . eta browser alada vabe kore . orthat promise er code er jonno kokhono normal asynchronous code atke thake na . eta alada vabe run hoy browswer er thread er maddhome.

// difference between task queue(callback queue) and micro task queue with Promise

// {
//   setTimeout(()=>{
//     console.log('Set time out')
//   })
//   const p = new Promise((resolve,reject)=>{
//     resolve('Promise Resolved')
//   })
//   p.then((data)=>{
//     console.log(data)
//   }).catch(()=>{
//     console.log('rejected!')
//   }).finally(()=>{
//     console.log('finally')
//   })
// }
// uporer block er vitorer output holo :=>
// Promise Resolved
// finally
// Set time out
// ekhane age setTimeout thakar poreo promise er last e execute hoise . karon setTimeout by default task queue or callback queue te dhuke . and promise micro task queue te dhuke . jehetu micro task queue er priority sobcheye beshi tai micro task queue er code sobar age callstack e dhuke, jodio setTimeout age task queue te ashcilo

// {
//   setTimeout(()=>{
//     console.log('Set time out')
//   })
//   const p = new Promise((resolve,reject)=>{
//     resolve('Promise Resolved')
//   })
//   p.then((data)=>{
//     console.log(data)
//   }).catch(()=>{
//     console.log('rejected!')
//   }).finally(()=>{
//     console.log('finally')
//   })
//   setTimeout(()=>{
//     console.log('Set time out')
//   })
//   const p2 = new Promise((resolve,reject)=>{
//     resolve('Promise Resolve 2')
//   })
//   p2.then((data)=>{
//     console.log(data)
//   }).catch(()=>{
//     console.log('404')
//   }).finally(()=>{
//     console.log('finally 2')
//   })
//   setTimeout(()=>{
//     console.log('Set time out')
//   })
//   const p3 = new Promise((resolve,reject)=>{
//     reject('404 not found')
//   })
//   p3.then(()=>{
//     console.log('resolve')
//   }).catch(()=>{
//     console.log('reject')
//   }).finally(()=>{
//     console.log('finally 3')
//   })
//   setTimeout(()=>{
//     console.log('Set time out')
//   })
// }
// output :
// Promise Resolved
// Promise Resolve 2
// reject
// finally
// finally 2
// finally 3
// Set time out
// Set time out
// Set time out
// Set time out

// .then() return value

// const p = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('Resolve')
//   },2000)
// })
// console.log(p.then((data)=> data)) // return a promise
// // tar mane .then() ekta promise return kore .

// const resolveBtn = document.querySelector('#resolveBtn')
// const rejectBtn = document.querySelector('#rejectBtn')

// const p = new Promise((resolve,reject)=>{
//   resolveBtn.addEventListener('click',()=>{
//     resolve('Promise Resolve')
//   })
//   rejectBtn.addEventListener('click',()=>{
//     reject('Rejected!')
//   })
// })
// const returnThen = p.then((data)=>{
//     console.log(data)
//     return 'Hello World'
// })
// console.log(returnThen) // No Return Value . karon p.then() e dhuke nai jehetu resolve hoy nai
// setTimeout(()=>{
//     console.log(returnThen) // resolve houyar por p.then() 'Hello World' return korse
// },4000)

// const resolveBtn = document.querySelector('#resolveBtn')
// const rejectBtn = document.querySelector('#rejectBtn')

// const p = new Promise((resolve,reject)=>{
//   resolveBtn.addEventListener('click',()=>{
//     resolve('Promise Resolve')
//   })
//   rejectBtn.addEventListener('click',()=>{
//     reject('Rejected!')
//   })
// })
// console.log(p.then((data)=>{
//   console.log(data)
// })) // Promise {pending}
// .then() method ekta promise return kore . tai .then() er upor abar .then() kora jabe jehetu .then() promise return kore .

// p.then((data)=>{
//   console.log(data) // Promise Resolve
//   return 155
// }).then((data)=>{
//   console.log(data) // 155
//   return data
// }).then((data)=>{
//   console.log(data) // 155
//   return 'Hello World'
// }).then((data)=>{
//   console.log(data) // Hello World
// }).catch((data)=>{
//   console.log(data) // Rejected!
// })

// Resolve Button e click korle output :->
// Promise Resolve
// 155
// 155
// Hello World

// Reject Button e click korle output :->
// Rejected!

// const p = new Promise((res,rej)=>{
//   res({fname:'tanvir',lname:'ahmed',age:25})
//   rej('rejected!')
// })
// p.then((data)=>{
//   console.log(data)
//   return data
// }).then((data)=>{
//   console.log(data)
// })

// Let's fixed the callback hell using promises

// Some important api
// 'https://dummyjson.com/users' // get all users
// 'https://dummyjson.com/users/2' // get single users by id
// 'https://dummyjson.com/posts/user/5' // get posts by user id
// 'https://dummyjson.com/comments/post/6' // get comments by post id

// const resolveBtn = document.querySelector('#resolveBtn')
// const rejectBtn = document.querySelector('#rejectBtn')

// function makeHttpRequest(method,url){
//   const xhr = new XMLHttpRequest()
//   xhr.responseType = 'json'

//   const promise = new Promise((resolve,reject)=>{
//     xhr.addEventListener('load',()=>{
//       resolve(xhr.response)
//     })
//     xhr.addEventListener('error',()=>{
//       reject('Rejected!')
//     })
//   })

//   xhr.open(method,url)
//   xhr.send()

//   return promise
// }
// makeHttpRequest('GET','https://dummyjson.com/users')
//   .then((data)=>{
//     const promise2 = makeHttpRequest('GET',`https://dummyjson.com/users/${data.users[0].id}`)
//     return promise2
//   }).then((data)=>{
//     const promise3 = makeHttpRequest('GET',`https://dummyjson.com/posts/user/${data.id}`)
//     return promise3
//   }).then((data)=>{
//     const promise4 = makeHttpRequest('GET',`https://dummyjson.com/comments/post/${data.posts[0].id}`)
//     return promise4
//   }).then((data)=>{
//     const promise5 = makeHttpRequest('GET',`https://dummyjson.com/users/${data.comments[0].user.id}`)
//     return promise5
//   }).then((data)=>{
//     console.log(data)
//   }).catch((data)=>{
//     console.log(data)
//   })

// Some important api
// 'https://dummyjson.com/users' // get all users
// 'https://dummyjson.com/users/2' // get single users by id
// 'https://dummyjson.com/posts/user/5' // get posts by user id
// 'https://dummyjson.com/comments/post/6' // get comments by post id

// function makeHttpRequest(method,url){
//   const xhr = new XMLHttpRequest()
//   xhr.responseType = 'json'

//   const promise = new Promise((resolve,reject)=>{
//     xhr.addEventListener('load',()=>{
//       resolve(xhr.response)
//     })
//     xhr.addEventListener('error',()=>{
//       reject('Rejected!')
//     })
//   })

//   xhr.open(method,url)
//   xhr.send()

//   return promise
// }
// makeHttpRequest('GET','https://dummyjson.com/users')
//   .then((data)=>{
//     console.log(data.users[0].id)
//     return makeHttpRequest('GET',`https://dummyjson.com/users/${data.users[0].id}`)
//   }).then((data)=>{
//     console.log(data.id)
//     return makeHttpRequest('GET',`https://dummyjson.com/posts/user/${data.id}`)
//   }).then((data)=>{
//     console.log(data.posts[0].id)
//     return makeHttpRequest('GET',`https://dummyjson.com/comments/post/${data.posts[0].id}`)
//   }).then((data)=>{
//     console.log(data.comments[0].body)
//     return makeHttpRequest('GET',`https://dummyjson.com/users/${data.comments[0].user.id}`)
//   }).then((data)=>{
//     console.log(data)
//   })

// Some important api
// 'https://dummyjson.com/users' // get all users
// 'https://dummyjson.com/users/2' // get single users by id
// 'https://dummyjson.com/posts/user/5' // get posts by user id
// 'https://dummyjson.com/comments/post/6' // get comments by post id

// function makeHttpRequest(method,url){
//     const xhr = new XMLHttpRequest()
//     xhr.responseType = 'json'

//     const promise = new Promise((resolve,reject)=>{
//         xhr.addEventListener('load',()=>{
//             resolve(xhr.response)
//         })
//         xhr.addEventListener('error',()=>{
//             reject('Rejected!')
//         })
//     })

//     xhr.open(method,url)
//     xhr.send()

//     return promise;
// }

// makeHttpRequest('GET','https://dummyjson.com/users')
//     .then((allUsers)=>{
//         console.log(allUsers.users[0].id)
//         return makeHttpRequest('GET',`https://dummyjson.com/users/${allUsers.users[0].id}`)
//     }).then((singleUser)=>{
//         console.log(singleUser.id)
//         return makeHttpRequest('GET',`https://dummyjson.com/posts/user/${singleUser.id}`)
//     }).then((userPost)=>{
//         console.log(userPost.posts[0].id)
//         return makeHttpRequest('GET',`https://dummyjson.com/comments/post/${userPost.posts[0].id}`)
//     }).then((postComment)=>{
//         console.log(postComment.comments[0].user.id)
//         return makeHttpRequest('GET',`https://dummyjson.com/users/${postComment.comments[0].user.id}`)
//     }).then((user)=>{
//         console.log(user)
//     })

// Fetch

// concept
// fetch('https://dummyjson.com/products') // eta ekta pending state er promise return kore jar PromiseResult or return value hocche response object
// // jehetu uporer fetch ekta promise return kore tai tar sathe .then() lagaiya tar resolve value ta nite pari
// fetch('https://dummyjson.com/products').then((response)=>{
//   console.log(response) // response object
//   // akhn response object ke .json() diye json e convart korle setao ekta promise return kore . and sei promise er Response Result e actual data pauya jay
//   // console.log(response.json()) // pending promise // state fullfilled // promise Result = actual data
//   // tai response.json() return korle actual data puaya jay
//   return response.json() // return actual data
// }).then((data)=>{
//   console.log(data) // actual data
//   console.log(data.products) // products array
//   console.log(data.products[0]) // first product details
// })

// fetch('https://dummyjson.com/products')
//   .then((response)=> response.json())
//   .then((data) => console.log(data))

// POST Request
// fetch('https://dummyjson.com/products',{
//   method: 'GET'
// }) // this is by default GET method , there are no change to previous code
//   .then((response)=> response.json())
//   .then((data) => console.log(data))

// Now POST
// fetch('https://dummyjson.com/products/add',{
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     title: 'BMW Pencil',
//     category: 'serum'
//     /* other product data */
//   })
// })

//   .then((response)=> response.json())
//   .then((data) => console.log(data))
//   .catch((err)=>{
//     console.log(err)
//   })

// Async Await
// eta amader jonno notun kichu aina dey na . promise er sob concept ekhane ache . amra jemon vabe .then() .catch() kori sei syntex gula ektu easy kore.

// ami jokhon kono function call kori tokhon oi function theke ja return kora hoy setaii return hoy . jemon..
// function makeHttpRequest(){
//   return 'hello'
// }
// makeHttpRequest() // return - hello
// kintu jokhon kono function er age async keyword use kora hoy tokhon seta by default ekta promise return kore . jemon...
// async function makeHttpRequest(){

// }
// console.log(makeHttpRequest()) // return a promise -> state : fullfilled , result : undefined
// // kono kichu return kora hoy nai tai result e undefined ashce .
// // ai situation e by default always state fullfilled thakbe
// async function makeHttpRequest(){
//   return 1234;
// }
// console.log(makeHttpRequest()) // return a promise -> state : fullfilled , result : 1234
// // ja return koreche ai function seta promiseResult er moddhe jay .

// ***** important notes *******
// async function er khetre always state fullfilled thake . tar mane always resolve state thake . tahole reject state kivabe pauya jay ?? Answer...
// async function makeHttpRequest(){
//   throw new Error("404 not found")
// }
// console.log(makeHttpRequest())

// async function makeHttpRequest() {
//   const url = 'https://dummyjson.com/comments/post/6'
//   const data = fetch(url)
//   data.then((data)=> console.log(data))
//   console.log('hiii')
// }
// makeHttpRequest()
// hiii
// {return object}
// ekhane console.log('hiii') sobar niche thakar poreo sobar age run hoise . karon uorer then() function promise egula async code. tai etaii houyar chilo usually...

// kintu async er sathe await use korle onnorokom result ashbe
// async function makeHttpRequest(){
//   console.log('hii')
//   const url = 'https://dummyjson.com/comments/post/6'
//   const data = await fetch(url)
//   console.log('hello')
//   const json = await data.json()
//   console.log(json)
//   console.log('hellllllooooo')
// }
// makeHttpRequest()
// // hii
// // hello
// // {return object}
// // hellllllooooo
// dekhe mone hocche await use korle code synchronous hocche . kintu ashole ta na . await use korle code ektu onno vabe execute hoy . jemon..
// await use korle jokhon await wala line execute houya start kore tokhon makeHttpRequest() function ta callstack theke ber hoye jay , jotokkhon porjonto await wala line execute na hoy totokkhon porjonto callstack e makeHttpRequest function ta thake na . jehetu call stack tokhon khali thake tai makeHttpRequest function chara baki code gula run hote thake . jokhonii await wala line execute complete hoy tokhon sathe sathe makeHttpRequest function call stack e ashe , then next line theke execute start hoy . aikhetre function ta mone rakhe last time kothay chilo .

// async function makeHttpRequest(){
//   console.log('hii')
//   const url = 'https://dummyjson.com/comments/post/6'
//   const data = await fetch(url)
//   console.log('hello')
//   const json = await data.json()
//   console.log(json)
//   console.log('hellllllooooo')
// }
// makeHttpRequest()
// function getNum(){
//   console.log(5+5)
// }
// getNum()
// hii
// 10
// hello
// {return object}
// hellllllooooo
// ekhane jokhon await keyword ashce sathe sathe callstack theke makeHttpRequest function chole gese , tai getNum function execute hoise, tarpor jokhon await execute hoise tarpor theke baki code execute hoise makeHttpRequest function er

// async function makeHttpRequest(){
//   const url = 'https://dummyjson.com/comments/post/6'
//   const responseObj = await fetch(url)
//   const data = await responseObj.json() // responseObj.json() etao ekta promise return kore tai ekhaneo await use kora jay .
//   console.log(data)
// }
// makeHttpRequest()

// async function makeHttpRequest(){
//   const url = 'https://dummyjson.com/comments/post/6'
//   const data = await(await fetch(url)).json()
//   console.log(data)
// }
// makeHttpRequest()

// async function makeHttpRequest(){
//   const data = await(await fetch('https://dummyjson.com/comments/post/6')).json()
//   console.log(data)
// }
// makeHttpRequest()

// Async Await 2 rules
// 1. await keyword only oi function eii use kora jabe jei function async keyword diye declare kora hoyeche
// 2. module scope e async keyword charao top level e await keyword use kora jabe . top level mane kono function er vitor na . mane globally

// async function makeHttpRequest(){
//   const url = 'https://dummyjson.com/comments/post/6'
//   const responseObject = await fetch(url)
//   const data = await responseObject.json()
//   console.log(data)
//   return data
// }
// console.log(makeHttpRequest())

// Namaste Async Await
// async is a keyword that is use before a function for create a asynchronous function

// what is different between async function and normal function
// 1. async function always return a promise and normal function return what are returned
// 2. async function jodi kono promise return kore or non-promise value return kore , jetai return koruk , ultimately async function ekta promise return kore . jodi non-promise value , jemon string boolean number etc return kore tahole setake wrap kore ekta promise e rakhe and setake return kore . jemon...
// async function sayHi(){
//   return 'Hiii'
// }
// console.log(sayHi()) // state : fullfilled , Promise Result : 'Hiii'
// tar mane jeta return kore seta oi promise er result e rekhe dey
// async function sayhi(){
//   const p = new Promise((res,rej)=>{
//     res('resolve')
//   })
//   return p
// }
// console.log(sayhi())// sate: fullfilled, promise result : 'resolve'
// tar mane async function jodi ekta promise return kore tahole sei promise taii hubuhu return hoy . alada kono promise er vitor wrap hoy na . same promise return hoy . niche eta deya holo bistarito...

// more example : for return a non-promise value
// async function getData(){
//   return 'Namaste'
// }
// const dataPromise = getData()
// console.log(dataPromise) // return a promise where state fullfilled and result is 'Namaste'
// // kintu ami actual data Namaste string kivabe pabo??
// // Answer :
// dataPromise.then((data)=> console.log(data))

// example of promise return case
// const p = new Promise((resolve,reject)=>{
//   resolve('Promise Resolved Value')
// })

// async function getData(){
//   return p;
// }
// const dataPromise = getData()
// dataPromise.then((data)=> console.log(data)) // Promise Resolved Value
// *****Important Note*********
// jokhon kono async function kono non-promise value jemon string number boolean object array etc return kore tokhon seta kono ekta promise er vitor wrap kore rakha hoy and sei promise ta return hoy . return non-promise value gula sei promise er promise result er vitor thake
// r jokhon kono async function another kono promise ke return kore tokhon sei async function hubuhu sei promise tai return kore dey . jemon upore alada vabe create kora p promise ta jokhon async function er vitor return kora hoy tokhon hubuhu p promise taii async function return kore

// How do you use async along with await
// async and await combo is use to handle promises
// But before async await how do you use to handle promises? why do we need even async await ? do i really need async await? sob answer niche..

// first : kivabe promise handle kora hoto age, akhn kivabe promise handle kora hoy async await er maddhome
// old approach
// const p = new Promise((resolve,reject)=>{
//   resolve('Promise Resolve Value!')
// })
// function getData(){
//   p.then((data)=> console.log(data))
// }
// getData() // Promise Resolve Value!

// async await for handled promise
// const p = new Promise((resolve,reject)=>{
//   resolve('Promise Resolve Value!')
// })
// async function handlePromise(){
//   const val = await p;
//   console.log(val)
// }
// handlePromise() // Promise Resolve Value!

// ****Important Notes****
// await keyword sudhu promise er ageii lekha hoy . promise chara onno kichur age await keyword lekha jabe na .

// Important difference between older way and async await way..

// older way :
// const p = new Promise((resolve,reject)=> {
//   setTimeout(()=>{
//     resolve("Promise Resolve Value!")
//   },5000)
// })
// function getData(){
//   console.log('Hello')
//   p.then((data)=> console.log(data))
//   console.log('hiii')
//   console.log('hiii')
//   console.log('hiii')
// }
// getData()
// Hello
// hiii
// hiii
// hiii
// hiii
// Promise Resolve Value! (After 5 Second )

// karon p.then((....)) eta async operation , tai eta task queue te jabe jotokkhon na call stack khali hobe tar age call stack e ashbe na . jokhon sob console.log() call stack theke execute hoye call stack khali hoye jabe tokhon p.then((...)) aisha execute hobe . tai p.then() er porer code age execute hoise
// this is older way

// Now Async Await way or Latest way to handle promises

// const p = new Promise((resolve,reject)=> {
//   setTimeout(()=>{
//     resolve('Promise Resolve Value!')
//   },4000)
// })
// async function getData(){
//   console.log('Hello World')
//   const data = await p;
//   console.log('Hiii')
//   console.log(data)
//   console.log('hello')
// }
// getData()
// Hello World
// After 4 Second...
// Hiii
// Promise Resolve Value!
// helllo

// upore first time Hello World print hoye gese . tarpor 4 second r kono console.log() print hoy nai . pore 4 second por eksathe Hii , Promise Resolve Value! and hello print hoy .

// another example of async await..
// const p1 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("Resolved 1")
//   },5000)
// })
// const p2 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("Resolved 2")
//   },3000)
// })
// async function getData(){
//   console.log('Hello World')
//   const promise1 = await p1;
//   console.log('After P1')
//   console.log(promise1)
//   const promise2 = await p2;
//   console.log('After P2')
//   console.log(promise2)
// }
// getData()
// Hello World
// After 5 second...
// After p1
// Resolve 1
// After p2
// Resolve 2

// upore kintu 3 second por p2 chole nai . sob eksathe promise resolve houyar poreii getData() function ta call stack e ashce
// ***** Important Notes ******
// async await er khetre jokhon async function getData call hoy tokhon call stack e getData() ashe . then console.log('Hello World') print kore . jokhon porer line promise1 = await p1 execute korte jay tokhonii sathe sathe getData() function ta call stack theke ber hoye jay and tarpor joto gula promise ase await diye declare kore rakhse sob gula eksathe execute kore . jotokkhon porjonto kono await promise execute bad jabe totokkhon getData() call stack e jabe na . uporer example e p1 and p2 ai 2 ta promise await diye declare korse . tai jotokkhon porjonto ai 2 ta promise resolve na hocche totokkhon porjonto getData() function call stack e jabe na .
// p1 5 second por resolve hobe, p2 hobe 3 second por . jotokkhon na sob gula promise resolve hocche totokkhon getData() function call stack e firbe na . tai ekhane total 5 second lagbe getData() function ta call stack e giya pura execute complete korte . karon p2 jodio 3 second e execute kore boshe ase kintu p1 to 5 second poreii execute hobe. that's why...




// Object Oriented Programming

// 4 Pillars of Object Oriented Programming
// 1. Encapsulation
// 2. Abstraction
// 3. Inheritance
// 4. Polymorphism

// Encapsulation

// function getAgeYear(age){
//   return new Date().getFullYear() - age
// }
// console.log(getAgeYear(25)) // 1999
// // eta hocche ager procedural programming code lekhar style . tarpor ashlo OOP

// // OOP diye uporer problem ta solve kora hocche..
// const user = {
//   firstName : 'Tanvir',
//   lastName : 'Ahmed',
//   age : 25,
//   getAgeYear : function(){
//     return new Date().getFullYear() - user.age
//   }
// }
// console.log(user.getAgeYear()) // 1999

// Encapsulation er mane hocche alada alada jinish ke ek jaygay rakha . upore variable gula + function sob user er vitore rakha hoyeche . data and logic sob kichui user er vitor rakha hoyeche . eta Encapsulation er ekta main definition .
// kintu arekta definition ase Encapsulation er . seta hocche data hiding . tar mane hocche user object ta bairer duniyar theke hidden . tar mane baire theke user ke keu change korte parbe na . jodi getAgeYear function ke baire define kora hoito, then user object er vitore call kora hoito taile getAgeYear function ke user object charaii independent vabe je keu access korte parto . eta Encapsulation er rules break kore . uporer user object ke baire theke change kora jabe + Access kora jabe . tai bola jay je akhno purapuri vabe user object ta Encapsulation hoy nai . kichu ta Encapsulation hoyeche .
// onno programming language e hiding er jonno private keyword use kore variable declare kora hoy jate data hiding thake . tar mane user object ke jate baire theke change kora na jay . kintu javascript e private keyword nei . ekhane (#) diye private kora jay . eta pore dekhano hobe

// Abstraction
// er simple definition hocche hiding the complexity
// amar logic user ke dekhanor dorkar nei . user sudhu tar kajer sathe thakbe .
// amra jemon keyboard er vibinno button click kori . amra jani space button click korle ki hobe, delete button click korle ki hobe . amader aita dekhar dorkar nei je behind the scene ai button click er por ki ki operation hocche , ki ki logic cholche egula user ke dekhanor dorkar nei . etaii hocche hiding the complexity . tar mane hocche user ke behind the scene logic complexity egula dekhanor dorkar nei . sudhu user jei kaj korbe seta korar jonnoi playground toiri kore dite hobe

// function getAgeYear(age){
//   return new Date().getFullYear() - age
// }
// getAgeYear(25) // return value is : 1999
// ai function taii Abstraction achieve korse . karon jokhon kono user eta ke call korbe tokhon user just age input dibe and sei onujayi tar birth year ber hoye ashbe . tar kase hide kora hoyeche behind the scene ki ki logic complexity choltese . etai Abstraction

// Factory function

// why need factory function?...
// const user1 = {
//   firstName : 'Tanvir',
//   lastName : 'Ahmed',
//   age : 25,
//   getAgeYear : function(){
//     return new Date().getFullYear() - user1.age
//   }
// }
// const user2 = {
//   firstName : 'Tanvir',
//   lastName : 'Ahmed',
//   age : 25,
//   getAgeYear : function(){
//     return new Date().getFullYear() - user2.age
//   }
// }
// const user3 = {
//   firstName : 'Tanvir',
//   lastName : 'Ahmed',
//   age : 25,
//   getAgeYear : function(){
//     return new Date().getFullYear() - user3.age
//   }
// }
// ekhane jotogula user create korbo totogula object ekhane create kora lagtese . jodi 1 hajar user thake tahole 1 hajar ta object create kora lagtese . ei problem solve korar jonno factory function create hoise



// Create Factory function
// function createUser(firstName,lastName,age){
//   const user = {
//     firstName : firstName,
//     lastName : lastName,
//     age : age,
//     getAgeYear : function(){
//       return new Date().getFullYear - user.age
//     }
//   }
//   return user
// }
// const user1 = createUser('Aman','Ahmed',23)
// const user2 = createUser('Aman','Ahmed',23)
// const user3 = createUser('Aman','Ahmed',23)
// upore khub kom code use kore barbar notun user create kora jacche .
// kintu ekhetre ekta problem ase . seta holo user1, user2, user3 sob gula teii getAgeyear function duplicate hoitese . jodio getAgeYear er definition sob khetre same , kintu tao prottekbar user create hole oi user er jonno alada alada vabe getAgeYear function alada alada memory te create hoitese . kintu jehetu same definition tai alada alada memory te thaka ta logical na .  aivabe function store korle onk memory khoroch hoye jabe .
// console.log(user1.getAgeYear === user2.getAgeYear )// false
// tar mane prottekta user er jonno getAgeYear alada alada memory te store hocche jodio ai function er definition sobar jonno same .
// tahole to ai function ke baire rakhleii valo . tahole same memory te point thakbe sob user er jonno . jemon...
// function createUser(firstName,lastName,age){
//   const user = {
//     firstName : firstName,
//     lastName : lastName,
//     age : age,
//     getAgeYear : getAgeYear,
//   }
//   return user
// }
// function getAgeYear(age){
//   return new Date().getFullYear - age
// }
// const user1 = createUser('Aman','Ahmed',23)
// const user2 = createUser('Aman','Ahmed',23)
// const user3 = createUser('Aman','Ahmed',23)

// tahole evabeii korle memory khoroch onk kom hoy . karon getAgeYear ai khetre 1 taii memory location dokhol kore rakhse sob user er jonno . kintu eta korle to OOP concept taii thakbe na . tai getAgeYear ke  baire declare kora jabe na . vitoreii declare kore ai problem er solve korte hobe
// ai problem ta solve korse Constractor function

// example :
// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// console.log(arr1.pop === arr2.pop) // true
// tar mane arr1 and arr2 er khetre pop method same memory address e rakha hoyeche . erokom hajar ta array er jonno same memory location er pop method use kora hoyeche . er dara memory khoroch onk kombe . etaii constractor function diye kora jay


// Constructor Function and new Keyword

// this
// function createUser(firstName,lastName,age){
//   const user = {
//     firstName : firstName,
//     lastName : lastName,
//     age : age,
//     getAgeYear : getAgeYear,
//   }
//   return user
// }
// function getAgeYear(age){
//   console.log(this)
//   // return new Date().getFullYear - user.age
// }
// const user1 = createUser('Aman','Ahmed',23)
// const user2 = createUser('Aman','Ahmed',55)
// const user3 = createUser('Aman','Ahmed',72)

// getAgeYear() // window object ke point korse . karon getAgeYear globally call kora hoyeche
// user1.getAgeYear() // user1 object ta output ashce , ekhane this jehetu user1 object er vitore ase tai user1 object kei point kore ase this

// // this :-> this jei object er vitore thake sei object ke point kore thake . globally this keyword window object ke point kore thake . r jodi this kono object or onno kichur vitor theke call hoy tahole oi object or jeikhan theke call hoise take point kore thake

// console.log(user1.getAgeYear === user2.getAgeYear) // true
// console.log(user1.getAgeYear === user3.getAgeYear) // true
// // tar mane jotoi user create kori tader sobar jonno getAgeYear function ektaii . orthat same memory address e ase . tai memory khoroch o kom
// // kintu ekhetre Encapsulation er rules break hoy . rules onujayii sob variable logic everything eksathe thakte hobe . kintu ekhane getAgeYear function ta object er baire . abar object er vitore anle prottek user er jonno alada alada getAgeYear memory te create hoye memory khoroch baraiya dibe . ai somosshar somadhan hocche Constractor function
// // Polymorphism
// // kintu ekhane polymorphism rules apply hoye gese . polymorphism hocche ektaii function kintu alada alada rup . tar mane hocche same getAgeYear function taii alada alada user er jonno alada alada vabe kaj kortese, alada alada rup toiri kortese. upore same function getAgeYear prottekta user er jonnoa alada alada vabe kaj kortese . etaii polymorphism

// How to create key value pair on the function and get a common methods
// createUser.hello = 'world'
// console.log(createUser.hello) // world
// // ekhane createUser ekta function houyar poreo ami er sathe key value pair create korte partesi . karon prottekta function behind the scene object hoye thake
// console.dir(createUser) // ekhane ami hello = 'world' pabo

// Common Methods Technique
// function createUser(firstName,lastName,age){
//   const user = {
//     firstName : firstName,
//     lastName : lastName,
//     age : age,
//     getAgeYear : createUser.commonMethods.getAgeYear
//   }
//   return user
// }

// // create common methods
// createUser.commonMethods = {
//   getAgeYear : function(age){
//     return new Date().getFullYear - this.age
//   }
// }

// const user1 = createUser('Aman','Ahmed',23)
// const user2 = createUser('Aman','Ahmed',55)

// console.log(user2.getAgeYear === user1.getAgeYear) // true

// akhn amader problem solve hoise . karon ekhane Encapsulation er rules break hoy nai + abstraction er rules o break hoy nai . tar sathe memory khoroch o hoy nai . karon same memory address e ase getAgeYear function ta .
// kintu ekhane onk extra code lekha lagse

// function createUser(fname,lname,age){
//   const user = {
//     fname,
//     lname,
//     age,
//     getBirthYear : createUser.commonMethods.getBirthYear,
//   }
//   return user;
// }
// createUser.commonMethods = {
//   getBirthYear (){
//     return new Date().getFullYear() - this.age
//   }
// } // ekhane evabe nije theke commonmethods set korar dorkar nei . javascript nijei eta kore dey constractor er maddhome
// const user1 = createUser('Tanvir','Ahmed',25)
// console.log(user1.getBirthYear())

// Prototype

// function sayHi(){

// }
// console.dir(sayHi)
// // duniyar jekono function hok sekhane prototype object thake

// console.log(sayHi.prototype) // in prototype

// use of prototype
// function sayHi(){
//   console.log('hii')
// }
// sayHi() // print hii and return value is undefined
// function sayHello(){
//   console.log('hello')
//   return 'Hello World'
// }
// sayHello() // print hello and return value is Hello World (console e giye sayHello() command dile Hello World return value ashe . echara ashe na)

// new keyword
// function sayHi(){

// }
// console.log(sayHi()) // return undefined
// console.log(new sayHi()) // return a object
// // jokhon amra new keyword use kore kono function ke call korle amader ekta object return kore , jodio sei function kono kichu return kore nai tao ekta object return kore.
// function sayHi(){
//   return 'hello'
// }
// console.log(new sayHi()) // not return 'hello' , return a object
// // tar mane new keyword diye kono function call korle sei function jei data return koruk na kno oi function oi jinish ta return korbe na . se tar nijer motoi ekta object return korbe jeta se function kono kichu return na korleo korto

// definition of new keyword
// jokhon new keyword diye kono function call kora hoy tokhon se nije ekta object create kore and sei object ke automatic return kore dey .

// new keyword jei object return kortese sei object e amra chaile onk property set korte pari
// tar age this er useCase bujhte hobe new keyword er belay

// function sayHi(){
//   console.log(this)
// }
// console.log(sayHi()) // print window object
// console.log(new sayHi()) // jei object ta new keyword create and return kore automatically sei object keii print korse . tar mane new keyword use kore function call korle sei function er vitor this keyword ashole sei function jei object return kortese setakeii point kore thake

// function createUser(fname,lname,age){
//   const user = {
//     firstName : fname,
//     lastName : lname,
//     age : age,
//     getBirthYear : createUser.prototype.getBirthYear
//   }
//   return user;
// }
// createUser.prototype.getBirthYear = function(){
//   return new Date().getFullYear() - this.age
// }
// const user1 = new createUser('Tanvir','Ahmed',25)
// console.log(user1.getBirthYear())

// function createUser(fname,lname,age){
//   this.firstName = fname
// }
// const user1 = new createUser('Tanvir','Ahmed',25)
// console.log(user1.firstName)

// function createUser(fname,lname,age){
//   this.firstName = fname
//   this.lastName = lname
//   this.age = age
// }
// const user1 = new createUser('Tanvir','Ahmed',25)
// const user2 = new createUser('Sadia','Ahmed',16)

// important notes*****
// jokhon new keyword use kore kono function ke call kore tokhon sei function ke bola hoy constractor function . same function jodi new keyword use kore call kora na hoy tahole seta normal function

// function createUser(fname,lname,age){
//   this.firstName = fname
//   this.lastName = lname
//   this.age = age
// }
// const user1 = createUser('Tanvir','Ahmed',25)
// console.log(user1) // undefined . karon jehetu new keyword use kore createUser function call kora hoy nai tai kono kichui return kora hoy nai user1 variable er kache . tai undefined ashce

// // important notes*****
// // upore createUser jehetu normal function , normal function karon take new keyword use kore call kora hoy nai tai createUser er vitor this keyword window object ke point kore ache . tar mane createUser er vitor firstName, lastName, age aigula window object er vitor set hoyeche .
// console.log(window.firstName)// Tanvir
// console.log(window.lastName)// Ahmed
// console.log(window.age) // 25
// // jehetu window object er vitor set hoise tai amra window.firstName na diye only firstName dite pari
// console.log(firstName)// Tanvir
// console.log(lastName)// Ahmed
// console.log(age) // 25

// function createUser(fname,lname,age){
//   this.firstName = fname
//   this.lastName = lname
//   this.age = age
// }
// const user1 = new createUser('Tanvir','Ahmed',25)
// const user2 = new createUser('Sadia','Ahmed',16)

// console.log(user1) // createUser {firstName: 'Tanvir', lastName: 'Ahmed', age: 25}
// console.log(user2) // createUser {firstName: 'Sadia', lastName: 'Ahmed', age: 16}

// // akhn dekhbo kivabe common methods user1 , user2 object e automatically chole jay

// // createUser er vitore prototype object ase . tar vitore constructor function ase . jei constructor function createUser function er definition hold kore rakhe . new keywrod diye jokhon createUser call kore user1 and user2 create kora holo tokhono user1 and user2 er vitore same constructor function jay
// // jemon..
// console.log(createUser.prototype.constructor === user1.__proto__.constructor) // true
// console.log(createUser.prototype.constructor === user2.__proto__.constructor) // true
// console.log(user1.__proto__.constructor === user2.__proto__.constructor) // true
// // tar mane createUser er vitor jei constructor function ase segula user1 , user2 and jotogula user create hobe sob gular moddhei same memory address er function thakbe

// function createUser(fname,lname,age){
//   this.firstName = fname
//   this.lastName = lname
//   this.age = age
// }
// createUser.prototype.getBirthYear = function(){
//   return new Date().getFullYear() - this.age
// }
// const user1 = new createUser('Tanvir','Ahmed',25)
// const user2 = new createUser('Sadia','Ahmed',16)

// console.log(createUser.prototype.constructor === user1.__proto__.constructor) // true
// console.log(user1.__proto__.getBirthYear) // ƒ (){ return new Date().getFullYear() - this.age}
// console.log(user2.__proto__.getBirthYear) // ƒ (){ return new Date().getFullYear() - this.age}
// // upore createUser er prototype e getBirthYear function set kore dise , sathe satheii user1 and user2 object sei getBirthYear function er access peye gese tader prototype e

// function createUser(fname,lname,age){
//   this.fname = fname
//   this.lname = lname
//   this.age = age
// }
// const user1 = new createUser('Tanvir','Ahmed',25)
// const user2 = new createUser('Sadia','Ahmed',16)

// console.log(user1===user2) // false
// console.log(user1===createUser) // false
// console.log(user2===createUser) // false
// // tar mane user1, user2 and createUser alada alada memory te store hoise
// // kintu createUser er vitor prototype er vitor jei constructor function ase seta user1, user2, user3... erokom sob user er jonno same memory allocation e ase .
// console.log(user1.__proto__) // prototype object
// console.log(createUser.prototype) // prototype object
// console.log(user2.__proto__) // prototype object

// console.log(user1.__proto__ === user2.__proto__) // true
// console.log(user1.__proto__ === createUser.prototype) // true
// console.log(user2.__proto__ === createUser.prototype) // true

// // tar mane createUser tar prototype object sob user er sathe share korse same memory address e rekheii .

// console.log(user1.__proto__.constructor === user2.__proto__.constructor) // true
// console.log(createUser.prototype.constructor === user1.__proto__.constructor) // true
// console.log(createUser.prototype.constructor === user2.__proto__.constructor) // true

// jehetu createUser tar prototye object share korse sobar sathe tai prototype object er vitor constructor function o sobar sathe share koreche

// *****Important Notes*****
// jehetu createUser er prototype object sob user er sathe share kore tai ami jodi createUser er prototype object e kono function or onno kichu set kori tahole createUser theke create houya sob object setar access nite parbe

// function createUser(fname,lname,age){
//   const user = {
//     firstName : fname,
//     lastName : lname,
//     age : age,
//     getBirthYear : createUser.prototype.getBirthYear
//   }
//   return user
// }
// createUser.prototype.getBirthYear = function(){
//   return new Date().getFullYear() - this.age
// }
// const user1 = createUser('Tanvir','Ahmed',25)
// const user2 = createUser('Tanvir','Ahmed',25)
// console.log(user1.getBirthYear === user2.getBirthYear) // true

// set common function for all user
// function createUser(fname,lname,age){
//   this.firstName = fname
//   this.lastName = lname
//   this.age = age
// }

// createUser.prototype.getBirthYear = function(){
//   return new Date().getFullYear() - this.age
// }
// createUser.prototype.getFullName = function(){
//   return this.firstName + ' ' + this.lastName
// }

// const user1 = new createUser('Tanvir','Ahmed',25)
// const user2 = new createUser('Sadia','Ahmed',15)
// const user3 = new createUser('Maymuna','Khatun',18)
// console.log(user1.getBirthYear()) // 1999
// console.log(user2.getBirthYear()) // 2009
// console.log(user3.getBirthYear()) // 2006
// console.log(user1.getFullName()) // Tanvir Ahmed
// console.log(user2.getFullName()) // Sadia Ahmed

// function createUser(fname,lname,age){
//   this.firstName = fname
//   this.lastName = lname
//   this.age = age
// }
// createUser.prototype.getBirthYear = function(){
//   return new Date().getFullYear() - this.age
// }
// createUser.prototype.getFullName = function(){
//   return this.firstName + ' ' + this.lastName
// }
// // ***Important Notes*** -> ekhane createUser er baire aisha getBirthYear and getFullName set kora lagtesee . etao Encapsulation rules break kore . aijonnoi classes er intro hoy
// const user1 = new createUser('Tanvir','Ahmed',25)
// const user2 = new createUser('Sadia','Khatun',16)
// console.log(user1.getFullName()) // Inheit hoye getFullName access hoise tai user1 er por __proto__ deya lage na

// ********Very Very Important Notes*************
// jokhon new keyword diye kono function call kora hoy tokhon seta obosshoi obosshoi ekta object return korbe . oi function er moddhe ami ja kisu kori na kno sob kichu oi object er moddhe set kora thakbe . jemon niche createUser er moddhe this use kore firstname, lastname , age etc set kora hoise . ja set kora hoise sob kichu oi object er moddhe thakbe jeta new keyword use kore function call korle return kore . tarpor jodi oi function use kore kono object create kora hoy tokhon automatic sei object er sob property tar jonno alada vabe duplicate hoye return hoy . evabe user1, user2, user3.... onk object create hoy . sob gular jonnoi er vitorer sob property copy hoye ashe . jar karone user1.firstName change korle user2 er firstName change hoy na . function object array string integer jai set kori na kno seta copy hoye ashe user1, user2 egular moddhe .
// kintu...
// createUser er prototype er moddhe kono kichu set korle seta sob user der moddhe reference hishebe jay . copy hoye jay na .

// function createUser(fname,lname,age){
//   this.firstName = fname;
//   this.lastName = lname;
//   this.age = age;
//   this.myFun = function(){
//     return new Date().getFullYear() - age
//   }
//   this.myArr = [1,2,3,4,5]
// }

// createUser.prototype.fullArray = [100,200,300,400,500]
// createUser.prototype.getFullName = function(){
//   return this.firstName+" "+this.lastName;
// }
// createUser.prototype.myAddress = function(address){
//   return address
// }

// const user1 = new createUser('Tanvir','Ahmed',25)
// const user2 = new createUser('Sadia','Hatun',16)

// console.log(user1.myFun())
// console.log(user2.myFun())
// console.log(user1.myFun===user2.myFun) // false
// console.log(user1.lastName===user2.lastName) // false
// console.log(user1.myArr===user2.myArr) // false

// console.log(user1.fullArray === user2.fullArray) // true
// console.log(user1.getFullName())
// console.log(user2.getFullName())

// console.log(user1.myAddress('Dhaka'))
// console.log(user1.myAddress('Brahmonbaria'))
// console.log(user1.myAddress===user2.myAddress) // true

// console.log(user1.fullArray===user2.fullArray) // true
// user1.fullArray = [1,2,3]
// console.log(user2.fullArray)

// Classes
// class createUser {
//   getFullName (fullName){
//     return fullName
//   }
// }

// createUser.prototype.getBirthYear = function(age){
//   return new Date().getFullYear() - age
// }

// const user1 = new createUser()
// console.log(user1.getFullName('Tanvir Ahmed')) // Tanvir Ahmed
// console.log(user1.__proto__.getFullName('Hello')) // Hello

// akhn porjonto amader jei somossha ta chilo createUser er prototype er vitor kono method or property set korte hoito . class just ai problem tai solve kore . baki sob ager process eii hocche .
// upore getFullName function ta createUser er prototype er vitor set hoise . jekhane age getBirthYear function jevabe create korsi sevabe getFullName function create kortam prototype er moddhe.

// Another Example :
// class createUser{
//   getBirthYear(age){
//     return new Date().getFullYear() - age
//   }
//   getFullName(name){
//     return name
//   }
// }
// // createUser.prototype.getBirthYear= function(age){
// //   return new Date().getFullYear() - age
// // }
// // createUser.prototype.getFullName = function(name){
// //   return name
// // }
// const user1 = new createUser('Tanvir','Ahmed',25)
// const user2 = new createUser('Sadia','Ahmed',16)
// console.log(user1.getBirthYear(25))
// console.log(user2.getBirthYear(16))
// console.log(user1.getFullName('Tanvir Ahmed'))
// console.log(user2.getFullName('Sadia Ahmed'))

// class createUser{

//   getBirthYear (age){
//     return new Date().getFullYear() - age
//   }
//   getFullName (name){
//     return name
//   }
// }

// const user1 = new createUser('Tanvir','Ahmed',25)
// const user2 = new createUser('Sadia','Hatun',16)

// console.log(user1.getBirthYear(25)) // 1999
// console.log(user1.__proto__.getBirthYear(16)) // 2008
// console.log(user1.getBirthYear===user2.getBirthYear) // true
// console.log(user2.getFullName===user1.getFullName) // true

// constructor function
// upore createUser() function call korar somoy tar argument e 'Tanvir','Ahmed' and 25 deya ase . egula kothay jabe ? egula kivabe createUser function e access korbo ?
// Answer is Constructor function

// What is Constructor function ?
// jokhon kono class ke call kora hoy tokhon sei class er baki method gula sei class er prototype er moddhe set hoye jay . kintu kono kichu execute hoy na . execute hoy sudhu constructor function . jodi ami kono class ke new keyword diye kono class ke call kori tokhon constructor function sathe sathe automatic call hoy and tar vitor sob code execute hoy .
// upore createUser er moddhe argument gula constructor function recieve korte pare

// Example of Constructor function
// class createUser{

//   constructor(fname,lname,age){
//     console.log(fname,lname,age)
//   }

//   getFullName(name){
//     return name
//   }
//   getBirthYear(age){
//     return new Date().getFullYear() - age
//   }
// }
// const user1 = new createUser('Tanvir','Ahmed',25) // user1 er moddhe createUser call kore tar return value object ta user1 er moddhe rakha hoise . kintu jehetu createUser call hoise ekhane tai automatic createUser er moddhe thaka constructor function tao call hoye gese and execute hoise . jehetu tar vitor console.log() ase tai ai console e seta print hobe . print hoyeche -> Tanvir Ahmed 25
// const user2 = new createUser('Sadia','Hatun',16) // user2 er moddhe createUser call kore tar return value object ta user1 er moddhe rakha hoise . kintu jehetu createUser call hoise ekhane tai automatic createUser er moddhe thaka constructor function tao call hoye gese and execute hoise . jehetu tar vitor console.log() ase tai ai console e seta print hobe . print hoyeche -> Sadia Hatun 16

// class createUser{
//   constructor(fname,lname,age){
//     this.firstName = fname;
//     this.lastName = lname;
//     this.age = age;
//     console.log('Hello World')
//   }
//   getFullName(){
//     return this.firstName + " " + this.lastName
//   }
// }
// const user1 = new createUser('Tanvir','Ahmed',25)
// const user2 = new createUser('Sadia','Hatun',16)

// console.dir(user2.getFullName())

// Private
// class createUser{
//   #age // jekono private variable niye kaj korar age eta ke age evabe declare korte hoy # diye
//   constructor(fname,lname,age){
//     this.firstName = fname;
//     this.lastName = lname;
//     this.#age = age;
//     console.log('Hello World')
//   }
//   h1 = 'hello world!' // (ai variable ta user1, user2, user3... sob variable e aisha porbe)
//   #h2 = 'Hello'
//   getFullName(){
//     return this.firstName + " " + this.lastName
//   }
//   getBirthYear(){
//     return new Date().getFullYear() - this.#age
//   }
//   #privateFun(){
//     console.log('Hello Private Function')
//   }
// }
// const user1 = new createUser('Tanvir','Ahmed',25)
// const user2 = new createUser('Sadia','Hatun',16)

// console.dir(user2.getFullName()) // Sadia Hatun
// console.log(user2.getBirthYear()) // 2008
// // console.log(user2.#age) // error (karon eta private property)

// Geeky Shows Advance Javascript
// DOM definition (What is Document Object Model - v.3)
// 1. The Document Object Model(DOM) is a Application Programming Interface (API) for HTML and XML documents.
// 2. With the Document Object Model, Programmers can create and build documents, navigate their structure, and add, modify, or delete elements and content.
// 3. The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as javascript.
// 4. The DOM model represents a document with a logical tree.
// 5. According to Document Object Model (DOM), everyt HTML-tag is an object. Nested tags are called "children" of the enclosing one. All operations on the DOM start with the document object. From it we can access any node.
// 6. The Document Object Model can be used with any programming language like python php etc.

// Document Tree (v.4)
// Notes :
// 1. Element Node : joto html tag ase sob gula ke bola hoy Element Node
// 2. Text Node : kono tag er vitor text thakle setake Text Node bole . Text Node DOM er vitor onno kothau create hoy .jei tag er vitor text ase sei tag er vitor text node create hoy na.
// 3. Attribute Node : tag er vitor joto attribute ase sob gula Attribute Node
// 4. Comment Node : comment gula Comment Node

// DOM Node Types :
// 1. Element Node er type holo 1. tar mane jodi kono Element er type ber kora hoy tahole return value ashe 1 . jodi kono Node er return value 1 ashe tahole bujhte hobe seta Element Node.
// 2. Text Node er type holo 3. tar mane jodi kono Text er type ber kora hoy tahole return value ashe 3 . jodi kono Node er return value 3 ashe tahole bujhte hobe seta Text Node.
// 3. Comment Node er type holo 8. tar mane jodi kono Comment er type ber kora hoy tahole return value ashbe 8. jodi kono Node er return value 8 ashe tahole bujhte hobe seta Comment Node.
// 4. Document Node er type holo 9. tar mane jodi document er type ber kora hoy tahole return value ashbe 9. jodi kono Node er return value 9 ashe tahole bujhte hobe seta Document Node.
// 5. Document Type Node is 10.
// 6. Document Fragment Node is 11.

// Node Relationship
// 1. Parent
// 2. Children
// 3. First Child
// 4. Previous Sibling
// 5. Next Sibling
// 6. Last Child

// getElementById Method (v.5)
// Element Access Method
// 1. document.getElementById("ID_Name") -> Get the element with the specified ID
// 2. document.getElementsByTagName("Tag_Name") -> Get all the specified element by the Tag Name
// 3. document.getElementsByClassName("Class_Name") -> Get all the specified element By the Class Name
// 4. document.querySelector("CSS_Selector") -> It returns the first match of the passed selector string
// 5. document.querySelectorAll("CSS_Selector") -> It returns a node list of DOM elements that match the query

// *****Important Notes******
// jekono element access method use kore kono element ke find kori na kno sob khetreii ekta element object return kore sei element access method , jodi seta khuje pay...
// jemon...
// console.log(document.getElementById("geek"))
// // <p id="geek">Hello Tanvir</p>
// console.dir(document.getElementById("geek"))
// // p Object jekhane onk property ase

// // tar mane jekono element access method object return kore . tai setake kono variable e hold kora jay
// var p = document.getElementById("geek")
// console.log(p) // <p id="geek">Hello Tanvir</p>
// console.dir(p) // p Object

// getElementsByTagName Method (v.6)
// The method getElementsByTagName("Tag_Name") returns a live node list meaning that it updates itself with the DOM tree automatically, so modification of the DOM tree will be reflected in the returned collection. The returned Node List or Collection of Nodes can be accessed by index numbers starting with index 0.
// upore getElementById te kono nodeList or Collection return kore na, oikhane single object return kore . karon getElementById diye single element ke access kora jay . kintu getElementsByTagName er khetre same tag onkgula thakte pare . sob gulake list akare or collection akare return kore, like an array . tai index number diyeo access kora jay.
// This method accepts a string indicating the type of elements that be retrieved, a special value "*" returns all elements in the document
// document.getElementsByTagName("p") // eta return korbe ekta list . tai etake kono variable e store korte hobe.
// const p = document.getElementsByTagName("p") // p variable er moddhe list ta aisha porse
// console.log(p) // HTMLCollection(2) [0] = p#geek [1] = p#find
// console.log(p[0]) // <p id="geek">Hello Tanvir</p>
// console.log(p[1]) // <p id="find">Bye Tanvir</p>
// console.log(p.geek) // <p id="geek">Hello Tanvir</p>
// console.log(p.find) // <p id="find">Bye Tanvir</p>
// console.log(p.length) // 2 (karon p tag ase total 2 ta)

// Convert HTMLCollection to Array (using Array.from())
// const allList = document.getElementsByClassName('list')
// var arr = Array.from( allList )
// console.log(arr)

// You can use the length property of the NodeList object to determine the number of elements with the specified tag name, then you can loop through all elements and extract the info you want

// const allElementOfDocument = document.getElementsByTagName("*") // HTMLCollection(14) - all element return
// console.log(allElementOfDocument.length) // 14 (total 13 element ase pura web page e)

// const allElementOfBody = document.body.getElementsByTagName("*")// document er vitor body object deya ase . kintu onno tag directly deya nei . tai body chara onno kono tag shorashori access kora jay na
// console.log(allElementOfBody) // return all element in body

// getElementsByTagName More Specific Method (v.7)

// var geek = document.getElementById("geek")
// var span = geek.getElementsByTagName("span")
// console.log(span) // Html Collection(2)

// var result = document.getElementById("geek").getElementsByTagName("span")
// console.log(result)
// // span == result

// var allGeekElement = document.getElementById("geek").getElementsByTagName("*")
// console.log(allGeekElement) // ekhane block level element thakle ashbe na . karon * use kore element select korte chaile only inline element select hobe

// getElementsByTagName Method with Loop (v.9)
// const div = document.getElementById('div')
// const listOfParagraph = div.getElementsByTagName('p')

// for(let i = 0 ; i<listOfParagraph.length ; i++){
//   console.log(listOfParagraph[i])
// }

// getElementsByClassName Method (v.10 to v.13)
// const geek = document.getElementsByClassName('geek') // Html Collection with length

// when one element two class...
// <p class="card wrapper container">hello world</p>
// const p = document.getElementsByClassName("card wrapper")
// console.log(p) // ekhane amon element er collection return hobe jar vitore card and wrapper ai 2 ta class eksathe thakbe .

// const para = document.getElementsByClassName('para')
// for(let i = 0; i<para.length; i++){
//   console.log(para[i])
// }

// querySelector
// The method querySelector() returns the first Element match of the specified selector, or group of selectors. If no matches are found, null is returned.

// Element selector
// document.querySelector('p') // return first p tag
// // Id Selector
// document.querySelector('#geek') // return first geek id element
// // Class Selector
// document.querySelector('.geek') // return first geek class element

// // double selector
// const hello = document.querySelector('#geek, .hello')
// console.log(hello) // jodi webpage er age hello class pay pore geek id pay tahole hello class er element return hobe . jodi geek age pay tahole geek element return hobe . jodi geek na pay, kintu hello pay tahole hello return hobe . jodi hello na pay kintu geek pay tahole geek return hobe

// Notes : id use korle same result pabo getElementById use korle.

// querySelectorAll
// The method querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.
// The Nodelist object represents a collection of nodes. The Nodes can be accessed by index numbers. The index starts at 0.
// You can use the length property of the NodeList object to determine the number of elements that matches the specified selector, then you can loop through all elements and extract the info you want.
// If the specified selectors include a CSS pseudo-element, the returned list is always empty.

// // Element Selector
// document.querySelectorAll("p") // all p tag return with nodelist
// document.querySelectorAll("p, div, h1, h4") // sob gula tag eksathe serial by nodelist akare return korbe
// var result = document.querySelectorAll("p, div, h1")
// console.log(result) // NodeList(9) [h1.hello, h1, p.geek, p.find, div.div, p.para, p.para, p.para, p.para]

// // Id Selector
// alaways return nodeList, event selection only one element
// var result = document.querySelectorAll("#geek")
// console.log(result) // this is also return nodeList // NodeList(2) [h2#geek, p#geek]

// // Class Selector
// document.querySelectorAll(".geek") // geek class er sob element eksathe return hobe NodeList akare
// document.querySelectorAll("p.myClass") // p tag er vitor joto gula myClass nam e class ase sob element ke eksathe return kore NodeList akare
// const p = document.querySelectorAll("p > span.myclass") // p tag er vitore span tag er moddhe jegular class myclass deya sob gula nodelist akare return

// // Attribute Selector
// document.querySelectorAll("div[id]") // jei div er vitore id ase...
// document.querySelectorAll("div[id='geek']") // jei div er vitor id ase and tar value geek...
// document.querySelectorAll("[id='geek']") // jei element e id ase and tar value geek...

// var result = document.querySelectorAll('[id="geek"]')
// console.log(result) // NodeList(2) [h2#geek, p#geek]

// var result = document.querySelectorAll('[id]')
// console.log(result) // NodeList(3) [h2#geek, p#geek, p#firstPara.para]

// var result = document.querySelectorAll('div > p[id]')
// console.log(result) // NodeList [p#firstPara.para]

// QuerySelectorAll More Specified Method

/* <div id="show">
<p class="para" id="firstPara">
  <span class="myspan">inside</span>
</p>
<p class="para">2nd</p>
<p class="para">3rd</p>
<p class="para">4th</p>
</div> */
// question : jei div er id show, tar vitor p tag er vitor jodi kono span thake jar class myspan sei element ke return korte hobe

// let result = document.querySelectorAll("#show > p > span.myspan") //id show er vitor giye p tag er vitor dhuke check koro kon span er className myspan
// console.log(result) // NodeList [span.myspan]

// querySelectorAll Method with Length Property and loop (v.17 and v.18)
// const result = document.querySelectorAll("html > body > div#show > .para")
// console.log(result) // NodeList(4) [p#firstPara.para, p.para, p.para, p.para]
// const length = result.length
// for(let i = 0; i<length; i++){
//   console.log(result[i])
// }

// loop with forEach
// result.forEach((item,index)=>{
// console.log(item)
// })

// Web Page Properties (v.19)
// console.dir(document)

// console.log(document.URL) // http://localhost:5500/
// console.log(document.location.port) // 5500
// console.log(document.location.pathname) // "/"
// // document.location.reload // reload hobe
// console.log(document.location.href) // http://localhost:5500/
// console.log(document.domain) // localhost
// console.log(document.title)
// etc.....

// Properties of Node Object (v.20)
// 1. nodeName
// 2. nodeValue
// 3. nodeType
// 4. textContent
// 5. parentNode
// 6. childNodes
// 7. firstChild
// 8. lastChild
// 9. previousSibling
// 10. nextSibling

// ****Important Notes****
// prottekta node er vitor uporer 10 ta object thake . segula diye node er vibinno kaj kora hoy . jemon nodeName diye sei node er name ber kora hoy . nodeValue diye sei node er nijossho kono value thakle seta ber kora hoy . nodeType diye sei node er type ber kora hoy . textContent diye sei node er vitor sob text ber kora hoy . parentNode diye sei node er parent node ber kora hoy . childNodes diye sei node er vitor joto gula node ase sob ber kora hoy . firstChild diye sei node er vitor first child node ber kora hoy...and so on.

// 1. nodeName
// The nodeName read-only property returns the name of the current node as a string
// Example :
// const h2 = document.querySelector('h2')
// console.dir(h2)
// console.log(h2.nodeName) // H2

// all of nodeName
// CDATASection ---- "#cdata-section"
// Comment ---------- "#comment"
// Document ---------- "#document"
// DocumentFragment----- "#document-fragment"
// DocumentType ------- The Value of DocumentType.name
// Element --------- The value of Element.tagName
// Entity ---------- The entity name
// EntityReference -------- The name of entity reference
// Notation ----------- The notation name
// ProcessingInstruction ---------- The value of ProcessingInstruction.target
// Text --------- "#text"

// uporer nodeName gula vibinno node er nodeName er return value . niche kichu example deya holo...
// console.log(document.childNodes[0].nodeName) // html (html node chilo)
// console.log(document.body.childNodes[0].nodeName) // #text (text node chilo)
// console.log(document.body.childNodes[11].nodeName) // #comment (comment node chilo)
// console.log(document.body.childNodes[13].nodeName) // SCRIPT (script node chilo)

// console.log(document.nodeName) // #document

// nodeValue
// The nodeValue property returns or sets the value of the current node
// nodeValue return korar kaj o kore thake and kono value set korar kaj o kore thake

// all of nodeValue
// CDATASection ---- content of the CDATA Section
// Comment ---------- content of the comment
// Document ---------- null
// DocumentFragment----- null
// DocumentType ------- null
// Element --------- null
// NamedNodeMap ------- null
// Entity ---------- null
// EntityReference -------- null
// Notation ----------- null
// ProcessingInstruction ---------- entire content excluding the target
// Text --------- content of the text node

// notes : amra maximum case e text node er  nodeValue niye kaj kore thaki . baki gula niye temon kaj hoy na
// amra kono element er text node er vitor nodeValue te gele sekhane sei element er text thake + amra chaile sei nodeValue te kono string or onno kichu set kore dite pari
// jemon....
// const h2 = document.querySelector('h2')
// // return value show..
// console.log(h2.childNodes[0].nodeValue) // Hello (h2 tag er vitor jei text ase seta return korse)
// // now set..
// h2.childNodes[0].nodeValue = 'Hello World' // akhn h2 er vitor Hello text ta change hoye Hello World hoye gese

// document.querySelector('h1').childNodes[0].nodeValue = 'Hiiiii'

// Another Example :
// const list = document.querySelector('.list')
// console.log(list.childNodes[0].nodeValue) // Tanvir
// list.childNodes[0].nodeValue = 'Tanvir Ahmed'
// console.log(list.childNodes[0].nodeValue) // Tanvir Ahmed

// nodeType
// 1. Element Node er type holo 1. tar mane jodi kono Element er type ber kora hoy tahole return value ashe 1 . jodi kono Node er return value 1 ashe tahole bujhte hobe seta Element Node.
// 2. Text Node er type holo 3. tar mane jodi kono Text er type ber kora hoy tahole return value ashe 3 . jodi kono Node er return value 3 ashe tahole bujhte hobe seta Text Node.
// 3. Comment Node er type holo 8. tar mane jodi kono Comment er type ber kora hoy tahole return value ashbe 8. jodi kono Node er return value 8 ashe tahole bujhte hobe seta Comment Node.
// 4. Document Node er type holo 9. tar mane jodi document er type ber kora hoy tahole return value ashbe 9. jodi kono Node er return value 9 ashe tahole bujhte hobe seta Document Node.
// 5. Document Type Node is 10.
// 6. Document Fragment Node is 11.
// 7. jekono attribute er nodeType holo 2.

// Example of nodeType useCase :
// const h2 = document.querySelector('h2')
// console.log(h2.nodeType) // 1
// if(h2.nodeType === 1){
//   console.log('This is a Element Node')
// }else if(h2.nodeType === 3){
//   console.log("This is a Text Node")
// }

// tar mane amra nodeType diye bujhte pari eta ki dhoroner node

// nodeName, nodeValue and nodeType

// const h2 = document.querySelector('h2')

// for element node
// console.log(h2.nodeName) // H2
// console.log(h2.nodeValue) // null
// console.log(h2.nodeType) // 1

// for text node
// console.log(h2.childNodes) // NodeList(3) [text, comment]

// console.log(h2.firstChild.nodeName) // #text
// console.log(h2.firstChild.nodeValue) // Hello
// console.log(h2.firstChild.nodeType) // 3

// // for comment node
// console.log(h2.childNodes[1]) // comment node return

// console.log(h2.lastChild) // comment node

// console.dir(h2.firstChild.nextSibling.nodeName) // #comment
// console.dir(h2.firstChild.nextSibling.nodeValue) // this is comment
// console.dir(h2.firstChild.nextSibling.nodeType) // 8

// Example of change nodeValue
// const ul = document.querySelector('ul')
// console.log(ul.childNodes) // NodeList(9) [text, li.list, text, li.list, text, li.list, text, li.list, text]
// console.log(ul.lastChild.previousSibling.previousSibling.previousSibling.firstChild.nodeValue) // Maymuna
// ul.lastChild.previousSibling.previousSibling.previousSibling.firstChild.nodeValue = 'Maymuna Ahmed'
// console.log(ul.lastChild.previousSibling.previousSibling.previousSibling.firstChild.nodeValue) // Maymuna Ahmed

// Property of Attribute Object (v.21)

// for this element - <h2 class="hello" tanvir="ahmed">Hello</h2>
// const h2 = document.querySelector('h2')
// console.log(h2.attributes) // NamedNodeMap {0: class, 1: tanvir, class: class, tanvir: tanvir, length: 2}
// console.log(h2.attributes[1].nodeName)  // tanvir
// console.log(h2.attributes[0].nodeName) // class
// console.log(h2.attributes[0].nodeValue) // hello
// console.log(h2.attributes[1].nodeValue) // ahmed

// console.log(h2.attributes.class.nodeName) // class
// console.log(h2.attributes.tanvir.nodeName) // tanvir

// console.log(h2.attributes.class.nodeName + ' = ' + h2.attributes.class.nodeValue) // class = hello
// console.log(h2.attributes.tanvir.nodeName + ' = ' + h2.attributes.tanvir.nodeValue) // tanvir = ahmed

// small project with property of attribute object
// const btn = document.querySelector('button')

// function changeBG(){
//   const list = document.querySelectorAll('.list')
//   for(let i = 0; i<list.length; i++){
//     if(i%2==0){
//       list[i].attributes[0].nodeValue = 'changeAtt'
//     }
//   }
// }

// btn.addEventListener('click',()=>{
//   changeBG()
// })

// attributes length
// const list = document.querySelectorAll('.list')
// console.log(list[1].attributes.length) // 1 (that is class='hello')

// *********Important Notes**********
// nodeName,nodeValue ai 2 ta property deprecated hoye gese . jekono somoy off hoye jete pare . jodio akhno choltese
// nodeName er bodole name and nodeValue er bodole value property use korte hobe

// Example :
// const list = document.querySelectorAll('.list')
// for(let i = 0; i<list.length; i++){
//   console.log(list[i].attributes[0].name) // class(4)
//   console.log(list[i].attributes[0].value) // list(4)
// }
// console.log(list[0].attributes.class.name) // class
// console.log(list[0].attributes.class.value) // list

// Difference between Node of an Element and Element Node (v.22)
// ekhane bujhar bishoy muloto 2 ta
// 1. Node of an Element
// 2. Element Node of an Element

// 1. Node of an Element =>
// kono element er vitore jodi kono node thake seta Node of an Element . kintu kono Element er vitor arekta element thakle seta Node of an Element na . seta abar individual Element Node of an Element . only text node , comment node egulaii Node of an Element hoy

// 2. Element Node of an Element
// jodi kono element er vitor kono element thake seta ke bole Element node of an Element

// Example Code :
{
  /* <html>
  <head>
    <title>Tree</title>
  </head>
  <body>
    <h1>
      <!-- This is Comment -->
      Hello World!
    </h1>
    <p>Para</p>
  </body>
</html> */
}

// uporer html er code er dom tree structure holo :->

// Document

// html

// head - Enter or Space(text node) - body
// in head element node -----
// Enter or Space(text node) - title - Enter or Space(text node)
// in title elment node ------
// Tree (text node)
// in body element node ------
// Enter or Space(text node) - h1 - Enter or Space(text node) - p - Enter or Space(text node)
// in h1 element node
// Enter or Space(text node) - comment node - Enter or Space(text node) - text node  - Enter or Space(text node)
// in p element node
// text node (para)
// and so on....

// Dom Traversal (v.23)
// manually total 12 upaye dom traversal hoy
// 1. parentNode ------------------(element + node 2 tai dhorbe)
// 2. parentElement ------------------(sudhu element dhorbe)
// 3. childNodes ------------------(element + node 2 tai dhorbe)
// 4. children ------------------(sudhu element dhorbe)
// 5. firstChild ------------------(element + node 2 tai dhorbe)
// 6. firstElementChild ------------------(sudhu element dhorbe)
// 7. lastChild ------------------(element + node 2 tai dhorbe)
// 8. lastElementChild ------------------(sudhu element dhorbe)
// 9. previousSibling ------------------(element + node 2 tai dhorbe)
// 10. previousElementSibling ------------------(sudhu element dhorbe)
// 11. nextSibling ------------------(element + node 2 tai dhorbe)
// 12. nextElementSibling ------------------(sudhu element dhorbe)

// Theory of 12 Dom Traversal way

// 1. parentNode - Returns Parent Node

// 2. parentElement - Returns parent element node

// 3. childNodes - Returns collection of an element's child nodes (including text and comment nodes) --- jodi kono element er childNodes ber kora hoy tahole sei element er vitor element node + text node + comment node etc sob dhoroner node list akare return hobe

// 4. children - Returns a collection of an elements child element node(do not include text and comment nodes) --- jodi kono element er children ber kora hoy tahole sei element er vitor sudhu element node, node list akare return hobe . text node, comment node ei type er node return hoy na

// 5. firstChild - Returns first child node of an element (it can be text or comment node)

// 6. firstElementChild - Returns first child element node of an element

// 7. lastChild - Returns last child node of an element (it can be text or comment node)

// 8. lastElementChild - Returns last child element node of an element

// 9. previousSibling - Returns previous node of same level (it can be text or comment node)

// 10. previousElementSibling - Returns previous element node of same level

// 11. nextSibling - Returns next node of same level (it can be text or comment node)

// 12. nextElementSibling - Returns next element of same level

// Example of 12 Dom Traversal way

// parentNode and parentElement
// const ul = document.querySelector('ul')
// console.log(ul.parentNode) // body
// console.log(ul.parentElement) // body
// console.log(ul.parentNode.parentNode) // html
// console.log(ul.parentElement.parentElement) // html

// childNodes and children
// const ul = document.querySelector('ul')
// console.log(ul.childNodes) // NodeList(11) [text, li.list, text, comment, text, li.list, text, li.list, text, li.list, text]
// console.log(ul.children) // HTMLCollection(4) [li.list, li.list, li.list, li.list]

// firstChild and firstElementChild
// const ul = document.querySelector('ul')
// console.log(ul.firstChild) // #text
// console.log(ul.firstElementChild) // li.list
// console.log(ul.firstChild.firstChild) // null (text node er vitor r kono node nei)
// console.log(ul.firstElementChild.firstElementChild) // null (li er vitor r kono element nei)
// console.log(ul.firstElementChild.firstChild) // #text (li er vitor element nei kintu text node ase)

// lastChild and lastElementChild
// const ul = document.querySelector('ul')
// console.log(ul.lastChild) // #text (ul er moddhe last node holo text node. karon white space ase or line break ase tai oikhane text node create hoise)
// console.log(ul.lastElementChild) // li.list (ul er moddhe last li element return hoise)

// previousSibling and previousElementSibling and nextSibling and nextElementSibling
// const ul = document.querySelector('ul')
// console.log(ul.childNodes) // NodeList(11) [text, li.list, text, comment, text, li.list, text, li.list, text, li.list, text]
// console.log(ul.children) // HTMLCollection(4) [li.list, li.list, li.list, li.list]
// const li = document.querySelector('ul > li') // ul er first li return hoise
// console.log(li.previousSibling) // #text node (karon ul er first node holo text node for line break white space . then li node)
// console.log(li.previousElementSibling) // null (ul er first li er previous element nei)
// console.log(li.nextSibling.nextSibling) // comment node
// console.log(li.nextSibling.nextSibling.nextSibling) // text node
// console.log(li.nextSibling.nextSibling.nextSibling.nextSibling) // second li node
// console.log(li.nextSibling.nextSibling.nextSibling.nextSibling.nextElementSibling) // third li node
// console.log(li.nextSibling.nextSibling.nextSibling.nextSibling.nextElementSibling.nextElementSibling) // fourth li node
// console.log(li.nextSibling.nextSibling.nextSibling.nextSibling.nextElementSibling.nextElementSibling.nextElementSibling) // null (tarpor r kono element nai )
// console.log(li.nextSibling.nextSibling.nextSibling.nextSibling.nextElementSibling.nextElementSibling.nextSibling) // text node
// console.log(li.nextSibling.nextSibling.nextSibling.nextSibling.nextElementSibling.nextElementSibling.nextSibling.nextSibling) // null

// parentNode and parentElement (v.24)
// parentElement only tar parent e jodi kono element thake setaii return kore kintu parentNode element + aro sob node return kore jemon text node , document node , comment node etc
// Example :
// console.dir(document.body.parentElement.parentElement) // null
// console.dir(document.body.parentElement.parentNode) // document object returned
// upore html er parentElement ber korte gele null return ashe . karon html er upor r kono element nai . kintu html er upor node ase .seta holo document node . jehetu document node kono html element na tai html.parentElement korle null value return hoy and html.parentNode dile document node return hoy

// kintu...
// element o jehetu ekta node tai parentNode diye jodi parent e kono element thake setao return kore . sudhu parthokko hocche parentElement diye only element return hoy kintu parentNode diye element node , text node , comment node , document node soho sob dhoroner node reutrn hoy

// childNodes and children (v.25)

// childNodes
// The childNodes read-only property returns a live NodeList of child nodes of the given element where the first child node is assigned index 0. childNodes includes all child nodes, including non-element nodes like text , comment or others non-element nodes

// White space inside elements is considered as text , and text is considered as nodes.
// Any whitespace will create a text node , from a single space to multiple spaces, returns, tabs and so on.
// You can use the length property of the NodeList object to determine the number of child nodes , then you can loop through all child nodes and extract the other info.

// children
// The children property returns collection of child elements of the given element where the first child is assigned index 0. children includes only element node (no whitespace, text node , comment node etc)

// You can use the length property of the NodeList object to determine the number of child nodes , then you can loop through all child nodes and extract the other info.

// example of children and childNodes
// const ul = document.querySelector('ul')

// console.log(ul.childNodes) // NodeList(11) [text, li.list, text, comment, text, li.list, text, li.list, text, li.list, text]
// console.log(ul.children) // HTMLCollection(4) [li.list, li.list, li.list, li.list]

// for(let i = 0; i<ul.childNodes.length; i++){
//   console.log(ul.childNodes[i])
// }

// for(let i = 0; i<ul.children.length; i++){
//   console.log(ul.children[i])
// }

// Create Element Node
// let newElement = document.createElement('h3')
// console.log(newElement)

// document object er vitor createElement nam e ekta function ase jeta ekta parameter recieve kore . jei parameter string e pass korte hoy and sei parameter obosshoi obosshoi kono html er valid tag hote hobe , jemon h1,h2,h3,p,a,span,img...etc . tarpor sei parameter niye createElement function ta sei parameter jei html tag er sathe match kore sei html tag ta create kore sei tag return kore . return korar somoy sei tag er moddhe kono node thake na . mane empty thake

// Create Text Node

// let newTextNode = document.createTextNode('Hello, This is Text Node!')
// console.dir(newTextNode)
// console.log(newTextNode)
// console.log(newTextNode.nodeName)
// console.log(newTextNode.nodeValue)
// console.log(newTextNode.length)

// document object er vitor createTextNode nam e ekta function ase jeta ekta parameter recieve kore . jei parameter string e pass kora hoy. tarpor sei parameter niye createTextNode function ta ekta textNode create kore return kore

// Create Comment Node

// let newCommentNode = document.createComment('This is comment')
// console.log(newCommentNode)
// console.dir(newCommentNode)
// console.log(newCommentNode.textContent)
// console.log(newCommentNode.nodeName)
// console.log(newCommentNode.nodeValue)

// ********________**********
// akhn porjonto ja ja sikhlam...
// 1. Element select
// 2. Node Object
// 3. Attribute Object
// 4. Dom Traversal
// 5. create node

// Append Element Node

// some rules :

// 1. The appendChild(Child_Node) method is used to add a node to the end of the list of children of a specified parent node. (jei parent node er vitor ami append korbo setar ekdom last e amr element append hobe)

// 2. If the given child is a reference to an existing node in the docuent, appendChild() moves it from its current position to the new position. This method returns the new child node. (jodi html file er existing kono element ke select kore setakeii onno kothau append korte chai tahole obosshoi seta move hoye ashbe notun jaygay . purano jayga theke seta muche jabe )

// 3. appendChild method use kore ami element ke append korte parbo + comment ke append korte parbo + text ke append korte parbo + document fragment ke append korte parbo

// syntax :
// 1. appendChild(child_node)
// 2. parentNode.appendChild(child_node)
// Example :
// const h2 = document.querySelector('h2')
// const ul = document.querySelector('ul')
// h2.appendChild(ul) // h2 tag er vitor last e ul tag er sob kichu append kora hoise + ul age jei jaygay chilo sekhane r nei
// ul.appendChild(h2) // ul tag er last e h2 tag aisha porse move hoye..

// existing element ke append kore move kore niye asha onno ekta element er vitor...
// document.querySelector('ul').appendChild(document.querySelector('h2'))

// new element create kore tarpor kothau append kora...
// const newElement = document.createElement('h3')
// const ul = document.querySelector('ul')
// ul.appendChild(newElement) // ul er last e ekta h3 element add hoye gese jar kono childNodes nei
// console.dir(newElement.nodeValue)
// const newTextNode = document.createTextNode('Hello World!!!')
// newElement.appendChild(newTextNode) // akhn ul er last e h3 er moddhe Hello World!!! text aisha porse

// Append Text Node

// Create a new Text Node and append in old element
// const h1 = document.querySelector('h1')
// const newTextNode = document.createTextNode('I am H1')
// h1.appendChild(newTextNode)
// OR..
// document.querySelector('h1').appendChild(document.createTextNode('I am H1'))

// Create a new Element and append a new Text Node
// const newElement = document.createElement('p')
// const newTextNode = document.createTextNode('I am Paragraph')
// const ul = document.querySelector('ul')
// ul.appendChild(newElement)
// document.querySelector('ul > p').appendChild(newTextNode)

// Append Comment Node

// const ul = document.querySelector('ul')
// const newCommentNode = document.createComment('I am Comment in ul')
// ul.appendChild(newCommentNode)

// Append Element Node , Text Node and Comment Node Together
// A simple Project (ekta element create korte hobe + comment and text node create korte hobe . then seta kono div section e append korte hobe )

// const ul = document.querySelector('ul')
// const newElement = document.createElement('h2')
// const newTextNode = document.createTextNode('I Am Tanvir!')
// const newCommentNode = document.createComment('This is Comment!')
// // console.log(newElement.appendChild(newTextNode))
// ul.appendChild(newElement)
// document.querySelector('ul > h1').appendChild(newTextNode)
// ul.appendChild(newCommentNode)

// Document Fragment
// amra manually ekta ekta kore element create kore tarpor append kori , then modify kori ekta ekta kore . sob gula kori main parent er upor , or main html file er upor . kintu amra chaile sob kichu eksathe ekta alada jaygay korte pari , then sob sesh hole eksathe oita append korte pari . tar jonno use hoy Document Fragment

// Document Fragment jokhon main html e append kora hoy tokhon automatically fragment empty hoye jay .
// Document Fragment ekdom main html flow er baire create hoy

// A Mini Project
// Project statement : h2 and p tag create kore tate text node add kore then eta ekta fragment er moddhe append korte hobe . then oi fragment final html e append kore dibe
// const h2 = document.createElement('h2')
// const p = document.createElement('p')
// const comment = document.createComment('This is Comment!')

// h2.textContent = 'I am H2'
// p.textContent = 'I am p'

// const df = document.createDocumentFragment()

// df.appendChild(h2)
// df.appendChild(p)

// console.log(df)

// document.querySelector('ul').appendChild(df)
// console.log(df)

// Another Project
// const ul = document.querySelector('ul')
// const newElement = document.createElement('h3')
// const newTextNode = document.createTextNode('Hello This is Me')
// const newCommentNode = document.createComment('This is comment')

// const df = document.createDocumentFragment()

// newElement.appendChild(newCommentNode)
// newElement.appendChild(newTextNode)

// df.appendChild(newElement)
// ul.appendChild(df)

// Normalize() method

// jodi onk gula node ke eksathe merge kore ekta node banaite chai seikhetre normalize() method use kora hoy
// pashapashi thaka node jodi same categoryr node hoy tahole seta normalize hoy . tar mane holo Adjacent node gulaii normalize hobe

// A Project using Normalize method

// const p = document.querySelector('p')

// p.appendChild(document.createTextNode('I am'))
// p.appendChild(document.createTextNode(' Tanvir Ahmed'))
// p.appendChild(document.createTextNode(' And I am a Software Engineer'))

// console.log(p)
// // <p>
// // "I am"
// // " Tanvir Ahmed"
// // " And I am a Software Engineer"
// // </p>

// console.log(p.childNodes) // NodeList(3) [text, text, text]

// p.normalize()

// console.log(p.childNodes) // NodeList [text]

// console.log(p)
// // <p>I am Tanvir Ahmed And I am a Software Engineer</p>

// Notes : upore 3 ta alada alada text node create kore append kora hoise . jokhon p er childNodes khuja hoy tokhon 3 ta text node ashe . jodi ami sob gula text chai tahole amk loop chaliye sob gula text nite hoito . kintu ami jokhon normalize method use kore ekta text node banailam tokhon seta traverse kora onk easy hoye gese..

// Again project using Normalize method
// const h2 = document.querySelector('h2')

// console.log(h2.childNodes)

// console.log(h2.childNodes)

// Again Test
// const p = document.querySelector('p')

// const text1 = document.createTextNode('Tanvir')
// const text2 = document.createTextNode(' Ahmed')
// const comment1 = document.createComment('This is Comment')
// const text3 = document.createTextNode('Sadia ')
// const text4 = document.createTextNode('Ahmed')

// const arr = [text1,text2,comment1,text3,text4]
// console.log(arr)

// for(let i = 0; i<arr.length; i++){
//   p.appendChild(arr[i])
// }
// console.log(p)
// // <p>
//   // Tanvir
//   // Ahmed
//   // <!--This is Comment-->
//   // Sadia
//   // Ahmed
// // </p>

// p.normalize()

// console.log(p)
// // <p>
//   // Tanvir Ahmed
//   // <!--This is Comment-->
//   // May Ahmed
// // </p>

// Project with Normalize method

// const h1 = document.createElement('h1')
// const text1 = document.createTextNode('Hello')
// const text2 = document.createTextNode(' World')
// const text3 = document.createTextNode(' My ')
// const text4 = document.createTextNode('Name is ')
// const text5 = document.createTextNode('Tanvir Ahmed')
// const comment = document.createComment('This is comment')
// const arr = [text1,text2,comment,text3,text4,text5]
// arr.forEach((item)=>{
//   h1.appendChild(item)
// })
// console.log(h1.childNodes) // NodeList(5) [text, text, text, text, text]
// h1.normalize()
// console.log(h1.childNodes) // NodeList(5) [text, comment, text]

// const df = document.createDocumentFragment()
// df.appendChild(h1)
// document.querySelector('ul').appendChild(df)

// insertBefore() Method
// The insertBefore() method is used to insert a node before the reference node as a child of a specified parent node.
// if the given child is a reference to an existing node in the document, insertBefore() moves it from its current position to the new position.
// if referenceNode is null, the new Node is inserted at the end of the list of child nodes.

// Syntax :
// parentNode.insertBefore(newNode, referenceNode)
// parentNode = jei jaygay kono node ante chan sei jayga ta jei parent node er under e seta
// newNode = jei node ta insert korte chan seta (hote pare new created node or hote pare existing kono node or clone node)
// referenceNode = jei node er thik age(before) newNode boshaite chan seta

// Example :
// const parentNode = document.querySelector('body')
// const newNode = document.querySelector('h2')
// const referenceNode = document.querySelector('button')

// parentNode.insertBefore(newNode,referenceNode) // h2 tag aisha button er thik age boisha gese move hoy, and h2 age jekhane chilo sekhane nei . seta move hoye aisha porse

// insert new node Example :
// const newElementNode = document.createElement('h2')
// newElementNode.textContent = 'Hello World'
// const parentNode = document.querySelector('body')
// const referenceNode = document.querySelector('button')

// parentNode.insertBefore(newElementNode,referenceNode) // success

// Example :
// const newNode = document.createElement('h1')
// const newTextNode = document.createTextNode('Hello, I am Tanvir')
// const df = document.createDocumentFragment()
// newNode.appendChild(newTextNode)
// df.appendChild(newNode)

// const ul = document.querySelector('ul')
// const ref = document.querySelector('#item2')

// ul.insertBefore(df,ref) // successfully inserted..

// Notes for insertBefore method
// jodi kono specific element er thik age kono element boshaite chai tahole insertBefore method use kora hoy . jodi existing kono node dhore insert kora hoy tahole move kore chole ashe oi jayga chere .
// jodi referenceNode na dei tahole parentNode er ekdom last e giya add hoye jay

// without reference Node  Example :
// const newElementNode = document.createElement('h2')
// newElementNode.textContent = 'Hello World'
// const parentNode = document.querySelector('body')
// const referenceNode = document.querySelector('button')

// parentNode.insertBefore(newElementNode,null) // insert last of body element

// insertBefore() method with textNode
// const textNode = document.querySelector('h1').childNodes[0]
// const parentNode = document.querySelector('p')
// const refNode = null
// parentNode.insertBefore(textNode,refNode)
// p node khali chilo, sekhane h1 theke text niye p te lagaiya dilam

// insertBefore() method with CommentNode
// const newCommentNode = document.createComment('This is comment')
// const parentNode = document.body
// const refNode = document.querySelector('ul')
// parentNode.insertBefore(newCommentNode,refNode)

// insertBefore with Document Fragment
// const df = document.createDocumentFragment()
// const h1 = document.createElement('h1')
// const h2 = document.createElement('h2')
// const h3 = document.createElement('h3')
// const h4 = document.createElement('h4')
// const h5 = document.createElement('h4')
// const h6 = document.createElement('h4')
// h1.textContent = "Hello World"
// h2.textContent = "Hello World"
// h3.textContent = "Hello World"
// h4.textContent = "Hello World"
// h5.textContent = "Hello World"
// h6.textContent = "Hello World"
// df.appendChild(h1)
// df.appendChild(h2)
// df.appendChild(h3)
// df.appendChild(h4)
// df.appendChild(h5)
// df.appendChild(h6)
// document.querySelector('ul').insertBefore(df,document.querySelectorAll('.list')[1])
// ul er vitor onk gula list er moddhe 1 no. index e jei li ase tar age insert kora hoise df ke

// insertAdjacentElement() method (v.42)
// kono ekta element er age and pore , element er vitor childNodes er age and pore kono element insert korar jonno ai method use kora hoy

// targetElement.insertAdjacentElement('position',element)
// targetElement = jei element er ashe pashe ami kono element insert korte chai seta
// element = jei element ami insert korte chai seta . existing kono element hole seta move hoye ashbe
// 'position' = 'beforebegin' | 'afterbegin' | 'beforeend' | afterend'
// beforebegin = (this)<P>hello</p>
// afterbegin = <p>(this)hello</p>
// beforeend = <P>hello(this)</p>
// afterend = <P>hello</p>(this)

// Example :
// document.querySelector('ul').insertAdjacentElement('afterbegin',document.querySelector('h1'))

// Another example :
// const parentNode = document.querySelector('ul')
// const element = document.querySelector('h1')
// parentNode.insertAdjacentElement('afterbegin',element)
// parentNode.insertAdjacentElement('beforebegin',element)
// parentNode.insertAdjacentElement('afterbegin',element)
// parentNode.insertAdjacentElement('afterend',element)

// insertAdjacentHTML mehtod
// const parentNode = document.querySelector('ul')
// const element = document.querySelector('h1')
// parentNode.insertAdjacentElement('afterbegin',element)
// parentNode.insertAdjacentElement('beforebegin',element)
// parentNode.insertAdjacentElement('afterbegin',element)
// parentNode.insertAdjacentElement('afterend',element)

// insertAdjacentHTML method (v.43)
// The insertAdjacentHTML() method is used to insert a text as HTML (parses the specified text as HTML or XML) into a specified position.
// Syntax :
// element.insertAdjacentHTML('position',text);
// where positions are:
// beforebegin : before the element itself
// afterbegin : just inside the element, before its first child
// beforeend : just inside the element, after its last child
// afterend : After the element itself.

// text -- The string to be parsed as HTML or XML and inserted into the tree.
// It is recommended you not use insertAdjacentHTML when inserting plain text instead, use the node.textContent property

// Example :
// const li = document.querySelector('.list')
// const myHtml = "<p>hello worldss</p>"
// li.insertAdjacentHTML('afterbegin',myHtml)

// insertAdjacentText method (v.44)
// insertAdjacentText method kono text node ke kothau replace kore insertAdjacentElement and insertAdjacentHTML er motoiii
// Syntax :
// element.insertAdjacentText('position',text);
// where positions are:
// beforebegin : before the element itself
// afterbegin : just inside the element, before its first child
// beforeend : just inside the element, after its last child
// afterend : After the element itself.

// text -- The text which is about to insert.
// The beforebegin and afterend positions work only if the node is in a tree and has an element

// Example :
// const li = document.querySelector('li')
// const text = "Hellosss"
// li.insertAdjacentText('afterend',text)

// innerHTML
// kono element er vitor joto html tag ase + text comment jai ase sob eksathe sei element er innerHTML
// jemon ul tag re select kore jodi tar innertHTML ber korte chai tahole ul er vitor joto li ase + text node + comment node sob eksathe return hobe
// amra chaile innerHTML diye html + text node eksathe set korte pari

// MINI project with innertHTML
// const ul = document.querySelector('ul')
// const btn = document.querySelector('button')

// let innerHtml  = `
// <li>Tanvir Ahmed</li>
// <li>Sadia Ahmed</li>
// <li>Maymuna Ahmed</li>
// <li>Humaira Ahmed</li>
// `
// btn.addEventListener('click',()=>{
//   ul.innerHTML += innerHtml
// })

// outerHTML

// Difference Between innerHTML and outerHTML
{
  /* <div>
  <ul>
    <li>Tanvir</li>
    <li>Sadia</li>
    <li>Maymuna</li>
    <li>Ayesha</li>
  </ul>
</div> */
}
// uporer code e ul tag re jokhon innerHTML er sathe empty set kora deya hoisilo tokhon result : <div> <ul> </ul> </div> erokom hoisilo . kintu jokhon ul tag ke outerHTML er sathe empty set kora hoisilo tokhon result : <div> </div>

// tar mane innerHTML only inner content gula reii dhore and change kore set kore . kintu outerHTML outer content + inner content sob gular uporeii kaj kore

// const ul = document.querySelector('ul')
// ul.innerHTML = "<br /><h1>Hello world!!!</h1>"
// OUTPUT :
{
  /* <ul>
  <br>
  <h1>Hello world!!!</h1>
</ul> */
}

// ul.outerHTML = "<h1>Hello World!!!!!</h1>"
// OUTPUT :
// <h1>Hello World!!!</h1>

// innerText
// eta diye only text add or remove or modify kora hoy . tag or element use kora jay na . jodi innerHTML or outerHTML er moto html tag use korte jai tahole seta string hishebe text node create hobe

// const h1 = document.querySelector('h1')
// console.log(h1.innerText)

// console.log(document.querySelector('ul').innerText) // ul er vitor joto text ase sob return hobe . hok seta ul er vitor arekta element er vitor text , tao return hobe
// Tanvir
// Sadia
// Maymuna
// Ayesha

// write and writeln method

// Copy Node (v.49)

// Some Rules :
// 1. The cloneNode(deep) method is used to copy the Node. It creates a copy of node including all attributes and their values and returns the clone.
// 2. The method takes a single Boolean argument, indicating whether the copy should all children of the node or just the element itself.
// 3. The Duplicate node returned by cloneNode(deep) is not part of the document until it is added to another node that is part of the document using appendChild() or a similar method. It also has no parent until it is appended to another node.
// 4. If the original node has an ID and the clone is to be placed in the same document, the ID of the clone should be modified to be unique.
// 5. Name attributes may need to be modified also, depending on whether duplicate names are expected.
// 6. cloneNode(false) will copy only the element, attributes and their values
// 7. cloneNode(true) will copy entire element with child as well.

// Syntax :
// var duplicateNode = targetNode.cloneNode(false);
// var duplicateNode = targetNode.cloneNode(true);

// const ul = document.querySelector('ul')
// // const duplicateNode = ul.cloneNode(false)
// // console.log(duplicateNode) // <ul></ul>
// const duplicateNode = ul.cloneNode(true)
// console.log(duplicateNode) // <ul> <li>Tanvir</li> <li>.... </ul>

// Delete Node
// syntax :
// parentNode.removeChild(targetNode)

// const parentNode = document.querySelector('ul')
// const targetNode = document.querySelector('li')
// parentNode.removeChild(targetNode)

// const parentNode = document.querySelector('ul')
// const targetNode = document.querySelector('li')
// const deleteNode = parentNode.removeChild(targetNode)
// console.log(deleteNode) // <li class="list">Tanvir</li>

// const parentNode = document.querySelector('ul')
// parentNode.removeChild(parentNode.lastElementChild)

// const parentNode = document.querySelector('ul')
// parentNode.removeChild(parentNode.firstElementChild)

// const parentNode = document.querySelector('ul')
// parentNode.removeChild(parentNode.firstElementChild.nextElementSibling)

// const li = document.querySelector('li')
// li.parentNode.removeChild(li)

// const h = document.querySelector('ul').removeChild(document.querySelector('li'))
// document.querySelector('ul').insertBefore(h,document.querySelector('li'))
// document.querySelector('ul').insertAdjacentElement('afterbegin',h)

// Replace Node
// Rules :
// 1. The replaceChild(newChild, oldChild) method is used to replace a node with new node.
// 2. The new node could be an existing node in the document, or you can create a new node.
// 3. It will destroy the contents of nodes that are replaced
// 4. it returns the replaced node(oldChild)
// Syntax :
// var replacedNode = parentNode.replaceChild(newChild,oldChild)
// newChild is the new node to replace oldChild. If it already exists in the DOM, it is first removed.
// oldChild is the existing child to be replaced

// document.querySelector('ul').replaceChild(document.querySelector('h1'),document.querySelector('#item2'))

// Example : (Replacing with new Node)
// const parentNode = document.querySelector('ul')
// const oldChild = document.querySelector('#item2')
// const newChild = document.createElement('h4')
// newChild.textContent = 'Hello H4'
// const replacedNode = parentNode.replaceChild(newChild,oldChild) // replace successfully korar por oldChild ke return kore dey . eta replacedNode er moddhe store kore rakhlam . chaile pore amra abar kothau use korte parbo
// console.log(replacedNode)

// Example : (Replaceing with existing Node)
// const parentNode = document.querySelector('ul')
// const oldChild = document.querySelector('#item2')
// const newChild = document.querySelector('h2')
// const replacedNode = parentNode.replaceChild(newChild,oldChild)
// // h2 tag jekhane chilo sekhan theke move hoye ul er moddhe item2 er moddhe boshe gese + item2 element vanish hoye gese .

// Modifying Text Nodes

// Properties :
// 1. Data
// 2. Length

// Methods :
// 1. appendData(string)
// 2. deleteData(start, length)
// 3. insertData(start, string)
// 4. replaceData(start, length, string)
// 5. splitText(start)
// 6. substringData(start, length)

// Length (text node length property) (v.52)
// const newTextNode = document.createTextNode('Hello World!')
// console.log(newTextNode.length) // 12

// // Or Existing textNode length
// const h1 = document.querySelector('h1')
// console.log(h1.childNodes[0].length) // 12 (h1 er childNodes[0] er moddhe textNode ase and setar length 12)

// Modifying Text Nodes Data Property (v.53)

// const newTextNode = document.createTextNode('Hello World!')
// console.dir(newTextNode)

// // get data in textNode
// const getData = newTextNode.data
// console.log(getData) // Hello World!

// // set data in textNode
// newTextNode.data = "Hello Tanvir"
// console.log(newTextNode) // Hello Tanvir

// // Existing text node data set and get

// // <h1 id="geek" class="first second">Hello World!</h1>
// const h1 = document.querySelector('h1')
// // get data
// console.log(h1.childNodes[0].data) // Hello World!
// // set data
// h1.childNodes[0].data = 'Hello Tanvir Ahmed'
// console.log(h1.childNodes[0].data) // Hello Tanvir Ahmed

// Append Data in Text Node
// kono text node er last e onno kono new text add korar jonno use hoy appendData method
// eta ekdom similar appendChild er moto

// const newTextNode = document.createTextNode('Hello ')
// newTextNode.appendData("World!")
// console.log(newTextNode) // Hello World!

// const h1 = document.querySelector('h1')
// h1.childNodes[0].appendData('hiiii')

// // Example : (Existing text node)
// <h1 id="geek" class="first second">Hello World!</h1>

// const h1 = document.querySelector('h1')
// console.log(h1) // <h1 id="geek" class="first second">Hello World!</h1>
// h1.childNodes[0].appendData(" My name is Tanvir")
// console.log(h1) // <h1 id="geek" class="first second">Hello World! My name is Tanvir</h1>

// Delete Data in Text Node (v.55)
// This method is used to delete or remove text content from a text node and comment node. It deletes specified length of characters starting from index defined in start.

// Syntax :
// textNode.deleteData(start,length)

// const newTextNode = document.createTextNode('Hello World!')
// newTextNode.deleteData(2,2)
// console.log(newTextNode) // Heo World!

// document.querySelector('h1').childNodes[0].deleteData(2,4)

// Insert Data in Text Node(v.56)

// <h1 id="geek" class="first second">Hello World!</h1>
// const h1 = document.querySelector('h1')
// const h1TextNode = h1.childNodes[0]
// h1TextNode.insertData(5,'HIIII') // text node er 5 number index theke HIIII text insert kore dibe

// document.querySelector('h1').childNodes[0].insertData(4,'HIIIIIIIII')

// Replace data in Text Node (v.57)

// Syntax :
// textNode.replaceData(start,length,string)
// const textNode = document.createTextNode('Hello World')
// textNode.replaceData(0,5,'Hi')
// console.log(textNode) // Hi World

// document.querySelector('h1').childNodes[0].replaceData(1,3,'Hello world')

// Split Text in Text Node (v.58)
// ekta text node ke 2 or tar theke beshi text node e convart korar jonno ai method use hoy

// const h1 = document.querySelector('h1')
// console.log(h1.childNodes) // NodeList [text]
// // ekhane h1 er vitor text gula ektaii node er under e ase .

// h1.childNodes[0].splitText(2) // splitText(2) mane holo textNode er 2 number index theke vag kore deya hok . jar jonno first node is "He" and second node is llo World!
// console.log(h1.childNodes) // NodeList(2) [text, text]

// SubstringData Method (v.59)
// kono text node er vitor substring niye seta ke return kore dey
// Syntax :
// TextNode.substringData(2,5)

// console.log(document.querySelector('h1').childNodes[0].substringData(2,6)) // llo wo

// const newTextNode = document.createTextNode('Hello World')
// console.log(newTextNode.substringData(1,4)) // ello

// Difference Between HTML Attribute and DOM property (v.60)

// <p id='para' class='classPara' tanvir="ahmed">Hello Para</p>
// uporer p tag er attribute holo id, class and tanvir
// now access...

// console.log(document.querySelector('p').id ) // para
// console.log(document.querySelector('p').className ) // classPara
// console.log(document.querySelector('p').tanvir ) // ahmed
// console.log(document.querySelector('p').title ) // null

// Attributes Property (v.60)
// const h2 = document.querySelector('h2')
// const allH2Attributes = h2.attributes
// console.log(allH2Attributes) // NamedNodeMap {0: class, 1: tanvir, 2: id, class: class, tanvir: tanvir, id: id, length: 3}

// prottekta element er vitor attributes nam e ekta object thake . sei object sei element er sob attribute hold kore rakhe . amra chaile sei attribute gula ke index number diye access korte pari , noyto attribute er name diyeo access korte pari . jemon h2..attributes.id , h2.attributes.class , h2.attributes.tanvir -- h2.attributes[0]

// setAttribute and getAttribute Method (v.61)

// setAttribute
// This method is used to set the value of an attribute on the specified element . If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value . We should not use this method to set inline style as it will overwrite other CSS Properties.

// Syntax :
// Element.setAttribute(name,value)
// Element.setAttribute('style','font-size: 20px; color: green;')

// const h2 = document.querySelector('h2')

// h2.setAttribute('class','hiii') // override class value hello to hiii
// h2.setAttribute('id','id1 id2 id3') // id te 3 ta id set hoye gese named id1,id2,id3
// h2.setAttribute('class',' ')

// getAttribute
// The getAttribute() returns the value of a specified attribute on the element. If the given attribute does not exist, the value returned will either be null or " ".

// Syntax :
// var attribute = element.getAttribute(attributeName)

// const h2 = document.querySelector('h2')

// const att1 = h2.getAttribute('class')
// const att2 = h2.getAttribute('id')
// const att3 = h2.getAttribute('tanvir')
// console.log(att1,att2,att3)
// const att4 = h2.getAttribute('title')
// console.log(att4) // null

// removeAttribute and hasAttribute (v.63)

// removeAttribute
// This method is used to remove an attribute from the specified element.
// Syntax :
// element.removeAttribute(attrName)

// const h2 = document.querySelector('h2')
// console.log(h2.attributes) // NamedNodeMap {0: class, 1: tanvir, 2: id, class: class, tanvir: tanvir, id: id, length: 3}

// h2.removeAttribute('class')
// console.log(h2.attributes) // NamedNodeMap {0: tanvir, 1: id, tanvir: tanvir, id: id, length: 2}

// hasAttribute
// The hasAttribute() method returns a Boolean value indicating whether the specified element has the specified attribute or not.

// const h2 = document.querySelector('h2')
// console.log(h2.hasAttribute('class'))// true
// console.log(h2.hasAttribute('title')) // false
// console.log(h2.hasAttribute('id')) // true

// HTML DOM Mapping (v.64)
// Many object properties are simply direct mapping to the attributes of the HTML element. In other words there is a mapping directly between HTML Syntax and the DOM.

// <p id="myId" title="hello">Paragraph</p>
// Above title can be accessed in DOM by document.querySelector('p').title

// Example :
// <h2 class="hello" tanvir="ahmed" id="ids">Hello World</h2>
// const h2 = document.querySelector('h2')
// console.log(h2.className) // hello
// console.log(h2.id) // ids

// amra kivabe element er attribute ke evabe (h2.id) element er sathe access korte pari ?
// er karon HTML ke DOM er sathe mapping kora hoise

// mot kotha amra kichu reserve attribute , jemon id , class , title , src , alt ,href , placeholder etc egula property hishebe create hoy sei element er object e . kintu unknown kono attribute jemon tanvir, hasOf etc egula property hishebe set hoy na element er object e . tai amra sei element er sathe direct access korte pari na . kintu known attribute gula direct element er sathe access korte pari

// CSS DOM Mapping (v.65)

// <h1 id="geek" class="first second main" style="font-size: 30px;">Hello World!</h1>
// const h1 = document.querySelector('h1')
// console.dir(h1.style.fontSize) // 30px

// jekono element er object e style nam e ekta object ase , sei object er vitor css er sob property camelCase akare deya ase and tader value deya ase "" empty string . jokhon style attribute diye oi element e inline css likha hoy tokhon seta oi style object er vitor dhuke value change kore updated value deya hoy . kintu extarnal css dile amon hoy na

// CSSStyleDeclaration Object (v.66)
// The CSSStyleDeclaration object represents a collection of CSS Property-value pairs. It is used in API (mane CSSStyleDeclaration Object css er sob property er collection key value pair akare diye thake jar key hobe css property er camelCase and value hobe empty string "")

// ai declaration er use 2 ta api kore thake
// 1. HTMLElement.style (inline)
// 2. windwo.getComputedStyle() (internal and external)

// amra jokhon element.style likhi tokhon seta ashole CSSStyleDeclaration Object ke point kore thake

// Some Properties and methods of CSSStyleDeclaration Object

// Properties :
// 1. cssText
// 2. length
// 3. parentRule

// Methods :
// 1. getPropertyValue(property)
// 2. getPropertyPriority(property)
// 3. removeProperty(property)
// 4. setProperty(property,value,priority)
// 5. item(index)

// Inline Style Manipulation
// The most direct way to modify css value with javascript is through the style property that corresponding to the inline style sheet specification for a particular HTML element. To perform a manipulation of the CSS with Javascript DOM interface, you would access the style object of the element.

// Style Property
// The style property is used to get or set the inline style of an element. While getting, it returns a CSSStyleDeclaration object that contains a list of all styles properties for that element with values assigned for the attributes that are defined in the element's inline style attribute.
// style property represents only the css declarations set in the element's inline style attribute, not those that come from style rules elsewhere, such as style rules in the <head> section, or external style sheets or browser default.

// get
// Element.style.property
// const get = document.querySelector('h1').style.fontSize
// console.log(get) // 30px

// set
// // element.style.property = 'value'
// document.querySelector('h1').style.fontSize = '100px'
// console.log(h1.style.fontSize)//100px

// *******Important Notes**********
// amra jokhon style attribute er moddhe background-color likhi seta hocche html attribute and pore backgroundColor holo dom property

// const h2 = document.querySelector('h2')
// const cssObj = h2.style // (return CSSStyleDeclaration object in cssObj variable)
// console.log(cssObj) // CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '',...............}

// h2.style.fontSize = '100px' // h2 set her font size is 100px
// h2.style.color = 'green'

// Dynamic Style Manipulation (v.67)

// const h1 = document.querySelector('h1')
// h1.className = 'main'

// const h2 = document.querySelector('h2')
// h2.id = 'main'

// // evabe ager property gula override hoye jay . jodi class er moddhe onk gula class thake sob gula eksatheo override hoye jabe .

// DOMTokenList (v.68)

// classList return kore thake DOMTokenList and DOMTokenList er kichu methods property ase . jemon..
// property :
// 1. length
// 2. value

// Methods :
// 1. item()
// 2. add()
// 3. remove()
// 4. replace()
// 5. contains()
// 6. toggle()
// 7. value()

// classList (v.69)
// The Element.classList is a read only property which returns a live DOMTokenList collection of the class attributes of the element.
// Syntax :
// var elementClasses = elementNodeReference.classList;

// <h1 id="geek" class="first sec">Hello World!</h1>
// const h1 = document.querySelector('h1')
// console.log(h1.classList) // DOMTokenList(2) ['first', 'sec', value: 'first sec']
// upore h1.classList ekta DOMTokenList return kore , jar value holo oi element er moddhe jotogula class item ache sob gula . index number diyeo segula access hoy and name diyeo access hoy

// console.log(h1.classList[0]) // first
// console.log(h1.classList.first) // first
// console.log(h1.classList[1]) // sec
// console.log(h1.classList[4]) // undefined

// DOMTokenList er length and value property access :
// console.log(h1.classList.length) // 2 (karon h1 er moddhe 2 ta class item ase)
// console.log(h1.classList.value) // first sec (h1 er moddhe ai 2 ta class item ache)

// DOMTokenList er method access :

// item() -- element er vitor sob class item gular access pauyar jonno use hoy
// console.log(h1.classList.item(1)) // sec (h1 er 2 ta class er moddhe 1 number index e jei class ase seta return hoise)
// console.log(h1.classList.item(0)) // first

// add()
// h1.classList.add('myClass')
// console.log(h1.classList) // DOMTokenList(3) ['first', 'sec', 'myClass', value: 'first sec myClass']
// tar mane h1 er moddhe notun vabe myClass nam e class item add hoye gese ekdom last e . kintu override hoy nai . ager class item gula jar jar jaygay ache

// add multiple class
// h1.classList.add('myClass1','myClass2','myClass3')
// console.log(h1.classList) // DOMTokenList(5) ['first', 'sec', 'myClass1', 'myClass2', 'myClass3', value: 'first sec myClass1 myClass2 myClass3']

// remove()
// h1.classList.remove('first')
// console.log(h1.classList) // DOMTokenList ['sec', value: 'sec']
// h1.classList.remove('sec')
// console.log(h1.classList) // DOMTokenList [value: '']

// replace()
// h1.classList.replace('first','main') // first class item ta remove hoye sei jaygay main class aisha porbe

// contains() --- check kore specific kono class item ai element e ase kina .

// const isExist = h1.classList.contains('hello')
// console.log(isExist) // false

// console.log(h1.classList.contains('first')) // true

// toggle()

// h1.classList.toggle('main') // jodi main class item thake h1 er vitore tahole remove kore dau, r jodi na thake tahole add kore dau

// CSSStyleDeclaration Object Properties and Methods (v.70)
// The CSSStyleDeclaration object represents a collection of CSS Property-value pairs. It is used in API (mane CSSStyleDeclaration Object css er sob property er collection key value pair akare diye thake jar key hobe css property er camelCase and value hobe empty string "")

// ai declaration er use 2 ta api kore thake
// 1. HTMLElement.style (inline)
// 2. windwo.getComputedStyle() (internal and external)

// amra jokhon element.style likhi tokhon seta ashole CSSStyleDeclaration Object ke point kore thake

// Some Properties and methods of CSSStyleDeclaration Object

// Properties :
// 1. cssText
// 2. length
// 3. parentRule

// Methods :
// 1. getPropertyValue(property)
// 2. getPropertyPriority(property)
// 3. removeProperty(property)
// 4. setProperty(property,value,priority)
// 5. item(index)

// cssText

// element.style return kore CSSStyleDeclaration Object and sei object e 2 ta property thake . 1. length 2. cssText
// cssText holo oi element er sob inline css ke get and set korar jonno

// <h1 style="color: green; font-size: 20px;">Hello World!</h1>

// get cssText
// const h1 = document.querySelector('h1')
// console.log(h1.style.cssText) // color: green; font-size: 20px;

// set cssText
// console.log(h1.style.cssText) // color: green; font-size: 20px;
// h1.style.cssText = 'background-color: blue; color: white; font-size: 25px;'
// console.log(h1.style.cssText) // background-color: blue; color: white; font-size: 25px;

// tar mane ager sob inline css ke overwrite kore dise

// length
// console.log(document.querySelector('h1').style.length ) // 2

// now CSSStyleDeclaration Method

// all methods :
// 1. getPropertyValue(property)
// 2. getPropertyPriority(property)
// 3. removeProperty(property)
// 4. setProperty(property,value,priority)
// 5. item(index)

// item(index)
// syntax :
// element.style.item(index)
// ai method diye oi element er inline style er moddhe sob css property ke index number diye access kora jay

// Example :
// <h1 style="color: green; font-size: 20px;">Hello World!</h1>
// const h1 = document.querySelector('h1')
// console.log(h1.style.item(1)) // font-size
// console.log(h1.style.item(0)) // color

// getPropertyValue(property)
// ei method diye inline css e kono property er value ber kora hoy

// syntax :
// element.style.getPropertyValue('font-size')

// Example :
// <h1 style="color: green; font-size: 20px;">Hello World!</h1>
// const h1 = document.querySelector('h1')
// console.log(h1.style.getPropertyValue('font-size')) // 20px
// console.log(h1.style.getPropertyValue('color')) // green

// removeProperty()
// kono css property remove korar jonno use hoy

// Example :
// <h1 style="color: green; font-size: 20px;">Hello World!</h1>
// const h1 = document.querySelector('h1')
// h1.style.removeProperty('font-size')
// console.log(h1.style.cssText) // color: green; (font-size removed!)

// setProperty()
// ei method diye kono element er inline e css property set kora jay .
// ai method er 3 ta parameter thake
// 1st parameter : css property
// 2nd parameter : sei propertyr value
// 3rd parameter : 'important' , but this is optional parameter . 'important' dile css er important keyword er moto kaj kore . tar mane setar priority sobcheye beshi thake and sob jaygay apply hobe

// Syntax :
// element.style.setProperty('property','value','priority')

// Example :
// <h1 style="color: green; font-size: 20px;">Hello World!</h1>
// const h1 = document.querySelector('h1')
// h1.style.setProperty('font-size','43px','important')
// console.log(h1.style.cssText) // color: green; font-size: 43px !important;

// Computed Style and getComputedStyle Method (v.71)

// The computed style is the style actually used in displaying the element, after "stylings" from multiple sources have been applied. (kono element er upor inline , extarnal, internal etc sob dhoroner style eksathe jei css apply hoy setaii computed style)

// Style sources can include internal style sheets, external style sheets, inherited styles and browser default styles.

// sob css compute kore final jei css output ashe setaii computed style

// kono element er upor inline style thake , internal style thake , external style thake, browser er default style thake . erokom sob style eksathe kore oi element finally jei style e screen e show hocche setaii holo computed style

// element.style property represents only the CSS declarations set in the elements inline style attribute, not those that come from style rules elsewhere, such as style rules in the <head> section, or external style sheets or browser default. To get the values of all CSS properties for an element you should use window.getComputedStyle() instead.(tar mane holo element.style property only inline css er maddhome css property update kore . baki sob empty string thake . jodi oi element er parent element e kono style thake tahole se setake inherit kore na . browser er default style sei element.style property te thake na. only inline css style thake)

// The return style is a live CSSStyleDeclaration object (The CSSStyleDeclaration object represents a collection of CSS property-value pairs), which updates itself automatically when the element's style is changed.

// *******Important Notes***********
// element.style return kore CSSStyleDeclaration Obj, same object return kore window.getComputedStyle() . kintu element.style jei CSSStyleDeclaration object return kore seta read write 2 tai kora jay . tar css property set and get 2 taii kora jay . kintu window.getComputedStyle() jei CSSStyleDeclaration object return kore seta only read kora jay . mane only get kora jay , set kora jay na

// Example :
// const h1 = document.querySelector('h1')
// const computedStyle = window.getComputedStyle(h1)
// console.log(computedStyle) // all css style returned.. (joto inline, internal, extarnal , browser default sob eksathe return hoise)

// Event start (v.82)

// Event Binding with HTML Attribute (v.84)
// These bindings are element attributes , such as onclick, onchange, oninput etc which can be set equal to javascript that is to be executed when the given event occurs at that object.
// Example :
// <button onclick="alert('Button Clicked')">Click Me</button>

// Example :
// <button onclick="helloEvent()">Click Me</button>
// function helloEvent(){
//   alert('Hello World!')
// }

// Event Binding with Javascript (v.85)
// When we use this approach we can add or remove handlers dynamically as well as it improves the separation between the structure of document and its logic and presentation

// Example :
// <button>Click Me</button>
// document.querySelector('button').onclick = function(){
//   alert('Hello World!')
// }

// Example :
// <button>Click Me</button>
// const btn = document.querySelector('button')
// function disp(){
//   alert('Hello World!')
// }
// btn.onclick = disp

// OverWriting Event Handler (v.86)

// Example :
// <button>Click Me</button>
// function disp1(){
//   alert("Alert 1")
// }
// function disp2(){
//   alert("Alert2")
// }
// document.querySelector('button').onclick = disp1;
// document.querySelector('button').onclick = disp2;

// ekhane disp2 display hobe . karon disp1 pore houyay seta overwrite hoye disp2 hoye gese . etakeii bole OverWriting event handler

// ai problem ta kivabe solve korbo ?
// function disp(){
//   alert("Hello 1")
//   alert("Hello 2")
// }
// document.querySelector('button').onclick = disp
// kintu ai approach ta best practice na . samne amra dekhbo new technique use kore amra easily sohoj syntax diye 2 ta event eksathe run korte pari

// addEventListener (v.87)

// DOM Event Model
// The DOM 2 Event Model specification describes a standard way to create, capture , handle and cancel event in a tree like structure such as an XHTML document's object hierarchy.

// phases :
// 1. Capture Phase
// 2. Target Phase
// 3. Bubbling Phase
// eta niye pore study hobe . Now addEventListener()...

// addEventListener() method
// This method is introduced by DOM2, used to engage an event handler in a page

// Syntax :
// Object.addEventListener(event,handler,capturePhase)

// Object -- Object is the node node which the listener is to be bound
// event -- Event is a string indicating the type of event.
// handler -- Handler is the function that should be called when the event occurs.
// capturePhase -- CapturePhase is a Boolean indicating whether to use Bubbling(false) or Capture(True). This is optional. If you omit there is false by default.

// Example :
// function show(){
//   alert('hello')
// }
// const btn = document.querySelector('button')
// btn.addEventListener('click',show, false)

// *********Important Notes************
// akhn porjonto amra onclick action old way te kore ashcilam . tahole keno amra new technique addEventListener use korbo ? ki amon facilities ase ekhane ?
// Why we should use addEventListener() ?
// Ans :
// 1st Reason : It allows you to bind multiple handlers to an object for the same event without overwriting
// Example of 1st Reason --
// amra dekhechilam event overwriting concept . eta addEventListener diye easily solve kora jay . jemon..
// const btn = document.querySelector('button')
// btn.addEventListener('click',()=>{alert("Hello 1")})
// btn.addEventListener('click',()=>{alert("Hello 2")})
// ekhane prothome Hello 1 alert hobe then Hello 2 alert hobe

// 2nd Reason : It enables you finer-grained control of the phase when the listener is activated(Capture or Bubbling) -- amra capture and bubbling 2 ta phase er shubidha pai jeta ager technique e petam na

// 3rd Reason : It works on any DOM element, not just HTML elements.--- tar mane aita jekono node er upor kaj kore . jemon text node , comment node etc . not just element node, it use on text node, comment node etc

// removeEventListener() method (v.88)
// This method is used to remove handlers, with the same arguments given when the event was added.
// Example :
// const btn = document.querySelector('button')

// function show(){
//   alert('Hello World')
// }
// btn.addEventListener('click',show,false) // 1st
// btn.addEventListener('click',show,true) // 2nd

// btn.removeEventListener('click',show,true) // ekhane 1st event remove hobe na . 2nd event remove hobe . karon 2nd event er sob argument hubuhu mile jay removeEventListener er argument er sathe

// DOM Event Flow or Event Propagation (v.89)

// DOM Event Flow
// The DOM 2 Event Model specification describes a standard way to create, capture , handle and cancel event in a tree like structure such as an XHTML document's object hierarchy.

// DOM Event Flow er 3 ta phase thake
// 1. capture phase (event on top to bottom)
// 2. target phase (event on exact target)
// 3. bubbling phase (event on bottom to top) -- eta by default hoye thake

// Example :
{
  /* <div id="one">
1
<div id="two">
  2
  <div id="three">
    3
    <div id="four">
      4
    </div>
  </div>
</div>
</div> */
}

// Event Bubbling
// document.getElementById('one').addEventListener('click',()=>{console.log(1)}, false);
// document.getElementById('two').addEventListener('click',()=>{console.log(2)}, false);
// document.getElementById('three').addEventListener('click',()=>{console.log(3)}, false);
// document.getElementById('four').addEventListener('click',()=>{console.log(4)}, false);
// output :
// eta dekhbe jekhane take click kora hoise seta soho setar theke nicher dike kon kon jaygay click event ase . joto gula thakbe sob event run korbe . jemon div 3 te click korle answer : 3 2 1 . div 4 e click korle ashe 4 3 2 1 . div 2 te click korle 2 1 ashe . jodi div 1 er baire body or html tag e click event thakto tahole segulao run korto bottom to top serial onujayiii
// jemon
// document.querySelector('body').addEventListener('click',()=>{console.log('body')}, false)
// document.querySelector('html').addEventListener('click',()=>{console.log('html')}, false)
// document.getElementById('one').addEventListener('click',()=>{console.log(1)}, false);
// document.getElementById('two').addEventListener('click',()=>{console.log(2)}, false);
// document.getElementById('three').addEventListener('click',()=>{console.log(3)}, false);
// document.getElementById('four').addEventListener('click',()=>{console.log(4)}, false);
// output :
// click on div 3 and result : 3 2 1 body html
// click on div 1 and result : 1 body html
// click on div 4 and result : 4 3 2 1 body html

// tar mane jekhane click kora hobe sekhan theke shuru kore bottom to top serial maintain kore sob parent node e jay and check kore je click event ase kina . jodi thake tahole sei event run kore .

// *** Important Notes ***
// jodi bottom to top jauyar somoy kono ekta parent e click event na pay tahole se next parent e chole jay click event khujar jonno . jodi pay setao run kore . tar mane holo jodi body element e click event na ditam and html element e click event ditam taholeo bottom to top jauyar somoy body skip hoye html er click event run korto
// jemon
// document.querySelector('html').addEventListener('click',()=>{console.log('html')}, false)
// document.getElementById('one').addEventListener('click',()=>{console.log(1)}, false);
// document.getElementById('two').addEventListener('click',()=>{console.log(2)}, false);
// document.getElementById('three').addEventListener('click',()=>{console.log(3)}, false);
// document.getElementById('four').addEventListener('click',()=>{console.log(4)}, false);
// output :
// output :
// click on div 3 and result : 3 2 1 html
// click on div 1 and result : 1 html
// click on div 4 and result : 4 3 2 1 html

// ***** important notes ********
// bottom to top event chole karon addEventListener er third argument e false thake . eta by default false deya thake . kintu jodi bottom to top er bodole top to bottom korte chai tahole 3rd argument e true dite hobe . tokhon take event capturing bole

// Event Capturing 
// document.querySelector('body').addEventListener('click',()=>{console.log('body')}, true)
// document.querySelector('html').addEventListener('click',()=>{console.log('html')}, true)
// document.getElementById('one').addEventListener('click',()=>{console.log(1)}, true);
// document.getElementById('two').addEventListener('click',()=>{console.log(2)}, true);
// document.getElementById('three').addEventListener('click',()=>{console.log(3)}, true);
// document.getElementById('four').addEventListener('click',()=>{console.log(4)}, true);
// output :
// click on div 3 and result : html body 1 2 3
// click on div 1 and result : html body 1
// click on div 4 and result : html body 1 2 3 4

// Event Object (v.90)
// DOM events pass an Event object as an argument to handlers . This object contains extra information about the event that occurred.

// Example :
// addEventListener('click',(e)=>{....})
// upore e holo event object
// jokhon kono event fire hoy sei event er handler function er parameter e ekta object pass hoy . sei object ke bole event object . amra chaile sei object sei event handler function er vitor use korte pari .

// document.querySelector('button').addEventListener('click',(e)=>{
//   console.log(e) // return pointerEvent object , this is actually event object
//   console.log(e.clientX) // jekhane click kortesi seta x okkhe koto pixel right side e seta ber kore
//   console.log(e.clientY)// jekhane click kortesi seta y okkhe koto pixel nicher side e seta ber kore
//   console.log(e.target) // <button>Click for Change</button>
//   console.log(e.type) // click
//   // and so on...
// })

// What is the difference between target and current target (v.91)

{
  /* <div id="one">
1
<div id="two">
  2
  <div id="three">
    3
    <div id="four">
      4
    </div>
  </div>
</div>
</div> */
}

// document.getElementById('one').addEventListener('click',(e)=>{
//   console.log('1')
//   console.log('Target = ' + e.target.dataset.name)
//   console.log('Current Target = ' + e.currentTarget.dataset.name)
// }, false)
// document.getElementById('two').addEventListener('click',(e)=>{
//   console.log('2')
//   console.log('Target = '+e.target.dataset.name)
//   console.log('Current Target = '+e.currentTarget.dataset.name)
// },false)
// document.getElementById('three').addEventListener('click',(e)=>{
//   console.log('3')
//   console.log('Target = '+e.target.dataset.name)
//   console.log('Current Target = '+e.currentTarget.dataset.name)
// },false)
// document.getElementById('four').addEventListener('click',(e)=>{
//   console.log('4')
//   console.log('Target = '+e.target.dataset.name)
//   console.log('Current Target = '+e.currentTarget.dataset.name)
// },false)

// Event methods stopPropagation and stopImmediatePropagation (v.92)

// stopPropagation() method  --- Prevents further propagation of the current event in the capturing and bubbling phases.
// Syntax : e.stopPropagation();

// stopImmediagePropagation() --- Prevents other listeners of the same event from being called.
// Syntax : e.stopImmediatePropagation()

// Example :
{
  /* <div id="one">
1
<div id="two">
  2
  <div id="three">
    3
  </div>
</div>
</div> */
}
// function div1(e){
//   this.style.backgroundColor = 'red'
// }
// function div2(e){
//   this.style.backgroundColor = 'blue'
//   e.stopPropagation()
// }
// function div2_2(e){
//   this.style.width = '250px'
// }
// function div3(e){
//   this.style.backgroundColor = 'green'
// }

// const divOne = document.querySelector('#one')
// const divTwo = document.querySelector('#two')
// const divThree = document.querySelector('#three')

// divOne.addEventListener('click',div1,false)
// divTwo.addEventListener('click',div2,false)
// divTwo.addEventListener('click',div2_2,false)
// divThree.addEventListener('click',div3,false)

// Notes about stopPropagation -----
// amra bubbling phase e thakle target element theke top parent element e same event fire hote thake and capturing phase e thakle top parent element theke target element porjonto same event fire hote thake . kintu amra jodi parent er ai traversal kora obosthay kono ekta parent er moddhe e.stopPropagation() lagaiya dei tahole oi parent element er por r kono event fire hobe na .
// bubbling er khetre ami jodi div 3 te click kori and div 2 te stopPropagation() lagaiya dei tokhon div 3 er click event fire hobe , then div 2 er click event fire hobe kintu tarpor parent to parent element e jotoi click event thakuk seta r fire hobe na . tar mane div 2 er por r event propagate hobe na
// capturing er khetre ami jodi div 3 te click kori and div 2 te e.stopPropagation() lagaiya dei tahole seta parent html theke propagate hote hote jokhon div 2 te ashbe tokhon se dekhbe ekhane propagate stop kore deya hoyeche . then se div 3 te jabeii na

// How to prevent Element default behavior (v.93)
// jodi kono element er kono default behaviour thake tahole seta ke off kore dey

// <a href="https://beautybooth.com.bd/">BeautyBooth</a>
// a tag er ekta default behaviour holo ekhane click korleii automatically href link e chole jay . othocho ami a tag er upor kono click event lagai nai . eta a tag er ekta default behaviour . ami jodi chai se tar default behaviour off kore dek tahole use korbo e.preventDefault() method
// Example :
// const a = document.querySelector('a')
// a.addEventListener('click',(e)=>{
//   e.preventDefault()
// },false)
// akhn a te click korleo kothau redirect hobe na

// akhn ami eta ke manually click event dibo jate click korle href er action e chole jay
// const a = document.querySelector('a')
// a.addEventListener('click',(e)=>{
//   e.preventDefault()
//   window.open('https://beautybooth.com.bd/')
// },false)

// Mouse Event (v.94)

// 1. mousedown -- It fires when mouse button is pressed down.
// 2. mouseup -- It fires when the mouse button is released.
// 3. click -- It fires when something is clicked. mousedown, mouseup and click events fires in sequence.
// 4. dblclick -- It fires when something is clicked twice in rapid succession. mousedown, mouseup, click, mousedown, mouseup, click and dblclick events fires in sequence.
// 5. mouseenter -- It fires when a mouse starts to hover over some element. No bubble
// 6. mouseleave -- It fires when a mouse exits while hovering over some element. No bubble
// 7. mouseover -- It fires when mouse is hovering over some element.
// 8. mouseout -- It fires when mouse leaves from hovering over some element.
// 9. mousemove -- It fires when the mouse moves.
// 10. contextmenu -- It fires when mouse right button is clicked.

// 1. mousedown -- It fires when mouse button is pressed down.
// document.querySelector('button').addEventListener('mousedown',()=>{console.log('firing')})
// jokhon mouse er right or left jekono ekta button click hoy tokhon fire hoye thake

// 2. mouseup -- It fires when the mouse button is released.
// document.querySelector('button').addEventListener('mouseup',()=>{console.log('firing')})
// mouse er right or left jekono ekta button click kore chere dile ai event fire hoy .

// 3. click -- It fires when something is clicked. mousedown, mouseup and click events fires in sequence.
// document.querySelector('button').addEventListener('click',()=>{console.log('firing')})
// mouse er only left side click kore dhore rakhle fire hoy na . click kore chere dileii fire hoy .

// 4. dblclick -- It fires when something is clicked twice in rapid succession. mousedown, mouseup, click, mousedown, mouseup, click and dblclick events fires in sequence.
// document.querySelector('button').addEventListener('dblclick',()=>{console.log('firing')})
// only left side er button 2 bar por por click kore chere dile ai event fire hoy

// 5. mouseenter -- It fires when a mouse starts to hover over some element. No bubble
// document.querySelector('button').addEventListener('mouseenter',()=>{console.log('firing')})
// jokhon ami mouse hover korbo tokhonii ei event fire hoy . kintu ai event er ekta bishoy hocche eta bubbling hoy na

// 6. mouseleave -- It fires when a mouse exits while hovering over some element. No bubble
// document.querySelector('button').addEventListener('mouseleave',()=>{console.log('firing')})
// jokhon ami mouse hover korbo tokhonii ei event fire hoy na. jokhon ami element theke mouse hover soraiya nibo tokhon aita fire hoy . kintu ai event er ekta bishoy hocche eta bubbling hoy na .

// 7. mouseover -- It fires when mouse is hovering over some element.
// document.querySelector('button').addEventListener('mouseover',()=>{console.log('firing')})
// eta mouseenter er motoi . just parthokko hocche mouseenter e bubbling hoy na and mouseover e bubbling hoy

// 8. mouseout -- It fires when mouse leaves from hovering over some element.
// document.querySelector('button').addEventListener('mouseout',()=>{console.log('firing')})
// eta mouseleave er motoi . just parthokko hocche mouseleave e bubbling hoy na and mouseout e bubbling hoy

// 9. mousemove -- It fires when the mouse moves.
// document.querySelector('button').addEventListener('mousemove',()=>{console.log('firing')})
// element er upor mouse hover kore joto naraite thakbo toto event fire hoteii thakbe

// 10. contextmenu -- It fires when mouse right button is clicked.
// document.querySelector('button').addEventListener('contextmenu',(e)=>{
//   e.preventDefault()
//   console.log(e)
//   console.log('firing')
//   const box = document.querySelector('.box')
//   box.classList.toggle('show')
//   box.style.top = e.offsetY
//   box.style.left = e.offsetX
// })

// Focus Event

// focus -- jokhon kono input or onno kono element e jekhane focus event lagano jay sekhane click korle focus event fire hoy . jemon input er vitor click korle focus event fire hoy . ei event bubbling hoy na

// blur -- jei element er upor blur event set kora jay sei event e blur event dile jodi ami sei element er baire click kori tahole blur event fire hoy . ei event bubbling hoy na

// focusin -- eta similar focus event er . just eta bubbling hoy kintu focus e bubbling hoy na

// focusout -- eta similar blur event er . just eta bubbling hoy kintu blur e bubbling hoy na

// <input type="text" placeholder="focus event test">
// const input = document.querySelector('input')
// function fe(e){
//   document.querySelector('h1').style.color = 'orange'
// }
// function be(e){
//   document.querySelector('h1').style.color = 'blue'
// }
// input.addEventListener('focus',fe,false)
// input.addEventListener('blur',be,false)

// Key Event (v.97)

// 1. keydown -- It fires as a key is pressed down.

// 2. keyup -- It fires as the key is released.

// 3. keypress -- It fires after a key is pressed down(after keydown). It only works with printable characters.

// document.querySelector('input').addEventListener('keypress',(e)=>{
//   console.log(e)
//   // console.log(e)
//   // after press shift button :
//   // console.log(e.key) // shift
//   // after press alt button :
//   // console.log(e.key) // Alt
//   // after press h button :
//   // console.log(e.key) // h
// })

// Text Event (v.98)
// textInput
// document.querySelector('input').addEventListener('textInput',(e)=>{
//   // after press a button :
//   console.log(e.data) // a
// })

// Window Object (v.98)

// innerWidth and outerWidth
// innerWidth holo only browser screen er width jetay kono kichu display hoy and outerWidth holo full browser er width .

// console.log(window.innerWidth)
// console.log(window.outerWidth)

// innerHeight and outerHeight
// innerHeight holo only browser screen er height and outerHeight holo full browser er height

// console.log(window.innerHeight)
// console.log(window.outerHeight)

// Dialog Boxes (v.99)
// It is used to provide some information to users.

// Type of Dialog box :
// 1. Alert
// 2. Confirm
// 3. Prompt

// 1. Alert -- alert()
// This window objects method is used to display data in alert dialog box. alert really should be used only when you truly want to stop everything and let the user know something.
// jokhon alert() method run korbe tokhon user sei page e kichui korte parbe na jotokkhon na sei alert close kora hoy .

// Syntax : window.alert() or alert()

// 2. Confirm -- confirm()
// This window object's method is used to display a message for a user to respond to by pressing either an OK button to agree with the message to a Cancel button to disagree with the message. It returns true on OK and false on Cancel
// etao alert() method er moto ok or cancel korar ag porjonto browser stop hoye thake , r kono kaj kora jay na.

// syntax : window.confirm() or confirm()
// Example :
// const isOkay = window.confirm("Are You Sure ?")
// console.log(isOkay)

// Example :
// if(confirm('Are You Sure?')){
//   console.log("He is Confirmed!")
// }else{
//   console.log('Not Confirmed!')
// }

// 3. prompt() method
// Windwo objects method prompt() can be used to get input from the user, named prompt. The prompt() method displays displays a dialog box that prompts the visitor for input.
// Once the prompt function obtains input from the user, it returns that input. If the user press the cancel button in the dialog or close box, a value null will be returned.

// Syntax : prompt(text,defaultText)
// Example :
// const inputText = prompt('Enter your name : ','name')
// console.log(inputText)

// open and close method (v.100)

// open
// document.querySelector('button').addEventListener('click',()=>{
//   window.open("https://beautybooth.com.bd/","_blank","width=100, height=200")
// })

// close
// var newWindow
// document.querySelector('button').addEventListener('click',()=>{
//   newWindow = window.open("https://beautybooth.com.bd/","_blank","width=100, height=200")
// })
// document.querySelector('#close').addEventListener('click',()=>{
//   newWindow.close();
// })

// Form (v.111)

// Accessing Forms (v.112)
// kivabe amra form ke access korte pari
// document er vitor forms nam e ekta array ase . sei array te web page e joto gula form ase sob gula eksathe return hoy

// const formOne = document.forms[0] // total form er first form ta return hoise
// const formTwo = document.forms[1] // total form er second form ta return hoise
// console.log(document.forms) // total joto gula form asi create korsi sob aisha porse

// Form access with name attribute
// <form action="" name="formOne">...</form> and <form action="" name="formTwo">...</form>
// const formOne = document.formOne
// const formTwo = document.formTwo
// console.log(formOne)

// Form Access with querySelector or getElementById or equal technique
// const formOne = document.querySelector('#form1')
// const formTwo = document.getElementById('form2')
// console.log(formOne)
// console.log(formTwo)

// Accessing Form Fields (v.113)

// What is Cookie and How it works  (v.115)
// A cookie is a small piece of text data set by web server that resided on the client's machine. (cookie holo kichu text data jeta thake client machine er moddhe jemon google chrome , mozila or others browser or app. eta set kore dey web server . mane jei server e ai website ta thake sei server cookie set kore dey client er machine e jokhon client server er kase request pathay )

// Once it's been set, the client automatically returns the cookie to the web server with each request that it makes. (jokhonii ekbar client e kono cookie set korse kono web server, tar por theke joto request jabe sei client theke sei server e totobar sei cookie o jabe client theke server e )

// This allows the server to place value it wishes to 'remember' in the cookie, and have access to them when creating a response.

// sudhu sei web server cookie ke access korte parbe jei cookie ta sei server nije set korse . A namok web server jei cookie ekjon client er machine e set korse sei cookie kokhonoii B , C , D... namok web server access korte parbe na

// mot kotha prottek ta request er sathe cookie automatic server er kase jay . jei cookie ta sei particular server set koreche

// prottekta cookie er ekta expire date thake . eta server thik kore dey koto somoy porjonto cookie ta client machine e thakbe or kichu condition basaed cookie delete hoye thake . jemon jodi user browser close kore dey tokhon cookie delete hoye jabe , or jodi logout kore dey tahole cookie delete hoye jabe

// Third Party Cookies
// cookie kichu ta develop hoyeche . tai third party cookie ashe .
// age ki hoito ? age web server cookie banaito and seta client er server e set kore dito . kintu akhn server cookie banay na , server akhn ekta unique id banay . and sei unique id er sathe match kore ekta cookie create hoye sei cookie third party cookies er moddhe set hoye jay . ai third party cookie client er machine e thake na . eta alada ekta jaygay thake . jar karone client er machine e kono chap pore na and server onek onek cookie set korte pare ekta particular client er jonno

// real world concept :
// dhoren ami beautybooth er website e ashi and kichu cart item add kori or onno kichu kori , tokhon beautybooth er server sei kajer vittite kichu cookie banaiya sei cookie third party cookies er moddhe set kore dey and ekta unique id client ke dey jate ai id diye third party cookies theke sei particular cookie ta ber kora jay .

// Types of Cookies :
// 1. Session Cookies - Cookies that are set without the expires field are called session cookies. It is destroyed when the user quits the browser. (browser ke close korar sathe cookie delete hoye jay)
// 2. Persistent Cookies - The browser keeps it up until their expiration date is reached.(ekta somoy set kora jay koto somoy porjonto cookie thakbe)

// Cookies in Javascript (v.116)
// cookies are exposed as the cookie property of the document object. This property is both readable and writeable.

// You can see cookies in google chrome by following chrome://settings/content/cookies

// How to Set Cookies into Client System using JavaScript (v.117)
// When you assign a string to document.cookie, the browser parses it as a cookie and adds it to its list of cookies.
//There are several parts to each cookies. many of them optional.

// Syntax :
// document.cookie = "name=value";
// document.cookie = "name=value; expires=date; domain=domain; path=path; secure";
// document.cookie = "name=value; max-age=inSecond; domain=domain; path=path; secure";
// ****Important Notes****
// expires and max-age ai 2 ta attribute same kaj kore . kintu production e 2 ta attribute ee add kora hoy . karon onk browser e expires kaj kore na , abar onek browser e max-age kaj kore na .
// name=value chara baki sob attribute optional . name diteii hobe . kintu name chara baki attribute jodi nao dei taholeo browser by default oi attribute e kichu value condition onujayii add kore dey.

// Example :
// document.cookie = "userName=Tanvir"
// document.cookie = "userName=Tanvir; expires=Sunday, 8-Sep-2024 08:10:00 UTC"
// document.cookie = "userName=Tanver; max-age="+60*60*24*1; // ekhane max-age= sesh houyar por sathe sathe double quotes end kore deya hoy . karon nahole time er hishab ta stirng hishebe calculate hobe

// Optional Cookies Attribute :
// max-age
// expires
// domain
// path
// secure

// Whenever you omit the optional cookie fields, the browser fills them in automatically with reasonable defaults.

// How to set Cookies max-age attribute (v.118)
// It is used to create persistent cookie. It is supported by all modern browsers except IE.
// max-age only second e time set kore thake

// Types of Cookies :
// 1. Session Cookies - Cookies that are set without the expires field are called session cookies. It is destroyed when the user quits the browser. (browser ke close korar sathe cookie delete hoye jay)
// 2. Persistent Cookies - The browser keeps it up until their expiration date is reached.(ekta somoy set kora jay koto somoy porjonto cookie thakbe)

// EXample :
// document.cookie = "username=geeky; max-age="+60*60*24*10; // time limit 10 days
// document.cookie = "username=geeky; max-age="+10; // time limit 120 second
// document.cookie = "username=geeky; max-age=" + 60*60*24*10 + "; path=/";

// alert(document.cookie) // all cookie ashbe

// How to set expires date for cookie (v.119)
// It is used to create persistent cookie.

// Example :
// document.cookie = "username=tanvir; expires=Sun, 8-Sep-2024 08:57:00 UTC"

// How to set Cookie domain path and secure (v.120)

// domain
// It specifies the domain for which the cookie is valid . If not specified, this defaults to the host portion of the current document location. If a domain is specified, subdomains are always included.

// Example :
// document.cookie = "username=tanvir; domain=tanvir.com";
// ekhane tanvir.com domain er jonno ai cookie banano hoise . amra chaile ai domain er subdomain eo ai cookie ta access korte parbo . jemon code.tanvir.com or main.tavir.com etc . kintu subdomain e kono cookie set korle seta main domain e access kora jabe na or siblings kono domain e add kora jabe na . only sei subdomain er jodi kono child thake setate access kora jabe . tar mane parent to child access kora jabe kintu child to parent and siblings to siblings access kora jabe na . same concept path er khetreo . path bolte routing bujhaisi .

// jodi domain kono kichu set na kori tahole jekhan theke cookie set kora hoise setaii domain deya hoy

// path
// path o domain er moto behaviour kore

// Example :
// document.cookie = "username=tanvir; path=/"
// document.cookie = "username=tanvir; path=/category"
// document.cookie = "username=geeky; path=/category/first"

// first example e path=/ deya hoise . tar mane / er por jekono child route jemon /category/third/3 or /freegift/2 etc jekono route e jabe cookie ta . kintu / er kono parent route thakle sekhane jabe na .
// amnivabe 2nd or third example e cookie set hole kokhono tader parent route jemon / e cookie access kora jabe na

// secure
// jei cookie te attribute secure set kore dibo seta https protocol e transmit hobe . ta chara onno kono protocol e transmit hobe na

// How to Replace and Append Cookie (v.121)

// tar mane kivabe amra existing cookie ke onno kono cookie dara replace korte pari and already kono cookie er vitor notun kichu append kora

// jodi amra same name diye 2 ba tar theke beshi cookie create kori tahole last name er value ta replace hobe kintu jodi name change kore create kori tahole append hobe

// How to Read Cookies (v.122)


