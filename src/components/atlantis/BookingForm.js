import React from 'react';
import Modal from 'react-modal'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import { storeRoomBooking } from '../../store/actions/roomActions';

class BookingForm extends React.Component {
    state = {
        detailData: {},
        room_id: this.props.detailData.id,
        full_name: 'MD FOYSAL',
        contact_no: '88017546525',
        email: 'FOYSAL@GMAIL.COM',
        address: 'Dhaka, BD',
        adult_no: 2,
        child_no: 0,
        check_in: new Date('2019-12-15'),
        check_out: new Date('2019-12-20'),
        status: 0,
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
        this.setState({
            check_in: date
        });
    }
    checkOutHandleChange = date => {
        this.setState({
            check_out: date
        });
    }
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitHandler = event => {
        event.preventDefault()
        let { room_id, full_name, contact_no, email, address, adult_no, child_no, check_in, check_out } = this.state
        let totalDay = check_out - check_in
        let user_id = localStorage.getItem('auth_token')
        this.props.storeRoomBooking({ room_id, full_name, contact_no, email, address, adult_no, child_no, check_in: '2019-12-15', check_out: '2019-12-20', total_day: totalDay, user_id, status: 0 })
        this.props.isClose()
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
        let { detailData, check_in, check_out, full_name, contact_no, email, address, adult_no, child_no } = this.state
        let isDone = check_in && check_out && full_name && contact_no && adult_no
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
                        <h3>{detailData.title}</h3>
                        <form onSubmit={this.submitHandler}>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="check_in" className="bmd-label-floating">Check In Date <span className="text-danger">*</span></label><br />
                                        <DatePicker
                                            id="check_in"
                                            className='form-control'
                                            placeholder="Check In Date"
                                            selected={check_in}
                                            onChange={this.checkInHandleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="check_out" className="bmd-label-floating">Check Out Date <span className="text-danger">*</span></label><br />
                                        <DatePicker
                                            id="check_out"
                                            className='form-control'
                                            placeholder="Check Out Date"
                                            selected={check_out}
                                            onChange={this.checkOutHandleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="adult_no" className="bmd-label-floating">Adult <span className="text-danger">*</span></label>
                                        <input
                                            type="number"
                                            className='form-control'
                                            id="adult_no"
                                            name="adult_no"
                                            defaultValue={adult_no}
                                            onChange={this.changeHandler}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="child_no" className="bmd-label-floating">Child (optional)</label>
                                        <input
                                            type="child_no"
                                            className='form-control'
                                            id="child_no"
                                            name="child_no"
                                            defaultValue={child_no}
                                            onChange={this.changeHandler}
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
                            </div>
                            <div className="row">
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
                                        disabled={!isDone}><i className="fa fa-check"></i> Submit</button>
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