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
        Axios.get(`${API_URL}api/home-slider`)
            .then(res => {
                this.setState({
                    sliders: res.data,
                    // loading: false
                })
            })
    }
    render() {
        let settings = {
            fade: true,
            speed: 1000,
            dots: false,
            arrows: false,
            autoplay: true,
        }
        let { sliders, loading } = this.state
        return (
            <section className="slider-area">
                {loading ? <Loading /> :
                    <Slider {...settings}>
                        {Object.keys(sliders).length !== 0 &&
                            sliders.map(item => (
                                <div className="hero-single-slide hero-overlay" key={item.id}>
                                    <div className="hero-slider-item bg-img home-slider" style={{ background: `url(${API_URL + item.image})` }}>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="hero-slider-content slide-1 text-center">
                                                        <h1 className="slide-title">{item.title}</h1>
                                                        <p className="slide-desc text-white">{textLimit(item.description, 150)}</p>	<Link to={`${process.env.PUBLIC_URL}/${item.link}`} className="theme-btn">Get Details</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                }
            </section>
        )
    }
}
export default HomeSlider
