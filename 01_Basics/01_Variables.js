const accountId = 12345;
let accountEmail = "Anmolkamboj0033@gmail.com";
var accountPassword = "anmol@123";
accountCity = "Yamunanagar";// can also define variable but not a goof practice;
let accountState; // value is not defined;

// accountId = 0123; *Not allowed to reassign the defined constant values*;

/*
    Var is not used now a days because it have issues with scoping,
    i.e. var do not have any scope like block or functional, a change in any variable 
    in loops or elsewhere let to change of that constant at global scope and changing
    the values everywhere;

    hence afterwards 'let' keyword was introduced to counter the issues of scope in var\
    let follows al the rules of scoping, i.e. global, local scopes.
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
