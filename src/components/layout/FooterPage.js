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

                                <li><a target="_blank" href="https://www.facebook.com/FantasyKingdomHQ" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>

                                <li><a target="_blank" href="https://www.instagram.com/fantasykingdomhq/" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>

                                <li><a target="_blank" href="https://www.youtube.com/channel/UC3WC5sY2ez7RirsuyRM2zxQ" rel="noopener noreferrer"><i className="fa fa-youtube-play"></i></a></li>

                            </ul>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 col-md-5">
                                <div className="widget-wrapper">
                                    <div className="widget-content">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fantasy-logo-white.png`} alt="logo" />
                                        <p>Based in Ashulia, Fantasy Kingdom is the first theme park in Bangladesh. The park is only a 20 minutes car ride away from Hazrat Shahjalal International Airport.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="widget-wrapper">
                                    <div className="widget-content contact-widget-content">
                                        <h4>Contact Us</h4>
                                        <ul>
                                            <li>
                                                <div className="icon-widget">
                                                    <i className="fa fa-phone"></i>
                                                </div>
                                                <div className="icon-text">
                                                    <p><a className="text-white" href="tel:09612-002020">09612-002020</a></p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon-widget">
                                                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                                </div>
                                                <div className="icon-text">
                                                    <p><a href="mailto:info@fantasykingdom.net" className="text-white">info@fantasykingdom.net</a></p>
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
                                    <div className="widget-content animation-widget useful-link-widget-content">
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
