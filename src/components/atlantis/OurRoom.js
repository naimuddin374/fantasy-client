import React from 'react'
import { Link } from 'react-router-dom';
import { API_URL } from '../../store/actions/types';
import Axios from 'axios';

class OurRoom extends React.Component {
    state = {
        thumbnailImage: API_URL + this.props.data.image,
        galleries: {}
    }
    componentDidMount() {
        Axios.get(`api/room-gallery/${this.props.data.id}`)
            .then(res => {
                this.setState({
                    galleries: res.data
                })
            })
    }
    thumbnailImage(src) {
        this.setState({
            thumbnailImage: src
        })
    }
    render() {
        let { thumbnailImage, galleries } = this.state
        let { title, description, price, discount, type } = this.props.data
        return (
            <section className="atlantis-room-suites section-padding-bottom relative">
                <div className="container">

                    <div className="atlantis-room-suites-feature-area">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="atlantis-room-large-img" id="featured_img">
                                    <img id="img" src={thumbnailImage} alt="atlantis feature" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="row">
                                    {Object.keys(galleries).length !== 0 &&
                                        galleries.map(item => (
                                            <div className="col-lg-6 col-md-4 col-sm-6">
                                                <div className="atlantis-room-thumb" id="thumb_img">
                                                    <img
                                                        className="active"
                                                        alt="atlantis thumb"
                                                        src={API_URL + item.image}
                                                        onClick={() => this.thumbnailImage(API_URL + item.image)}
                                                    />
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="room-suite-inner-content-area pt-3">
                                    <h3>{title}</h3>
                                    <p>{description}</p>

                                    <div className="row">
                                        <div className="col-lg-8 col-md-8">
                                            <div className="room-suite-features">
                                                <div className="single-room-feature">
                                                    <ul>
                                                        <li><img src="./assets/images/atlantis/feature_icon.png" alt="atlantis feature icon" />{type === "1" ? 'Non Air-conditioned Room' : 'Air-conditioned Room'}</li>
                                                        <li><img src="./assets/images/atlantis/feature_icon.png" alt="atlantis feature icon" />Credit Card Facility</li>
                                                        <li><img src="./assets/images/atlantis/feature_icon.png" alt="atlantis feature icon" />En-suite Bathroom</li>
                                                        <li><img src="./assets/images/atlantis/feature_icon.png" alt="atlantis feature icon" />Convenience Store</li>
                                                        <li><img src="./assets/images/atlantis/feature_icon.png" alt="atlantis feature icon" />Telephone</li>
                                                        <li><img src="./assets/images/atlantis/feature_icon.png" alt="atlantis feature icon" />Laundry Service</li>
                                                        <li><img src="./assets/images/atlantis/feature_icon.png" alt="atlantis feature icon" />Cable TV</li>
                                                        <li><img src="./assets/images/atlantis/feature_icon.png" alt="atlantis feature icon" />Cyber Café/Wi-Fi</li>
                                                        <li><img src="./assets/images/atlantis/feature_icon.png" alt="atlantis feature icon" />Car Parking</li>
                                                        <li><img src="./assets/images/atlantis/feature_icon.png" alt="atlantis feature icon" />Restaurant</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <div className="atlantis-booking-ticket-area">
                                                <div className="atlantis-booking-content mb-3">
                                                    <h5 className="atlantis-booking-price">Price</h5>
                                                    <h2 className="atlantis-bd-price">৳{price}</h2>
                                                    <h5 className="atlantis-booking-price">Discount ৳{discount ? discount : '00'}</h5>
                                                    <span className="atlantis-charge">10% tax + 5% Service Charge</span>
                                                    <h3 className="atlantis-free-collection">*Free cancellation</h3>
                                                </div>
                                                <Link to="/" className="atlantis-book-now-btn btn">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}
export default OurRoom
