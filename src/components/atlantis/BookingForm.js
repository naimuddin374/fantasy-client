import React from 'react';
import Modal from 'react-modal'
import { connect } from 'react-redux';
import { storeRoomBooking } from '../../store/actions/roomActions';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dateFormat from 'dateformat';
import Axios from 'axios'
import { API_URL } from '../../store/actions/types';

class BookingForm extends React.Component {
    state = {
        detailData: {},
        room_id: this.props.detailData.id,
        full_name: 'MD FOYSAL',
        contact_no: '88017546525',
        email: 'FOYSAL@GMAIL.COM',
        address: 'Dhaka, BD',
        no_of_guest: 2,
        checkIn: new Date('2019-12-15'),
        checkOut: new Date('2019-12-20'),
        status: 0,
        isAvailable: false,
        flashMessage: null
    }
    UNSAFE_componentWillReceiveProps(props) {
        this.setState({
            detailData: props.detailData,
        })
    }
    componentDidMount() {
        Modal.setAppElement('body');
    }
    checkInHandleChange = date => {
        let check_in = dateFormat(date, "yyyy-mm-dd")
        if (check_in) {
            Axios.post(`${API_URL}api/check-room-booking`, { check_in, room_id: this.props.detailData.id })
                .then(res => {
                    if (res.data.status === 1) {
                        this.setState({
                            checkIn: date,
                            isAvailable: true,
                            flashMessage: null
                        });
                    } else {
                        this.setState({
                            isAvailable: false,
                            flashMessage: res.data.message
                        });
                    }
                })
                .catch(err => {
                    console.log(err.response)
                    this.setState({
                        isAvailable: false
                    });
                })
        }

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
        let { room_id, full_name, contact_no, email, address, no_of_guest, checkIn, checkOut } = this.state
        let total_day = Math.ceil(Math.abs(checkOut - checkIn) / (1000 * 60 * 60 * 24));
        let check_in = dateFormat(checkIn, "yyyy-mm-dd")
        let check_out = dateFormat(checkOut, "yyyy-mm-dd")
        let user_id = localStorage.getItem('auth_token')
        this.props.storeRoomBooking({ room_id, full_name, contact_no, email, address, no_of_guest, check_in, check_out, total_day, user_id, status: 0 }, this.props.history, this.props.detailData)
        // this.props.isClose()
    }
    render() {
        const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                width: "70%",
                transform: 'translate(-50%, -50%)',
                color: "#000",
                border: "none"
            }
        }
        let { detailData, checkIn, checkOut, full_name, contact_no, email, address, no_of_guest, isAvailable, flashMessage } = this.state
        let isDone = checkIn && checkOut && full_name && contact_no && no_of_guest
        return (
            <Modal
                isOpen={this.props.isOpen}
                onRequestClose={this.props.isClose}
                style={customStyles}
            >
                <div className="modal-content ticket-modal-content">
                    <div className="modal-header ticket-modal-header">
                        <h5 className="modal-title ticekt-modal-title">Booking Form</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.isClose}> <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body ticket-body-modal-content">
                        {flashMessage && <h3 className="text-danger">{flashMessage}</h3>}
                        <h3>{detailData.title}</h3>
                        <form onSubmit={this.submitHandler}>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="checkIn" className="bmd-label-floating">Check In Date <span className="text-danger">*</span></label><br />
                                        <DatePicker
                                            id="checkIn"
                                            className='form-control'
                                            placeholder="Check In Date"
                                            selected={checkIn}
                                            onChange={this.checkInHandleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="checkOut" className="bmd-label-floating">Check Out Date <span className="text-danger">*</span></label><br />
                                        <DatePicker
                                            id="checkOut"
                                            className='form-control'
                                            placeholder="Check Out Date"
                                            selected={checkOut}
                                            onChange={this.checkOutHandleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="full_name" className="bmd-label-floating">Full Name <span className="text-danger">*</span></label>
                                        <input
                                            type="text"
                                            className='form-control'
                                            id="full_name"
                                            name="full_name"
                                            defaultValue={full_name}
                                            onChange={this.changeHandler}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="contact_no" className="bmd-label-floating">Contact Number <span className="text-danger">*</span></label>
                                        <input
                                            type="number"
                                            className='form-control'
                                            id="contact_no"
                                            name="contact_no"
                                            defaultValue={contact_no}
                                            onChange={this.changeHandler}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="email" className="bmd-label-floating">Email Address (optional)</label>
                                        <input
                                            type="email"
                                            className='form-control'
                                            id="email"
                                            name="email"
                                            defaultValue={email}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="no_of_guest" className="bmd-label-floating">No of Guest <span className="text-danger">*</span></label>
                                        <input
                                            type="number"
                                            className='form-control'
                                            id="no_of_guest"
                                            name="no_of_guest"
                                            defaultValue={no_of_guest}
                                            onChange={this.changeHandler}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="address" className="bmd-label-floating">Address (optional)</label>
                                        <input
                                            type="text"
                                            className='form-control'
                                            id="address"
                                            name="address"
                                            defaultValue={address}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-2 offset-5">
                                    <button type="submit" className="btn btn-primary btn-sm"
                                        disabled={!isDone || !isAvailable}><i className="fa fa-check"></i> Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        )
    }
}
export default connect(null, { storeRoomBooking })(BookingForm)