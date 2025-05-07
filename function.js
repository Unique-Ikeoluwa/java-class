// // let footballer = {
// //     firstName: "Goved",
// //     lastName: "Jayden",
// //     isMarried: true,
// //     play: function() {console.log(this.firstName + " now playing");}
// // }
// // footballer.play()

// // let footballer1 = {
// //     firstName: "French",
// //     lastName: "Eden",
// //     isMarried: true,
// //     play: function() {console.log(this.firstName, this.lastName + " not playing");}
// // }
// // footballer1.play()

// // let footballer2 = {
// //     firstName: "Phillip",
// //     lastName: "Tales",
// //     isMarried: false,
// //     play: function(speed, time) {console.log(this.firstName, this.lastName, this.isMarried + speed * time);}
// // }
// // footballer2.play(20, 4)
// // constructor function and use of return
// // let Foot = function(footballers, firstNames){
// //     this.footballers = footballers
// //     this.firstNames = firstNames
// //     this.lastNames = function(height, weight){
// //         return height * weight
// //     }
// //     this.nickn = function(){
// //         return "The player is from " + this.footballers
// //     }
// // }
// // let foot1 = new Foot("Man u", "Obi" )
// // let foot2 = new Foot("Chelsea", "Kante" )
// // let foot3 = new Foot("Barca", "Messi" )
// // let foot4 = new Foot("Arsenal", "Unk" )

// // console.log(foot1.lastNames(4, 6))
// // console.log(foot2.nickn())
// // console.log(foot3.nickn(), foot3.lastNames(3, 7))
// // console.log(foot4.footballers, foot4.firstNames, foot4.nickn(), foot4.lastNames(13, 2))

// let todayDate = new Date()
// console.log(todayDate)

// let birthdate = new Date(2001, 3, 7, 16, 22, 46)
// let popDate = new Date(2025, 6, 26, 8, 0, 0)
// let birthday = new Date(2001, 3, 7, 16, 22, 46)
// console.log(birthdate)
// console.log(popDate)

// console.log(birthdate.getDate())
// console.log(birthdate.getMonth())
// console.log(birthdate.getDay())
// console.log(birthdate.getHours())
// console.log(birthdate.getMinutes())
// console.log(birthdate.getMilliseconds())
// console.log(birthdate.getTime())

// if(birthdate == birthday){
//     console.log("They are equal")
// }
// else{console.log("They are not equal")}

// if(birthdate.getTime == birthday.getTime){
//     console.log("They are equal")
// }
// else{console.log("They are not equal")}
// for switch
let position = 1
switch (position){
    case 1:
        console.log("you have")
        break
    default:
        console.log("you don't have")
        break
}
// loop
for (let i =0; i <= 100; i+= 10) {
 console.log(i)
}
// while
let is = 1
while (is <= 100){
    console.log(is)
    is += 15
}
let array = [2, 6, 8, 9, 12, 98, 11]
console.log(array)
for (let i = 0; i<=3; i++){
    console.log(array[i])
}
let mp = 5
let vic = mp*--mp*--mp*--mp*--mp
console.log(vic)
