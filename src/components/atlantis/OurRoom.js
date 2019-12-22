import React from 'react'
import { API_URL } from '../../store/actions/types';
import Axios from 'axios';
import Facility from './Facility';
import { connect } from 'react-redux';
import PriceBoard from './PriceBoard';

class OurRoom extends React.Component {
    state = {
        thumbnailImage: API_URL + this.props.data.image,
        galleries: {},
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
        let { title, description } = this.props.data
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
                                            <Facility />
                                        </div>
                                        <PriceBoard
                                            data={this.props.data}
                                            searchData={this.props.searchData}
                                            openModal={this.openModal}
                                            gotToTop={this.props.gotToTop}
                                            history={this.props.history}
                                        />
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

const mapStateToProps = state => ({
    auth: state.auth,
})
export default connect(mapStateToProps)(OurRoom)
