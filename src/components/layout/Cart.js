import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions'
import { API_URL } from '../../store/actions/types';
import { getItemPrice } from '../../util/helper'

class Cart extends React.Component {
    state = {
        rides: {},
        booking: {},
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if ((JSON.stringify(nextProps.cart.rides) === JSON.stringify(prevState.rides)) && (JSON.stringify(nextProps.cart.booking) === JSON.stringify(prevState.booking))) return null
        return {
            rides: Object.keys(nextProps.cart.rides).length !== 0 && nextProps.cart.rides.filter(item => item.isInCart),
            booking: nextProps.cart.booking,
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
        let { rides, booking } = this.state
        let totalPrice = 0
        Object.keys(rides).length !== 0 &&
            rides.map(item => (
                totalPrice = totalPrice + getItemPrice(item.quantity, item.price, item.discount_price)
            ))
        let totalItem = Object.keys(rides).length
        if (Object.keys(booking).length !== 0) {
            totalPrice = totalPrice + booking.totalPrice
            totalItem = totalItem + 1
        }
        return (
            <li className="nav-item cart-item-header" id="mobile-menu-card">
                <Link className="nav-link shopping-cart-btn mr-0" to="#cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i><span className="cart-count">{totalItem}</span></Link>
                {(Object.keys(rides).length !== 0 || (Object.keys(booking).length !== 0)) &&
                    <div className="fantasy-mini-cart">
                        <div className="fantasy-mini-cart-inner">
                            {Object.keys(rides).length !== 0 &&
                                rides.map(item => (
                                    <div className="fantasy-cart-item" key={item.id}>
                                        <div className="fantasy-cart-img">
                                            <img src={API_URL + item.image} alt="product" />
                                        </div>
                                        <div className="fantasy-cart-info">
                                            <p>{item.title}</p>
                                            <p>
                                                <span className="float-left">Q: {item.quantity}x৳{item.discount_price !== null ? item.discount_price : item.price}</span>
                                                <span className="float-right">৳{getItemPrice(item.quantity, item.price, item.discount_price)}</span>
                                            </p>
                                        </div>
                                        <div className="fantasy-cart-remove">
                                            <button className="link-btn" onClick={() => this.cartRemoveHandler(item.id)}><i className="fa fa-close"></i></button>
                                        </div>
                                    </div>
                                ))}
                            {Object.keys(booking).length !== 0 &&
                                <div className="fantasy-cart-item" key={booking.booking_id}>
                                    <div className="fantasy-cart-img">
                                        <img src={API_URL + booking.image} alt="product" />
                                    </div>
                                    <div className="fantasy-cart-info">	<p>{booking.title}</p>
                                        <p>
                                            <span className="float-right">৳{booking.totalPrice}</span></p>
                                    </div>
                                    <div className="fantasy-cart-remove">
                                        {/* <button className="link-btn" onClick={() => this.cartRemoveHandler(item.id)}><i className="fa fa-close"></i></button> */}
                                    </div>
                                </div>
                            }
                            <div className="fantasy-mini-cart-table">
                                <div className="fantasy-cart-total mt-10">	<span className="fantasy-total-amount">Total:</span>
                                    <span className="fantasy-price">৳{totalPrice}</span>
                                </div>
                            </div>
                        </div>
                        <div className="fantasy-mini-cart-footer">
                            <div className="fantasy-cart-button">
                                <Link to={`${process.env.PUBLIC_URL}/checkout`} className="theme-btn">Checkout</Link>
                            </div>
                        </div>
                    </div>
                }
            </li>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart
})
export default connect(mapStateToProps, { addToCart })(Cart)