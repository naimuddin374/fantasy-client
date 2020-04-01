import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dateFormat from 'dateformat';
import { connect } from 'react-redux';
import { searchRoom } from '../../store/actions/roomActions'

class RoomSearch extends React.Component {
    state = {
        checkIn: null,
        checkOut: null,
        no_of_room: 1,
        no_of_guest: 2,
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
        this.props.searchHandler()
        let { no_of_guest, no_of_room, checkIn, checkOut } = this.state
        let check_in = dateFormat(checkIn, "yyyy-mm-dd")
        let check_out = dateFormat(checkOut, "yyyy-mm-dd")

        let res = Math.abs(checkOut - checkIn) / 1000;
        let days = Math.floor(res / 86400);
        this.props.searchRoom({ check_in, check_out, no_of_room, no_of_guest, totalDay: days })
    }
    datediff = (first, second) => {
        return Math.round((second - first) / (1000 * 60 * 60 * 24));
    }
    render() {
        let { checkIn, checkOut, no_of_room, no_of_guest } = this.state
        let totalDay = this.datediff(checkIn, checkOut)
        let isDone = checkIn && checkOut && no_of_room > 0 && no_of_guest > 0 && totalDay > 0
        console.log(no_of_room)
        return (
            <section className="breadcrum-area atlantis-feature-img relative atlantis-breadcrumb-area">
                <div className="breadcrum-feature-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="breadcrum-wrapper atlantics-bredcrumb text-center mb-5">
                                <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">Recreation with Excitement</h2>
                                <p className="text-white mt-3 wow fadeInUp" data-wow-delay=".6s">Welcoming everyone with a smile</p>
                            </div>
                            <div className="atlantis-search-area">
                                <h3 className="mb-3">Plan your stay at Resort Atlantis</h3>
                                <form onSubmit={this.submitHandler}>
                                    <div className="row">
                                        <div className="col-md-3 no-margin-res">
                                            <label htmlFor="checkIn">Check In Date: </label>
                                            <DatePicker
                                                id="checkIn"
                                                className='form-control'
                                                placeholder="Check In Date"
                                                selected={checkIn}
                                                onChange={this.checkInHandleChange}
                                                dateFormat="dd MMMM yyyy"
                                                autoComplete="off"
                                            />
                                        </div>
                                        <div className="col-md-3 no-margin-res">
                                            <label htmlFor="checkOut">Check Out Date: </label>
                                            <DatePicker
                                                popoverTargetAttachment='top right'
                                                id="checkOut"
                                                className='form-control'
                                                placeholder="Check Out Date"
                                                selected={checkOut}
                                                minDate={checkIn}
                                                onChange={this.checkOutHandleChange}
                                                dateFormat="dd MMMM yyyy"
                                                autoComplete="off"
                                            />
                                        </div>
                                        <div className="col-md-2 no-margin-res">
                                            <label htmlFor="no_of_room">Room: </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="no_of_room"
                                                name="no_of_room"
                                                value={no_of_room}
                                                onChange={this.changeHandler}
                                            />
                                            <i className="fa fa-sort-up input-value-up-arrow"
                                                onClick={() => this.setState({ no_of_room: no_of_room + 1 })}
                                            />
                                            <i className="fa fa-sort-down input-value-down-arrow"
                                                onClick={() => this.setState({ no_of_room: no_of_room - 1 })}
                                            />
                                        </div>
                                        <div className="col-md-2 no-margin-res">
                                            <label htmlFor="no_of_guest">Adult: </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="no_of_guest"
                                                name="no_of_guest"
                                                value={no_of_guest}
                                                onChange={this.changeHandler}
                                            />
                                            <i className="fa fa-sort-up input-value-up-arrow"
                                                onClick={() => this.setState({ no_of_guest: no_of_guest + 1 })}
                                            />
                                            <i className="fa fa-sort-down input-value-down-arrow"
                                                onClick={() => this.setState({ no_of_guest: no_of_guest - 1 })}
                                            />
                                        </div>
                                        <div className="col-md-2 room-search-btn-atlantics" style={{ top: "36px" }}>
                                            <button type="submit" className={isDone ? "atlantis-search-btn" : "atlantis-search-btn btn-disabled"} disabled={!isDone}> Check Availability</button>
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
export default connect(null, { searchRoom })(RoomSearch)
