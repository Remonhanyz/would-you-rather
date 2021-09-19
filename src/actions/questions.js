import { saveQuestion } from '../server/apis'
export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_ANSWER = 'ADD_ANSWER'

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


export function handleAddQuestion(question) {
    return (dispatch) => { //(dispatch, getstate) are returned to me by the thunk
        return saveQuestion(question)
            .then((question) => {
                dispatch(addQuestion(question))
            })
            .catch((e) => {
                console.warn('Error in Adding a question: e')
                alert('Error in Adding a question. Please retry Adding the question again.')
            })
    }
}

