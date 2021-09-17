import React, { Component } from 'react';
import { Newquestion } from './Newquestion'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import {Home} from './Home'
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
              <Route path='/' exact component={Home} />
              {/* <Route path='/tweet/:id' component={TweetPage} /> */}
              <Route path='/newQuestion' component={Newquestion} />

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
