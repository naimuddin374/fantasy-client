import React from 'react'
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
        let { title, description, quantity, price, discount_price, id, isInCart, image } = this.props.data
        return (
            <div>
                <div className="single-prodcut-content-ticket ticket-product-bg ticket-prodcut-padding mb-3">
                    <div className="product-increment-decrement">
                        <div className="prodcut-info">
                            <ul>
                                <li>
                                    <img src={image ? API_URL + image : `${process.env.PUBLIC_URL}/assets/images/no-image-available.jpg`} alt="Ticket purchase logo" style={{ height: '90px' }} />
                                </li>
                                <li><h4>{title}</h4></li>
                            </ul>
                            <p>{textLimit(description, 70)}</p>
                        </div>
                        <div className="single-product-increment-decrement">
                            <div className="product-quantity-content text-center">
                                <div className="pro-quantity">
                                    <div className="pro-qty">
                                        <button className="dec qtybtn" disabled={this.minusButtonHandler(quantity)} onClick={() => this.props.quantityMinusHandler(id)}>-</button>
                                        <input type="number" name="quantity" value={quantity} readOnly />
                                        <button className="inc qtybtn" disabled={quantity === 15} onClick={() => this.props.quantityAddHandler(id)}>+</button>
                                    </div>
                                </div>
                                <h4 className="product-price">৳{discount_price !== null ? discount_price : price}</h4>
                                <p>Child (below 4) reg</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-details-cart-btn mt-25">
                        <div className="prodcut-details-btn">
                            <span className="details-ancor link-btn" onClick={() => this.openModal(this.props.data)}>Details</span>
                        </div>
                        <div className="prodcut-add-to-cart">
                            {isInCart !== true ?
                                <button className="primary-btn" onClick={() => this.props.addToCartHandler(id)}>Add to Cart</button>
                                : <button className="disable-btn">Added In Cart</button>
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
