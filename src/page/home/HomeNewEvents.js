import React from 'react'
import { Link } from 'react-router-dom'

class HomeNewEvents extends React.Component {
    render() {
        return (
            <section className="news-event-area section-padding full-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2">
                            <div className="section-title fantasy-section-title text-center pb-40">
                                <h2>News & Events</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-news">
                                <Link to="/">
                                    <img className="top-left-right-radius" src="./assets/images/news/new1.png" alt="news" />
                                </Link>
                                <div className="latest-news-content bottom-left-right-radius">
                                    <span>7th July, 2019</span>
                                    <h4><Link to="/">Happy hour for every under 5 year children</Link></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus,</p>
                                    <Link to="/" className="read-more-btn">Read More</Link>
                                </div>
                                <div className="newshap">
                                    <img src="./assets/images/newshap.png" alt="new shape" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-news">
                                <Link to="/">
                                    <img className="top-left-right-radius" src="./assets/images/news/new2.png" alt="news" />
                                </Link>
                                <div className="latest-news-content bottom-left-right-radius">
                                    <span>7th July, 2019</span>
                                    <h4><Link to="/">New water park ride has been introduced.</Link></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus,</p>
                                    <Link to="/" className="read-more-btn">Read More</Link>
                                </div>
                                <div className="newshap">
                                    <img src="./assets/images/newshap.png" alt="new shape" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-news">
                                <Link to="/">
                                    <img className="top-left-right-radius" src="./assets/images/news/new3.png" alt="news" />
                                </Link>
                                <div className="latest-news-content bottom-left-right-radius">
                                    <span>7th July, 2019</span>
                                    <h4><Link to="/">Fun games at 'Fun house' started last Sunday</Link></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus,</p>
                                    <Link to="/" className="read-more-btn">Read More</Link>
                                </div>
                                <div className="newshap">
                                    <img src="./assets/images/newshap.png" alt="new shape" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 offset-md-2 col-lg-8 offset-lg-2">
                            <div className="view-all-blog-post text-center mt-5">
                                <Link to="/" className="theme-btn">View All</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default HomeNewEvents
