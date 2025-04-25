'use strict'

// const test = [5, 3, 5, 7, 8, 8, 10, 3, 4, 7]

// sum = 0

// for (x in test) {
//     sum += test[x]
// }

// const person = {fname:"John", lname:"Doe", age:25};

// let text = "";
// for (let x in person) {
//   text += person[x];
// }

// const adasheDb = [
//     {
//         name: "John Doe",
//         amount: 2500
//     },
//     {
//         name: "Sarah Palin",
//         amount: 3000
//     }
// ]

// sum = 0

// for (x in adasheDb) {
//     sum += adasheDb[x].amount
// }

// let Obj1 = { name: "Test" }
// let Obj2 = { track: "Web2" }
// let Obj3 = { mode: "Game" }

// let Obj0 = Object.assign(Obj1, Obj2, Obj3)

// let Obj4 = Object.create(Obj1)
// let keys = Object.keys(Obj1)

let Obj1 = {
    users: ["Test", "User", "Another User"],
    fruits: ["Mango", "Orange", "Sour Sop"],
    animals: ["Zebra", "Lion", "Elephant"],
    cars: ["BMW", "Toyota", "Lambo"]
}

let keys = Object.keys(Obj1)
let values = Object.values(Obj1)

// console.log(values)

if (keys.includes("cars")) {
    if(Obj1.cars.includes("BMW")) {
        console.log("BMW exist")
    } else {
        console.log("BMW does not exist")
    }
}

