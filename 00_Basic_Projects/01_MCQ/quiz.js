import {shuffleArray, askQuestion} from './utils.js'

export async function startQuiz(questions)
{

    let score = 0;

    for(let i=0; i<questions.length; i++)
    {
        const question = questions[i].question;
        const ica = questions[i].incorrect_answers;
        const correctAnswer = questions[i].correct_answer;

        const options = [questions[i].correct_answer, ...ica];
        let shuffledOptions = [...options];

        shuffledOptions = await (shuffleArray(shuffledOptions));
        const answer = await askQuestion(question, shuffledOptions);


        if(answer && correctAnswer.trim().toLowerCase() === answer.trim().toLowerCase())
        {
            score++;
        }
        else
        {
            continue;
        }
    }
    return `Your score: ${score}/${questions.length}`;
}