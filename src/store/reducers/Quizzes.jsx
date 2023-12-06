import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    quizzes_withAnswers: [],
    quizzes: []
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
        }
    }
})

export const {setQuizzes, setQuizzes_with_answers} = QuizzesSlice.actions


export default QuizzesSlice.reducer;