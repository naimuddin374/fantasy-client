import React from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import Axios from 'axios';
import { API_URL } from '../../store/actions/types';
import Loading from '../layout/Loading';

class Things extends React.Component {
    state = {
        rides: {},
        loading: true
    }
    componentDidMount() {
        this.setState({
            loading: true
        })
        Axios.get(`${API_URL}api/ride`)
            .then(res => {
                this.setState({
                    rides: res.data,
                    loading: false
                })
            })
    }
    render() {
        function SliderPrevArrow(props) {
            return <div onClick={props.onClick} className="slick-prev fantasy-gallery-prev"><i className="fa fa-long-arrow-left" aria-hidden="true"></i></div>
        }
        function SliderNextArrow(props) {
            return <div onClick={props.onClick} className="slick-next fantasy-gallery-next"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></div>
        }
        let settings = {
            loop: true,
            fade: false,
            speed: 1000,
            rows: 1,
            dots: false,
            autoplay: true,
            arrows: false,
            slidesToShow: 5,
            slidesToScroll: 5,
            prevArrow: <SliderPrevArrow />,
            nextArrow: <SliderNextArrow />,
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
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
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
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
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
        let { rides, loading } = this.state
        return (
            <section className="things-area section-padding-top full-bg home-things-to-do">
                <div className="container">

                    <div className="row row-center row-responsive-thing">
                        <div className="col-lg-8 col-md-8">
                            <div className="section-title fantasy-section-title mb-40 things-to-do-title" id="home-thing-to-title">
                                <h2>Things To Do</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="show-all-content-area text-right" id="show-content">
                                <Link to={`${process.env.PUBLIC_URL}/things-to-do`}>View All</Link>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="things-wrapper">
                    {loading ? <Loading /> :
                        <Slider {...settings}>
                            {Object.keys(rides).length !== 0 &&
                                rides.map(item => (Number(item.slide) === 1 &&
                                    <div className="home-thing-to-do" key={item.id}>
                                        <div className="single-things">
                                            <div className="img-things-link">
                                                <Link to={`${process.env.PUBLIC_URL}/ticket/${item.id}`}><img src={API_URL + item.image} alt="thins img" /></Link>
                                            </div>
                                            <div className="thing-offer">
                                                <span className="offer-shape">Ride</span>
                                            </div>
                                            <Link to={`${process.env.PUBLIC_URL}/ticket/${item.id}`}>{item.title}</Link>
                                            <div className="gradient-bottomshape"></div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>}
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 text-center mt-5">
                            <Link to={`${process.env.PUBLIC_URL}/ticket`} className="theme-btn">Get Ticket</Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Things
