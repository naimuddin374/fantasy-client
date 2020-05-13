import React from 'react'
import CircleShape from './../common/CircleShape';
import { connect } from 'react-redux'
import { API_URL } from '../../store/actions/types';
import { getItemPrice } from '../../util/helper'
import { checkoutPayment } from '../../store/actions/cartActions'

class Checkout extends React.Component {
    state = {
        rides: {},
        auth: this.props.auth,
        expectedDate: this.props.cart.expectedDate,
        booking: {},
        termsAdnConditions: false
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if ((JSON.stringify(nextProps.cart.rides) === JSON.stringify(prevState.rides)) && (JSON.stringify(nextProps.cart.booking) === JSON.stringify(prevState.booking))) return null
        return {
            rides: Object.keys(nextProps.cart.rides).length !== 0 && nextProps.cart.rides.filter(item => item.isInCart),
            booking: nextProps.cart.booking,
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    payHandler = async () => {
        this.setState({
            termsAdnConditions: true
        })
        let { rides, booking, auth, expectedDate } = this.state
        this.props.checkoutPayment(rides, booking, auth.token, expectedDate)

    }
    render() {
        if (!this.state.auth.isAuth) {
            window.location.href = `${process.env.PUBLIC_URL}/login`;
        }
        let { rides, booking } = this.state
        let totalPrice = 0
        Object.keys(rides).length !== 0 &&
            rides.map(item => (
                totalPrice = totalPrice + getItemPrice(item.quantity, item.price, item.discount_price)
            ))
        if (Object.keys(booking).length !== 0) {
            totalPrice = totalPrice + booking.totalPrice
        }
        let { termsAdnConditions } = this.state
        return (
            <div>
                <section className="page-breadcrum-area checkout-page-content section-padding">
                    <CircleShape />

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2">
                                <div className="page-title mb-5">
                                    <h3>Checkout</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2">
                                <div className="full-order-summary-content">
                                    <div className="checkout-page-order-summary-wrapper">
                                        <h4>Order Summary</h4>

                                        {Object.keys(rides).length !== 0 &&
                                            rides.map((item, index) => (
                                                <div className="single-order-content" key={item.id}>
                                                    <div className="product-order-details">
                                                        <div className="product-detais-order-innder">
                                                            <div className="prduct-order-count">	<span>{index + 1}.</span>
                                                            </div>
                                                            <div className="product-order-name">
                                                                <ul>
                                                                    <li>
                                                                        <span className="float-left">
                                                                            <img src={item.image ? API_URL + item.image : `${process.env.PUBLIC_URL}/assets/images/no-image-available.jpg`} alt="Ticket purchase logo" style={{ height: '50px' }} />
                                                                        </span>
                                                                        <span className="float-left ml-5">
                                                                            {item.title}<br />
                                                                            Quantity: {item.quantity}x৳{item.discount_price !== null ? item.discount_price : item.price}
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-total-order-price">
                                                        <span>৳{getItemPrice(item.quantity, item.price, item.discount_price)}</span>
                                                    </div>
                                                </div>
                                            ))}

                                        {Object.keys(booking).length !== 0 &&
                                            <div className="single-order-content" key={booking.booking_id}>
                                                <div className="product-order-details">
                                                    <div className="product-detais-order-innder">
                                                        <div className="prduct-order-count">	<span>R1.</span>
                                                        </div>
                                                        <div className="product-order-name">
                                                            <ul>
                                                                <li>
                                                                    <span className="float-left">
                                                                        <img src={booking.image ? API_URL + booking.image : `${process.env.PUBLIC_URL}/assets/images/no-image-available.jpg`} alt="Ticket purchase logo" style={{ height: '50px' }} />
                                                                    </span>
                                                                    <span className="float-left ml-5">
                                                                        {booking.title}
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-total-order-price">
                                                    <span>৳{booking.totalPrice}</span>
                                                </div>
                                            </div>
                                        }

                                        <div className="total-order-count">	<span>Total</span>
                                            <span>৳{totalPrice}</span>
                                        </div>
                                        <div className="terms-condition-content text-center">
                                            <input
                                                type="checkbox"
                                                className="termscondiiton"
                                                id="termsConditions"
                                                name="payactive"
                                                value="1"
                                                checked={termsAdnConditions}
                                                onChange={() => this.setState({ termsAdnConditions: !termsAdnConditions })}
                                            /><label htmlFor="termsConditions">Terms & Conditions</label>
                                            <h4>Pay With</h4>
                                            <div className="checkbox-pay-btn-content mt-3">
                                                {termsAdnConditions ?
                                                    <img src="./assets/images/payment/bkash.svg" className="link-btn" title="Pay With Bkash" alt="Pay With Bkash" onClick={this.payHandler} width="100" /> :
                                                    <img src="./assets/images/payment/bkash.svg" alt="Pay With Bkash" title="Pay With Bkash" width="100" />
                                                }
                                                {/* {termsAdnConditions ?
                                                    <button type="submit" className="primary-btn full-width" onClick={this.payHandler}> <i className="fa fa-check mr-2" aria-hidden="true" />
                                                        Pay</button> :
                                                    <button type="submit" disabled className="disable-btn full-width"> <i className="fa fa-check mr-2" aria-hidden="true" />
                                                        Pay</button>
                                                } */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="order-account-accept text-center pt-3">	<span>We accept</span>
                                        <span style={{ marginRight: "15px" }}><img src="./assets/images/payment/bkash.svg" alt="visa card" width="50" /></span>
                                        <span><img src="./assets/images/payment/mastercard.png" alt="master card" /></span>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    cart: state.cart,
    auth: state.auth,
})
export default connect(mapStateToProps, { checkoutPayment })(Checkout)

