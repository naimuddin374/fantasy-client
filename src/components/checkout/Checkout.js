import React from 'react'
import CircleShape from './../common/CircleShape';
import { connect } from 'react-redux'
import { API_URL } from '../../store/actions/types';

class Checkout extends React.Component {
    state = {
        rides: this.props.cart.rides,
        auth: this.props.auth,
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    getItemPrice = (adult_quantity, kids_quantity, price, discount_price) => {
        let tPrice = 0
        if (adult_quantity > 0) {
            if (discount_price !== null) {
                tPrice = tPrice + (adult_quantity * discount_price)
            } else {
                tPrice = tPrice + (adult_quantity * price)
            }
        }
        if (kids_quantity > 0) {
            if (discount_price !== null) {
                tPrice = tPrice + (kids_quantity * discount_price)
            } else {
                tPrice = tPrice + (kids_quantity * price)
            }
        }
        return tPrice
    }
    render() {
        if (!this.state.auth.isAuth){
            window.location.href = "/login";
        }
        let { rides } = this.state
        let totalPrice = 0
        Object.keys(rides).length !== 0 &&
            rides.map(item => (
                totalPrice = totalPrice + this.getItemPrice(item.adult_quantity, item.kids_quantity, item.price, item.discount_price)
            ))
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
                                        <h4>Order Summery</h4>

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
                                                                            {item.adult_quantity > 0 && `${item.adult_quantity} Adult `} &nbsp;
                                                                            {item.kids_quantity > 0 && `${item.kids_quantity} Child`}
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-total-order-price">
                                                        <span>৳{this.getItemPrice(item.adult_quantity, item.kids_quantity, item.price, item.discount_price)}</span>
                                                    </div>
                                                </div>
                                            ))}

                                        <div className="total-order-count">	<span>Total</span>
                                            <span>৳{totalPrice}</span>
                                        </div>
                                        <div className="terms-condition-content text-center">
                                            <input type="checkbox" className="termscondiiton" name="payactive" value="aa" />Terms & Conditions
                                            <br />
                                            <div className="checkbox-pay-btn-content mt-3">
                                                <button className="pay-btn">Pay</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-account-accept text-center pt-3">	<span style={{ marginRight: "15px" }}>We accept</span>
                                        <span style={{ marginRight: "15px" }}><img src="./assets/images/payment/visa.png" alt="visa card" /></span>
                                        <span><img src="./assets/images/payment/mastercard.png" alt="master card" /></span>
                                    </div>
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
export default connect(mapStateToProps)(Checkout)

