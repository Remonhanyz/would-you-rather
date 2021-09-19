import { Component } from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'

class LeaderCard extends Component {

    render() {
        const { user, users, order } = this.props
        const score = Object.keys(users[user].answers).length + users[user].questions.length
        return (
            <Card className='mb-4'>
                <Card.Body>
                    <span className="position-absolute top-50 start-0 fs-2 translate-middle badge rounded-pill bg-primary">
                        {order}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    <div className="row row-cols-3 g-3">
                        <div className="col col-sm-3 d-flex justify-content-center align-items-center">
                            <Card.Img variant="start" src={users[user].avatarURL} width="130" height="130" className=" mt-1 rounded-circle" />
                        </div>
                        <div className='col col-sm-6 ps-md-5 ps-sm-3 border-start border-2 border-primary' style={{ 'minHeight': "135px" }}>
                            <div>
                                <Card.Title className='fs-2 fw-bold pt-3'>{users[user].name}</Card.Title>
                                <div className='card-text fs-5 row mt-3'>
                                    <div className='col-sm-9 mb-2'>
                                        Answered questions
                                    </div>
                                    <div className='col-sm-3'>
                                        {Object.keys(users[user].answers).length}
                                    </div>
                                    <div className='col-sm-9'>

                                        Created questions
                                    </div>
                                    <div className='col-sm-3'>
                                        {Object.keys(users[user].questions).length}
                                    </div>



                                </div >
                            </div>
                        </div>
                        <div className="col col-sm-3 d-flex justify-content-center align-items-center">
                            <Card border="primary" style={{ width: '8rem' }} className='text-center'>
                                <Card.Header className='fs-4 bg-primary text-white'>Score</Card.Header>
                                <Card.Body>
                                    <div className='card-text fs-1 fw-bold'>
                                        <div>
                                            {score}
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        )
    }
}
function mapStateToProps({ users }) {
    return {
        users
    }
}

export default connect(mapStateToProps)(LeaderCard)