import React from 'react';
import Modal from 'react-modal'
import { connect } from 'react-redux';
import { storeRoomBooking } from '../../store/actions/roomActions';

class BookingForm extends React.Component {
    state = {
        room_id: this.props.detailData.id,
        user_id: this.props.auth ? this.props.auth.user.id : null,
        full_name: this.props.auth ? this.props.auth.user.full_name : null,
        contact_no: this.props.auth ? this.props.auth.user.contact_no : null,
        email: this.props.auth ? this.props.auth.user.email : null,
        comments: '',
        status: 0,
        booking_for: this.props.auth ? 1 : 2,
        isLoading: false,
    }
    componentDidMount() {
        Modal.setAppElement('body');
    }
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    submitHandler = event => {
        event.preventDefault()
        this.setState({ isLoading: true })
        let data = {
            ...this.props.room.searchData,
            ...this.state,
            totalPrice: this.props.totalPrice,
            title: this.props.detailData.title,
            image: this.props.detailData.image,
        }
        this.props.storeRoomBooking(data, this.props.history)
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 3000);
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
        let { check_in, check_out, no_of_room, no_of_guest, totalDay } = this.props.room.searchData
        let { full_name, contact_no, booking_for, isLoading, comments } = this.state
        let isDone = full_name && contact_no && !isLoading
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
                        <div className="row">
                            <div className="col-md-4">
                                <p><b>Check In: </b>{check_in}</p>
                                <p><b>Total Rooms: </b>{no_of_room}</p>
                                <p><b>Your booking includes</b></p>
                            </div>
                            <div className="col-md-4">
                                <p><b>Check Out: </b>{check_out}</p>
                                <p><b>Total Guest: </b>{no_of_guest}</p>
                                <p>Breakfast, Free WiFi&Free Parking</p>
                            </div>
                            <div className="col-md-4">
                                <p><b>Total Day: </b>{totalDay}</p>
                                <p><b>Total Amount: </b>৳{this.props.totalPrice}</p>
                            </div>
                        </div>
                        <form onSubmit={this.submitHandler}>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 pt-4 pb-4">
                                    <b>Who are you booking for?</b>
                                    <div className="booking-row">
                                        <div className="form-group mb-0">
                                            <label className="bmd-label-floating">
                                                <input
                                                    type="checkbox"
                                                    name="booking_for"
                                                    className="mr-2"
                                                    value="1"
                                                    onChange={this.changeHandler}
                                                    checked={Number(booking_for) === 1 ? true : false}
                                                />
                                                I am the main guest</label>
                                        </div>
                                        <div className="form-group mb-0 booking-else">
                                            <label className="bmd-label-floating">
                                                <input
                                                    type="checkbox"
                                                    name="booking_for"
                                                    className="mr-2"
                                                    value="2"
                                                    onChange={this.changeHandler}
                                                    checked={Number(booking_for) === 2 ? true : false}
                                                />
                                                Booking for someone else</label>
                                        </div>
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
                                            readOnly={Number(booking_for) === 1}
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
                                            readOnly={Number(booking_for) === 1}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="contact_no" className="bmd-label-floating">Special Request (Optional)</label>
                                        <textarea
                                            type="number"
                                            className='form-control'
                                            id="comments"
                                            name="comments"
                                            defaultValue={comments}
                                            onChange={this.changeHandler}
                                            rows="3"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 offset-4">
                                    {isDone ?
                                        <button type="submit" className="primary-btn full-width"> <i className="fa fa-check mr-2" aria-hidden="true" />
                                            Confirm Booking</button> :
                                        <button type="submit" disabled className="disable-btn full-width"> <i className="fa fa-check mr-2" aria-hidden="true" />
                                            Confirm Booking</button>
                                    }
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        )
    }
}
const mapStateToProps = state => ({
    room: state.room,
    auth: state.auth,
})
export default connect(mapStateToProps, { storeRoomBooking })(BookingForm)