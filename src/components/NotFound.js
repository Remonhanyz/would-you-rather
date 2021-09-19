import { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NotFound extends Component {

    render() {
        return (

            <div className="page-wrap align-items-center justify-content-center mt-5 pt-5">
                <div className="container ">
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                            <span className="display-1 d-block">404</span>
                            <div className="mb-4 lead">The page you are looking for was not found.</div>
                            <Link exact to='/' className="btn btn-link">Back to Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}