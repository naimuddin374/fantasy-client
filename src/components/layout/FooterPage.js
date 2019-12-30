import React from 'react'
import { Link } from 'react-router-dom';
import { DISCOUNT_TAG } from '../../store/actions/types';

class FooterPage extends React.Component {
    render() {
        return (
            <div>
                <footer className="footer-area short-section-padding">
                    <div className="container">
                        <div className="footer-shape-social">
                            <ul>
                                <li><a target="_blank" href="https://www.facebook.com/fantasykingdomcomplex"><i className="fa fa-facebook"></i></a></li>
                                <li><a target="_blank" href="https://twitter.com/fantasykingdom_"><i className="fa fa-twitter"></i></a></li>
                                <li><a target="_blank" href="https://www.youtube.com/channel/UC3WC5sY2ez7RirsuyRM2zxQ"><i className="fa fa-youtube-play"></i></a></li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 col-md-5">
                                <div className="widget-wrapper">
                                    <div className="widget-content">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/footerlogo.png`} alt="logo" />
                                        <p>Based in Ashulia, Fantasy Kingdom is the first theme park in Bangladesh. The park is only a 20 minutes car ride away from Hazrat Shahjalal International Airport.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="widget-wrapper">
                                    <div className="widget-content">
                                        <h4>Contact Us</h4>
                                        <ul>
                                            <li>
                                                <div className="icon-widget">
                                                    <i className="fa fa-phone"></i>
                                                </div>
                                                <div className="icon-text">
                                                    <p>880-2-7790816-19 , 01913-531474 <br /> 01913-531522</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon-widget">
                                                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                                </div>
                                                <div className="icon-text">
                                                    <p>info@concord.com.bd</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon-widget">
                                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                                </div>
                                                <div className="icon-text">
                                                    <p> Fantasy Kingdom Complex <br /> Jamgora, Ashulia, Savar, Dhaka, Bangladesh</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <div className="widget-wrapper">
                                    <div className="widget-content animation-widget">
                                        <h4>useful link</h4>
                                        <ul>
                                            <li><Link to={`${process.env.PUBLIC_URL}/ticket`}>Park Tickets</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/atlantis`}>Resorts</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/things-to-do`}>Things To Do</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/ticket/${DISCOUNT_TAG}`}>Offers</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

                <section className="footer-bottom-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3">
                                <p className="footer-text">Terms of Service : Privacy Policy</p>
                            </div>
                            <div className="col-lg-5 col-md-5">
                                <div className="allright-reserve">
                                    <p className="footer-text">&copy; 2020 Fantasy Kingdom. All rights reserved.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <p className="footer-text">Design & developed by : <Link to="https://beatnik.digital/" target="_blank">Beatnik</Link></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default FooterPage
