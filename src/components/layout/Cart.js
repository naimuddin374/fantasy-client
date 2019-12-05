import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions'
import { API_URL } from '../../store/actions/types';
import { getItemPrice } from '../../util/helper'

class Cart extends React.Component {
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
            <li className="nav-item cart-item-header"><Link className="nav-link shopping-cart-btn" to="#cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i><span className="cart-count">{Object.keys(rides).length}</span></Link>
                {Object.keys(rides).length !== 0 &&
                    <div className="fantasy-mini-cart">
                        <div className="fantasy-mini-cart-inner">
                            {rides.map(item => (
                                <div className="fantasy-cart-item" key={item.id}>
                                    <div className="fantasy-cart-img">
                                        <img src={API_URL + item.image} alt="product" />
                                    </div>
                                    <div className="fantasy-cart-info">	<p>{item.title}</p>
                                        <p>
                                            <span className="float-left">{item.adult_quantity !== 0 && `A-${item.adult_quantity}`} {item.kids_quantity !== 0 && `K-${item.kids_quantity}`}</span>
                                            <span className="float-right">৳{getItemPrice(item.adult_quantity, item.kids_quantity, item.price, item.discount_price)}</span></p>
                                    </div>
                                    <div className="fantasy-cart-remove"><a className="link-btn" onClick={() => this.cartRemoveHandler(item.id)}><i className="fa fa-close"></i></a>
                                    </div>
                                </div>
                            ))}
                            <div className="fantasy-mini-cart-table">
                                <div className="fantasy-cart-total mt-10">	<span className="fantasy-total-amount">Total:</span>
                                    <span className="fantasy-price">৳{totalPrice}</span>
                                </div>
                            </div>
                        </div>
                        <div className="fantasy-mini-cart-footer">
                            <div className="fantasy-cart-button">
                                <Link to="/checkout" className="theme-btn">Checkout</Link>
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