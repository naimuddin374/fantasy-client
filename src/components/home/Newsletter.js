import React from 'react'
import { connect } from 'react-redux';
import { storeSubscribe } from '../../store/actions/commonActions';

class Newsletter extends React.Component {
    state = {
        email: ''
    }
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    submitHandler = event => {
        event.preventDefault()
        let { email } = this.state
        if (!email) {
            alert('Provide your email address')
        } else {
            this.props.storeSubscribe({ email })
            setTimeout(() => {
                this.setState({
                    email: ''
                })
            }, 1500)
        }
    }
    render() {
        let { email } = this.state
        return (
            <section className="newsletter-area section-padding background-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1">
                            <div className="short-section-title text-center">
                                <h3 className="text-white mb-3">Stay ahead of everyone</h3>
                            </div>
                            <div className="newsletter-content">
                                <form onSubmit={this.submitHandler}>
                                    <div className="form-group newletterfom-field relative">
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={email}
                                            onChange={this.changeHandler}
                                            className="form-control fanstasy-input-field"
                                            placeholder="Enter your email address"
                                        />
                                        <div className="submit-btn-field">
                                            <button type="submit" className={email ? "submit-btn" : "submit-btn secondary-btn"} disabled={!email}>Subscribe</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default connect(null, { storeSubscribe })(Newsletter)
