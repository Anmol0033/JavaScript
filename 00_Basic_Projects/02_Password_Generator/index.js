import { askQuestion, generatePassword } from "./utils.js";

async function main()
{
    const userInput = await askQuestion();
    // console.log(userInput);
    const generatedPassword = generatePassword(userInput);

    console.log(generatedPassword);
}
main();