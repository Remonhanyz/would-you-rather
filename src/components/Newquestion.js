import { Component } from 'react'
import Addquestion from './Addquestion'
import Navigationbar from './Navigationbar'

export class Newquestion extends Component {
    render() {
        return (
            <div>
                <Navigationbar />
                <Addquestion />
            </div>
        )
    }
}

