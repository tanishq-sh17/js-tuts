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