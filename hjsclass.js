// let obj1= {names: "Test", class: "web2", age: 30}
// let keys = Object.keys(obj1)
// if (keys.includes("names")){
//     console.log(obj1.names)
// }
// 1. Given two user profile objects (e.g., personalInfo and contactInfo), merge them into a single userProfile object.
// 2. Given a product object, log all its keys and values. Bonus: Format them as "key: value" pairs in an array or print them line by line.
// 3. Create a settings object (e.g., theme: "dark", notifications: true). Freeze it and try changing a value. Use Object.isFrozen to confirm if it's immutable.

// 1. Given two user profile objects
let personalInfo = {
    name: "Titilope",
    age: 34,
    gender: "female"
}
let contactInfo = {
    phoneNumber: 8100294000,
    email: "titilope@gmail.com",
    socialMedia: "titil0pe101"
}
let userInfo = Object.assign(personalInfo, contactInfo)
console.log(userInfo)

// 2. Given a product object
let products = {
    cosrx: ["Moisturizer", "cleanser", "Bar soap"],
    estelin: ["Sunscreen", "serum"],
    simple: ["Toner", "wash"]
}
let keyss = Object.keys(products)
let valuess = Object.values(products)
console.log(`The keys are ${keyss} while the values are ${valuess}`)
console.log(keyss)
console.log(valuess)

// 3. Create a settings object 

let settings = {
    theme: "black",
    notification: "silent"
}
Object.freeze(settings)
settings.theme = "blue"
console.log(settings)

console.log(Object.isFrozen(settings))