import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions'

class Summary extends React.Component {
    state = {
        rides: {},
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (JSON.stringify(nextProps.cart.rides) === JSON.stringify(prevState.rides)) return null
        return {
            rides: nextProps.cart.rides,
        }
    }
    cartRemoveHandler(id) {
        let newArr = this.state.rides.filter(item => item.id !== id)
        this.props.addToCart(newArr)
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
        let { rides } = this.state
        let totalPrice = 0
        Object.keys(rides).length !== 0 &&
            rides.map(item => (
                totalPrice = totalPrice + this.getItemPrice(item.adult_quantity, item.kids_quantity, item.price, item.discount_price)
            ))
        return (
            <div className="col-lg-3 col-md-12">
                <div className="single-widget summary-widget mt-5">
                    <div className="ticket-widget-content-title">
                        <h3>Summary</h3>
                    </div>
                    {Object.keys(rides).length !== 0 &&
                        rides.map(item => (
                            <div className="ticket-widget-content-inner first-ticket-widget" key={item.id}>
                                <ul>
                                    <li style={{ border: "none" }}>
                                        <h5>
                                            <span className="float-left">{item.title}</span>
                                            <span className="float-right link-btn" onClick={() => this.cartRemoveHandler(item.id)} ><i className="fa fa-close p-1" /></span>
                                        </h5>
                                        <p>
                                            <span className="float-left">{item.service_title}</span>
                                            <span className="float-right">
                                                {item.adult_quantity !== 0 && "A: " + item.adult_quantity} &nbsp;
                                                {item.kids_quantity !== 0 && "K: " + item.kids_quantity} &nbsp;৳
                                                {this.getItemPrice(item.adult_quantity, item.kids_quantity, item.price, item.discount_price)}
                                            </span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    <div className="widget-checkout-money">
                        <h4 className="total-price-widget">Total : ৳{totalPrice}</h4>
                        <div className="widget-chekout-btn-area mt-3 text-center">
                            {Object.keys(rides).length !== 0 ?
                                <Link to="/checkout" className="payment-btn">Check Out</Link> :
                                <button type="button" className="payment-btn">Check Out</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart
})
export default connect(mapStateToProps, { addToCart })(Summary)