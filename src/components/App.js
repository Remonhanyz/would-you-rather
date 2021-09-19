import React, { Component } from 'react';
import Newquestion from './Newquestion'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'
import Leaders from './Leaders'
import PollPage from './PollPage'
import Navigationbar from './Navigationbar'
import Login from './Login'
import NotFound from './NotFound';


class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {

    return (
      <div >
        <LoadingBar className="loading" />

        <BrowserRouter>


            {this.props.loading === true
              ? <Route component={Login} />
              : <div>
                <Navigationbar />
                <Route path='/' exact component={Home} />
                <Route path='/question/:id' component={PollPage} />
                <Route path='/add' component={Newquestion} />
                <Route path='/leaderboard' component={Leaders} />
                <Route path='/notfound' component={NotFound} />
                {/* <Route render={() => <Redirect to="/" />} /> */}
              </div>
            }

        </BrowserRouter>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
