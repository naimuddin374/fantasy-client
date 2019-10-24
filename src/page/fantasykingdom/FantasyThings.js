import React from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";

class FantasyThings extends React.Component {
    render() {
        let settings = {
            loop: true,
            fade: false,
            speed: 1000,
            slidesToShow: 3,
            dots: false,
            autoplay: true,
            arrows: false,
            centerMode: true,
            responsive: [{
                breakpoint: 992,
                settings: {
                    arrows: false,
                }
            }]
        }
        return (
            <section className="things-area section-padding-top full-bg">
                <div className="container">
                    <div className="row row-center">
                        <div className="col-lg-8 col-md-8">
                            <div className="section-title fantasy-section-title mb-40 things-to-do-title">
                                <h2>Explore Rides & Events</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="show-all-content-area text-right">
                                <Link to="/things-to-do">View All</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="things-wrapper">
                    <Slider {...settings}>
                        <div className="col-lg-12 col-md-4">
                            <div className="single-things">
                                <div className="img-things-link">
                                    <Link to="/"><img src="./assets/images/things/1.png" alt="thins img" /></Link>
                                </div>
                                <div className="thing-offer">
                                    <span className="offer-shape">Ride</span>
                                </div>
                                <Link to="/">Adventure Rides</Link>
                                <div className="gradient-bottomshape"></div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-4">
                            <div className="single-things">
                                <div className="img-things-link">
                                    <Link to="/"><img src="./assets/images/things/2.png" alt="thins img" /></Link>
                                </div>
                                <div className="thing-offer">
                                    <span className="offer-shape">Ride</span>
                                </div>
                                <Link to="/">Live Entertainment </Link>
                                <div className="gradient-bottomshape"></div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-4">
                            <div className="single-things">
                                <div className="img-things-link">
                                    <Link to="/"><img src="./assets/images/things/3.png" alt="thins img" /></Link>
                                </div>
                                <div className="thing-offer">
                                    <span className="offer-shape">Show</span>
                                </div>
                                <Link to="/">Adventure Rides</Link>
                                <div className="gradient-bottomshape"></div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-4">
                            <div className="single-things">
                                <div className="img-things-link">
                                    <Link to="/"><img src="./assets/images/things/4.png" alt="thins img" /></Link>
                                </div>
                                <div className="thing-offer">
                                    <span className="offer-shape">Ride</span>
                                </div>
                                <Link to="/">Adventure Rides</Link>
                                <div className="gradient-bottomshape"></div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-4">
                            <div className="single-things">
                                <div className="img-things-link">
                                    <Link to="/"><img src="./assets/images/things/1.png" alt="thins img" /></Link>
                                </div>
                                <div className="thing-offer">
                                    <span className="offer-shape">Ride</span>
                                </div>
                                <Link to="/">Live Entertainment </Link>
                                <div className="gradient-bottomshape"></div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-4">
                            <div className="single-things">
                                <div className="img-things-link">
                                    <Link to="/"><img src="./assets/images/things/2.png" alt="thins img" /></Link>
                                </div>
                                <div className="thing-offer">
                                    <span className="offer-shape">Show</span>
                                </div>
                                <Link to="/">Adventure Rides</Link>
                                <div className="gradient-bottomshape"></div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-4">
                            <div className="single-things">
                                <div className="img-things-link">
                                    <Link to="/"><img src="./assets/images/things/3.png" alt="thins img" /></Link>
                                </div>
                                <div className="thing-offer">
                                    <span className="offer-shape">Ride</span>
                                </div>
                                <Link to="/">Adventure Rides</Link>
                                <div className="gradient-bottomshape"></div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-4">
                            <div className="single-things">
                                <div className="img-things-link">
                                    <Link to="/"><img src="./assets/images/things/4.png" alt="thins img" /></Link>
                                </div>
                                <div className="thing-offer">
                                    <span className="offer-shape">Ride</span>
                                </div>
                                <Link to="/">Live Entertainment </Link>
                                <div className="gradient-bottomshape"></div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 text-center mt-5">
                            <Link to="/ticket" className="theme-btn">get ticket</Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default FantasyThings
