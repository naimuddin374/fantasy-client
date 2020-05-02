import React from 'react';
import Modal from 'react-modal';
class ParkHour extends React.Component {
    componentDidMount() {
        Modal.setAppElement('body');
    }
    render() {
        const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                width: "50%",
                transform: 'translate(-50%, -50%)',
                color: "#000",
                border: "none",
                zIndex: "999"
            }
        }
        return (
            <Modal
                isOpen={this.props.isOpen}
                onRequestClose={this.props.isClose}
                style={customStyles}
            >
                <div className="modal-content ticket-modal-content">
                    <div className="modal-header ticket-modal-header">
                        <h5 className="modal-title ticekt-modal-title">Park Hour</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.isClose}> <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body ticket-body-modal-content">
                        <div className="row">
                            <div className="col-lg-12">
                                <h4>Fantasy Kingdom is open all throughout the week.</h4>
                                <div className="row mt-3">
                                    <div className="col-lg-7">Saturday</div>
                                    <div className="col-lg-5">11:00 AM-7:30 PM</div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-7">Sunday</div>
                                    <div className="col-lg-5">11:00 AM-7:30 PM</div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-7">Monday</div>
                                    <div className="col-lg-5">11:00 AM-7:30 PM</div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-7">Tuesday</div>
                                    <div className="col-lg-5">11:00 AM-7:30 PM</div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-7">Wednesday</div>
                                    <div className="col-lg-5">11:00 AM-7:30 PM</div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-7">Thursday</div>
                                    <div className="col-lg-5">11:00 AM-7:30 PM</div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-7">Fridays and Other Government Holidays</div>
                                    <div className="col-lg-5">10:30 AM-7:30 PM</div>
                                </div>

                                {/* <p>
                                    From Saturday through Thursday the parks are open from 11:00 AM to 7:30 PM <br />
                                    On Fridays and other Government holidays the parks are open from 10:30 AM to 7:30 PM
                                    </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}
export default ParkHour