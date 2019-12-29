import React from 'react'
import { Link } from 'react-router-dom'
import { Login, logout } from '../../store/actions/authActions'
import { connect } from 'react-redux';

class Register extends React.Component {
    state = {
        contact_no: '01688554455',
        password: '123',
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
        return (
            <section className="fantasy-faq">
                <div className="container">
                    <div className="login-registeration-or-shape">
                        <div className="form-row">
                            <div className="col-md-4 offset-4">
                                <img className="ml-5 mt-3" src={`${process.env.PUBLIC_URL}/assets/images/headerlogo.png`} alt="Site Logo" />
                            </div>
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
                                    <div className="loginregisteration-group">
                                        <button
                                            type="submit"
                                            className={isDone ? 'email-submit form-control' : 'btn-default'}
                                            disabled={!isDone}>
                                            <i className="fa fa-check" aria-hidden="true"></i>
                                            Sign Up</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="have-an-account mb-5">
                        <div className="form-row">
                            <div className="col-md-12">
                                <div className="loginregisteration-group p-2">
                                    <span>Don't have an account <Link to={`${process.env.PUBLIC_URL}/register`}>Sign up here</Link></span>
                                    <span onClick={() => this.props.logout(this.props.history)}>Logout</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default connect(null, { Login, logout })(Register)
