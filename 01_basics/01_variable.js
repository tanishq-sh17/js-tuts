const accountId = 144556
let accountEmail = "tanishq@gmail.com"
var accountPassword = "pass0232"
accountCity = "Bengaluru"
let accountState;

// accountId = 2
// console.log(accountId)

accountEmail = "ta@gmail.com"
accountPassword = "pa34352"
accountCity = "Delhi"

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])