import React from 'react'
import { Link } from 'react-router-dom'

class FantasyFaq extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <section className="fantasy-faq section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2">
                            <div className="section-title-small-text fantasy-section-title-small-text text-center mb-4">
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
                                            <div className="card faq-inner-content">
                                                <div className="card-header faq-heading" id="headingOne"> <a data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    How to contact us
                                        </Link>
                                                </div>
                                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                    <div className="card-body faq-body">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, mi a sagittis sodales, sapien mi iaculis odio, ac tincidunt turpis sem sit amet eros Lorem ipsum dolor sit amet.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card faq-inner-content">
                                                <div className="card-header faq-heading" id="headingThree"> <a className="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    How will I get to Fantasy Kingdom?
                                        </Link>
                                                </div>
                                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                    <div className="card-body faq-body">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, mi a sagittis sodales, sapien mi iaculis odio, ac tincidunt turpis sem sit amet eros Lorem ipsum dolor sit amet.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card faq-inner-content">
                                                <div className="card-header faq-heading" id="headingFour"> <a className="collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    Is Outside food allowed in Fantasy Kingdom?
                                        </Link>
                                                </div>
                                                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                                    <div className="card-body faq-body">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, mi a sagittis sodales, sapien mi iaculis odio, ac tincidunt turpis sem sit amet eros Lorem ipsum dolor sit amet.</p>
                                                    </div>
                                                </div>
                                            </div>
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
export default FantasyFaq
