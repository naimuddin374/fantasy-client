import React from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import Moment from 'react-moment';
import { textLimit } from './../util/helper';

class NewsEvents extends React.Component {
    state = {
        events: {}
    }
    componentDidMount() {
        Axios.get('api/news-event')
            .then(res => {
                this.setState({
                    events: res.data
                })
            })
    }
    render() {
        let { events } = this.state
        return (
            <section className="news-event-area mt-5 full-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2">
                            <div className="section-title fantasy-section-title text-center pb-40">
                                <h2>News & Events</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {Object.keys(events).length !== 0 &&
                            events.slice(0, 30).map(item => (
                                <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
                                    <div className="single-news">
                                        <Link to={`/news-event-detail/id`}>
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
                    {/* <div className="row">
                        <div className="col-md-8 offset-md-2 col-lg-8 offset-lg-2">
                            <div className="view-all-blog-post text-center mt-5">
                                <Link to="/" className="theme-btn">View All</Link>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        )
    }
}
export default NewsEvents