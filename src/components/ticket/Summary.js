import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions'
import { getItemPrice } from '../../util/helper'

class Summary extends React.Component {
    state = {
        rides: {},
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (JSON.stringify(nextProps.cart.rides) === JSON.stringify(prevState.rides)) return null
        return {
            rides: nextProps.cart.rides.filter(item => item.isInCart)
        }
    }
    cartRemoveHandler(id) {
        let newArr = this.props.cart.rides.map(item => {
            let obj = { ...item }
            if (item.id === id) {
                obj.isInCart = false
            }
            return obj
        })
        this.props.addToCart(newArr)
    }

    render() {
        let { rides } = this.state
        let totalPrice = 0
        Object.keys(rides).length !== 0 &&
            rides.map(item => (
                totalPrice = totalPrice + getItemPrice(item.adult_quantity, item.kids_quantity, item.price, item.discount_price)
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
                                                {item.adult_quantity !== 0 && "A-" + item.adult_quantity} &nbsp;
                                                {item.kids_quantity !== 0 && "K-" + item.kids_quantity} &nbsp;৳
                                                {getItemPrice(item.adult_quantity, item.kids_quantity, item.price, item.discount_price)}
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