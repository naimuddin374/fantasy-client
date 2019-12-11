import React from 'react';
import Modal from 'react-modal'

class ParkingHour extends React.Component {
    UNSAFE_componentWillMount() {
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
                border: "none"
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
                        <h5 className="modal-title ticekt-modal-title">Parking Hour Detail</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.isClose}> <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body ticket-body-modal-content">
                        <h3>10am - 8pm</h3>
                    </div>
                </div>
            </Modal>
        )
    }
}
export default ParkingHour