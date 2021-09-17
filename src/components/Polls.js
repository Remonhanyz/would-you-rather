import { Component } from "react";
import AnsweredQuestions from './AnsweredQuestions.js';
import UnansweredQuestions from './UnansweredQuestions';


export default class Polls extends Component {
    render() {
        return (
            <div className="container mt-5 col-md-8 col-sm-10" >
                <ul className="nav-justified nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="unanswered-tab" data-bs-toggle="tab" data-bs-target="#unanswered" type="button" role="tab" aria-controls="unanswered" aria-selected="true">Unaswered Questions</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="answered-tab" data-bs-toggle="tab" data-bs-target="#answered" type="button" role="tab" aria-controls="answered" aria-selected="false">Aswered Questions</button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="unanswered" role="tabpanel" aria-labelledby="unanswered-tab">
                        <div className="card">
                            <div className="card-body">
                                <UnansweredQuestions />
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="answered" role="tabpanel" aria-labelledby="answered-tab">
                        <div className="card">
                            <div className="card-body">
                                <AnsweredQuestions />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

