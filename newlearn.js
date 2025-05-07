// const tasks = [
//     { text: "Do laundry", done: true },
//     { text: "Study JS", done: false },
//     { text: "Buy groceries", done: false },
//   ];
  
//   const incompleteTasks = tasks.filter(task => !task.done);
//   console.log(incompleteTasks);

//   const people = [
//     { name: "Alice", age: 17 },
//     { name: "Bob", age: 22 },
//     { name: "Charlie", age: 16 },
//     { name: "David", age: 25 },
//     { name: "Eve", age: 18 },
//   ];
// const adults = people.filter(adult => adult.age >= 18)  
// console.log(adults)

// const people1 = [
//     { name: "Alice", age: 17 },
//     { name: "Bob", age: 22 },
//     { name: "Charlie", age: 16 },
//     { name: "David", age: 25 },
//     { name: "Eve", age: 18 },
//     { name: "Diana", age: 19 },
//   ];
  
//   const oldStartWithD = people1.filter(older => older.name[0] == "D" && older.age >= 18)
// //   or 
// const oldStartWithD1 = people1.filter(older => older.name.startsWith("D") && older.age >= 18)
//   console.log(oldStartWithD)
//   console.log(oldStartWithD1)

//   const people2 = [
//     { name: "Alice", age: 17 },
//     { name: "Bob", age: 22 },
//     { name: "Charlie", age: 16 },
//     { name: "David", age: 25 },
//     { name: "Eve", age: 18 },
//     { name: "Diana", age: 19 },
//   ];
// const person = people2.filter(adult => adult.age >= 13 && adult.age <= 19 && adult.name[adult.name.length-1] === "e")
// const person1 = people2.filter(adult => adult.age >= 13 && adult.age <= 19 && adult.name.endsWith("e")) 
// console.log(person)  
// console.log(person1)

// const people3 = [
//     { name: "Alice", age: 17 },
//     { name: "Bob", age: 22 },
//     { name: "Charlie", age: 16 },
//     { name: "David", age: 25 },
//     { name: "Eve", age: 18 },
//     { name: "Diana", age: 19 },
//     { name: "Zoe", age: 15 }
//   ];
  
//   const older20 = people3.filter(longer => longer.name.length > 4 && longer.age < 20)
//   console.log(older20)

//   const people4 = [
//     { name: "Alice", age: 17 },
//     { name: "Bob", age: 22 },
//     { name: "Charlie", age: 16 },
//     { name: "David", age: 25 },
//     { name: "Eve", age: 18 },
//     { name: "Diana", age: 19 },
//     { name: "Zoe", age: 21 }
//   ];
//   const include = people4.filter(oldeIn => oldeIn.age > 18 && !oldeIn.name.includes("a"))
//   console.log(include)

  
//   const people5 = [
//     { name: "Alice", age: 17 },
//     { name: "Bob", age: 22 },
//     { name: "Charlie", age: 29 },
//     { name: "David", age: 25 },
//     { name: "Diana", age: 19 },
//     { name: "Zoe", age: 21 },
//     { name: "Marco", age: 27 },
//     { name: "Luna", age: 30 },
//     { name: "Paul", age: 18 },
//     { name: "Oscar", age: 23 }
//   ];

//   const boss = people5.filter(alot => 
//     alot.name.length >= 5 && alot.age >= 18 && 
//     alot.age <= 30 && !alot.name.includes("e") && 
//     (alot.name.endsWith("a")||alot.name.endsWith("e")
//     ||alot.name.endsWith("i")||alot.name.endsWith("o")||
//     alot.name.endsWith("u")))
//   console.log(boss)

let nums = [10, 5, 2, 20, 1];

// Ascending Order (small to big)
nums.sort((a, b) => a - b);
console.log("Ascending:", nums);

// Descending Order (big to small)
nums.sort((a, b) => b - a);
console.log("Descending:", nums);

let numbers = [15, 35, 12, 2, 1];

// Ascending Order (small to big)
numbers.sort((c, d) => c - d);
console.log("Ascending:", numbers);


// Descending Order (big to small)
numbers.sort((c, d) => c - d);
console.log("Descending:", numbers);

