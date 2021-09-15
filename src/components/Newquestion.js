import { Component } from 'react'
import { Addquestion } from './Addquestion'
import { Navbar } from './Navbar'

export class Newquestion extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Addquestion />
            </div>
        )
    }
}

