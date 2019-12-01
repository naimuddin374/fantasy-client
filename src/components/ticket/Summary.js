import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions'

class Summary extends React.Component {
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
                                            <span className="float-right">৳{item.discount_price ? item.discount_price : item.price}</span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    <div className="widget-checkout-money">
                        <h4 className="total-price-widget">Total : ৳{totalPrice}</h4>
                        <div className="widget-chekout-btn-area mt-3 text-center">
                            {Object.keys(rides).length !== 0 ?
                                <Link to="/" className="payment-btn">Check Out</Link> :
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