import { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button, Row } from 'react-bootstrap';
import { handleAddQuestion } from '../actions/questions'
import { Link } from 'react-router-dom';

class Newquestion extends Component {
    handleSubmit = (e) => {
        const { dispatch, authedUser } = this.props
        dispatch(handleAddQuestion({
            optionOneText: document.getElementById('answer1').value,
            optionTwoText: document.getElementById('answer2').value,
            author: authedUser
        }))
    }
    render() {
        return (
            <div className='container'>
                <div className='row justify-content-center align-items-center' style={{ minHeight: '90vh' }}>
                    <div className='col-md-8 col-lg-7' >
                        <Row className="text-center">
                            <Card>
                                <Card.Header className="my-2 mb-4 fs-2 fw-bold">Create New Question</Card.Header>
                                <Card.Body>
                                    <Card.Title className="mb-4 fs-3 fw-normal">Would you rather ...</Card.Title>
                                    <Card.Text className='my-4'>
                                        <input className="form-control mb-2" type="text" placeholder="Option 1" aria-label="default input example" id='answer1' />
                                        <span className="fs-4">OR</span>
                                        <input className="form-control mt-2" type="text" placeholder="Option 2" aria-label="default input example" id='answer2' />
                                    </Card.Text>
                                    <Link to='/'>
                                        <Button className="px-5 fs-5 my-2" variant="primary" onClick={() => this.handleSubmit()}>Submit</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Row>
                    </div>
                </div >
            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions }) {
    return {
        authedUser,
        questions
    }
}

export default connect(mapStateToProps)(Newquestion)