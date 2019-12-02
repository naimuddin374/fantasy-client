import React from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import { addToCart } from '../../store/actions/cartActions';
import Item from './Item'

class TicketItem extends React.Component {
    state = {
        rides: {},
    }
    componentDidMount() {
        Axios.get(`api/ride`)
            .then(res => {
                this.setState({
                    rides: res.data
                })
            })
    }
    quantityAddHandler(id, type) {
        let newArr = this.state.rides.map(item => {
            return {
                ...item,
                kids_quantity: (item.id === id && type === 2) ? Number(item.kids_quantity) + 1 : Number(item.kids_quantity),
                adult_quantity: (item.id === id && type === 1) ? Number(item.adult_quantity) + 1 : Number(item.adult_quantity)
            }
        })
        this.setState({
            rides: newArr
        })
        if (Object.keys(this.props.cart.rides).length !== 0) {
            let selItem = this.props.cart.rides.filter(item => item.id === id)
            if (Object.keys(selItem).length !== 0) {
                let newArr = this.props.cart.rides.map(item => {
                    return {
                        ...item,
                        kids_quantity: (item.id === id && type === 2) ? Number(item.kids_quantity) + 1 : Number(item.kids_quantity),
                        adult_quantity: (item.id === id && type === 1) ? Number(item.adult_quantity) + 1 : Number(item.adult_quantity)
                    }
                })
                this.props.addToCart(newArr)
            }
        }
    }
    quantityMinusHandler(id, type) {
        let newArr = this.state.rides.map(item => {
            return {
                ...item,
                kids_quantity: (item.id === id && type === 2) ? Number(item.kids_quantity) - 1 : Number(item.kids_quantity),
                adult_quantity: (item.id === id && type === 1) ? Number(item.adult_quantity) - 1 : Number(item.adult_quantity)
            }
        })
        this.setState({
            rides: newArr
        })
        if (Object.keys(this.props.cart.rides).length !== 0) {
            let selItem = this.props.cart.rides.filter(item => item.id === id)
            if (Object.keys(selItem).length !== 0) {
                console.log(selItem.kids_quantity, selItem.adult_quantity)
                let newArr = this.props.cart.rides.map(item => {
                    return {
                        ...item,
                        kids_quantity: (item.id === id && type === 2) ? Number(item.kids_quantity) - 1 : Number(item.kids_quantity),
                        adult_quantity: (item.id === id && type === 1) ? Number(item.adult_quantity) - 1 : Number(item.adult_quantity)
                    }
                })
                this.props.addToCart(newArr)
            }
        }
    }
    addToCartHandler(data) {
        if (data.adult_quantity == 0 && data.kids_quantity == 0) {
            data.kids_quantity = 1
        }
        let rides = this.props.cart.rides
        if (Object.keys(rides).length === 0) {
            this.props.addToCart([data])
        } else {
            let checkArr = rides.filter(cart => cart.id === data.id)
            if (Object.keys(checkArr).length !== 0) {
                alert('This item already in cart')
            } else {
                let oldData = rides.filter(item => item.id !== data.id)
                this.props.addToCart(oldData.concat(data))
            }
        }

        let newArr = this.state.rides.map(item => {
            return {
                ...item,
                isInCart: item.id === data.id ? true : item.isInCart
            }
        })
        this.setState({
            rides: newArr
        })
    }
    render() {
        let { rides } = this.state
        return (
            <div className="col-lg-9 col-md-12"><div className="checkout-inner-content-area mb-5">
                <h4 className="ticket-name">Regular Tickets</h4>
                {Object.keys(rides).length !== 0 &&
                    rides.map(item => (
                        item.discount_price === null &&
                        <Item
                            key={item.id}
                            data={item}
                            quantityMinusHandler={this.quantityMinusHandler.bind(this)}
                            quantityAddHandler={this.quantityAddHandler.bind(this)}
                            addToCartHandler={this.addToCartHandler.bind(this)}
                        />
                    ))
                }
            </div>
                <div className="checkout-inner-content-area mb-5">
                    <h4 className="ticket-name">Discount Ticket</h4>
                    {Object.keys(rides).length !== 0 &&
                        rides.map(item => (
                            item.discount_price !== null &&
                            <Item
                                key={item.id}
                                data={item}
                                quantityMinusHandler={this.quantityMinusHandler}
                                quantityAddHandler={this.quantityAddHandler}
                                addToCartHandler={this.addToCartHandler}
                            />
                        ))
                    }
                </div>
                <div className="checkout-inner-content-area mb-5">
                    <h4 className="ticket-name">Package Offers</h4>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart
})
export default connect(mapStateToProps, { addToCart })(TicketItem)
