import React from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import Moment from 'react-moment';
import { textLimit } from './../util/helper';
import { API_URL } from './../store/actions/types';

class NewsEventDetail extends React.Component {
    state = {
        events: {}
    }
    componentDidMount() {
        // Axios.get('api/news-event')
        //     .then(res => {
        //         this.setState({
        //             events: res.data
        //         })
        //     })
    }
    render() {
        let { events } = this.state
        console.log('OK', this.props.match.params.id)
        // console.log('detailId', this.props.params.id)
        return (
            <div>
                <h1>Welcome</h1>
                {/* <section className="single-blog-page section-padding">
                    {Object.keys(events).length !== 0 &&
                        events.map(item => (
                            item.id === this.props.params.id &&
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-10 col-md-10 offset-lg-1 offset-md-1">
                                        <div className="blog-details-page-inner-content">
                                            <div className="single-news single-page-blog-image">
                                                <img className="top-left-right-radius" src={API_URL + item.image} alt="news" />
                                                <div className="blog-details-content pt-4">
                                                    <span>{item.created_at}</span>
                                                    <h3 className="pb-3">{item.title}</h3>
                                                    <p>{item.description}</p>
                                                </div>
                                                <div className="newshap">
                                                    <img src="assets/images/newshap.png" alt="new shape" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </section> */}


                {/* <section className="news-event-area mt-5 full-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2">
                                <div className="section-title fantasy-section-title text-center pb-40">
                                    <h2>Recent News & Events</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {Object.keys(events).length !== 0 &&
                                events.slice(0, 6).map(item => (
                                    <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
                                        <div className="single-news">
                                            <Link to={`/news-event-detail/${item.id}`}>
                                                <img className="top-left-right-radius" src={item.image} alt="news" />
                                            </Link>
                                            <div className="latest-news-content bottom-left-right-radius">
                                                <span>
                                                    <Moment format="D MMM YYYY" withTitle>
                                                        {item.created_at}
                                                    </Moment>
                                                </span>
                                                <h4><Link to={`/news-event-detail/${item.id}`}>{item.title}</Link></h4>
                                                <p>{textLimit(item.description, 85)}</p>
                                                <Link to={`/news-event-detail/${item.id}`} className="read-more-btn">Read More</Link>
                                            </div>
                                            <div className="newshap">
                                                <img src="./assets/images/newshap.png" alt="new shape" />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="row">
                            <div className="col-md-8 offset-md-2 col-lg-8 offset-lg-2">
                                <div className="view-all-blog-post text-center mt-5">
                                    <Link to="/news-events" className="theme-btn">View All</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>
        )
    }
}
export default NewsEventDetail
