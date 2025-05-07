// // for addition
// let unk = [4, 11, 32, 35, 48, 67, 121];
// let sum = 0;
// for (let i = 0; i < unk.length; i++) {
//     sum += unk[i];
// }

// console.log("The sum of the numbers in the array is:", sum);

// // for even and odd numbers
// let evenNum = [];
// let oddNum = [];
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         evenNum.push(i);
//     } else {
//         oddNum.push(i);
//     }
// }
// console.log("Even Numbers:", evenNum);
// console.log("Odd Numbers:", oddNum);

// // for multiplication by 3
// let numbers = [2, 4, 6, 8, 10, 12];
// for (let i = 0; i < numbers.length; i++) {
//     numbers[i] *= 3;
// }
// console.log("Multiplied Array:", numbers);

// // Using for and while loop
// let fact = 1;
// for (let i = 10; i >= 1; i--) {
//     fact *= i;
// }
// console.log("10! =", fact);

// // or
// let factorial = 1;
// let i = 10;
// while (i >= 1) {
//     factorial *= i;
//     i--;
// }
// console.log("10! =", factorial);

let number1 = 100
for (let i =1; i <= number1; i++){
    if( i % 3 ==0 && i % 5 == 0){
        console.log(i, "fizzbuzz")
    }
    else if(i % 3==0){
        console.log(i, "fizz")
    }
    else if( i % 5==0){
        console.log(i, "buzz")
    }
}

let students = [
    "peter",
    "Tope",
    "Femi",
    "Sewa",
    "Jojo",
    "Dede",
    "Mikky"
]
for(let i= 0; i < students.length; i++){
    console.log(`Welcome to blockfuse labs ${students[i]}`)
}
for(let i= 0; i < students.length; i++){
    if (students[i] == "Dede"){
        console.log("students exists")
        continue
    }
    else {
        console.log("students does not exist")
}
}

let arr = [8, 6, 2, 4, 11, 16, 26, 5]
let x = 0
for (let i = 0; i < arr.length; i++){
    if (x < arr[i]){
        x = arr[i]
    }
}
console.log(x)


let n = 10; // Number of terms
let fibonacciSequence = [0, 1];

for (let i = 2; i < n; i++) {
    fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
}

console.log(fibonacciSequence);


let scores = [95, 85, 72, 65, 50];

for (let i = 0; i < scores.length; i++) {
    let grade;
    
    if (scores[i] >= 90 && scores[i] <= 100) {
        grade = 'A';
    } else if (scores[i] >= 80 && scores[i] <= 89) {
        grade = 'B';
    } else if (scores[i] >= 70 && scores[i] <= 79) {
        grade = 'C';
    } else if (scores[i] >= 60 && scores[i] <= 69) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    console.log(`Score: ${scores[i]}, Grade: ${grade}`);
}

function findmax(arr){
    let max = 0
    for (let i=0; i<=arr.length; i++){
        if (max < arr[i]){max=arr[i]}
    }
    console.log(max)
}
let numH = [11, 23, 45, 34, 78, 99, 43, 302]
findmax(numH)

function findmin(arrr){
    let min = arrr[0]
    for (let i=0; i<arrr.length; i++){
        if (arrr[i] < min){min = arrr[i]}
    }
    console.log(min)
}

let numH1 = [11, 23, 45, 4, 34, 78, 99, 43, 302]
findmin(numH1)


function evenOddNum(maxNumber) {
    let evenNumbers = [];
    let oddNumbers = [];

    for (let i = 1; i <= maxNumber; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        } else {
            oddNumbers.push(i);
        }
    }

    console.log("Even Numbers:", evenNumbers);
    console.log("Odd Numbers:", oddNumbers);
}

evenOddNum(10);
evenOddNum(16);
evenOddNum(30);

function arrayNum(ave){
    let add = 0
    for (let i=0; i < ave.length; i++){
       add += ave[i]/ave.length
    }
    console.log(add)
}
let arrN = [23, 45, 22, 17, 67, 43, 8, 98]
let arrh = [23, 415, 34, 17, 67, 6, 8, 198]
let arrg = [123, 45, 22, 137, 607, 43, 18, 998]
arrayNum(arrN)
arrayNum(arrh)
arrayNum(arrg)

function arrayNum1(ave){
    let add = 0
    for (let i=0; i < ave.length; i++){
       add += ave[i]
    }
    return add/ave.length
}
let arrNu = [23, 45, 22, 117, 67, 43, 8, 98]
let arrhu = [23, 15, 34, 17, 167, 6, 8, 18]
let arrgu = [123, 45, 22, 7, 107, 43, 18, 4, 65, 89]
console.log(arrayNum1(arrNu))
console.log(arrayNum1(arrhu))
console.log(arrayNum1(arrgu))

function countVowels(string) {
    let count = 0;
    // string = string.toLowerCase() if I want it to count the U in capital letter

    for (let i = 0; i < string.length; i++) {
        let vowel = string[i];
        if (vowel == 'a' || vowel == 'e' || vowel == 'i' || vowel == 'o' || vowel == 'u') {
            count++;
        }
    }

    console.log(count);
}

countVowels("My name is Unique");

function checkVowel(letter) {
    if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
        return true;
    }
    return false;
}

console.log(checkVowel('u'));
console.log(checkVowel('n')); 
console.log(checkVowel('i'));
console.log(checkVowel('q')); 
console.log(checkVowel('u'));
console.log(checkVowel('e')); 



