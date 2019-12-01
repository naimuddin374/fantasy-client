import React from 'react'
import { Link } from 'react-router-dom'
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
        let isDone = full_name && contact_no && password && gender
        return (
            <section className="fantasy-faq">
                <div className="container">
                    <div className="login-registeration-or-shape">
                        <div className="form-row">
                            <div className="col-md-12">
                                <div className="or-shape"> <span><h4>Register</h4></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6 offset-md-3">
                            <div className="row">
                                {Object.keys(validation).length !== 0 &&
                                    validation.email && <p className="text-danger">{validation.email}</p> || validation.contact_no && <p className="text-danger">{validation.contact_no}</p>
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
                                    <label htmlFor="contact_no">Connect Number <span className="text-danger">*</span></label>
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
                                    <label htmlFor="emailAddress">Email Address</label>
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
                                <div className="loginregisteration-group p-2"> <span>Already have an account <Link to="/login">Login here</Link></span>
                                </div>
                            </div>
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
