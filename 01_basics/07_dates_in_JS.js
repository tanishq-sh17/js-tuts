// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString())
// console.log(typeof myDate); 

// let myCreatedDate = new Date(2025, 9, 17)
// console.log(myCreatedDate.toDateString())
// let myCreatedDate = new Date(2025, 9, 17, 4, 44)
// let myCreatedDate = new Date("2025-10-17")
let myCreatedDate = new Date("1-1-2025")
// console.log(myCreatedDate.toLocaleString())


let myTimeStamp = Date.now();
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDate())

// `${newDate.getDate()} and the time is...`

newDate.toLocaleString('default', {
    weekday : "long",
})
