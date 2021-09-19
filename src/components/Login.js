import { Component } from 'react'
import { Card, Button, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
    
    handleSelection(selectedId, attributes) {
        let active = document.querySelector(`button[class="${attributes} active"]`)
        if (active)
            active.setAttribute('class', `${attributes} `)
        document.getElementById(selectedId).setAttribute('class', `${attributes} active`)
    }
    
    render() {
        const { users, dispatch } = this.props
        let attributes = 'list-group-item list-group-item-action'

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
                                <div className="fw-bold text-primary" style={{ 'fontFamily': 'Dancing Script', fontSize: '5.6em' }}>
                                    Would You Rather
                                </div>
                                <div>
                                    <Card.Title className='fw-bold fw-2 pt-3'>Users</Card.Title>

                                    <div className="list-group mt-3 col-7 ms-auto me-auto border border-primary">
                                        {Object.keys(users).map((user) => {
                                            return <button type="button" className={`${attributes}`} id={user} key={user} onClick={() => this.handleSelection(user, attributes)}>
                                                {user}
                                            </button>
                                        })}

                                    </div>
                                    
                                        <Button className="mt-4 px-5 col-12" variant="primary" onClick={() => dispatch(setAuthedUser(document.querySelector(`button[class="${attributes} active"]`).id))}>
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