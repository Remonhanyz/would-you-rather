import { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class PollCard extends Component {

    render() {
        const { user, text, question } = this.props

        return (
            <Card className='text-center mb-4'>
                <Card.Header as="h5">{user.name} asks</Card.Header>
                <Card.Body>
                    <Card.Img variant="start" src={user.avatarURL} width="130" height="130" className=" ms-3 me-5 mt-1 rounded-circle float-start" />
                    <div className=' ms-6 border-start border-2 border-primary' style={{ 'minHeight': "135px" }}>
                        <Card.Title className='fw-bold pt-3'>Would you rather</Card.Title>
                        <Card.Text>
                            {text} OR .....
                        </Card.Text>
                        <Link to={`/question/${question}`}>
                            <Button className="px-5" variant="primary">
                                View Poll
                            </Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        )
    }
}

function mapStateToProps({ users, questions }, { question }) {
    return {
        text: questions[question].optionOne.text,
        user: users[questions[question].author],

    }
}

export default connect(mapStateToProps)(PollCard)