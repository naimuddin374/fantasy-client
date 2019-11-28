import React from 'react'
import CircleShape from '../common/CircleShape'
import { Link } from 'react-router-dom';

class OurRoom extends React.Component {
    state = {
        thumbnailImage: './assets/images/atlantis/atlantis_suites/atlantis_feature1.png'
    }
    thumbnailImage(src) {
        this.setState({
            thumbnailImage: src
        })
    }
    render() {
        let { thumbnailImage } = this.state
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
                                    <div className="col-lg-6 col-md-4 col-sm-6">
                                        <div className="atlantis-room-thumb" id="thumb_img">
                                            <img
                                                className="active"
                                                alt="atlantis thumb"
                                                src="./assets/images/atlantis/atlantis_suites/atlantis_feature1.png"
                                                onClick={() => this.thumbnailImage('./assets/images/atlantis/atlantis_suites/atlantis_feature1.png')}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-4 col-sm-6">
                                        <div className="atlantis-room-thumb" id="thumb_img">
                                            <img
                                                className="active"
                                                alt="atlantis thumb"
                                                src="./assets/images/atlantis/atlantis_suites/atlantis_feature2.png"
                                                onClick={() => this.thumbnailImage('./assets/images/atlantis/atlantis_suites/atlantis_feature2.png')}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-4 col-sm-6">
                                        <div className="atlantis-room-thumb" id="thumb_img">
                                            <img
                                                className="active"
                                                alt="atlantis thumb"
                                                src="./assets/images/atlantis/atlantis_suites/atlantis_feature3.png"
                                                onClick={() => this.thumbnailImage('./assets/images/atlantis/atlantis_suites/atlantis_feature3.png')}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-4 col-sm-6">
                                        <div className="atlantis-room-thumb" id="thumb_img">
                                            <img
                                                className="active"
                                                alt="atlantis thumb"
                                                src="./assets/images/atlantis/atlantis_suites/atlantis_feature4.png"
                                                onClick={() => this.thumbnailImage('./assets/images/atlantis/atlantis_suites/atlantis_feature4.png')}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-4 col-sm-6">
                                        <div className="atlantis-room-thumb" id="thumb_img">
                                            <img
                                                className="active"
                                                alt="atlantis thumb"
                                                src="./assets/images/atlantis/atlantis_suites/atlantis_feature5.png"
                                                onClick={() => this.thumbnailImage('./assets/images/atlantis/atlantis_suites/atlantis_feature5.png')}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-4 col-sm-6">
                                        <div className="atlantis-room-thumb" id="thumb_img">
                                            <img
                                                className="active"
                                                alt="atlantis thumb"
                                                src="./assets/images/atlantis/atlantis_suites/atlantis_feature6.png"
                                                onClick={() => this.thumbnailImage('./assets/images/atlantis/atlantis_suites/atlantis_feature6.png')}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="room-suite-inner-content-area pt-3">
                                    <h3>Suite</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>

                                    <div className="row">
                                        <div className="col-lg-8 col-md-8">
                                            <div className="room-suite-features">
                                                <div className="single-room-feature">
                                                    <ul>
                                                        <li><img src="./assets/images/atlantis/feature_icon.png" alt="atlantis feature icon" />Air-conditioned Room</li>
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
                                                    <h5 className="atlantis-booking-price">price</h5>
                                                    <h2 className="atlantis-bd-price">BDT 8,500</h2>
                                                    <span className="atlantis-charge">10% tax + 5% Service Charge</span>
                                                    <h3 className="atlantis-free-collection">*Free cancellation</h3>
                                                </div>
                                                <Link to="/checkout" className="atlantis-book-now-btn btn">Book Now</Link>
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
