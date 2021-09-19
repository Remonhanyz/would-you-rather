import { Navbar, Container } from 'react-bootstrap';
import { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class Navigationbar extends Component {

  render() {
    const { dispatch } = this.props

    return (
      <Navbar collapseOnSelect expand="lg" sticky="top" bg="primary" variant="dark">
        <Container className='ms-5'>
          <NavLink exact to="/" className='nav-link px-3'>
            <div className="fs-4 navbar-brand" style={{ 'fontFamily': 'Dancing Script' }}>
              Would You Rather
            </div>
          </NavLink>
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
              <li >
                <div className="nav-item nav-link" onClick={() => dispatch(setAuthedUser(null))} >

                  Logout
                </div> 


              </li>
            </ul>

          </Navbar.Collapse>
        </Container>
      </Navbar >

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