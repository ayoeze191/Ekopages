import { Reform_to_suitable_form } from "./reformQuestions"

export function Return_Yet_To_Be_answered_Questions (answers, quizzes) {
    // console.log( quizzes.quizzes)
    const questions_to_be_solved = []
    for(let i=0; i<=quizzes.length - 1; i++){
        if(answers.find(ans => ans.question == quizzes[i].id)){
            ;
        }
        else{
            questions_to_be_solved.push(Reform_to_suitable_form(quizzes[i], i).number)
        }
    }
    console.log(questions_to_be_solved)
    return questions_to_be_solved
}