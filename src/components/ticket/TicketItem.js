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
                    if (paramId !== undefined && !isNaN(paramId)) {
                        let selItem = res.data.filter(item => item.id === Number(paramId))
                        allItem = res.data.filter(item => item.id !== Number(paramId))

                        // Add default in cart
                        selItem[0].isInCart = true
                        selItem[0].quantity = 1
                        allItem.unshift(...selItem)
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

    // Manage item quantity
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
    static getDerivedStateFromProps(nextProps, prevState) {
        if (JSON.stringify(nextProps.cart.rides) === JSON.stringify(prevState.rides)) return null
        return {
            rides: nextProps.cart.rides,
        }
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