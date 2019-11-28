import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions'

class Cart extends React.Component {
    state = {
        rides: {},
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (JSON.stringify(nextProps.cart.rides) !== JSON.stringify(prevState.rides)) {
            return {
                rides: nextProps.cart.rides,
            }
        }
        return null
    }

    cartRemoveHandler(id) {
        let newArr = this.state.rides.filter(item => item.id !== id)
        this.props.addToCart(newArr)
    }

    render() {
        let { rides } = this.state
        let totalPrice = 0
        Object.keys(rides).length !== 0 &&
            rides.map(item => (
                totalPrice = totalPrice + (item.discount_price ? item.discount_price : item.price)
            ))
        return (
            <li className="nav-item cart-item-header"><a className="nav-link shopping-cart-btn" to="#cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i><span className="cart-count">{Object.keys(rides).length}</span></a>
                {Object.keys(rides).length !== 0 &&
                    <div className="fantasy-mini-cart">
                        <div className="fantasy-mini-cart-inner">
                            {rides.map(item => (
                                <div className="fantasy-cart-item" key={item.id}>
                                    <div className="fantasy-cart-img">
                                        <Link to="#">
                                            <img src={item.service_logo} alt="product" />
                                        </Link>
                                    </div>
                                    <div className="fantasy-cart-info">	<Link to="#">{item.title}</Link>
                                        <p>Qty: 2<span>৳{item.discount_price ? item.discount_price : item.price}</span>
                                        </p>
                                    </div>
                                    <div className="fantasy-cart-remove"><a onClick={() => this.cartRemoveHandler(item.id)}><i className="fa fa-close"></i></a>
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
                                <Link to="/checkout" className="theme-btn">Checkout</Link>:
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