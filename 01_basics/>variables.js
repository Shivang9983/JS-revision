const accountId = 144553
let accountEmail = "wButcher11@gmail.com"
var accountPassword = "wOiii12"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "Butcher@gmail.com"
accountPassword = "rememberme"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
