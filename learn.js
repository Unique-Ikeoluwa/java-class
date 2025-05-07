// // How to use sort and reverse
// let learn = [ 10, 9, true, "come", "sweet"];
// learn.sort()
// // learn.reverse()

// console.log(learn)
// let learn1 =[35, 25, false, "eggs", "play", true];
// learn1.sort()
// // learn1.reverse()

// console.log(learn1)
// // changing the case of string
// let learn2 = "UNIFORM"
// learn2.toLowerCase()
// let learn3 = "helpless"
// learn3.toUpperCase()
// let learn4 = "GrEAt"
// learn4.toLowerCase()

// console.log(learn2, learn3, learn4)
// // changing the case of the items in object
// let learn5 = {
//     mister:"TOBE SchOOl CHILd"}
// learn5.mister =learn5.mister.toLowerCase();

// console.log(learn5)

let studentsDb = [
    {
        name: "Sule",
        age: 22,
        gender: "m",
        course: "maths"
    },
    {
        name: "Chidinma",
        age: 26,
        gender: "f",
        course: "psychology"
    },
    {
        name: "Janet",
        age: 24,
        gender: "f",
        course: "psychology"
    },
    {
        name: "Ojetola",
        age: 19,
        gender: "m",
        course: "psychology"
    }
]

let maths = []
let psychology = []

function alloDept(arrStu){
    for (let student in arrStu){
        if (arrStu[student].course === "maths"){
            maths.push(arrStu[student])
        } else if(arrStu[student].course === "psychology") {
            psychology.push(arrStu[student])
        }
    }
    console.log("Maths Department:", maths);
    console.log("Psychology Department:", psychology);
}
alloDept(studentsDb)



// function pyramid(star){
//     for (i= 1; i <= star; i++){
//         for (j = 0; j > star; j--) {
//             let wid = star-star[j]
//             console.log(wid)
//         }
//     }
// }
// pyramid(8)

// function pyramid(star) {
//     for (let i = 1; i <= star; i++) {
//         let spaces = "";  // Create empty space string
//         let stars = "";   // Create empty star string
//         // Add spaces (for alignment)
//         for (let j = 0; j < star - i; j++) {
//             spaces += " ";
//         }
//         // Add stars (odd numbers: 1, 3, 5, ...)
//         for (let k = 0; k < 2 * i - 1; k++) {
//             stars += "*";
//         }
//         console.log(spaces + stars);
//     }
// }
// pyramid(8);
// function pyramid(star) {
//     for (let i = 1; i <= star; i++) {
//         let row = ""; // Start with an empty row

//         for (let j = 1; j <= 2 * star - 1; j++) {
//             if (j >= star - (i - 1) && j <= star + (i - 1)) {
//                 row += "*"; // Add a star in the correct range
//             } else {
//                 row += " "; // Otherwise, add a space
//             }
//         }

//         console.log(row);
//     }
// }

// pyramid(8);

// String
console.log("world".includes("hello world"))

// Array
console.log([10, 20, 30].includes(20));

let colors = ["red", "green", "blue"];

for (let l of colors) {
    console.log(l);        // 0, 1, 2
    // console.log(colors[l]); // red, green, blue
}



