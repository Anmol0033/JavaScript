// 


// let us convert a string 33 into number

// let numberValue = Number(score);

// console.log(typeof(numberValue));

/*
Here if in a string there is a number followed by alphabets, and if we try to 
Convert it to a number it will convert and make its datatype as Number
But if we try to print the value then it will be a NaN
*/
// score = "33abc";
// numberValue = Number(score);
// console.log(typeof numberValue);
// console.log(numberValue);

/*
similarly null in a string is converted to value 0 after datatype conversion 
*/

// score = null;
// numberValue = Number(score);
// console.table([typeof(numberValue), numberValue]);

/*
    similarly for undefined value in string the number value will be Nan
    and for boolean true -> 1
    boolean false -> 0 
*/

// *************OPERATIONS****************

let value = 3;
let negValue = -value;

// console.log(value);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%2); 

let str1 = "Hello ";
let str2 = "Anmol"

// console.log(str1 + str2);

let str3 = str1+str2;
// console.log(str3);

/* Problem */
console.log(1 + "2"); // concatinating a number with a string; 
console.log("1" + 2); // concatinating a number with a string; 
console.log("1" + 2 + 2); // concatinating a number with a string, js not performing addition ; 
console.log(1 + 2 + "2"); // concatinating a number with a string, js performing addition ; 
