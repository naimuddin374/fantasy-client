import React from 'react'
import { Link } from 'react-router-dom'
import { setPassword } from '../../store/actions/profileActions'
import { connect } from 'react-redux';

class SetNewPassword extends React.Component {
    state = {
        verify_code: '',
        nPassword: '',
        password: '',
    }
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitHandler = event => {
        event.preventDefault()
        this.props.setPassword(this.state, this.props.history)
    }
    render() {
        let { verify_code, nPassword, password } = this.state
        let isDone = verify_code && nPassword && password && (nPassword === password)
        return (
            <section className="fantasy-faq">
                <div className="container">
                    <div className="login-registeration-or-shape">
                        <div className="form-row">
                            <div className="col-md-4 offset-4">
                                <img className="ml-5 mt-3" src={`${process.env.PUBLIC_URL}/assets/images/headerlogo.png`} alt="Site Logo" />
                            </div>
                            <div className="col-md-12">
                                <div className="or-shape"> <span><h4>Set Password</h4></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6 offset-md-3">
                            <form onSubmit={this.submitHandler}>
                                <div className="form-group">
                                    <label htmlFor="verify_code">Verification Code<span className="text-danger">*</span></label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="verify_code"
                                        name="verify_code"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter Verify Code"
                                        value={verify_code}
                                        onChange={this.changeHandler}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nPassword">New Password<span className="text-danger">*</span></label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="nPassword"
                                        name="nPassword"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter New Password"
                                        value={nPassword}
                                        onChange={this.changeHandler}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Confirm Password<span className="text-danger">*</span></label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter Confirm Password"
                                        value={password}
                                        onChange={this.changeHandler}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    {isDone ?
                                        <button type="submit" className="primary-btn full-width"> <i className="fa fa-check mr-2" aria-hidden="true" />
                                            Send Code</button> :
                                        <button type="submit" disabled className="disable-btn full-width"> <i className="fa fa-check mr-2" aria-hidden="true" />
                                            Send Code</button>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="have-an-account mb-5">
                        <div className="form-row">
                            <div className="col-md-12">
                                <div className="loginregisteration-group p-2">
                                    <span>Already have an account <Link to={`${process.env.PUBLIC_URL}/login`}> Sign in here </Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default connect(null, { setPassword })(SetNewPassword)
