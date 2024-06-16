const accountId = 143323
let accountEmail = "tieanuj@,com"
var accountPasssword = "123456"
accountCity = "JAipur"
let accountState;

//accountId = 2// not allowed

accountEmail = "hchad@gm.com"
accountPasssword = "123123"
accountCity = "lko"

console.log(accountId)

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail,accountPasssword,accountCity,accountState])