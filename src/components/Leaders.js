import { Component } from 'react'
import { connect } from 'react-redux'
import LeaderCard from './LeaderCard'

class Leaders extends Component {
    sortUsers() {
        const usersScores = {}
        const { users } = this.props
        var sortable = {};
        for (let user in users) {
            usersScores[user] = Object.keys(users[user].answers).length + users[user].questions.length
        }

        for (var user in usersScores) {
            sortable[user] = usersScores[user];
        }
        sortable = Object.keys(sortable).sort((a, b) => sortable[b] - sortable[a])
        return sortable
    }

    render() {
        let order = 0;
        return (
            <div className='container mt-5 col-md-8 col-sm-10'>
                {this.sortUsers().map((user) => {
                    return (
                        <LeaderCard user={user} key={user} order={++order} />
                    )
                }
                )}
            </div>
        )
    }
}

function mapStateToProps({ users, questions }) {
    return {
        users,
        questions
    }
}
export default connect(mapStateToProps)(Leaders)