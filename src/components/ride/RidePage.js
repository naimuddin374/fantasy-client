import React from 'react'
import { Link } from 'react-router-dom'
import FantasyGallery from '../fantasy-kingdom/Gallery';

class RidePage extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <div className="select-park-option-area fantasy-select-park-bg">
                    <div className="container">
                        <div className="row row-center">
                            <div className="col-lg-3 col-md-3">
                                <img src="./assets/images/headerlogo.png" alt="logo" />
                            </div>
                            <div className="col-lg-9 col-md-9">
                                <div className="fantasy-park-search-item float-right">
                                    <form action="#">
                                        <div className="single-fantasy-park-search">
                                            <div className="fantasy-parki-select-item">
                                                {/* <select id="fantasysearchtype" className="form-control" style="display: none;">
                                                        <option selected="">Select Other park & resorts</option>
                                                    </select> */}
                                                <div className="nice-select fantasy-nice-select" tabIndex="0"><span className="current">Select Other park & resorts</span>
                                                    <ul className="list">
                                                        <li data-value="Fantasy" className="option">Fantasy Kingdom</li>
                                                        <li data-value="water" className="option">Water Kingdom</li>
                                                        <li data-value="foys" className="option">Foys Lake</li>
                                                        <li data-value="Heritage" className="option">Heritage Park</li>
                                                    </ul>
                                                </div>
                                                <div className="park-select-submit top-select-btn">
                                                    <input type="submit" value="Submit" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="fantasy-feature-about-area relative fantasy-feature-shape section-padding full-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="fantasy-about-content">
                                    <div className=" section-title fantasy-section-title">
                                        <h2>Roller Coster</h2>
                                        <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis lorem dictum, placerat dui aliquam, tempus eros. Nulla in nisi venenatis, pharetra magna vitae, semper erat. Proin ex arcu, posuere sed ornare a, consequat ultricies nulla. Nam ac maximus velit. Nullam orci tortor, sollicitudin quis sollicitudin euLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis losollicitudin quis sollicitudin eu Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nemo alias nihil eaque mollitia, totam minima id officiis atque quam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorum, itaque architecto enim.</p>	<Link to="/" className="theme-btn mt-5">Get Ticket</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="fantasy-closing-time">
                                    <div className="opening-part">
                                        <div className="top-content-about-open">
                                            <h4>Open today</h4>
                                            <span>Closing Time:  8:00 PM</span>
                                        </div>
                                    </div>
                                    <div className="see-timing">	<span>See timings</span>
                                    </div>
                                </div>
                                <div className="fantasy-google-map-content">
                                    <div className="google-map-wrapper">
                                        <img src="./assets/images/map.png" alt="experience background" width="100%" />
                                    </div>
                                </div>
                                <div className="direction-area-fantasy-kingdom">
                                    <div className="single-direction-map">
                                        <Link to="/">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="33.668" height="40.428" viewBox="0 0 33.668 40.428">
                                                <g id="Group_1274" data-name="Group 1274" transform="translate(1.506 1.5)">
                                                    <path id="Path_2175" data-name="Path 2175" d="M38.652,23.346a15.65,15.65,0,0,1-1.265,5.092c-1.5,3.5-3.961,6.32-6.3,9.3-.6.764-7.3,8.4-7.613,8.1a89.138,89.138,0,0,1-7.112-7.426C12.943,34.44,8.488,29.3,8.064,23.9,7.408,15.542,15.1,8.375,23.472,8.375a16.336,16.336,0,0,1,12.307,6.009A12.457,12.457,0,0,1,38.652,23.346Z" transform="translate(-8.025 -8.375)" fill="none" stroke="#e50019" strokeMiterlimit="10" strokeWidth="3" />
                                                    <ellipse id="Ellipse_11" data-name="Ellipse 11" cx="7.023" cy="7.023" rx="7.023" ry="7.023" transform="translate(8.308 8.038)" fill="none" stroke="#e50019" strokeMiterlimit="10" strokeWidth="3" />
                                                </g>
                                            </svg>	<span>Maps</span>
                                        </Link>
                                    </div>
                                    <div className="single-direction-map">
                                        <Link to="/">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="47.705" height="37.319" viewBox="0 0 47.705 37.319">
                                                <g id="Group_1275" data-name="Group 1275" transform="translate(0 1.5)">
                                                    <path id="Path_2177" data-name="Path 2177" d="M44.3,23.095l-3.96-13.037H11.152L7.192,23.095V36.131H44.3Z" transform="translate(-1.892 -10.058)" fill="none" stroke="#e50019" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" />
                                                    <line id="Line_48" data-name="Line 48" x2="37.104" transform="translate(5.3 13.037)" fill="none" stroke="#e50019" strokeMiterlimit="10" strokeWidth="3" />
                                                    <path id="Rectangle_276" data-name="Rectangle 276" d="M0,0H6.574a0,0,0,0,1,0,0V6.245a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V0A0,0,0,0,1,0,0Z" transform="translate(9.869 26.073)" fill="none" stroke="#e50019" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" />
                                                    <path id="Rectangle_277" data-name="Rectangle 277" d="M0,0H6.574a0,0,0,0,1,0,0V6.245a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V0A0,0,0,0,1,0,0Z" transform="translate(30.482 26.073)" fill="none" stroke="#e50019" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" />
                                                    <line id="Line_49" data-name="Line 49" x2="5.794" transform="translate(10.649 19.276)" fill="none" stroke="#e50019" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" />
                                                    <line id="Line_50" data-name="Line 50" x2="5.794" transform="translate(29.925 19.555)" fill="none" stroke="#e50019" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" />
                                                    <rect id="Rectangle_278" data-name="Rectangle 278" width="6.537" height="4.49" rx="2" transform="translate(41.168 9.784)" fill="#e50019" />
                                                    <rect id="Rectangle_279" data-name="Rectangle 279" width="6.537" height="4.49" rx="2" transform="translate(0 9.784)" fill="#e50019" />
                                                </g>
                                            </svg>	<span>Parking</span>
                                        </Link>
                                    </div>
                                    <div className="single-direction-map">
                                        <Link to="/">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="41.67" height="44.98" viewBox="0 0 41.67 44.98">
                                                <path id="Path_2378" data-name="Path 2378" d="M.147,28.934,8.474,2.426c1.015-3.235,6.137-3.235,7.156,0l8.327,26.508c.9,2.872-2.546,5.276-5.435,3.784l-4.613-2.383a4.1,4.1,0,0,0-3.714,0L5.581,32.719C2.693,34.21-.757,31.807.147,28.934Z" transform="translate(2.089 14.124) rotate(-30)" fill="none" stroke="#e50019" strokeMiterlimit="10" strokeWidth="3" />
                                            </svg>	<span>Direction</span>
                                        </Link>
                                    </div>
                                    <div className="single-direction-map">
                                        <Link to="/">	<i className="fa fa-clock-o" aria-hidden="true"></i>
                                            <span>Parking House</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <FantasyGallery />

            </div>
        )
    }
}
export default RidePage
