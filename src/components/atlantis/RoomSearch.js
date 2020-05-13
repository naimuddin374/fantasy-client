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
        isWait: false
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
        if ((event.target.name === "no_of_room" || event.target.name === "no_of_guest") && event.target.value < 1) return false
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitHandler = async event => {
        event.preventDefault()
        this.setState({ isWait: true })
        let { searchHandler, searchRoom } = this.props

        let { no_of_guest, no_of_room, checkIn, checkOut } = this.state
        let check_in = dateFormat(checkIn, "yyyy-mm-dd")
        let check_out = dateFormat(checkOut, "yyyy-mm-dd")

        let res = Math.abs(checkOut - checkIn) / 1000;
        let days = Math.floor(res / 86400);
        let response = await searchRoom({ check_in, check_out, no_of_room, no_of_guest, totalDay: days })
        if (response) {
            searchHandler()
        }
        this.setState({ isWait: false })
    }
    datediff = (first, second) => {
        return Math.round((second - first) / (1000 * 60 * 60 * 24));
    }
    render() {
        let { checkIn, checkOut, no_of_room, no_of_guest, isWait } = this.state
        let totalDay = this.datediff(checkIn, checkOut)
        let isDone = checkIn && checkOut && no_of_room > 0 && no_of_guest > 0 && totalDay > 0
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
                                                className="form-control form-width-90"
                                                id="no_of_room"
                                                name="no_of_room"
                                                value={no_of_room}
                                                onChange={this.changeHandler}
                                                min="1"
                                            />
                                            <i className="fa fa-sort-up input-value-up-arrow"
                                                onClick={() => this.setState({ no_of_room: no_of_room + 1 })}
                                            />
                                            <i className="fa fa-sort-down input-value-down-arrow"
                                                onClick={() => no_of_room > 1 && this.setState({ no_of_room: no_of_room - 1 })}
                                            />
                                        </div>
                                        <div className="col-md-2 no-margin-res">
                                            <label htmlFor="no_of_guest">Adult: </label>
                                            <input
                                                type="number"
                                                className="form-control form-width-90"
                                                id="no_of_guest"
                                                name="no_of_guest"
                                                value={no_of_guest}
                                                onChange={this.changeHandler}
                                                min="1"
                                            />
                                            <i className="fa fa-sort-up input-value-up-arrow"
                                                onClick={() => this.setState({ no_of_guest: no_of_guest + 1 })}
                                            />
                                            <i className="fa fa-sort-down input-value-down-arrow"
                                                onClick={() => no_of_guest > 1 && this.setState({ no_of_guest: no_of_guest - 1 })}
                                            />
                                        </div>
                                        <div className="col-md-2 room-search-btn-atlantics" style={{ top: "36px" }}>
                                            <button type="submit" className={isDone ? "atlantis-search-btn" : "atlantis-search-btn btn-disabled"} disabled={!isDone}>{isWait ? 'Please Wait...' : 'Check Availability'} </button>
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
