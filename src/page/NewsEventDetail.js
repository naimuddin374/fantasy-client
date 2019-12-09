import React from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import Moment from 'react-moment';
import { textLimit } from './../util/helper';
import { API_URL } from './../store/actions/types';

class NewsEventDetail extends React.Component {
    state = {
        events: {},
        eventsDetail: {},
    }
    UNSAFE_componentWillReceiveProps(props) {
        Axios.get(`${API_URL}api/news-event/detail/${props.match.params.id}`)
            .then(res => {
                this.setState({
                    eventsDetail: res.data
                })
            })
        window.scrollTo(0, 0)
    }
    componentDidMount() {
        Axios.get(`${API_URL}api/news-event`)
            .then(res => {
                this.setState({
                    events: res.data
                })
            })
        Axios.get(`${API_URL}api/news-event/detail/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    eventsDetail: res.data
                })
            })
    }
    render() {
        let { events, eventsDetail } = this.state
        return (
            <div>
                <section className="single-blog-page section-padding">
                    {Object.keys(eventsDetail).length !== 0 &&
                        eventsDetail.map(item => (
                            <div className="container" key={item.id}>
                                <div className="row">
                                    <div className="col-lg-10 col-md-10 offset-lg-1 offset-md-1">
                                        <div className="blog-details-page-inner-content">
                                            <div className="single-news single-page-blog-image text-center">
                                                <img className="top-left-right-radius" src={API_URL + item.image} alt="news" />
                                                <div className="blog-details-content pt-4">
                                                    <span>{item.created_at}</span>
                                                    <h3 className="pb-3">{item.title}</h3>
                                                    <p>{item.description}</p>
                                                </div>
                                                <div className="newshap">
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/newshap.png`} alt="new shape" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </section>


                <section className="news-event-area mt-5 full-bg">
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
                                    item.id !== this.props.match.params.id &&
                                    <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
                                        <div className="single-news">
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
                                                <p>{textLimit(item.description, 85)}</p>
                                                <Link to={`${process.env.PUBLIC_URL}/news-event-detail/${item.id}`} className="read-more-btn">Read More</Link>
                                            </div>
                                            <div className="newshap">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/newshap.png`} alt="new shape" />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="row mb-5">
                            <div className="col-md-8 offset-md-2 col-lg-8 offset-lg-2">
                                <div className="view-all-blog-post text-center mt-5">
                                    <Link to={`${process.env.PUBLIC_URL}/news-events`} className="theme-btn">View All</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default NewsEventDetail
