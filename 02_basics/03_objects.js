// singleton
// Object.create


// Object Literals

const mySym  = Symbol("key1")

const JsUser = {
    name : "Tanishq",
    "full name" : "Tanishq Shrivas",
    [mySym] : "myKey1",
    age : "21",
    location : "Bengaluru",
    email : "tanishq@gmail.com",
    isLoggedin : false,
    lastLoginDay : ["Moday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])

// console.log(JsUser["full name"]);

// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);


// JsUser.email = "tanishq@chatgpt.com"
// console.log(JsUser);

// Object.freeze(JsUser)

// JsUser.email = "tanishq@google.com"

JsUser.greeting = function(){
    console.log("Hello Js User!")
}

console.log(JsUser.greeting())

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}

console.log(JsUser.greetingTwo())







