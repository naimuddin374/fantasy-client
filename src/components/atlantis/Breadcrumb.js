import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dateFormat from 'dateformat';
import { connect } from 'react-redux';
import { searchRoom } from '../../store/actions/roomActions'


class Breadcrumb extends React.Component {
    state = {
        detailData: {},
        no_of_guest: 2,
        no_of_room: 2,
        checkIn: new Date('2019-12-15'),
        checkOut: new Date('2019-12-20'),
    }
    checkInHandleChange = date => {
        this.setState({
            checkIn: date
        });
    }
    checkOutHandleChange = date => {
        this.setState({
            checkOut: date
        });
    }
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitHandler = event => {
        event.preventDefault()
        let { no_of_guest, no_of_room, checkIn, checkOut } = this.state
        let check_in = dateFormat(checkIn, "yyyy-mm-dd")
        let check_out = dateFormat(checkOut, "yyyy-mm-dd")
        this.props.searchRoom({ no_of_guest, no_of_room, check_in, check_out })
        // this.props.isClose()
    }
    render() {
        let { checkIn, checkOut, no_of_guest, no_of_room } = this.state
        return (
            <section className="breadcrum-area atlantis-feature-img relative atlantis-breadcrumb-area">
                <div className="breadcrum-feature-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="breadcrum-wrapper text-center mb-5">
                                <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">Recreation with Excitement</h2>
                                <p className="text-white mt-3 wow fadeInUp" data-wow-delay=".6s">Welcoming everyone with a smile</p>
                            </div>
                            <div className="atlantis-search-area">
                                <form onSubmit={this.submitHandler}>
                                    <div className="atlantis-single-search-content calender-date-checking">
                                        <div className="check-in-out-date-content">
                                            <div className="single-date-checking">
                                                <label htmlFor="checkIn">Check In: </label>
                                                <DatePicker
                                                    id="checkIn"
                                                    className='form-control'
                                                    placeholder="Check In Date"
                                                    selected={checkIn}
                                                    onChange={this.checkInHandleChange}
                                                />
                                            </div>
                                            <div className="single-date-checking">
                                                <label htmlFor="checkOut">Check Out: </label>
                                                <DatePicker
                                                    id="checkOut"
                                                    className='form-control'
                                                    placeholder="Check Out Date"
                                                    selected={checkOut}
                                                    onChange={this.checkOutHandleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="atlantis-single-search-content number-guest">

                                        <label htmlFor="no_of_guest">Number of guest</label>
                                        <div className="single-atlantis-park-search">
                                            <div className="atlantis-nice-select">
                                                <input
                                                    type="number"
                                                    placeholder="No of Guest"
                                                    id="no_of_guest"
                                                    name="no_of_guest"
                                                    value={no_of_guest}
                                                    onChange={this.changeHandler}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="atlantis-single-search-content number-room">
                                        <label htmlFor="no_of_room">Number of room </label>
                                        <div className="atlantis-page-search-room">
                                            <div className="atlantis-search-room">
                                                <input
                                                    type="number"
                                                    name="no_of_room"
                                                    id="no_of_room"
                                                    onChange={this.changeHandler}
                                                    placeholder="No of Room"
                                                    value={no_of_room}
                                                />
                                                <button type="submit" className="atlantis-search-btn">Search</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default connect(null, { searchRoom })(Breadcrumb)
