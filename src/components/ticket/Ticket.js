import React from 'react'
// import Search from './Search'
import Axios from 'axios'
import { connect } from 'react-redux'
import { addToCart } from '../../store/actions/cartActions';
import { API_URL } from '../../store/actions/types';

import TicketItem from './TicketItem'
import Summary from './Summary'
import CircleShape from '../common/CircleShape'

class Ticket extends React.Component {
    state = {
        rides: {},
    }
    componentDidMount() {
        window.scrollTo(0, 0)
        Axios.get(`${API_URL}api/all-ticket`)
            .then(res => {
                let allItem = []
                if (Object.keys(res.data).length !== 0) {
                    // Check if selected any ticket from another page
                    let paramId = this.props.match.params.id
                    if (paramId !== undefined && !isNaN(paramId)) {
                        let selItem = res.data.filter(item => item.id === Number(paramId))
                        allItem = res.data.filter(item => item.id !== Number(paramId))

                        // Add default in cart
                        if (Object.keys(selItem).length !== 0) {
                            selItem[0].isInCart = true
                            selItem[0].quantity = 1
                            allItem.unshift(...selItem)
                        }
                    } else {
                        allItem = res.data
                    }
                }
                let rides = this.props.cart.rides
                if (Object.keys(rides).length === 0) {
                    this.props.addToCart(allItem)
                } else {
                    // Check this item already in cart set isInCart true of false
                    let newArr = allItem.map(item => {
                        let obj = {
                            ...item
                        }
                        let selItem = rides.filter(cart => (cart.id === item.id && cart.isInCart))
                        if (Object.keys(selItem).length !== 0) {
                            obj.isInCart = true
                            obj.quantity = selItem[0].quantity
                        }
                        return obj
                    })
                    this.props.addToCart(newArr)
                }
            })
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (JSON.stringify(nextProps.cart.rides) === JSON.stringify(prevState.rides)) return null
        return {
            rides: nextProps.cart.rides,
        }
    }
    addToCartHandler(id) {
        let newArr = this.state.rides.map(item => {
            return {
                ...item,
                isInCart: item.id === id ? true : item.isInCart,
                quantity: (item.id === id && Number(item.quantity) === 0) ? 1 : item.quantity
            }
        })
        this.props.addToCart(newArr)
    }
    quantityAddHandler(id) {
        let newArr = this.state.rides.map(item => {
            return {
                ...item,
                quantity: item.id === id ? Number(item.quantity) + 1 : item.quantity
            }
        })
        this.props.addToCart(newArr)
    }
    quantityMinusHandler(id) {
        let newArr = this.state.rides.map(item => {
            return {
                ...item,
                quantity: item.id === id ? Number(item.quantity) - 1 : item.quantity
            }
        })
        this.props.addToCart(newArr)
    }
    render() {
        return (
            <div>
                {/* <Search /> */}

                <section className="checkout-page-area section-padding">

                    <CircleShape />

                    <div className="container">
                        <div className="row">
                            <TicketItem
                                paramId={this.props.match.params.id}
                                rides={this.state.rides}
                                addToCartHandler={this.addToCartHandler.bind(this)}
                                quantityAddHandler={this.quantityAddHandler.bind(this)}
                                quantityMinusHandler={this.quantityMinusHandler.bind(this)}
                            />
                            <Summary
                                quantityAddHandler={this.quantityAddHandler.bind(this)}
                                quantityMinusHandler={this.quantityMinusHandler.bind(this)}
                            />
                        </div>
                    </div>
                </section>

                <div className="add-item">	<span>Item added your cart</span>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    cart: state.cart,
})
export default connect(mapStateToProps, { addToCart })(Ticket)
