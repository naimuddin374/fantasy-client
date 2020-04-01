import React from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { textLimit } from './../../util/helper';
import { API_URL } from '../../store/actions/types';

class Map extends React.Component {
    state = {
        moduleData: {},
        className: this.props.className
    }
    componentDidMount() {
        Axios.get(`${API_URL}api/service${window.location.pathname}`)
            .then(res => {
                this.setState({
                    moduleData: res.data
                })
            })
    }
    render() {
        let { moduleData, className } = this.state
        let title = ''
        let description = ''
        if (Object.keys(moduleData).length !== 0) {
            title = moduleData[0].title
            description = moduleData[0].description
        }
        return (
            <section className="fantasy-feature-about-area relative fantasy-feature-shape section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="fantasy-about-content">
                                <div className={`section-title ${className}-section-title`}>
                                    <h2>{title}</h2>
                                    <p className="mt-3">{textLimit(description, 650)}</p>

                                    <div className="top-content-about-open mt-2">
                                        <p><b>Saturday - Thursday:</b> <i className="fa fa-clock-o" /> 11:00 AM to 7:30 PM</p>
                                        <p><b>Fridays & Govt. Holidays:</b> <i className="fa fa-clock-o" /> 10:30 AM to 7:30 PM</p>
                                        {/* <h5>Open today: <i className="fa fa-clock-o" /> 11:00 AM to 7:30 PM <br /> Holidays: <i className="fa fa-clock-o" /> 10:30 AM to 7:30 PM</h5> */}
                                    </div>
                                    <Link to={`${process.env.PUBLIC_URL}/ticket`} className="theme-btn mt-3">Get Ticket</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="fantasy-closing-time">
                                <div className="opening-part">
                                    <div className="top-content-about-open">
                                        {/* <h5>Open today ({date_time})</h5> */}
                                    </div>
                                </div>
                            </div>
                            <div className="fantasy-google-map-content">
                                <div className="google-map-wrapper">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.674190942606!2d90.28915281538697!3d23.936588587554027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c386684b8de9%3A0xa51d15a3906d565c!2sFantasy%20Kingdom!5e0!3m2!1sen!2sbd!4v1577854192398!5m2!1sen!2sbd" width="100%" height="480" frameBorder="0" style={{ border: '0' }} allowFullScreen="" title="fantasy kingdom"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Map
