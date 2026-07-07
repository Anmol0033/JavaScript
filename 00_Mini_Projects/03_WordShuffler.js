const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

const wordPool = ['javascript', 'ruby', 'java', 'c#'];
let secretWord = "";
let scrambledWord = "";

console.log("Welcome to the Word Scramble Game");



function scrambleWord(word)
{
    let letters = word.split(''); // converting a string into array of different characetrs 

    for(let i=1; i<letters.length; i++)
    {
        let j = Math.floor(Math.random() * (i+1));

        let temp = letters[i];
        letters[i] = letters[j];
        letters[j] = temp;
    }
    return letters.join('');
}

function initGame()
{
    secretWord = wordPool[Math.floor(Math.random() * (wordPool.length))];

    scrambledWord =  scrambleWord(secretWord);

    if(scrambledWord == secretWord)
    {
        scrambleWord(secretWord);
    }
    console.log(`Unscramble the word ${scrambledWord}`);

    askUser();
}

function askUser()
{
    rl.question("Guess word (or type quit to exit): ", (guess) =>
    {
        if(guess.trim().toLowerCase() == "quit")
        {
            console.log("Game Quit");
            rl.close();
            return;
        }

        if(guess == secretWord)
        {
            console.log("YAY! You guess it right");
            initGame();
        }
        else
        {
            console.log("OOPS! Try again");
            askUser();
        }
    })
}

initGame();