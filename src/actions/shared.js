import { setAuthedUser } from './authedUser'
import { recieveQuestions } from './questions'
import { recieveUsers } from './users'
import { showLoading, hideLoading } from 'react-redux-loading'
import { getInitialData, saveQuestionAnswer } from '../server/apis'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ questions, users }) => {
                dispatch(recieveQuestions(questions))
                dispatch(recieveUsers(users))
                dispatch(setAuthedUser(AUTHED_ID))
                dispatch(hideLoading())
            })

    }
}

export function handleAddAnswer(action) {
    return (dispatch) => {
        return saveQuestionAnswer(action)
            .then(() => {
                return getInitialData()
                    .then(({ questions, users }) => {
                        dispatch(recieveQuestions(questions))
                        dispatch(recieveUsers(users))
                        dispatch(setAuthedUser(AUTHED_ID))
                        dispatch(hideLoading())
                        

                    })
            })
            .catch((e) => {
                console.warn('Error in Answering the question: e')
                alert('Error in Answering the question. Please retry Answering the question again.')
            })
    }
}