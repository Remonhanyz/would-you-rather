import { saveQuestion } from '../server/apis'

export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

export function recieveQuestions(questions) {
    return {
        type: RECIEVE_QUESTIONS,
        questions
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(action) {
    return (dispatch, getstate) => { //(dispatch, getstate) are returned to me by the thunk
        return saveQuestion(action)
            .then((question) => {
                dispatch(addQuestion(question))
            })
            .catch((e) => {
                console.warn('Error in Adding a question: e')
                alert('Error in Adding a question. Please retry Adding the question again.')
            })
    }
}
