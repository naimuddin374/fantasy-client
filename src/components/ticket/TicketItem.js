import React from 'react'
import Axios from 'axios'
import { API_URL } from '../../store/actions/types'
import { textLimit } from './../../util/helper';
import Details from './Details'
import { connect } from 'react-redux'
import { addToCart } from '../../store/actions/cartActions';

class TicketItem extends React.Component {
    state = {
        isModalOpen: false,
        rides: {},
        detailData: {}
    }
    componentDidMount() {
        Axios.get(`api/ride`)
            .then(res => {
                this.setState({
                    rides: res.data
                })
            })
    }
    openModal = (data) => {
        this.setState({
            isModalOpen: true,
            detailData: data,
        })
    }
    closeModal = () => {
        this.setState({
            isModalOpen: false,
            detailData: {}
        })
    }
    addToCartHandler(data) {
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
    }
    render() {
        let { rides } = this.state
        return (
            <div className="col-lg-9 col-md-12"><div className="checkout-inner-content-area mb-5">
                <h4 className="ticket-name">Regular Tickets</h4>
                {Object.keys(rides).length !== 0 &&
                    rides.map(item => (
                        item.discount_price === null &&
                        <div className="single-prodcut-content-ticket ticket-product-bg ticket-prodcut-padding mb-3" key={item.id}>
                            <div className="product-increment-decrement">
                                <div className="prodcut-info">
                                    <ul>
                                        <li>
                                            <img src={API_URL + item.service_logo} alt="Ticket purchase logo" style={{ height: '60px' }} />
                                        </li>
                                    </ul>
                                    <h4 className="pt-3">{item.title}</h4>
                                    <p>{textLimit(item.description, 40)}</p>
                                </div>
                                <div className="single-product-increment-decrement">
                                    <div className="product-quantity-content">
                                        {item.type === "1" &&
                                            <div>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <td className="pro-quantity">
                                                                <div className="pro-qty ml-4">
                                                                    <button className="dec qtybtn">-</button>
                                                                    <input type="number" defaultValue="2" />
                                                                    <button className="inc qtybtn">+</button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </thead>
                                                </table>
                                                <h4 className="product-price">৳{item.price}</h4>
                                                <p>Adult Entry 3 Rides</p>
                                            </div>
                                        }
                                    </div>
                                    <div className="product-quantity-content">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td className="pro-quantity">
                                                        <div className="pro-qty ml-4">
                                                            <button className="dec qtybtn">-</button>
                                                            <input type="number" defaultValue="1" />
                                                            <button className="inc qtybtn">+</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </thead>
                                        </table>
                                        <h4 className="product-price">৳{item.price}</h4>
                                        <p>Kids (below 4)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="product-details-cart-btn mt-25">
                                <div className="prodcut-details-btn">
                                    <a className="details-ancor" onClick={() => this.openModal(item)}>Details</a>
                                </div>
                                <div className="prodcut-add-to-cart">
                                    <button className="disable-payment-btn" onClick={() => this.addToCartHandler(item)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
                <div className="checkout-inner-content-area mb-5">
                    <h4 className="ticket-name">Discount Ticket</h4>
                    {Object.keys(rides).length !== 0 &&
                        rides.map(item => (
                            item.discount_price !== null &&
                            <div className="single-prodcut-content-ticket ticket-product-bg ticket-prodcut-padding mb-3" key={item.id}>
                                <div className="product-increment-decrement">
                                    <div className="prodcut-info">
                                        <ul>
                                            <li>
                                                <img src="./assets/images/ticketpurchase/fantasy.png" alt="ticket purchase logo" />
                                            </li>
                                        </ul>
                                        <h4 className="pt-3">{item.title}</h4>
                                        <p>{textLimit(item.description, 40)}</p>
                                    </div>
                                    <div className="single-product-increment-decrement">
                                        <div className="product-quantity-content">
                                            {item.type === "1" &&
                                                <div>
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <td className="pro-quantity">
                                                                    <div className="pro-qty ml-4">
                                                                        <button className="dec qtybtn">-</button>
                                                                        <input type="number" defaultValue="2" />
                                                                        <button className="inc qtybtn">+</button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                    <h4 className="product-price">৳{item.price}</h4>
                                                    <p>Adult Entry 3 Rides</p>
                                                </div>
                                            }
                                        </div>
                                        <div className="product-quantity-content">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <td className="pro-quantity">
                                                            <div className="pro-qty ml-4">
                                                                <button className="dec qtybtn">-</button>
                                                                <input type="number" defaultValue="1" />
                                                                <button className="inc qtybtn">+</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </thead>
                                            </table>
                                            <h4 className="product-price">৳{item.price}</h4>
                                            <p>Kids (below 4)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-details-cart-btn mt-25">
                                    <div className="prodcut-details-btn">
                                        <a href="#" className="details-ancor" onClick={() => this.openModal(item)}>Details</a>
                                    </div>
                                    <div className="prodcut-add-to-cart">
                                        <button className="disable-payment-btn">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="checkout-inner-content-area mb-5">
                    <h4 className="ticket-name">Package Offers</h4>
                </div>

                <Details
                    isOpen={this.state.isModalOpen}
                    isClose={this.closeModal}
                    detailData={this.state.detailData}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart
})
export default connect(mapStateToProps, { addToCart })(TicketItem)
