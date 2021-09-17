import { Component } from "react";
import Navigationbar from "./Navigationbar";
import Polls from './Polls'

export class Home extends Component {
    render() {
        return (
            <div>
                <Navigationbar />
                <Polls />
            </div>
        )
    }
}