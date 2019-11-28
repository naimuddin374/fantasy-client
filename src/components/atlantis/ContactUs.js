import React from 'react'

class ContactUs extends React.Component {
    render() {
        return (
            <section className="atlantis-contact-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10  col-md-10 offset-lg-1 offset-md-1">
                            <div className="section-title atlantis-section-title text-center mb-40">
                                <h2>Contact Us</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10  col-md-10 offset-lg-1 offset-md-1">
                            <div className="atlantis-address-content-wrapper">
                                <div className="atlantis-contact-address-area">
                                    <div className="atlantis-address-icon">
                                        <i className="fa fa-phone"></i>
                                    </div>
                                    <div className="atlantis-address-content">
                                        <p>8833786, 9896482</p>
                                    </div>
                                </div>
                                <div className="atlantis-contact-address-area">
                                    <div className="atlantis-address-icon">
                                        <i className="fa fa-mobile"></i>
                                    </div>
                                    <div className="atlantis-address-content">
                                        <p>01913531517, 01977885507, 01937402949, <br />01913531549, 01937402959</p>
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
export default ContactUs
