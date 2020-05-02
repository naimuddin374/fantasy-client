import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Login, logout } from '../../store/actions/authActions'
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';



class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contact_no: '',
            password: '',
        }
    }
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitHandler = event => {
        event.preventDefault()
        this.props.Login(this.state, this.props.history)
    }
    render() {
        let { contact_no, password } = this.state
        let isDone = contact_no && password


        const responseFacebook = (response) => {
            console.log(response);
        }
        return (
            <Fragment>
                <section className="section-padding">
                    <div className="container">
                        <div className="login-registeration-or-shape">
                            <div className="form-row">
                                {/* <div className="col-md-4 offset-4">
                                <img className="ml-5 mt-3" src={`${process.env.PUBLIC_URL}/assets/images/headerlogo.png`} alt="Site Logo" />
                            </div> */}
                                <div className="col-md-12">
                                    <div className="or-shape"> <span><h4>Login</h4></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-md-6 offset-md-3">
                                <form onSubmit={this.submitHandler}>
                                    <div className="form-group">
                                        <label htmlFor="contact_no">Contact Number <span className="text-danger">*</span></label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="contact_no"
                                            name="contact_no"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter Contact Number"
                                            value={contact_no}
                                            onChange={this.changeHandler}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password <span className="text-danger">*</span></label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter Password"
                                            value={password}
                                            onChange={this.changeHandler}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        {isDone ?
                                            <button type="submit" className="primary-btn full-width"> <i className="fa fa-check mr-2" aria-hidden="true" />
                                            Sign In</button> :
                                            <button type="submit" disabled className="disable-btn full-width"> <i className="fa fa-check mr-2" aria-hidden="true" />
                                            Sign In</button>
                                        }
                                    </div>
                                </form>
                                {/* <br />
                                <FacebookLogin
                                    appId="542058643407302" //APP ID NOT CREATED YET
                                    fields="name,email,picture"
                                    callback={responseFacebook}
                                />
                                <br /> */}

                                <div className="row">
                                    {/* <div className="col-lg-6">
                                        Don't have an account? <Link to={`${process.env.PUBLIC_URL}/register`}> Sign up </Link>
                                    </div> */}
                                    <div className="col-lg-6">
                                        <Link className="float-left" to={`${process.env.PUBLIC_URL}/forgot-password`}> Forgotten password? </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}
export default connect(null, { Login, logout })(Register)
