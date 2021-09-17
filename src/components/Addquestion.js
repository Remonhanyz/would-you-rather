import { Card, Button, Container, Row } from 'react-bootstrap';
import { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'

class Addquestion extends Component {
    handleSubmit = (e) => {
        e.preventDefault()

        const { dispatch, authedUser } = this.props

        dispatch(handleAddQuestion({
            optionOneText: document.getElementById('answer1').value,
            optionTwoText: document.getElementById('answer2').value,
            author: authedUser
        }))
    }

    render() {
        return (
            <Container className='pt-5 position-absolute top-50 start-50 translate-middle'>
                <Row className="text-center justify-content-sm-center">
                    <Card className="col-lg-7">
                        <Card.Header className="my-2 mb-4 fs-2 fw-bold">Create New Question</Card.Header>
                        <Card.Body>
                            <Card.Title className="mb-4 fs-3 fw-normal">Would you rather ...</Card.Title>
                            <Card.Text className='my-4'>
                                <input className="form-control mb-2" type="text" placeholder="Option 1" aria-label="default input example" id='answer1' />
                                <span className="fs-4">OR</span>
                                <input className="form-control mt-2" type="text" placeholder="Option 2" aria-label="default input example" id='answer2' />
                            </Card.Text>
                            <Button className="px-5 fs-5 my-2" variant="primary" onClick={this.handleSubmit}>Submit</Button>

                        </Card.Body>
                    </Card></Row></Container>
        )
    }
}
function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(Addquestion)