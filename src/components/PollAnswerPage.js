import { Component } from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import NotFound from './NotFound'

class PollAnswerPage extends Component {
    render() {
        const { users, questions, authedUser } = this.props
        const question = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)
        const user = users[questions[question].author]
        const optionOne = questions[question].optionOne.votes.length
        const optionTwo = questions[question].optionOne.votes.length
        const presentOne = optionOne / (optionOne + optionTwo) * 100
        const presentTwo = optionTwo / (optionOne + optionTwo) * 100


        return (
            <div>
                {
                    Object.keys(users[authedUser].answers).includes(question)
                        ? < div className="container mt-5 col-md-8 col-sm-10" >
                            <Card className='mb-4'>

                                <Card.Header as="h5" className='ps-4'>{user.name} asks</Card.Header>
                                <Card.Body className='text-center row align-items-center'>
                                    <div className='col-3'>
                                        <Card.Img variant="start" src={`${user.avatarURL}`} className="col-11 rounded-circle float-center" />
                                    </div>
                                    <div className='col-9'>
                                        <div className=' border-start border-2 border-primary row justify-content-center' style={{ 'minHeight': "135px" }}>
                                            <Card.Title className='fw-bold pt-3 text-center fs-2 col-8'>Results:</Card.Title>
                                            <Card.Text className='mt-3 col-12'>

                                                <div className={`card ${users[authedUser].answers[question] === 'optionOne' && 'text-primary bg-primary-light'} border-primary mb-3`}>
                                                    <div className="card-body">
                                                        <h5 className="card-title mb-4">{questions[question].optionOne.text}</h5>
                                                        <div className="progress mb-1" style={{ height: '2em' }}>
                                                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${presentOne}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                                {presentOne}%
                                                            </div>
                                                        </div>
                                                        {optionOne} out of {optionOne + optionTwo} votes
                                                    </div>
                                                </div>

                                                <div className={`card ${users[authedUser].answers[question] === 'optionTwo' && 'text-primary bg-primary-light'} border-primary mb-3`}>
                                                    <div className="card-body">
                                                        <h5 className="card-title mb-4">{questions[question].optionTwo.text}</h5>
                                                        <div className="progress mb-1" style={{ height: '2em' }}>
                                                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${presentTwo}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                                {presentTwo}%
                                                            </div>
                                                        </div>
                                                        {optionTwo} out of {optionOne + optionTwo} votes
                                                    </div>
                                                </div>


                                            </Card.Text>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div >
                        : <NotFound />
                }
            </div>
        )
    }
}


function mapStateToProps({ users, questions, authedUser }) {
    return {
        users,
        questions,
        authedUser
    }
}

export default connect(mapStateToProps)(PollAnswerPage)