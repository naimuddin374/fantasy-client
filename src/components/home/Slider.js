import React from 'react'
import Slider from "react-slick"
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { textLimit } from '../../util/helper'
import { API_URL } from '../../store/actions/types'
import Loading from '../layout/Loading'


class HomeSlider extends React.Component {
    state = {
        sliders: {},
        loading: true
    }
    componentDidMount() {
        this.setState({
            loading: true
        })
        Axios.get(`${API_URL}api/home-slider`)
            .then(res => {
                this.setState({
                    sliders: res.data,
                    loading: false
                })
            })
    }
    render() {
        let settings = {
            fade: true,
            speed: 1000,
            dots: false,
            arrows: false,
            autoplay: false,
        }
        let { sliders, loading } = this.state
        return (
            <section className="slider-area">
                {loading ? <Loading /> :
                    <Slider {...settings}>
                        {Object.keys(sliders).length !== 0 &&
                            sliders.map(item => (
                                <div className="hero-single-slide hero-overlay" key={item.id}>
                                    <div className="hero-slider-item bg-img home-slider d-none d-lg-block" style={{ background: `url(${API_URL + item.image})` }}>
                                        <div className="container d-none d-lg-block">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="hero-slider-content slide-1 text-center">
                                                        <h1 className="slide-title">{item.title}</h1>
                                                        <p className="slide-desc text-white">{textLimit(item.description, 150)}</p>
                                                        {item.link && <Link to={`${process.env.PUBLIC_URL}/${item.link}`} className="theme-btn">Get Details</Link>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hero-slider-item bg-img home-slider d-block d-lg-none" style={{ background: `url(${API_URL + item.image_sm})` }}>
                                        <div className="container d-block d-lg-none">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="hero-slider-content slide-1 text-center">
                                                        <h1 className="slide-title">{item.title} MOBILE</h1>
                                                        <p className="slide-desc text-white">{textLimit(item.description, 150)}</p>
                                                        {item.link && <Link to={`${process.env.PUBLIC_URL}/${item.link}`} className="theme-btn">Get Details</Link>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>}
            </section>
        )
    }
}
export default HomeSlider
