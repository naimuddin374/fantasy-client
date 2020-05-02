import React from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../../store/actions/types'
import { textLimit, priceFormat } from '../../util/helper'
import Details from './Details'


class Item extends React.Component {
    state = {
        isModalOpen: false,
        detailData: {}
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
    render() {
        let { id, title, price, image, description } = this.props.data
        return (
            <div className="col-lg-4 col-md-6" key={id}>
                <div className="single-thing-to-do-content single-advanture-ride popular-item-border">
                    <img src={image && API_URL + image} alt="advanture img" className="things-to-do-img" />
                    {/* <div className="popular-item">
                        <span className="offer-shape">
                            {is_buy ? 'Ride' : 'Complimentary'}
                        </span>
                    </div> */}
                    <div className="thing-to-do-inner-content">
                        <div className="t-top-content">
                            <div className="t-title-content">
                                <p className="t-tile">{textLimit(title, 20)}</p>
                                <p className="t-tile offer-price">Price: {priceFormat(price)}</p>
                            </div>
                        </div>
                        <p>{textLimit(description, 65)}</p>
                        <div className="t-bottom-content">
                            <div className="t-viewdetails-content">
                                <span className="view-gallery link-btn" onClick={() => this.openModal(this.props.data)}>Read More</span>
                            </div>
                            <div className="t-ticket-btn-content">
                                <Link to={`${process.env.PUBLIC_URL}/ticket/${id}`} className="payment-btn">Buy Ticket</Link>
                            </div>
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
