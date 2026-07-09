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

// return keyword in functions returns value that we can store in variables;

function subtract(num1, num2)
{
    return num1-num2;
}

const result = subtract(10,5);

console.log("Subtraction result: ", result);

// Let, var, const scopes 

const c = 30;

function test()
{
    let a = 20;
    var b = 2000;
    // c = -30;// we cannot reassgin a const, hence error

    console.log(a);
    console.log(b);
    // console.log(c);// we cannot reassgin a const, hence error
}


test();

// console.log(a) // we cannot access LET outside its block
// console.log(b);//but we can access VAR outside its block;

// Using rest parameter, i.e. if the arguments in function call varies 
// for eg shopping cart, we can have 1 item and 10 items also;

function shoppingCartTotal(val1, val2)
{
    console.log(val1, val2);
    return val1 + val2;
}

console.log(shoppingCartTotal(10, 20)); // ony 2 arguments we can pass;

function shoppingCartTotalUsingRest(...values) // rest operator converts multiple arguments into an array;
{
    let sum=0;
    console.log(values);
    for(let i=0; i<values.length; i++)
    {
        sum+= values[i];
    }
    return sum;
}

console.log('Total cart value: ', shoppingCartTotalUsingRest(100, 500, 499, 1299));