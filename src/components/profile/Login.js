import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Login, logout } from '../../store/actions/authActions'
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';


class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emailOrContact: '',
            password: '',
            message: null,
            isSuccess: false,
            isWait: false
        }
    }
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitHandler = async event => {
        event.preventDefault()
        this.setState({
            message: null,
            isWait: true,
        })
        let { Login, history, cart } = this.props
        let response = await Login(this.state, history)
        if (response.status === 1) {
            this.setState({
                isWait: false,
                message: response.message,
                isSuccess: true
            })

            let cartRide = false
            let cartRoom = false
            if (Object.keys(cart.rides).length !== 0) {
                let cartRides = cart.rides.filter(item => item.isInCart)
                if (Object.keys(cartRides).length !== 0) {
                    cartRide = true
                }
                if (!cartRide) {
                    cartRoom = Object.keys(cart.booking).length !== 0
                }
            }
            setTimeout(() => {
                if (cartRide || cartRoom) {
                    history.push(`${process.env.PUBLIC_URL}/checkout`)
                } else {
                    history.push(`${process.env.PUBLIC_URL}/`)
                }
            }, 600)
        } else {
            this.setState({
                isWait: false,
                message: response.message,
                isSuccess: false
            })
        }
    }
    render() {
        let { emailOrContact, password, message, isWait, isSuccess } = this.state
        let isDone = emailOrContact && password
        let { isAuth, history } = this.props
        if (isAuth) history.push('/')


        const responseFacebook = (response) => {
            console.log(response);
        }
        return (
            <Fragment>
                <section className="section-padding">
                    <div className="container">
                        <div className="login-registeration-or-shape">
                            <div className="form-row">
                                <div className="col-md-12">
                                    <div className="or-shape"> <span><h4>Login</h4></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-md-6 offset-md-3">
                                {message &&
                                    <div className={isSuccess ? "alert alert-success alert-dismissible fade show" : "alert alert-danger alert-dismissible fade show"} role="alert">
                                        {message}
                                    </div>
                                }

                                <form onSubmit={this.submitHandler}>
                                    <div className="form-group">
                                        <label htmlFor="contact_no">Email or Contact Number <span className="text-danger">*</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="contact_no"
                                            name="emailOrContact"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter Email or Contact Number"
                                            value={emailOrContact}
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
                                                {isWait ? 'Please Wait...' : 'Sign In'}</button> :
                                            <button type="submit" disabled className="disable-btn full-width"> <i className="fa fa-check mr-2" aria-hidden="true" />
                                                {isWait ? 'Please Wait...' : 'Sign In'}</button>
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
const mapStateToProps = state => ({
    cart: state.cart,
    isAuth: state.auth.isAuth,
})
export default connect(mapStateToProps, { Login, logout })(Register)
