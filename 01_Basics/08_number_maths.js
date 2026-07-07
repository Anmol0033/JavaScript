const num = 100; //automatic int defination;

const num1 = new Number(100000);//gives us various funcitons;

console.log(typeof(num));
console.log(typeof(num1));

console.log(num1.toLocaleString('en-IN'));
console.log(typeof(num1.toString())); 
// see various functions in inspect element

const float = new Number(123.926);

console.log(float.toPrecision(5)); // rounds off

// ************* MATHS *************



console.log(Math);

console.log(Math.abs(-4));
console.log(Math.floor(4.1));
console.log(Math.ceil(4.1));
console.log(Math.pow(2,4));

// to get random values;
let randomVal = Math.floor((Math.random()*10) + 1);

console.log(randomVal);

let min = 1;
let max = 6;

console.log(Math.floor(Math.random() * (max-min + 1) + min))
