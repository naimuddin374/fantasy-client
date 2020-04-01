import React from 'react';
import Modal from 'react-modal';
class HelpLine extends React.Component {
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
                width: "40%",
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
                        <h5 className="modal-title ticekt-modal-title">Our Helpline</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.isClose}> <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body ticket-body-modal-content">
                        <div className="row">
                            <div className="col-lg-12">
                                <h4>E-Mail: <a href="tel:09612-002020">09612-002020</a></h4>
                                <h4>E-Mail: <a href="mailto:tajul5217@concordgroupbd.com">tajul5217@concordgroupbd.com</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}
export default HelpLine