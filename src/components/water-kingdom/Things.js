import React from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import Axios from 'axios';

class Things extends React.Component {
    state = {
        ThingsToDo: {}
    }
    componentDidMount() {
        Axios.get('api/things-to-do')
            .then(res => {
                this.setState({
                    ThingsToDo: res.data
                })
            })
    }
    render() {
        let settings = {
            loop: true,
            fade: false,
            speed: 1000,
            rows: 1,
            dots: false,
            autoplay: true,
            arrows: false,
            centerMode: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            responsive: [
                {
                    breakpoint: 1920,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
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
        let { ThingsToDo } = this.state
        return (
            <section className="things-area section-padding-top full-bg">
                <div className="container">
                    <div className="row row-center">
                        <div className="col-lg-8 col-md-8">
                            <div className="section-title water-section-title mb-40 things-to-do-title">
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
                        {Object.keys(ThingsToDo).length !== 0 &&
                            ThingsToDo.map(item => (
                                <div className="col-lg-12 col-md-4" key={item.id}>
                                    <div className="single-things">
                                        <div className="img-things-link">
                                            <Link to={`/${item.link}`}><img src={item.image} alt="thins img" /></Link>
                                        </div>
                                        <div className="thing-offer">
                                            <span className="offer-shape">Ride</span>
                                        </div>
                                        <Link to={`/${item.link}`}>{item.title}</Link>
                                        <div className="gradient-bottomshape"></div>
                                    </div>
                                </div>
                            ))
                        }
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
export default Things
