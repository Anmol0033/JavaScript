//defining a function in js

function greet(){
    console.log("Hello World");
}
greet // function refrence
greet() // function call

// defining a function using variable

const addOne = function (val)
{
    return val+1;
}

console.log(addOne(5));

// but the simple function defination have hoisting, for e.g.

sayHello('Anmol');

function sayHello(name)
{
    console.log(`Hello ${name}, I am hoisted function`);
}

// but if we try the same for the variable defined function then, 

// multiplyByTwo(10); this gives error

const multiplyByTwo = function (num)
{
    console.log(num * 2);
}

multiplyByTwo(10);

