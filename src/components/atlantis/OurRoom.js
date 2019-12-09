import React from 'react'
import { API_URL } from '../../store/actions/types';
import Axios from 'axios';
import FeatureIcon from './FeatureIcon';
import BookingForm from './BookingForm';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class OurRoom extends React.Component {
    state = {
        thumbnailImage: API_URL + this.props.data.image,
        galleries: {},
        isModalOpen: false,
        detailData: {}
    }
    openModal = (data) => {
        this.setState({
            isModalOpen: true,
            detailData: data,
        })
    }
    closeModal = () => {
        this.setState({
            isModalOpen: false,
            detailData: {}
        })
    }
    componentDidMount() {
        Axios.get(`${API_URL}api/room-gallery/${this.props.data.id}`)
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
                                            <div className="col-lg-6 col-md-4 col-sm-6" key={item.id}>
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
                                            <FeatureIcon type={type} />
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
                                                {this.props.auth.isAuth ?
                                                    <button onClick={() => this.openModal(this.props.data)} className="atlantis-book-now-btn btn">Book Now</button>
                                                    : <Link to={`${process.env.PUBLIC_URL}/login`} className="atlantis-book-now-btn btn">Book Now</Link>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BookingForm
                    isOpen={this.state.isModalOpen}
                    isClose={this.closeModal}
                    detailData={this.props.data}
                    history={this.props.history}
                />
            </section>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
})
export default connect(mapStateToProps)(OurRoom)
