import React from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { API_URL } from '../../store/actions/types'
import ReactHtmlParser from 'react-html-parser';

class Faq extends React.Component {
    state = {
        faqs: {},
        className: this.props.className
    }
    componentDidMount() {
        Axios.get(`${API_URL}api/faq${window.location.pathname}`)
            .then(res => {
                this.setState({
                    faqs: res.data
                })
            })
    }
    render() {
        let { faqs, className } = this.state
        return (
            <section className="fantasy-faq section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2">
                            <div className={`section-title-small-text ${className}-section-title-small-text text-center mb-4`}>
                                <h2>FAQ</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="frequently-asked-question-wrapper">
                                <div class="frequently-asked-title">
                                    <div class="faq-main for-rent mgtop50">
                                        <div class="accordion mgtop16 faq-area" data-wow-delay=".2s" id="accordionExample">
                                            {Object.keys(faqs).length !== 0 &&
                                                faqs.map((item, index) => (
                                                    <div class="card faq-inner-content" key={item.id}>
                                                        <div class="card-header faq-heading" id="headingOne">
                                                            <a href="#blank" data-toggle="collapse" data-target={`#collapseOne-${item.id}`} aria-expanded="true" aria-controls={`collapseOne-${item.id}`}>
                                                                {item.title}
                                                            </a>
                                                        </div>
                                                        <div id={`collapseOne-${item.id}`} class={index === 0 ? "collapse show" : "collapse"} aria-labelledby="headingOne" data-parent="#accordionExample">
                                                            <div class="card-body faq-body">
                                                                <p>{ReactHtmlParser(item.description)}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2">
                                        <div className="allfaq-show mt-5 text-center"> <Link to={`${process.env.PUBLIC_URL}/faq`} className="theme-btn">View All</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Faq
