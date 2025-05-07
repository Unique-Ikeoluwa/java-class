// // let name = "Ada";
// // function greetUser(names){
// // return `Hello, ${names}`
// // }
// // console.log(names(name))
// // // function processUserInput(callback) {
// // //     console.log(callback(name));
// // //   }
// // //   processUserInput(greetUser)
// // // function greetUser(name) {
// // //     return `Hello, ${name}`;
// // //   }
// //   greetUser = "Hello"
// //   function processUserInput(femi) {
// //     const name = "Ada";
// //     console.log(femi(name)); // Higher-order function using a callback
// //   }
  
// //   processUserInput(greetUser);

// // You have an array of student scores.
// // You want to do two things:

// // 1. Use forEach() to:
// // Log a message like: "Student 1 scored 75", "Student 2 scored 88", etc.

// // 2. Use map() to:
// // Return a new array of those scores doubled (for example, for bonus points).
  
// // studentScores = [75, 88, 96]
// // studentScores.forEach((student, index) => {
// //     console.log(`Student ${index + 1} scored ${student}`)
// // });
// // doubled = studentScores.map(scores => {
// //     return scores * 2
// // })
// // console.log(doubled)
// // students = studentScores.map((score, index) => {
// //     return `Student ${index + 1}: ${score}`
// // })
// // // console.log(students)
// // // 1. Use filter() to get only students who passed (score ≥ 70)
// // // 2. Use map() to format passed students
// // const students = [
// //     { name: "Ada", score: 92 },
// //     { name: "Sam", score: 68 },
// //     { name: "Zara", score: 81 },
// //     { name: "Bola", score: 55 },
// //     { name: "Tunde", score: 75 }
// //   ];
// //   let passedStudent = students.filter(student =>
// //     student.score >= 70
// //   )
// //   console.log(passedStudent)

// //   let studentFormat = passedStudent.map(student => `${student.name} passed with ${student.score}`)
// //   console.log(studentFormat)
// //   studentFormat.forEach(message => console.log(message))

// //   let failedStudent = students.filter(failed => failed.score < 70)
// //   console.log(failedStudent)
// //   let failedFormat = failedStudent.map(fail => `${fail.name} failed by scoring ${fail.score} but I know you can do better next time.`)
// //   console.log(failedFormat)
// //   failedFormat.forEach(motivation => console.log(motivation))
// //    Object.assign
// let a = {
//     b: 2,
//     c: 3
// }
// let bb = {
//     d: 4,
//     e: 5,
// }
// Object.assign(a, bb)
// console.log(a)
// //    Object.create
// const animal = {
//   speak() {
//     console.log("The animal makes a sound");
//   }
// };
// const dog = Object.create(animal);
// dog.bark = function () {
//   console.log("Woof!");
// };
// dog.speak();
// dog.bark(); 


// //    Object.keys and values
// const user = { name: "Segee", age: 23 };
// console.log(Object.keys(user)); 
// console.log(Object.values(user))
// //     Object.freeze
// const statuss = { married: true };
// Object.freeze(statuss);
// statuss.married = false;

// console.log(statuss.married);
// //   Object.isfrozen
// let relStatus = {
//     Divorced : true
// }
// Object.freeze(relStatus)
// console.log(Object.isFrozen(relStatus))

// 🔁 Create a third user using Object.create() and modify properties.

// 🧪 Use Object.keys() to list all properties of that user.

// ❄️ Freeze the user and try modifying their name.

// 🧠 Use Object.isFrozen() to check if your freeze worked.

const baseProfile = {
    greet () {
      return `Hello I am ${this.name}`
    },
    email () {
      return `${this.name}@mail.com`
    },
    updateName (Newname) {
      this.name = Newname
    },
    describeUser (){
      return `${this.greet()}, I am the ${this.position} I am ${this.age} years old and I am a size ${this.size}. The email to reach me is ${this.email()}`
    },
    newUser (){
      if (Object.isFrozen(this) == false){
        return this.describeUser()
      } else {
        return "This user can not be changed cause it is frozen"
      }
    }
  }
  let user1 = Object.create(baseProfile)
  user1.name = "Tami"
  user1.age = 43
  user1.position = "Developer"
  user1.size = 12
  console.log(Object.keys(user1), "'Displaying user keys'")
  
  // Practicing assign
  let user2 = Object.assign({}, user1, {name: "Segz", age: 32})
  console.log(Object.values(user2), "'Displaying user values'")
  
  //  Practicing create
  let user3 = Object.create(baseProfile)
  user3.name = "Felix"
  user3.age = 23
  user3.size = 10
  user3.position = "CEO"
  user3.email()
  user3.greet()
  console.log(user3, "'Before updating'")
  user3.updateName("Fred")
  
  // testing email function, greet function, updateName function, and describeUser function
  console.log(user3.describeUser(), "'After updating, note that the name changed from 'Felix' to 'Fred''")
  
  // testing newUser function before and after freezing the user
  console.log(user3.newUser())
  Object.freeze(user3)
  console.log(user3.newUser())
  console.log(Object.isFrozen(user3), "'Checking if the user is frozen after freezing it'")
  