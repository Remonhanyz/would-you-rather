import { Component } from 'react'
import PollCard from './PollCard'
import { connect } from 'react-redux'


class UnansweredQuestions extends Component {
    filtering() {
        const { questions, users, authedUser } = this.props
        const answersArr = Object.keys(users[authedUser].answers)

        return Object.keys(questions).filter((question) => {
            for (var i = 0; i < answersArr.length; i++) {
                if (answersArr[i] === question) {
                    return false
                }
            }
            return true

        })
    }
    render() {

        return (
            this.filtering().map((question) => <PollCard question={question} key={question} />)

        )
    }
}

function mapStateToProps({ authedUser, users, questions }) {
    return {
        authedUser,
        users,
        questions
    }
}
export default connect(mapStateToProps)(UnansweredQuestions)