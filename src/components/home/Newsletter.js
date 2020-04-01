import React from 'react'
import { connect } from 'react-redux';
import { storeSubscribe } from '../../store/actions/commonActions';
import Axios from 'axios';
import { API_URL } from './../../store/actions/types';


class Newsletter extends React.Component {
    state = {
        email: '',
        message: null,
        status: 0
    }
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    submitHandler = event => {
        event.preventDefault()
        let { email } = this.state
        this.setState({
            status: 1
        })
        Axios.post(`${API_URL}api/subscribe`, { email })
            .then(res => {
                this.setState({
                    status: res.data.status,
                    message: res.data.message,
                    email: res.data.status === 3 ? '' : email
                })
            })
            .catch(err => console.log(err))
    }
    render() {
        let { email, message, status } = this.state
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
                                            autoComplete="off"
                                            value={email}
                                            onChange={this.changeHandler}
                                            className="form-control fanstasy-input-field"
                                            placeholder="Enter your email address"
                                        />
                                        <div className="submit-btn-field">
                                            <button type="submit" className="submit-btn" disabled={!email && status !== 1}>Subscribe</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="short-section-title text-center">
                                {message && <h5 className="text-white mb-3">{message}</h5>}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default connect(null, { storeSubscribe })(Newsletter)
