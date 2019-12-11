import React from 'react';
import Modal from 'react-modal'
import ReactImageMagnify from 'react-image-magnify';

class MapImage extends React.Component {
    UNSAFE_componentWillMount() {
        Modal.setAppElement('body');
    }
    render() {
        const customStyles = {
            content: {
                width: "50%",
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                color: "#000",
                border: "none",
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
                        <ReactImageMagnify {...{
                            smallImage: {
                                src: `${process.env.PUBLIC_URL}/assets/images/Map_FK-Complex-large.jpg`,
                                alt: 'Park Map',
                                isFluidWidth: true,
                            },
                            largeImage: {
                                src: `${process.env.PUBLIC_URL}/assets/images/Map_FK-Complex-large.jpg`,
                                width: 1200,
                                height: 1800
                            }
                        }} />
                    </div>
                </div>
            </Modal>
        )
    }
}
export default MapImage