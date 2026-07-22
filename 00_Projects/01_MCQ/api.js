import { only } from "node:test";
export async function fetchQuestions()
{
    try{
        const getResponse = await fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple");
        const getData = await getResponse.json();
        const questionObjects = getData.results;
        return questionObjects;
    }
    catch(error)
    {
        console.log(error);
    }
};
