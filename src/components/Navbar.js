import { Nav } from 'react-bootstrap';
import { Component } from 'react'
import { connect } from 'react-redux'

class Navbar extends Component {
  render() {
    return (
      <Nav variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">New Question</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Leader Board</Nav.Link>
        </Nav.Item>
      </Nav>
    )
  }

}

export default connect()(Navbar)