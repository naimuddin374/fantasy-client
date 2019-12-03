import React from 'react'
import Axios from 'axios'
import { API_URL } from '../../store/actions/types'
import { textLimit } from './../../util/helper';
import Details from './Details'

class Item extends React.Component {
    state = {
        isModalOpen: false,
        detailData: {},
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
    minusButtonHandler = (quantity) => {
        if (quantity > 0) {
            return false
        }
        return true
    }
    render() {
        let { title, description, adult_quantity, kids_quantity, price, id, type, isInCart, image } = this.props.data
        return (
            <div>
                <div className="single-prodcut-content-ticket ticket-product-bg ticket-prodcut-padding mb-3">
                    <div className="product-increment-decrement">
                        <div className="prodcut-info">
                            <ul>
                                <li>
                                    <img src={image ? API_URL + image : `${process.env.PUBLIC_URL}/assets/images/no-image-available.jpg`} alt="Ticket purchase logo" style={{ height: '60px' }} />
                                </li>
                            </ul>
                            <h4 className="pt-3">{title}</h4>
                            <p>{textLimit(description, 40)}</p>
                        </div>
                        <div className="single-product-increment-decrement">
                            <div className="product-quantity-content">
                                {type === "1" &&
                                    <div>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td className="pro-quantity">
                                                        <div className="pro-qty ml-4">
                                                            <button className="dec qtybtn" disabled={this.minusButtonHandler(adult_quantity)} onClick={() => this.props.quantityMinusHandler(id, 1)}>-</button>
                                                            <input type="number" value={adult_quantity} readOnly />
                                                            <button className="inc qtybtn" disabled={adult_quantity === 15} onClick={() => this.props.quantityAddHandler(id, 1)}>+</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </thead>
                                        </table>
                                        <h4 className="product-price">৳{price}</h4>
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
                                                    <button className="dec qtybtn" disabled={this.minusButtonHandler(kids_quantity)} onClick={() => this.props.quantityMinusHandler(id, 2)}>-</button>
                                                    <input type="number" name="quantity" value={kids_quantity} readOnly />
                                                    <button className="inc qtybtn" disabled={kids_quantity === 15} onClick={() => this.props.quantityAddHandler(id, 2)}>+</button>
                                                </div>
                                            </td>
                                        </tr>
                                    </thead>
                                </table>
                                <h4 className="product-price">৳{price}</h4>
                                <p>Kids (below 4) reg</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-details-cart-btn mt-25">
                        <div className="prodcut-details-btn">
                            <a className="details-ancor link-btn" onClick={() => this.openModal(this.props.data)}>Details</a>
                        </div>
                        <div className="prodcut-add-to-cart">
                            {isInCart !== true ?
                                <button className="disable-payment-btn" onClick={() => this.props.addToCartHandler(this.props.data, type)}>Add to Cart</button>
                                : <button className="disable-payment-btn">Already In Cart</button>
                            }
                        </div>
                    </div>
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

export default Item
