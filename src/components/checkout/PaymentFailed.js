import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { paymentFailed } from '../../store/actions/cartActions'


class PaymentFailed extends Component {
    constructor(props) {
        super(props)
        props.paymentFailed();
    }
    render() {
        return (
            <Fragment>
                <section className="fantasy-faq page-not-found">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/failed.jpg`} alt="Payment Success" />
                    <div className="container">
                        <div className="row my-5">
                            <div className="col-md-6 offset-3">
                                <h2>Payment Failed!</h2>
                                <h4>Page not found <Link to={`${process.env.PUBLIC_URL}/`}> Go Back </Link></h4>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}
export default connect(null, { paymentFailed })(PaymentFailed)
