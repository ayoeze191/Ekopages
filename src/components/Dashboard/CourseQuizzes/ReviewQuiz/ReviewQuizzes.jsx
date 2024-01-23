import React from 'react'
import { Reform_to_suitable_form } from '../../../../Utils/reformQuestions'
import Quiz from './Quiz'


const ReviewQuizzes = ({all_question, selectedAnswers}) => {
  console.log(all_question, selectedAnswers.questions)
  return (
    <div className='flex flex-col gap-10'>
         {selectedAnswers.length == 0 ? "No Questions Yet":all_question.map((quest, index) => (
            <Quiz
              {...Reform_to_suitable_form(quest)}
              selectedAnswer = {selectedAnswers.questions.length > 0 && selectedAnswers.questions.find((answer) => answer.question_text === Reform_to_suitable_form(quest).question).user_answer}
              // selectedAnswer = {selectedAnswers.length > 0 && selectedAnswers.find(answer) => answer.}
              correctAnswer = {selectedAnswers.questions.length > 0 && selectedAnswers.questions.find((answer) => answer.question_text === Reform_to_suitable_form(quest).question).correct_answer}
              number={index + 1}
            />
          ))}
    </div>
  )
}

export default ReviewQuizzes