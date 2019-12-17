import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dateFormat from 'dateformat';
import { connect } from 'react-redux';
import { searchRoom } from '../../store/actions/roomActions'


class RoomSearch extends React.Component {
    state = {
        checkIn: new Date('2019-12-15'),
        checkOut: new Date('2019-12-20'),
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
        this.props.searchRoom({ check_in, check_out, no_of_room, no_of_guest })
    }
    render() {
        let { checkIn, checkOut, no_of_room, no_of_guest } = this.state
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
                                <h3 className="mb-3">When would you like to stay at Resort Atlantis?</h3>
                                <form onSubmit={this.submitHandler}>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <label htmlFor="checkIn">Check In Date: </label>
                                            <DatePicker
                                                id="checkIn"
                                                className='form-control'
                                                placeholder="Check In Date"
                                                selected={checkIn}
                                                onChange={this.checkInHandleChange}
                                            />
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="checkOut">Check Out Date: </label>
                                            <DatePicker
                                                id="checkOut"
                                                className='form-control'
                                                placeholder="Check Out Date"
                                                selected={checkOut}
                                                onChange={this.checkOutHandleChange}
                                            />
                                        </div>
                                        <div className="col-md-2">
                                            <label htmlFor="no_of_room">Room: </label>
                                            <select
                                                className="form-control"
                                                id="no_of_room"
                                                name="no_of_room"
                                                defaultValue={no_of_room}
                                                onChange={this.changeHandler}
                                            >
                                                <option value="0">Room</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                            </select>
                                        </div>
                                        <div className="col-md-2">
                                            <label htmlFor="no_of_guest">Adult: </label>
                                            <select
                                                className="form-control"
                                                id="no_of_guest"
                                                name="no_of_guest"
                                                defaultValue={no_of_guest}
                                                onChange={this.changeHandler}
                                            >
                                                <option value="0">Adult</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                            </select>
                                        </div>
                                        <div className="col-md-2" style={{ top: "36px" }}>
                                            <button type="submit" className="atlantis-search-btn">Check Availability</button>
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
