// ROCK PAPER SCISSORS

/*

    1. Define choices array
    2. Take Input
    3. Validate input and make exit point
    4. Make computer choice
    5. Match the results 

*/

const readline = require("readline");
const rl = readline.createInterface(
    {
        input : process.stdin,
        output : process.stdout
    }
);

const choices = ['rock', 'paper', 'scissor'];

console.log("*********** Welcome to RPC Game ***********");

function game()
{
    rl.question("Enter your choice (or write exit to quit): ", (inp)=>
    {
        const userChoice = inp.trim().toLowerCase();
        if(userChoice == 'exit')
        {
            console.log("Thanks for playing");
            rl.close();
            return;
        }

        if(!choices.includes(userChoice))
        {
            console.log("Enter a valid choice");
            game();
        }

        const computerChoice = choices[Math.floor(Math.random() * 3)];
        console.log(`Computer Choice: ${computerChoice}`);
        if(computerChoice == userChoice)
        {
            console.log("Its a Tie");
            game();
        }
        else if(
            userChoice=='rock' && computerChoice=='scissor' ||
            userChoice=='scissor' && computerChoice=='paper' ||
            userChoice=='paper' && computerChoice=='rock'
        )
        {
            console.log("CONGRATS! You Won");
            game();
        }
        else
        {
            console.log("You Loose");
            game();
        }
    })
}

game();