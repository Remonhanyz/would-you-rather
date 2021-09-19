import React, { Component } from 'react';
import Newquestion from './Newquestion'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'
import Leaders from './Leaders'
import PollPage from './PollPage'
import PollAnswerPage from './PollAnswerPage'
import Navigationbar from './Navigationbar'
import Login from './Login'
import NotFound from './NotFound';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <LoadingBar className="loading" />

        <BrowserRouter>

          {this.props.loading === true
            ? null
            : <div>
              {<div>
                <Navigationbar />
                <Route path='/' exact component={Home} />
                <Route path='/question/:id' exact component={PollPage} />
                <Route path='/question/answer/:id' exact component={PollAnswerPage} />
                <Route path='/add' component={Newquestion} />
                <Route path='/leaderboard' component={Leaders} />
                <Route path='/login' component={Login} />
                {/* <Route component={NotFound} /> */}
              </div>}
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
