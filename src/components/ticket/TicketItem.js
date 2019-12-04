import React from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import { addToCart } from '../../store/actions/cartActions';
import { API_URL } from '../../store/actions/types';
import ItemList from './ItemList';

class TicketItem extends React.Component {
    state = {
        rides: {},
    }
    componentDidMount() {
        Axios.get(`${API_URL}api/all-ticket`)
            .then(res => {
                let allItem = []
                if (Object.keys(res.data).length !== 0) {
                    // Check if selected any ticket from another page
                    let paramId = this.props.paramId
                    if (paramId !== undefined) {
                        let selItem = res.data.filter(item => item.id === Number(paramId))
                        allItem = res.data.filter(item => item.id !== Number(paramId))
                        allItem.unshift(...selItem)
                    } else {
                        allItem = res.data
                    }
                }
                let rides = this.props.cart.rides
                if (Object.keys(rides).length === 0) {
                    this.setState({
                        rides: allItem
                    })
                } else {
                    // Check this item already in cart set isInCart true of false
                    let newRideArr = allItem.map(item => {
                        let cartCheck = rides.filter(ride => ride.id === item.id)
                        let newObj = {
                            isInCart: false
                        }
                        if (Object.keys(cartCheck).length !== 0) {
                            newObj = {
                                isInCart: false,
                                kids_quantity: cartCheck[0].kids_quantity,
                                adult_quantity: cartCheck[0].adult_quantity,
                            }
                        }
                        return {
                            ...item,
                            ...newObj
                        }
                    })
                    this.setState({
                        rides: newRideArr
                    })
                }

            })
    }

    // Manage Plus item quantity
    quantityAddHandler(id, type) {
        // Set item quantity in state 
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

        // Manage quantity in cart 
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

        // Set new value in state after minus quantity 
        let quantityManArr = this.state.rides.map(item => {
            return {
                ...item,
                kids_quantity: (item.id === id && type === 2) ? Number(item.kids_quantity) - 1 : Number(item.kids_quantity),
                adult_quantity: (item.id === id && type === 1) ? Number(item.adult_quantity) - 1 : Number(item.adult_quantity)
            }
        })
        this.setState({
            rides: quantityManArr
        })

        // Manage cart if have this item already in cart
        if (Object.keys(this.props.cart.rides).length !== 0) {
            let selItem = this.props.cart.rides.filter(item => item.id === id)
            if (Object.keys(selItem).length !== 0) {

                // If new quantity 0
                if ((selItem[0].kids_quantity === 1 && selItem[0].adult_quantity === 0) || (selItem[0].kids_quantity === 0 && selItem[0].adult_quantity === 1)) {
                    let newArr = this.props.cart.rides.filter(item => item.id !== id)
                    this.props.addToCart(newArr)
                    let newStateArr = quantityManArr.map(item => {
                        return {
                            ...item,
                            isInCart: item.id === id ? false : item.isInCart
                        }
                    })
                    this.setState({
                        rides: newStateArr
                    })
                } else {
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
    }
    addToCartHandler(data) {
        // Check quantity 
        if (data.adult_quantity === 0 && data.kids_quantity === 0) {
            data.kids_quantity = 1
        }
        // Add first item in cart
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

        // Set isInCart in state
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
            <div className="col-lg-9 col-md-12">
                <ItemList
                    rides={rides}
                    paramId={this.props.paramId}
                    quantityMinusHandler={this.quantityMinusHandler.bind(this)}
                    quantityAddHandler={this.quantityAddHandler.bind(this)}
                    addToCartHandler={this.addToCartHandler.bind(this)}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart,
})
export default connect(mapStateToProps, { addToCart })(TicketItem)