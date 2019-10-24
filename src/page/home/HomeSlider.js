import React from 'react'
import Slider from "react-slick"
import { Link } from 'react-router-dom'

class HomeSlider extends React.Component {
    render() {
        let settings = {
            fade: true,
            speed: 1000,
            dots: false,
            arrows: false,
            autoplay: true,
        }
        return (
            <section className="slider-area">
                <Slider {...settings}>
                    <div className="hero-single-slide hero-overlay">
                        <div className="hero-slider-item bg-img sliderone">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="hero-slider-content slide-1 text-center">
                                            <h1 className="slide-title">Recharge Yourself</h1>
                                            <p className="slide-desc text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>	<Link to="/" className="theme-btn">Get Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-single-slide hero-overlay">
                        <div className="hero-slider-item bg-img slidertwo">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="hero-slider-content slide-2 text-center">
                                            <h1 className="slide-title">Recharge Yourself</h1>
                                            <p className="slide-desc text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>	<Link to="/" className="theme-btn">Get Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-single-slide hero-overlay">
                        <div className="hero-slider-item bg-img sliderthree">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="hero-slider-content slide-3 text-center">
                                            <h1 className="slide-title">Recharge Yourself</h1>
                                            <p className="slide-desc text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                            <Link to="/" className="theme-btn">Get Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>
        )
    }
}
export default HomeSlider
