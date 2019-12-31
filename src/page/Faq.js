import React from 'react'
import Axios from 'axios'
import { API_URL } from './../store/actions/types';
import ReactHtmlParser from 'react-html-parser';

class Faq extends React.Component {
    state = {
        faqs: {}
    }
    componentDidMount() {
        window.scrollTo(0, 0)

        Axios.get(`${API_URL}api/faq`)
            .then(res => {
                this.setState({
                    faqs: res.data
                })
            })
    }
    render() {
        let { faqs } = this.state
        return (
            <section class="fantasy-faq section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2">
                            <div class="section-title-small-text text-center mb-4 faq-section-title">
                                <h2>FAQ</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="frequently-asked-question-wrapper">
                                <div class="frequently-asked-title">
                                    <div class="faq-main for-rent mgtop50">
                                        <div class="accordion mgtop16 faq-area" data-wow-delay=".2s" id="accordionExample">
                                            {Object.keys(faqs).length !== 0 &&
                                                faqs.map((item, index) => (
                                                    <div class="card faq-inner-content" key={item.id}>
                                                        <div class="card-header faq-heading" id="headingOne"> 
                                                        <a data-toggle="collapse" data-target={`#collapseOne-${item.id}`} href="#blank" aria-expanded="true" aria-controls={`collapseOne-${item.id}`}>
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Faq

