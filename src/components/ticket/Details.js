import React from 'react';
import Modal from 'react-modal'
import { API_URL } from '../../store/actions/types';
import { priceFormat } from '../../util/helper';

class Details extends React.Component {
    UNSAFE_componentWillMount() {
        Modal.setAppElement('body');
    }
    state = {
        detailData: {},
    }
    UNSAFE_componentWillReceiveProps(props) {
        this.setState({
            detailData: props.detailData,
        })
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
        let { title, description, price, discount_price, image, type } = this.state.detailData
        return (
            <Modal
                isOpen={this.props.isOpen}
                onRequestClose={this.props.isClose}
                style={customStyles}
            >
                <div className="modal-content ticket-modal-content">
                    <div className="modal-header ticket-modal-header">
                        <h5 className="modal-title ticekt-modal-title">Ticket Details</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.isClose}> <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body ticket-body-modal-content">
                        <div className="row">
                            <div className="col-lg-4">
                                <img src={image ? API_URL + image : ''} alt="RideImage" style={{ maxHeight: "250px" }} />
                            </div>
                            <div className="col-lg-8">
                                <h4 className="ticket-modal-body-title">{title}</h4>
                                <ul>
                                    <li>Regular Price: {priceFormat(price)}</li>
                                    {discount_price !== null &&
                                        <li>Discount Price: {priceFormat(discount_price)}</li>
                                    }
                                    <li>Type: {(Number(type) === 1 && "Anyone") || (Number(type) === 2 && "Only Kids") || (Number(type) === 3 && "Adult")}</li>
                                    <li>{description}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}
export default Details