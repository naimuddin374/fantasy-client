import React from 'react'
import Breadcrumb from './Breadcrumb'
import InnerSearch from './../common/InnerSearch';
import PageContent from './PageContent';
import OurRoom from './OurRoom';
import ContactUs from './ContactUs';
import CircleShape from './../common/CircleShape';


class Atlantis extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <Breadcrumb />
                <InnerSearch className="atlantis" />
                <PageContent />

                <section className="atlantis-room-suites section-padding-bottom relative">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8">
                                <div className="section-title atlantis-section-title mb-40">
                                    <h2>Our Rooms & Suites</h2>
                                </div>
                            </div>
                        </div>
                        <CircleShape />
                    </div>
                </section>
                <OurRoom />

                <OurRoom />

                <ContactUs />
            </div>
        )
    }
}
export default Atlantis
