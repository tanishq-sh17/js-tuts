const name = "tanishq"
const repoCount = 50

// console.log(name + repoCount + "value")

console.log(`Hello my name is ${name} and i have ${repoCount} repositories on github.`)

const gameName = new String('tanishq-shrivas-blr')
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('t'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-7, 4)
console.log(anotherString)

const newStringOne = "  tanishq   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://www.tanishq.com/tanishqsh%20rivas"
console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'))
