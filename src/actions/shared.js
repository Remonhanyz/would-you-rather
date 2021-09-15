import { setAuthedUser } from './authedUser'
import { recieveQuestions } from './questions'
import { recieveUsers } from './users'
import { showLoading, hideLoading } from 'react-redux-loading'
import { getInitialData } from '../server/apis'

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