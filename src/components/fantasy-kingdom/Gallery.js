import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import { Link } from 'react-router-dom'
import CircleShape from './CircleShape';


class Gallery extends React.Component {
    render() {
        let settings = {
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            rows: 2,
            arrows: false,
            prevArrow: <div className="slick-prev fantasy-gallery-prev"><i className="fa fa-long-arrow-left" aria-hidden="true"></i></div>,
            nextArrow: <div className="slick-next fantasy-gallery-next"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></div>,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }
        return (
            <section className="fantasy-gallery-area section-padding">
                <CircleShape />

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title-small-text fantasy-section-title-small-text mb-40">
                                <h2>Gallery</h2>
                            </div>
                        </div>
                    </div>
                    <div className="fantasy-gallery-slider2">
                        <Slider {...settings}>
                            <div className="col-md-12">
                                <Link to="#" className="project-gallery popup" href="assets/images/gallery/gallery1.png">
                                    <img src="./assets/images/gallery/gallery1.png" alt="gallery" />
                                </Link>
                            </div>
                            <div className="col-md-12">
                                <Link to="#" className="project-gallery popup" href="assets/images/gallery/gallery2.png">
                                    <img src="./assets/images/gallery/gallery2.png" alt="gallery" />
                                </Link>
                            </div>
                            <div className="col-md-12">
                                <Link to="#" className="project-gallery popup" href="assets/images/gallery/gallery3.png">
                                    <img src="./assets/images/gallery/gallery3.png" alt="gallery" />
                                </Link>
                            </div>
                            <div className="col-md-12">
                                <Link to="#" className="project-gallery popup" href="assets/images/gallery/gallery4.png">
                                    <img src="./assets/images/gallery/gallery4.png" alt="gallery" />
                                </Link>
                            </div>
                            <div className="col-md-12">
                                <Link to="#" className="project-gallery popup" href="assets/images/gallery/gallery5.png">
                                    <img src="./assets/images/gallery/gallery5.png" alt="gallery" />
                                </Link>
                            </div>
                            <div className="col-md-12">
                                <Link to="#" className="project-gallery popup" href="assets/images/gallery/gallery6.png">
                                    <img src="./assets/images/gallery/gallery6.png" alt="gallery" />
                                </Link>
                            </div>
                            <div className="col-md-12">
                                <Link to="#" className="project-gallery popup" href="assets/images/gallery/gallery6.png">
                                    <img src="./assets/images/gallery/gallery6.png" alt="gallery" />
                                </Link>
                            </div>
                            <div className="col-md-12">
                                <Link to="#" className="project-gallery popup" href="assets/images/gallery/gallery5.png">
                                    <img src="./assets/images/gallery/gallery5.png" alt="gallery" />
                                </Link>
                            </div>
                            <div className="col-md-12">
                                <Link to="#" className="project-gallery popup" href="assets/images/gallery/gallery4.png">
                                    <img src="./assets/images/gallery/gallery4.png" alt="gallery" />
                                </Link>
                            </div>
                            <div className="col-md-12">
                                <Link to="#" className="project-gallery popup" href="assets/images/gallery/gallery2.png">
                                    <img src="./assets/images/gallery/gallery2.png" alt="gallery" />
                                </Link>
                            </div>
                            <div className="col-md-12">
                                <Link to="#" className="project-gallery popup" href="assets/images/gallery/gallery2.png">
                                    <img src="./assets/images/gallery/gallery2.png" alt="gallery" />
                                </Link>
                            </div>
                            <div className="col-md-12">
                                <Link to="#" className="project-gallery popup" href="assets/images/gallery/gallery1.png">
                                    <img src="./assets/images/gallery/gallery1.png" alt="gallery" />
                                </Link>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section >
        )
    }
}
export default Gallery
