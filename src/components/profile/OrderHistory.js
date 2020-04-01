import React, { Component, Fragment } from 'react'
import { API_URL } from '../../store/actions/types'
import Axios from 'axios'
import { connect } from 'react-redux';
import { priceCal, priceFormat } from '../../util/helper';
import dateFormat from 'dateformat';
import Moment from 'react-moment';


class OrderHistory extends Component {
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
    downloadPdf = invoice => {
        window.location.href = `${API_URL}api/order-history-pdf/${invoice}`;
    }
    render() {
        let { sales, salesDetails, rides, roomBooks } = this.state
        return (
            <Fragment>
                <div className="ordered-info-user">
                    <h3>Order History :</h3>
                    <div className="accordion mgtop16 faq-area" data-wow-delay=".2s" id="accordionExample">
                        {Object.keys(sales).length !== 0 &&
                            sales.map((sale, index) =>
                                <div className="card faq-inner-content" key={sale.id + '-' + index}>
                                    <div className="card-header faq-heading" id="headingOne">
                                        <a data-toggle="collapse" className={index !== 0 ? "collapsed" : ''} data-target={`#collapseOne-${sale.id}`} href="#blank" aria-expanded="true" aria-controls={`collapseOne-${sale.id}`}>
                                            {sale.invoice} | <Moment format="D MMM YYYY" withTitle>
                                                {sale.created_at}
                                            </Moment> | <i className="fa fa-download" onClick={() => this.downloadPdf(sale.invoice)} />
                                        </a>
                                    </div>
                                    <div id={`collapseOne-${sale.id}`} className={index === 0 ? "collapse show" : "collapse"} aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div className="card-body faq-body">
                                            {salesDetails.filter(detail => Number(detail.sales_id) === sale.id).map(sDetail => (
                                                Number(sDetail.type) === 1 ?
                                                    rides.map(ride => (
                                                        ride.id === Number(sDetail.ride_id) &&
                                                        <div key={ride.id}>
                                                            {<div className="row user-order-info" key={ride.id}>
                                                                <div className="col-md-3"><img src={API_URL + ride.image} alt="RideImage" width="100" /></div>
                                                                <div className="col-md-7">{ride.title}</div>
                                                                <div className="col-md-2">{priceFormat(sDetail.price)}</div>
                                                            </div>}
                                                        </div>
                                                    ))
                                                    : roomBooks.map(room => (
                                                        Number(sDetail.room_booking_id) === room.id &&
                                                        <div className="row user-order-info" key={room.id}>
                                                            <div className="col-md-2"><img src={API_URL + room.image} alt="RideImage" width="100" /></div>
                                                            <div className="col-md-2">{room.title}</div>
                                                            <div className="col-md-4">
                                                                {dateFormat(room.check_in, "dd-mm-yyyy")} <br />
                                                                {dateFormat(room.check_out, "dd-mm-yyyy")}
                                                            </div>
                                                            <div className="col-md-2">
                                                                Room: {room.no_of_room} <br />
                                                                Person: {room.no_of_guest}
                                                            </div>
                                                            <div className="col-md-2">{priceFormat(priceCal(room.price, (room.vat + room.service_charge), room.discount))}</div>
                                                        </div>
                                                    ))
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps)(OrderHistory)