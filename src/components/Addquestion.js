import { Card, Button } from 'react-bootstrap';
import { Component } from 'react'
import { connect } from 'react-redux'


class Addquestion extends Component {
    render() {
        return (
            <Card className="text-center">
                <Card.Header>Create New Question</Card.Header>
                <Card.Body>
                    <Card.Title>Would You Rather</Card.Title>
                    <Card.Text>
                        <input class="form-control" type="text" placeholder="Default input" aria-label="default input example" />
                    </Card.Text>
                    <Button variant="primary">Submit</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default connect()(Addquestion)