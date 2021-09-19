import { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { handleAddAnswer } from '../actions/shared'

class PollUnansweredPage extends Component {

    handleSubmit(answer) {
        const qid = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)
        const { dispatch, authedUser } = this.props
        dispatch(handleAddAnswer({ authedUser, qid, answer }))
    }
    handleSelection(selectedId, unselectedId) {
        document.getElementById(selectedId).setAttribute('checked', '')
        document.getElementById(unselectedId).removeAttribute('checked')
    }

    render() {
        const { users, questions } = this.props
        const question = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)
        const user = users[questions[question].author]


        return (
            <div className="container mt-5 col-md-8 col-sm-10" >
                <Card className='mb-4'>
                    <Card.Header className='ps-4' as="h5">{user.name} asks</Card.Header>
                    <Card.Body className='row align-items-center'>
                        <div className='col-3 text-center'>
                            <Card.Img variant="start" src={`${user.avatarURL}`} className="col-11 rounded-circle" />
                        </div>
                        <div className='col-9'>
                            <div className='border-start border-2 border-primary row justify-content-center' style={{ 'minHeight': "14em" }}>
                                <Card.Title className='fw-bold pt-3 fs-2  col-11'>Would you rather</Card.Title>
                                <div className='card-text col-10'>
                                    <div className="input-group">
                                        <div className="form-check mb-3 col-12">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="optionOne" onClick={() => this.handleSelection('optionOne', 'optionTwo')} />
                                            <label className="form-check-label" htmlFor="optionOne" >
                                                {questions[question].optionOne.text}
                                            </label>
                                        </div>
                                        <div className="form-check col-12">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="optionTwo" onClick={() => this.handleSelection('optionTwo', 'optionOne')} />
                                            <label className="form-check-label" htmlFor="optionTwo" >
                                                {questions[question].optionTwo.text}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-11">
                                    <Button className="col-11" variant="primary" onClick={() => { this.handleSubmit(document.querySelector('input[name=flexRadioDefault]:checked').id) }}>
                                        Submit
                                    </Button>
                                </div>

                            </div>
                        </div>
                    </Card.Body>
                </Card>
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

export default connect(mapStateToProps)(PollUnansweredPage)