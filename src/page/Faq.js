import React from 'react'
import Axios from 'axios'
import { API_URL } from './../store/actions/types';
import ReactHtmlParser from 'react-html-parser';
import Loading from '../components/layout/Loading';

class Faq extends React.Component {
    state = {
        faqs: {},
        loading: true
    }
    componentDidMount() {
        window.scrollTo(0, 0)
        this.setState({
            loading: true
        })

        Axios.get(`${API_URL}api/faq`)
            .then(res => {
                this.setState({
                    faqs: res.data,
                    loading: false
                })
            })
    }
    render() {
        let { faqs, loading } = this.state
        return (
            <section className="fantasy-faq section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2">
                            <div className="section-title-small-text text-center mb-4 faq-section-title">
                                <h2>FAQ</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="frequently-asked-question-wrapper">
                                <div className="frequently-asked-title">
                                    <div className="faq-main for-rent mgtop50">
                                        {loading ? <Loading /> :
                                            <div className="accordion mgtop16 faq-area" data-wow-delay=".2s" id="accordionExample">
                                                {Object.keys(faqs).length !== 0 &&
                                                    faqs.map((item, index) => (
                                                        <div className="card faq-inner-content" key={item.id}>
                                                            <div className="card-header faq-heading" id="headingOne">

                                                                <a data-toggle="collapse" className={index !== 0 ? "collapsed" : ''} data-target={`#collapseOne-${item.id}`} href="#blank" aria-expanded="true" aria-controls={`collapseOne-${item.id}`}>
                                                                    {item.title}
                                                                </a>
                                                            </div>
                                                            <div id={`collapseOne-${item.id}`} className={index === 0 ? "collapse show" : "collapse"} aria-labelledby="headingOne" data-parent="#accordionExample">
                                                                <div className="card-body faq-body">
                                                                    <p>{ReactHtmlParser(item.description)}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                        }
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

