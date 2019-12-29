import React from 'react'
import { API_URL } from '../../store/actions/types'
import Axios from 'axios'
import { connect } from 'react-redux';
import Collapsible from 'react-collapsible';
import { priceCal } from '../../util/helper';

class OrderHistory extends React.Component {
    state = {
        sales: {},
        salesDetails: {},
        rides: {},
        roomBooks: {}
    }
    UNSAFE_componentWillMount() {
        Axios.get(`${API_URL}api/order-history/${this.props.auth.user.id}`)
            .then(res => {
                this.setState({
                    sales: res.data.sales,
                    salesDetails: res.data.salesDetails,
                    rides: res.data.rides,
                    roomBooks: res.data.roomBooks,
                })
            })
            .catch(err => console.log(err.response))
    }
    render() {
        let { sales, salesDetails, rides, roomBooks } = this.state
        return (
            <div className="ordered-info-user">
                <h3>Ordered History :</h3>
                {Object.keys(sales).length !== 0 ?
                    sales.map(sale => (
                        <Collapsible key={sale.id} trigger={`৳${sale.total_price} | ${sale.created_at}`}>
                            {salesDetails.map(sDetail => (
                                sDetail.type === 1 ?
                                    rides.map(ride => (
                                        ride.id === sDetail.ride_id &&
                                        <div key={ride.id}>
                                            {<div className="row user-order-info" key={ride.id}>
                                                <div className="col-md-2"><img src={API_URL + ride.image} alt="RideImage" width="100" /></div>
                                                <div className="col-md-4">{ride.title}</div>
                                                <div className="col-md-2">Quantity: {ride.quantity}</div>
                                                <div className="col-md-2">Discount: {ride.discount}</div>
                                                <div className="col-md-2">৳{ride.price}</div>
                                            </div>}
                                        </div>
                                    ))
                                    : roomBooks.map(room => (
                                        sDetail.room_booking_id === room.id &&
                                        <div className="row user-order-info" key={room.id}>
                                            <div className="col-md-2"><img src={API_URL + room.image} alt="RideImage" width="100" /></div>
                                            <div className="col-md-2">{room.title}</div>
                                            <div className="col-md-2">Check In: {room.check_in}</div>
                                            <div className="col-md-2">Check Out: {room.check_out}</div>
                                            <div className="col-md-1">Room: {room.no_of_room}</div>
                                            <div className="col-md-1">Person: {room.no_of_guest}</div>
                                            <div className="col-md-2">৳{priceCal(room.price, (room.vat + room.service_charge), room.discount)}</div>
                                        </div>
                                    ))
                            ))}
                        </Collapsible>
                    ))
                    : <h2>No records</h2>
                }
            </div>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps)(OrderHistory)