function sayMyName(){
    console.log("Heisenberg")
}

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2)
// }

// addTwoNumbers(3, 4)

function addTwoNumbers(num1, num2){
    return num1 + num2
}

result = addTwoNumbers(3, 4)
// console.log(result)


function loginUserMessage(username){
    // if(username === undefined){
    //     console.log("Please enter username!")
    //     return
    // }
    if(!username){
        console.log("Please enter username!")
        return
    }
    return `${username} is logged in.`
}

console.log(loginUserMessage("Tanishq"))


// rest operator "..."
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(1, 2, 3, 4, 5))


const user = {
    username : "Tanishq",
    price : 199
}
function handleObject(anyUser){
    console.log(`User is ${anyUser.username} and price is ${anyUser.price}`)
}
// handleObject(user)
handleObject({
    username : "Tanishqq",
    price : 999
})


const myNewArray = [200, 400, 100, 600]
function returnSecondValue(){
    return myNewArray[1]
}
console.log(returnSecondValue(myNewArray))
