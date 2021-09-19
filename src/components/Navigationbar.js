import { Navbar, Container } from 'react-bootstrap';
import { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


class Navigationbar extends Component {

  render() {
    

    return (
      <Navbar collapseOnSelect expand="lg" sticky="top" bg="primary" variant="dark">
        <Container className='ms-5'>
          <Navbar.Brand className="fs-4" style={{ 'fontFamily': 'Dancing Script' }} href="#">
            Would You Rather
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <ul className="navbar-nav ms-4 me-auto">
              <li className="nav-item ">
                <NavLink exact to="/" className='nav-link px-3'>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/add" className='nav-link px-3'>
                  New Question
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/leaderboard" className='nav-link px-3'>
                  Leader Board
                </NavLink>
              </li>
            </ul>

            <ul className="navbar-nav">
              <span className="navbar-text ">
                Hello, {this.props.authedUser}
              </span>

              <img src={this.props.avatar} alt="current user" width="30" height="30" className="ms-3 me-3 mt-1 rounded-circle" />
              <li className="nav-item">
                <NavLink exact to="/" className='nav-link px-3'>
                  Logout
                </NavLink>
              </li>
            </ul>
            
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