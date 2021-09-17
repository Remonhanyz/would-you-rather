import { Component } from 'react'
import PollCard from './PollCard'
import { connect } from 'react-redux'

class AnsweredQuestions extends Component {
    
    render() {
        return (
            Object.keys(this.props.users[this.props.authedUser].answers).map((question)=> <PollCard question={question}  key={question}/>)
        )
    }
}
function mapStateToProps({authedUser, users}) {
    return {
        authedUser,
        users,
    }
}
export default connect(mapStateToProps)(AnsweredQuestions)