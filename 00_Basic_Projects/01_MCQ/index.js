 //we use import because we are using module not commonJS 
/*
    if we only use node:readline, then the function will not wait for user input
    instead it will print the further things written in console.log;
    hence node:readline/promises helps making function wait for input, without skipping;
*/
import {fetchQuestions} from './api.js';
import {startQuiz} from './quiz.js'
import {closeReadline} from './utils.js'

// const questions = [
//     {
//         question: "What is the capital of India?",
//         correct_answer: "New Delhi",
//         incorrect_answers: [
//             "Mumbai",
//             "Chennai",
//             "Kolkata"
//         ]
//     },
//     {
//         question: "2 + 2 = ?",
//         correct_answer: "4",
//         incorrect_answers: [
//             "2",
//             "3",
//             "5"
//         ]
//     }
// ];

 //In latest ES modules we can use await directly without async fucntion,
 //but for better practice we will still use async functions 

 async function main()
 {
    const questionData = await fetchQuestions();
    const quiz = await startQuiz(questionData);
    console.log(quiz);
    closeReadline();
 }

 main();

