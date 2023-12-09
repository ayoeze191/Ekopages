import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    quizzes_withAnswers: [],
    quizzes: [],
    finished_Course_quiz: false,
}  
const QuizzesSlice = createSlice({
    name: "Quizzes",
    initialState,
    reducers: {
        setQuizzes_with_answers: (state, action) => {
            state.quizzes_withAnswers = action.payload
        },
        setQuizzes: (state, action) => {
            state.quizzes = action.payload
        },
        swicthFinishedCourseQuiz: (state, action) => {
            state.finished_Course_quiz = !state.finished_Course_quiz
        }
    }
})

export const {setQuizzes, setQuizzes_with_answers, swicthFinishedCourseQuiz} = QuizzesSlice.actions


export default QuizzesSlice.reducer;