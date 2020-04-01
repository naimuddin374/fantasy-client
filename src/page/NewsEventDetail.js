import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import Moment from 'react-moment';
import { textLimit } from './../util/helper';
import { API_URL } from './../store/actions/types';

class NewsEventDetail extends Component {
    state = {
        events: {},
        eventsDetail: {},
    }
    UNSAFE_componentWillReceiveProps(props) {
        Axios.get(`${API_URL}api/news-event/detail/${props.match.params.id}`)
            .then(res => {
                this.setState({
                    eventsDetail: res.data.detail,
                    events: res.data.data
                })
            })
        window.scrollTo(0, 0)
    }
    componentDidMount() {
        Axios.get(`${API_URL}api/news-event/detail/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    eventsDetail: res.data.detail,
                    events: res.data.data
                })
            })
        window.scrollTo(0, 0)
    }
    render() {
        let { events, eventsDetail } = this.state
        return (
            <Fragment>
                <section className="single-blog-page section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                {Object.keys(eventsDetail).length !== 0 &&
                                    eventsDetail.map(item => (
                                        <div className="blog-details-page-inner-content" key={item.id}>
                                            <div className="single-news single-page-blog-image text-center">
                                                <img className="top-left-right-radius" src={item.cover_image ? API_URL + item.cover_image : API_URL + item.image} alt="news" />
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
                                    ))}
                            </div>
                            <div className="col-lg-3">
                                <h3 className="mb-3">Latest News</h3>
                                {Object.keys(events).length !== 0 &&
                                    events.filter(fItem => fItem.id !== this.props.match.params.id).slice(0, 2).map(item =>
                                        <div className="single-news" key={item.id}>
                                            <Link to={`${process.env.PUBLIC_URL}/news-event-detail/${item.id}`}>
                                                <img className="top-left-right-radius" src={API_URL + item.image} alt="news" />
                                            </Link>
                                            <div className="latest-news-content bottom-left-right-radius">
                                                <h4><Link to={`${process.env.PUBLIC_URL}/news-event-detail/${item.id}`}>{item.title}</Link></h4>
                                            </div>
                                            <div className="newshap">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/newshap.png`} alt="new shape" />
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}
export default NewsEventDetail
