let score = 33;
score = "33";
console.log(typeof(score));

// let us convert a string 33 into number

let numberValue = Number(score);

console.log(typeof(numberValue));

/*
Here if in a string there is a number followed by alphabets, and if we try to 
Convert it to a number it will convert and make its datatype as Number
But if we try to print the value then it will be a NaN
*/
score = "33abc";
numberValue = Number(score);
console.log(typeof numberValue);
console.log(numberValue);

/*
similarly null in a string is converted to value 0 after datatype conversion 
*/

score = null;
numberValue = Number(score);
console.table([typeof(numberValue), numberValue]);

/*
    similarly for undefined value in string the number value will be Nan
    and for boolean true -> 1
    boolean false -> 0 
*/