import React from 'react'
import { priceCal } from '../../util/helper'
import BookingForm from './BookingForm';

class PriceBoard extends React.Component {
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
    render() {
        let { price, vat, discount, service_charge, no_of_room } = this.props.data
        let totalDay = 0
        let totalRoom = 1
        if (this.props.searchData.totalDay) {
            totalDay = this.props.searchData.totalDay
        }
        if (this.props.searchData.no_of_room) {
            totalRoom = this.props.searchData.no_of_room
        }
        return (
            <div className="col-lg-4 col-md-4">
                <div className="atlantis-booking-ticket-area">
                    {totalDay > 0 ?
                        <div className="atlantis-booking-content mb-3">
                            <h5 className="atlantis-booking-price">{totalRoom} Rooms for {totalDay} Night(s)</h5>
                            <h2 className="atlantis-bd-price">৳{(price * totalRoom) * totalDay}</h2>
                            {discount !== 0 && <h5 className="atlantis-booking-price">Discount: {discount * totalDay}%</h5>}
                            <h5 className="atlantis-booking-price">Vat: {`${vat}%`}</h5>
                            <h5 className="atlantis-booking-price">Service Charge: {`${service_charge * totalDay}%`}</h5>
                            <h3 className="atlantis-booking-price"><i className="fa fa-coffee" /> Breakfast included</h3>
                            <h4 className="atlantis-free-collection mb-3">Total Amount: ৳{priceCal(((price * totalRoom) * totalDay), vat, discount)}</h4>
                            <button onClick={() => this.openModal(this.props.data)} className="atlantis-book-now-btn btn"><i className="fa fa-check-square-o" /> Book Now</button>
                        </div> :
                        <div className="atlantis-booking-content mb-3">
                            <h5 className="atlantis-booking-price">Price per night as low as</h5>
                            <h2 className="atlantis-bd-price">৳{price}</h2>
                            {discount !== 0 && <h5 className="atlantis-booking-price">Discount: {discount}%</h5>}
                            <h5 className="atlantis-booking-price">Vat: {`${vat}%`}</h5>
                            <h5 className="atlantis-booking-price">Service Charge: {`${service_charge}%`}</h5>
                            <h5 className="atlantis-booking-price">Total Rooms: {no_of_room}</h5>
                            <h3 className="atlantis-booking-price"><i className="fa fa-coffee" /> Breakfast included</h3>
                            <h4 className="atlantis-free-collection mb-3">Total Amount: ৳{priceCal(price, (vat + service_charge), discount)}</h4>
                            <button onClick={() => this.props.gotToTop()} className="atlantis-book-now-btn btn secondary-btn"><i className="fa fa-search" /> Check Availability</button>
                        </div>
                    }
                </div>
                <BookingForm
                    isOpen={this.state.isModalOpen}
                    isClose={this.closeModal}
                    detailData={this.props.data}
                    history={this.props.history}
                    totalPrice={totalDay > 0 ? priceCal(((price * totalRoom) * totalDay), vat, discount) : 0}
                />
            </div>
        )
    }
}
export default PriceBoard
