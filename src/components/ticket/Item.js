import React, { Component, Fragment } from 'react'
import { API_URL } from '../../store/actions/types'
import { textLimit } from './../../util/helper';
import Details from './Details'


class Item extends Component {
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
        if (quantity > 1) {
            return false
        }
        return true
    }
    render() {
        let { title, description, quantity, price, discount_price, id, isInCart, image } = this.props.data
        return (
            <Fragment>
                <div className="single-prodcut-content-ticket ticket-product-bg ticket-prodcut-padding mb-3">
                    <div className="product-increment-decrement">
                        <div className="prodcut-info">
                            <div className="row">
                                <div className="col-lg-3">
                                    <img src={image ? API_URL + image : `${process.env.PUBLIC_URL}/assets/images/no-image-available.jpg`} alt="Ticket purchase logo" style={{ height: '150px' }} />
                                </div>

                                <div className="col-lg-6">
                                    <h4>{title}</h4>
                                    <p>{textLimit(description, 80)}</p>
                                    <hr/>
                                    <div className="prodcut-details-btn">
                                        <span className="details-ancor link-btn" onClick={() => this.openModal(this.props.data)}>Details</span>
                                    </div>
                                </div>

                                <div className="col-lg-3">
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
                                    <div className="prodcut-add-to-cart">
                                        {isInCart !== true ?
                                            <button className="primary-btn" onClick={() => this.props.addToCartHandler(id)}>Add to Cart</button>
                                            : <button className="disable-btn">Added In Cart</button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Details
                    isOpen={this.state.isModalOpen}
                    isClose={this.closeModal}
                    detailData={this.state.detailData}
                />
            </Fragment>
        )
    }
}

export default Item
