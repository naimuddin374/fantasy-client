import React from 'react'
import { Registration } from '../../store/actions/authActions'
import { connect } from 'react-redux';

class Register extends React.Component {
    state = {
        full_name: '',
        contact_no: '',
        email: '',
        password: '',
        address: '',
        gender: '',
        age: '',
        time: null,
        validation: {}
    }
    changeHandler = event => {
        if (event.target.name === 'contact_no') {
            if (event.target.value.length > 11) return;
        }
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitHandler = event => {
        event.preventDefault()
        this.props.Registration(this.state, this.props.history)
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (JSON.stringify(nextProps.auth.time) !== JSON.stringify(prevState.time)) return null
        return {
            time: nextProps.auth.time,
            validation: nextProps.auth.validation,
        }
    }
    render() {
        let { full_name, contact_no, email, password, address, gender, age, validation } = this.state
        let isDone = full_name && email && contact_no && password && gender

        let { history, auth } = this.props
        if (auth.isAuth) history.push('/')

        return (
            <section className="section-padding">
                <div className="container">
                    <div className="login-registeration-or-shape">
                        <div className="form-row">
                            <div className="col-md-12">
                                <div className="or-shape"> <span><h4>Create Account</h4></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6 offset-md-3">
                            <div className="row">
                                {Object.keys(validation).length !== 0 &&
                                    <span>
                                        {validation.email && <p className="text-danger">{validation.email}</p>}
                                        {validation.contact_no && <p className="text-danger">{validation.contact_no}</p>}
                                    </span>
                                }
                            </div>

                            <form onSubmit={this.submitHandler}>
                                <div className="form-group">
                                    <label htmlFor="full_name">Full Name <span className="text-danger">*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="full_name"
                                        name="full_name"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter Full Name"
                                        value={full_name}
                                        onChange={this.changeHandler}
                                        required
                                    />
                                </div>
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
                                    <label htmlFor="emailAddress">Email Address <span className="text-danger">*</span></label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="emailAddress"
                                        name="email"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter Email Address"
                                        value={email}
                                        onChange={this.changeHandler}
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
                                    <label htmlFor="address">Address</label>
                                    <textarea
                                        className="form-control"
                                        id="address"
                                        name="address"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter Address"
                                        value={address}
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="age">Age</label>
                                    <input
                                        type="age"
                                        className="form-control"
                                        id="age"
                                        name="age"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter Age"
                                        value={age}
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Other" className="d-block">Gender <span className="text-danger">*</span></label>

                                    <label htmlFor="Male" className="mr-3">
                                        <input
                                            type="radio"
                                            id="Male"
                                            aria-describedby="emailHelp"
                                            value={gender}
                                            onChange={() => this.setState({ gender: 'Male' })}
                                            checked={gender === 'Male'}
                                        />&nbsp;
                                        Male</label>

                                    <label htmlFor="Female" className="mr-3">
                                        <input
                                            type="radio"
                                            id="Female"
                                            aria-describedby="emailHelp"
                                            value={gender}
                                            onChange={() => this.setState({ gender: 'Female' })}
                                        />&nbsp;
                                        Female</label>

                                    <label htmlFor="Other" className="mr-3">
                                        <input
                                            type="radio"
                                            id="Other"
                                            aria-describedby="emailHelp"
                                            value={gender}
                                            onChange={() => this.setState({ gender: 'Other' })}
                                        />&nbsp;
                                        Other</label>
                                </div>
                                <div className="form-group">
                                    {isDone ?
                                        <button type="submit" className="primary-btn full-width"> <i className="fa fa-check mr-2" aria-hidden="true" />
                                            Sign Up</button> :
                                        <button type="submit" disabled className="disable-btn full-width"> <i className="fa fa-check mr-2" aria-hidden="true" />
                                            Sign Up</button>
                                    }
                                </div>
                            </form>
                            {/* <div className="row">
                                <div className="col-lg-12">
                                    Already have an account <Link to={`${process.env.PUBLIC_URL}/login`}>Sign In</Link>
                                </div>
                            </div> */}
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, { Registration })(Register)