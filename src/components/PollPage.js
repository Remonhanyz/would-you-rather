import { Component } from 'react'
import { connect } from 'react-redux'
import PollUnansweredPage from './PollUnansweredPage'
import PollAnswerPage from './PollAnswerPage'
import NotFound from './NotFound'

class PollPage extends Component {
    
    render() {
        const { users, questions, authedUser } = this.props
        const question = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)

        return (
            <div>
                {Object.keys(questions).includes(question)
                    ? <div>
                        {
                            users[authedUser].questions.includes(question)
                                ? <PollAnswerPage />
                                : <PollUnansweredPage update={()=>this.forceUpdate()} />
                        }
                    </div>
                    : <NotFound/>
                }
            </div>
        )
    }
}


function mapStateToProps({ authedUser, users, questions }) {
    return {
        authedUser,
        users,
        questions,
    }
}

export default connect(mapStateToProps)(PollPage)