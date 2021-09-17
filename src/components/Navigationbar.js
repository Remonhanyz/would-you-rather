import { Nav, Navbar, Container } from 'react-bootstrap';
import { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


class Navigationbar extends Component {

  render() {
    return (
      <Navbar collapseOnSelect expand="md" sticky="top" bg="primary" variant="dark">
        <Container className='ms-5'>
          <Navbar.Brand className="fs-4" style={{ 'fontFamily': 'Dancing Script' }} href="#">
            Would You Rather
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-4 me-auto">
              <NavLink exact to="/" className='nav-link'>
                <Nav.Link className="ms-1 px-3">Home</Nav.Link>
              </NavLink>

              <Nav.Link className="px-3" ><NavLink to="/newQuestion" className='no-decore'>New Question</NavLink></Nav.Link>

              <NavLink to="/leaders" className='no-decore'>
                <Nav.Link className="px-3">Leader Board</Nav.Link>
              </NavLink>
            </Nav>
            <Nav>
              <span className="navbar-text ">
                Hello, {this.props.authedUser}
              </span>
              
              <img src={this.props.avatar} alt="current user" width="30" height="30" className="ms-3 me-3 mt-1 rounded-circle" />
              <NavLink to="/login" className='no-decore'>
                <Nav.Link>Logout</Nav.Link>
              </NavLink>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
  }

}


function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    avatar: users[authedUser].avatarURL
  }
}
export default connect(mapStateToProps)(Navigationbar)