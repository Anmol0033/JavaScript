// import { rejects } from 'node:assert';
// import { resolve } from 'node:dns';
// import readline from 'node:readline/promises';
// import { start } from 'node:repl';

// const rl = readline.createInterface(
//     {
//         input: process.stdin,
//         output: process.stdout
//     }
// );

// const success = false;

// const loadQuestions = new Promise((resolve, reject) => {
//     console.log("Wait.. Questions loading");

//     setTimeout(() => {
//         if (success) {
//             resolve("Data fetched");
//         }
//         else {
//             reject("Error in loading questoins");
//         }
//     }, 3000)
// })

// // console.log(loadQuestions);

// // loadQuestions
// // .then((message)=>
// // {
// //     console.log(message);
// // })
// // .catch((error)=>
// // {
// //     console.log(error);
// // })
// // .finally(()=>
// // {
// //     console.log(loadQuestions);
// // });

// async function startQuiz()
// {
//     try{
//         const data = await loadQuestions;
//         console.log(data);
//     }
//     catch(error)
//     {
//         console.log(error);
//     }
// }

// startQuiz();

// rl.close();

const resObject = await fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple");

const json = await resObject.text();

const data = JSON.parse(json);

// console.log(resObject.body);
console.log(data);