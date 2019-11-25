import React from 'react'
import Slider from "react-slick"
import CircleShape from './CircleShape';
import Axios from 'axios';
import * as Types from '../../store/actions/types'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Gallery extends React.Component {
    state = {
        images: [],
        imageSrc: [],
        photoIndex: 0,
        isOpen: false, 
        className: this.props.className
    }
    componentDidMount() {
        Axios.get(`api/gallery/${window.location.pathname.substring(1)}`)
            .then(res => {
                let imgSrc = []
                res.data.map(item => {
                    imgSrc.push(Types.API_URL + item.image)
                })
                this.setState({
                    images: res.data,
                    imageSrc: imgSrc,
                })
            })
    }
    render() {
        let { imageSrc, images, photoIndex, isOpen, className } = this.state
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
                            <div className={`section-title-small-text ${className}-section-title-small-text mb-40`}>
                                <h2>Gallery</h2>
                            </div>
                        </div>
                    </div>
                    <div className="fantasy-gallery-slider2">
                        <Slider {...settings}>
                            {Object.keys(images).length !== 0 &&
                                images.map((item, index) => (
                                    <div className="col-md-12" key={item + '.' + index}>
                                        <a className="project-gallery popup" onClick={() => this.setState({ photoIndex: index, isOpen: true })}>
                                            <img src={Types.API_URL + item.image} alt="gallery" />
                                        </a>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>

                    {isOpen && (
                        <Lightbox
                            mainSrc={imageSrc[photoIndex]}
                            nextSrc={imageSrc[(photoIndex + 1) % imageSrc.length]}
                            prevSrc={imageSrc[(photoIndex + imageSrc.length - 1) % imageSrc.length]}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() => this.imageChangeIndexHandler({ photoIndex: (photoIndex + imageSrc.length - 1) % imageSrc.length })}
                            onMoveNextRequest={() => this.imageChangeIndexHandler({ photoIndex: (photoIndex + 1) % imageSrc.length })}
                        />
                    )}
                </div>
            </section >
        )
    }
}
export default Gallery
