import React from 'react'
import { Link } from 'react-router-dom'
import { forgotPassword } from '../../store/actions/profileActions'
import { connect } from 'react-redux';

class ForgotPassword extends React.Component {
    state = {
        contact_no: '01688554455',
        email: 'someone@gmail.com',
        type: 1,
    }
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitHandler = event => {
        event.preventDefault()
        this.props.forgotPassword(this.state, this.props.history)
    }
    render() {
        let { contact_no, email, type } = this.state
        let isDone = type && (contact_no || email)
        return (
            <section className="section-padding">
                <div className="container">
                    <div className="login-registeration-or-shape">
                        <div className="form-row">
                            <div className="col-md-12">
                                <div className="or-shape"> <span><h4>Forgot Password</h4></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6 offset-md-3">
                            <form onSubmit={this.submitHandler}>
                                <div className="row booking-for-area">
                                    <div className="col-md-12">
                                        <b>Would you like to receive verification code?</b>
                                        <div className="form-group mb-0">
                                            <label className="bmd-label-floating">
                                                <input
                                                    type="checkbox"
                                                    name="type"
                                                    className="mr-2"
                                                    value="1"
                                                    onChange={this.changeHandler}
                                                    checked={Number(type) === 1 ? true : false}
                                                />
                                                Email Address</label>
                                        </div>
                                        <div className="form-group mb-0">
                                            <label className="bmd-label-floating">
                                                <input
                                                    type="checkbox"
                                                    name="type"
                                                    className="mr-2"
                                                    value="2"
                                                    onChange={this.changeHandler}
                                                    checked={Number(type) === 2 ? true : false}
                                                />
                                                Contact Number</label>
                                        </div>
                                    </div>
                                </div>
                                {Number(type) === 1 ?
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address<span className="text-danger">*</span></label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter Email Address"
                                            value={email}
                                            onChange={this.changeHandler}
                                            required
                                        />
                                    </div>
                                    : <div className="form-group">
                                        <label htmlFor="contact_no">Contact Number<span className="text-danger">*</span></label>
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
                                    </div>}

                                <div className="form-group">
                                    {isDone ?
                                        <button type="submit" className="primary-btn full-width"> <i className="fa fa-check mr-2" aria-hidden="true" />
                                            Send Code</button> :
                                        <button type="submit" disabled className="disable-btn full-width"> <i className="fa fa-check mr-2" aria-hidden="true" />
                                            Send Code</button>
                                    }
                                </div>
                            </form>
                            <div className="row">
                                <div className="col-lg-6">
                                    <Link to={`${process.env.PUBLIC_URL}/login`}>Sign In</Link>
                                </div>
                                <div className="col-lg-6">
                                    <Link className="float-right" to={`${process.env.PUBLIC_URL}/set-password`}> Already got a code? </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default connect(null, { forgotPassword })(ForgotPassword)
