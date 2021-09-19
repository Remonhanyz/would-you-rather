import { Component } from 'react'
import { Card, Button, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'

class Login extends Component {
    handleSelection(selectedId) {
        const active = document.querySelector('button[class="list-group-item list-group-item-action active"]')
        if (active)
            active.setAttribute('class', 'list-group-item list-group-item-action')
        document.getElementById(selectedId).setAttribute('class', 'list-group-item list-group-item-action active')

    }
    render() {
        const { users } = this.props
        return (
            <div className='row justify-content-center align-items-center'>
            <Container className='pt-5 col-md-6'>
                <Row className="text-center">
                    <Card>
                        <Card.Header as="h5">
                            Welcome to the Would You Rather App!<br />
                            <span className="fs-6 fw-light">
                                Please Sign In to continue
                            </span>
                        </Card.Header>
                        <Card.Body>
                            <div className="fw-bold  text-primary" style={{ 'fontFamily': 'Dancing Script', fontSize: '5.6em' }}>
                                Would You Rather
                            </div>
                            <div>
                                <Card.Title className='fw-bold fw-2 pt-3'>Sign In</Card.Title>
                                <div class="list-group mt-3">
                                    {Object.keys(users).map((user) => {
                                        return <button type="button" class="list-group-item list-group-item-action" id={user} onClick={() => this.handleSelection(user)}>
                                            {user}
                                        </button>
                                    })}

                                </div>

                                <Button className="mt-4 px-5 col-12" variant="primary">
                                    Sign In
                                </Button>

                            </div>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users
    }
}
export default connect(mapStateToProps)(Login)