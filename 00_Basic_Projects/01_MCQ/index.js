 //we use import because we are using module not commonJS 
import readline from 'node:readline/promises';
/*
    if we only use node:readline, then the function will not wait for user input
    instead it will print the further things written in console.log;
    hence node:readline/promises helps making function wait for input, without skipping;
*/
import {fetchQuestions} from './api.js';

 const rl = readline.createInterface(
    {
        input : process.stdin,
        output : process.stdout
    }
 );

 //In latest ES modules we can use await directly without async fucntion,
 //but for better practice we will still use async functions 

 async function main()
 {
    const questions = await fetchQuestions();
    
 }

 main();

 rl.close();

