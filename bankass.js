// Palindrome in DSA 
// function isPalindrome(str) {
//     for (let i = 0; i < str.length / 2; i++) {
//         if (str[i] !== str[str.length - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }
let string = madam
function palindrome(str){
    
    for (let i = 0; i < str.length; i++){
        if (str[i] === str[str.length - 1 - i]){
            console.log(`The word ${str} is palindrome`)
        }
    }else {
        console.log(`The word ${str} is not palindrome`)}
}
// console.log(isPalindrome("madam"));   
// console.log(isPalindrome("school"));  


// // find max  Question 2
// let array = [1, 2, 1000, 3, -1]
// let max = 0
// for (let i= 0; i < array.length-1; i++){
//     if (max<array[i]){max=array[i]}
// }
// console.log(max)


// // find factorial  Question 3
// let factorial = 1
// for (let i=5; i> 0; i--){
//     factorial *= i
// }
// console.log(factorial)

// // sum of numbers  Question 4
// let numbers = [2, 3, 4, 34, 56]
// let summation = 0
// for (let i = 0; i < numbers.length; i++){
//     summation += numbers[i]
// }
// console.log(summation)

// // vowel in a string  Question 5
// let vowel = ["a", "e", "i", "o", "u"]
// let count = 0
// let word = "Unique"
//     let words = word.toLowerCase()
//     for (i=0; i < words.length; i++){
//         if (vowel.includes (words[i]) ){
//             count++
//         }
//     }
// console.log(`The number of vowels in the word is ${count}`)

// // prime numbers Question 6
// let a = 9
// let isPrime = true

// for(let i= 2; i * i <= a; i++){
//     if (a > 1 && a % i === 0){
//         isPrime = false
//         break
//     }
// }
// if (isPrime){
//     (console.log(`${a} is a prime number`))
// }else{
//     (console.log(`${a} is not a prime number`))
// }

// // for (let i = 2; i*i <= isPrime; i++){
// //     if (isPrime > 1 && isPrime % i === 0){
// //         return false
// //     }else (console.log(`${isPrime} is a prime number`))
// // }
        

// // isPrime(17)
// // isPrime(6)
// // isPrime(10)
// // isPrime(111)

// // multtiples of a number  Question 7
// let arrayOfNumbers = [1, 2, 3, 4, 5, 6]
// for (let i=0; i < arrayOfNumbers.length; i++){
//     if (arrayOfNumbers[i]%3 == 0){
//         console.log(`The multiples of 3 in the array is ${arrayOfNumbers[i]}`)
//     }
// }

// // finding index of anumber  Question 8
// let anArray = [3,5,6,45,78,9]
// let target = 9
// for (let i = 0; i < anArray.length; i++){
//     if (anArray[i] == target){
//         console.log(i)
//     }
// }
// // function indexOfNumber(number){
// //     index = anArray.indexOf(number)
// // }
// // indexOfNumber(78)
// // console.log(`The index of 78 is ${index}`)

// // merging and sorting Question 9
// let firstArray = [0, 4, 6]
// let secondArray = [1, 2, 3]
// let theArray = []

// for (let i = 0; i < firstArray.length; i++){
//     theArray.push(firstArray[i])
//     }
//     for (let j = 0; j < secondArray.length; j++){
//         theArray.push(secondArray[j])
//         }
// console.log(`before sorting: ${theArray}`)
// for (let i = 0; i < theArray.length; i++){
//     for (let j = 0; j < theArray.length-1; j++){
//         if (theArray[j]>theArray[j+1]){
//             let temporary = theArray[j]
//             theArray[j] = theArray[j+1]
//             theArray[j+1] = temporary
//         }
//     }
// }
// console.log(`after sorting in ASC Order: ${theArray}`)

// // an object Question 10

// // let paymentRecord =[
// //     {
// //         name: "Ifaje Taiwo",
// //         amount: 500},
// //     {
// //         name: "Sola Sobowale",
// //         amount: 300
// //     },
// //     {
// //         name: "Ishaya Joseph",
// //         amount: 400
// //     }
// //     ]
// //     console.log (paymentRecord)
// //     console.log(paymentRecord[0].name, paymentRecord[1].name, paymentRecord[2].name)

// let memberDb = []
// function addMember(name, amount){
//     let member = {
//         name: name,
//         amount: amount
//     }
//     memberDb.push(member)
// }
// addMember("Ishaya Joseph", 400)
// addMember("Sola Sobowale", 300)
// addMember("Ifaje Taiwo", 500)
// addMember("Taofeek Eleyele", 200)
// console.log(memberDb)
// function getMemberName(nAme){
//     for (let i = 0; i < memberDb.length; i++){
//     if (memberDb[i].name === nAme){
//         return memberDb[i]
//     }
// } return null
// }
// let foundName = getMemberName("Ifaje Taiwo")
// console.log(foundName)

// function withdrawNameAmount(naMe, aMount){
//     for (let i = 0; i < memberDb.length; i++){
//         if (memberDb[i].name === naMe){
//             memberDb[i].amount -= aMount
//             return memberDb[i]
//         }
//     }
// }
// let withdrewMember = [withdrawNameAmount("Ishaya Joseph", 200), withdrawNameAmount("Sola Sobowale", 150), withdrawNameAmount("Ifaje Taiwo", 300), withdrawNameAmount("Taofeek Eleyele", 100)]
// console.log(withdrewMember)

// function removeMember(memBer){
//     for (i = 0; i < memberDb.length; i++){
//         if (memberDb[i].name === memBer){
//             memberDb.splice(i, 1)
//         }
//     }
// }
// removeMember("Sola Sobowale")
// console.log(memberDb)

// const forbiddenWords = ["spam", "scam", "ads"];
// function isCommentClean(comment){
//     for (let word of forbiddenWords){
//         if (comment.includes(word)){
//             return false
//         }
//     } return true
// }
// console.log(isCommentClean("spam"))
// console.log(isCommentClean("spy"))
// console.log(isCommentClean("This is spam"))
// console.log(isCommentClean("This is scam"))
// console.log(isCommentClean("This is spy"))
// console.log(isCommentClean("This is ads"))

// const bannedWords = ["fake", "test", "demo"];
// function isValidTitle(title){
//     for (let movie of bannedWords){
//         if (title.includes(movie)){
//             return false
//         }
//     }return true
// }
// console.log(isValidTitle("Temperature"))
// console.log(isValidTitle("The cashier is fake"))
// console.log(isValidTitle("test"))

// const weakWords = ["password", "1234", "admin"];
// function isStrongPassword(pwd){
//     for ( let password of weakWords){
//         if (pwd.includes(password)){
//             return false
//         }
//     }return true
// }
// console.log(isStrongPassword("1234"))
// console.log(isStrongPassword("Joy"))
// console.log(isStrongPassword("my password"))

// // const names = ["John", "Elizabeth", "Sarah", "Tom", "Alexander"];
// // function filteredNames(name){
// //     const name = names.filter(namE => namE > 5)
// // }
// // filteredNames(names)
// //  console.log(names)   

//  const names = ["John", "Elizabeth", "Sarah", "Tom", "Alexander"];

// function filteredNames(names) {
//     return names.filter(namE => namE.length > 5);
// }

// console.log(filteredNames(names)); 

// function filterEvenNumbers(numbers){
//     return numbers.filter(even => even % 2 === 0)
// }
// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]))

// // numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// // function filterEvenNumbers(numbers){
// //     return numbers.filter(even => even % 2 === 0)
// // }
// // filterEvenNumbers(numberArray)
// // console.log(numberArray)

// const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function filterEvenNumbers(numbers) {
//     return numbers.filter(even => even % 2 === 0);
// }

// const filteredArray = filterEvenNumbers(numberArray); 
// console.log(filteredArray);  
