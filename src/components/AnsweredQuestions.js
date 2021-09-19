import { Component } from 'react'
import PollCard from './PollCard'
import { connect } from 'react-redux'

class AnsweredQuestions extends Component {
    sortQuestions(questionsArray) {
        const questionsScores = {}
        let { questions } = this.props
        
        var sortable = {};
        

        for (let question in questions) {
            if (questionsArray.includes(question))
                questionsScores[question] = questions[question].timestamp
        }
        
        for (let question in questionsScores) {
            sortable[question] = questionsScores[question];
        }
        sortable = Object.keys(sortable).sort((a, b) => sortable[b] - sortable[a])
        return sortable
    }
    render() {

        return (
            
            this.sortQuestions(Object.keys(this.props.users[this.props.authedUser].answers)).map((question)=> <PollCard question={question}  key={question} />)
        )
    }
}
function mapStateToProps({authedUser, users, questions}) {
    return {
        authedUser,
        users,
        questions
    }
}
export default connect(mapStateToProps)(AnsweredQuestions)