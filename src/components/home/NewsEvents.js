import React from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import Axios from 'axios';
import { API_URL } from '../../store/actions/types';
import Loading from '../layout/Loading';
import { textLimit } from '../../util/helper'
import Moment from 'react-moment';

class Things extends React.Component {
    state = {
        data: {},
        loading: true
    }
    componentDidMount() {
        this.setState({
            loading: true
        })
        Axios.get(`${API_URL}api/news-event`)
            .then(res => {
                this.setState({
                    data: res.data,
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
            autoplay: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: <SliderPrevArrow />,
            nextArrow: <SliderNextArrow />,
            responsive: [
                {
                    breakpoint: 1920,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
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
        let { data, loading } = this.state
        return (
            <section className="things-area section-padding-top full-bg home-things-to-do home-news-events-area">
                <div className="container">

                    <div className="row row-center row-responsive-thing">
                        <div className="col-lg-8 col-md-8">
                            <div className="section-title fantasy-section-title mb-40 things-to-do-title" id="home-thing-to-title">
                                <h2>News & Events</h2>
                            </div>
                        </div>
                    </div>

                    <div className="news-events-area">
                        {loading ? <Loading /> :
                            <Slider {...settings}>
                                {Object.keys(data).length !== 0 &&
                                    data.map(item =>
                                        <div className="single-news" key={item.id}>
                                            <Link to={`${process.env.PUBLIC_URL}/news-event-detail/${item.id}`}>
                                                <img className="top-left-right-radius" src={API_URL + item.image} alt="news" />
                                            </Link>
                                            <div className="latest-news-content bottom-left-right-radius">
                                                <span>
                                                    <Moment format="D MMM YYYY" withTitle>
                                                        {item.created_at}
                                                    </Moment>
                                                </span>
                                                <h4><Link to={`${process.env.PUBLIC_URL}/news-event-detail/${item.id}`}>{item.title}</Link></h4>
                                                <p>{textLimit(item.description, 80)}</p>
                                                <Link to={`${process.env.PUBLIC_URL}/news-event-detail/${item.id}`} className="read-more-btn">Read More</Link>
                                            </div>
                                            <div className="newshap">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/newshap.png`} alt="new shape" />
                                            </div>
                                        </div>
                                    )
                                }
                            </Slider>}
                    </div>

                    <div className="row">
                        <div className="col-md-8 offset-md-2 col-lg-8 offset-lg-2">
                            <div className="view-all-blog-post text-center mt-5">
                                <Link to={`${process.env.PUBLIC_URL}/news-events`} className="theme-btn">View All</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Things
