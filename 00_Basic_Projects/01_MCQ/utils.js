import readline from "node:readline/promises";

const rl = readline.createInterface(
    {
        input : process.stdin,
        output : process.stdout
    }
);

export function shuffleArray(options)
{
    const shuffledOptions = options;
        for(let i=shuffledOptions.length-1; i>0; i--)
        {
            const j = Math.floor(Math.random() * (i+1))

            let temp = shuffledOptions[i];
            shuffledOptions[i] = shuffledOptions[j];
            shuffledOptions[j] = temp;
        }

        return shuffledOptions;
}

export async function askQuestion(question, options)
{
    console.log(question);
    console.log(options);

    const answerInput = await rl.question("Write the correct answer (or press enter to skip): ")

    return answerInput;
}

export function closeReadline()
{
    rl.close();
}