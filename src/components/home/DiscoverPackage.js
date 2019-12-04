import React from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import Axios from 'axios';
import { API_URL } from '../../store/actions/types';


class DiscoverPackage extends React.Component {
	state = {
		services: {}
	}
	componentDidMount() {
		Axios.get(`${API_URL}api/service`)
			.then(res => {
				this.setState({
					services: res.data
				})
			})
	}
    render() {
		let { services} = this.state
		let settings = {
			loop: true,
			fade: false,
			speed: 1000,
			rows: 1,
			dots: true,
			autoplay: true,
			arrows: false,
			slidesToShow: 3,
			slidesToScroll: 3,
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
            <section className="discover-area section-padding full-bg">
		<div className="container">
			<div className="row">
				<div className="col-lg-12 col-md-12">
					<div className="section-title fantasy-section-title mb-40">
						<h2>Discover parks & resorts</h2>
					</div>
				</div>
			</div>
				<div className="discover-carousel-wrapper">
							<Slider {...settings}>
							{Object.keys(services).length !== 0 && 
								services.map(item => (
							<div className="col-lg-12 col-md-4" key={item.id}>
					<div className="single-discover-carousel">
											<Link to={`/${item.hyperlink}`}><img src={item.image ? item.image : `${process.env.PUBLIC_URL}/assets/images/resorts/resort1.png`} alt="resorts" /></Link>
						<div className="resport-open-close">
								<span className="offer-shape">{item.open_time}</span>
						</div>
						<div className="resort-heading-content">
							<Link to={`/${item.hyperlink}`}><h3>{item.title}</h3></Link>
							<h6>{item.open_time}</h6>
						</div>
						<div className="resorts-linked-btn">
												<Link to={`/${item.hyperlink}`}>
									<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
										viewBox="0 0 32 32">
									<path className="st0" d="M27.1,18.3L13.7,4.9c-0.4-0.4-1-0.4-1.4,0L10.2,7C9.8,7.3,9.8,7.9,10,8.3c0.4,0.5,0.3,1.3-0.1,1.7
										c-0.4,0.4-1.1,0.5-1.7,0.1C7.9,9.8,7.3,9.8,7,10.2l-2.1,2.1c-0.4,0.4-0.4,1,0,1.4l4.9,4.9c0,0,0,0,0,0c0,0,0,0,0,0l8.5,8.5
										c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l2.1-2.1c0.4-0.4,0.4-1,0-1.4c-0.6-0.6-0.6-1.4-0.1-1.9c0.5-0.5,1.4-0.5,1.9,0.1
										c0.4,0.4,1,0.4,1.4,0l2.1-2.1C27.5,19.3,27.5,18.7,27.1,18.3z M7,13l0.9-0.9c1.2,0.4,2.5,0.2,3.5-0.7c0.9-0.9,1.2-2.3,0.7-3.4L13,7
										l3.5,3.5l-6,6L7,13z M24.2,19.8c-1.3-0.7-2.9-0.5-3.9,0.5c-1,1-1.2,2.7-0.5,3.9L19,25l-7.1-7.1l6-6L25,19L24.2,19.8z"/>
									</svg>
								<p>Ticket</p>
							</Link>
												<Link to={`/${item.hyperlink}`}>
									<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
										 viewBox="0 0 32 32">
									<g id="Path_2176">
										<path className="st0" d="M13.6,26.5c-0.2,0-0.3,0-0.5,0c-1.1-0.2-2-1-2.2-2.1L7.6,9.2c-0.3-1.8,0.9-3.4,2.6-3.6
											c0.8-0.1,1.7,0.1,2.4,0.7l11.1,10.6c0.8,0.8,1.1,1.9,0.6,3c-0.4,1.2-1.5,2-2.8,2.1L18.7,22c-0.4,0-0.7,0.2-0.9,0.6L16.2,25
											C15.6,25.9,14.6,26.5,13.6,26.5z M10.6,7.5c-0.1,0-0.1,0-0.2,0c-0.6,0.1-1,0.7-0.9,1.3l3.2,15.1c0.1,0.4,0.4,0.5,0.6,0.6
											c0.3,0.1,0.8-0.1,1.1-0.6l1.5-2.4c0.6-0.9,1.5-1.5,2.5-1.5l2.8-0.1c0.6,0,0.9-0.4,1-0.8c0.1-0.2,0.2-0.6-0.2-0.9l-11-10.5
											C11.1,7.6,10.9,7.5,10.6,7.5z"/>
									</g>
									</svg>
								<p>Direction</p>
							</Link>
												<Link to={`/${item.hyperlink}`}>
								<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
									viewBox="0 0 32 32">
								<g>
									<path className="st0" d="M27.9,11.6H27l-1.5-5.1c-0.3-0.9-1.1-1.5-2-1.5H8.5c-0.9,0-1.7,0.6-2,1.5L5,11.6H4.1c-0.7,0-1.3,0.6-1.3,1.3v0
										c0,0.7,0.6,1.3,1.3,1.3h0.4v6.7c0,1.2,0.9,2.1,2.1,2.1h0.3v2.2c0,1,0.8,1.9,1.9,1.9H9c1,0,1.9-0.8,1.9-1.9v-2.2H21v2.2
										c0,1,0.8,1.9,1.9,1.9h0.2c1,0,1.9-0.8,1.9-1.9v-2.2h0.4c1.2,0,2.1-0.9,2.1-2.1v-6.7h0.4c0.7,0,1.3-0.6,1.3-1.3v0
										C29.2,12.1,28.6,11.6,27.9,11.6z M8.5,7.1l15,0l1.6,5.3H6.9L8.5,7.1z M6.5,20.8l0-6.3h18.9l0,6.4L6.5,20.8z"/>
									<circle className="st0" cx="10.8" cy="17.6" r="2.2"/>
									<circle className="st0" cx="21.2" cy="17.6" r="2.2"/>
								</g>
								</svg>
								<p>parking</p>
							</Link>
						</div>
					</div>
					</div>
								))
							}
							</Slider>
				</div>
		</div>
	</section>
        )
    }
}
export default DiscoverPackage
