import { Nav, Navbar, Container } from 'react-bootstrap';
import { Component } from 'react'
import { connect } from 'react-redux'
import avatar from "../img/avatars/avatar 1.svg"
class Navigationbar extends Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Container className='ms-5'>
          <Navbar.Brand className="fs-4" style={{ 'font-family': 'Dancing Script' }} href="#">
            Would You Rather
          </Navbar.Brand>
          <Nav className="ms-4 me-auto">
            <Nav.Link className="ms-1 px-3" href="#home">Home</Nav.Link>
            <Nav.Link className="px-3" href="#features">Features</Nav.Link>
            <Nav.Link className="px-3" href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <span class="navbar-text ">
              Hello,
            </span>
            <img src={avatar} alt="" width="30" height="30" class="ms-3 me-4 mt-1 rounded-circle" />
            <Nav.Link href="#deets">Logout</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      // <Nav variant="pills" className='justify-content-center' defaultActiveKey="/home">
      //   <Nav.Item className='me-3'>
      //     <Nav.Link href="/home">Home</Nav.Link>
      //   </Nav.Item >
      //   <Nav.Item className='me-3 '>
      //     <Nav.Link className='text-dark' eventKey="newQuestion">New Question</Nav.Link>
      //   </Nav.Item>
      //   <Nav.Item>
      //     <Nav.Link className='text-light' eventKey="leaderBoard">Leader Board</Nav.Link>
      //   </Nav.Item>
      // </Nav>
    )
  }

}

export default Navigationbar