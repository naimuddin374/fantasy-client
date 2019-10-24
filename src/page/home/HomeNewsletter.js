import React from 'react'

class HomeNewsletter extends React.Component {
    render() {
        return (
            <section className="newsletter-area section-padding background-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1">
                            <div className="short-section-title text-center">
                                <h3 className="text-white mb-3">Stay ahead of everyone</h3>
                            </div>
                            <div className="newsletter-content">
                                <form action="#">
                                    <div className="form-group newletterfom-field relative">
                                        <input type="email" name="email" required className="form-control fanstasy-input-field" placeholder="Enter your email Id" />
                                        <div className="submit-btn-field">
                                            <button type="submit" className="submit-btn">Subscribe</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default HomeNewsletter
