import React from 'react'
import { priceCal, priceFormat } from '../../util/helper'
import BookingForm from './BookingForm';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
        let { data, searchData } = this.props
        let { price, vat, discount, service_charge, no_of_room } = data
        let totalDay = 0
        let totalRoom = 1
        if (this.props.searchData.totalDay) {
            totalDay = this.props.searchData.totalDay
        }
        if (this.props.searchData.no_of_room) {
            totalRoom = this.props.searchData.no_of_room
        }
        if (Object.keys(searchData).length !== 0) {
            let no_of_guest = Number(searchData.no_of_guest)
            if (no_of_guest > 2) {
                no_of_guest = no_of_guest - 2
                price = price + (no_of_guest * 1300)
            }
        }

        return (
            <div className="col-lg-4 col-md-4">
                <div className="atlantis-booking-ticket-area">
                    {totalDay > 0 ?
                        <div className="atlantis-booking-content mb-3">
                            <h5 className="atlantis-booking-price">{totalRoom} Rooms for {totalDay} Night(s)</h5>
                            <h2 className="atlantis-bd-price">{priceFormat((price * totalRoom) * totalDay)}</h2>
                            {discount !== 0 && <h5 className="atlantis-booking-price">Discount: {discount * totalDay}%</h5>}
                            <h5 className="atlantis-booking-price">Vat: {`${vat}%`}</h5>
                            <h5 className="atlantis-booking-price">Service Charge: {`${service_charge * totalDay}%`}</h5>
                            <h3 className="atlantis-booking-price"><i className="fa fa-caffee" /> Breakfast included</h3>
                            <h4 className="atlantis-free-collection mb-3">Total Amount: {priceFormat(priceCal(((price * totalRoom) * Number(totalDay)), vat, discount))}
                            </h4>
                            {this.props.auth.isAuth ?
                                <button onClick={() => this.openModal(this.props.data)} className="atlantis-book-now-btn btn">Book Now</button>
                                : <Link to={`${process.env.PUBLIC_URL}/login`} className="atlantis-book-now-btn btn">Sign In</Link>
                            }
                        </div> :
                        <div className="atlantis-booking-content mb-3">
                            <h5 className="atlantis-booking-price">Price per night as low as</h5>
                            <h2 className="atlantis-bd-price">{priceFormat(price)}</h2>
                            {discount !== 0 && <h5 className="atlantis-booking-price">Discount: {discount}%</h5>}
                            <h5 className="atlantis-booking-price">Vat: {`${vat}%`}</h5>
                            <h5 className="atlantis-booking-price">Service Charge: {`${service_charge}%`}</h5>
                            <h5 className="atlantis-booking-price">Total Rooms: {no_of_room}</h5>
                            <h4 className="atlantis-free-collection mb-3">Total Amount: {priceFormat(priceCal(price, (Number(vat) + Number(service_charge)), discount))}</h4>
                            <button onClick={() => this.props.gotToTop()} className="atlantis-book-now-btn btn secondary-btn">Check Availability</button>
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
const mapStateToProps = state => ({
    auth: state.auth,
})
export default connect(mapStateToProps)(PriceBoard)
