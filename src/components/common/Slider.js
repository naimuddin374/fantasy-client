import React from 'react'
import Slider from "react-slick"
import Axios from 'axios'
import { textLimit } from './../../util/helper';
import { API_URL } from '../../store/actions/types';

class HomeSlider extends React.Component {
    state = {
        sliders: {},
    }
    componentDidMount() {
        Axios.get(`api/slider/${window.location.pathname.substring(1)}`)
            .then(res => {
                this.setState({
                    sliders: res.data
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
        let { sliders } = this.state
        return (
            <section className="slider-area">
                <Slider {...settings}>
                    {Object.keys(sliders).length !== 0 &&
                        sliders.map(item => (
                            <div className="hero-single-slide hero-overlay" key={item.id}>
                                <div className="hero-slider-item bg-img home-slider" style={{ background: `url(${API_URL+item.image})` }}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="hero-slider-content slide-1 text-center">
                                                    <h1 className="text-white wow fadeInUp" data-wow-delay=".3s">{item.title}</h1>
                                                    <p className="text-white mt-3 wow fadeInUp" data-wow-delay=".6s">{textLimit(item.description, 150)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </section>
        )
    }
}
export default HomeSlider
