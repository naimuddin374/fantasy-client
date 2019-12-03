import React from 'react';
import Modal from 'react-modal'
import { API_URL } from '../../store/actions/types';
import { Link } from 'react-router-dom';

class Details extends React.Component {
    componentWillMount() {
        Modal.setAppElement('body');
    }
    state = {
        detailData: {},
    }
    componentWillReceiveProps(props) {
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
                width: "70%",
                transform: 'translate(-50%, -50%)',
                color: "#000",
                border: "none"
            }
        }
        let { id, title, description, price, discount_price, image, type, age, is_buy } = this.state.detailData
        return (
            <Modal
                isOpen={this.props.isOpen}
                onRequestClose={this.props.isClose}
                style={customStyles}
            >
                <div className="modal-content ticket-modal-content">
                    <div className="modal-header ticket-modal-header">
                        <h5 className="modal-title ticekt-modal-title">Details</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.isClose}> <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body ticket-body-modal-content">
                        {image && <div className="row"><img src={API_URL + image} alt="Ride Image" style={{ height: "150px", margin: "0 auto" }} /></div>}
                        <h4 className="ticket-modal-body-title">{title}</h4>
                        <ul>
                            <li>{description}</li>
                        </ul>
                        {is_buy === "1" &&
                            <ul>
                                <li>Regular Price: ৳{price}</li>
                                {discount_price !== null &&
                                    <li>Discount Price: ৳{discount_price}</li>
                                }
                                <li>Type: {(type === "1" ? "Anyone" : "Only Kids")}</li>
                                {type === "2" &&
                                    <li>Maximum Age: {age}</li>
                                }
                                <li><Link to={`/ticket/${id}`} className="payment-btn">Buy Ticket</Link></li>
                            </ul>
                        }
                    </div>
                </div>
            </Modal>
        )
    }
}
export default Details