import React from 'react'
import Slider from "react-slick"
import CircleShape from './CircleShape';
import Axios from 'axios';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_URL } from '../../store/actions/types';
import Loading from '../layout/Loading';

class Gallery extends React.Component {
    state = {
        images: [],
        imageSrc: [],
        photoIndex: 0,
        isOpen: false,
        className: this.props.className,
        loading: true
    }
    componentDidMount() {
        this.setState({
            loading: true
        })
        Axios.get(`${API_URL}api/gallery${window.location.pathname}`)
            .then(res => {
                let imgSrc = []
                if (Object.keys(res.data).length !== 0) {
                    res.data.map(item => imgSrc.push(API_URL + item.image))
                    this.setState({
                        images: res.data,
                        imageSrc: imgSrc,
                        loading: false
                    })
                }
            })
    }
    render() {
        function SliderPrevArrow(props) {
            return <div onClick={props.onClick} className="slick-prev fantasy-gallery-prev"><i className="fa fa-long-arrow-left" aria-hidden="true"></i></div>
        }
        function SliderNextArrow(props) {
            return <div onClick={props.onClick} className="slick-next fantasy-gallery-next"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></div>
        }
        let { imageSrc, images, photoIndex, isOpen, className, loading } = this.state
        let settings = {
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            rows: 2,
            arrows: true,
            prevArrow: <SliderPrevArrow />,
            nextArrow: <SliderNextArrow />,
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
                            <div className={`section-title-small-text ${className}-section-title-small-text mb-40`}>
                                <h2>Gallery</h2>
                            </div>
                        </div>
                    </div>
                    <div className="fantasy-gallery-slider2">
                        {loading ? <Loading /> :
                            <Slider {...settings}>
                                {Object.keys(images).length !== 0 &&
                                    images.map((item, index) => (
                                        <div className="col-md-12" key={item + '.' + index}>
                                            <span className="project-gallery popup link-btn" onClick={() => this.setState({ photoIndex: index, isOpen: true })}>
                                                <img src={API_URL + item.image} alt="gallery" />
                                            </span>
                                        </div>
                                    ))
                                }
                            </Slider>}
                    </div>

                    {isOpen && (
                        <Lightbox
                            mainSrc={imageSrc[photoIndex]}
                            nextSrc={imageSrc[(photoIndex + 1) % imageSrc.length]}
                            prevSrc={imageSrc[(photoIndex + imageSrc.length - 1) % imageSrc.length]}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() => this.setState({ photoIndex: (photoIndex + imageSrc.length - 1) % imageSrc.length })}
                            onMoveNextRequest={() => this.setState({ photoIndex: (photoIndex + 1) % imageSrc.length })}
                        />
                    )}
                </div>
            </section >
        )
    }
}
export default Gallery
