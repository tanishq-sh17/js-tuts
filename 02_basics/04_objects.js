// const tinderUser = new Object()  // Singleton Object

const tinderUser = {}  // non Singleton Object
// console.log(tinderUser)

tinderUser.id = 123
tinderUser.name = "Tenny"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "tanishq@gmail.com",
    fullname : {
        userfullname : {
            firstName : "Tanishq",
            lastName : "Shrivas"
        }
    }
}

// console.log(regularUser.fullname) 
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.firstName)

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj3 = {5 : "a",6 : "b"}

// const obj4 = {obj1, obj2, obj3}   // wrong way

// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4)


const users = [
    {
        id : 1, 
        email : "t@gmail.com"
    },
    {
        id : 1, 
        email : "t@gmail.com"
    },
    {
        id : 1, 
        email : "t@gmail.com"
    }
]

// console.log(users[1].email)

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("isLoggedIn"))



// Destructuring 

const course = {
    coursename : "Js tuts",
    price : 999,
    courseInstructor : "chaiAurcode"
}

course.courseInstructor

// const {courseInstructor} = course
// console.log(courseInstructor)

const {courseInstructor : instructor} = course
console.log(instructor)
