import React from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { API_URL } from '../../store/actions/types'

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
                                <div className="frequently-asked-title">
                                    <div className="faq-main for-rent mgtop50">
                                        <div className="accordion mgtop16 faq-area" data-wow-delay=".2s" id="accordionExample">
                                            {Object.keys(faqs).length !== 0 &&
                                                faqs.slice(0, 4).map((item, index) => (
                                                    <div className="card faq-inner-content" key={item.id}>
                                                        <div className="card-header faq-heading" id="headingFour">
                                                            <span className="collapsed link-btn" data-toggle="collapse" data-target={`#collapseFour_${item.id}`} aria-expanded="false" aria-controls={`collapseFour_${item.id}`}>
                                                                {item.title} </span>
                                                        </div>
                                                        <div id={`collapseFour_${item.id}`} className={index === 0 ? 'collapse show' : 'collapse'} aria-labelledby="headingFour" data-parent="#accordionExample">
                                                            <div className="card-body faq-body">
                                                                <p>{item.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2">
                                        <div className="allfaq-show mt-5 text-center"> <Link to="/faq" className="theme-btn">View All</Link>
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
