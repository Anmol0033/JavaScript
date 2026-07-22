import readline from "node:readline/promises";

const rl = readline.createInterface(
    {
        input : process.stdin,
        output : process.stdout
    }
);

export async function askQuestion()
{
    const len = Number(await rl.question("Enter length: "));
    if(len<8)
    {
        console.log("Minimum length is 8 characters, Please re-enter the length");
        askQuestion();
        return;
    }
    // const incUpperCase = await rl.question("Want uppercase y/n: ");
    // const inclowerCase = await rl.question("Want lowercase y/n: ");
    // const incSpecialCH = await rl.question("Want special characters y/n: ");
    rl.close();

    const obj = {
        totalLength : len,
        // upperCase : incUpperCase,
        // lowerCase : inclowerCase
    };
    return obj;
}
export function generatePassword(obj)
{
    const {totalLength: length}  = obj;
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const specialCh = '!@#$%^&*';

    const allCh = lowerCase+upperCase+nums+specialCh;
    let password = '';

    password += lowerCase[Math.floor(Math.random() * (lowerCase.length))];
    password += upperCase[Math.floor(Math.random() * (upperCase.length))];
    password += nums[Math.floor(Math.random() * (nums.length))];
    password += specialCh[Math.floor(Math.random() * (specialCh.length))];

    for(let i=0; i<length-4; i++)
    {
        password += allCh[Math.floor(Math.random() * (allCh.length))];
    }
    // console.log(password);
    return shufflePassword(password);
}
function shufflePassword(password)
{
    let arr = password.split('');
    for(let i=arr.length-1; i>0; i--)
    {
        const randomIdx = Math.floor(Math.random() * (i+1));

        let temp = arr[i];
        arr[i] = arr[randomIdx];
        arr[randomIdx] = temp;
    }
    password = arr.join('');
    // console.log(password);
    return password;
}