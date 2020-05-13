import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart, checkoutHandler } from '../../store/actions/cartActions'
import { getItemPrice, priceFormat } from '../../util/helper'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dateFormat from 'dateformat';


class Summary extends React.Component {
    state = {
        rides: {},
        expectedDate: null
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (JSON.stringify(nextProps.cart.rides) === JSON.stringify(prevState.rides)) return null
        return {
            rides: Object.keys(nextProps.cart.rides).length !== 0 && nextProps.cart.rides.filter(item => item.isInCart)
        }
    }
    cartRemoveHandler(id) {
        let newArr = this.props.cart.rides.map(item => {
            return {
                ...item,
                isInCart: item.id === id ? false : item.isInCart
            }
        })
        this.props.addToCart(newArr)
    }
    minusButtonHandler = (quantity) => {
        if (quantity > 1) {
            return false
        }
        return true
    }
    checkOutHandler = () => {
        let { checkoutHandler, history } = this.props
        checkoutHandler(this.state.expectedDate, history)
    }
    render() {
        let { rides, expectedDate } = this.state
        let totalPrice = 0
        Object.keys(rides).length !== 0 &&
            rides.map(item => (
                totalPrice = totalPrice + getItemPrice(item.quantity, item.price, item.discount_price)
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
                                <div className="inner-checkout-content">
                                    <span className="float-left"><h5>{item.title}</h5></span>
                                    <span className="float-right link-btn" onClick={() => this.cartRemoveHandler(item.id)} ><i className="fa fa-close p-1" /></span>
                                </div>

                                <div className="inner-checkout-content">
                                    <span className="float-left">Quantity: {item.quantity}x{priceFormat(item.discount_price !== null ? item.discount_price : item.price)}</span>
                                    <span className="float-right">
                                        {priceFormat(getItemPrice(item.quantity, item.price, item.discount_price))}</span>
                                </div>
                                <div className="inner-checkout-content">
                                    <div className="row">
                                        <div className="pro-quantity">
                                            <div className="order-summary-qtn">
                                                <button className="order-qtn" disabled={item.quantity <= item.mini_quantity} onClick={() => this.props.quantityMinusHandler(item.id)}>-</button>
                                                <input type="number" name="quantity" className="order-qtn-number" value={item.quantity} readOnly />
                                                <button className="order-qtn" disabled={item.quantity === 15} onClick={() => this.props.quantityAddHandler(item.id)}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    <div className="widget-checkout-money">
                        <label htmlFor="expectedDate">Expected Visiting Date: </label>
                        <DatePicker
                            id="expectedDate"
                            className='form-control'
                            placeholder="Expected Date"
                            selected={expectedDate && new Date(expectedDate)}
                            onChange={(date) => this.setState({ expectedDate: dateFormat(date, "yyyy-mm-dd") })}
                            dateFormat="dd MMMM yyyy"
                            autoComplete="off"
                            minDate={new Date()}
                        />
                        <h4 className="total-price-widget">Total: {priceFormat(totalPrice)}</h4>
                        <div className="widget-chekout-btn-area mt-3 text-center">
                            {Object.keys(rides).length !== 0 ?
                                <Link to={`${process.env.PUBLIC_URL}/checkout`} onClick={this.checkOutHandler} className="payment-btn">Check Out</Link> :
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
export default connect(mapStateToProps, { addToCart, checkoutHandler })(Summary)