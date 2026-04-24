const accountId = 1233434
let accountEmail = "pranavsisodia.com"
var accountPassword = "12345"
accountcity = "Delhi" // --> In this there is no prefix 
let accountState ;

//if we change the accountId
//accountId = 1983 --> this is not allowed necause we can't update or redeclare the const. 

// update these variables
accountEmail = "Pranav@3"
accountPassword = "paassww"
accountcity = "jaipur"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountcity,accountState]);

/*
 - In js there are two ways to declare variables one is var and another is let.
 - var can be redeclare and updated also and its scope is global.
 - let can only be updated and scope is within the block.
 - use only let and const and don't use var due to it scope problem.
 - In js if any variable is undifined then it will save undefined in it.
*/