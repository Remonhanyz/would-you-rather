import { Card, Button, Container, Row } from 'react-bootstrap';
import { Component } from 'react'
import { connect } from 'react-redux'


class Addquestion extends Component {
    render() {
        return (
            <Container className='position-absolute top-50 start-50 translate-middle'>
                <Row className="text-center justify-content-sm-center">
                    <Card className="col-lg-7">
                        <Card.Header className="my-2 mb-4 fs-2 fw-bold">Create New Question</Card.Header>
                        <Card.Body>
                            <Card.Title className="mb-4 fs-3 fw-normal">Would you rather ...</Card.Title>
                            <Card.Text  className='my-4'>
                                <input className="form-control mb-2" type="text" placeholder="Option 1" aria-label="default input example" />
                                <span className="fs-4">OR</span>
                                <input className="form-control mt-2" type="text" placeholder="Option 2" aria-label="default input example" />
                            </Card.Text>
                            <Button className="px-5 fs-5 my-2" variant="primary">Submit</Button>
                            
                        </Card.Body>
                    </Card></Row></Container>
        )
    }
}

export default Addquestion