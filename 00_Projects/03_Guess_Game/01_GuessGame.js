const { type } = require('os');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const secret =  Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let attempts = 1;

console.log("Hello Welcome to the Guess Game");
console.log("You can choose any number from 1-10");

function startGame()
{
    console.log(`Attempt: ${attempts}`);
    rl.question("Enter your guess (or type exit to quit): ", (guessStr) =>
    {
        if(attempts == 3)
        {
            console.log("Your chances are over, Please start over");
            rl.close();
            return;
        }
        if(guessStr.trim().toLowerCase() == "exit")
        {
            console.log("Game exited, Thankyou for Playing");
            rl.close();
            return;
        }

        let num = Number(guessStr);

        if(num > 10 || num < 0)
        {
            console.log("Please enter a valid number");
            startGame();
            return;
        }
        attempts++; 

        if(num > secret)
        {
            console.log("Try a small number");
            startGame();
            return;
        }
        else if(num < secret)
        {
            console.log("Try a big number");
            startGame();
            return;
        }
        else 
        {
            console.log("YAY! You Guessed Right");
            rl.close();
            return;
        }
    })
}

startGame();
