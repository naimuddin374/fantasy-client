import React from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import Moment from 'react-moment';
import { textLimit } from './../util/helper';
import { API_URL } from '../store/actions/types';
import Loading from './../components/layout/Loading';

class NewsEvents extends React.Component {
    state = {
        events: {},
        loading: true
    }
    componentDidMount() {
        this.setState({
            loading: true
        })
        Axios.get(`${API_URL}api/news-event`)
            .then(res => {
                this.setState({
                    events: res.data,
                    loading: false
                })
            })
    }
    render() {
        let { events, loading } = this.state
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
                    {loading ? <Loading /> :
                        <div className="row">
                            {Object.keys(events).length !== 0 &&
                                events.slice(0, 30).map(item => (
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
                        </div>}
                </div>
            </section>
        )
    }
}
export default NewsEvents
