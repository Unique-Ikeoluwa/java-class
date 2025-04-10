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

function addnew(name, age, gender, course){
    let student = {
        name: name,
        age: age,
        gender: gender,
        course: course
    }
    studentsDb.push(student)
}
addnew("Davis", 23, "m", "Arts")
console.log(studentsDb)

studentsDb.forEach((student, index) => {
    student.studid = index + 1;
});
console.log(studentsDb)

function updateStuDb(studentid){
    for(student in studentsDb){
        if (studentsDb[student].studid == studentid){
            studentsDb[student].course = "English"
        }
    }
}
updateStuDb(3)
console.log(studentsDb)

studentsDb.splice(2, 1)
console.log(studentsDb)

