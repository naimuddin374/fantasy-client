import React from 'react';
import Modal from 'react-modal'
import { connect } from 'react-redux';
import { updateProfile } from './../../store/actions/profileActions';

class Edit extends React.Component {
    state = {
        id: '',
        full_name: '',
        contact_no: '',
        address: '',
        gender: '',
        age: ''
    }
    UNSAFE_componentWillReceiveProps(props) {
        this.setState({
            ...props.data
        })
    }
    UNSAFE_componentWillMount() {
        Modal.setAppElement('body');
    }
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitHandler = event => {
        event.preventDefault()
        this.props.updateProfile(this.state, this.state.id)
        setTimeout(() => {
            this.props.isClose()
        }, 1000)
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
        let { full_name, contact_no, address, gender, age } = this.state
        let isDone = full_name && contact_no
        return (
            <Modal
                isOpen={this.props.isOpen}
                onRequestClose={this.props.isClose}
                style={customStyles}
            >
                <div className="modal-content ticket-modal-content">
                    <div className="modal-header ticket-modal-header">
                        <h5 className="modal-title ticekt-modal-title">Edit Profile</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.isClose}> <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body ticket-body-modal-content">
                        <form onSubmit={this.submitHandler}>
                            <div className="form-group">
                                <label htmlFor="full_name">Full Name</label>
                                <input
                                    type="text"
                                    id="full_name"
                                    name="full_name"
                                    value={full_name}
                                    onChange={this.changeHandler}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact_no">Contact Number</label>
                                <input
                                    type="number"
                                    id="contact_no"
                                    name="contact_no"
                                    value={contact_no}
                                    onChange={this.changeHandler}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={address}
                                    onChange={this.changeHandler}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="age">Age</label>
                                <input
                                    type="text"
                                    id="age"
                                    name="age"
                                    value={age}
                                    onChange={this.changeHandler}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label className="bmd-label-floating">
                                    <input
                                        type="checkbox"
                                        name="gender"
                                        value="Male"
                                        onChange={this.changeHandler}
                                        checked={gender === "Male" ? true : false}
                                    />
                                    Male</label>

                                <label className="bmd-label-floating ml-4">
                                    <input
                                        type="checkbox"
                                        name="gender"
                                        value="Female"
                                        onChange={this.changeHandler}
                                        checked={gender === "Female" ? true : false}
                                    />
                                    Female</label>

                                <label className="bmd-label-floating ml-4">
                                    <input
                                        type="checkbox"
                                        name="gender"
                                        value="Other"
                                        onChange={this.changeHandler}
                                        checked={gender === "Other" ? true : false}
                                    />
                                    Other</label>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary form-control" disabled={!isDone}><i className="fa fa-upload" /> Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        )
    }
}
export default connect(null, { updateProfile })(Edit)